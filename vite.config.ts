import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';

export default defineConfig({
  // GitHub Pages serves from a subpath; Vercel/local use root "/".
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), wasm(), topLevelAwait()],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  resolve: {
    alias: {
      'cross-fetch': path.resolve(__dirname, 'src/shims/cross-fetch.ts'),
      'fetch-retry': path.resolve(__dirname, 'src/shims/fetch-retry.ts'),
    },
  },
  optimizeDeps: {
    exclude: [
      '@midnight-ntwrk/ledger-v8',
    ],
    include: [
      '@subsquid/scale-codec',
      '@subsquid/util-internal-hex',
    ],
  },
});
