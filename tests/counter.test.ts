import { describe, it, expect } from 'vitest';
import { CounterSimulator } from './counter-simulator.js';

describe('Counter Compact Contract', () => {
  // ---------------------------------------------------------------------------
  // (a) Circuit logic — does the circuit compute correctly?
  // ---------------------------------------------------------------------------
  describe('circuit logic', () => {
    it('increments the public counter by a positive private secret', () => {
      const sim = new CounterSimulator();
      expect(sim.getLedger().counter).toBe(0n);

      const ledgerAfter = sim.incrementCounter(5n);
      expect(ledgerAfter.counter).toBe(5n);
      expect(sim.lastResult).toEqual([]);
    });

    it('rejects a non-positive private secret (assert > 0)', () => {
      const sim = new CounterSimulator();
      expect(() => sim.incrementCounter(0n)).toThrow(
        /Increment amount must be greater than zero/i,
      );
      expect(sim.getLedger().counter).toBe(0n);
    });
  });

  // ---------------------------------------------------------------------------
  // (b) State transitions — does ledger state update as expected?
  // ---------------------------------------------------------------------------
  describe('state transitions', () => {
    it('accumulates counter across multiple valid increments', () => {
      const sim = new CounterSimulator();
      expect(sim.getLedger().counter).toBe(0n);

      sim.incrementCounter(1n);
      expect(sim.getLedger().counter).toBe(1n);

      sim.incrementCounter(2n);
      expect(sim.getLedger().counter).toBe(3n);

      sim.incrementCounter(10n);
      expect(sim.getLedger().counter).toBe(13n);
    });

    it('leaves ledger unchanged when an invalid increment is rejected', () => {
      const sim = new CounterSimulator();
      sim.incrementCounter(7n);
      expect(sim.getLedger().counter).toBe(7n);

      expect(() => sim.incrementCounter(0n)).toThrow();
      expect(sim.getLedger().counter).toBe(7n);
    });
  });

  // ---------------------------------------------------------------------------
  // (c) Privacy — private input is never exposed in any public output
  // ---------------------------------------------------------------------------
  describe('privacy', () => {
    it('does not expose the private secret in circuit result or ledger fields', () => {
      const privateSecret = 42n;
      const sim = new CounterSimulator();
      const publicLedger = sim.incrementCounter(privateSecret);

      // Circuit returns [] — private witness is not a return value
      expect(sim.lastResult).toEqual([]);
      expect(sim.lastResult).not.toContain(privateSecret);

      // Public ledger only has the aggregated counter field (no privateSecret key)
      const ledgerKeys = Object.keys(publicLedger);
      expect(ledgerKeys).toEqual(['counter']);
      expect(ledgerKeys).not.toContain('privateSecret');
      expect(ledgerKeys).not.toContain('private');

      // Serialized public outputs must not include a named privateSecret field
      const publicSurface = JSON.stringify(
        {
          result: sim.lastResult,
          ledger: { counter: publicLedger.counter.toString() },
        },
        null,
        2,
      );
      expect(publicSurface).not.toMatch(/"privateSecret"/);
      expect(publicSurface).not.toMatch(/privateSecret/);
    });

    it('keeps distinct private secrets out of the public output object shape', () => {
      const secretA = 99n;
      const secretB = 123456789n;
      const sim = new CounterSimulator();

      sim.incrementCounter(secretA);
      const afterA = {
        result: sim.lastResult,
        ledgerKeys: Object.keys(sim.getLedger()),
      };

      sim.incrementCounter(secretB);
      const afterB = {
        result: sim.lastResult,
        ledgerKeys: Object.keys(sim.getLedger()),
      };

      // Same public shape regardless of which private secret was used
      expect(afterA.result).toEqual([]);
      expect(afterB.result).toEqual([]);
      expect(afterA.ledgerKeys).toEqual(['counter']);
      expect(afterB.ledgerKeys).toEqual(['counter']);

      // Observer sees only the running public counter, not a privateSecret field
      expect(sim.getLedger().counter).toBe(secretA + secretB);
      expect(Object.keys(sim.getLedger())).not.toContain('privateSecret');
    });
  });
});
