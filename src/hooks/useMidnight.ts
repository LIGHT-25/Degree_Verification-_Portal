import { useState, useCallback, useRef, useEffect } from 'react';
import type { InitialAPI, ConnectedAPI } from '@midnight-ntwrk/dapp-connector-api';

const NETWORK_ID = 'preprod' as const;
const MOCK_MODE = new URLSearchParams(window.location.search).has('mock');

interface MidnightState {
  walletState: 'detecting' | 'no-wallet' | 'ready' | 'connecting' | 'connected' | 'error';
  walletAPI: InitialAPI | undefined;
  wallet: ConnectedAPI | null;
  address: string | null;
  error: string | null;
  debugLog: string[];
}

interface CircuitCallState {
  isCalling: boolean;
  result: string | null;
  txId: string | null;
  error: string | null;
}

function log(setState: React.Dispatch<React.SetStateAction<MidnightState>>, msg: string) {
  console.log('[Midnight]', msg);
  setState((s) => ({ ...s, debugLog: [...s.debugLog.slice(-20), msg] }));
}

function findWallet(): InitialAPI | undefined {
  const midnight = (window as any).midnight;
  if (!midnight) return undefined;
  const allWallets = Object.entries(midnight);
  console.log('[Midnight] window.midnight keys:', allWallets.map(([k, v]: [string, any]) => `${k}(${v?.apiVersion ?? '?'})`));
  const found = allWallets.find(
    ([, w]: [string, any]) => !!w && typeof w === 'object' && typeof w.connect === 'function',
  );
  if (!found) return undefined;
  console.log('[Midnight] Using wallet:', found[0], found[1]?.apiVersion);
  return found[1] as InitialAPI;
}

function extractError(e: any): string {
  if (!e) return 'Unknown error (null)';
  if (typeof e === 'string') return e;
  const msg = e?.message || '';
  const cause = e?.cause?.message || e?.cause?.failure?.message || '';
  const full = msg + ' | ' + cause;
  if (full.includes('reject')) return 'User rejected the connection. Try again and approve in Lace.';
  if (full.includes('network') || full.includes('Network')) return 'Network mismatch. Set Lace to Preprod network.';
  if (full.includes('fetch')) return 'Network error. Check your internet connection.';
  if (full.includes('Insufficient Funds') || full.includes('dust')) return 'Insufficient tDUST. Please get testnet tokens from the Midnight Faucet to pay for transaction fees.';
  if (full.length > 10) return full.slice(0, 300);
  return 'Error occurred. Open browser console (F12) for details.';
}

