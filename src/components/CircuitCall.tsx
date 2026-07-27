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

function parsePositiveBigInt(raw: string): { ok: true; value: bigint } | { ok: false; message: string } {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, message: 'Enter a private increment amount greater than zero.' };
  }
  if (!/^\d+$/.test(trimmed)) {
    return { ok: false, message: 'Private input must be a positive whole number.' };
  }
  try {
    const value = BigInt(trimmed);
    if (value <= 0n) {
      return { ok: false, message: 'Private input must be greater than zero.' };
    }
    return { ok: true, value };
  } catch {
    return { ok: false, message: 'Could not parse private input. Use a positive whole number.' };
  }
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
  const [localError, setLocalError] = useState<string | null>(null);

  const parsed = parsePositiveBigInt(inputValue);
  const canSubmit = walletConnected && !isCalling && parsed.ok;

  const handleCall = () => {
    setLocalError(null);
    onClearError();
    const check = parsePositiveBigInt(inputValue);
    if (!check.ok) {
      setLocalError(check.message);
      return;
    }
    // Clear the private input from the UI before the proof starts —
    // so the secret is never left on screen after submit.
    setInputValue('');
    onCallCircuit(check.value);
  };

  const displayError = localError || error;

  return (
    <section className="circuit-section" aria-labelledby="circuit-heading">
      <div className="circuit-card">
        <h2 id="circuit-heading">Increment Counter</h2>
        <p className="description">
          Enter a private increment value. A zero-knowledge proof is generated locally;
          the UI never shows your private input in the result.
        </p>

        <div className="privacy-banner" role="note">
          <strong>Privacy:</strong> Your increment stays a private witness while proving.
          On success you only see proof status and the public counter update — not your secret.
        </div>

        <div className="private-label">Proved without revealing your private input</div>

        <div className="input-group">
          <label className="input-label" htmlFor="private-increment">
            Private increment (witness — never shown in results)
          </label>
          <input
            id="private-increment"
            className="input"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            placeholder="e.g. 1"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setLocalError(null);
            }}
            disabled={isCalling || !walletConnected}
            aria-invalid={Boolean(localError)}
            aria-describedby="private-help"
          />
          <p id="private-help" className="hint left">
            This field is cleared on submit and is not rendered in the success panel.
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleCall}
          disabled={!canSubmit}
          type="button"
        >
          {isCalling ? (
            <>
              <span className="spinner" aria-hidden="true" /> Generating proof…
            </>
          ) : (
            'Call Circuit'
          )}
        </button>

        {isCalling && (
          <div className="status-bar" role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true" />
            <span>
              Generating zero-knowledge proof. Keep this tab open — this can take a moment…
            </span>
          </div>
        )}

        {result && !displayError && (
          <div className="status-bar success" role="status">
            <span className="check-icon" aria-hidden="true">
              &#10003;
            </span>
            <div>
              <p>{result}</p>
              <p className="privacy-note">
                Private input is not shown here (cleared from the form and omitted from this result).
              </p>
              {txId && <p className="tx-id">TX: {txId}</p>}
            </div>
          </div>
        )}

        {displayError && (
          <div className="status-bar error" role="alert">
            <span aria-hidden="true">!</span>
            <span>{displayError}</span>
            <button
              type="button"
              onClick={() => {
                setLocalError(null);
                onClearError();
              }}
              className="error-close"
              aria-label="Dismiss error"
            >
              ×
            </button>
          </div>
        )}

        {!walletConnected && (
          <p className="hint">Connect your Lace wallet first to call the circuit.</p>
        )}
      </div>
    </section>
  );
}
