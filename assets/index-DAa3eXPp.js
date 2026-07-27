import { __tla as __tla_0 } from "./ledger-KI6kX-Tc.js";
import { r as H } from "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
import { b as se, __tla as __tla_1 } from "./index-Couc_5BG.js";
import { x as Fe, y as Me, z as Le, A as ce, B as Ve, C as ae, D as ue, E as Je, F as Ge, G as Ze, H as We, I as Ye, J as de, L as Xe, M as ee, N as ze, O as fe, Q as Qe, R as ve, U as et, W as tt, X as nt, Y as rt, _ as it, $ as st, a0 as ot, p as ct, a1 as at, a2 as ut, a3 as dt, a4 as ft, T as ht, a5 as lt, a6 as yt, a7 as pt, a8 as gt, a9 as wt, aa as bt, ab as mt, ac as xt, b as he, ad as kt, ae as St, e as Et, af as _t, ag as Bt, ah as It, ai as Ae, V as Ut, aj as Tt } from "./ZKConfiguration-DQjWTRyA.js";
let tn, Cn, Sn, An, Rn, wn, un, dn, fn, mn, yn, xn, kn, pn, En, _n, Bn, bn, Un, In, ln, Tn, hn, gn;
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
    const Ct = Me, At = Fe;
    function q(n, e) {
        return at(n.runtimeEffect, (r)=>ut((c)=>(c.setFiberRefs(r.fiberRefs), c.currentRuntimeFlags = r.runtimeFlags, dt(e, r.context))));
    }
    const Rt = {
        ...Xe,
        [de]: de,
        pipe () {
            return ct(this, arguments);
        },
        commit () {
            return this.runtimeEffect;
        }
    }, $t = (n, e)=>{
        e = e ?? Le();
        const r = ce(Ve());
        let c;
        const s = ae(()=>{
            if (!c) {
                const u = new We;
                c = ue(Je(Ge(Ze(n, e), r), (t)=>{
                    i.cachedRuntime = t;
                }), {
                    scope: r,
                    scheduler: u
                }), u.flush();
            }
            return Ye(c.await);
        }), i = Object.assign(Object.create(Rt), {
            memoMap: e,
            scope: r,
            runtimeEffect: s,
            cachedRuntime: void 0,
            runtime () {
                return i.cachedRuntime === void 0 ? ee(i.runtimeEffect) : Promise.resolve(i.cachedRuntime);
            },
            dispose () {
                return ee(i.disposeEffect);
            },
            disposeEffect: ae(()=>(i.runtimeEffect = st("ManagedRuntime disposed"), i.cachedRuntime = void 0, ot(i.scope, ft))),
            runFork (u, t) {
                return i.cachedRuntime === void 0 ? ue(q(i, u), t) : it(i.cachedRuntime)(u, t);
            },
            runSyncExit (u) {
                return i.cachedRuntime === void 0 ? nt(q(i, u)) : rt(i.cachedRuntime)(u);
            },
            runSync (u) {
                return i.cachedRuntime === void 0 ? ce(q(i, u)) : tt(i.cachedRuntime)(u);
            },
            runPromiseExit (u, t) {
                return i.cachedRuntime === void 0 ? ve(q(i, u), t) : et(i.cachedRuntime)(u, t);
            },
            runCallback (u, t) {
                return i.cachedRuntime === void 0 ? fe(Qe)(q(i, u), t) : fe(i.cachedRuntime)(u, t);
            },
            runPromise (u, t) {
                return i.cachedRuntime === void 0 ? ee(q(i, u), t) : ze(i.cachedRuntime)(u, t);
            }
        });
        return i;
    }, Ot = $t;
    function Re(n) {
        return n instanceof Uint8Array || ArrayBuffer.isView(n) && n.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in n && n.BYTES_PER_ELEMENT === 1;
    }
    function $e(n, e) {
        return Array.isArray(e) ? e.length === 0 ? !0 : n ? e.every((r)=>typeof r == "string") : e.every((r)=>Number.isSafeInteger(r)) : !1;
    }
    function Kt(n) {
        if (typeof n != "function") throw new TypeError("function expected");
        return !0;
    }
    function J(n, e) {
        if (typeof e != "string") throw new TypeError(`${n}: string expected`);
        return !0;
    }
    function Oe(n) {
        if (typeof n != "number") throw new TypeError(`number expected, got ${typeof n}`);
        if (!Number.isSafeInteger(n)) throw new RangeError(`invalid integer: ${n}`);
    }
    function ne(n) {
        if (!Array.isArray(n)) throw new TypeError("array expected");
    }
    function Ke(n, e) {
        if (!$e(!0, e)) throw new TypeError(`${n}: array of strings expected`);
    }
    function Ne(n, e) {
        if (!$e(!1, e)) throw new TypeError(`${n}: array of numbers expected`);
    }
    function Nt(...n) {
        const e = (i)=>i, r = (i, u)=>(t)=>i(u(t)), c = n.map((i)=>i.encode).reduceRight(r, e), s = n.map((i)=>i.decode).reduce(r, e);
        return {
            encode: c,
            decode: s
        };
    }
    function Pt(n) {
        const e = typeof n == "string" ? n.split("") : n, r = e.length;
        Ke("alphabet", e);
        const c = new Map(e.map((s, i)=>[
                s,
                i
            ]));
        return {
            encode: (s)=>(ne(s), s.map((i)=>{
                    if (!Number.isSafeInteger(i) || i < 0 || i >= r) throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${n}`);
                    return e[i];
                })),
            decode: (s)=>(ne(s), s.map((i)=>{
                    J("alphabet.decode", i);
                    const u = c.get(i);
                    if (u === void 0) throw new Error(`Unknown letter: "${i}". Allowed: ${n}`);
                    return u;
                }))
        };
    }
    function Ht(n = "") {
        return J("join", n), {
            encode: (e)=>(Ke("join.decode", e), e.join(n)),
            decode: (e)=>(J("join.decode", e), e.split(n))
        };
    }
    const Pe = (n, e)=>e === 0 ? n : Pe(e, n % e), X = (n, e)=>n + (e - Pe(n, e)), W = (()=>{
        let n = [];
        for(let e = 0; e < 40; e++)n.push(2 ** e);
        return n;
    })();
    function re(n, e, r, c) {
        if (ne(n), e <= 0 || e > 32) throw new RangeError(`convertRadix2: wrong from=${e}`);
        if (r <= 0 || r > 32) throw new RangeError(`convertRadix2: wrong to=${r}`);
        if (X(e, r) > 32) throw new Error(`convertRadix2: carry overflow from=${e} to=${r} carryBits=${X(e, r)}`);
        let s = 0, i = 0;
        const u = W[e], t = W[r] - 1, f = [];
        for (const x of n){
            if (Oe(x), x >= u) throw new Error(`convertRadix2: invalid data word=${x} from=${e}`);
            if (s = s << e | x, i + e > 32) throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);
            for(i += e; i >= r; i -= r)f.push((s >> i - r & t) >>> 0);
            const E = W[i];
            if (E === void 0) throw new Error("invalid carry");
            s &= E - 1;
        }
        if (s = s << r - i & t, !c && i >= e) throw new Error("Excess padding");
        if (!c && s > 0) throw new Error(`Non-zero padding: ${s}`);
        return c && i > 0 && f.push(s >>> 0), f;
    }
    function qt(n, e = !1) {
        if (Oe(n), n <= 0 || n > 32) throw new RangeError("radix2: bits should be in (0..32]");
        if (X(8, n) > 32 || X(n, 8) > 32) throw new RangeError("radix2: carry overflow");
        return {
            encode: (r)=>{
                if (!Re(r)) throw new TypeError("radix2.encode input should be Uint8Array");
                return re(Array.from(r), 8, n, !e);
            },
            decode: (r)=>(Ne("radix2.decode", r), Uint8Array.from(re(r, n, 8, e)))
        };
    }
    function le(n) {
        return Kt(n), function(...e) {
            try {
                return n.apply(null, e);
            } catch  {}
        };
    }
    const ie = Nt(Pt("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), Ht("")), ye = [
        996825010,
        642813549,
        513874426,
        1027748829,
        705979059
    ];
    function L(n) {
        const e = n >> 25;
        let r = (n & 33554431) << 5;
        for(let c = 0; c < ye.length; c++)(e >> c & 1) === 1 && (r ^= ye[c]);
        return r;
    }
    function pe(n, e, r = 1) {
        const c = n.length;
        let s = 1;
        for(let i = 0; i < c; i++){
            const u = n.charCodeAt(i);
            if (u < 33 || u > 126) throw new Error(`Invalid prefix (${n})`);
            s = L(s) ^ u >> 5;
        }
        s = L(s);
        for(let i = 0; i < c; i++)s = L(s) ^ n.charCodeAt(i) & 31;
        for (let i of e)s = L(s) ^ i;
        for(let i = 0; i < 6; i++)s = L(s);
        return s ^= r, ie.encode(re([
            s % W[30]
        ], 30, 5, !1));
    }
    function Dt(n) {
        const e = n === "bech32" ? 1 : 734539939, r = qt(5), c = r.decode, s = r.encode, i = le(c);
        function u(m, y, l = 90) {
            J("bech32.encode prefix", m), Re(y) && (y = Array.from(y)), Ne("bech32.encode", y);
            const o = m.length;
            if (o === 0) throw new TypeError(`Invalid prefix length ${o}`);
            const p = o + 7 + y.length;
            if (l !== !1 && p > l) throw new TypeError(`Length ${p} exceeds limit ${l}`);
            const w = m.toLowerCase(), S = pe(w, y, e);
            return `${w}1${ie.encode(y)}${S}`;
        }
        function t(m, y = 90) {
            J("bech32.decode input", m);
            const l = m.length;
            if (l < 8 || y !== !1 && l > y) throw new TypeError(`invalid string length: ${l} (${m}). Expected (8..${y})`);
            const o = m.toLowerCase();
            if (m !== o && m !== m.toUpperCase()) throw new Error("String must be lowercase or uppercase");
            const p = o.lastIndexOf("1");
            if (p === 0 || p === -1) throw new Error('Letter "1" must be present between prefix and data only');
            const w = o.slice(0, p), S = o.slice(p + 1);
            if (S.length < 6) throw new Error("Data must be at least 6 characters long");
            const A = ie.decode(S).slice(0, -6), b = pe(w, A, e);
            if (!S.endsWith(b)) throw new Error(`Invalid checksum in ${m}: expected "${b}"`);
            return {
                prefix: w,
                words: A
            };
        }
        const f = le(t);
        function x(m) {
            const { prefix: y, words: l } = t(m, !1);
            return {
                prefix: y,
                words: l,
                bytes: c(l)
            };
        }
        function E(m, y) {
            return u(m, s(y));
        }
        return {
            encode: u,
            decode: t,
            encodeFromBytes: E,
            decodeToBytes: x,
            decodeUnsafe: f,
            fromWords: c,
            fromWordsUnsafe: i,
            toWords: s
        };
    }
    const te = Object.freeze(Dt("bech32m"));
    var K = {}, V = {}, ge;
    function z() {
        if (ge) return V;
        ge = 1, Object.defineProperty(V, "__esModule", {
            value: !0
        }), V.TypeKind = void 0;
        var n;
        return (function(e) {
            e[e.Primitive = 0] = "Primitive", e[e.Compact = 1] = "Compact", e[e.Sequence = 2] = "Sequence", e[e.BitSequence = 3] = "BitSequence", e[e.Array = 4] = "Array", e[e.Tuple = 5] = "Tuple", e[e.Composite = 6] = "Composite", e[e.Variant = 7] = "Variant", e[e.Option = 8] = "Option", e[e.DoNotConstruct = 9] = "DoNotConstruct", e[e.BooleanOption = 10] = "BooleanOption", e[e.Bytes = 11] = "Bytes", e[e.BytesArray = 12] = "BytesArray", e[e.HexBytes = 13] = "HexBytes", e[e.HexBytesArray = 14] = "HexBytesArray", e[e.Struct = 15] = "Struct";
        })(n || (V.TypeKind = n = {})), V;
    }
    var N = {}, R = {}, we;
    function Q() {
        if (we) return R;
        we = 1;
        var n = R && R.__importDefault || function(i) {
            return i && i.__esModule ? i : {
                default: i
            };
        };
        Object.defineProperty(R, "__esModule", {
            value: !0
        }), R.toHex = r, R.isHex = c, R.decodeHex = s;
        const e = n(H);
        function r(i, u = 0, t = i.length - u) {
            return `0x${Buffer.from(i.buffer, i.byteOffset + u, t).toString("hex")}`;
        }
        function c(i) {
            return typeof i == "string" && i.length % 2 == 0 && /^0x[a-f\d]*$/i.test(i);
        }
        function s(i) {
            return (0, e.default)(c(i)), Buffer.from(i.slice(2), "hex");
        }
        return R;
    }
    var k = {}, be;
    function G() {
        if (be) return k;
        be = 1;
        var n = k && k.__importDefault || function(o) {
            return o && o.__esModule ? o : {
                default: o
            };
        };
        Object.defineProperty(k, "__esModule", {
            value: !0
        }), k.isObject = k.unsignedIntByteLength = k.UTF8_ENCODER = k.UTF8_DECODER = k.toUnsignedBigInt = k.toSignedBigInt = k.checkUnsignedBigInt = k.checkUnsignedInt = k.checkSignedBigInt = k.checkSignedInt = k.throwUnexpectedCase = k.assertNotNull = void 0;
        const e = n(H);
        function r(o, p) {
            return (0, e.default)(o != null, p), o;
        }
        k.assertNotNull = r;
        function c(o) {
            throw new Error(o ? `Unexpected case: ${o}` : "Unexpected case");
        }
        k.throwUnexpectedCase = c;
        function s(o, p, w, S, A) {
            if (!(Number.isInteger(o) && S <= o && A >= o)) throw new Error(`Invalid ${p}${w}: ${o}`);
        }
        function i(o, p, w, S, A) {
            if (!(typeof o == "bigint" && S <= o && A >= o)) throw new Error(`Invalid ${p}${w}: ${o}`);
        }
        function u(o, p) {
            let w, S;
            switch(p){
                case 8:
                    w = -128, S = 127;
                    break;
                case 16:
                    w = -32768, S = 32767;
                    break;
                case 32:
                    w = -2147483648, S = 2147483647;
                    break;
                default:
                    c(p);
            }
            s(o, "I", p, w, S);
        }
        k.checkSignedInt = u;
        function t(o, p) {
            let w, S;
            switch(p){
                case 64:
                    w = -(2n ** 63n), S = 2n ** 63n - 1n;
                    break;
                case 128:
                    w = -(2n ** 127n), S = 2n ** 127n - 1n;
                    break;
                case 256:
                    w = -(2n ** 255n), S = 2n ** 255n - 1n;
                    break;
                default:
                    c(p);
            }
            i(o, "I", p, w, S);
        }
        k.checkSignedBigInt = t;
        function f(o, p) {
            let w;
            switch(p){
                case 8:
                    w = 255;
                    break;
                case 16:
                    w = 65535;
                    break;
                case 32:
                    w = 4294967295;
                    break;
                default:
                    c(p);
            }
            s(o, "U", p, 0, w);
        }
        k.checkUnsignedInt = f;
        function x(o, p) {
            let w;
            switch(p){
                case 64:
                    w = 0xffffffffffffffffn;
                    break;
                case 128:
                    w = 2n ** 128n - 1n;
                    break;
                case 256:
                    w = 2n ** 256n - 1n;
                    break;
                default:
                    c(p);
            }
            i(o, "U", p, 0n, w);
        }
        k.checkUnsignedBigInt = x;
        function E(o, p) {
            return (0, e.default)(typeof o == "string" || typeof o == "number"), o = BigInt(o), t(o, p), o;
        }
        k.toSignedBigInt = E;
        function m(o, p) {
            return (0, e.default)(typeof o == "string" || typeof o == "number"), o = BigInt(o), x(o, p), o;
        }
        k.toUnsignedBigInt = m, k.UTF8_DECODER = new TextDecoder("utf-8", {
            fatal: !0,
            ignoreBOM: !1
        }), k.UTF8_ENCODER = new TextEncoder;
        function y(o) {
            let p = 0;
            for(; o > 0n;)o = o >> 8n, p += 1;
            return p;
        }
        k.unsignedIntByteLength = y;
        function l(o) {
            return o != null && typeof o == "object";
        }
        return k.isObject = l, k;
    }
    var me;
    function He() {
        if (me) return N;
        me = 1;
        var n = N && N.__importDefault || function(u) {
            return u && u.__esModule ? u : {
                default: u
            };
        };
        Object.defineProperty(N, "__esModule", {
            value: !0
        }), N.Src = void 0;
        const e = Q(), r = n(H), c = G();
        class s {
            constructor(t){
                this.idx = 0, typeof t == "string" ? this.buf = (0, e.decodeHex)(t) : this.buf = t;
            }
            byte() {
                let t = this.buf[this.idx];
                if (t === void 0) throw i();
                return this.idx += 1, t;
            }
            i8() {
                let t = this.byte();
                return t | (t & 2 ** 7) * 33554430;
            }
            u8() {
                return this.byte();
            }
            i16() {
                let t = this.u16();
                return t | (t & 2 ** 15) * 131070;
            }
            u16() {
                let t = this.byte(), f = this.byte();
                return t + f * 2 ** 8;
            }
            i32() {
                return this.byte() + this.byte() * 2 ** 8 + this.byte() * 2 ** 16 + (this.byte() << 24);
            }
            u32() {
                return this.byte() + this.byte() * 2 ** 8 + this.byte() * 2 ** 16 + this.byte() * 2 ** 24;
            }
            i64() {
                let t = this.u32(), f = this.i32();
                return BigInt(t) + (BigInt(f) << 32n);
            }
            u64() {
                let t = this.u32(), f = this.u32();
                return BigInt(t) + (BigInt(f) << 32n);
            }
            i128() {
                let t = this.u64(), f = this.i64();
                return t + (f << 64n);
            }
            u128() {
                let t = this.u64(), f = this.u64();
                return t + (f << 64n);
            }
            i256() {
                let t = this.u128(), f = this.i128();
                return t + (f << 128n);
            }
            u256() {
                let t = this.u128(), f = this.u128();
                return t + (f << 128n);
            }
            compact() {
                let t = this.byte();
                switch(t & 3){
                    case 0:
                        return t >> 2;
                    case 1:
                        return (t >> 2) + this.byte() * 2 ** 6;
                    case 2:
                        return (t >> 2) + this.byte() * 2 ** 6 + this.byte() * 2 ** 14 + this.byte() * 2 ** 22;
                    case 3:
                        return this.bigCompact(t >> 2);
                    default:
                        throw new Error("Reached unreachable statement");
                }
            }
            bigCompact(t) {
                let f = this.u32();
                switch(t){
                    case 0:
                        return f;
                    case 1:
                        return f + this.byte() * 2 ** 32;
                    case 2:
                        return f + this.byte() * 2 ** 32 + this.byte() * 2 ** 40;
                }
                let x = BigInt(f), E = 32n;
                for(; t--;)x += BigInt(this.byte()) << E, E += 8n;
                return x;
            }
            compactLength() {
                let t = this.compact();
                return (0, r.default)(typeof t == "number"), t;
            }
            str() {
                let t = this.compactLength(), f = this.bytes(t);
                return c.UTF8_DECODER.decode(f);
            }
            bytes(t) {
                let f = this.idx, x = this.idx += t;
                if (this.buf.length < x) throw i();
                return this.buf.subarray(f, x);
            }
            skip(t) {
                this.idx += t;
            }
            bool() {
                return !!this.byte();
            }
            hasBytes() {
                return this.buf.length > this.idx;
            }
            assertEOF() {
                if (this.hasBytes()) throw new Error("Unprocessed data left");
            }
        }
        N.Src = s;
        function i() {
            return new Error("Unexpected EOF");
        }
        return N;
    }
    var I = {}, xe;
    function qe() {
        if (xe) return I;
        xe = 1;
        var n = I && I.__importDefault || function(u) {
            return u && u.__esModule ? u : {
                default: u
            };
        };
        Object.defineProperty(I, "__esModule", {
            value: !0
        }), I.ByteSink = I.HexSink = I.Sink = void 0;
        const e = n(H), r = G();
        class c {
            uncheckedU16(t) {
                this.write(t & 255), this.write(t >>> 8);
            }
            uncheckedU32(t) {
                this.write(t & 255), this.write(t >>> 8 & 255), this.write(t >>> 16 & 255), this.write(t >>> 24);
            }
            uncheckedU64(t) {
                this.uncheckedU32(Number(t & 0xffffffffn)), this.uncheckedU32(Number(t >> 32n));
            }
            uncheckedU128(t) {
                this.uncheckedU64(t & 0xffffffffffffffffn), this.uncheckedU64(t >> 64n);
            }
            uncheckedU256(t) {
                this.uncheckedU128(t & 2n ** 128n - 1n), this.uncheckedU128(t >> 128n);
            }
            u8(t) {
                (0, r.checkUnsignedInt)(t, 8), this.write(t);
            }
            u16(t) {
                (0, r.checkUnsignedInt)(t, 16), this.uncheckedU16(t);
            }
            u32(t) {
                (0, r.checkUnsignedInt)(t, 32), this.uncheckedU32(t);
            }
            u64(t) {
                (0, r.checkUnsignedBigInt)(t, 64), this.uncheckedU64(t);
            }
            u128(t) {
                (0, r.checkUnsignedBigInt)(t, 128), this.uncheckedU128(t);
            }
            u256(t) {
                (0, r.checkUnsignedBigInt)(t, 256), this.uncheckedU256(t);
            }
            i8(t) {
                (0, r.checkSignedInt)(t, 8), this.write((t + 256) % 256);
            }
            i16(t) {
                (0, r.checkSignedInt)(t, 16);
                let f = 2 ** 16;
                t = (t + f) % f, this.uncheckedU16(t);
            }
            i32(t) {
                (0, r.checkSignedInt)(t, 32);
                let f = 2 ** 32;
                t = (t + f) % f, this.uncheckedU32(t);
            }
            i64(t) {
                (0, r.checkSignedBigInt)(t, 64);
                let f = 2n ** 64n;
                t = (t + f) % f, this.uncheckedU64(t);
            }
            i128(t) {
                (0, r.checkSignedBigInt)(t, 128);
                let f = 2n ** 128n;
                t = (t + f) % f, this.uncheckedU128(t);
            }
            i256(t) {
                (0, r.checkSignedBigInt)(t, 256);
                let f = 2n ** 256n;
                t = (t + f) % f, this.uncheckedU256(t);
            }
            str(t) {
                (0, e.default)(typeof t == "string");
                let f = r.UTF8_ENCODER.encode(t);
                this.compact(f.length), this.bytes(f);
            }
            bool(t) {
                (0, e.default)(typeof t == "boolean"), this.write(Number(t));
            }
            compact(t) {
                if ((0, e.default)((typeof t == "number" || typeof t == "bigint") && t >= 0, "invalid compact"), t < 64) this.write(Number(t) * 4);
                else if (t < 2 ** 14) t = Number(t), this.write((t & 63) * 4 + 1), this.write(t >>> 6);
                else if (t < 2 ** 30) t = Number(t), this.write((t & 63) * 4 + 2), this.write(t >>> 6 & 255), this.uncheckedU16(t >>> 14);
                else if (t < 2n ** 536n) for(t = BigInt(t), this.write((0, r.unsignedIntByteLength)(t) * 4 - 13); t > 0;)this.write(Number(t & 0xffn)), t = t >> 8n;
                else throw new Error(`${t.toString(16)} is too large for a compact`);
            }
        }
        I.Sink = c;
        class s extends c {
            constructor(){
                super(...arguments), this.out = "0x";
            }
            write(t) {
                this.out += (t >>> 4).toString(16), this.out += (t & 15).toString(16);
            }
            bytes(t) {
                Buffer.isBuffer(t) ? this.out += t.toString("hex") : this.out += Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("hex");
            }
            toHex() {
                return this.out;
            }
        }
        I.HexSink = s;
        class i extends c {
            constructor(){
                super(...arguments), this.buf = Buffer.allocUnsafe(128), this.pos = 0;
            }
            alloc(t) {
                if (this.buf.length - this.pos < t) {
                    let f = Buffer.allocUnsafe(Math.max(t, this.buf.length) * 2);
                    f.set(this.buf), this.buf = f;
                }
            }
            write(t) {
                this.alloc(1), this.buf[this.pos] = t, this.pos += 1;
            }
            bytes(t) {
                this.alloc(t.length), this.buf.set(t, this.pos), this.pos += t.length;
            }
            toBytes() {
                return this.buf.subarray(0, this.pos);
            }
        }
        return I.ByteSink = i, I;
    }
    var P = {}, U = {}, ke;
    function De() {
        if (ke) return U;
        ke = 1;
        var n = U && U.__importDefault || function(u) {
            return u && u.__esModule ? u : {
                default: u
            };
        };
        Object.defineProperty(U, "__esModule", {
            value: !0
        }), U.toCodecTypes = U.getCodecType = void 0;
        const e = n(H), r = z(), c = G();
        function s(u, t) {
            let f = u[t];
            switch(f.kind){
                case r.TypeKind.Compact:
                    {
                        let x = u[f.type];
                        return (0, e.default)(x.kind == r.TypeKind.Primitive), (0, e.default)(x.primitive[0] == "U"), {
                            kind: r.TypeKind.Compact,
                            integer: x.primitive
                        };
                    }
                case r.TypeKind.Composite:
                    return f.fields.length == 0 || f.fields[0].name == null ? {
                        kind: r.TypeKind.Tuple,
                        tuple: f.fields.map((x)=>((0, e.default)(x.name == null), x.type))
                    } : {
                        kind: r.TypeKind.Struct,
                        fields: f.fields.map((x)=>({
                                name: (0, c.assertNotNull)(x.name),
                                type: x.type
                            }))
                    };
                case r.TypeKind.Variant:
                    {
                        let x = f.variants.filter((o)=>o != null), E = {};
                        if (new Set(x.map((o)=>o.index)).size != x.length) throw new Error(`Variant type ${t} has duplicate case indexes`);
                        let y = x.reduce((o, p)=>Math.max(o, p.index), 0) + 1, l = new Array(y);
                        return x.forEach((o)=>{
                            let p;
                            if (o.fields[0]?.name == null) switch(o.fields.length){
                                case 0:
                                    p = {
                                        kind: "empty",
                                        name: o.name,
                                        index: o.index
                                    };
                                    break;
                                case 1:
                                    p = {
                                        kind: "value",
                                        name: o.name,
                                        index: o.index,
                                        type: o.fields[0].type
                                    };
                                    break;
                                default:
                                    p = {
                                        kind: "tuple",
                                        name: o.name,
                                        index: o.index,
                                        def: {
                                            kind: r.TypeKind.Tuple,
                                            tuple: o.fields.map((w)=>((0, e.default)(w.name == null), w.type))
                                        }
                                    };
                            }
                            else p = {
                                kind: "struct",
                                name: o.name,
                                index: o.index,
                                def: {
                                    kind: r.TypeKind.Struct,
                                    fields: o.fields.map((w)=>({
                                            name: (0, c.assertNotNull)(w.name),
                                            type: w.type
                                        }))
                                }
                            };
                            l[o.index] = p, E[p.name] = p;
                        }), {
                            kind: r.TypeKind.Variant,
                            variants: l,
                            variantsByName: E
                        };
                    }
                default:
                    return f;
            }
        }
        U.getCodecType = s;
        function i(u) {
            let t = new Array(u.length);
            for(let f = 0; f < u.length; f++)t[f] = s(u, f);
            return t;
        }
        return U.toCodecTypes = i, U;
    }
    var Se;
    function jt() {
        if (Se) return P;
        Se = 1;
        var n = P && P.__importDefault || function(b) {
            return b && b.__esModule ? b : {
                default: b
            };
        };
        Object.defineProperty(P, "__esModule", {
            value: !0
        }), P.Codec = void 0;
        const e = Q(), r = n(H), c = qe(), s = He(), i = z(), u = De(), t = G();
        class f {
            constructor(d){
                this.types = (0, u.toCodecTypes)(d);
            }
            decodeBinary(d, a) {
                let h = new s.Src(a), g = this.decode(d, h);
                return h.assertEOF(), g;
            }
            encodeToHex(d, a) {
                let h = new c.HexSink;
                return this.encode(d, a, h), h.toHex();
            }
            encodeToBinary(d, a) {
                let h = new c.ByteSink;
                return this.encode(d, a, h), h.toBytes();
            }
            decode(d, a) {
                let h = this.types[d];
                switch(h.kind){
                    case i.TypeKind.Primitive:
                        return S(h.primitive, a);
                    case i.TypeKind.Compact:
                        return w(h, a);
                    case i.TypeKind.BitSequence:
                        return y(a);
                    case i.TypeKind.Array:
                        return this.decodeArray(h, a);
                    case i.TypeKind.Sequence:
                        return this.decodeSequence(h, a);
                    case i.TypeKind.Tuple:
                        return this.decodeTuple(h, a);
                    case i.TypeKind.Struct:
                        return this.decodeStruct(h, a);
                    case i.TypeKind.Variant:
                        return this.decodeVariant(h, a);
                    case i.TypeKind.Option:
                        return this.decodeOption(h, a);
                    case i.TypeKind.BooleanOption:
                        return o(a);
                    case i.TypeKind.Bytes:
                        return x(a);
                    case i.TypeKind.BytesArray:
                        return a.bytes(h.len);
                    case i.TypeKind.HexBytes:
                        return (0, e.toHex)(x(a));
                    case i.TypeKind.HexBytesArray:
                        return (0, e.toHex)(a.bytes(h.len));
                    case i.TypeKind.DoNotConstruct:
                        (0, t.throwUnexpectedCase)("DoNotConstruct type reached");
                    default:
                        (0, t.throwUnexpectedCase)(h.kind);
                }
            }
            decodeArray(d, a) {
                let { len: h, type: g } = d, _ = new Array(h);
                for(let v = 0; v < h; v++)_[v] = this.decode(g, a);
                return _;
            }
            decodeSequence(d, a) {
                let h = a.compactLength(), g = new Array(h);
                for(let _ = 0; _ < h; _++)g[_] = this.decode(d.type, a);
                return g;
            }
            decodeTuple(d, a) {
                if (d.tuple.length == 0) return null;
                let h = new Array(d.tuple.length);
                for(let g = 0; g < d.tuple.length; g++)h[g] = this.decode(d.tuple[g], a);
                return h;
            }
            decodeStruct(d, a) {
                let h = {};
                for(let g = 0; g < d.fields.length; g++){
                    let _ = d.fields[g];
                    h[_.name] = this.decode(_.type, a);
                }
                return h;
            }
            decodeVariant(d, a) {
                let h = a.u8(), g = d.variants[h];
                switch(g == null && (0, t.throwUnexpectedCase)(`unknown variant index: ${h}`), g.kind){
                    case "empty":
                        return {
                            __kind: g.name
                        };
                    case "tuple":
                        return {
                            __kind: g.name,
                            value: this.decodeTuple(g.def, a)
                        };
                    case "value":
                        return {
                            __kind: g.name,
                            value: this.decode(g.type, a)
                        };
                    case "struct":
                        {
                            let _ = this.decodeStruct(g.def, a);
                            return _.__kind = g.name, _;
                        }
                    default:
                        (0, t.throwUnexpectedCase)();
                }
            }
            decodeOption(d, a) {
                let h = a.u8();
                switch(h){
                    case 0:
                        return;
                    case 1:
                        return this.decode(d.type, a);
                    default:
                        (0, t.throwUnexpectedCase)(h.toString());
                }
            }
            encode(d, a, h) {
                let g = this.types[d];
                switch(g.kind){
                    case i.TypeKind.Primitive:
                        A(g.primitive, a, h);
                        break;
                    case i.TypeKind.Compact:
                        h.compact(a);
                        break;
                    case i.TypeKind.BitSequence:
                        l(a, h);
                        break;
                    case i.TypeKind.Array:
                        this.encodeArray(g, a, h);
                        break;
                    case i.TypeKind.Sequence:
                        this.encodeSequence(g, a, h);
                        break;
                    case i.TypeKind.Tuple:
                        this.encodeTuple(g, a, h);
                        break;
                    case i.TypeKind.Struct:
                        this.encodeStruct(g, a, h);
                        break;
                    case i.TypeKind.Variant:
                        this.encodeVariant(g, a, h);
                        break;
                    case i.TypeKind.BytesArray:
                        m(g, a, h);
                        break;
                    case i.TypeKind.HexBytesArray:
                        m(g, (0, e.decodeHex)(a), h);
                        break;
                    case i.TypeKind.Bytes:
                        E(a, h);
                        break;
                    case i.TypeKind.HexBytes:
                        E((0, e.decodeHex)(a), h);
                        break;
                    case i.TypeKind.BooleanOption:
                        p(a, h);
                        break;
                    case i.TypeKind.Option:
                        this.encodeOption(g, a, h);
                        break;
                    default:
                        (0, t.throwUnexpectedCase)(g.kind);
                }
            }
            encodeArray(d, a, h) {
                (0, r.default)(Array.isArray(a) && a.length == d.len);
                for(let g = 0; g < a.length; g++)this.encode(d.type, a[g], h);
            }
            encodeSequence(d, a, h) {
                (0, r.default)(Array.isArray(a)), h.compact(a.length);
                for(let g = 0; g < a.length; g++)this.encode(d.type, a[g], h);
            }
            encodeTuple(d, a, h) {
                if (d.tuple.length == 0) {
                    (0, r.default)(a == null);
                    return;
                }
                (0, r.default)(Array.isArray(a) && d.tuple.length == a.length);
                for(let g = 0; g < a.length; g++)this.encode(d.tuple[g], a[g], h);
            }
            encodeStruct(d, a, h) {
                for(let g = 0; g < d.fields.length; g++){
                    let _ = d.fields[g];
                    this.encode(_.type, a[_.name], h);
                }
            }
            encodeVariant(d, a, h) {
                (0, r.default)(typeof a?.__kind == "string", "not a variant type value");
                let g = d.variantsByName[a.__kind];
                if (g == null) throw new Error(`Unknown variant: ${a.__kind}`);
                switch(h.u8(g.index), g.kind){
                    case "empty":
                        break;
                    case "value":
                        this.encode(g.type, a.value, h);
                        break;
                    case "tuple":
                        this.encodeTuple(g.def, a.value, h);
                        break;
                    case "struct":
                        this.encodeStruct(g.def, a, h);
                        break;
                    default:
                        (0, t.throwUnexpectedCase)();
                }
            }
            encodeOption(d, a, h) {
                a === void 0 ? h.u8(0) : (h.u8(1), this.encode(d.type, a, h));
            }
        }
        P.Codec = f;
        function x(b) {
            let d = b.compactLength();
            return b.bytes(d);
        }
        function E(b, d) {
            (0, r.default)(b instanceof Uint8Array), d.compact(b.length), d.bytes(b);
        }
        function m(b, d, a) {
            (0, r.default)(d instanceof Uint8Array && d.length == b.len), a.bytes(d);
        }
        function y(b) {
            let d = b.compactLength(), a = Math.ceil(d / 8);
            return {
                bytes: b.bytes(a),
                bitLength: d
            };
        }
        function l(b, d) {
            (0, r.default)(b && typeof b == "object" && Number.isInteger(b.bitLength) && b.bytes instanceof Uint8Array);
            let a = b;
            (0, r.default)(Math.ceil(a.bitLength / 8) == a.bytes.length), d.compact(a.bitLength), d.bytes(a.bytes);
        }
        function o(b) {
            let d = b.u8();
            switch(d){
                case 0:
                    return null;
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    (0, t.throwUnexpectedCase)(d.toString());
            }
        }
        function p(b, d) {
            b == null ? d.u8(0) : ((0, r.default)(typeof b == "boolean"), d.u8(b ? 1 : 2));
        }
        function w(b, d) {
            let a = d.compact();
            switch(b.integer){
                case "U8":
                case "U16":
                case "U32":
                    return a;
                default:
                    return BigInt(a);
            }
        }
        function S(b, d) {
            switch(b){
                case "I8":
                    return d.i8();
                case "U8":
                    return d.u8();
                case "I16":
                    return d.i16();
                case "U16":
                    return d.u16();
                case "I32":
                    return d.i32();
                case "U32":
                    return d.u32();
                case "I64":
                    return d.i64();
                case "U64":
                    return d.u64();
                case "I128":
                    return d.i128();
                case "U128":
                    return d.u128();
                case "I256":
                    return d.i256();
                case "U256":
                    return d.u256();
                case "Bool":
                    return d.bool();
                case "Str":
                    return d.str();
                default:
                    (0, t.throwUnexpectedCase)(b);
            }
        }
        function A(b, d, a) {
            switch(b){
                case "I8":
                    a.i8(d);
                    break;
                case "U8":
                    a.u8(d);
                    break;
                case "I16":
                    a.i16(d);
                    break;
                case "U16":
                    a.u16(d);
                    break;
                case "I32":
                    a.i32(d);
                    break;
                case "U32":
                    a.u32(d);
                    break;
                case "I64":
                    a.i64(d);
                    break;
                case "U64":
                    a.u64(d);
                    break;
                case "I128":
                    a.i128(d);
                    break;
                case "U128":
                    a.u128(d);
                    break;
                case "I256":
                    a.i256(d);
                    break;
                case "U256":
                    a.u256(d);
                    break;
                case "Bool":
                    a.bool(d);
                    break;
                case "Str":
                    a.str(d);
                    break;
                default:
                    (0, t.throwUnexpectedCase)(b);
            }
        }
        return P;
    }
    var T = {}, Z = {}, Ee;
    function Ft() {
        if (Ee) return Z;
        Ee = 1, Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.toJSON = e;
        const n = Q();
        function e(s) {
            let i;
            switch(typeof s){
                case "bigint":
                    return s.toString();
                case "object":
                    if (s == null) return null;
                    if (s instanceof Uint8Array) return (0, n.toHex)(s);
                    if (s instanceof Date) return s.toISOString();
                    if (typeof s.toJSON == "function" && (i = s.toJSON()) !== s) return e(i);
                    if (s instanceof Error) return i = {}, s.stack ? i.stack = s.stack : i.stack = s.toString(), s.cause != null && (i.cause = e(s.cause)), i = c(s, i), i;
                    if (s instanceof Map) {
                        let u = [];
                        for (let [t, f] of s.entries())u.push({
                            k: t,
                            v: f
                        });
                        return e({
                            map: u
                        });
                    } else return s instanceof Set ? e({
                        set: [
                            ...s
                        ]
                    }) : Array.isArray(s) ? r(s) : c(s);
                default:
                    return s;
            }
        }
        function r(s) {
            let i = new Array(s.length);
            for(let u = 0; u < s.length; u++)i[u] = e(s[u]);
            return i;
        }
        function c(s, i) {
            i = i || {};
            for(let u in s)i[u] = e(s[u]);
            return i;
        }
        return Z;
    }
    var _e;
    function Mt() {
        if (_e) return T;
        _e = 1;
        var n = T && T.__importDefault || function(m) {
            return m && m.__esModule ? m : {
                default: m
            };
        };
        Object.defineProperty(T, "__esModule", {
            value: !0
        }), T.decodeBinaryArray = T.JsonCodec = void 0;
        const e = Q(), r = Ft(), c = n(H), s = z(), i = De(), u = G();
        class t {
            static encode(y) {
                return (0, r.toJSON)(y);
            }
            constructor(y){
                this.types = (0, i.toCodecTypes)(y);
            }
            decode(y, l) {
                let o = this.types[y];
                switch(o.kind){
                    case s.TypeKind.Primitive:
                        return f(o.primitive, l);
                    case s.TypeKind.Compact:
                        return f(o.integer, l);
                    case s.TypeKind.BitSequence:
                        return (0, e.decodeHex)(l);
                    case s.TypeKind.Array:
                        return this.decodeArray(o, l);
                    case s.TypeKind.Sequence:
                        return this.decodeSequence(o, l);
                    case s.TypeKind.Tuple:
                        return this.decodeTuple(o, l);
                    case s.TypeKind.Struct:
                        return this.decodeStruct(o, l);
                    case s.TypeKind.Variant:
                        return this.decodeVariant(o, l);
                    case s.TypeKind.Option:
                        return this.decodeOption(o, l);
                    case s.TypeKind.BooleanOption:
                        return x(l);
                    case s.TypeKind.Bytes:
                        return (0, e.decodeHex)(l);
                    case s.TypeKind.BytesArray:
                        return E(o.len, l);
                    case s.TypeKind.HexBytes:
                    case s.TypeKind.HexBytesArray:
                        return (0, c.default)((0, e.isHex)(l)), l;
                    case s.TypeKind.DoNotConstruct:
                        (0, u.throwUnexpectedCase)("DoNotConstruct type reached");
                    default:
                        (0, u.throwUnexpectedCase)();
                }
            }
            decodeArray(y, l) {
                let { len: o, type: p } = y;
                (0, c.default)(Array.isArray(l)), (0, c.default)(l.length == o);
                let w = new Array(o);
                for(let S = 0; S < o; S++)w[S] = this.decode(p, l[S]);
                return w;
            }
            decodeSequence(y, l) {
                (0, c.default)(Array.isArray(l));
                let o = new Array(l.length);
                for(let p = 0; p < l.length; p++)o[p] = this.decode(y.type, l[p]);
                return o;
            }
            decodeTuple(y, l) {
                let o = y.tuple;
                if (o.length == 0) return (0, c.default)(l == null || Array.isArray(l) && l.length == 0), null;
                {
                    (0, c.default)(Array.isArray(l)), (0, c.default)(l.length == o.length);
                    let p = new Array(o.length);
                    for(let w = 0; w < o.length; w++)p[w] = this.decode(o[w], l[w]);
                    return p;
                }
            }
            decodeStruct(y, l) {
                (0, c.default)((0, u.isObject)(l));
                let o = {};
                for(let p = 0; p < y.fields.length; p++){
                    let w = y.fields[p];
                    o[w.name] = this.decode(w.type, l[w.name]);
                }
                return o;
            }
            decodeVariant(y, l) {
                (0, c.default)((0, u.isObject)(l)), (0, c.default)(typeof l.__kind == "string");
                let o = y.variantsByName[l.__kind];
                if (o == null) throw new Error(`Unknown variant ${l.__kind}`);
                switch(o.kind){
                    case "empty":
                        return {
                            __kind: l.__kind
                        };
                    case "value":
                        return {
                            __kind: l.__kind,
                            value: this.decode(o.type, l.value)
                        };
                    case "tuple":
                        return {
                            __kind: l.__kind,
                            value: this.decodeTuple(o.def, l.value)
                        };
                    case "struct":
                        {
                            let p = this.decodeStruct(o.def, l);
                            return p.__kind = l.__kind, p;
                        }
                    default:
                        (0, u.throwUnexpectedCase)(o.kind);
                }
            }
            decodeOption(y, l) {
                return l == null ? void 0 : this.decode(y.type, l);
            }
        }
        T.JsonCodec = t;
        function f(m, y) {
            switch(m){
                case "I8":
                    return (0, u.checkSignedInt)(y, 8), y;
                case "I16":
                    return (0, u.checkSignedInt)(y, 16), y;
                case "I32":
                    return (0, u.checkSignedInt)(y, 32), y;
                case "I64":
                    return (0, u.toSignedBigInt)(y, 64);
                case "I128":
                    return (0, u.toSignedBigInt)(y, 128);
                case "I256":
                    return (0, u.toSignedBigInt)(y, 256);
                case "U8":
                    return (0, u.checkUnsignedInt)(y, 8), y;
                case "U16":
                    return (0, u.checkUnsignedInt)(y, 16), y;
                case "U32":
                    return (0, u.checkUnsignedInt)(y, 32), y;
                case "U64":
                    return (0, u.toUnsignedBigInt)(y, 64);
                case "U128":
                    return (0, u.toUnsignedBigInt)(y, 128);
                case "U256":
                    return (0, u.toUnsignedBigInt)(y, 256);
                case "Bool":
                    return (0, c.default)(typeof y == "boolean"), y;
                case "Str":
                    return (0, c.default)(typeof y == "string"), y;
                default:
                    (0, u.throwUnexpectedCase)(m);
            }
        }
        function x(m) {
            if (m != null) return (0, c.default)(typeof m == "boolean"), m;
        }
        function E(m, y) {
            let l = (0, e.decodeHex)(y);
            return (0, c.default)(l.length == m), l;
        }
        return T.decodeBinaryArray = E, T;
    }
    var Be;
    function Lt() {
        return Be || (Be = 1, (function(n) {
            var e = K && K.__createBinding || (Object.create ? (function(c, s, i, u) {
                u === void 0 && (u = i);
                var t = Object.getOwnPropertyDescriptor(s, i);
                (!t || ("get" in t ? !s.__esModule : t.writable || t.configurable)) && (t = {
                    enumerable: !0,
                    get: function() {
                        return s[i];
                    }
                }), Object.defineProperty(c, u, t);
            }) : (function(c, s, i, u) {
                u === void 0 && (u = i), c[u] = s[i];
            })), r = K && K.__exportStar || function(c, s) {
                for(var i in c)i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && e(s, c, i);
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), r(z(), n), r(He(), n), r(qe(), n), r(jt(), n), r(Mt(), n);
        })(K)), K;
    }
    var Ie = Lt();
    const F = Symbol("Mainnet"), Ue = {
        toString: (n)=>n === F ? "mainnet" : n
    }, Vt = {
        modulus: BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")
    }, Te = {
        encode: (n)=>{
            const e = new Ie.ByteSink;
            return e.compact(n), Buffer.from(e.toBytes());
        },
        decode: (n)=>{
            const e = new Ie.Src(n), r = e.compact();
            return e.assertEOF(), BigInt(r);
        }
    }, $ = Symbol("MidnightBech32m");
    class B {
        static prefix = "mn";
        static encode(e, r) {
            return r[$].encode(e, r);
        }
        static validateSegment(e, r) {
            if (!/^[A-Za-z1-9-]+$/.test(r)) throw new Error(`Segment ${e}: ${r} contains disallowed characters. Allowed characters are only numbers, latin letters and a hyphen`);
        }
        static parse(e) {
            const r = te.decodeToBytes(e), [c, s, i = F] = r.prefix.split("_");
            if (c != B.prefix) throw new Error(`Expected prefix ${B.prefix}`);
            return B.validateSegment("type", s), i != F && B.validateSegment("network", i), new B(s, i, Buffer.from(r.bytes));
        }
        type;
        network;
        data;
        constructor(e, r, c){
            this.data = c, this.network = r, this.type = e, B.validateSegment("type", e), r != F && B.validateSegment("network", r);
        }
        decode(e, r) {
            return e[$].decode(r, this);
        }
        asString() {
            const e = this.network == F ? "" : `_${this.network}`;
            return te.encode(`${B.prefix}_${this.type}${e}`, te.toWords(this.data), !1);
        }
        toString() {
            return this.asString();
        }
    }
    class O {
        type;
        dataToBytes;
        dataFromBytes;
        constructor(e, r, c){
            this.dataFromBytes = c, this.dataToBytes = r, this.type = e;
        }
        encode(e, r) {
            const c = O.createContext(e);
            return new B(this.type, c.networkId, this.dataToBytes(r));
        }
        decode(e, r) {
            const c = O.createContext(e);
            if (r.type != this.type) throw new Error(`Expected type ${this.type}, got ${r.type}`);
            if (c.networkId != r.network) throw new Error(`Expected ${Ue.toString(c.networkId)} address, got ${Ue.toString(r.network)} one`);
            return this.dataFromBytes(r.data);
        }
        static createContext(e) {
            return e === "mainnet" ? {
                networkId: F
            } : {
                networkId: e
            };
        }
    }
    class Y {
        static codec = new O("shield-addr", (e)=>Buffer.concat([
                e.coinPublicKey.data,
                e.encryptionPublicKey.data
            ]), (e)=>{
            const r = new C(e.subarray(0, C.keyLength)), c = new M(e.subarray(C.keyLength));
            return new Y(r, c);
        });
        static [$] = Y.codec;
        [$] = Y.codec;
        coinPublicKey;
        encryptionPublicKey;
        constructor(e, r){
            this.encryptionPublicKey = r, this.coinPublicKey = e;
        }
        coinPublicKeyString() {
            return this.coinPublicKey.data.toString("hex");
        }
        encryptionPublicKeyString() {
            return this.encryptionPublicKey.data.toString("hex");
        }
        equals(e) {
            return this.coinPublicKey.equals(e.coinPublicKey) && this.encryptionPublicKey.equals(e.encryptionPublicKey);
        }
    }
    class C {
        static keyLength = 32;
        static codec = new O("shield-cpk", (e)=>e.data, (e)=>new C(e));
        static fromHexString(e) {
            return new C(Buffer.from(e, "hex"));
        }
        data;
        constructor(e){
            if (this.data = e, e.length != C.keyLength) throw new Error("Coin public key needs to be 32 bytes long");
        }
        toHexString() {
            return this.data.toString("hex");
        }
        equals(e) {
            return (typeof e == "string" ? C.fromHexString(e) : e).data.equals(this.data);
        }
    }
    class M {
        static keyLength = 32;
        static codec = new O("shield-epk", (e)=>e.data, (e)=>new M(e));
        static fromHexString(e) {
            return new M(Buffer.from(e, "hex"));
        }
        data;
        constructor(e){
            this.data = e;
        }
        toHexString() {
            return this.data.toString("hex");
        }
        equals(e) {
            return (typeof e == "string" ? M.fromHexString(e) : e).data.equals(this.data);
        }
    }
    class D {
        data;
        static keyLength = 32;
        static codec = new O("addr", (e)=>e.data, (e)=>new D(e));
        static [$] = D.codec;
        [$] = D.codec;
        constructor(e){
            if (e.length != D.keyLength) throw new Error("Unshielded address needs to be 32 bytes long");
            this.data = e;
        }
        get hexString() {
            return this.data.toString("hex");
        }
        equals(e) {
            return (typeof e == "string" ? new D(Buffer.from(e, "hex")) : e).data.equals(this.data);
        }
    }
    class j {
        data;
        static codec = new O("dust", (e)=>e.serialize(), (e)=>new j(Te.decode(e)));
        static [$] = j.codec;
        [$] = j.codec;
        static encodePublicKey = (e, r)=>j.codec.encode(e, new j(r)).asString();
        constructor(e){
            if (e >= Vt.modulus) throw new Error("Dust address is too large");
            this.data = e;
        }
        serialize() {
            return Te.encode(this.data);
        }
        equals(e) {
            return (typeof e == "bigint" ? e : e.data) === this.data;
        }
    }
    un = function(n, e) {
        if (n == null) throw new Error(e ?? "Expected value to be defined");
    };
    dn = function(n, e) {
        if (n != null) throw new Error(e ?? "Expected value to be null or undefined");
    };
    let Jt, oe, je;
    fn = ()=>new Date(Date.now() + 3600 * 1e3);
    Jt = /^(?<prefix>(0x)?)(?<byteChars>([0-9A-Fa-f]{2})*)(?<incompleteChars>.*)$/;
    oe = (n)=>{
        const e = Jt.exec(n)?.groups;
        return {
            hasPrefix: e.prefix === "0x",
            byteChars: e.byteChars,
            incompleteChars: e.incompleteChars
        };
    };
    hn = (n)=>se.Buffer.from(n).toString("hex");
    je = (n, e)=>{
        if (!n || e !== void 0) return !1;
        const r = oe(n);
        return r.byteChars.length > 0 && !r.incompleteChars;
    };
    function Gt(n, e) {
        if (!n) throw new TypeError("Input string must have non-zero length.");
        const r = oe(n);
        if (r.incompleteChars) {
            if (r.incompleteChars.length % 2 > 0) throw new TypeError(`The last byte of input string '${n}' is incomplete.`);
            const c = r.byteChars.length + (r.hasPrefix ? 2 : 0);
            throw new TypeError(`Invalid hex-digit '${n[c]}' found in input string at index ${c}.`);
        }
        if (!r.byteChars) throw new TypeError(`Input string '${n}' is not a valid hex-string.`);
        {
            const c = r.byteChars.length / 2;
            if (e !== c) throw new TypeError(`Expected an input string with byte length of ${e}, got ${c}.`);
        }
    }
    let Zt, Wt, Yt, Xt;
    ln = (n, e)=>{
        if (je(n)) return n;
        const r = B.parse(n), c = C.codec.decode(e, r);
        return se.Buffer.from(c.data).toString("hex");
    };
    yn = (n, e)=>{
        if (je(n)) return n;
        const r = B.parse(n), c = M.codec.decode(e, r);
        return se.Buffer.from(c.data).toString("hex");
    };
    Zt = 255;
    Wt = /^[a-zA-Z0-9._-]+$/;
    Yt = new Set([
        "localhost",
        "127.0.0.1",
        "::1",
        "[::1]"
    ]);
    Xt = new Set([
        "http:",
        "ws:"
    ]);
    pn = function(n, e) {
        if (typeof n != "string" || n.length === 0 || n.length > Zt) throw new Error(`Invalid ${e}: ${JSON.stringify(n)}`);
        if (n === "." || n === "..") throw new Error(`Invalid ${e}: ${JSON.stringify(n)}`);
        if (!Wt.test(n)) throw new Error(`Invalid ${e}: ${JSON.stringify(n)}`);
    };
    gn = function(n, e) {
        let r;
        try {
            r = new URL(n);
        } catch  {
            return;
        }
        if (!Xt.has(r.protocol) || Yt.has(r.hostname)) return;
        const c = r.protocol.replace(/:$/, ""), s = c === "http" ? "https://" : "wss://";
        console.warn(`midnight-js: ${e} uses unencrypted ${c}:// for non-loopback host '${r.hostname}'; sensitive data may be transmitted in clear text. Use ${s} in production.`);
    };
    wn = function(n) {
        if (Gt(n, 32), oe(n).hasPrefix) throw new TypeError(`Unexpected '0x' prefix in contract address '${n}'`);
    };
    const zt = (n)=>Ot(n), Qt = Symbol.for("compact-js/effect/ZKConfigurationReadError");
    class vt extends ht(Qt, "ZKConfigurationReadError") {
    }
    let en, nn, rn;
    en = (n, e, r, c)=>new vt({
            contractTag: n,
            provableCircuitId: e,
            assetType: r,
            message: `Failed to read ${r.replaceAll("-", " ")} for ${n}#${e}`,
            cause: c
        });
    tn = lt(pt(), yt({
        byteLength: "32..=32"
    }));
    nn = (n)=>(e)=>Et(function*() {
                const r = (c)=>It({
                        try: ()=>n.getVerifierKey(c).then((s)=>Ae(Ut(s))),
                        catch: (s)=>en(e.tag, c, "verifier-key", s)
                    });
                return {
                    getVerifierKey: r,
                    getVerifierKeys: (c)=>_t(c, (s)=>r(s).pipe(Bt((i)=>[
                                    s,
                                    i
                                ])), {
                            concurrency: "unbounded",
                            discard: !1
                        })
                };
            });
    rn = (n, e)=>mt(xt(he, he.of({
            createReader: nn(n)
        })), Tt).pipe(kt(St(Ct(e, {
            pathDelim: "_"
        }).pipe(At))));
    bn = (n, e)=>{
        let r = [
            [
                "KEYS_COIN_PUBLIC",
                e.coinPublicKey
            ]
        ];
        return e.signingKey && (r = r.concat([
            [
                "KEYS_SIGNING",
                e.signingKey
            ]
        ])), zt(rn(n, new Map(r)));
    };
    mn = (n)=>gt(n, {
            onSuccess: (e)=>e,
            onFailure: (e)=>{
                throw wt(e) ? e.error : new Error(`Unexpected error: ${bt(e)}`);
            }
        });
    xn = (n)=>Ae(n);
    kn = (n)=>tn(n);
    Sn = class extends Error {
        invalidScheme;
        allowableSchemes;
        constructor(e, r){
            super(`Invalid protocol scheme: '${e}'. Allowable schemes are one of: ${r.join(",")}`), this.invalidScheme = e, this.allowableSchemes = r;
        }
    };
    var Ce;
    (function(n) {
        n.INFO = "info", n.WARN = "warn", n.ERROR = "error", n.FATAL = "fatal", n.DEBUG = "debug", n.TRACE = "trace";
    })(Ce || (Ce = {}));
    En = (n)=>n;
    _n = (n)=>n;
    Bn = (n)=>n;
    In = "SegmentFail";
    Un = "SegmentSuccess";
    Tn = "FailEntirely";
    Cn = "FailFallible";
    An = "SucceedEntirely";
    Rn = class {
        async getVerifierKeys(e) {
            return Promise.all(e.map(async (r)=>{
                const c = await this.getVerifierKey(r);
                return [
                    r,
                    c
                ];
            }));
        }
        async get(e) {
            return {
                circuitId: e,
                proverKey: await this.getProverKey(e),
                verifierKey: await this.getVerifierKey(e),
                zkir: await this.getZKIR(e)
            };
        }
        asKeyMaterialProvider() {
            return this;
        }
    };
});
export { tn as C, Cn as F, Sn as I, An as S, Rn as Z, wn as a, un as b, dn as c, fn as d, mn as e, yn as f, xn as g, kn as h, pn as i, En as j, _n as k, Bn as l, bn as m, Un as n, In as o, ln as p, Tn as q, hn as t, gn as w, __tla };
