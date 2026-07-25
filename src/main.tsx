import { Buffer } from 'buffer';
(globalThis as any).Buffer = Buffer;

const PROXY = 'http://localhost:3333';
const originalFetch = window.fetch.bind(window);
window.fetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (url.includes('proof-server.preprod.midnight.network')) {
    const proxied = url.replace('https://proof-server.preprod.midnight.network', PROXY);
    console.log('[proxy] Routing proof request through local proxy:', proxied);
    return originalFetch(proxied, init);
  }
  return originalFetch(input, init);
};

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
