import {
  type CircuitContext,
  QueryContext,
  sampleContractAddress,
  createConstructorContext,
  CostModel,
} from '@midnight-ntwrk/compact-runtime';
import {
  Contract,
  type Ledger,
  ledger,
} from '../contracts/managed/counter/contract/index.js';

/**
 * Off-chain test harness for the counter Compact contract.
 * Exercises impure circuits without a node or proof server.
 */
export class CounterSimulator {
  readonly contract: Contract<Record<string, never>>;
  circuitContext: CircuitContext<Record<string, never>>;
  lastProofData: unknown = null;

  constructor() {
    this.contract = new Contract({});
    const { currentPrivateState, currentContractState, currentZswapLocalState } =
      this.contract.initialState(createConstructorContext({}, '0'.repeat(64)));

    this.circuitContext = {
      currentPrivateState,
      currentZswapLocalState,
      costModel: CostModel.initialCostModel(),
      currentQueryContext: new QueryContext(
        currentContractState.data,
        sampleContractAddress(),
      ),
    };
  }

  getLedger(): Ledger {
    return ledger(this.circuitContext.currentQueryContext.state);
  }

  incrementCounter(privateSecret: bigint): Ledger {
    const { context, proofData, result } =
      this.contract.impureCircuits.incrementCounter(this.circuitContext, privateSecret);
    this.circuitContext = context;
    this.lastProofData = proofData;
    this.lastResult = result;
    return ledger(this.circuitContext.currentQueryContext.state);
  }

  lastResult: [] | null = null;
}