export function useMidnight() {
  const [state, setState] = useState<MidnightState>({
    walletState: 'detecting',
    walletAPI: undefined,
    wallet: null,
    address: null,
    error: null,
    debugLog: [],
  });

  const [circuitState, setCircuitState] = useState<CircuitCallState>({
    isCalling: false,
    result: null,
    txId: null,
    error: null,
  });

  const walletRef = useRef<ConnectedAPI | null>(null);

  // Detect Lace wallet on mount
  useEffect(() => {
    const found = findWallet();
    if (found) {
      log(setState, 'Wallet detected, ready to connect');
      setState((s) => ({ ...s, walletAPI: found, walletState: 'ready' }));
      return;
    }
    let elapsed = 0;
    const t = setInterval(() => {
      elapsed += 200;
      const w = findWallet();
      if (w) {
        log(setState, 'Wallet detected after waiting');
        setState((s) => ({ ...s, walletAPI: w, walletState: 'ready' }));
        clearInterval(t);
      } else if (elapsed >= 8000) {
        log(setState, 'No wallet found after 8s');
        setState((s) => ({ ...s, walletState: 'no-wallet' }));
        clearInterval(t);
      }
    }, 200);
    return () => clearInterval(t);
  }, []);

  const connect = useCallback(async () => {
    if (!state.walletAPI) {
      log(setState, 'ERROR: No walletAPI');
      setState((s) => ({
        ...s,
        walletState: 'error',
        error: 'Wallet not detected. Install Lace and reload.',
      }));
      return;
    }

    // Step 1: Connecting
    log(setState, 'Step 1: Calling walletAPI.connect("' + NETWORK_ID + '")...');
    setState((s) => ({ ...s, walletState: 'connecting', error: null }));

    let connected: ConnectedAPI;
    try {
      connected = await state.walletAPI.connect(NETWORK_ID);
      log(setState, 'Step 2: Connected! Getting address...');
    } catch (e: any) {
      console.error('[Midnight] connect() failed:', e);
      log(setState, 'Step 1 FAILED: ' + extractError(e));
      setState((s) => ({
        ...s,
        walletState: 'ready',
        error: 'Connection failed: ' + extractError(e),
      }));
      return;
    }

    // Step 2: Get address
    try {
      const addrResult = await connected.getUnshieldedAddress();
      const addr = addrResult.unshieldedAddress;
      log(setState, 'Step 3: Got address: ' + addr);
      console.log('[Midnight] FULL ADDRESS (copy this):', addr);
      walletRef.current = connected;
      setState((s) => ({
        ...s,
        wallet: connected,
        address: addr,
        walletState: 'connected',
        error: null,
      }));
      log(setState, 'DONE: Wallet connected successfully!');
    } catch (e: any) {
      console.error('[Midnight] getUnshieldedAddress() failed:', e);
      log(setState, 'Step 2 FAILED: ' + extractError(e));
      // Still mark as connected even if address fetch fails
      walletRef.current = connected;
      setState((s) => ({
        ...s,
        wallet: connected,
        address: '(address unavailable)',
        walletState: 'connected',
        error: 'Connected but could not get address: ' + extractError(e),
      }));
    }
  }, [state.walletAPI]);

  const disconnect = useCallback(() => {
    walletRef.current = null;
    setState((s) => ({
      ...s,
      wallet: null,
      address: null,
      walletState: 'ready',
      error: null,
      debugLog: [...s.debugLog, 'Disconnected'],
    }));
    setCircuitState({ isCalling: false, result: null, txId: null, error: null });
  }, []);

  const callIncrementCounter = useCallback(
    async (privateSecret: bigint) => {
      if (!state.wallet) {
        setCircuitState({ isCalling: false, result: null, txId: null, error: 'Wallet not connected.' });
        return;
      }

      setCircuitState({ isCalling: true, result: null, txId: null, error: null });

      try {
        const { setNetworkId } = await import('@midnight-ntwrk/midnight-js-network-id');
        const { findDeployedContract } = await import('@midnight-ntwrk/midnight-js-contracts');
        const { FetchZkConfigProvider } = await import('@midnight-ntwrk/midnight-js-fetch-zk-config-provider');
        const { indexerPublicDataProvider } = await import('@midnight-ntwrk/midnight-js-indexer-public-data-provider');
        const { CompiledContract } = await import('@midnight-ntwrk/midnight-js-protocol/compact-js');
        const {
          Transaction, Proof, Binding, SignatureEnabled,
        } = await import('@midnight-ntwrk/midnight-js-protocol/ledger');
        const { inMemoryPrivateStateProvider } = await import('../in-memory-private-state-provider');

        setNetworkId(NETWORK_ID);
        const config = await state.wallet.getConfiguration();

        log(setState, 'Loading compiled contract...');
        const counterContractModule = await import('../../contracts/managed/counter/contract/index.js');
        const compiledContract = CompiledContract.make('counter', counterContractModule.Contract).pipe(
          CompiledContract.withVacantWitnesses,
        );

        log(setState, 'Setting up ZK config provider...');
        const zkConfigProvider = new FetchZkConfigProvider(window.location.origin, fetch.bind(window));
        const shieldedAddresses = await state.wallet.getShieldedAddresses();

        log(setState, 'Creating proof provider via wallet proving API...');
        const { CostModel } = await import('@midnight-ntwrk/midnight-js-protocol/ledger');
        const provingProvider = await state.wallet.getProvingProvider(zkConfigProvider.asKeyMaterialProvider());
        const proofProvider = {
          async proveTx(unprovenTx: any) {
            return unprovenTx.prove(provingProvider, CostModel.initialCostModel());
          },
        };

        log(setState, 'Setting up providers...');
        const providers = {
          privateStateProvider: inMemoryPrivateStateProvider<string, any>(),
          zkConfigProvider,
          proofProvider,
          publicDataProvider: indexerPublicDataProvider(config.indexerUri, config.indexerWsUri),
          walletProvider: {
            getCoinPublicKey: () => shieldedAddresses.shieldedCoinPublicKey,
            getEncryptionPublicKey: () => shieldedAddresses.shieldedEncryptionPublicKey,
            balanceTx: async (tx: any) => {
              try {
                const serialized = tx.serialize();
                const hex = Array.from(serialized).map((b: number) => b.toString(16).padStart(2, '0')).join('');
                log(setState, 'Balancing tx (hex length: ' + hex.length + ')...');
                const result = await state.wallet!.balanceUnsealedTransaction(hex);
                log(setState, 'balanceUnsealedTransaction returned OK');
                const bytes = new Uint8Array((result.tx as string).match(/.{2}/g)!.map((b: string) => parseInt(b, 16)));
                return Transaction.deserialize<SignatureEnabled, Proof, Binding>(
                  'signature', 'proof', 'binding', bytes,
                );
              } catch (e: any) {
                const msg = e?.message || JSON.stringify(e);
                log(setState, 'balanceTx FAILED: ' + msg);
                throw e;
              }
            },
          },
          midnightProvider: {
            submitTx: async (tx: any) => {
              try {
                const serialized = tx.serialize();
                const hex = Array.from(serialized).map((b: number) => b.toString(16).padStart(2, '0')).join('');
                log(setState, 'Submitting tx (hex length: ' + hex.length + ')...');
                const txId = await state.wallet!.submitTransaction(hex);
                log(setState, 'submitTransaction returned: ' + JSON.stringify(txId));
                return tx.identifiers()[0];
              } catch (e: any) {
                const msg = e?.message || JSON.stringify(e);
                log(setState, 'submitTransaction FAILED: ' + msg);
                throw e;
              }
            },
          },
        };

        log(setState, 'Finding deployed contract...');
        const contract = await findDeployedContract(providers, {
          contractAddress: 'a746a03e40e6e4b36ec451548e355f2611657c2334e0e7594c3d14d4ef8da1de',
          compiledContract: compiledContract as any,
          privateStateId: 'counterPrivateState',
          initialPrivateState: {},
        });

        log(setState, 'Calling incrementCounter circuit (proof generating in wallet)...');
        const transaction = await contract.callTx.incrementCounter(privateSecret);
        log(setState, 'Transaction submitted! TX: ' + transaction.public.txId);
        log(setState, 'Full tx result: ' + JSON.stringify(
          transaction.public,
          (key, value) => (typeof value === 'bigint' ? value.toString() : value),
          2
        ));

        setCircuitState({
          isCalling: false,
          result: 'Counter incremented successfully!',
          txId: transaction.public.txId,
          error: null,
        });
      } catch (e: any) {
        console.error('[Midnight] Circuit call failed:', e);
        const errMsg = extractError(e);
        log(setState, 'Circuit call FAILED: ' + errMsg);
        setCircuitState({
          isCalling: false,
          result: null,
          txId: null,
          error: errMsg,
        });
      }
    },
    [state.wallet],
  );

  const clearError = useCallback(() => {
    setState((s) => ({ ...s, error: null }));
    setCircuitState((s) => ({ ...s, error: null }));
  }, []);

  return {
    ...state,
    ...circuitState,
    connect,
    disconnect,
    callIncrementCounter,
    clearError,
  };
}
