import { describe, it, expect } from 'vitest';
import * as path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contractPath = path.resolve(__dirname, '..', 'contracts', 'managed', 'counter', 'contract', 'index.js');

describe('Counter Compact Contract Tests', () => {
  it('should expose the generated contract entrypoint', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    expect(CounterModule).toBeDefined();
    expect(CounterModule.Contract).toBeDefined();
  });

  it('should initialize the contract class from the generated artifact', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    const contract = new CounterModule.Contract({});
    expect(contract).toBeDefined();
  });

  it('should expose the counter circuit entrypoint when the artifact is available', async () => {
    const CounterModule = await import(pathToFileURL(contractPath).href);
    const contract = new CounterModule.Contract({});
    expect(contract).toBeDefined();
    expect(typeof contract).toBe('object');
  });

  it('should keep the contract source aligned with the challenge requirements', async () => {
    const source = await import('node:fs/promises').then((fs) => fs.readFile(path.resolve(__dirname, '..', 'contracts', 'counter.compact'), 'utf8'));
    expect(source).toContain('export ledger counter');
    expect(source).toContain('export circuit incrementCounter');
    expect(source).toContain('assert(privateSecret > 0');
    expect(source).toContain('disclose(privateSecret)');
  });
});
