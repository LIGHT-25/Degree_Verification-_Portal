import { d as s, p as i } from "./ZKConfiguration-DQjWTRyA.js";
import { P as j, V as w, Z as A, g as S } from "./ZKConfiguration-DQjWTRyA.js";
import { g as a, T as e, __tla as __tla_0 } from "./ContractExecutable-D6pG9pG8.js";
import { C as v, __tla as __tla_1 } from "./ContractExecutable-D6pG9pG8.js";
import { __tla as __tla_2 } from "./circuit-context-Qno4kE-a.js";
import { __tla as __tla_3 } from "./constants-D7c6DMua.js";
import "./__vite-plugin-wasm-helper-D7K_KhUE.js";
import "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
import { __tla as __tla_4 } from "./ledger-KI6kX-Tc.js";
let h;
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
    })()
]).then(async ()=>{
    let n, c, p, m, l, u, C;
    n = Symbol.for("compact-js/CompiledContract");
    c = {
        [n]: {
            _C: (t)=>t,
            _PS: (t)=>t,
            _R: (t)=>t
        },
        pipe () {
            return i(this, arguments);
        }
    };
    p = (t, o)=>{
        const r = Object.create(c);
        return r.tag = t, r[e] = {
            ctor: o
        }, r;
    };
    m = s(2, (t, o)=>({
            ...t,
            [e]: {
                ...t[e],
                witnesses: o
            }
        }));
    l = (t)=>({
            ...t,
            [e]: {
                ...t[e],
                witnesses: {}
            }
        });
    u = s(2, (t, o)=>({
            ...t,
            [e]: {
                ...t[e],
                compiledAssetsPath: o
            }
        }));
    C = (t)=>a(t).compiledAssetsPath;
    h = Object.freeze(Object.defineProperty({
        __proto__: null,
        TypeId: n,
        getCompiledAssetsPath: C,
        make: p,
        withCompiledFileAssets: u,
        withVacantWitnesses: l,
        withWitnesses: m
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { h as CompiledContract, v as ContractExecutable, j as ProvableCircuitId, w as VerifierKey, A as ZKIR, S as getProvableCircuitIds, __tla };
