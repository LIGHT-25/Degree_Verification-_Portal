import { b as $, C as R, d as T, f as U, c as _, __tla as __tla_0 } from "./circuit-context-Qno4kE-a.js";
import { s as V, f as F, g as Z, __tla as __tla_1 } from "./constants-D7c6DMua.js";
import { MaintenanceUpdate as Q, signData as j, ContractMaintenanceAuthority as N, ReplaceAuthority as H, VerifierKeyRemove as D, ContractOperationVersion as G, VerifierKeyInsert as X, ContractOperationVersionedVerifierKey as B, partitionTranscripts as J, LedgerParameters as W, PreTranscript as Y, StateValue as q, QueryContext as tt, ChargedState as et, __tla as __tla_2 } from "./ledger-KI6kX-Tc.js";
import { s as rt, T as O, i as S, p as nt, a as y, b as at, c as it, f as p, t as b, e as f, m as K, g as E, r as k, h as A, l as h, j as ot, k as ct, n as l, o as L, q as st, S as ut, u as pt, d as dt, K as m, v as M, w as lt } from "./ZKConfiguration-DQjWTRyA.js";
let Ot, yt, ft, Et;
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
    })()
]).then(async ()=>{
    let gt, mt, ht;
    gt = (n, t)=>({
            initialPrivateState: n,
            initialZswapLocalState: $(t)
        });
    yt = Symbol();
    ft = (n)=>n[yt];
    mt = (n)=>rt(()=>{
            const t = ft(n);
            if (!t.ctor) throw new Error("Invalid CompactContext (missing constructor)");
            return new t.ctor(t.witnesses);
        });
    ht = Symbol.for("compact-js/effect/ContractConfigurationError");
    class Ct extends O(ht, "ContractConfigurationError") {
    }
    const d = (n, t, e)=>new Ct({
            message: n,
            contractState: t,
            cause: e
        }), St = Symbol.for("compact-js/effect/ContractRuntimeError");
    class wt extends O(St, "ContractRuntimeError") {
    }
    const w = (n, t)=>new wt({
            message: n,
            cause: t
        }), vt = 1, Tt = 0n, bt = (n)=>{
        const t = q.decode(n.state.state.encode()), e = new tt(new et(t), n.address);
        return e.block = n.block, e.effects = n.effects, e;
    }, Kt = (n, t, e, a)=>{
        const o = J([
            new Y(Array.from(t.comIndices).reduce((s, r)=>s.insertCommitment(...r), bt(n)), e)
        ], a ?? W.initialParameters());
        return o.length === 1 ? l(o[0]) : h(new Error(`Expected one transcript partition pair, received: ${o.length}`));
    };
    class z {
        compiledContract;
        transform;
        constructor(t, e = S){
            this.compiledContract = t, this.transform = e;
        }
        pipe() {
            return nt(this, arguments);
        }
        initialize(t, ...e) {
            return y({
                zkConfigReader: at.pipe(it((a)=>a.createReader(this.compiledContract))),
                keyConfig: m,
                contract: this.createContract()
            }).pipe(p(({ zkConfigReader: a, keyConfig: o, contract: s })=>b({
                    try: ()=>{
                        const { currentContractState: r, currentPrivateState: c, currentZswapLocalState: i } = s.initialState(gt(t, M(o.coinPublicKey)), ...e);
                        return {
                            contractState: r,
                            privateState: c,
                            zswapLocalState: T(i)
                        };
                    },
                    catch: (r)=>r instanceof R ? w("Failed to initialize contract", r) : d("Failed to configure constructor context with coin public key", void 0, r)
                }).pipe(p(({ contractState: r, privateState: c, zswapLocalState: i })=>f(this, function*() {
                        const u = yield* a.getVerifierKeys(E(s));
                        for (const [g, v] of u){
                            if (A(v)) return yield* d(`Failed to find a verifier key for circuit '${g}'`, r);
                            const C = r.operation(g);
                            if (!C) return yield* d(`Circuit '${g}' is undefined for the given contract state`, r);
                            try {
                                C.verifierKey = v.value, r.setOperation(g, C);
                            } catch (P) {
                                return yield* d(`Failed to configure verifier key for circuit '${g}' for the given contract state`, r, P);
                            }
                        }
                        const [x, I] = yield* this.createMaintenanceAuthority(o.getSigningKey());
                        return r.maintenanceAuthority = x, {
                            public: {
                                contractState: r
                            },
                            private: {
                                signingKey: I,
                                privateState: c,
                                zswapLocalState: i
                            }
                        };
                    })))), this.transform);
        }
        circuit(t, e, ...a) {
            return y({
                keyConfig: m,
                contract: this.createContract()
            }).pipe(p(({ keyConfig: o, contract: s })=>b({
                    try: ()=>{
                        const r = s.provableCircuits[t];
                        if (!r) throw new Error(`Circuit ${this.compiledContract.tag}#${t} could not be found.`);
                        const c = e.zswapLocalState ? U(e.zswapLocalState) : $(M(o.coinPublicKey)), i = _(e.address, c, e.contractState, e.privateState), u = i.currentQueryContext;
                        return {
                            ...r(i, ...a),
                            initialTxContext: u
                        };
                    },
                    catch: S
                }).pipe(p(({ initialTxContext: r, result: c, context: i, proofData: u })=>f(function*() {
                        return {
                            public: {
                                contractState: i.currentQueryContext.state.state,
                                publicTranscript: u.publicTranscript,
                                partitionedTranscript: yield* Kt(r, i.currentQueryContext, u.publicTranscript, e.ledgerParameters)
                            },
                            private: {
                                result: c,
                                input: u.input,
                                output: u.output,
                                privateTranscriptOutputs: u.privateTranscriptOutputs,
                                privateState: i.currentPrivateState,
                                zswapLocalState: T(i.currentZswapLocalState)
                            }
                        };
                    })), K((r)=>w(`Error executing circuit '${t}'`, r)))), this.transform);
        }
        getProvableCircuitIds() {
            return E(k(this.createContract()));
        }
        replaceContractMaintenanceAuthority(t, e) {
            return y({
                keyConfig: m
            }).pipe(p(({ keyConfig: a })=>f(this, function*() {
                    const { contractState: o } = e, [s, r] = yield* this.createMaintenanceAuthority(t, o), c = N.deserialize(s.serialize()), i = yield* this.createSignedMaintenanceUpdate(()=>l([
                            new H(c)
                        ]), a, e);
                    return {
                        ...i,
                        private: {
                            ...i.private,
                            signingKey: r
                        }
                    };
                })), this.transform);
        }
        removeContractOperation(t, e) {
            return y({
                keyConfig: m
            }).pipe(p(({ keyConfig: a })=>f(this, function*() {
                    return yield* this.createSignedMaintenanceUpdate(()=>l([
                            new D(t, new G("v3"))
                        ]), a, e);
                })), this.transform);
        }
        addOrReplaceContractOperation(t, e, a) {
            return y({
                keyConfig: m
            }).pipe(p(({ keyConfig: o })=>f(this, function*() {
                    return yield* this.createSignedMaintenanceUpdate(()=>l([
                            new X(t, new B("v3", e))
                        ]), o, a);
                })), this.transform);
        }
        createSignedMaintenanceUpdate(t, e, a) {
            const { address: o, contractState: s } = a, r = e.getSigningKey();
            if (A(r)) return h(d("Signing key required to authorize contract maintenance update", s));
            const c = t();
            if (ot(c)) return h(c.left);
            const i = new Q(o, ct(c), s.maintenanceAuthority.counter);
            return l({
                public: {
                    maintenanceUpdate: i.addSignature(Tt, j(L(r), i.dataToSign))
                },
                private: {
                    signingKey: L(r)
                }
            });
        }
        createMaintenanceAuthority(t, e) {
            const a = st(t, {
                onSome: S,
                onNone: ()=>ut(V())
            });
            try {
                return l([
                    new F([
                        Z(a)
                    ], vt, e ? e.maintenanceAuthority.counter + 1n : 0n),
                    a
                ]);
            } catch (o) {
                return h(d(`Failed to create a signature verifying key for signing key '${a}'`, e, o));
            }
        }
        createContract() {
            return this.contract ??= mt(this.compiledContract).pipe(K((t)=>w(String(t), t)), pt, k);
        }
        contract;
    }
    let kt;
    Et = (n)=>new z(n);
    kt = dt(2, (n, t)=>new z(n.compiledContract, (e)=>lt(e, t)));
    Ot = Object.freeze(Object.defineProperty({
        __proto__: null,
        make: Et,
        provide: kt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Ot as C, yt as T, ft as g, Et as m, __tla };
