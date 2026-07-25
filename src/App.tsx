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

  const error = walletError || circuitError;

  return (
    <div className="app">
      <header className="header">
        <h1>Degree Verification Portal</h1>
        <span className="subtitle">Midnight Network - Zero Knowledge Privacy</span>
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

        <section className="info-section">
          <div className="info-card">
            <h3>Privacy Model</h3>
            <ul>
              <li><strong>PUBLIC:</strong> Counter value on-chain</li>
              <li><strong>PRIVATE:</strong> Your increment input (never stored on-chain)</li>
              <li><strong>PROVEN:</strong> That the increment is positive without revealing the value</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Built on <a href="https://midnight.network" target="_blank" rel="noopener noreferrer">Midnight Network</a></span>
      </footer>
    </div>
  );
}
