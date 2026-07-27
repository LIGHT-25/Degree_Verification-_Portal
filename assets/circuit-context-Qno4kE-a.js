import { h as it, i as at, j, k as ct, l as ut, m as lt, n as Le, o as ft, e as pt, Q as st, C as _e, a as $e, S as yt, __tla as __tla_0 } from "./constants-D7c6DMua.js";
import { r as dt, c as Me, g as gt } from "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
let P, _t, vt, Rt, Tt, kt, Ct, bt, Wt;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    var Y, qe;
    function St() {
        if (qe) return Y;
        qe = 1;
        var r = typeof Map == "function" && Map.prototype, o = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, u = r && o && typeof o.get == "function" ? o.get : null, l = r && Map.prototype.forEach, s = typeof Set == "function" && Set.prototype, S = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, f = s && S && typeof S.get == "function" ? S.get : null, R = s && Set.prototype.forEach, O = typeof WeakMap == "function" && WeakMap.prototype, q = O ? WeakMap.prototype.has : null, We = typeof WeakSet == "function" && WeakSet.prototype, L = We ? WeakSet.prototype.has : null, Te = typeof WeakRef == "function" && WeakRef.prototype, ee = Te ? WeakRef.prototype.deref : null, Re = Boolean.prototype.valueOf, ke = Object.prototype.toString, be = Function.prototype.toString, Ae = String.prototype.match, x = String.prototype.slice, h = String.prototype.replace, Pe = String.prototype.toUpperCase, te = String.prototype.toLowerCase, re = RegExp.prototype.test, ne = Array.prototype.concat, d = Array.prototype.join, xe = Array.prototype.slice, oe = Math.floor, D = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Q = Object.getOwnPropertySymbols, N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", _ = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, ie = Object.prototype.propertyIsEnumerable, ae = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__;
        } : null);
        function ce(e, t) {
            if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || re.call(/e/, t)) return t;
            var i = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if (typeof e == "number") {
                var a = e < 0 ? -oe(-e) : oe(e);
                if (a !== e) {
                    var c = String(a), n = x.call(t, c.length + 1);
                    return h.call(c, i, "$&_") + "." + h.call(h.call(n, /([0-9]{3})/g, "$&_"), /_$/, "");
                }
            }
            return h.call(t, i, "$&_");
        }
        var B = dt, ue = B.custom, le = ye(ue) ? ue : null, fe = {
            __proto__: null,
            double: '"',
            single: "'"
        }, De = {
            __proto__: null,
            double: /(["\\])/g,
            single: /(['\\])/g
        };
        Y = function e(t, i, a, c) {
            var n = i || {};
            if (g(n, "quoteStyle") && !g(fe, n.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (g(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var v = g(n, "customInspect") ? n.customInspect : !0;
            if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (g(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (g(n, "numericSeparator") && typeof n.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var C = n.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return ge(t, n);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var p = String(t);
                return C ? ce(t, p) : p;
            }
            if (typeof t == "bigint") {
                var w = String(t) + "n";
                return C ? ce(t, w) : w;
            }
            var H = typeof n.depth > "u" ? 5 : n.depth;
            if (typeof a > "u" && (a = 0), a >= H && H > 0 && typeof t == "object") return K(t) ? "[Array]" : "[Object]";
            var $ = rt(n, a);
            if (typeof c > "u") c = [];
            else if (de(c, t) >= 0) return "[Circular]";
            function y(M, A, ot) {
                if (A && (c = xe.call(c), c.push(A)), ot) {
                    var Ee = {
                        depth: n.depth
                    };
                    return g(n, "quoteStyle") && (Ee.quoteStyle = n.quoteStyle), e(M, Ee, a + 1, c);
                }
                return e(M, n, a + 1, c);
            }
            if (typeof t == "function" && !se(t)) {
                var he = Je(t), me = k(t, y);
                return "[Function" + (he ? ": " + he : " (anonymous)") + "]" + (me.length > 0 ? " { " + d.call(me, ", ") + " }" : "");
            }
            if (ye(t)) {
                var ve = E ? h.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : N.call(t);
                return typeof t == "object" && !E ? W(ve) : ve;
            }
            if (je(t)) {
                for(var T = "<" + te.call(String(t.nodeName)), V = t.attributes || [], b = 0; b < V.length; b++)T += " " + V[b].name + "=" + pe(Qe(V[b].value), "double", n);
                return T += ">", t.childNodes && t.childNodes.length && (T += "..."), T += "</" + te.call(String(t.nodeName)) + ">", T;
            }
            if (K(t)) {
                if (t.length === 0) return "[]";
                var J = k(t, y);
                return $ && !tt(J) ? "[" + F(J, $) + "]" : "[ " + d.call(J, ", ") + " ]";
            }
            if (Be(t)) {
                var U = k(t, y);
                return !("cause" in Error.prototype) && "cause" in t && !ie.call(t, "cause") ? "{ [" + String(t) + "] " + d.call(ne.call("[cause]: " + y(t.cause), U), ", ") + " }" : U.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + d.call(U, ", ") + " }";
            }
            if (typeof t == "object" && v) {
                if (le && typeof t[le] == "function" && B) return B(t, {
                    depth: H - a
                });
                if (v !== "symbol" && typeof t.inspect == "function") return t.inspect();
            }
            if (Ue(t)) {
                var we = [];
                return l && l.call(t, function(M, A) {
                    we.push(y(A, t, !0) + " => " + y(M, t));
                }), Se("Map", u.call(t), we, $);
            }
            if (Xe(t)) {
                var Ie = [];
                return R && R.call(t, function(M) {
                    Ie.push(y(M, t));
                }), Se("Set", f.call(t), Ie, $);
            }
            if (Ze(t)) return z("WeakMap");
            if (Ye(t)) return z("WeakSet");
            if (Ge(t)) return z("WeakRef");
            if (ze(t)) return W(y(Number(t)));
            if (He(t)) return W(y(D.call(t)));
            if (Fe(t)) return W(Re.call(t));
            if (Ke(t)) return W(y(String(t)));
            if (typeof window < "u" && t === window) return "{ [object Window] }";
            if (typeof globalThis < "u" && t === globalThis || typeof Me < "u" && t === Me) return "{ [object globalThis] }";
            if (!Ne(t) && !se(t)) {
                var Z = k(t, y), Ce = ae ? ae(t) === Object.prototype : t instanceof Object || t.constructor === Object, G = t instanceof Object ? "" : "null prototype", Oe = !Ce && _ && Object(t) === t && _ in t ? x.call(m(t), 8, -1) : G ? "Object" : "", nt = Ce || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", X = nt + (Oe || G ? "[" + d.call(ne.call([], Oe || [], G || []), ": ") + "] " : "");
                return Z.length === 0 ? X + "{}" : $ ? X + "{" + F(Z, $) + "}" : X + "{ " + d.call(Z, ", ") + " }";
            }
            return String(t);
        };
        function pe(e, t, i) {
            var a = i.quoteStyle || t, c = fe[a];
            return c + e + c;
        }
        function Qe(e) {
            return h.call(String(e), /"/g, "&quot;");
        }
        function I(e) {
            return !_ || !(typeof e == "object" && (_ in e || typeof e[_] < "u"));
        }
        function K(e) {
            return m(e) === "[object Array]" && I(e);
        }
        function Ne(e) {
            return m(e) === "[object Date]" && I(e);
        }
        function se(e) {
            return m(e) === "[object RegExp]" && I(e);
        }
        function Be(e) {
            return m(e) === "[object Error]" && I(e);
        }
        function Ke(e) {
            return m(e) === "[object String]" && I(e);
        }
        function ze(e) {
            return m(e) === "[object Number]" && I(e);
        }
        function Fe(e) {
            return m(e) === "[object Boolean]" && I(e);
        }
        function ye(e) {
            if (E) return e && typeof e == "object" && e instanceof Symbol;
            if (typeof e == "symbol") return !0;
            if (!e || typeof e != "object" || !N) return !1;
            try {
                return N.call(e), !0;
            } catch  {}
            return !1;
        }
        function He(e) {
            if (!e || typeof e != "object" || !D) return !1;
            try {
                return D.call(e), !0;
            } catch  {}
            return !1;
        }
        var Ve = Object.prototype.hasOwnProperty || function(e) {
            return e in this;
        };
        function g(e, t) {
            return Ve.call(e, t);
        }
        function m(e) {
            return ke.call(e);
        }
        function Je(e) {
            if (e.name) return e.name;
            var t = Ae.call(be.call(e), /^function\s*([\w$]+)/);
            return t ? t[1] : null;
        }
        function de(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for(var i = 0, a = e.length; i < a; i++)if (e[i] === t) return i;
            return -1;
        }
        function Ue(e) {
            if (!u || !e || typeof e != "object") return !1;
            try {
                u.call(e);
                try {
                    f.call(e);
                } catch  {
                    return !0;
                }
                return e instanceof Map;
            } catch  {}
            return !1;
        }
        function Ze(e) {
            if (!q || !e || typeof e != "object") return !1;
            try {
                q.call(e, q);
                try {
                    L.call(e, L);
                } catch  {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch  {}
            return !1;
        }
        function Ge(e) {
            if (!ee || !e || typeof e != "object") return !1;
            try {
                return ee.call(e), !0;
            } catch  {}
            return !1;
        }
        function Xe(e) {
            if (!f || !e || typeof e != "object") return !1;
            try {
                f.call(e);
                try {
                    u.call(e);
                } catch  {
                    return !0;
                }
                return e instanceof Set;
            } catch  {}
            return !1;
        }
        function Ye(e) {
            if (!L || !e || typeof e != "object") return !1;
            try {
                L.call(e, L);
                try {
                    q.call(e, q);
                } catch  {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch  {}
            return !1;
        }
        function je(e) {
            return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
        }
        function ge(e, t) {
            if (e.length > t.maxStringLength) {
                var i = e.length - t.maxStringLength, a = "... " + i + " more character" + (i > 1 ? "s" : "");
                return ge(x.call(e, 0, t.maxStringLength), t) + a;
            }
            var c = De[t.quoteStyle || "single"];
            c.lastIndex = 0;
            var n = h.call(h.call(e, c, "\\$1"), /[\x00-\x1f]/g, et);
            return pe(n, "single", t);
        }
        function et(e) {
            var t = e.charCodeAt(0), i = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            }[t];
            return i ? "\\" + i : "\\x" + (t < 16 ? "0" : "") + Pe.call(t.toString(16));
        }
        function W(e) {
            return "Object(" + e + ")";
        }
        function z(e) {
            return e + " { ? }";
        }
        function Se(e, t, i, a) {
            var c = a ? F(i, a) : d.call(i, ", ");
            return e + " (" + t + ") {" + c + "}";
        }
        function tt(e) {
            for(var t = 0; t < e.length; t++)if (de(e[t], `
`) >= 0) return !1;
            return !0;
        }
        function rt(e, t) {
            var i;
            if (e.indent === "	") i = "	";
            else if (typeof e.indent == "number" && e.indent > 0) i = d.call(Array(e.indent + 1), " ");
            else return null;
            return {
                base: i,
                prev: d.call(Array(t + 1), i)
            };
        }
        function F(e, t) {
            if (e.length === 0) return "";
            var i = `
` + t.prev + t.base;
            return i + d.call(e, "," + i) + `
` + t.prev;
        }
        function k(e, t) {
            var i = K(e), a = [];
            if (i) {
                a.length = e.length;
                for(var c = 0; c < e.length; c++)a[c] = g(e, c) ? t(e[c], e) : "";
            }
            var n = typeof Q == "function" ? Q(e) : [], v;
            if (E) {
                v = {};
                for(var C = 0; C < n.length; C++)v["$" + n[C]] = n[C];
            }
            for(var p in e)g(e, p) && (i && String(Number(p)) === p && p < e.length || E && v["$" + p] instanceof Symbol || (re.call(/[^\w$]/, p) ? a.push(t(p, e) + ": " + t(e[p], e)) : a.push(p + ": " + t(e[p], e))));
            if (typeof Q == "function") for(var w = 0; w < n.length; w++)ie.call(e, n[w]) && a.push("[" + t(n[w]) + "]: " + t(e[n[w]], e));
            return a;
        }
        return Y;
    }
    var ht = St();
    const mt = gt(ht);
    P = class extends Error {
        constructor(o){
            super(o), this.name = "CompactError";
        }
    };
    _t = function(r, o) {
        if (!r) {
            const u = `failed assert: ${o}`;
            throw new P(u);
        }
    };
    Wt = function(r, o, u, l, s) {
        const S = `type error: ${r} ${o} at ${u}; expected value of type ${l} but received ${mt(s)}`;
        throw new P(S);
    };
    let wt, It, Ot, Et, $t, Mt;
    vt = (r)=>({
            coinPublicKey: typeof r == "string" ? {
                bytes: j(r)
            } : r,
            currentIndex: 0n,
            inputs: [],
            outputs: []
        });
    wt = ({ is_left: r, left: o, right: u })=>({
            is_left: r,
            left: {
                bytes: j(o)
            },
            right: {
                bytes: ct(u)
            }
        });
    It = ({ is_left: r, left: o, right: u })=>({
            is_left: r,
            left: Le(o.bytes),
            right: ft(u.bytes)
        });
    Ct = (r)=>({
            coinPublicKey: {
                bytes: j(r.coinPublicKey)
            },
            currentIndex: r.currentIndex,
            inputs: r.inputs.map(at),
            outputs: r.outputs.map(({ coinInfo: o, recipient: u })=>({
                    coinInfo: it(o),
                    recipient: wt(u)
                }))
        });
    Tt = (r)=>({
            coinPublicKey: Le(r.coinPublicKey.bytes),
            currentIndex: r.currentIndex,
            inputs: r.inputs.map(lt),
            outputs: r.outputs.map(({ coinInfo: o, recipient: u })=>({
                    coinInfo: ut(o),
                    recipient: It(u)
                }))
        });
    Ot = (r)=>{
        let o;
        if (r instanceof $e) o = r;
        else if (r instanceof _e) o = r.data;
        else if (r instanceof yt) o = new $e(r);
        else throw new P(`'contractState' parameter ${r} has unexpected type`);
        return o;
    };
    Et = (r, o, u)=>{
        const l = new st(Ot(r), o), s = r instanceof _e ? r.balance : new Map;
        return l.block = {
            ...l.block,
            balance: s,
            ownAddress: o,
            secondsSinceEpoch: BigInt(Math.floor(Date.now() / 1e3))
        }, l;
    };
    $t = (r)=>typeof r == "object" && r !== null && "coinPublicKey" in r && typeof r.coinPublicKey == "string" && "currentIndex" in r && "inputs" in r && "outputs" in r;
    Mt = (r)=>typeof r == "object" && r !== null && "coinPublicKey" in r && typeof r.coinPublicKey == "object" && r.coinPublicKey !== null && "bytes" in r.coinPublicKey && "currentIndex" in r && "inputs" in r && "outputs" in r;
    Rt = (r, o, u, l, s, S, f)=>{
        const R = Et(u, r);
        let O;
        return $t(o) ? O = Ct(o) : Mt(o) ? O = o : O = vt(o), {
            currentPrivateState: l,
            currentZswapLocalState: O,
            currentQueryContext: R,
            costModel: pt.initialCostModel(),
            gasLimit: s
        };
    };
    kt = ()=>({
            readTime: 0n,
            computeTime: 0n,
            bytesWritten: 0n,
            bytesDeleted: 0n
        });
    bt = (r, o, u)=>{
        try {
            const l = r.currentQueryContext.query(u, r.costModel, r.gasLimit);
            r.currentQueryContext = l.context, r.gasCost = l.gasCost;
            const s = l.events.filter((f)=>f.tag === "read");
            let S = 0;
            if (o.publicTranscript = o.publicTranscript.concat(u.map((f)=>typeof f == "object" && "popeq" in f ? {
                    popeq: {
                        ...f.popeq,
                        result: s[S++].content
                    }
                } : f)), l.events.length === 1) {
                const f = l.events[0];
                if (f.tag === "read") return f.content;
            }
            return l.events;
        } catch (l) {
            throw l instanceof Error ? new P(l.toString()) : l;
        }
    };
});
export { P as C, _t as a, vt as b, Rt as c, Tt as d, kt as e, Ct as f, bt as q, Wt as t, __tla };
