import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pairs = [
  ['contracts/managed/counter/keys', 'public/keys'],
  ['contracts/managed/counter/zkir', 'public/zkir'],
  ['contracts/managed/keys', 'public/keys'],
  ['contracts/managed/zkir', 'public/zkir'],
];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    fs.copyFileSync(path.join(src, entry.name), path.join(dest, entry.name));
  }
}

let copied = false;
for (const [srcRel, destRel] of pairs) {
  const src = path.join(root, srcRel);
  const dest = path.join(root, destRel);
  if (!fs.existsSync(src)) continue;
  copyDir(src, dest);
  console.log(`Synced ZK artifacts: ${srcRel} -> ${destRel}`);
  copied = true;
}

const required = [
  'public/keys/incrementCounter.prover',
  'public/keys/incrementCounter.verifier',
  'public/zkir/incrementCounter.zkir',
  'public/zkir/incrementCounter.bzkir',
  'contracts/managed/counter/contract/index.js',
];

const missing = required.filter((rel) => !fs.existsSync(path.join(root, rel)));
if (missing.length) {
  console.error('Missing required build artifacts:');
  for (const rel of missing) console.error(`  - ${rel}`);
  process.exit(1);
}

if (!copied) {
  console.log('Using existing public/ ZK artifacts (no contracts/managed keys to sync).');
}
