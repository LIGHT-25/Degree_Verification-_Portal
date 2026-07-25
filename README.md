# Degree Verification Portal

> A privacy-preserving dApp on Midnight Network that proves degree credentials without revealing private data on-chain.

## Live Demo

[PASTE LIVE URL AFTER DEPLOYING FRONTEND]

## Contract Address

| Network  | Address |
|----------|---------|
| Preprod  | `a746a03e40e6e4b36ec451548e355f2611657c2334e0e7594c3d14d4ef8da1de` |

(Contract address is MANDATORY. Do not leave this blank.)

## What This Does

This is a privacy-first dApp built on the Midnight Network. It allows users to connect their Lace wallet, call a smart contract circuit that increments a public counter, and prove the increment value is valid — all without exposing the private input on-chain. The zero-knowledge proof is generated entirely in the browser.

## Privacy Model

- **What is PUBLIC:** The counter value on the blockchain, visible to anyone.
- **What is PRIVATE:** The increment amount supplied by the user — never stored on-chain or shown in the UI.
- **What the user PROVES without revealing:** That the increment is a positive integer and that the state transition is valid.

## Privacy Claim

An on-chain observer can see that the counter was incremented and by how much (via `disclose()`). However, the private witness input — the value the user originally supplied to the circuit — is never visible to observers. The user proves the increment is valid (positive, correct arithmetic) without revealing the raw input that generated it. The UI never displays private inputs, only the proof status and on-chain result.

## Tech Stack

- Midnight Network (Preprod)
- Compact language (smart contract)
- Midnight.js SDK (contract interaction, ZK proofs)
- `@midnight-ntwrk/dapp-connector-api` (Lace wallet integration)
- React 19 + Vite
- Lace wallet (browser extension)

## Prerequisites

- Lace wallet installed (Chrome extension)
- Node.js v22+

## Run Locally

```bash
git clone https://github.com/LIGHT-25/Degree_Verification-_Portal.git
cd Degree_Verification_platform
npm install
npm run dev
```

Open the local URL printed by Vite. Make sure Lace wallet is set to **Preprod** network.

## Demo Video

[PLACEHOLDER -- I will add the link after recording]
