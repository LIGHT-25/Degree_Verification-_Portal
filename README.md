# Degree Verification Portal

This project is built on the Midnight Network.

> Level 2 (The First Thread of Light): Compact contract wired to a React frontend, Lace connected on Preprod, circuit called from the browser.

## Level 2 Submission

| Requirement | Status |
|-------------|--------|
| Public GitHub repository with README | ✅ This repo |
| Live demo (Vercel) | ✅ [degree-verification-portal-one.vercel.app](https://degree-verification-portal-one.vercel.app) |
| Preprod contract address (verifiable on-chain) | ✅ See below |
| Demo video: Lace connect + successful circuit call | ✅ [(https://youtu.be/G2w07YhLLnc)] |
| README documents the privacy claim | ✅ See **Privacy Claim** |
| Minimum 8 meaningful commits | ✅ |

## Live Demo

[**https://degree-verification-portal-one.vercel.app**](https://youtu.be/G2w07YhLLnc)

### Try it (Preprod + Lace)

1. Install the [Lace](https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk) browser extension.
2. Set Lace network to **Preprod**.
3. Set Lace proof server to `http://localhost:6300`.
4. Start a local proof server from this repo: `npm run proof-server:start` (Docker required).
5. Fund the wallet with tNIGHT from the [Preprod faucet](https://midnight-tmnight-preprod.nethermind.dev/), then generate tDUST in Lace.
6. Open the live demo → **Connect** Lace → call `incrementCounter`.

## Demo Video

Wallet connect / disconnect and a successful `incrementCounter` circuit call on Preprod:

**[Watch circuit_calling_proof.mp4](https://youtu.be/G2w07YhLLnc)**

## Deployed Preprod Contract

| Network | Contract address |
|---------|------------------|
| Preprod | `a746a03e40e6e4b36ec451548e355f2611657c2334e0e7594c3d14d4ef8da1de` |

Verify on-chain (search the address):

- [preprod.midnightexplorer.com](https://preprod.midnightexplorer.com/)
- [midnight-preprod.subscan.io](https://midnight-preprod.subscan.io/)
- [explorer.1am.xyz (preprod)](https://explorer.1am.xyz/?network=preprod)

## Privacy Claim

**Observable privacy behavior:** the user supplies a private increment (`privateSecret`) as a circuit witness. The ZK proof attests that the secret is a valid positive integer (`assert(privateSecret > 0)`) and that the ledger transition is correct — without the frontend ever displaying that private input to observers. Only the intentionally disclosed increment updates the public `counter`.

| | What |
|--|------|
| **PUBLIC** | Ledger `counter` (visible to anyone). The increment amount after `disclose(privateSecret)` is written into public state. |
| **PRIVATE** | The raw `privateSecret` witness as entered by the user. It is not shown in the UI result, not logged as a success payload, and is not a public circuit argument observers can read from the DApp surface. |
| **PROVEN WITHOUT BEING SHOWN** | That `privateSecret > 0` and that the counter update is a valid state transition, via a zero-knowledge proof generated through Lace / the proof server. |

Compact sketch (`contracts/counter.compact`):

```compact
export circuit incrementCounter(privateSecret: Uint<64>): [] {
    assert(privateSecret > 0, "Increment amount must be greater than zero");
    const inc: Uint<64> = disclose(privateSecret);
    counter = (counter + inc) as Uint<64>;
}
```

## What This DApp Does

- Connect / disconnect **Lace** on Midnight **Preprod** via `@midnight-ntwrk/dapp-connector-api`
- Call the on-chain `incrementCounter` circuit from the React UI
- Manage local private state in the browser while submitting the proven transaction
- Serve ZK artifacts (`public/keys`, `public/zkir`) so the wallet / proof pipeline can prove the circuit

## Tech Stack

- Midnight Network (Preprod)
- Compact smart contract
- Midnight.js SDK (`midnight-js-contracts`, ZK config, indexer provider)
- DApp Connector API + Lace wallet
- React 19 + Vite
- Vercel (frontend hosting)

## Run Locally

```bash
git clone https://github.com/LIGHT-25/Degree_Verification-_Portal.git
cd Degree_Verification-_Portal
npm install
npm run proof-server:start
npm run dev
```

Open the Vite URL. Lace must be on **Preprod** with proof server `http://localhost:6300`.

### Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local UI |
| `npm run build:ui` | Production UI build (used by Vercel) |
| `npm run proof-server:start` | Local Docker proof server on `:6300` |
| `npm run deploy` | Deploy contract (CLI / network tooling) |

## Repository

- GitHub: https://github.com/LIGHT-25/Degree_Verification-_Portal
- License: MIT
