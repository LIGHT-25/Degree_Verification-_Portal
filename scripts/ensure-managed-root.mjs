import fs from 'node:fs';
import path from 'node:path';

/**
 * Challenge Level 3 expects a root-level `managed/` folder after compile.
 * This project compiles into `contracts/managed/` (Midnight hello-world layout).
 * Mirror that output at `managed/counter` via symlink/junction when possible.
 */
const root = process.cwd();
const target = path.join(root, 'contracts', 'managed', 'counter');
const linkPath = path.join(root, 'managed', 'counter');
const managedRoot = path.join(root, 'managed');

if (!fs.existsSync(target)) {
  console.error('Missing compiled artifacts at contracts/managed/counter');
  process.exit(1);
}

fs.mkdirSync(managedRoot, { recursive: true });

try {
  if (fs.existsSync(linkPath)) {
    fs.rmSync(linkPath, { recursive: true, force: true });
  }
} catch {
  // ignore
}

try {
  const type = process.platform === 'win32' ? 'junction' : 'dir';
  fs.symlinkSync(target, linkPath, type);
  console.log('Linked managed/counter -> contracts/managed/counter');
} catch (err) {
  // Fallback: shallow copy of contract JS bindings if symlink is unavailable
  console.warn('Symlink failed, copying contract bindings instead:', err.message);
  fs.cpSync(target, linkPath, { recursive: true });
  console.log('Copied contracts/managed/counter -> managed/counter');
}
