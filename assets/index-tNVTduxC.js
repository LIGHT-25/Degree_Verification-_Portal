import { a as p, b as d, p as v, m as b, C as Tt, e as it, S as x, c as It, t as G, d as M, f as W, g as Et, h as R, __tla as __tla_0 } from "./index-DAa3eXPp.js";
import { getNetworkId as h } from "./index-lg-b2sIa.js";
import { P as F, V as Kt } from "./ZKConfiguration-DQjWTRyA.js";
import { Intent as N, ContractCallPrototype as Ot, communicationCommitmentRandomness as Dt, UnshieldedOffer as J, Transaction as B, ContractDeploy as Ut, ContractState as _t, coinCommitment as $t, ZswapOutput as K, ZswapTransient as At, ZswapInput as Y, ZswapOffer as U, __tla as __tla_1 } from "./ledger-KI6kX-Tc.js";
import { s as ct, C as zt, a as kt, __tla as __tla_2 } from "./constants-D7c6DMua.js";
import { m as S, __tla as __tla_3 } from "./ContractExecutable-D6pG9pG8.js";
import "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
import { __tla as __tla_4 } from "./index-Couc_5BG.js";
import "./__vite-plugin-wasm-helper-D7K_KhUE.js";
import { __tla as __tla_5 } from "./circuit-context-Qno4kE-a.js";
let ut, Ft, Rt, L, Nt, Zt, Vt, Lt, T, Ce, bt, Yt, dt, lt, Ct, nt, fe, le, Fe, Ne, ht, we, Be, rt, Me, pe, Gt, Wt, Jt, P, Mt, Te, Ie, Re;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_4;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_5;
        } catch  {}
    })()
]).then(async ()=>{
    async function st(e, t) {
        const n = await e.proofProvider.proveTx(t.unprovenTx), a = await e.walletProvider.balanceTx(n);
        return e.midnightProvider.submitTx(a);
    }
    let ot;
    P = async (e, t)=>{
        const n = await st(e, t);
        return e.publicDataProvider.watchForTxData(n);
    };
    Mt = async (e, t)=>st(e, t);
    ot = (e)=>typeof e == "object" && e !== null && "_tag" in e && "cause" in e && typeof e.cause == "object" && e.cause !== null && "name" in e.cause && "message" in e.cause;
    T = class extends Error {
        finalizedTxData;
        circuitId;
        constructor(t, n){
            super("Transaction failed"), this.finalizedTxData = t, this.circuitId = n, this.message = JSON.stringify({
                ...n && {
                    circuitId: n
                },
                ...t
            }, (a, r)=>typeof r == "bigint" ? r.toString() : r instanceof Map ? Object.fromEntries(r) : r, "	");
        }
    };
    Rt = class extends T {
        constructor(t){
            super(t), this.name = "DeployTxFailedError";
        }
    };
    ut = class extends T {
        constructor(t, n){
            super(t, n), this.name = "CallTxFailedError";
        }
    };
    Ft = class extends TypeError {
        contractState;
        circuitIds;
        constructor(t, n){
            super(`Following operations: ${n.join(", ")}, are undefined or have mismatched verifier keys for contract state ${t.toString(!1)}`), this.contractState = t, this.circuitIds = n;
        }
    };
    L = class extends Error {
        constructor(){
            super("Incorrect call transaction configuration"), this.message = "'privateStateId' was defined for call transaction while 'privateStateProvider' was undefined";
        }
    };
    Nt = class extends Error {
        constructor(){
            super("Incorrect find contract configuration"), this.message = "'initialPrivateState' was defined for contract find while 'privateStateId' was undefined";
        }
    };
    class Bt extends Error {
        cached;
        requested;
        constructor(t, n){
            super("Scoped transaction identity mismatch"), this.cached = t, this.requested = n, this.name = "ScopedTransactionIdentityMismatchError", this.message = `Cannot use cached states from contract '${t.contractAddress}'` + (t.privateStateId ? ` (privateStateId: '${t.privateStateId}')` : "") + ` for contract '${n.contractAddress}'` + (n.privateStateId ? ` (privateStateId: '${n.privateStateId}')` : "") + ". Scoped transactions must target the same contract and private state identity.";
        }
    }
    Lt = class extends T {
        constructor(t){
            super(t), this.name = "ReplaceMaintenanceAuthorityTxFailedError";
        }
    };
    Vt = class extends T {
        constructor(t){
            super(t), this.name = "RemoveVerifierKeyTxFailedError";
        }
    };
    Zt = class extends T {
        constructor(t){
            super(t), this.name = "InsertVerifierKeyTxFailedError";
        }
    };
    let V, jt, qt, Ht, Qt, Xt, ft, pt, $, te, ee, ne, ae, _, gt, re, y, C, Q, mt, X, ie, ce, tt, St, se, wt, oe, ue, et, de;
    V = async (e)=>B.fromParts(h(), void 0, void 0, N.new(M()).addMaintenanceUpdate(await e()));
    jt = (e, t, n, a, r, c, s)=>{
        const i = S(t), o = b(e, {
            coinPublicKey: s,
            signingKey: c
        });
        return V(async ()=>(await o.runPromise(i.replaceContractMaintenanceAuthority(Et(a), {
                address: R(n),
                contractState: r
            }))).public.maintenanceUpdate);
    };
    qt = (e, t, n, a, r, c, s)=>{
        const i = S(t), o = b(e, {
            coinPublicKey: s,
            signingKey: c
        });
        return V(async ()=>(await o.runPromise(i.removeContractOperation(F(a), {
                address: R(n),
                contractState: r
            }))).public.maintenanceUpdate);
    };
    Ht = (e, t, n, a, r, c, s, i)=>{
        const o = S(t), u = b(e, {
            coinPublicKey: i,
            signingKey: s
        });
        return V(async ()=>(await u.runPromise(o.addOrReplaceContractOperation(F(a), Kt(r), {
                address: R(n),
                contractState: c
            }))).public.maintenanceUpdate);
    };
    Gt = async (e, t, n, a, r)=>{
        p(n);
        const c = await e.publicDataProvider.queryContractState(n);
        d(c, `No contract state found on chain for contract address '${n}'`), It(c.operation(a), `Circuit '${a}' is already defined for contract at address '${n}'`);
        const s = await e.privateStateProvider.getSigningKey(n);
        d(s, `Signing key for contract address '${n}' not found`);
        const i = await Ht(e.zkConfigProvider, t, n, a, r, c, s, e.walletProvider.getCoinPublicKey()), o = await P(e, {
            unprovenTx: i
        });
        if (o.status !== x) throw new Zt(o);
        return o;
    };
    Wt = async (e, t, n, a)=>{
        p(n);
        const r = await e.publicDataProvider.queryContractState(n);
        d(r, `No contract state found on chain for contract address '${n}'`), d(r.operation(a), `Circuit '${a}' not found for contract at address '${n}'`);
        const c = await e.privateStateProvider.getSigningKey(n);
        d(c, `Signing key for contract address '${n}' not found`);
        const s = await qt(e.zkConfigProvider, t, n, a, r, c, e.walletProvider.getCoinPublicKey()), i = await P(e, {
            unprovenTx: s
        });
        if (i.status !== x) throw new Vt(i);
        return i;
    };
    Jt = (e, t, n)=>async (a)=>{
            p(n);
            const r = await e.publicDataProvider.queryContractState(n);
            d(r, `No contract state found on chain for contract address '${n}'`);
            const c = await e.privateStateProvider.getSigningKey(n);
            d(c, `Signing key for contract address '${n}' not found`);
            const s = await jt(e.zkConfigProvider, t, n, a, r, c, e.walletProvider.getCoinPublicKey()), i = await P(e, {
                unprovenTx: s
            });
            if (i.status !== x) throw new Lt(i);
            return await e.privateStateProvider.setSigningKey(n, a), i;
        };
    Yt = (e, t, n, a)=>(p(a), {
            removeVerifierKey () {
                return Wt(e, n, a, t);
            },
            insertVerifierKey (r) {
                return Gt(e, n, a, t, r);
            }
        });
    dt = (e, t, n)=>(p(n), S(t).getProvableCircuitIds().reduce((a, r)=>({
                ...a,
                [r]: Yt(e, r, t, n)
            }), {}));
    lt = (e, t, n)=>(p(n), {
            replaceAuthority: Jt(e, t, n)
        });
    Qt = "0".repeat(64);
    Xt = "f5b9fa49d3c4f06582dab6ba45c85f6b1927873105b4c8cf363b9b57ca910f65";
    ft = (e, t, n)=>{
        const a = h(), r = v(e, a), c = W(t, a), s = n ? new Map(Array.from(n, ([i, o])=>[
                v(i, a),
                W(o, a)
            ])) : void 0;
        return (i)=>{
            const o = v(i, a);
            return o === r ? c : o === Qt ? Xt : s?.get(o);
        };
    };
    pt = (e)=>Object.keys(e).forEach((t)=>{
            if (t !== "value" && t !== "type" && t !== "nonce") throw new TypeError(`Key '${t}' should not be present in output data ${e}`);
        });
    $ = (e)=>(pt(e), JSON.stringify({
            ...e,
            value: {
                __big_int_val__: e.value.toString()
            }
        }));
    te = (e)=>{
        const { mt_index: t, ...n } = e;
        return $(n);
    };
    ee = (e)=>{
        const t = JSON.parse(e, (n, a)=>n === "value" && a != null && typeof a == "object" && "__big_int_val__" in a && typeof a.__big_int_val__ == "string" ? BigInt(a.__big_int_val__) : a);
        return pt(t), t;
    };
    ne = ({ coinInfo: e, recipient: t }, n, a = 0)=>{
        if (!t.is_left) return K.newContractOwned(e, a, t.right);
        const r = n(t.left);
        if (!r) throw new Error(`Unable to resolve encryption public key for recipient ${t.left}. Provide a mapping via the encryptionPublicKeyResolver.`);
        return K.new(e, a, t.left, r);
    };
    ae = ([e, t], n)=>{
        const { type: a, value: r } = ee(e);
        return n(t, a, r);
    };
    _ = (e, t)=>e.size === 0 ? void 0 : Array.from(e, (a)=>ae(a, t)).reduce((a, r)=>a.merge(r));
    gt = (e, t)=>t.outputs.filter((n)=>n.recipient.left === e).map(({ coinInfo: n })=>n);
    re = (e, t, n, a)=>{
        const r = h(), c = v(t, r);
        if (v(e.coinPublicKey, r) !== c) throw new Error("Unable to lookup encryption public key (Unsupported coin)");
        return ft(t, n, a);
    };
    y = 0;
    C = 1;
    Q = ()=>({
            outputs: new Map,
            inputs: new Map,
            transients: new Map
        });
    mt = (e, t, n)=>{
        const [a, r] = t;
        if (a !== void 0 && e(a)) return y;
        if (r !== void 0 && e(r)) return C;
        if (a !== void 0 && r !== void 0) throw new Error(`${n} not present in either segment of the partitioned transcript. Local zswap state does not match the contract's declared effects.`);
        return y;
    };
    X = (e, t)=>mt((n)=>n.effects.claimedShieldedReceives.includes(e) || n.effects.claimedShieldedSpends.includes(e), t, `Shielded commitment ${e}`);
    ie = (e, t)=>mt((n)=>n.effects.claimedNullifiers.includes(e), t, `Shielded nullifier ${e}`);
    ce = (...e)=>{
        const t = e.filter((n)=>n != null);
        if (t.length !== 0) return t.reduce((n, a)=>n.merge(a));
    };
    tt = (e)=>ce(_(e.inputs, U.fromInput), _(e.outputs, U.fromOutput), _(e.transients, U.fromTransient));
    St = (e, t, n, a = [
        void 0,
        void 0
    ])=>{
        const r = typeof t == "function" ? t : ()=>t, c = {
            [y]: Q(),
            [C]: Q()
        }, s = n?.zswapChainState.postBlockUpdate(new Date);
        for (const i of e.outputs)if (i.recipient.is_left) {
            const o = $t(i.coinInfo, i.recipient.left), u = X(o, a);
            c[u].outputs.set($(i.coinInfo), ne(i, r, u));
        } else {
            const o = i.recipient.right, u = K.newContractOwned(i.coinInfo, y, o), f = X(u.commitment, a), g = f === y ? u : K.newContractOwned(i.coinInfo, f, o);
            c[f].outputs.set($(i.coinInfo), g);
        }
        for (const i of e.inputs){
            const o = te(i), u = c[y].outputs.get(o), f = c[C].outputs.get(o);
            if (u !== void 0 && f !== void 0) throw new Error(`Ambiguous transient: outputs with serialized coin info ${o} exist in both segments — wallet-owned input cannot pair unambiguously.`);
            if (u !== void 0 || f !== void 0) {
                const w = u !== void 0 ? y : C, l = u ?? f;
                c[w].transients.set(o, At.newFromContractOwnedOutput(i, w, l)), c[w].outputs.delete(o);
                continue;
            }
            d(n, "Wallet-owned input requires a chain state for ZswapInput.newContractOwned"), d(s, "Wallet-owned input requires a chain state for ZswapInput.newContractOwned"), p(n.contractAddress);
            const g = Y.newContractOwned(i, y, n.contractAddress, s), m = ie(g.nullifier, a);
            c[m].inputs.set(o, m === y ? g : Y.newContractOwned(i, m, n.contractAddress, s));
        }
        return {
            guaranteed: tt(c[y]),
            fallible: tt(c[C])
        };
    };
    se = (e, t, n)=>St(e, t, n).guaranteed;
    wt = (e)=>_t.deserialize(e.serialize());
    oe = (e)=>zt.deserialize(e.serialize());
    ue = (e, t, n)=>{
        const a = new Ut(wt(e));
        return [
            a.address,
            oe(a.initialState),
            B.fromParts(h(), se(t, n), void 0, N.new(M()).addDeploy(a))
        ];
    };
    et = (e)=>{
        if (!e) return [];
        const t = [];
        for (const [[n, a], r] of e.effects.claimedUnshieldedSpends)a.tag === "user" && n.tag !== "dust" && t.push({
            value: r,
            owner: a.address,
            type: n.raw
        });
        return t;
    };
    de = (e, t, n, a, r, c, s, i, o, u)=>{
        const f = wt(n).operation(e);
        d(f, `Operation '${e}' is undefined for contract state ${n.toString(!1)}`);
        const g = N.new(M()).addCall(new Ot(t, e, f, r[0], r[1], c, s, i, Dt(), e)), m = et(r[0]);
        m.length > 0 && (g.guaranteedUnshieldedOffer = J.new([], m, []));
        const w = et(r[1]);
        w.length > 0 && (g.fallibleUnshieldedOffer = J.new([], w, []));
        const l = St(o, u, {
            contractAddress: t,
            zswapChainState: a
        }, r);
        return B.fromPartsRandomized(h(), l.guaranteed, l.fallible, g);
    };
    le = async function(e, t, n, a) {
        const r = S(n.compiledContract), c = b(e, {
            coinPublicKey: t,
            signingKey: n.signingKey
        }), s = "initialPrivateState" in n ? n.initialPrivateState : void 0, i = "args" in n ? n.args : [], o = await c.runPromiseExit(r.initialize(s, ...i));
        try {
            const { public: { contractState: u }, private: { privateState: f, signingKey: g, zswapLocalState: m } } = it(o), w = ft(t, a, n.additionalCoinEncPublicKeyMappings), [l, I, D] = ue(u, m, w);
            return {
                public: {
                    contractAddress: l,
                    initialContractState: I
                },
                private: {
                    signingKey: g,
                    initialPrivateState: f,
                    initialZswapState: m,
                    unprovenTx: D,
                    newCoins: gt(t, m)
                }
            };
        } catch (u) {
            throw !ot(u) || u._tag !== "ContractRuntimeError" && u._tag !== "ContractConfigurationError" || u.cause.name !== "CompactError" ? u : new Error(u.cause.message, {
                cause: u
            });
        }
    };
    fe = async function(e, t) {
        return le(e.zkConfigProvider, v(e.walletProvider.getCoinPublicKey(), h()), t, e.walletProvider.getEncryptionPublicKey());
    };
    pe = async function(e, t) {
        const n = await fe(e, t), a = await P(e, {
            unprovenTx: n.private.unprovenTx
        });
        if (a.status !== x) throw new Rt(a);
        return e.privateStateProvider.setContractAddress(n.public.contractAddress), "privateStateId" in t && await e.privateStateProvider.set(t.privateStateId, n.private.initialPrivateState), await e.privateStateProvider.setSigningKey(n.public.contractAddress, n.private.signingKey), {
            private: n.private,
            public: {
                ...a,
                ...n.public
            }
        };
    };
    const A = Symbol.for("@midnight-ntwrk/midnight-js#Transaction"), yt = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/Submit"), vt = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/MergeUnsubmittedCallTxData"), O = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/CacheStates"), Z = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/GetCurrentStatesForIdentity"), ge = (e, t)=>{
        if (!e) return t;
        const n = new Set([
            ...Array.isArray(e.circuitId) ? e.circuitId : [
                e.circuitId
            ],
            ...Array.isArray(t.circuitId) ? t.circuitId : [
                t.circuitId
            ]
        ]);
        return {
            unprovenTx: e.unprovenTx.merge(t.unprovenTx),
            circuitId: Array.from(n)
        };
    };
    class me {
        [A] = A;
        providers;
        options;
        cachedStates = void 0;
        currentUnsubmittedCall;
        submitTxOptions = void 0;
        constructor(t, n){
            this.providers = t, this.options = n;
        }
        getAdditionalMappings() {
            return this.options?.additionalCoinEncPublicKeyMappings;
        }
        getCurrentStates() {
            return this.cachedStates?.states;
        }
        [Z](t) {
            if (!this.cachedStates) return;
            const n = this.cachedStates.identity;
            if (n.contractAddress !== t.contractAddress || n.privateStateId !== t.privateStateId) throw new Bt({
                contractAddress: n.contractAddress,
                privateStateId: n.privateStateId
            }, {
                contractAddress: t.contractAddress,
                privateStateId: t.privateStateId
            });
            return this.cachedStates.states;
        }
        getLastUnsubmittedCallTxDataToTransact() {
            return this.currentUnsubmittedCall;
        }
        async [yt]() {
            const [t, n] = this.getLastUnsubmittedCallTxDataToTransact() ?? [];
            if (!t) throw new Error("No calls were submitted.");
            const a = await P(this.providers, this.submitTxOptions);
            if (a.status !== x) throw new ut(a, this.submitTxOptions.circuitId);
            return n && await this.providers.privateStateProvider.set(n, t.private.nextPrivateState), {
                private: t.private,
                public: {
                    ...t.public,
                    ...a
                }
            };
        }
        [O](t, n) {
            this.cachedStates = {
                states: t,
                identity: n
            };
        }
        [vt](t, n, a) {
            if (this.currentUnsubmittedCall = [
                n,
                a
            ], this.submitTxOptions = ge(this.submitTxOptions, {
                unprovenTx: n.private.unprovenTx,
                circuitId: t
            }), !this.cachedStates) return;
            const r = n.private.nextPrivateState, c = this.cachedStates.states.contractState, s = this.cachedStates.states.zswapChainState, i = this.cachedStates.states.ledgerParameters;
            c.data = new kt(n.public.nextContractState), this[O]({
                contractState: c,
                zswapChainState: s,
                ledgerParameters: i,
                privateState: r
            }, this.cachedStates.identity);
        }
    }
    let Se, z, k;
    Se = (e, t, n, a)=>{
        e[vt](t, n, a);
    };
    z = (e)=>typeof e == "object" && e != null && A in e;
    k = async (e, t, n, a)=>{
        const r = z(n) ? n : void 0, c = z(n) ? a : n, s = r ?? new me(e, c);
        try {
            await t(s);
        } catch (i) {
            if (r) throw i;
            const o = new Error(`Unexpected error executing scoped transaction '${c?.scopeName ?? "<unnamed>"}': ${String(i)}`, {
                cause: i
            });
            throw e?.loggerProvider?.error?.call(e.loggerProvider, o.message), o;
        }
        try {
            if (!r) return await s[yt]();
            const [i] = s.getLastUnsubmittedCallTxDataToTransact() ?? [];
            if (!i) throw new Error("No calls were submitted.");
            return {
                public: {
                    nextContractState: i.public.nextContractState,
                    partitionedTranscript: i.public.partitionedTranscript,
                    publicTranscript: i.public.publicTranscript
                },
                private: {
                    input: i.private.input,
                    output: i.private.output,
                    privateTranscriptOutputs: i.private.privateTranscriptOutputs,
                    result: i.private.result,
                    nextPrivateState: i.private.nextPrivateState,
                    nextZswapLocalState: i.private.nextZswapLocalState
                }
            };
        } catch (i) {
            if (i instanceof ut || r) throw i;
            const o = new Error(`Unexpected error submitting scoped transaction '${c?.scopeName ?? "<unnamed>"}': ${String(i)}`, {
                cause: i
            });
            throw e?.loggerProvider?.error?.call(e.loggerProvider, o.message), o;
        }
    };
    ht = async (e, t)=>{
        p(t);
        const n = await e.queryZSwapAndContractState(t);
        d(n, `No public state found at contract address '${t}'`);
        const [a, r, c] = n;
        return {
            contractState: r,
            zswapChainState: a,
            ledgerParameters: c
        };
    };
    we = async (e, t, n, a)=>{
        const r = await ht(e, n), c = await t.get(a);
        return d(c, `No private state found at private state ID '${a}'`), {
            ...r,
            privateState: c
        };
    };
    nt = async function(e, t, n) {
        const { compiledContract: a, contractAddress: r, coinPublicKey: c, initialContractState: s, initialZswapChainState: i, ledgerParameters: o } = t;
        p(r), d(S(t.compiledContract).getProvableCircuitIds().find((l)=>l === t.circuitId), `Circuit '${t.circuitId}' is undefined`);
        const u = S(a), f = b(e, {
            coinPublicKey: t.coinPublicKey
        }), g = "initialPrivateState" in t ? t.initialPrivateState : void 0, m = "args" in t ? t.args : [], w = await f.runPromiseExit(u.circuit(F(t.circuitId), {
            address: Tt(r),
            contractState: s,
            privateState: g,
            ledgerParameters: o
        }, ...m));
        try {
            const { public: { contractState: l, partitionedTranscript: I, publicTranscript: D }, private: { input: j, output: q, privateState: xt, privateTranscriptOutputs: H, result: Pt, zswapLocalState: E } } = it(w);
            return {
                public: {
                    nextContractState: l,
                    partitionedTranscript: I,
                    publicTranscript: D
                },
                private: {
                    input: j,
                    output: q,
                    result: Pt,
                    nextPrivateState: xt,
                    nextZswapLocalState: E,
                    privateTranscriptOutputs: H,
                    unprovenTx: de(t.circuitId, r, s, i, I, H, j, q, E, re(E, t.coinPublicKey, n, t.additionalCoinEncPublicKeyMappings)),
                    newCoins: gt(v(c, h()), E)
                }
            };
        } catch (l) {
            throw !ot(l) || l._tag !== "ContractRuntimeError" || l.cause.name !== "CompactError" ? l : new Error(l.cause.message, {
                cause: l
            });
        }
    };
    const at = (e, t, n, a, r, c)=>{
        const s = {
            additionalCoinEncPublicKeyMappings: e.additionalCoinEncPublicKeyMappings,
            compiledContract: e.compiledContract,
            contractAddress: e.contractAddress,
            circuitId: e.circuitId
        }, o = {
            ..."args" in e ? {
                ...s,
                args: e.args
            } : s,
            coinPublicKey: v(t, h()),
            initialContractState: a,
            initialZswapChainState: r,
            ledgerParameters: n
        };
        return c ? {
            ...o,
            initialPrivateState: c
        } : o;
    }, ye = async (e, t, n)=>{
        const a = {
            contractAddress: t.contractAddress,
            privateStateId: t.privateStateId
        }, r = n?.[Z](a);
        if (r) return r;
        const c = await we(e.publicDataProvider, e.privateStateProvider, t.contractAddress, t.privateStateId);
        return n && n[O](c, a), c;
    }, ve = async (e, t, n)=>{
        const a = {
            contractAddress: t.contractAddress
        }, r = n?.[Z](a);
        if (r) return r;
        const c = await ht(e.publicDataProvider, t.contractAddress);
        return n && n[O]({
            ...c,
            privateState: void 0
        }, a), c;
    };
    Ct = async function(e, t, n) {
        p(t.contractAddress), d(S(t.compiledContract).getProvableCircuitIds().find((o)=>o === t.circuitId), `Circuit '${t.circuitId}' is undefined`);
        const a = "privateStateProvider" in e, r = "privateStateId" in t;
        if (r && !a) throw new L;
        if (r && a) {
            const { zswapChainState: o, contractState: u, privateState: f, ledgerParameters: g } = await ye(e, t, n);
            return nt(e.zkConfigProvider, at(t, v(e.walletProvider.getCoinPublicKey(), h()), g, u, o, f), e.walletProvider.getEncryptionPublicKey());
        }
        const { zswapChainState: c, contractState: s, ledgerParameters: i } = await ve(e, t, n);
        return nt(e.zkConfigProvider, at(t, v(e.walletProvider.getCoinPublicKey(), h()), i, s, c), e.walletProvider.getEncryptionPublicKey());
    };
    rt = async function(e, t, n) {
        p(t.contractAddress), d(S(t.compiledContract).getProvableCircuitIds().find((s)=>s === t.circuitId), `Circuit '${t.circuitId}' is undefined`);
        const a = "privateStateProvider" in e, r = "privateStateId" in t;
        if (r && !a) throw new L;
        a && e.privateStateProvider.setContractAddress(t.contractAddress);
        const c = async (s)=>{
            Se(s, t.circuitId, await Ct(e, t, s), r ? t.privateStateId : void 0);
        };
        return n ? k(e, c, n) : k(e, c);
    };
    Me = async function(e, t) {
        p(t.contractAddress), d(S(t.compiledContract).getProvableCircuitIds().find((s)=>s === t.circuitId), `Circuit '${t.circuitId}' is undefined`);
        const n = "privateStateProvider" in e;
        if ("privateStateId" in t && !n) throw new L;
        n && e.privateStateProvider.setContractAddress(t.contractAddress);
        const r = await Ct(e, t);
        return {
            txId: await Mt(e, {
                unprovenTx: r.private.unprovenTx,
                circuitId: t.circuitId
            }),
            callTxData: r
        };
    };
    let he, be;
    he = z;
    Re = async (e, t, n)=>k(e, t, n);
    Ce = (e, t, n, a, r, c)=>{
        const s = {
            additionalCoinEncPublicKeyMappings: r,
            compiledContract: e,
            circuitId: t,
            contractAddress: n
        }, i = c.length !== 0 ? {
            ...s,
            args: c
        } : s;
        return a ? {
            ...i,
            privateStateId: a
        } : i;
    };
    bt = (e, t, n, a)=>(p(n), e.privateStateProvider.setContractAddress(n), S(t).getProvableCircuitIds().reduce((r, c)=>({
                ...r,
                [c]: (...s)=>{
                    const i = s.length > 0 && he(s[0]) ? s[0] : void 0, o = i ? s.slice(1) : s, u = Ce(t, c, n, a, i?.getAdditionalMappings(), o);
                    return i ? rt(e, u, i) : rt(e, u);
                }
            }), {}));
    be = (e)=>{
        const t = {
            ...e,
            signingKey: e.signingKey ?? ct()
        };
        return "privateStateId" in e ? {
            ...t,
            privateStateId: e.privateStateId,
            initialPrivateState: e.initialPrivateState
        } : t;
    };
    Fe = async function(e, t) {
        const n = await pe(e, be(t));
        return {
            deployTxData: n,
            callTx: bt(e, t.compiledContract, n.public.contractAddress, "privateStateId" in t ? t.privateStateId : void 0),
            circuitMaintenanceTx: dt(e, t.compiledContract, n.public.contractAddress),
            contractMaintenanceTx: lt(e, t.compiledContract, n.public.contractAddress)
        };
    };
    let xe, Pe;
    xe = async (e, t)=>{
        if (t.signingKey) return await e.setSigningKey(t.contractAddress, t.signingKey), t.signingKey;
        const n = await e.getSigningKey(t.contractAddress);
        if (n) return n;
        const a = ct();
        return await e.setSigningKey(t.contractAddress, a), a;
    };
    Pe = async (e, t)=>{
        const n = "privateStateId" in t, a = "initialPrivateState" in t;
        if (n) {
            if (a) return await e.set(t.privateStateId, t.initialPrivateState), t.initialPrivateState;
            const r = await e.get(t.privateStateId);
            return d(r, `No private state found at private state ID '${t.privateStateId}'`), r;
        }
        if (a) throw new Nt;
    };
    Te = (e, t)=>e.length === t.length && G(e) === G(t);
    Ie = (e, t)=>{
        const n = e.reduce((a, [r, c])=>!t.operation(r) || !Te(c, t.operation(r).verifierKey) ? [
                ...a,
                r
            ] : a, []);
        if (n.length > 0) throw new Ft(t, n);
    };
    Ne = async function(e, t) {
        const { compiledContract: n, contractAddress: a } = t;
        p(a), e.privateStateProvider.setContractAddress(a);
        const r = await e.publicDataProvider.watchForDeployTxData(a), c = await e.publicDataProvider.queryDeployContractState(a);
        d(c, `No contract deployed at contract address '${a}'`);
        const s = await e.publicDataProvider.queryContractState(a);
        d(s, `No contract deployed at contract address '${a}'`);
        const i = await e.zkConfigProvider.getVerifierKeys(S(n).getProvableCircuitIds());
        Ie(i, s);
        const o = await xe(e.privateStateProvider, t), u = await Pe(e.privateStateProvider, t);
        return {
            deployTxData: {
                private: {
                    signingKey: o,
                    initialPrivateState: u
                },
                public: {
                    ...r,
                    contractAddress: a,
                    initialContractState: c
                }
            },
            callTx: bt(e, n, a, "privateStateId" in t ? t.privateStateId : void 0),
            circuitMaintenanceTx: dt(e, n, a),
            contractMaintenanceTx: lt(e, n, a)
        };
    };
    Be = async (e, t)=>{
        p(t);
        const n = await e.queryUnshieldedBalances(t);
        return d(n, `No unshielded balances found at contract address '${t}'`), n;
    };
});
export { ut as CallTxFailedError, Ft as ContractTypeError, Rt as DeployTxFailedError, L as IncompleteCallTxPrivateStateConfig, Nt as IncompleteFindContractPrivateStateConfig, Zt as InsertVerifierKeyTxFailedError, Vt as RemoveVerifierKeyTxFailedError, Lt as ReplaceMaintenanceAuthorityTxFailedError, T as TxFailedError, Ce as createCallTxOptions, bt as createCircuitCallTxInterface, Yt as createCircuitMaintenanceTxInterface, dt as createCircuitMaintenanceTxInterfaces, lt as createContractMaintenanceTxInterface, Ct as createUnprovenCallTx, nt as createUnprovenCallTxFromInitialStates, fe as createUnprovenDeployTx, le as createUnprovenDeployTxFromVerifierKeys, Fe as deployContract, Ne as findDeployedContract, ht as getPublicStates, we as getStates, Be as getUnshieldedBalances, rt as submitCallTx, Me as submitCallTxAsync, pe as submitDeployTx, Gt as submitInsertVerifierKeyTx, Wt as submitRemoveVerifierKeyTx, Jt as submitReplaceAuthorityTx, P as submitTx, Mt as submitTxAsync, Te as verifierKeysEqual, Ie as verifyContractState, Re as withContractScopedTransaction, __tla };
