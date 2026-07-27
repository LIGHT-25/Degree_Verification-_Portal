import { _ as Y } from "./__vite-plugin-wasm-helper-D7K_KhUE.js";
let z, Io, v, g, m, yo, k, _e, F, x, ho, ko, Ao, xo, So, qo, Co, vo, zo, mo, Fo;
let __tla = (async ()=>{
    const Z = "/Degree_Verification-_Portal/assets/midnight_onchain_runtime_wasm_bg-D2U4EkPt.wasm";
    let n;
    function ee(t) {
        n = t;
    }
    function S(t) {
        const e = n.__externref_table_alloc();
        return n.__wbindgen_export_2.set(e, t), e;
    }
    function d(t, e) {
        try {
            return t.apply(this, e);
        } catch (r) {
            const _ = S(r);
            n.__wbindgen_exn_store(_);
        }
    }
    let j = null;
    function A() {
        return (j === null || j.byteLength === 0) && (j = new Uint8Array(n.memory.buffer)), j;
    }
    let M = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    M.decode();
    const te = 2146435072;
    let B = 0;
    function re(t, e) {
        return B += e, B >= te && (M = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), M.decode(), B = e), M.decode(A().subarray(t, t + e));
    }
    function a(t, e) {
        return t = t >>> 0, re(t, e);
    }
    let l = 0;
    const I = new TextEncoder;
    "encodeInto" in I || (I.encodeInto = function(t, e) {
        const r = I.encode(t);
        return e.set(r), {
            read: t.length,
            written: r.length
        };
    });
    function h(t, e, r) {
        if (r === void 0) {
            const u = I.encode(t), C = e(u.length, 1) >>> 0;
            return A().subarray(C, C + u.length).set(u), l = u.length, C;
        }
        let _ = t.length, o = e(_, 1) >>> 0;
        const s = A();
        let b = 0;
        for(; b < _; b++){
            const u = t.charCodeAt(b);
            if (u > 127) break;
            s[o + b] = u;
        }
        if (b !== _) {
            b !== 0 && (t = t.slice(b)), o = r(o, _, _ = b + t.length * 3, 1) >>> 0;
            const u = A().subarray(o + b, o + _), C = I.encodeInto(t, u);
            b += C.written, o = r(o, _, b, 1) >>> 0;
        }
        return l = b, o;
    }
    let q = null;
    function w() {
        return (q === null || q.buffer.detached === !0 || q.buffer.detached === void 0 && q.buffer !== n.memory.buffer) && (q = new DataView(n.memory.buffer)), q;
    }
    function c(t) {
        return t == null;
    }
    function O(t, e) {
        return t = t >>> 0, A().subarray(t / 1, t / 1 + e);
    }
    function H(t) {
        const e = typeof t;
        if (e == "number" || e == "boolean" || t == null) return `${t}`;
        if (e == "string") return `"${t}"`;
        if (e == "symbol") {
            const o = t.description;
            return o == null ? "Symbol" : `Symbol(${o})`;
        }
        if (e == "function") {
            const o = t.name;
            return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
        }
        if (Array.isArray(t)) {
            const o = t.length;
            let s = "[";
            o > 0 && (s += H(t[0]));
            for(let b = 1; b < o; b++)s += ", " + H(t[b]);
            return s += "]", s;
        }
        const r = /\[object ([^\]]+)\]/.exec(toString.call(t));
        let _;
        if (r && r.length > 1) _ = r[1];
        else return toString.call(t);
        if (_ == "Object") try {
            return "Object(" + JSON.stringify(t) + ")";
        } catch  {
            return "Object";
        }
        return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : _;
    }
    const J = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>{
        n.__wbindgen_export_5.get(t.dtor)(t.a, t.b);
    });
    function ne(t, e, r, _) {
        const o = {
            a: t,
            b: e,
            cnt: 1,
            dtor: r
        }, s = (...b)=>{
            o.cnt++;
            const u = o.a;
            o.a = 0;
            try {
                return _(u, o.b, ...b);
            } finally{
                --o.cnt === 0 ? (n.__wbindgen_export_5.get(o.dtor)(u, o.b), J.unregister(o)) : o.a = u;
            }
        };
        return s.original = o, J.register(s, o, o), s;
    }
    function i(t) {
        const e = n.__wbindgen_export_2.get(t);
        return n.__externref_table_dealloc(t), e;
    }
    _e = function() {
        let t, e;
        try {
            const o = n.dummyContractAddress();
            var r = o[0], _ = o[1];
            if (o[3]) throw r = 0, _ = 0, i(o[2]);
            return t = r, e = _, a(r, _);
        } finally{
            n.__wbindgen_free(t, e, 1);
        }
    };
    yo = function(t) {
        const e = n.bigIntToValue(t);
        if (e[2]) throw i(e[1]);
        return i(e[0]);
    };
    ho = function(t) {
        let e, r;
        try {
            const s = h(t, n.__wbindgen_malloc, n.__wbindgen_realloc), b = l, u = n.signatureVerifyingKey(s, b);
            var _ = u[0], o = u[1];
            if (u[3]) throw _ = 0, o = 0, i(u[2]);
            return e = _, r = o, a(_, o);
        } finally{
            n.__wbindgen_free(e, r, 1);
        }
    };
    function oe() {
        const t = n.maxField();
        if (t[2]) throw i(t[1]);
        return i(t[0]);
    }
    mo = function() {
        let t, e;
        try {
            const o = n.sampleSigningKey();
            var r = o[0], _ = o[1];
            if (o[3]) throw r = 0, _ = 0, i(o[2]);
            return t = r, e = _, a(r, _);
        } finally{
            n.__wbindgen_free(t, e, 1);
        }
    };
    Fo = function(t) {
        const e = n.valueToBigInt(t);
        if (e[2]) throw i(e[1]);
        return i(e[0]);
    };
    So = function(t) {
        const e = h(t, n.__wbindgen_malloc, n.__wbindgen_realloc), r = l, _ = n.encodeContractAddress(e, r);
        if (_[2]) throw i(_[1]);
        return i(_[0]);
    };
    vo = function(t) {
        let e, r;
        try {
            const s = n.decodeCoinPublicKey(t);
            var _ = s[0], o = s[1];
            if (s[3]) throw _ = 0, o = 0, i(s[2]);
            return e = _, r = o, a(_, o);
        } finally{
            n.__wbindgen_free(e, r, 1);
        }
    };
    xo = function(t) {
        const e = h(t, n.__wbindgen_malloc, n.__wbindgen_realloc), r = l, _ = n.encodeCoinPublicKey(e, r);
        if (_[2]) throw i(_[1]);
        return i(_[0]);
    };
    ko = function(t) {
        const e = n.encodeShieldedCoinInfo(t);
        if (e[2]) throw i(e[1]);
        return i(e[0]);
    };
    qo = function(t) {
        const e = n.decodeShieldedCoinInfo(t);
        if (e[2]) throw i(e[1]);
        return i(e[0]);
    };
    zo = function(t) {
        let e, r;
        try {
            const s = n.decodeContractAddress(t);
            var _ = s[0], o = s[1];
            if (s[3]) throw _ = 0, o = 0, i(s[2]);
            return e = _, r = o, a(_, o);
        } finally{
            n.__wbindgen_free(e, r, 1);
        }
    };
    Co = function(t) {
        const e = n.decodeQualifiedShieldedCoinInfo(t);
        if (e[2]) throw i(e[1]);
        return i(e[0]);
    };
    Ao = function(t) {
        const e = n.encodeQualifiedShieldedCoinInfo(t);
        if (e[2]) throw i(e[1]);
        return i(e[0]);
    };
    function f(t, e) {
        if (!(t instanceof e)) throw new Error(`expected instance of ${e.name}`);
    }
    function G(t, e) {
        t = t >>> 0;
        const r = w(), _ = [];
        for(let o = t; o < t + 4 * e; o += 4)_.push(n.__wbindgen_export_2.get(r.getUint32(o, !0)));
        return n.__externref_drop_slice(t, e), _;
    }
    function ie(t, e, r) {
        n.closure690_externref_shim(t, e, r);
    }
    function se(t, e, r, _) {
        n.closure730_externref_shim(t, e, r, _);
    }
    const L = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_chargedstate_free(t >>> 0, 1));
    m = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(m.prototype);
            return r.__wbg_ptr = e, L.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, L.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_chargedstate_free(e, 0);
        }
        constructor(e){
            f(e, g);
            const r = n.chargedstate_new(e.__wbg_ptr);
            return this.__wbg_ptr = r >>> 0, L.register(this, this.__wbg_ptr, this), this;
        }
        get state() {
            const e = n.chargedstate_state(this.__wbg_ptr);
            return g.__wrap(e);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.chargedstate_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
    const U = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_contractmaintenanceauthority_free(t >>> 0, 1));
    x = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(x.prototype);
            return r.__wbg_ptr = e, U.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, U.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_contractmaintenanceauthority_free(e, 0);
        }
        static deserialize(e) {
            const r = n.contractmaintenanceauthority_deserialize(e);
            if (r[2]) throw i(r[1]);
            return x.__wrap(r[0]);
        }
        constructor(e, r, _){
            const o = n.contractmaintenanceauthority_new(e, r, c(_) ? 0 : S(_));
            if (o[2]) throw i(o[1]);
            return this.__wbg_ptr = o[0] >>> 0, U.register(this, this.__wbg_ptr, this), this;
        }
        get counter() {
            return n.contractmaintenanceauthority_counter(this.__wbg_ptr);
        }
        get committee() {
            const e = n.contractmaintenanceauthority_committee(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        serialize() {
            const e = n.contractmaintenanceauthority_serialize(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        get threshold() {
            return n.contractmaintenanceauthority_threshold(this.__wbg_ptr) >>> 0;
        }
        toString(e) {
            let r, _;
            try {
                const o = n.contractmaintenanceauthority_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
    const $ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_contractoperation_free(t >>> 0, 1));
    k = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(k.prototype);
            return r.__wbg_ptr = e, $.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, $.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_contractoperation_free(e, 0);
        }
        static deserialize(e) {
            const r = n.contractoperation_deserialize(e);
            if (r[2]) throw i(r[1]);
            return k.__wrap(r[0]);
        }
        get verifierKey() {
            const e = n.contractoperation_verifier_key(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        set verifierKey(e) {
            const r = n.contractoperation_set_verifier_key(this.__wbg_ptr, e);
            if (r[1]) throw i(r[0]);
        }
        constructor(){
            const e = n.contractoperation_new();
            if (e[2]) throw i(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, $.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const e = n.contractoperation_serialize(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.contractoperation_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (k.prototype[Symbol.dispose] = k.prototype.free);
    const E = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_contractstate_free(t >>> 0, 1));
    z = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(z.prototype);
            return r.__wbg_ptr = e, E.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, E.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_contractstate_free(e, 0);
        }
        operations() {
            const e = n.contractstate_operations(this.__wbg_ptr);
            var r = G(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 4, 4), r;
        }
        static deserialize(e) {
            const r = n.contractstate_deserialize(e);
            if (r[2]) throw i(r[1]);
            return z.__wrap(r[0]);
        }
        set balance(e) {
            const r = n.contractstate_set_balance(this.__wbg_ptr, e);
            if (r[1]) throw i(r[0]);
        }
        setOperation(e, r) {
            f(r, k);
            const _ = n.contractstate_setOperation(this.__wbg_ptr, e, r.__wbg_ptr);
            if (_[1]) throw i(_[0]);
        }
        get maintenanceAuthority() {
            const e = n.contractstate_maintenance_authority(this.__wbg_ptr);
            return x.__wrap(e);
        }
        set maintenanceAuthority(e) {
            f(e, x), n.contractstate_set_maintenance_authority(this.__wbg_ptr, e.__wbg_ptr);
        }
        constructor(){
            const e = n.contractstate_new();
            return this.__wbg_ptr = e >>> 0, E.register(this, this.__wbg_ptr, this), this;
        }
        get data() {
            const e = n.contractstate_data(this.__wbg_ptr);
            return m.__wrap(e);
        }
        query(e, r) {
            f(r, F);
            const _ = n.contractstate_query(this.__wbg_ptr, e, r.__wbg_ptr);
            if (_[2]) throw i(_[1]);
            return i(_[0]);
        }
        get balance() {
            const e = n.contractstate_balance(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        set data(e) {
            f(e, m), n.contractstate_set_data(this.__wbg_ptr, e.__wbg_ptr);
        }
        operation(e) {
            const r = n.contractstate_operation(this.__wbg_ptr, e);
            if (r[2]) throw i(r[1]);
            return r[0] === 0 ? void 0 : k.__wrap(r[0]);
        }
        serialize() {
            const e = n.contractstate_serialize(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.contractstate_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (z.prototype[Symbol.dispose] = z.prototype.free);
    const P = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_costmodel_free(t >>> 0, 1));
    F = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(F.prototype);
            return r.__wbg_ptr = e, P.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, P.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_costmodel_free(e, 0);
        }
        static initialCostModel() {
            const e = n.costmodel_initialCostModel();
            return F.__wrap(e);
        }
        constructor(){
            const e = n.costmodel_new();
            if (e[2]) throw i(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, P.register(this, this.__wbg_ptr, this), this;
        }
        toString(e) {
            let r, _;
            try {
                const o = n.costmodel_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((t)=>n.__wbg_intounderlyingbytesource_free(t >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((t)=>n.__wbg_intounderlyingsink_free(t >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((t)=>n.__wbg_intounderlyingsource_free(t >>> 0, 1));
    const D = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_querycontext_free(t >>> 0, 1));
    v = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(v.prototype);
            return r.__wbg_ptr = e, D.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, D.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_querycontext_free(e, 0);
        }
        get comIndices() {
            const e = n.querycontext_com_indices(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        set effects(e) {
            const r = n.querycontext_set_effects(this.__wbg_ptr, e);
            if (r[1]) throw i(r[0]);
        }
        toVmStack() {
            const e = n.querycontext_toVmStack(this.__wbg_ptr);
            return T.__wrap(e);
        }
        runTranscript(e, r) {
            f(r, F);
            const _ = n.querycontext_runTranscript(this.__wbg_ptr, e, r.__wbg_ptr);
            if (_[2]) throw i(_[1]);
            return v.__wrap(_[0]);
        }
        insertCommitment(e, r) {
            const _ = h(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = l, s = n.querycontext_insertCommitment(this.__wbg_ptr, _, o, r);
            if (s[2]) throw i(s[1]);
            return v.__wrap(s[0]);
        }
        constructor(e, r){
            f(e, m);
            const _ = h(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = l, s = n.querycontext_new(e.__wbg_ptr, _, o);
            if (s[2]) throw i(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, D.register(this, this.__wbg_ptr, this), this;
        }
        get block() {
            const e = n.querycontext_block(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        query(e, r, _) {
            f(r, F);
            const o = n.querycontext_query(this.__wbg_ptr, e, r.__wbg_ptr, _);
            if (o[2]) throw i(o[1]);
            return R.__wrap(o[0]);
        }
        get state() {
            const e = n.querycontext_state(this.__wbg_ptr);
            return m.__wrap(e);
        }
        get address() {
            let e, r;
            try {
                const s = n.querycontext_address(this.__wbg_ptr);
                var _ = s[0], o = s[1];
                if (s[3]) throw _ = 0, o = 0, i(s[2]);
                return e = _, r = o, a(_, o);
            } finally{
                n.__wbindgen_free(e, r, 1);
            }
        }
        get effects() {
            const e = n.querycontext_effects(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        qualify(e) {
            const r = n.querycontext_qualify(this.__wbg_ptr, e);
            if (r[2]) throw i(r[1]);
            return i(r[0]);
        }
        set block(e) {
            const r = n.querycontext_set_block(this.__wbg_ptr, e);
            if (r[1]) throw i(r[0]);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.querycontext_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
    const N = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_queryresults_free(t >>> 0, 1));
    class R {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(R.prototype);
            return r.__wbg_ptr = e, N.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, N.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_queryresults_free(e, 0);
        }
        constructor(){
            const e = n.queryresults_new();
            if (e[2]) throw i(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, N.register(this, this.__wbg_ptr, this), this;
        }
        get events() {
            const e = n.queryresults_events(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        get context() {
            const e = n.queryresults_context(this.__wbg_ptr);
            return v.__wrap(e);
        }
        get gasCost() {
            const e = n.queryresults_gas_cost(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.queryresults_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    }
    Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
    const K = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_stateboundedmerkletree_free(t >>> 0, 1));
    class p {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(p.prototype);
            return r.__wbg_ptr = e, K.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, K.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_stateboundedmerkletree_free(e, 0);
        }
        pathForLeaf(e, r) {
            const _ = n.stateboundedmerkletree_pathForLeaf(this.__wbg_ptr, e, r);
            if (_[2]) throw i(_[1]);
            return i(_[0]);
        }
        findPathForLeaf(e) {
            const r = n.stateboundedmerkletree_findPathForLeaf(this.__wbg_ptr, e);
            if (r[2]) throw i(r[1]);
            return i(r[0]);
        }
        root() {
            const e = n.stateboundedmerkletree_root(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        constructor(e){
            const r = n.stateboundedmerkletree_blank(e);
            return this.__wbg_ptr = r >>> 0, K.register(this, this.__wbg_ptr, this), this;
        }
        get height() {
            return n.stateboundedmerkletree_height(this.__wbg_ptr);
        }
        rehash() {
            const e = n.stateboundedmerkletree_rehash(this.__wbg_ptr);
            return p.__wrap(e);
        }
        update(e, r) {
            const _ = n.stateboundedmerkletree_update(this.__wbg_ptr, e, r);
            if (_[2]) throw i(_[1]);
            return p.__wrap(_[0]);
        }
        collapse(e, r) {
            const _ = n.stateboundedmerkletree_collapse(this.__wbg_ptr, e, r);
            return p.__wrap(_);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.stateboundedmerkletree_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    }
    Symbol.dispose && (p.prototype[Symbol.dispose] = p.prototype.free);
    const V = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_statemap_free(t >>> 0, 1));
    class y {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(y.prototype);
            return r.__wbg_ptr = e, V.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, V.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_statemap_free(e, 0);
        }
        get(e) {
            const r = n.statemap_get(this.__wbg_ptr, e);
            if (r[2]) throw i(r[1]);
            return r[0] === 0 ? void 0 : g.__wrap(r[0]);
        }
        constructor(){
            const e = n.statemap_new();
            return this.__wbg_ptr = e >>> 0, V.register(this, this.__wbg_ptr, this), this;
        }
        keys() {
            const e = n.statemap_keys(this.__wbg_ptr);
            if (e[3]) throw i(e[2]);
            var r = G(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 4, 4), r;
        }
        insert(e, r) {
            f(r, g);
            const _ = n.statemap_insert(this.__wbg_ptr, e, r.__wbg_ptr);
            if (_[2]) throw i(_[1]);
            return y.__wrap(_[0]);
        }
        remove(e) {
            const r = n.statemap_remove(this.__wbg_ptr, e);
            if (r[2]) throw i(r[1]);
            return y.__wrap(r[0]);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.statemap_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    }
    Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
    const W = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_statevalue_free(t >>> 0, 1));
    g = class {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(g.prototype);
            return r.__wbg_ptr = e, W.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, W.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_statevalue_free(e, 0);
        }
        arrayPush(e) {
            f(e, g);
            const r = n.statevalue_arrayPush(this.__wbg_ptr, e.__wbg_ptr);
            if (r[2]) throw i(r[1]);
            return g.__wrap(r[0]);
        }
        asBoundedMerkleTree() {
            const e = n.statevalue_asBoundedMerkleTree(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return e[0] === 0 ? void 0 : p.__wrap(e[0]);
        }
        static newBoundedMerkleTree(e) {
            f(e, p);
            const r = n.statevalue_newBoundedMerkleTree(e.__wbg_ptr);
            return g.__wrap(r);
        }
        constructor(){
            const e = n.statevalue_new();
            if (e[2]) throw i(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, W.register(this, this.__wbg_ptr, this), this;
        }
        type() {
            let e, r;
            try {
                const _ = n.statevalue_type(this.__wbg_ptr);
                return e = _[0], r = _[1], a(_[0], _[1]);
            } finally{
                n.__wbindgen_free(e, r, 1);
            }
        }
        asMap() {
            const e = n.statevalue_asMap(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return e[0] === 0 ? void 0 : y.__wrap(e[0]);
        }
        static decode(e) {
            const r = n.statevalue_decode(e);
            if (r[2]) throw i(r[1]);
            return g.__wrap(r[0]);
        }
        encode() {
            const e = n.statevalue_encode(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        asCell() {
            const e = n.statevalue_asCell(this.__wbg_ptr);
            if (e[2]) throw i(e[1]);
            return i(e[0]);
        }
        static newMap(e) {
            f(e, y);
            const r = n.statevalue_newMap(e.__wbg_ptr);
            return g.__wrap(r);
        }
        asArray() {
            const e = n.statevalue_asArray(this.__wbg_ptr);
            if (e[3]) throw i(e[2]);
            let r;
            return e[0] !== 0 && (r = G(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), r;
        }
        logSize() {
            return n.statevalue_logSize(this.__wbg_ptr) >>> 0;
        }
        static newCell(e) {
            const r = n.statevalue_newCell(e);
            if (r[2]) throw i(r[1]);
            return g.__wrap(r[0]);
        }
        static newNull() {
            const e = n.statevalue_newNull();
            return g.__wrap(e);
        }
        static newArray() {
            const e = n.statevalue_newArray();
            return g.__wrap(e);
        }
        toString(e) {
            let r, _;
            try {
                const o = n.statevalue_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    };
    Symbol.dispose && (g.prototype[Symbol.dispose] = g.prototype.free);
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((t)=>n.__wbg_vmresults_free(t >>> 0, 1));
    const Q = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>n.__wbg_vmstack_free(t >>> 0, 1));
    class T {
        static __wrap(e) {
            e = e >>> 0;
            const r = Object.create(T.prototype);
            return r.__wbg_ptr = e, Q.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Q.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_vmstack_free(e, 0);
        }
        removeLast() {
            n.vmstack_removeLast(this.__wbg_ptr);
        }
        get(e) {
            const r = n.vmstack_get(this.__wbg_ptr, e);
            return r === 0 ? void 0 : g.__wrap(r);
        }
        constructor(){
            const e = n.vmstack_new();
            return this.__wbg_ptr = e >>> 0, Q.register(this, this.__wbg_ptr, this), this;
        }
        push(e, r) {
            f(e, g), n.vmstack_push(this.__wbg_ptr, e.__wbg_ptr, r);
        }
        length() {
            return n.vmstack_length(this.__wbg_ptr) >>> 0;
        }
        isStrong(e) {
            const r = n.vmstack_isStrong(this.__wbg_ptr, e);
            return r === 16777215 ? void 0 : r !== 0;
        }
        toString(e) {
            let r, _;
            try {
                const o = n.vmstack_toString(this.__wbg_ptr, c(e) ? 16777215 : e ? 1 : 0);
                return r = o[0], _ = o[1], a(o[0], o[1]);
            } finally{
                n.__wbindgen_free(r, _, 1);
            }
        }
    }
    Symbol.dispose && (T.prototype[Symbol.dispose] = T.prototype.free);
    function ce() {
        return d(function(t) {
            return BigInt(t);
        }, arguments);
    }
    function ae(t) {
        return BigInt(t);
    }
    function be(t, e) {
        return Error(a(t, e));
    }
    function ue(t) {
        return Number(t);
    }
    function ge(t, e) {
        const r = String(e), _ = h(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = l;
        w().setInt32(t + 4, o, !0), w().setInt32(t + 0, _, !0);
    }
    function fe(t) {
        return t.buffer;
    }
    function de(t) {
        const e = t.byobRequest;
        return c(e) ? 0 : S(e);
    }
    function we(t) {
        return t.byteLength;
    }
    function le(t) {
        return t.byteOffset;
    }
    function pe() {
        return d(function(t, e) {
            return t.call(e);
        }, arguments);
    }
    function ye() {
        return d(function(t, e, r) {
            return t.call(e, r);
        }, arguments);
    }
    function he() {
        return d(function(t) {
            t.close();
        }, arguments);
    }
    function me() {
        return d(function(t) {
            t.close();
        }, arguments);
    }
    function Fe(t) {
        return z.__wrap(t);
    }
    function Se(t) {
        return t.crypto;
    }
    function ve(t) {
        return t.done;
    }
    function xe() {
        return d(function(t, e) {
            t.enqueue(e);
        }, arguments);
    }
    function ke(t) {
        return Object.entries(t);
    }
    function qe(t) {
        return Array.from(t);
    }
    function ze() {
        return d(function(t, e) {
            t.getRandomValues(e);
        }, arguments);
    }
    function Ce(t, e) {
        return t[e >>> 0];
    }
    function Ae() {
        return d(function(t, e) {
            return Reflect.get(t, e);
        }, arguments);
    }
    function Ie(t, e) {
        return t.get(e);
    }
    function Re(t, e) {
        return t[e];
    }
    function Te(t) {
        let e;
        try {
            e = t instanceof ArrayBuffer;
        } catch  {
            e = !1;
        }
        return e;
    }
    function je(t) {
        let e;
        try {
            e = t instanceof Map;
        } catch  {
            e = !1;
        }
        return e;
    }
    function Me(t) {
        let e;
        try {
            e = t instanceof Uint8Array;
        } catch  {
            e = !1;
        }
        return e;
    }
    function Oe(t) {
        return Array.isArray(t);
    }
    function Be(t) {
        return Number.isSafeInteger(t);
    }
    function Le() {
        return Symbol.iterator;
    }
    function Ue(t) {
        return t.keys();
    }
    function $e(t) {
        return t.length;
    }
    function Ee(t) {
        return t.length;
    }
    function Pe(t) {
        return t.msCrypto;
    }
    function De() {
        return new Object;
    }
    function Ne() {
        return new Array;
    }
    function Ke(t, e) {
        try {
            var r = {
                a: t,
                b: e
            }, _ = (s, b)=>{
                const u = r.a;
                r.a = 0;
                try {
                    return se(u, r.b, s, b);
                } finally{
                    r.a = u;
                }
            };
            return new Promise(_);
        } finally{
            r.a = r.b = 0;
        }
    }
    function Ve() {
        return new Map;
    }
    function We(t) {
        return new Uint8Array(t);
    }
    function Qe(t, e) {
        return new Error(a(t, e));
    }
    function He(t, e) {
        return new Uint8Array(O(t, e));
    }
    function Ge(t, e) {
        return new Function(a(t, e));
    }
    function Je(t, e, r) {
        return new Uint8Array(t, e >>> 0, r >>> 0);
    }
    function Xe(t) {
        return new Uint8Array(t >>> 0);
    }
    function Ye(t) {
        return t.next;
    }
    function Ze() {
        return d(function(t) {
            return t.next();
        }, arguments);
    }
    function et(t) {
        return t.node;
    }
    function tt(t) {
        return t.process;
    }
    function rt(t, e, r) {
        Uint8Array.prototype.set.call(O(t, e), r);
    }
    function nt(t, e) {
        return t.push(e);
    }
    function _t(t) {
        queueMicrotask(t);
    }
    function ot(t) {
        return t.queueMicrotask;
    }
    function it() {
        return d(function(t, e) {
            t.randomFillSync(e);
        }, arguments);
    }
    function st() {
        return d(function() {
            return module.require;
        }, arguments);
    }
    function ct(t) {
        return Promise.resolve(t);
    }
    function at() {
        return d(function(t, e) {
            t.respond(e >>> 0);
        }, arguments);
    }
    function bt(t, e, r) {
        t.set(O(e, r));
    }
    function ut(t, e, r) {
        t[e] = r;
    }
    function gt(t, e, r) {
        t[e >>> 0] = r;
    }
    function ft(t, e, r) {
        return t.set(e, r);
    }
    function dt(t) {
        return g.__wrap(t);
    }
    function wt() {
        const t = typeof global > "u" ? null : global;
        return c(t) ? 0 : S(t);
    }
    function lt() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return c(t) ? 0 : S(t);
    }
    function pt() {
        const t = typeof self > "u" ? null : self;
        return c(t) ? 0 : S(t);
    }
    function yt() {
        const t = typeof window > "u" ? null : window;
        return c(t) ? 0 : S(t);
    }
    function ht(t, e, r) {
        return t.subarray(e >>> 0, r >>> 0);
    }
    function mt(t, e) {
        return t.then(e);
    }
    function Ft() {
        return d(function(t, e) {
            return t.toString(e);
        }, arguments);
    }
    function St(t) {
        return t.toString();
    }
    function vt(t) {
        return t.value;
    }
    function xt(t) {
        return t.versions;
    }
    function kt(t) {
        const e = t.view;
        return c(e) ? 0 : S(e);
    }
    function qt(t, e) {
        const r = e, _ = typeof r == "bigint" ? r : void 0;
        w().setBigInt64(t + 8, c(_) ? BigInt(0) : _, !0), w().setInt32(t + 0, !c(_), !0);
    }
    function zt(t) {
        const e = t, r = typeof e == "boolean" ? e : void 0;
        return c(r) ? 16777215 : r ? 1 : 0;
    }
    function Ct(t) {
        const e = t.original;
        return e.cnt-- == 1 ? (e.a = 0, !0) : !1;
    }
    function At(t, e) {
        const r = H(e), _ = h(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = l;
        w().setInt32(t + 4, o, !0), w().setInt32(t + 0, _, !0);
    }
    function It(t, e) {
        return t in e;
    }
    function Rt(t) {
        return typeof t == "bigint";
    }
    function Tt(t) {
        return typeof t == "function";
    }
    function jt(t) {
        return t === null;
    }
    function Mt(t) {
        const e = t;
        return typeof e == "object" && e !== null;
    }
    function Ot(t) {
        return typeof t == "string";
    }
    function Bt(t) {
        return t === void 0;
    }
    function Lt(t, e) {
        return t === e;
    }
    function Ut(t, e) {
        return t == e;
    }
    function $t(t, e) {
        const r = e, _ = typeof r == "number" ? r : void 0;
        w().setFloat64(t + 8, c(_) ? 0 : _, !0), w().setInt32(t + 0, !c(_), !0);
    }
    function Et(t, e) {
        return t >> e;
    }
    function Pt(t, e) {
        const r = e, _ = typeof r == "string" ? r : void 0;
        var o = c(_) ? 0 : h(_, n.__wbindgen_malloc, n.__wbindgen_realloc), s = l;
        w().setInt32(t + 4, s, !0), w().setInt32(t + 0, o, !0);
    }
    function Dt(t, e) {
        throw new Error(a(t, e));
    }
    function Nt(t, e) {
        return a(t, e);
    }
    function Kt(t) {
        return BigInt.asUintN(64, t);
    }
    function Vt(t) {
        return t;
    }
    function Wt(t, e) {
        return ne(t, e, 689, ie);
    }
    function Qt(t, e) {
        return O(t, e);
    }
    function Ht(t) {
        return t;
    }
    function Gt(t, e) {
        return BigInt.asUintN(64, t) | BigInt.asUintN(64, e) << BigInt(64);
    }
    function Jt() {
        const t = n.__wbindgen_export_2, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1);
    }
    URL = globalThis.URL;
    const Xt = await Y({
        "./midnight_onchain_runtime_wasm_bg.js": {
            __wbg_statevalue_new: dt,
            __wbg_contractstate_new: Fe,
            __wbg_getwithrefkey_1dc361bd10053bfe: Re,
            __wbg_set_3f1d0b984ed272ed: ut,
            __wbg_String_8f0eb39a4a4c2f66: ge,
            __wbg_queueMicrotask_25d0739ac89e8c88: _t,
            __wbg_queueMicrotask_4488407636f5bf24: ot,
            __wbg_respond_6c2c4e20ef85138e: at,
            __wbg_view_91cc97d57ab30530: kt,
            __wbg_byobRequest_2c036bceca1e6037: de,
            __wbg_close_cccada6053ee3a65: he,
            __wbg_enqueue_452bc2343d1c2ff9: xe,
            __wbg_close_d71a78219dc23e91: me,
            __wbg_crypto_86f2631e91b51511: Se,
            __wbg_process_3975fd6c72f520aa: tt,
            __wbg_versions_4e31226f5e8dc909: xt,
            __wbg_node_e1f24f89a7336c2e: et,
            __wbg_require_b74f47fc2d022fd6: st,
            __wbg_msCrypto_d562bbe83e0d4b91: Pe,
            __wbg_getRandomValues_b3f15fcbfabb0f8b: ze,
            __wbg_randomFillSync_f8c153b79f285817: it,
            __wbg_byteLength_331a6b5545834024: we,
            __wbg_byteOffset_49a5b5608000358b: le,
            __wbg_newfromslice_074c56947bd43469: He,
            __wbg_newwithlength_a167dcc7aaa3ba77: Xe,
            __wbg_newwithbyteoffsetandlength_e8f53910b4d42b45: Je,
            __wbg_new_638ebfaedbf32a5e: We,
            __wbg_buffer_8d40b1d762fb3c66: fe,
            __wbg_length_6bb7e81f9d7713e4: Ee,
            __wbg_prototypesetcall_3d4a26c1ed734349: rt,
            __wbg_subarray_70fd07feefe14294: ht,
            __wbg_set_1353b2a5e96bc48c: bt,
            __wbg_BigInt_40a77d45cca49470: ce,
            __wbg_done_75ed0ee6dd243d9d: ve,
            __wbg_value_dd9372230531eade: vt,
            __wbg_instanceof_Map_ebb01a5b6b5ffd0b: je,
            __wbg_instanceof_Uint8Array_9a8378d955933db7: Me,
            __wbg_instanceof_ArrayBuffer_67f3012529f6a2dd: Te,
            __wbg_BigInt_6adbfd8eb0f7ec07: ae,
            __wbg_get_5ee3191755594360: Ie,
            __wbg_new_2ff1f68f3676ea53: Ve,
            __wbg_set_b7f1cf4fae26fe2a: ft,
            __wbg_keys_822161a7faf55538: Ue,
            __wbg_get_0da715ceaecea5c8: Ce,
            __wbg_new_1f3a344cf3123716: Ne,
            __wbg_set_90f6c0f7bd8c0415: gt,
            __wbg_from_88bc52ce20ba6318: qe,
            __wbg_push_330b2eb93e4e1212: nt,
            __wbg_length_186546c51cd61acd: $e,
            __wbg_isArray_030cce220591fb41: Oe,
            __wbg_new_da9dc54c5db29dfa: Qe,
            __wbg_toString_d8f537919ef401d6: St,
            __wbg_toString_7268338f40012a03: Ft,
            __wbg_isSafeInteger_1c0d1af5542e102a: Be,
            __wbg_new_19c25a3f2fa63a02: De,
            __wbg_entries_2be2f15bd5554996: ke,
            __wbg_iterator_f370b34483c71a1c: Le,
            __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: lt,
            __wbg_static_accessor_SELF_995b214ae681ff99: pt,
            __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: wt,
            __wbg_static_accessor_WINDOW_cde3890479c675ea: yt,
            __wbg_new_2e3c58a15f39f5f9: Ke,
            __wbg_then_e22500defe16819f: mt,
            __wbg_resolve_4055c623acdd6a1b: ct,
            __wbg_get_458e874b43b18b25: Ae,
            __wbg_newnoargs_254190557c45b4ec: Ge,
            __wbg_call_13410aac570ffff7: pe,
            __wbg_call_a5400b25a865cfd8: ye,
            __wbg_next_5b3530e612fde77d: Ye,
            __wbg_next_692e82279131b03c: Ze,
            __wbg_wbindgenin_d7a1ee10933d2d55: It,
            __wbg_wbindgenshr_7d2aae6044c0dab1: Et,
            __wbg_wbindgenthrow_451ec1a8469d7eb6: Dt,
            __wbg_wbindgencbdrop_eb10308566512b88: Ct,
            __wbg_wbindgenisnull_f3037694abe4d97a: jt,
            __wbg_wbindgenjsvaleq_e6f2ad59ccae1b58: Lt,
            __wbg_Number_998bea33bd87c3e0: ue,
            __wbg_Error_e17e777aac105295: be,
            __wbg_wbindgenisbigint_ecb90cc08a5a9154: Rt,
            __wbg_wbindgenisobject_307a53c6bd97fbf8: Mt,
            __wbg_wbindgenisstring_d4fa939789f003b0: Ot,
            __wbg_wbindgennumberget_f74b4c7525ac05cb: $t,
            __wbg_wbindgenstringget_0f16a6ddddef376f: Pt,
            __wbg_wbindgenbooleanget_3fe6f642c7d97746: zt,
            __wbg_wbindgenisfunction_8cee7dce3725ae74: Tt,
            __wbg_wbindgenisundefined_c4b71d073b92f3c5: Bt,
            __wbg_wbindgenjsvallooseeq_9bec8c9be826bed1: Ut,
            __wbg_wbindgenbigintgetasi64_ac743ece6ab9bba1: qt,
            __wbg_wbindgendebugstring_99ef257a3ddda34d: At,
            __wbindgen_init_externref_table: Jt,
            __wbindgen_cast_e7b45dd881f38ce3: Gt,
            __wbindgen_cast_2241b6af4c4b2941: Nt,
            __wbindgen_cast_9ae0607507abb057: Vt,
            __wbindgen_cast_4625c577ab2ec9ee: Kt,
            __wbindgen_cast_9f23747c70687cbf: Wt,
            __wbindgen_cast_cb9088102bce6b30: Qt,
            __wbindgen_cast_d6cd19b81560fd6e: Ht
        }
    }, Z), { memory: Yt, __wbg_chargedstate_free: Zt, __wbg_contractmaintenanceauthority_free: er, __wbg_contractoperation_free: tr, __wbg_contractstate_free: rr, __wbg_costmodel_free: nr, __wbg_querycontext_free: _r, __wbg_queryresults_free: or, __wbg_stateboundedmerkletree_free: ir, __wbg_statemap_free: sr, __wbg_statevalue_free: cr, __wbg_vmresults_free: ar, __wbg_vmstack_free: br, bigIntModFr: ur, bigIntToValue: gr, chargedstate_new: fr, chargedstate_state: dr, chargedstate_toString: wr, communicationCommitment: lr, communicationCommitmentRandomness: pr, contractmaintenanceauthority_committee: yr, contractmaintenanceauthority_counter: hr, contractmaintenanceauthority_deserialize: mr, contractmaintenanceauthority_new: Fr, contractmaintenanceauthority_serialize: Sr, contractmaintenanceauthority_threshold: vr, contractmaintenanceauthority_toString: xr, contractoperation_deserialize: kr, contractoperation_new: qr, contractoperation_serialize: zr, contractoperation_set_verifier_key: Cr, contractoperation_toString: Ar, contractoperation_verifier_key: Ir, contractstate_balance: Rr, contractstate_data: Tr, contractstate_deserialize: jr, contractstate_maintenance_authority: Mr, contractstate_new: Or, contractstate_operation: Br, contractstate_operations: Lr, contractstate_query: Ur, contractstate_serialize: $r, contractstate_setOperation: Er, contractstate_set_balance: Pr, contractstate_set_data: Dr, contractstate_set_maintenance_authority: Nr, contractstate_toString: Kr, costmodel_initialCostModel: Vr, costmodel_new: Wr, costmodel_toString: Qr, decodeCoinPublicKey: Hr, decodeContractAddress: Gr, decodeQualifiedShieldedCoinInfo: Jr, decodeRawTokenType: Xr, decodeShieldedCoinInfo: Yr, decodeUserAddress: Zr, degradeToTransient: en, dummyContractAddress: tn, dummyUserAddress: rn, ecAdd: nn, ecMul: _n, ecMulGenerator: on, encodeCoinPublicKey: sn, encodeContractAddress: cn, encodeQualifiedShieldedCoinInfo: an, encodeRawTokenType: bn, encodeShieldedCoinInfo: un, encodeUserAddress: gn, entryPointHash: fn, hashToCurve: dn, leafHash: wn, maxAlignedSize: ln, maxField: pn, persistentCommit: yn, persistentHash: hn, proofDataIntoSerializedPreimage: mn, querycontext_address: Fn, querycontext_block: Sn, querycontext_com_indices: vn, querycontext_effects: xn, querycontext_insertCommitment: kn, querycontext_new: qn, querycontext_qualify: zn, querycontext_query: Cn, querycontext_runTranscript: An, querycontext_set_block: In, querycontext_set_effects: Rn, querycontext_state: Tn, querycontext_toString: jn, querycontext_toVmStack: Mn, queryresults_context: On, queryresults_events: Bn, queryresults_gas_cost: Ln, queryresults_new: Un, queryresults_toString: $n, rawTokenType: En, runProgram: Pn, runtimeCoinCommitment: Dn, runtimeCoinNullifier: Nn, sampleContractAddress: Kn, sampleRawTokenType: Vn, sampleSigningKey: Wn, sampleUserAddress: Qn, signData: Hn, signatureVerifyingKey: Gn, signingKeyFromBip340: Jn, stateboundedmerkletree_blank: Xn, stateboundedmerkletree_collapse: Yn, stateboundedmerkletree_findPathForLeaf: Zn, stateboundedmerkletree_height: e_, stateboundedmerkletree_pathForLeaf: t_, stateboundedmerkletree_rehash: r_, stateboundedmerkletree_root: n_, stateboundedmerkletree_toString: __, stateboundedmerkletree_update: o_, statemap_get: i_, statemap_insert: s_, statemap_keys: c_, statemap_new: a_, statemap_remove: b_, statemap_toString: u_, statevalue_arrayPush: g_, statevalue_asArray: f_, statevalue_asBoundedMerkleTree: d_, statevalue_asCell: w_, statevalue_asMap: l_, statevalue_decode: p_, statevalue_encode: y_, statevalue_logSize: h_, statevalue_new: m_, statevalue_newArray: F_, statevalue_newBoundedMerkleTree: S_, statevalue_newCell: v_, statevalue_newMap: x_, statevalue_newNull: k_, statevalue_toString: q_, statevalue_type: z_, transientCommit: C_, transientHash: A_, upgradeFromTransient: I_, valueToBigInt: R_, verifySignature: T_, vmresults_events: j_, vmresults_gas_cost: M_, vmresults_new: O_, vmresults_stack: B_, vmresults_toString: L_, vmstack_get: U_, vmstack_isStrong: $_, vmstack_length: E_, vmstack_new: P_, vmstack_push: D_, vmstack_removeLast: N_, vmstack_toString: K_, __wbg_intounderlyingbytesource_free: V_, __wbg_intounderlyingsink_free: W_, __wbg_intounderlyingsource_free: Q_, intounderlyingbytesource_autoAllocateChunkSize: H_, intounderlyingbytesource_cancel: G_, intounderlyingbytesource_pull: J_, intounderlyingbytesource_start: X_, intounderlyingbytesource_type: Y_, intounderlyingsink_abort: Z_, intounderlyingsink_close: eo, intounderlyingsink_write: to, intounderlyingsource_cancel: ro, intounderlyingsource_pull: no, __wbindgen_exn_store: _o, __externref_table_alloc: oo, __wbindgen_export_2: io, __wbindgen_malloc: so, __wbindgen_realloc: co, __wbindgen_export_5: ao, __externref_table_dealloc: bo, __wbindgen_free: uo, __externref_drop_slice: go, closure690_externref_shim: fo, closure730_externref_shim: wo, __wbindgen_start: X } = Xt, lo = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_drop_slice: go,
        __externref_table_alloc: oo,
        __externref_table_dealloc: bo,
        __wbg_chargedstate_free: Zt,
        __wbg_contractmaintenanceauthority_free: er,
        __wbg_contractoperation_free: tr,
        __wbg_contractstate_free: rr,
        __wbg_costmodel_free: nr,
        __wbg_intounderlyingbytesource_free: V_,
        __wbg_intounderlyingsink_free: W_,
        __wbg_intounderlyingsource_free: Q_,
        __wbg_querycontext_free: _r,
        __wbg_queryresults_free: or,
        __wbg_stateboundedmerkletree_free: ir,
        __wbg_statemap_free: sr,
        __wbg_statevalue_free: cr,
        __wbg_vmresults_free: ar,
        __wbg_vmstack_free: br,
        __wbindgen_exn_store: _o,
        __wbindgen_export_2: io,
        __wbindgen_export_5: ao,
        __wbindgen_free: uo,
        __wbindgen_malloc: so,
        __wbindgen_realloc: co,
        __wbindgen_start: X,
        bigIntModFr: ur,
        bigIntToValue: gr,
        chargedstate_new: fr,
        chargedstate_state: dr,
        chargedstate_toString: wr,
        closure690_externref_shim: fo,
        closure730_externref_shim: wo,
        communicationCommitment: lr,
        communicationCommitmentRandomness: pr,
        contractmaintenanceauthority_committee: yr,
        contractmaintenanceauthority_counter: hr,
        contractmaintenanceauthority_deserialize: mr,
        contractmaintenanceauthority_new: Fr,
        contractmaintenanceauthority_serialize: Sr,
        contractmaintenanceauthority_threshold: vr,
        contractmaintenanceauthority_toString: xr,
        contractoperation_deserialize: kr,
        contractoperation_new: qr,
        contractoperation_serialize: zr,
        contractoperation_set_verifier_key: Cr,
        contractoperation_toString: Ar,
        contractoperation_verifier_key: Ir,
        contractstate_balance: Rr,
        contractstate_data: Tr,
        contractstate_deserialize: jr,
        contractstate_maintenance_authority: Mr,
        contractstate_new: Or,
        contractstate_operation: Br,
        contractstate_operations: Lr,
        contractstate_query: Ur,
        contractstate_serialize: $r,
        contractstate_setOperation: Er,
        contractstate_set_balance: Pr,
        contractstate_set_data: Dr,
        contractstate_set_maintenance_authority: Nr,
        contractstate_toString: Kr,
        costmodel_initialCostModel: Vr,
        costmodel_new: Wr,
        costmodel_toString: Qr,
        decodeCoinPublicKey: Hr,
        decodeContractAddress: Gr,
        decodeQualifiedShieldedCoinInfo: Jr,
        decodeRawTokenType: Xr,
        decodeShieldedCoinInfo: Yr,
        decodeUserAddress: Zr,
        degradeToTransient: en,
        dummyContractAddress: tn,
        dummyUserAddress: rn,
        ecAdd: nn,
        ecMul: _n,
        ecMulGenerator: on,
        encodeCoinPublicKey: sn,
        encodeContractAddress: cn,
        encodeQualifiedShieldedCoinInfo: an,
        encodeRawTokenType: bn,
        encodeShieldedCoinInfo: un,
        encodeUserAddress: gn,
        entryPointHash: fn,
        hashToCurve: dn,
        intounderlyingbytesource_autoAllocateChunkSize: H_,
        intounderlyingbytesource_cancel: G_,
        intounderlyingbytesource_pull: J_,
        intounderlyingbytesource_start: X_,
        intounderlyingbytesource_type: Y_,
        intounderlyingsink_abort: Z_,
        intounderlyingsink_close: eo,
        intounderlyingsink_write: to,
        intounderlyingsource_cancel: ro,
        intounderlyingsource_pull: no,
        leafHash: wn,
        maxAlignedSize: ln,
        maxField: pn,
        memory: Yt,
        persistentCommit: yn,
        persistentHash: hn,
        proofDataIntoSerializedPreimage: mn,
        querycontext_address: Fn,
        querycontext_block: Sn,
        querycontext_com_indices: vn,
        querycontext_effects: xn,
        querycontext_insertCommitment: kn,
        querycontext_new: qn,
        querycontext_qualify: zn,
        querycontext_query: Cn,
        querycontext_runTranscript: An,
        querycontext_set_block: In,
        querycontext_set_effects: Rn,
        querycontext_state: Tn,
        querycontext_toString: jn,
        querycontext_toVmStack: Mn,
        queryresults_context: On,
        queryresults_events: Bn,
        queryresults_gas_cost: Ln,
        queryresults_new: Un,
        queryresults_toString: $n,
        rawTokenType: En,
        runProgram: Pn,
        runtimeCoinCommitment: Dn,
        runtimeCoinNullifier: Nn,
        sampleContractAddress: Kn,
        sampleRawTokenType: Vn,
        sampleSigningKey: Wn,
        sampleUserAddress: Qn,
        signData: Hn,
        signatureVerifyingKey: Gn,
        signingKeyFromBip340: Jn,
        stateboundedmerkletree_blank: Xn,
        stateboundedmerkletree_collapse: Yn,
        stateboundedmerkletree_findPathForLeaf: Zn,
        stateboundedmerkletree_height: e_,
        stateboundedmerkletree_pathForLeaf: t_,
        stateboundedmerkletree_rehash: r_,
        stateboundedmerkletree_root: n_,
        stateboundedmerkletree_toString: __,
        stateboundedmerkletree_update: o_,
        statemap_get: i_,
        statemap_insert: s_,
        statemap_keys: c_,
        statemap_new: a_,
        statemap_remove: b_,
        statemap_toString: u_,
        statevalue_arrayPush: g_,
        statevalue_asArray: f_,
        statevalue_asBoundedMerkleTree: d_,
        statevalue_asCell: w_,
        statevalue_asMap: l_,
        statevalue_decode: p_,
        statevalue_encode: y_,
        statevalue_logSize: h_,
        statevalue_new: m_,
        statevalue_newArray: F_,
        statevalue_newBoundedMerkleTree: S_,
        statevalue_newCell: v_,
        statevalue_newMap: x_,
        statevalue_newNull: k_,
        statevalue_toString: q_,
        statevalue_type: z_,
        transientCommit: C_,
        transientHash: A_,
        upgradeFromTransient: I_,
        valueToBigInt: R_,
        verifySignature: T_,
        vmresults_events: j_,
        vmresults_gas_cost: M_,
        vmresults_new: O_,
        vmresults_stack: B_,
        vmresults_toString: L_,
        vmstack_get: U_,
        vmstack_isStrong: $_,
        vmstack_length: E_,
        vmstack_new: P_,
        vmstack_push: D_,
        vmstack_removeLast: N_,
        vmstack_toString: K_
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    ee(lo);
    X();
    Io = oe();
    _e();
})();
export { z as C, Io as M, v as Q, g as S, m as a, yo as b, k as c, _e as d, F as e, x as f, ho as g, ko as h, Ao as i, xo as j, So as k, qo as l, Co as m, vo as n, zo as o, mo as s, Fo as v, __tla };
