import { C as i, t as g, c as V, q as p, a as b, e as T, __tla as __tla_0 } from "./circuit-context-Qno4kE-a.js";
import { M as h, b as S, v as L, C, S as u, a as d, c as _, d as f, e as I, Q as v, __tla as __tla_1 } from "./constants-D7c6DMua.js";
import "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
import "./__vite-plugin-wasm-helper-D7K_KhUE.js";
let k, A, Q, U;
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
    })()
]).then(async ()=>{
    const w = "0.16.0", P = (a)=>{
        const t = a.split("-")[0].split(".").map(Number), e = w.split("-")[0].split(".").map(Number);
        if (t[0] !== e[0] || e[0] === 0 && t[1] !== e[1] || t[1] > e[1] || t[1] === e[1] && t[2] > e[2]) throw new i(`Version mismatch: compiled code expects ${a}, runtime is ${w}`);
        const n = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
        if (n !== h) throw new i(`Maximum field mismatch: compiled code uses ${n}, runtime uses ${h}`);
    }, $ = {
        alignment () {
            return [
                {
                    tag: "atom",
                    value: {
                        tag: "field"
                    }
                }
            ];
        },
        fromValue (a) {
            const t = a.shift();
            if (t == null) throw new i("expected Field");
            return L([
                t
            ]);
        },
        toValue (a) {
            return S(a);
        }
    };
    class x {
        maxValue;
        length;
        constructor(t, e){
            this.maxValue = t, this.length = e;
        }
        alignment() {
            return [
                {
                    tag: "atom",
                    value: {
                        tag: "bytes",
                        length: this.length
                    }
                }
            ];
        }
        fromValue(t) {
            const e = t.shift();
            if (e == null) throw new i(`expected UnsignedInteger[<=${this.maxValue}]`);
            {
                let n = 0n;
                for(let r = 0; r < e.length; r++)n += (1n << 8n * BigInt(r)) * BigInt(e[r]);
                if (n > this.maxValue) throw new i(`expected UnsignedInteger[<=${this.maxValue}]`);
                return n;
            }
        }
        toValue(t) {
            return $.toValue(t);
        }
    }
    P("0.16.0");
    const s = new x(18446744073709551615n, 8), l = new x(255n, 1);
    k = class {
        witnesses;
        constructor(...t){
            if (t.length !== 1) throw new i(`Contract constructor: expected 1 argument, received ${t.length}`);
            const e = t[0];
            if (typeof e != "object") throw new i("first (witnesses) argument to Contract constructor is not an object");
            this.witnesses = e, this.circuits = {
                incrementCounter: (...n)=>{
                    if (n.length !== 2) throw new i(`incrementCounter: expected 2 arguments (as invoked from Typescript), received ${n.length}`);
                    const r = n[0], o = n[1];
                    typeof r == "object" && r.currentQueryContext != null || g("incrementCounter", "argument 1 (as invoked from Typescript)", "counter.compact line 15 char 1", "CircuitContext", r), typeof o == "bigint" && o >= 0n && o <= 18446744073709551615n || g("incrementCounter", "argument 1 (argument 2 as invoked from Typescript)", "counter.compact line 15 char 1", "Uint<0..18446744073709551616>", o);
                    const c = {
                        ...r,
                        gasCost: T()
                    }, m = {
                        input: {
                            value: s.toValue(o),
                            alignment: s.alignment()
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, y = this._incrementCounter_0(c, m, o);
                    return m.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: y,
                        context: c,
                        proofData: m,
                        gasCost: c.gasCost
                    };
                }
            }, this.impureCircuits = {
                incrementCounter: this.circuits.incrementCounter
            }, this.provableCircuits = {
                incrementCounter: this.circuits.incrementCounter
            };
        }
        initialState(...t) {
            if (t.length !== 1) throw new i(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${t.length}`);
            const e = t[0];
            if (typeof e != "object") throw new i("Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object");
            if (!("initialZswapLocalState" in e)) throw new i("Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)");
            if (typeof e.initialZswapLocalState != "object") throw new i("Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object");
            const n = new C;
            let r = u.newArray();
            r = r.arrayPush(u.newNull()), n.data = new d(r), n.setOperation("incrementCounter", new _);
            const o = V(f(), e.initialZswapLocalState.coinPublicKey, n.data, e.initialPrivateState);
            return p(o, {
                input: {
                    value: [],
                    alignment: []
                },
                output: void 0,
                publicTranscript: [],
                privateTranscriptOutputs: []
            }, [
                {
                    push: {
                        storage: !1,
                        value: u.newCell({
                            value: l.toValue(0n),
                            alignment: l.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: u.newCell({
                            value: s.toValue(0n),
                            alignment: s.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), n.data = new d(o.currentQueryContext.state.state), {
                currentContractState: n,
                currentPrivateState: o.currentPrivateState,
                currentZswapLocalState: o.currentZswapLocalState
            };
        }
        _incrementCounter_0(t, e, n) {
            b(n > 0n, "Increment amount must be greater than zero");
            const r = n, o = ((c)=>{
                if (c > 18446744073709551615n) throw new i("counter.compact line 21 char 15: cast from Field or Uint value to smaller Uint value failed: " + c + " is greater than 18446744073709551615");
                return c;
            })(s.fromValue(p(t, e, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: "value",
                                value: {
                                    value: l.toValue(0n),
                                    alignment: l.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    popeq: {
                        cached: !1,
                        result: void 0
                    }
                }
            ]).value) + r);
            return p(t, e, [
                {
                    push: {
                        storage: !1,
                        value: u.newCell({
                            value: l.toValue(0n),
                            alignment: l.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: u.newCell({
                            value: s.toValue(o),
                            alignment: s.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), [];
        }
    };
    Q = function(a) {
        a instanceof u || a.state;
        const t = a instanceof u ? new d(a) : a, e = {
            currentQueryContext: new v(t, f()),
            costModel: I.initialCostModel()
        }, n = {
            input: {
                value: [],
                alignment: []
            },
            output: void 0,
            publicTranscript: [],
            privateTranscriptOutputs: []
        };
        return {
            get counter () {
                return s.fromValue(p(e, n, [
                    {
                        dup: {
                            n: 0
                        }
                    },
                    {
                        idx: {
                            cached: !1,
                            pushPath: !1,
                            path: [
                                {
                                    tag: "value",
                                    value: {
                                        value: l.toValue(0n),
                                        alignment: l.alignment()
                                    }
                                }
                            ]
                        }
                    },
                    {
                        popeq: {
                            cached: !1,
                            result: void 0
                        }
                    }
                ]).value);
            }
        };
    };
    new v(new C().data, f());
    new k({});
    U = {};
    A = {
        tag: "publicLedgerArray",
        indices: {}
    };
});
export { k as Contract, A as contractReferenceLocations, Q as ledger, U as pureCircuits, __tla };
