import { resolveNetwork, getOrCreateSeed } from './src/network.js';
import { createWallet } from './src/wallet.js';

async function run() {
    const { network, config } = resolveNetwork({ argv: ['node', 'script', '--network', 'preprod'] });
    const seed = getOrCreateSeed(network);
    const walletCtx = await createWallet({ network, networkConfig: config, seed });
    console.log("==================================================");
    console.log("YOUR PREPROD ADDRESS IS:");
    console.log(walletCtx.unshieldedKeystore.getBech32Address().toString());
    console.log("==================================================");
    process.exit(0);
}
run();
