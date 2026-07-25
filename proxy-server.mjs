import http from 'http';
import https from 'https';
import { URL } from 'url';

const TARGET = process.env.PROOF_SERVER_URL || 'http://127.0.0.1:6300';
const targetBase = new URL(TARGET);
const isHttps = targetBase.protocol === 'https:';
const transport = isHttps ? https : http;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const targetUrl = new URL(req.url, TARGET);
  const options = {
    hostname: targetUrl.hostname,
    port: targetUrl.port || (isHttps ? 443 : 80),
    path: targetUrl.pathname + targetUrl.search,
    method: req.method,
    headers: { ...req.headers, host: targetUrl.hostname },
  };

  console.log(`[proxy] ${req.method} ${req.url} -> ${targetUrl.href}`);

  let body = [];
  req.on('data', (chunk) => body.push(chunk));
  req.on('end', () => {
    const bodyBuf = Buffer.concat(body);

    const proxyReq = transport.request(options, (proxyRes) => {
      let respBody = [];
      proxyRes.on('data', (c) => respBody.push(c));
      proxyRes.on('end', () => {
        const resp = Buffer.concat(respBody).toString();
        console.log(`[proxy] <- ${proxyRes.statusCode} (${resp.length} bytes) ${resp.length < 500 ? resp : resp.slice(0, 500) + '...'}`);
      });

      res.writeHead(proxyRes.statusCode, {
        ...proxyRes.headers,
        'Access-Control-Allow-Origin': '*',
      });
      proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
      console.error('[proxy] ERROR:', err.message);
      res.writeHead(502);
      res.end('Proxy error: ' + err.message);
    });

    if (bodyBuf.length > 0) {
      proxyReq.write(bodyBuf);
    }
    proxyReq.end();
  });
});

server.listen(3333, () => {
  console.log(`[proxy] CORS proxy running on http://localhost:3333 -> ${TARGET}`);
});
