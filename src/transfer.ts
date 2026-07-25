/**
 * Transfer tNight from the CLI wallet (seeded from .midnight-state.json) to
 * a destination unshielded address (e.g. your Lace wallet).
 *
 * Usage:
 *   npx tsx src/transfer.ts <destination_mn_addr> [amount]
 *
 * If amount is omitted, transfers the entire tNight balance minus a small
 * reserve for dust registration fees.
 */
import { WebSocket } from 'ws';
import * as Rx from 'rxjs';
import { resolveNetwork, getOrCreateSeed } from './network';
import { createWallet, persistWalletState, unshieldedToken } from './wallet';

// Midnight SDK imports
import { setNetworkId, getNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import {
  MidnightBech32m,
  UnshieldedAddress,
} from '@midnight-ntwrk/wallet-sdk';

// Enable WebSocket for GraphQL subscriptions
// @ts-expect-error Required for wallet sync
globalThis.WebSocket = WebSocket;

// ─── Parse CLI args ────────────────────────────────────────────────────────────

const destArg = process.argv[2];
const amountArg = process.argv[3];

if (!destArg) {
  console.error('\n❌ Usage: npx tsx src/transfer.ts <destination_mn_addr> [amount]\n');
  console.error('  destination_mn_addr  The Lace wallet unshielded address (mn_addr_preprod...)');
  console.error('  amount               Optional tNight amount to transfer (default: all available)\n');
  process.exit(1);
}

if (!destArg.startsWith('mn_addr_')) {
  console.error('\n❌ Destination must be an unshielded address starting with mn_addr_...\n');
  process.exit(1);
}

// ─── Network configuration ─────────────────────────────────────────────────────

const { network, config: networkConfig } = resolveNetwork();
const SEED = getOrCreateSeed(network);

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║              tNight Transfer Script                          ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  console.log(`  Network:     ${network}`);
  console.log(`  Destination: ${destArg}\n`);

  // Step 1: Build and sync the CLI wallet
  console.log('─── Wallet Setup ───────────────────────────────────────────────\n');
  console.log('  Creating CLI wallet from seed...');
  const walletCtx = await createWallet({ network, networkConfig, seed: SEED });

  const restoredCount = Object.values(walletCtx.restored).filter(Boolean).length;
  if (restoredCount > 0) {
    console.log(`  Restored ${restoredCount}/3 child wallets from saved state.`);
  }

  console.log('  Syncing with network...');
  console.log('  ℹ  This may take several minutes. RPC disconnection messages are normal.\n');

  const syncStart = Date.now();
  const syncInterval = setInterval(() => {
    const elapsed = Math.round((Date.now() - syncStart) / 1000);
    process.stdout.write(`\r  ⏳ Still syncing... (${elapsed}s elapsed)   `);
  }, 5000);

  const state = await walletCtx.wallet.waitForSyncedState();
  clearInterval(syncInterval);
  process.stdout.write('\r  ✓ Synced with network.                                      \n');

  // Step 2: Check balance
  const sourceAddress = walletCtx.unshieldedKeystore.getBech32Address();
  const tNightBalance = state.unshielded.balances[unshieldedToken().raw] ?? 0n;
  const dustBalance = state.dust.balance(new Date());

  console.log('\n─── Source Wallet ──────────────────────────────────────────────\n');
  console.log(`  Address: ${sourceAddress}`);
  console.log(`  tNight:  ${tNightBalance.toLocaleString()}`);
  console.log(`  DUST:    ${dustBalance.toLocaleString()}\n`);

  if (tNightBalance === 0n) {
    console.error('  ❌ CLI wallet has 0 tNight. Nothing to transfer.\n');
    await walletCtx.wallet.stop();
    process.exit(1);
  }

  // Step 3: Determine transfer amount
  // Reserve some tNight so the source wallet can still pay for dust registration
  const RESERVE = 1_000_000n; // small reserve
  const maxTransferable = tNightBalance > RESERVE ? tNightBalance - RESERVE : tNightBalance;

  let transferAmount: bigint;
  if (amountArg) {
    transferAmount = BigInt(amountArg);
    if (transferAmount > tNightBalance) {
      console.error(`  ❌ Requested ${transferAmount} but only ${tNightBalance} available.\n`);
      await walletCtx.wallet.stop();
      process.exit(1);
    }
  } else {
    transferAmount = maxTransferable;
    console.log(`  Transferring all available: ${transferAmount.toLocaleString()} tNight`);
  }

  if (transferAmount <= 0n) {
    console.error('  ❌ Transfer amount must be positive.\n');
    await walletCtx.wallet.stop();
    process.exit(1);
  }

  // Step 4: Ensure we have DUST for fees
  if (dustBalance === 0n) {
    console.log('  Waiting for DUST tokens for transaction fees...');
    // Register UTXOs for dust generation if needed
    const dustState = await Rx.firstValueFrom(
      walletCtx.wallet.state().pipe(Rx.filter((s) => s.isSynced)),
    );

    const unregisteredUtxos = dustState.unshielded.availableCoins.filter(
      (c: any) => !c.meta?.registeredForDustGeneration,
    );
    if (unregisteredUtxos.length > 0) {
      console.log(`  Registering ${unregisteredUtxos.length} NIGHT UTXOs for DUST generation...`);
      const recipe = await walletCtx.wallet.registerNightUtxosForDustGeneration(
        unregisteredUtxos,
        walletCtx.unshieldedKeystore.getPublicKey(),
        (payload) => walletCtx.unshieldedKeystore.signData(payload),
      );
      const finalized = await walletCtx.wallet.finalizeRecipe(recipe);
      await walletCtx.wallet.submitTransaction(finalized);
    }

    console.log('  Waiting for DUST to be generated...');
    await Rx.firstValueFrom(
      walletCtx.wallet.state().pipe(
        Rx.throttleTime(5000),
        Rx.filter((s) => s.isSynced),
        Rx.filter((s) => s.dust.balance(new Date()) > 0n),
      ),
    );
    console.log('  DUST tokens ready!\n');
  }

  // Step 5: Parse destination address
  console.log('─── Transfer ──────────────────────────────────────────────────\n');
  console.log(`  Sending ${transferAmount.toLocaleString()} tNight`);
  console.log(`  To: ${destArg}\n`);

  const parsed = MidnightBech32m.parse(destArg);
  const receiverAddress = parsed.decode(UnshieldedAddress, getNetworkId());

  // Step 6: Create and submit transfer transaction
  console.log('  Building transfer transaction...');
  const tokenType = unshieldedToken();

  const recipe = await walletCtx.wallet.transferTransaction(
    [
      {
        type: 'unshielded',
        outputs: [
          {
            type: tokenType.raw,
            receiverAddress,
            amount: transferAmount,
          },
        ],
      },
    ],
    {
      shieldedSecretKeys: walletCtx.shieldedSecretKeys,
      dustSecretKey: walletCtx.dustSecretKey,
    },
    {
      ttl: new Date(Date.now() + 30 * 60 * 1000),
    },
  );

  console.log('  Signing transaction...');
  const signed = await walletCtx.wallet.signRecipe(
    recipe,
    (data) => walletCtx.unshieldedKeystore.signData(data),
  );

  console.log('  Finalizing transaction...');
  const finalized = await walletCtx.wallet.finalizeRecipe(signed);

  console.log('  Submitting transaction...');
  const txId = await walletCtx.wallet.submitTransaction(finalized);

  console.log(`\n  ✅ Transaction submitted successfully!`);
  console.log(`  TX ID: ${txId}\n`);

  console.log('─── Done ──────────────────────────────────────────────────────\n');
  console.log(`  ${transferAmount.toLocaleString()} tNight sent to ${destArg}`);
  console.log('  The recipient should see the balance in Lace after a few minutes.\n');

  await persistWalletState(network, walletCtx);
  await walletCtx.wallet.stop();
}

main().catch((err) => {
  console.error('\n❌ Transfer failed:', err instanceof Error ? err.message : err);
  if (err?.cause) console.error('  Cause:', err.cause.message || err.cause);
  process.exit(1);
});
