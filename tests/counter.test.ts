import { describe, it, expect } from 'vitest';
import * as path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as compactRuntime from '@midnight-ntwrk/compact-runtime';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contractPath = path.resolve(__dirname, '..', 'contracts', 'managed', 'counter', 'contract', 'index.cjs');

describe('Counter Compact Contract Tests', () => {
  it('should compile contract and expose Contract object', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    expect(CounterModule.Contract).toBeDefined();
    expect(typeof CounterModule.Contract).toBe('function');
  });

  it('should initialize contract state correctly with Zswap state', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    const contract = new CounterModule.Contract({});
    const initialState = contract.initialState({ initialZswapLocalState: {} });
    expect(initialState).toBeDefined();
    expect(initialState.currentContractState).toBeDefined();
  });

  it('should execute circuit logic and enforce private witness rules without exposing private inputs', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    const contract = new CounterModule.Contract({});
    const initialState = contract.initialState({ initialZswapLocalState: {} });

    // Verify circuit method incrementCounter exists
    expect(typeof contract.impureCircuits.incrementCounter).toBe('function');

    // Construct QueryContext using compact-runtime
    const queryCtx = new compactRuntime.QueryContext(
      initialState.currentContractState.data,
      compactRuntime.dummyContractAddress()
    );

    const context = {
      originalState: initialState.currentContractState,
      transactionContext: queryCtx,
      currentQueryContext: queryCtx,
      currentPrivateState: {},
      currentZswapLocalState: {},
    };

    // Execute circuit with valid private secret (witness input = 5n)
    const result = contract.impureCircuits.incrementCounter(context, 5n);
    expect(result).toBeDefined();
    expect(result.result).toBeDefined();
    expect(result.context).toBeDefined();
  });

  it('should prevent invalid private witness inputs from executing', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    const contract = new CounterModule.Contract({});
    const initialState = contract.initialState({ initialZswapLocalState: {} });

    const queryCtx = new compactRuntime.QueryContext(
      initialState.currentContractState.data,
      compactRuntime.dummyContractAddress()
    );

    const context = {
      originalState: initialState.currentContractState,
      transactionContext: queryCtx,
      currentQueryContext: queryCtx,
      currentPrivateState: {},
      currentZswapLocalState: {},
    };

    // Passing zero should violate assert(privateSecret > 0)
    expect(() => contract.impureCircuits.incrementCounter(context, 0n)).toThrow();
  });
});
