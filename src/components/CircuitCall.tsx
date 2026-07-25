import { useState } from 'react';

interface CircuitCallProps {
  isCalling: boolean;
  result: string | null;
  txId: string | null;
  error: string | null;
  walletConnected: boolean;
  onCallCircuit: (privateSecret: bigint) => void;
  onClearError: () => void;
}

export default function CircuitCall({
  isCalling,
  result,
  txId,
  error,
  walletConnected,
  onCallCircuit,
  onClearError,
}: CircuitCallProps) {
  const [inputValue, setInputValue] = useState('');

  const handleCall = () => {
    const value = BigInt(inputValue);
    if (value <= 0n) return;
    onCallCircuit(value);
    setInputValue('');
  };

  return (
    <div className="circuit-section">
      <div className="circuit-card">
        <h2>Increment Counter</h2>
        <p className="description">
          Enter a private increment value. The proof is generated locally in your browser.
        </p>

        <div className="private-label">Proved without revealing your input</div>

        <div className="input-group">
          <input
            className="input"
            type="number"
            min="1"
            placeholder="Increment amount (private)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isCalling || !walletConnected}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={handleCall}
          disabled={isCalling || !walletConnected || !inputValue || BigInt(inputValue) <= 0n}
        >
          {isCalling ? (
            <>
              <span className="spinner" /> Generating Proof...
            </>
          ) : (
            'Call Circuit'
          )}
        </button>

        {isCalling && (
          <div className="status-bar">
            <span className="spinner" />
            <span>Proof is being generated locally. This may take a moment...</span>
          </div>
        )}

        {result && !error && (
          <div className="status-bar success">
            <span className="check-icon">&#10003;</span>
            <div>
              <p>{result}</p>
              {txId && <p className="tx-id">TX: {txId}</p>}
            </div>
          </div>
        )}

        {error && (
          <div className="status-bar error">
            <span>x</span>
            <span>{error}</span>
            <button onClick={onClearError} className="error-close">x</button>
          </div>
        )}

        {!walletConnected && (
          <p className="hint">Connect your wallet first to call the circuit.</p>
        )}
      </div>
    </div>
  );
}
