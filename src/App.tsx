import WalletConnect from './components/WalletConnect';
import CircuitCall from './components/CircuitCall';
import { useMidnight } from './hooks/useMidnight';

export default function App() {
  const {
    walletState,
    address,
    error: walletError,
    debugLog,
    connect,
    disconnect,
    isCalling,
    result,
    txId,
    error: circuitError,
    callIncrementCounter,
    clearError,
  } = useMidnight();

  return (
    <div className="app">
      <header className="header">
        <div className="header-text">
          <h1>Degree Verification Portal</h1>
          <span className="subtitle">Midnight Network · Zero-knowledge privacy</span>
        </div>
      </header>

      <main className="main">
        <WalletConnect
          walletState={walletState}
          address={address}
          error={walletError}
          debugLog={debugLog}
          onConnect={connect}
          onDisconnect={disconnect}
          onClearError={clearError}
        />

        <CircuitCall
          isCalling={isCalling}
          result={result}
          txId={txId}
          error={circuitError}
          walletConnected={walletState === 'connected'}
          onCallCircuit={callIncrementCounter}
          onClearError={clearError}
        />

        <section className="info-section" aria-labelledby="privacy-heading">
          <div className="info-card">
            <h3 id="privacy-heading">Privacy Model</h3>
            <ul>
              <li>
                <strong>PUBLIC:</strong> Counter value on the ledger (visible on-chain)
              </li>
              <li>
                <strong>PRIVATE:</strong> Your increment witness (never shown in the UI result)
              </li>
              <li>
                <strong>PROVED without revealing:</strong> That the increment is positive and the
                state transition is valid
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          Built on{' '}
          <a href="https://midnight.network" target="_blank" rel="noopener noreferrer">
            Midnight Network
          </a>
        </span>
      </footer>
    </div>
  );
}
