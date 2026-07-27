# Degree Verification Portal

![CI](https://github.com/LIGHT-25/Degree_Verification-_Portal/actions/workflows/ci.yml/badge.svg)

> A privacy-preserving dApp on Midnight Network that proves degree credentials without revealing private data on-chain.

## Live Demo

https://degree-verification-portal-one.vercel.app

## Contract Address

| Network | Address |
|---------|---------|
| Preprod | `a746a03e40e6e4b36ec451548e355f2611657c2334e0e7594c3d14d4ef8da1de` |

Verify on Preprod explorers:

- https://preprod.midnightexplorer.com/
- https://midnight-preprod.subscan.io/
- https://explorer.1am.xyz/?network=preprod

## What This Does

Degree Verification Portal is a Midnight Compact counter circuit wired to a React + Lace frontend on Preprod. Users connect Lace, supply a **private** positive increment, generate a local zero-knowledge proof, and update a **public** on-chain counter — without displaying the private witness in the UI result.

## Privacy Model

- **PUBLIC:** Counter value on the ledger (visible to anyone on-chain); disclosed increment applied via `disclose()`.
- **PRIVATE:** The original private increment witness entered by the user (cleared from the form and never shown in the success panel).
- **PROVED without revealing:** That the increment is strictly positive and that the ledger transition is valid.

## Privacy Claim

An on-chain observer can see that the public counter changed and by how much (the disclosed increment). They cannot see a separate private-witness field on the ledger, and the dApp never renders the private input in the result surface — only proof status / success and the transaction id.

## Tech Stack

- Midnight Network (Preprod)
- Compact smart contracts + `@midnight-ntwrk/compact-runtime`
- Midnight.js SDK (`midnight-js-contracts`, ZK config, indexer provider)
- `@midnight-ntwrk/dapp-connector-api` (Lace)
- React 19 + Vite
- Vitest
- GitHub Actions CI
- Docker (local proof server)
- Vercel (frontend hosting)

## Prerequisites

- Node.js v22+
- npm
- Docker Desktop (for local proof server used with Lace)
- Lace browser extension set to **Preprod**
- Midnight Compact toolchain (`compact`) for compiling contracts

## Setup & Run Locally

```bash
git clone https://github.com/LIGHT-25/Degree_Verification-_Portal.git
cd Degree_Verification-_Portal
npm install
npm run compile
npm run proof-server:start
npm run dev
```

Then open the Vite URL, connect Lace (Preprod, proof server `http://localhost:6300`), fund with faucet tokens, and call the circuit.

## Run Tests

```bash
npm test
```

## CI/CD

Workflow: [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) (badge at the top of this README).

### CI (Continuous Integration)

Runs on every **push to `main`** and every **pull request**:

1. Checkout code
2. Install Node.js v22
3. Install / update Compact toolchain
4. `npm install`
5. `compact compile` for `contracts/counter.compact`
6. Run test suite (`npm test`)
7. Production build check (`npm run build`)

### CD (Continuous Deployment)

Runs only on **push to `main`**, after CI succeeds:

1. Pull Vercel production settings
2. Build with Vercel
3. Deploy prebuilt output to **Vercel production** (live demo)

Required GitHub repository secrets for CD:

| Secret | Where to get it |
|--------|-----------------|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` after `vercel link` (or Vercel project settings) |
| `VERCEL_PROJECT_ID` | Same as above |

```bash
# One-time local link (optional helper)
npx vercel link
# Then copy org/project ids from .vercel/project.json into GitHub Secrets
```

## Product Proposal

See [PROPOSAL.md](./PROPOSAL.md)

## Demo Video (Level 2)

Wallet connect / disconnect and a successful `incrementCounter` circuit call on Preprod:

https://youtu.be/G2w07YhLLnc

## Scripts

| Script | Purpose |
|--------|---------|
| `npm test` | Contract unit tests (circuit / state / privacy) |
| `npm run compile` | Compact compile + ensure root `managed/` |
| `npm run build` | Production UI build |
| `npm run dev` | Local UI |
| `npm run proof-server:start` | Local Docker proof server on `:6300` |
| `npm run deploy` | Deploy / interact via CLI |

## Repository

- GitHub: https://github.com/LIGHT-25/Degree_Verification-_Portal
- License: MIT
