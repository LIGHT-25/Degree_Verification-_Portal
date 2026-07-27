# Product Proposal

## What is the product, and who uses it?

**Degree Verification Platform** is a privacy-first credential verification system built on the Midnight network.

Universities use it to issue academic credentials on-chain. Students use it to prove their degree qualifications to employers, background-check services, or admissions offices — without publishing sensitive underlying data (full transcripts, student ID numbers, GPA breakdowns, or personal identifiers) on a public ledger.

**Who uses it:**

| Role | What they do |
|------|----------------|
| **Universities / issuers** | Register as credential issuers and anchor degree attestations on Midnight |
| **Students / holders** | Store private credential witnesses locally and generate zero-knowledge proofs on demand |
| **Employers / verifiers** | Request proof that a candidate meets a requirement (e.g. "holds a BSc in Computer Science from an accredited institution") and receive a yes/no or scoped disclosure — not the full record |

The current Level 3 build uses a **counter circuit** as a working proof-of-concept for the privacy model: a private witness is proved valid without being shown in the UI, while only the intended public result is disclosed on-chain. The full platform extends this pattern to degree credentials.

## Why Midnight specifically?

A transparent chain (e.g. Ethereum mainnet with public state) is a poor fit for academic credentials because:

- **Degrees contain PII and sensitive data** — names, dates of birth, national IDs, full grade histories — that must not be permanently public.
- **Verification is selective** — an employer may only need to know "graduated with honours" or "completed an accredited programme," not every course mark.
- **Regulatory pressure** — GDPR, FERPA, and similar frameworks require data minimisation; putting raw credentials on a public ledger creates compliance risk.

**Midnight solves this** with Compact smart contracts and zero-knowledge proofs:

- **Private witnesses** stay off-chain / in the proof context; only explicitly `disclose()`d fields appear on the ledger.
- **Selective disclosure** — prove a predicate ("GPA ≥ 3.5", "degree is valid and not revoked") without revealing the full transcript.
- **Tamper-evident public state** — issuers and revocation status can be public while student details remain private.
- **Composable proofs** — students generate proofs locally (via Lace + proof server) and share only the verification result.

A transparent chain could store a hash of a credential, but it cannot natively enforce *what* is proved without revealing *everything* — Midnight's ZK circuits are built for exactly this use case.

## Data Model

| Data Point | Type | Disclosed To |
|------------|------|--------------|
| Issuer registry / accreditation status | Public ledger | Everyone |
| Credential revocation flag | Public ledger | Everyone |
| Verification request outcome (e.g. "valid: true") | Public ledger (disclosed result) | Verifier + on-chain observers |
| Student full name | Private witness | No one (unless student chooses to disclose) |
| Date of birth / national ID | Private witness | No one |
| Full transcript / course grades | Private witness | No one |
| Degree type, major, graduation year (scoped) | Private witness → selective `disclose()` | Verifier only, per proof |
| Private increment / witness input (counter MVP) | Private witness | No one — cleared from UI; not in result panel |
| Public counter value (counter MVP) | Public ledger | Everyone |
| Disclosed increment amount (counter MVP) | Public ledger via `disclose()` | Everyone |
| ZK proof / transaction ID | Public (proof exists) | Everyone — proves validity without revealing witness |

## Mainnet Feasibility

**Yes — reaching Mainnet by Level 6 is realistic**, with a phased path:

| Phase | Scope | Feasibility |
|-------|--------|-------------|
| **Levels 1–3 (done / in progress)** | Counter contract on Preprod, React + Lace frontend, tests, CI/CD, privacy-labelled UI | ✅ Complete |
| **Level 4–5** | Replace counter with a `DegreeCredential` Compact contract: issuer signs attestation, student holds private witness, verifier calls `proveQualification` circuit | High — same Midnight.js + Lace stack |
| **Level 6** | Mainnet deploy, issuer onboarding, audit of disclosure rules, production proof-server / wallet UX | Achievable if scope stays focused on a single credential type (e.g. degree completion yes/no) |

**Risks to manage:**

- Issuer key management and revocation semantics need design before Mainnet.
- Proof generation latency must stay acceptable for employers (local proof server + Lace already validated in demo).
- Legal/compliance review for what fields may be disclosed per jurisdiction.

**Conclusion:** The Degree Verification Platform is a strong Midnight use case. The current counter MVP validates the core privacy pattern; extending it to credential predicates is a natural, feasible path to Mainnet by Level 6.
