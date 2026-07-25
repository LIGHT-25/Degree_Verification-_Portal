interface WalletConnectProps {
  walletState: string;
  address: string | null;
  error: string | null;
  debugLog: string[];
  onConnect: () => void;
  onDisconnect: () => void;
  onClearError: () => void;
}

function truncAddr(addr: string): string {
  if (!addr || addr === '(address unavailable)') return addr || '';
  return addr.length <= 24 ? addr : `${addr.slice(0, 14)}...${addr.slice(-8)}`;
}

export default function WalletConnect({
  walletState,
  address,
  error,
  debugLog,
  onConnect,
  onDisconnect,
  onClearError,
}: WalletConnectProps) {
  const isConnected = walletState === 'connected';
  const isDetecting = walletState === 'detecting';
  const isConnecting = walletState === 'connecting';
  const noWallet = walletState === 'no-wallet';

  return (
    <div className="wallet-section">
      <div className="wallet-card">
        <div className="wallet-header">
          <h2>Wallet Connection</h2>
          <span className={`status-badge ${walletState}`}>
            {isConnected && 'CONNECTED'}
            {isDetecting && 'Detecting...'}
            {isConnecting && 'CONNECTING...'}
            {noWallet && 'NOT FOUND'}
            {walletState === 'error' && 'ERROR'}
            {walletState === 'ready' && 'READY'}
          </span>
        </div>

        {isConnected && address ? (
          <div className="wallet-connected">
            <div className="wallet-address">
              <span className="status-dot connected" />
              <span className="address-label">Address:</span>
              <span className="address-text">{truncAddr(address)}</span>
            </div>
            <button className="btn btn-disconnect" onClick={onDisconnect}>
              Disconnect
            </button>
          </div>
        ) : isDetecting ? (
          <div className="wallet-waiting">
            <span className="spinner" />
            <span>Looking for Lace wallet...</span>
          </div>
        ) : isConnecting ? (
          <div className="wallet-waiting connecting-state">
            <span className="spinner" />
            <div>
              <span>Connecting to Lace...</span>
              <p className="hint">A Lace popup should appear. Click <strong>Approve</strong> in it.</p>
            </div>
          </div>
        ) : noWallet ? (
          <div className="wallet-none">
            <p>Lace wallet not detected. Install it to continue.</p>
            <a
              className="btn btn-install"
              href="https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Lace
            </a>
          </div>
        ) : (
          <div className="wallet-ready">
            <p>Click below to connect your Lace wallet.</p>
            <button className="btn btn-connect" onClick={onConnect}>
              Connect Wallet
            </button>
          </div>
        )}

        {error && (
          <div className="error-bar">
            <span>{error}</span>
            <button onClick={onClearError} className="error-close">x</button>
          </div>
        )}

        {debugLog.length > 0 && (
          <details className="debug-section">
            <summary>Debug Log ({debugLog.length} entries)</summary>
            <div className="debug-log">
              {debugLog.map((msg, i) => (
                <div key={i} className="debug-line">{msg}</div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
