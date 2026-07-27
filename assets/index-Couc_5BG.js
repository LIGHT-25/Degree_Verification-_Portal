const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-tNVTduxC.js","assets/index-DAa3eXPp.js","assets/ledger-KI6kX-Tc.js","assets/__vite-plugin-wasm-helper-D7K_KhUE.js","assets/___vite-browser-external_commonjs-proxy-DfwQUR7A.js","assets/ZKConfiguration-DQjWTRyA.js","assets/index-lg-b2sIa.js","assets/constants-D7c6DMua.js","assets/ContractExecutable-D6pG9pG8.js","assets/circuit-context-Qno4kE-a.js","assets/index-CQxKysc-.js","assets/cross-fetch-CSg03jRD.js","assets/index-ydjKOtMC.js","assets/compact-js-CR9XYrWy.js","assets/index-Cvve7t99.js"])))=>i.map(i=>d[i]);
let hy;
let __tla = (async ()=>{
    (function() {
        const O = document.createElement("link").relList;
        if (O && O.supports && O.supports("modulepreload")) return;
        for (const w of document.querySelectorAll('link[rel="modulepreload"]'))m(w);
        new MutationObserver((w)=>{
            for (const V of w)if (V.type === "childList") for (const G of V.addedNodes)G.tagName === "LINK" && G.rel === "modulepreload" && m(G);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function L(w) {
            const V = {};
            return w.integrity && (V.integrity = w.integrity), w.referrerPolicy && (V.referrerPolicy = w.referrerPolicy), w.crossOrigin === "use-credentials" ? V.credentials = "include" : w.crossOrigin === "anonymous" ? V.credentials = "omit" : V.credentials = "same-origin", V;
        }
        function m(w) {
            if (w.ep) return;
            w.ep = !0;
            const V = L(w);
            fetch(w.href, V);
        }
    })();
    var zf = {
        exports: {}
    }, Xu = {};
    var M0;
    function cy() {
        if (M0) return Xu;
        M0 = 1;
        var z = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
        function L(m, w, V) {
            var G = null;
            if (V !== void 0 && (G = "" + V), w.key !== void 0 && (G = "" + w.key), "key" in w) {
                V = {};
                for(var p in w)p !== "key" && (V[p] = w[p]);
            } else V = w;
            return w = V.ref, {
                $$typeof: z,
                type: m,
                key: G,
                ref: w !== void 0 ? w : null,
                props: V
            };
        }
        return Xu.Fragment = O, Xu.jsx = L, Xu.jsxs = L, Xu;
    }
    var D0;
    function fy() {
        return D0 || (D0 = 1, zf.exports = cy()), zf.exports;
    }
    var j = fy(), _f = {}, Qu = {}, N0;
    function ry() {
        if (N0) return Qu;
        N0 = 1, Qu.byteLength = p, Qu.toByteArray = A, Qu.fromByteArray = F;
        for(var z = [], O = [], L = typeof Uint8Array < "u" ? Uint8Array : Array, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", w = 0, V = m.length; w < V; ++w)z[w] = m[w], O[m.charCodeAt(w)] = w;
        O[45] = 62, O[95] = 63;
        function G(X) {
            var J = X.length;
            if (J % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var k = X.indexOf("=");
            k === -1 && (k = J);
            var Ut = k === J ? 0 : 4 - k % 4;
            return [
                k,
                Ut
            ];
        }
        function p(X) {
            var J = G(X), k = J[0], Ut = J[1];
            return (k + Ut) * 3 / 4 - Ut;
        }
        function q(X, J, k) {
            return (J + k) * 3 / 4 - k;
        }
        function A(X) {
            var J, k = G(X), Ut = k[0], Et = k[1], Tt = new L(q(X, Ut, Et)), dt = 0, wt = Et > 0 ? Ut - 4 : Ut, mt;
            for(mt = 0; mt < wt; mt += 4)J = O[X.charCodeAt(mt)] << 18 | O[X.charCodeAt(mt + 1)] << 12 | O[X.charCodeAt(mt + 2)] << 6 | O[X.charCodeAt(mt + 3)], Tt[dt++] = J >> 16 & 255, Tt[dt++] = J >> 8 & 255, Tt[dt++] = J & 255;
            return Et === 2 && (J = O[X.charCodeAt(mt)] << 2 | O[X.charCodeAt(mt + 1)] >> 4, Tt[dt++] = J & 255), Et === 1 && (J = O[X.charCodeAt(mt)] << 10 | O[X.charCodeAt(mt + 1)] << 4 | O[X.charCodeAt(mt + 2)] >> 2, Tt[dt++] = J >> 8 & 255, Tt[dt++] = J & 255), Tt;
        }
        function R(X) {
            return z[X >> 18 & 63] + z[X >> 12 & 63] + z[X >> 6 & 63] + z[X & 63];
        }
        function C(X, J, k) {
            for(var Ut, Et = [], Tt = J; Tt < k; Tt += 3)Ut = (X[Tt] << 16 & 16711680) + (X[Tt + 1] << 8 & 65280) + (X[Tt + 2] & 255), Et.push(R(Ut));
            return Et.join("");
        }
        function F(X) {
            for(var J, k = X.length, Ut = k % 3, Et = [], Tt = 16383, dt = 0, wt = k - Ut; dt < wt; dt += Tt)Et.push(C(X, dt, dt + Tt > wt ? wt : dt + Tt));
            return Ut === 1 ? (J = X[k - 1], Et.push(z[J >> 2] + z[J << 4 & 63] + "==")) : Ut === 2 && (J = (X[k - 2] << 8) + X[k - 1], Et.push(z[J >> 10] + z[J >> 4 & 63] + z[J << 2 & 63] + "=")), Et.join("");
        }
        return Qu;
    }
    var oi = {};
    var C0;
    function oy() {
        return C0 || (C0 = 1, oi.read = function(z, O, L, m, w) {
            var V, G, p = w * 8 - m - 1, q = (1 << p) - 1, A = q >> 1, R = -7, C = L ? w - 1 : 0, F = L ? -1 : 1, X = z[O + C];
            for(C += F, V = X & (1 << -R) - 1, X >>= -R, R += p; R > 0; V = V * 256 + z[O + C], C += F, R -= 8);
            for(G = V & (1 << -R) - 1, V >>= -R, R += m; R > 0; G = G * 256 + z[O + C], C += F, R -= 8);
            if (V === 0) V = 1 - A;
            else {
                if (V === q) return G ? NaN : (X ? -1 : 1) * (1 / 0);
                G = G + Math.pow(2, m), V = V - A;
            }
            return (X ? -1 : 1) * G * Math.pow(2, V - m);
        }, oi.write = function(z, O, L, m, w, V) {
            var G, p, q, A = V * 8 - w - 1, R = (1 << A) - 1, C = R >> 1, F = w === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, X = m ? 0 : V - 1, J = m ? 1 : -1, k = O < 0 || O === 0 && 1 / O < 0 ? 1 : 0;
            for(O = Math.abs(O), isNaN(O) || O === 1 / 0 ? (p = isNaN(O) ? 1 : 0, G = R) : (G = Math.floor(Math.log(O) / Math.LN2), O * (q = Math.pow(2, -G)) < 1 && (G--, q *= 2), G + C >= 1 ? O += F / q : O += F * Math.pow(2, 1 - C), O * q >= 2 && (G++, q /= 2), G + C >= R ? (p = 0, G = R) : G + C >= 1 ? (p = (O * q - 1) * Math.pow(2, w), G = G + C) : (p = O * Math.pow(2, C - 1) * Math.pow(2, w), G = 0)); w >= 8; z[L + X] = p & 255, X += J, p /= 256, w -= 8);
            for(G = G << w | p, A += w; A > 0; z[L + X] = G & 255, X += J, G /= 256, A -= 8);
            z[L + X - J] |= k * 128;
        }), oi;
    }
    var R0;
    function sy() {
        return R0 || (R0 = 1, (function(z) {
            const O = ry(), L = oy(), m = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            z.Buffer = p, z.SlowBuffer = Tt, z.INSPECT_MAX_BYTES = 50;
            const w = 2147483647;
            z.kMaxLength = w, p.TYPED_ARRAY_SUPPORT = V(), !p.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            function V() {
                try {
                    const o = new Uint8Array(1), i = {
                        foo: function() {
                            return 42;
                        }
                    };
                    return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(o, i), o.foo() === 42;
                } catch  {
                    return !1;
                }
            }
            Object.defineProperty(p.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (p.isBuffer(this)) return this.buffer;
                }
            }), Object.defineProperty(p.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (p.isBuffer(this)) return this.byteOffset;
                }
            });
            function G(o) {
                if (o > w) throw new RangeError('The value "' + o + '" is invalid for option "size"');
                const i = new Uint8Array(o);
                return Object.setPrototypeOf(i, p.prototype), i;
            }
            function p(o, i, c) {
                if (typeof o == "number") {
                    if (typeof i == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return C(o);
                }
                return q(o, i, c);
            }
            p.poolSize = 8192;
            function q(o, i, c) {
                if (typeof o == "string") return F(o, i);
                if (ArrayBuffer.isView(o)) return J(o);
                if (o == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o);
                if (xl(o, ArrayBuffer) || o && xl(o.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (xl(o, SharedArrayBuffer) || o && xl(o.buffer, SharedArrayBuffer))) return k(o, i, c);
                if (typeof o == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const s = o.valueOf && o.valueOf();
                if (s != null && s !== o) return p.from(s, i, c);
                const v = Ut(o);
                if (v) return v;
                if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function") return p.from(o[Symbol.toPrimitive]("string"), i, c);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o);
            }
            p.from = function(o, i, c) {
                return q(o, i, c);
            }, Object.setPrototypeOf(p.prototype, Uint8Array.prototype), Object.setPrototypeOf(p, Uint8Array);
            function A(o) {
                if (typeof o != "number") throw new TypeError('"size" argument must be of type number');
                if (o < 0) throw new RangeError('The value "' + o + '" is invalid for option "size"');
            }
            function R(o, i, c) {
                return A(o), o <= 0 ? G(o) : i !== void 0 ? typeof c == "string" ? G(o).fill(i, c) : G(o).fill(i) : G(o);
            }
            p.alloc = function(o, i, c) {
                return R(o, i, c);
            };
            function C(o) {
                return A(o), G(o < 0 ? 0 : Et(o) | 0);
            }
            p.allocUnsafe = function(o) {
                return C(o);
            }, p.allocUnsafeSlow = function(o) {
                return C(o);
            };
            function F(o, i) {
                if ((typeof i != "string" || i === "") && (i = "utf8"), !p.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                const c = dt(o, i) | 0;
                let s = G(c);
                const v = s.write(o, i);
                return v !== c && (s = s.slice(0, v)), s;
            }
            function X(o) {
                const i = o.length < 0 ? 0 : Et(o.length) | 0, c = G(i);
                for(let s = 0; s < i; s += 1)c[s] = o[s] & 255;
                return c;
            }
            function J(o) {
                if (xl(o, Uint8Array)) {
                    const i = new Uint8Array(o);
                    return k(i.buffer, i.byteOffset, i.byteLength);
                }
                return X(o);
            }
            function k(o, i, c) {
                if (i < 0 || o.byteLength < i) throw new RangeError('"offset" is outside of buffer bounds');
                if (o.byteLength < i + (c || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let s;
                return i === void 0 && c === void 0 ? s = new Uint8Array(o) : c === void 0 ? s = new Uint8Array(o, i) : s = new Uint8Array(o, i, c), Object.setPrototypeOf(s, p.prototype), s;
            }
            function Ut(o) {
                if (p.isBuffer(o)) {
                    const i = Et(o.length) | 0, c = G(i);
                    return c.length === 0 || o.copy(c, 0, 0, i), c;
                }
                if (o.length !== void 0) return typeof o.length != "number" || $n(o.length) ? G(0) : X(o);
                if (o.type === "Buffer" && Array.isArray(o.data)) return X(o.data);
            }
            function Et(o) {
                if (o >= w) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + w.toString(16) + " bytes");
                return o | 0;
            }
            function Tt(o) {
                return +o != o && (o = 0), p.alloc(+o);
            }
            p.isBuffer = function(i) {
                return i != null && i._isBuffer === !0 && i !== p.prototype;
            }, p.compare = function(i, c) {
                if (xl(i, Uint8Array) && (i = p.from(i, i.offset, i.byteLength)), xl(c, Uint8Array) && (c = p.from(c, c.offset, c.byteLength)), !p.isBuffer(i) || !p.isBuffer(c)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (i === c) return 0;
                let s = i.length, v = c.length;
                for(let T = 0, M = Math.min(s, v); T < M; ++T)if (i[T] !== c[T]) {
                    s = i[T], v = c[T];
                    break;
                }
                return s < v ? -1 : v < s ? 1 : 0;
            }, p.isEncoding = function(i) {
                switch(String(i).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1;
                }
            }, p.concat = function(i, c) {
                if (!Array.isArray(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (i.length === 0) return p.alloc(0);
                let s;
                if (c === void 0) for(c = 0, s = 0; s < i.length; ++s)c += i[s].length;
                const v = p.allocUnsafe(c);
                let T = 0;
                for(s = 0; s < i.length; ++s){
                    let M = i[s];
                    if (xl(M, Uint8Array)) T + M.length > v.length ? (p.isBuffer(M) || (M = p.from(M)), M.copy(v, T)) : Uint8Array.prototype.set.call(v, M, T);
                    else if (p.isBuffer(M)) M.copy(v, T);
                    else throw new TypeError('"list" argument must be an Array of Buffers');
                    T += M.length;
                }
                return v;
            };
            function dt(o, i) {
                if (p.isBuffer(o)) return o.length;
                if (ArrayBuffer.isView(o) || xl(o, ArrayBuffer)) return o.byteLength;
                if (typeof o != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o);
                const c = o.length, s = arguments.length > 2 && arguments[2] === !0;
                if (!s && c === 0) return 0;
                let v = !1;
                for(;;)switch(i){
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return c;
                    case "utf8":
                    case "utf-8":
                        return Fn(o).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return c * 2;
                    case "hex":
                        return c >>> 1;
                    case "base64":
                        return cn(o).length;
                    default:
                        if (v) return s ? -1 : Fn(o).length;
                        i = ("" + i).toLowerCase(), v = !0;
                }
            }
            p.byteLength = dt;
            function wt(o, i, c) {
                let s = !1;
                if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, i >>>= 0, c <= i)) return "";
                for(o || (o = "utf8");;)switch(o){
                    case "hex":
                        return yt(this, i, c);
                    case "utf8":
                    case "utf-8":
                        return al(this, i, c);
                    case "ascii":
                        return H(this, i, c);
                    case "latin1":
                    case "binary":
                        return W(this, i, c);
                    case "base64":
                        return ql(this, i, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return vt(this, i, c);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + o);
                        o = (o + "").toLowerCase(), s = !0;
                }
            }
            p.prototype._isBuffer = !0;
            function mt(o, i, c) {
                const s = o[i];
                o[i] = o[c], o[c] = s;
            }
            p.prototype.swap16 = function() {
                const i = this.length;
                if (i % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for(let c = 0; c < i; c += 2)mt(this, c, c + 1);
                return this;
            }, p.prototype.swap32 = function() {
                const i = this.length;
                if (i % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for(let c = 0; c < i; c += 4)mt(this, c, c + 3), mt(this, c + 1, c + 2);
                return this;
            }, p.prototype.swap64 = function() {
                const i = this.length;
                if (i % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for(let c = 0; c < i; c += 8)mt(this, c, c + 7), mt(this, c + 1, c + 6), mt(this, c + 2, c + 5), mt(this, c + 3, c + 4);
                return this;
            }, p.prototype.toString = function() {
                const i = this.length;
                return i === 0 ? "" : arguments.length === 0 ? al(this, 0, i) : wt.apply(this, arguments);
            }, p.prototype.toLocaleString = p.prototype.toString, p.prototype.equals = function(i) {
                if (!p.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
                return this === i ? !0 : p.compare(this, i) === 0;
            }, p.prototype.inspect = function() {
                let i = "";
                const c = z.INSPECT_MAX_BYTES;
                return i = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (i += " ... "), "<Buffer " + i + ">";
            }, m && (p.prototype[m] = p.prototype.inspect), p.prototype.compare = function(i, c, s, v, T) {
                if (xl(i, Uint8Array) && (i = p.from(i, i.offset, i.byteLength)), !p.isBuffer(i)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i);
                if (c === void 0 && (c = 0), s === void 0 && (s = i ? i.length : 0), v === void 0 && (v = 0), T === void 0 && (T = this.length), c < 0 || s > i.length || v < 0 || T > this.length) throw new RangeError("out of range index");
                if (v >= T && c >= s) return 0;
                if (v >= T) return -1;
                if (c >= s) return 1;
                if (c >>>= 0, s >>>= 0, v >>>= 0, T >>>= 0, this === i) return 0;
                let M = T - v, I = s - c;
                const bt = Math.min(M, I), ct = this.slice(v, T), jt = i.slice(c, s);
                for(let zt = 0; zt < bt; ++zt)if (ct[zt] !== jt[zt]) {
                    M = ct[zt], I = jt[zt];
                    break;
                }
                return M < I ? -1 : I < M ? 1 : 0;
            };
            function Ft(o, i, c, s, v) {
                if (o.length === 0) return -1;
                if (typeof c == "string" ? (s = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, $n(c) && (c = v ? 0 : o.length - 1), c < 0 && (c = o.length + c), c >= o.length) {
                    if (v) return -1;
                    c = o.length - 1;
                } else if (c < 0) if (v) c = 0;
                else return -1;
                if (typeof i == "string" && (i = p.from(i, s)), p.isBuffer(i)) return i.length === 0 ? -1 : nt(o, i, c, s, v);
                if (typeof i == "number") return i = i & 255, typeof Uint8Array.prototype.indexOf == "function" ? v ? Uint8Array.prototype.indexOf.call(o, i, c) : Uint8Array.prototype.lastIndexOf.call(o, i, c) : nt(o, [
                    i
                ], c, s, v);
                throw new TypeError("val must be string, number or Buffer");
            }
            function nt(o, i, c, s, v) {
                let T = 1, M = o.length, I = i.length;
                if (s !== void 0 && (s = String(s).toLowerCase(), s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
                    if (o.length < 2 || i.length < 2) return -1;
                    T = 2, M /= 2, I /= 2, c /= 2;
                }
                function bt(jt, zt) {
                    return T === 1 ? jt[zt] : jt.readUInt16BE(zt * T);
                }
                let ct;
                if (v) {
                    let jt = -1;
                    for(ct = c; ct < M; ct++)if (bt(o, ct) === bt(i, jt === -1 ? 0 : ct - jt)) {
                        if (jt === -1 && (jt = ct), ct - jt + 1 === I) return jt * T;
                    } else jt !== -1 && (ct -= ct - jt), jt = -1;
                } else for(c + I > M && (c = M - I), ct = c; ct >= 0; ct--){
                    let jt = !0;
                    for(let zt = 0; zt < I; zt++)if (bt(o, ct + zt) !== bt(i, zt)) {
                        jt = !1;
                        break;
                    }
                    if (jt) return ct;
                }
                return -1;
            }
            p.prototype.includes = function(i, c, s) {
                return this.indexOf(i, c, s) !== -1;
            }, p.prototype.indexOf = function(i, c, s) {
                return Ft(this, i, c, s, !0);
            }, p.prototype.lastIndexOf = function(i, c, s) {
                return Ft(this, i, c, s, !1);
            };
            function Wt(o, i, c, s) {
                c = Number(c) || 0;
                const v = o.length - c;
                s ? (s = Number(s), s > v && (s = v)) : s = v;
                const T = i.length;
                s > T / 2 && (s = T / 2);
                let M;
                for(M = 0; M < s; ++M){
                    const I = parseInt(i.substr(M * 2, 2), 16);
                    if ($n(I)) return M;
                    o[c + M] = I;
                }
                return M;
            }
            function rl(o, i, c, s) {
                return me(Fn(i, o.length - c), o, c, s);
            }
            function Xl(o, i, c, s) {
                return me(Ku(i), o, c, s);
            }
            function ol(o, i, c, s) {
                return me(cn(i), o, c, s);
            }
            function kt(o, i, c, s) {
                return me(Wn(i, o.length - c), o, c, s);
            }
            p.prototype.write = function(i, c, s, v) {
                if (c === void 0) v = "utf8", s = this.length, c = 0;
                else if (s === void 0 && typeof c == "string") v = c, s = this.length, c = 0;
                else if (isFinite(c)) c = c >>> 0, isFinite(s) ? (s = s >>> 0, v === void 0 && (v = "utf8")) : (v = s, s = void 0);
                else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const T = this.length - c;
                if ((s === void 0 || s > T) && (s = T), i.length > 0 && (s < 0 || c < 0) || c > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                v || (v = "utf8");
                let M = !1;
                for(;;)switch(v){
                    case "hex":
                        return Wt(this, i, c, s);
                    case "utf8":
                    case "utf-8":
                        return rl(this, i, c, s);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return Xl(this, i, c, s);
                    case "base64":
                        return ol(this, i, c, s);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return kt(this, i, c, s);
                    default:
                        if (M) throw new TypeError("Unknown encoding: " + v);
                        v = ("" + v).toLowerCase(), M = !0;
                }
            }, p.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function ql(o, i, c) {
                return i === 0 && c === o.length ? O.fromByteArray(o) : O.fromByteArray(o.slice(i, c));
            }
            function al(o, i, c) {
                c = Math.min(o.length, c);
                const s = [];
                let v = i;
                for(; v < c;){
                    const T = o[v];
                    let M = null, I = T > 239 ? 4 : T > 223 ? 3 : T > 191 ? 2 : 1;
                    if (v + I <= c) {
                        let bt, ct, jt, zt;
                        switch(I){
                            case 1:
                                T < 128 && (M = T);
                                break;
                            case 2:
                                bt = o[v + 1], (bt & 192) === 128 && (zt = (T & 31) << 6 | bt & 63, zt > 127 && (M = zt));
                                break;
                            case 3:
                                bt = o[v + 1], ct = o[v + 2], (bt & 192) === 128 && (ct & 192) === 128 && (zt = (T & 15) << 12 | (bt & 63) << 6 | ct & 63, zt > 2047 && (zt < 55296 || zt > 57343) && (M = zt));
                                break;
                            case 4:
                                bt = o[v + 1], ct = o[v + 2], jt = o[v + 3], (bt & 192) === 128 && (ct & 192) === 128 && (jt & 192) === 128 && (zt = (T & 15) << 18 | (bt & 63) << 12 | (ct & 63) << 6 | jt & 63, zt > 65535 && zt < 1114112 && (M = zt));
                        }
                    }
                    M === null ? (M = 65533, I = 1) : M > 65535 && (M -= 65536, s.push(M >>> 10 & 1023 | 55296), M = 56320 | M & 1023), s.push(M), v += I;
                }
                return _(s);
            }
            const it = 4096;
            function _(o) {
                const i = o.length;
                if (i <= it) return String.fromCharCode.apply(String, o);
                let c = "", s = 0;
                for(; s < i;)c += String.fromCharCode.apply(String, o.slice(s, s += it));
                return c;
            }
            function H(o, i, c) {
                let s = "";
                c = Math.min(o.length, c);
                for(let v = i; v < c; ++v)s += String.fromCharCode(o[v] & 127);
                return s;
            }
            function W(o, i, c) {
                let s = "";
                c = Math.min(o.length, c);
                for(let v = i; v < c; ++v)s += String.fromCharCode(o[v]);
                return s;
            }
            function yt(o, i, c) {
                const s = o.length;
                (!i || i < 0) && (i = 0), (!c || c < 0 || c > s) && (c = s);
                let v = "";
                for(let T = i; T < c; ++T)v += cl[o[T]];
                return v;
            }
            function vt(o, i, c) {
                const s = o.slice(i, c);
                let v = "";
                for(let T = 0; T < s.length - 1; T += 2)v += String.fromCharCode(s[T] + s[T + 1] * 256);
                return v;
            }
            p.prototype.slice = function(i, c) {
                const s = this.length;
                i = ~~i, c = c === void 0 ? s : ~~c, i < 0 ? (i += s, i < 0 && (i = 0)) : i > s && (i = s), c < 0 ? (c += s, c < 0 && (c = 0)) : c > s && (c = s), c < i && (c = i);
                const v = this.subarray(i, c);
                return Object.setPrototypeOf(v, p.prototype), v;
            };
            function d(o, i, c) {
                if (o % 1 !== 0 || o < 0) throw new RangeError("offset is not uint");
                if (o + i > c) throw new RangeError("Trying to access beyond buffer length");
            }
            p.prototype.readUintLE = p.prototype.readUIntLE = function(i, c, s) {
                i = i >>> 0, c = c >>> 0, s || d(i, c, this.length);
                let v = this[i], T = 1, M = 0;
                for(; ++M < c && (T *= 256);)v += this[i + M] * T;
                return v;
            }, p.prototype.readUintBE = p.prototype.readUIntBE = function(i, c, s) {
                i = i >>> 0, c = c >>> 0, s || d(i, c, this.length);
                let v = this[i + --c], T = 1;
                for(; c > 0 && (T *= 256);)v += this[i + --c] * T;
                return v;
            }, p.prototype.readUint8 = p.prototype.readUInt8 = function(i, c) {
                return i = i >>> 0, c || d(i, 1, this.length), this[i];
            }, p.prototype.readUint16LE = p.prototype.readUInt16LE = function(i, c) {
                return i = i >>> 0, c || d(i, 2, this.length), this[i] | this[i + 1] << 8;
            }, p.prototype.readUint16BE = p.prototype.readUInt16BE = function(i, c) {
                return i = i >>> 0, c || d(i, 2, this.length), this[i] << 8 | this[i + 1];
            }, p.prototype.readUint32LE = p.prototype.readUInt32LE = function(i, c) {
                return i = i >>> 0, c || d(i, 4, this.length), (this[i] | this[i + 1] << 8 | this[i + 2] << 16) + this[i + 3] * 16777216;
            }, p.prototype.readUint32BE = p.prototype.readUInt32BE = function(i, c) {
                return i = i >>> 0, c || d(i, 4, this.length), this[i] * 16777216 + (this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3]);
            }, p.prototype.readBigUInt64LE = Ql(function(i) {
                i = i >>> 0, Fl(i, "offset");
                const c = this[i], s = this[i + 7];
                (c === void 0 || s === void 0) && pl(i, this.length - 8);
                const v = c + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24, T = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + s * 2 ** 24;
                return BigInt(v) + (BigInt(T) << BigInt(32));
            }), p.prototype.readBigUInt64BE = Ql(function(i) {
                i = i >>> 0, Fl(i, "offset");
                const c = this[i], s = this[i + 7];
                (c === void 0 || s === void 0) && pl(i, this.length - 8);
                const v = c * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i], T = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + s;
                return (BigInt(v) << BigInt(32)) + BigInt(T);
            }), p.prototype.readIntLE = function(i, c, s) {
                i = i >>> 0, c = c >>> 0, s || d(i, c, this.length);
                let v = this[i], T = 1, M = 0;
                for(; ++M < c && (T *= 256);)v += this[i + M] * T;
                return T *= 128, v >= T && (v -= Math.pow(2, 8 * c)), v;
            }, p.prototype.readIntBE = function(i, c, s) {
                i = i >>> 0, c = c >>> 0, s || d(i, c, this.length);
                let v = c, T = 1, M = this[i + --v];
                for(; v > 0 && (T *= 256);)M += this[i + --v] * T;
                return T *= 128, M >= T && (M -= Math.pow(2, 8 * c)), M;
            }, p.prototype.readInt8 = function(i, c) {
                return i = i >>> 0, c || d(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
            }, p.prototype.readInt16LE = function(i, c) {
                i = i >>> 0, c || d(i, 2, this.length);
                const s = this[i] | this[i + 1] << 8;
                return s & 32768 ? s | 4294901760 : s;
            }, p.prototype.readInt16BE = function(i, c) {
                i = i >>> 0, c || d(i, 2, this.length);
                const s = this[i + 1] | this[i] << 8;
                return s & 32768 ? s | 4294901760 : s;
            }, p.prototype.readInt32LE = function(i, c) {
                return i = i >>> 0, c || d(i, 4, this.length), this[i] | this[i + 1] << 8 | this[i + 2] << 16 | this[i + 3] << 24;
            }, p.prototype.readInt32BE = function(i, c) {
                return i = i >>> 0, c || d(i, 4, this.length), this[i] << 24 | this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3];
            }, p.prototype.readBigInt64LE = Ql(function(i) {
                i = i >>> 0, Fl(i, "offset");
                const c = this[i], s = this[i + 7];
                (c === void 0 || s === void 0) && pl(i, this.length - 8);
                const v = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (s << 24);
                return (BigInt(v) << BigInt(32)) + BigInt(c + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
            }), p.prototype.readBigInt64BE = Ql(function(i) {
                i = i >>> 0, Fl(i, "offset");
                const c = this[i], s = this[i + 7];
                (c === void 0 || s === void 0) && pl(i, this.length - 8);
                const v = (c << 24) + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
                return (BigInt(v) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + s);
            }), p.prototype.readFloatLE = function(i, c) {
                return i = i >>> 0, c || d(i, 4, this.length), L.read(this, i, !0, 23, 4);
            }, p.prototype.readFloatBE = function(i, c) {
                return i = i >>> 0, c || d(i, 4, this.length), L.read(this, i, !1, 23, 4);
            }, p.prototype.readDoubleLE = function(i, c) {
                return i = i >>> 0, c || d(i, 8, this.length), L.read(this, i, !0, 52, 8);
            }, p.prototype.readDoubleBE = function(i, c) {
                return i = i >>> 0, c || d(i, 8, this.length), L.read(this, i, !1, 52, 8);
            };
            function U(o, i, c, s, v, T) {
                if (!p.isBuffer(o)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i > v || i < T) throw new RangeError('"value" argument is out of bounds');
                if (c + s > o.length) throw new RangeError("Index out of range");
            }
            p.prototype.writeUintLE = p.prototype.writeUIntLE = function(i, c, s, v) {
                if (i = +i, c = c >>> 0, s = s >>> 0, !v) {
                    const I = Math.pow(2, 8 * s) - 1;
                    U(this, i, c, s, I, 0);
                }
                let T = 1, M = 0;
                for(this[c] = i & 255; ++M < s && (T *= 256);)this[c + M] = i / T & 255;
                return c + s;
            }, p.prototype.writeUintBE = p.prototype.writeUIntBE = function(i, c, s, v) {
                if (i = +i, c = c >>> 0, s = s >>> 0, !v) {
                    const I = Math.pow(2, 8 * s) - 1;
                    U(this, i, c, s, I, 0);
                }
                let T = s - 1, M = 1;
                for(this[c + T] = i & 255; --T >= 0 && (M *= 256);)this[c + T] = i / M & 255;
                return c + s;
            }, p.prototype.writeUint8 = p.prototype.writeUInt8 = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 1, 255, 0), this[c] = i & 255, c + 1;
            }, p.prototype.writeUint16LE = p.prototype.writeUInt16LE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 2, 65535, 0), this[c] = i & 255, this[c + 1] = i >>> 8, c + 2;
            }, p.prototype.writeUint16BE = p.prototype.writeUInt16BE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 2, 65535, 0), this[c] = i >>> 8, this[c + 1] = i & 255, c + 2;
            }, p.prototype.writeUint32LE = p.prototype.writeUInt32LE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 4, 4294967295, 0), this[c + 3] = i >>> 24, this[c + 2] = i >>> 16, this[c + 1] = i >>> 8, this[c] = i & 255, c + 4;
            }, p.prototype.writeUint32BE = p.prototype.writeUInt32BE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 4, 4294967295, 0), this[c] = i >>> 24, this[c + 1] = i >>> 16, this[c + 2] = i >>> 8, this[c + 3] = i & 255, c + 4;
            };
            function Y(o, i, c, s, v) {
                an(i, s, v, o, c, 7);
                let T = Number(i & BigInt(4294967295));
                o[c++] = T, T = T >> 8, o[c++] = T, T = T >> 8, o[c++] = T, T = T >> 8, o[c++] = T;
                let M = Number(i >> BigInt(32) & BigInt(4294967295));
                return o[c++] = M, M = M >> 8, o[c++] = M, M = M >> 8, o[c++] = M, M = M >> 8, o[c++] = M, c;
            }
            function Q(o, i, c, s, v) {
                an(i, s, v, o, c, 7);
                let T = Number(i & BigInt(4294967295));
                o[c + 7] = T, T = T >> 8, o[c + 6] = T, T = T >> 8, o[c + 5] = T, T = T >> 8, o[c + 4] = T;
                let M = Number(i >> BigInt(32) & BigInt(4294967295));
                return o[c + 3] = M, M = M >> 8, o[c + 2] = M, M = M >> 8, o[c + 1] = M, M = M >> 8, o[c] = M, c + 8;
            }
            p.prototype.writeBigUInt64LE = Ql(function(i, c = 0) {
                return Y(this, i, c, BigInt(0), BigInt("0xffffffffffffffff"));
            }), p.prototype.writeBigUInt64BE = Ql(function(i, c = 0) {
                return Q(this, i, c, BigInt(0), BigInt("0xffffffffffffffff"));
            }), p.prototype.writeIntLE = function(i, c, s, v) {
                if (i = +i, c = c >>> 0, !v) {
                    const bt = Math.pow(2, 8 * s - 1);
                    U(this, i, c, s, bt - 1, -bt);
                }
                let T = 0, M = 1, I = 0;
                for(this[c] = i & 255; ++T < s && (M *= 256);)i < 0 && I === 0 && this[c + T - 1] !== 0 && (I = 1), this[c + T] = (i / M >> 0) - I & 255;
                return c + s;
            }, p.prototype.writeIntBE = function(i, c, s, v) {
                if (i = +i, c = c >>> 0, !v) {
                    const bt = Math.pow(2, 8 * s - 1);
                    U(this, i, c, s, bt - 1, -bt);
                }
                let T = s - 1, M = 1, I = 0;
                for(this[c + T] = i & 255; --T >= 0 && (M *= 256);)i < 0 && I === 0 && this[c + T + 1] !== 0 && (I = 1), this[c + T] = (i / M >> 0) - I & 255;
                return c + s;
            }, p.prototype.writeInt8 = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 1, 127, -128), i < 0 && (i = 255 + i + 1), this[c] = i & 255, c + 1;
            }, p.prototype.writeInt16LE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 2, 32767, -32768), this[c] = i & 255, this[c + 1] = i >>> 8, c + 2;
            }, p.prototype.writeInt16BE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 2, 32767, -32768), this[c] = i >>> 8, this[c + 1] = i & 255, c + 2;
            }, p.prototype.writeInt32LE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 4, 2147483647, -2147483648), this[c] = i & 255, this[c + 1] = i >>> 8, this[c + 2] = i >>> 16, this[c + 3] = i >>> 24, c + 4;
            }, p.prototype.writeInt32BE = function(i, c, s) {
                return i = +i, c = c >>> 0, s || U(this, i, c, 4, 2147483647, -2147483648), i < 0 && (i = 4294967295 + i + 1), this[c] = i >>> 24, this[c + 1] = i >>> 16, this[c + 2] = i >>> 8, this[c + 3] = i & 255, c + 4;
            }, p.prototype.writeBigInt64LE = Ql(function(i, c = 0) {
                return Y(this, i, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }), p.prototype.writeBigInt64BE = Ql(function(i, c = 0) {
                return Q(this, i, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            });
            function tt(o, i, c, s, v, T) {
                if (c + s > o.length) throw new RangeError("Index out of range");
                if (c < 0) throw new RangeError("Index out of range");
            }
            function at(o, i, c, s, v) {
                return i = +i, c = c >>> 0, v || tt(o, i, c, 4), L.write(o, i, c, s, 23, 4), c + 4;
            }
            p.prototype.writeFloatLE = function(i, c, s) {
                return at(this, i, c, !0, s);
            }, p.prototype.writeFloatBE = function(i, c, s) {
                return at(this, i, c, !1, s);
            };
            function gt(o, i, c, s, v) {
                return i = +i, c = c >>> 0, v || tt(o, i, c, 8), L.write(o, i, c, s, 52, 8), c + 8;
            }
            p.prototype.writeDoubleLE = function(i, c, s) {
                return gt(this, i, c, !0, s);
            }, p.prototype.writeDoubleBE = function(i, c, s) {
                return gt(this, i, c, !1, s);
            }, p.prototype.copy = function(i, c, s, v) {
                if (!p.isBuffer(i)) throw new TypeError("argument should be a Buffer");
                if (s || (s = 0), !v && v !== 0 && (v = this.length), c >= i.length && (c = i.length), c || (c = 0), v > 0 && v < s && (v = s), v === s || i.length === 0 || this.length === 0) return 0;
                if (c < 0) throw new RangeError("targetStart out of bounds");
                if (s < 0 || s >= this.length) throw new RangeError("Index out of range");
                if (v < 0) throw new RangeError("sourceEnd out of bounds");
                v > this.length && (v = this.length), i.length - c < v - s && (v = i.length - c + s);
                const T = v - s;
                return this === i && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, s, v) : Uint8Array.prototype.set.call(i, this.subarray(s, v), c), T;
            }, p.prototype.fill = function(i, c, s, v) {
                if (typeof i == "string") {
                    if (typeof c == "string" ? (v = c, c = 0, s = this.length) : typeof s == "string" && (v = s, s = this.length), v !== void 0 && typeof v != "string") throw new TypeError("encoding must be a string");
                    if (typeof v == "string" && !p.isEncoding(v)) throw new TypeError("Unknown encoding: " + v);
                    if (i.length === 1) {
                        const M = i.charCodeAt(0);
                        (v === "utf8" && M < 128 || v === "latin1") && (i = M);
                    }
                } else typeof i == "number" ? i = i & 255 : typeof i == "boolean" && (i = Number(i));
                if (c < 0 || this.length < c || this.length < s) throw new RangeError("Out of range index");
                if (s <= c) return this;
                c = c >>> 0, s = s === void 0 ? this.length : s >>> 0, i || (i = 0);
                let T;
                if (typeof i == "number") for(T = c; T < s; ++T)this[T] = i;
                else {
                    const M = p.isBuffer(i) ? i : p.from(i, v), I = M.length;
                    if (I === 0) throw new TypeError('The value "' + i + '" is invalid for argument "value"');
                    for(T = 0; T < s - c; ++T)this[T + c] = M[T % I];
                }
                return this;
            };
            const Yt = {};
            function Nt(o, i, c) {
                Yt[o] = class extends c {
                    constructor(){
                        super(), Object.defineProperty(this, "message", {
                            value: i.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
                    }
                    get code() {
                        return o;
                    }
                    set code(v) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: v,
                            writable: !0
                        });
                    }
                    toString() {
                        return `${this.name} [${o}]: ${this.message}`;
                    }
                };
            }
            Nt("ERR_BUFFER_OUT_OF_BOUNDS", function(o) {
                return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
            }, RangeError), Nt("ERR_INVALID_ARG_TYPE", function(o, i) {
                return `The "${o}" argument must be of type number. Received type ${typeof i}`;
            }, TypeError), Nt("ERR_OUT_OF_RANGE", function(o, i, c) {
                let s = `The value of "${o}" is out of range.`, v = c;
                return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? v = ye(String(c)) : typeof c == "bigint" && (v = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (v = ye(v)), v += "n"), s += ` It must be ${i}. Received ${v}`, s;
            }, RangeError);
            function ye(o) {
                let i = "", c = o.length;
                const s = o[0] === "-" ? 1 : 0;
                for(; c >= s + 4; c -= 3)i = `_${o.slice(c - 3, c)}${i}`;
                return `${o.slice(0, c)}${i}`;
            }
            function un(o, i, c) {
                Fl(i, "offset"), (o[i] === void 0 || o[i + c] === void 0) && pl(i, o.length - (c + 1));
            }
            function an(o, i, c, s, v, T) {
                if (o > c || o < i) {
                    const M = typeof i == "bigint" ? "n" : "";
                    let I;
                    throw i === 0 || i === BigInt(0) ? I = `>= 0${M} and < 2${M} ** ${(T + 1) * 8}${M}` : I = `>= -(2${M} ** ${(T + 1) * 8 - 1}${M}) and < 2 ** ${(T + 1) * 8 - 1}${M}`, new Yt.ERR_OUT_OF_RANGE("value", I, o);
                }
                un(s, v, T);
            }
            function Fl(o, i) {
                if (typeof o != "number") throw new Yt.ERR_INVALID_ARG_TYPE(i, "number", o);
            }
            function pl(o, i, c) {
                throw Math.floor(o) !== o ? (Fl(o, c), new Yt.ERR_OUT_OF_RANGE("offset", "an integer", o)) : i < 0 ? new Yt.ERR_BUFFER_OUT_OF_BOUNDS : new Yt.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${i}`, o);
            }
            const Kn = /[^+/0-9A-Za-z-_]/g;
            function Jn(o) {
                if (o = o.split("=")[0], o = o.trim().replace(Kn, ""), o.length < 2) return "";
                for(; o.length % 4 !== 0;)o = o + "=";
                return o;
            }
            function Fn(o, i) {
                i = i || 1 / 0;
                let c;
                const s = o.length;
                let v = null;
                const T = [];
                for(let M = 0; M < s; ++M){
                    if (c = o.charCodeAt(M), c > 55295 && c < 57344) {
                        if (!v) {
                            if (c > 56319) {
                                (i -= 3) > -1 && T.push(239, 191, 189);
                                continue;
                            } else if (M + 1 === s) {
                                (i -= 3) > -1 && T.push(239, 191, 189);
                                continue;
                            }
                            v = c;
                            continue;
                        }
                        if (c < 56320) {
                            (i -= 3) > -1 && T.push(239, 191, 189), v = c;
                            continue;
                        }
                        c = (v - 55296 << 10 | c - 56320) + 65536;
                    } else v && (i -= 3) > -1 && T.push(239, 191, 189);
                    if (v = null, c < 128) {
                        if ((i -= 1) < 0) break;
                        T.push(c);
                    } else if (c < 2048) {
                        if ((i -= 2) < 0) break;
                        T.push(c >> 6 | 192, c & 63 | 128);
                    } else if (c < 65536) {
                        if ((i -= 3) < 0) break;
                        T.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
                    } else if (c < 1114112) {
                        if ((i -= 4) < 0) break;
                        T.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
                    } else throw new Error("Invalid code point");
                }
                return T;
            }
            function Ku(o) {
                const i = [];
                for(let c = 0; c < o.length; ++c)i.push(o.charCodeAt(c) & 255);
                return i;
            }
            function Wn(o, i) {
                let c, s, v;
                const T = [];
                for(let M = 0; M < o.length && !((i -= 2) < 0); ++M)c = o.charCodeAt(M), s = c >> 8, v = c % 256, T.push(v), T.push(s);
                return T;
            }
            function cn(o) {
                return O.toByteArray(Jn(o));
            }
            function me(o, i, c, s) {
                let v;
                for(v = 0; v < s && !(v + c >= i.length || v >= o.length); ++v)i[v + c] = o[v];
                return v;
            }
            function xl(o, i) {
                return o instanceof i || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === i.name;
            }
            function $n(o) {
                return o !== o;
            }
            const cl = (function() {
                const o = "0123456789abcdef", i = new Array(256);
                for(let c = 0; c < 16; ++c){
                    const s = c * 16;
                    for(let v = 0; v < 16; ++v)i[s + v] = o[c] + o[v];
                }
                return i;
            })();
            function Ql(o) {
                return typeof BigInt > "u" ? Ju : o;
            }
            function Ju() {
                throw new Error("BigInt not supported");
            }
        })(_f)), _f;
    }
    let xf, lt;
    hy = sy();
    xf = {
        exports: {}
    };
    lt = {};
    var H0;
    function dy() {
        if (H0) return lt;
        H0 = 1;
        var z = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), F = Symbol.iterator;
        function X(d) {
            return d === null || typeof d != "object" ? null : (d = F && d[F] || d["@@iterator"], typeof d == "function" ? d : null);
        }
        var J = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, k = Object.assign, Ut = {};
        function Et(d, U, Y) {
            this.props = d, this.context = U, this.refs = Ut, this.updater = Y || J;
        }
        Et.prototype.isReactComponent = {}, Et.prototype.setState = function(d, U) {
            if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, d, U, "setState");
        }, Et.prototype.forceUpdate = function(d) {
            this.updater.enqueueForceUpdate(this, d, "forceUpdate");
        };
        function Tt() {}
        Tt.prototype = Et.prototype;
        function dt(d, U, Y) {
            this.props = d, this.context = U, this.refs = Ut, this.updater = Y || J;
        }
        var wt = dt.prototype = new Tt;
        wt.constructor = dt, k(wt, Et.prototype), wt.isPureReactComponent = !0;
        var mt = Array.isArray;
        function Ft() {}
        var nt = {
            H: null,
            A: null,
            T: null,
            S: null
        }, Wt = Object.prototype.hasOwnProperty;
        function rl(d, U, Y) {
            var Q = Y.ref;
            return {
                $$typeof: z,
                type: d,
                key: U,
                ref: Q !== void 0 ? Q : null,
                props: Y
            };
        }
        function Xl(d, U) {
            return rl(d.type, U, d.props);
        }
        function ol(d) {
            return typeof d == "object" && d !== null && d.$$typeof === z;
        }
        function kt(d) {
            var U = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + d.replace(/[=:]/g, function(Y) {
                return U[Y];
            });
        }
        var ql = /\/+/g;
        function al(d, U) {
            return typeof d == "object" && d !== null && d.key != null ? kt("" + d.key) : U.toString(36);
        }
        function it(d) {
            switch(d.status){
                case "fulfilled":
                    return d.value;
                case "rejected":
                    throw d.reason;
                default:
                    switch(typeof d.status == "string" ? d.then(Ft, Ft) : (d.status = "pending", d.then(function(U) {
                        d.status === "pending" && (d.status = "fulfilled", d.value = U);
                    }, function(U) {
                        d.status === "pending" && (d.status = "rejected", d.reason = U);
                    })), d.status){
                        case "fulfilled":
                            return d.value;
                        case "rejected":
                            throw d.reason;
                    }
            }
            throw d;
        }
        function _(d, U, Y, Q, tt) {
            var at = typeof d;
            (at === "undefined" || at === "boolean") && (d = null);
            var gt = !1;
            if (d === null) gt = !0;
            else switch(at){
                case "bigint":
                case "string":
                case "number":
                    gt = !0;
                    break;
                case "object":
                    switch(d.$$typeof){
                        case z:
                        case O:
                            gt = !0;
                            break;
                        case R:
                            return gt = d._init, _(gt(d._payload), U, Y, Q, tt);
                    }
            }
            if (gt) return tt = tt(d), gt = Q === "" ? "." + al(d, 0) : Q, mt(tt) ? (Y = "", gt != null && (Y = gt.replace(ql, "$&/") + "/"), _(tt, U, Y, "", function(ye) {
                return ye;
            })) : tt != null && (ol(tt) && (tt = Xl(tt, Y + (tt.key == null || d && d.key === tt.key ? "" : ("" + tt.key).replace(ql, "$&/") + "/") + gt)), U.push(tt)), 1;
            gt = 0;
            var Yt = Q === "" ? "." : Q + ":";
            if (mt(d)) for(var Nt = 0; Nt < d.length; Nt++)Q = d[Nt], at = Yt + al(Q, Nt), gt += _(Q, U, Y, at, tt);
            else if (Nt = X(d), typeof Nt == "function") for(d = Nt.call(d), Nt = 0; !(Q = d.next()).done;)Q = Q.value, at = Yt + al(Q, Nt++), gt += _(Q, U, Y, at, tt);
            else if (at === "object") {
                if (typeof d.then == "function") return _(it(d), U, Y, Q, tt);
                throw U = String(d), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
            }
            return gt;
        }
        function H(d, U, Y) {
            if (d == null) return d;
            var Q = [], tt = 0;
            return _(d, Q, "", "", function(at) {
                return U.call(Y, at, tt++);
            }), Q;
        }
        function W(d) {
            if (d._status === -1) {
                var U = d._result;
                U = U(), U.then(function(Y) {
                    (d._status === 0 || d._status === -1) && (d._status = 1, d._result = Y);
                }, function(Y) {
                    (d._status === 0 || d._status === -1) && (d._status = 2, d._result = Y);
                }), d._status === -1 && (d._status = 0, d._result = U);
            }
            if (d._status === 1) return d._result.default;
            throw d._result;
        }
        var yt = typeof reportError == "function" ? reportError : function(d) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var U = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                    error: d
                });
                if (!window.dispatchEvent(U)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", d);
                return;
            }
            console.error(d);
        }, vt = {
            map: H,
            forEach: function(d, U, Y) {
                H(d, function() {
                    U.apply(this, arguments);
                }, Y);
            },
            count: function(d) {
                var U = 0;
                return H(d, function() {
                    U++;
                }), U;
            },
            toArray: function(d) {
                return H(d, function(U) {
                    return U;
                }) || [];
            },
            only: function(d) {
                if (!ol(d)) throw Error("React.Children.only expected to receive a single React element child.");
                return d;
            }
        };
        return lt.Activity = C, lt.Children = vt, lt.Component = Et, lt.Fragment = L, lt.Profiler = w, lt.PureComponent = dt, lt.StrictMode = m, lt.Suspense = q, lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = nt, lt.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(d) {
                return nt.H.useMemoCache(d);
            }
        }, lt.cache = function(d) {
            return function() {
                return d.apply(null, arguments);
            };
        }, lt.cacheSignal = function() {
            return null;
        }, lt.cloneElement = function(d, U, Y) {
            if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
            var Q = k({}, d.props), tt = d.key;
            if (U != null) for(at in U.key !== void 0 && (tt = "" + U.key), U)!Wt.call(U, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && U.ref === void 0 || (Q[at] = U[at]);
            var at = arguments.length - 2;
            if (at === 1) Q.children = Y;
            else if (1 < at) {
                for(var gt = Array(at), Yt = 0; Yt < at; Yt++)gt[Yt] = arguments[Yt + 2];
                Q.children = gt;
            }
            return rl(d.type, tt, Q);
        }, lt.createContext = function(d) {
            return d = {
                $$typeof: G,
                _currentValue: d,
                _currentValue2: d,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, d.Provider = d, d.Consumer = {
                $$typeof: V,
                _context: d
            }, d;
        }, lt.createElement = function(d, U, Y) {
            var Q, tt = {}, at = null;
            if (U != null) for(Q in U.key !== void 0 && (at = "" + U.key), U)Wt.call(U, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (tt[Q] = U[Q]);
            var gt = arguments.length - 2;
            if (gt === 1) tt.children = Y;
            else if (1 < gt) {
                for(var Yt = Array(gt), Nt = 0; Nt < gt; Nt++)Yt[Nt] = arguments[Nt + 2];
                tt.children = Yt;
            }
            if (d && d.defaultProps) for(Q in gt = d.defaultProps, gt)tt[Q] === void 0 && (tt[Q] = gt[Q]);
            return rl(d, at, tt);
        }, lt.createRef = function() {
            return {
                current: null
            };
        }, lt.forwardRef = function(d) {
            return {
                $$typeof: p,
                render: d
            };
        }, lt.isValidElement = ol, lt.lazy = function(d) {
            return {
                $$typeof: R,
                _payload: {
                    _status: -1,
                    _result: d
                },
                _init: W
            };
        }, lt.memo = function(d, U) {
            return {
                $$typeof: A,
                type: d,
                compare: U === void 0 ? null : U
            };
        }, lt.startTransition = function(d) {
            var U = nt.T, Y = {};
            nt.T = Y;
            try {
                var Q = d(), tt = nt.S;
                tt !== null && tt(Y, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(Ft, yt);
            } catch (at) {
                yt(at);
            } finally{
                U !== null && Y.types !== null && (U.types = Y.types), nt.T = U;
            }
        }, lt.unstable_useCacheRefresh = function() {
            return nt.H.useCacheRefresh();
        }, lt.use = function(d) {
            return nt.H.use(d);
        }, lt.useActionState = function(d, U, Y) {
            return nt.H.useActionState(d, U, Y);
        }, lt.useCallback = function(d, U) {
            return nt.H.useCallback(d, U);
        }, lt.useContext = function(d) {
            return nt.H.useContext(d);
        }, lt.useDebugValue = function() {}, lt.useDeferredValue = function(d, U) {
            return nt.H.useDeferredValue(d, U);
        }, lt.useEffect = function(d, U) {
            return nt.H.useEffect(d, U);
        }, lt.useEffectEvent = function(d) {
            return nt.H.useEffectEvent(d);
        }, lt.useId = function() {
            return nt.H.useId();
        }, lt.useImperativeHandle = function(d, U, Y) {
            return nt.H.useImperativeHandle(d, U, Y);
        }, lt.useInsertionEffect = function(d, U) {
            return nt.H.useInsertionEffect(d, U);
        }, lt.useLayoutEffect = function(d, U) {
            return nt.H.useLayoutEffect(d, U);
        }, lt.useMemo = function(d, U) {
            return nt.H.useMemo(d, U);
        }, lt.useOptimistic = function(d, U) {
            return nt.H.useOptimistic(d, U);
        }, lt.useReducer = function(d, U, Y) {
            return nt.H.useReducer(d, U, Y);
        }, lt.useRef = function(d) {
            return nt.H.useRef(d);
        }, lt.useState = function(d) {
            return nt.H.useState(d);
        }, lt.useSyncExternalStore = function(d, U, Y) {
            return nt.H.useSyncExternalStore(d, U, Y);
        }, lt.useTransition = function() {
            return nt.H.useTransition();
        }, lt.version = "19.2.8", lt;
    }
    var j0;
    function Nf() {
        return j0 || (j0 = 1, xf.exports = dy()), xf.exports;
    }
    var Ll = Nf(), Uf = {
        exports: {}
    }, Zu = {}, Bf = {
        exports: {}
    }, Of = {};
    var q0;
    function yy() {
        return q0 || (q0 = 1, (function(z) {
            function O(_, H) {
                var W = _.length;
                _.push(H);
                t: for(; 0 < W;){
                    var yt = W - 1 >>> 1, vt = _[yt];
                    if (0 < w(vt, H)) _[yt] = H, _[W] = vt, W = yt;
                    else break t;
                }
            }
            function L(_) {
                return _.length === 0 ? null : _[0];
            }
            function m(_) {
                if (_.length === 0) return null;
                var H = _[0], W = _.pop();
                if (W !== H) {
                    _[0] = W;
                    t: for(var yt = 0, vt = _.length, d = vt >>> 1; yt < d;){
                        var U = 2 * (yt + 1) - 1, Y = _[U], Q = U + 1, tt = _[Q];
                        if (0 > w(Y, W)) Q < vt && 0 > w(tt, Y) ? (_[yt] = tt, _[Q] = W, yt = Q) : (_[yt] = Y, _[U] = W, yt = U);
                        else if (Q < vt && 0 > w(tt, W)) _[yt] = tt, _[Q] = W, yt = Q;
                        else break t;
                    }
                }
                return H;
            }
            function w(_, H) {
                var W = _.sortIndex - H.sortIndex;
                return W !== 0 ? W : _.id - H.id;
            }
            if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var V = performance;
                z.unstable_now = function() {
                    return V.now();
                };
            } else {
                var G = Date, p = G.now();
                z.unstable_now = function() {
                    return G.now() - p;
                };
            }
            var q = [], A = [], R = 1, C = null, F = 3, X = !1, J = !1, k = !1, Ut = !1, Et = typeof setTimeout == "function" ? setTimeout : null, Tt = typeof clearTimeout == "function" ? clearTimeout : null, dt = typeof setImmediate < "u" ? setImmediate : null;
            function wt(_) {
                for(var H = L(A); H !== null;){
                    if (H.callback === null) m(A);
                    else if (H.startTime <= _) m(A), H.sortIndex = H.expirationTime, O(q, H);
                    else break;
                    H = L(A);
                }
            }
            function mt(_) {
                if (k = !1, wt(_), !J) if (L(q) !== null) J = !0, Ft || (Ft = !0, kt());
                else {
                    var H = L(A);
                    H !== null && it(mt, H.startTime - _);
                }
            }
            var Ft = !1, nt = -1, Wt = 5, rl = -1;
            function Xl() {
                return Ut ? !0 : !(z.unstable_now() - rl < Wt);
            }
            function ol() {
                if (Ut = !1, Ft) {
                    var _ = z.unstable_now();
                    rl = _;
                    var H = !0;
                    try {
                        t: {
                            J = !1, k && (k = !1, Tt(nt), nt = -1), X = !0;
                            var W = F;
                            try {
                                l: {
                                    for(wt(_), C = L(q); C !== null && !(C.expirationTime > _ && Xl());){
                                        var yt = C.callback;
                                        if (typeof yt == "function") {
                                            C.callback = null, F = C.priorityLevel;
                                            var vt = yt(C.expirationTime <= _);
                                            if (_ = z.unstable_now(), typeof vt == "function") {
                                                C.callback = vt, wt(_), H = !0;
                                                break l;
                                            }
                                            C === L(q) && m(q), wt(_);
                                        } else m(q);
                                        C = L(q);
                                    }
                                    if (C !== null) H = !0;
                                    else {
                                        var d = L(A);
                                        d !== null && it(mt, d.startTime - _), H = !1;
                                    }
                                }
                                break t;
                            } finally{
                                C = null, F = W, X = !1;
                            }
                            H = void 0;
                        }
                    } finally{
                        H ? kt() : Ft = !1;
                    }
                }
            }
            var kt;
            if (typeof dt == "function") kt = function() {
                dt(ol);
            };
            else if (typeof MessageChannel < "u") {
                var ql = new MessageChannel, al = ql.port2;
                ql.port1.onmessage = ol, kt = function() {
                    al.postMessage(null);
                };
            } else kt = function() {
                Et(ol, 0);
            };
            function it(_, H) {
                nt = Et(function() {
                    _(z.unstable_now());
                }, H);
            }
            z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(_) {
                _.callback = null;
            }, z.unstable_forceFrameRate = function(_) {
                0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Wt = 0 < _ ? Math.floor(1e3 / _) : 5;
            }, z.unstable_getCurrentPriorityLevel = function() {
                return F;
            }, z.unstable_next = function(_) {
                switch(F){
                    case 1:
                    case 2:
                    case 3:
                        var H = 3;
                        break;
                    default:
                        H = F;
                }
                var W = F;
                F = H;
                try {
                    return _();
                } finally{
                    F = W;
                }
            }, z.unstable_requestPaint = function() {
                Ut = !0;
            }, z.unstable_runWithPriority = function(_, H) {
                switch(_){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        _ = 3;
                }
                var W = F;
                F = _;
                try {
                    return H();
                } finally{
                    F = W;
                }
            }, z.unstable_scheduleCallback = function(_, H, W) {
                var yt = z.unstable_now();
                switch(typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? yt + W : yt) : W = yt, _){
                    case 1:
                        var vt = -1;
                        break;
                    case 2:
                        vt = 250;
                        break;
                    case 5:
                        vt = 1073741823;
                        break;
                    case 4:
                        vt = 1e4;
                        break;
                    default:
                        vt = 5e3;
                }
                return vt = W + vt, _ = {
                    id: R++,
                    callback: H,
                    priorityLevel: _,
                    startTime: W,
                    expirationTime: vt,
                    sortIndex: -1
                }, W > yt ? (_.sortIndex = W, O(A, _), L(q) === null && _ === L(A) && (k ? (Tt(nt), nt = -1) : k = !0, it(mt, W - yt))) : (_.sortIndex = vt, O(q, _), J || X || (J = !0, Ft || (Ft = !0, kt()))), _;
            }, z.unstable_shouldYield = Xl, z.unstable_wrapCallback = function(_) {
                var H = F;
                return function() {
                    var W = F;
                    F = H;
                    try {
                        return _.apply(this, arguments);
                    } finally{
                        F = W;
                    }
                };
            };
        })(Of)), Of;
    }
    var w0;
    function my() {
        return w0 || (w0 = 1, Bf.exports = yy()), Bf.exports;
    }
    var Mf = {
        exports: {}
    }, il = {};
    var Y0;
    function vy() {
        if (Y0) return il;
        Y0 = 1;
        var z = Nf();
        function O(q) {
            var A = "https://react.dev/errors/" + q;
            if (1 < arguments.length) {
                A += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var R = 2; R < arguments.length; R++)A += "&args[]=" + encodeURIComponent(arguments[R]);
            }
            return "Minified React error #" + q + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function L() {}
        var m = {
            d: {
                f: L,
                r: function() {
                    throw Error(O(522));
                },
                D: L,
                C: L,
                L,
                m: L,
                X: L,
                S: L,
                M: L
            },
            p: 0,
            findDOMNode: null
        }, w = Symbol.for("react.portal");
        function V(q, A, R) {
            var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: w,
                key: C == null ? null : "" + C,
                children: q,
                containerInfo: A,
                implementation: R
            };
        }
        var G = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function p(q, A) {
            if (q === "font") return "";
            if (typeof A == "string") return A === "use-credentials" ? A : "";
        }
        return il.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, il.createPortal = function(q, A) {
            var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(O(299));
            return V(q, A, null, R);
        }, il.flushSync = function(q) {
            var A = G.T, R = m.p;
            try {
                if (G.T = null, m.p = 2, q) return q();
            } finally{
                G.T = A, m.p = R, m.d.f();
            }
        }, il.preconnect = function(q, A) {
            typeof q == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, m.d.C(q, A));
        }, il.prefetchDNS = function(q) {
            typeof q == "string" && m.d.D(q);
        }, il.preinit = function(q, A) {
            if (typeof q == "string" && A && typeof A.as == "string") {
                var R = A.as, C = p(R, A.crossOrigin), F = typeof A.integrity == "string" ? A.integrity : void 0, X = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
                R === "style" ? m.d.S(q, typeof A.precedence == "string" ? A.precedence : void 0, {
                    crossOrigin: C,
                    integrity: F,
                    fetchPriority: X
                }) : R === "script" && m.d.X(q, {
                    crossOrigin: C,
                    integrity: F,
                    fetchPriority: X,
                    nonce: typeof A.nonce == "string" ? A.nonce : void 0
                });
            }
        }, il.preinitModule = function(q, A) {
            if (typeof q == "string") if (typeof A == "object" && A !== null) {
                if (A.as == null || A.as === "script") {
                    var R = p(A.as, A.crossOrigin);
                    m.d.M(q, {
                        crossOrigin: R,
                        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
                        nonce: typeof A.nonce == "string" ? A.nonce : void 0
                    });
                }
            } else A == null && m.d.M(q);
        }, il.preload = function(q, A) {
            if (typeof q == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
                var R = A.as, C = p(R, A.crossOrigin);
                m.d.L(q, R, {
                    crossOrigin: C,
                    integrity: typeof A.integrity == "string" ? A.integrity : void 0,
                    nonce: typeof A.nonce == "string" ? A.nonce : void 0,
                    type: typeof A.type == "string" ? A.type : void 0,
                    fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
                    referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
                    imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
                    imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
                    media: typeof A.media == "string" ? A.media : void 0
                });
            }
        }, il.preloadModule = function(q, A) {
            if (typeof q == "string") if (A) {
                var R = p(A.as, A.crossOrigin);
                m.d.m(q, {
                    as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
                    crossOrigin: R,
                    integrity: typeof A.integrity == "string" ? A.integrity : void 0
                });
            } else m.d.m(q);
        }, il.requestFormReset = function(q) {
            m.d.r(q);
        }, il.unstable_batchedUpdates = function(q, A) {
            return q(A);
        }, il.useFormState = function(q, A, R) {
            return G.H.useFormState(q, A, R);
        }, il.useFormStatus = function() {
            return G.H.useHostTransitionStatus();
        }, il.version = "19.2.8", il;
    }
    var G0;
    function gy() {
        if (G0) return Mf.exports;
        G0 = 1;
        function z() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
            } catch (O) {
                console.error(O);
            }
        }
        return z(), Mf.exports = vy(), Mf.exports;
    }
    var L0;
    function py() {
        if (L0) return Zu;
        L0 = 1;
        var z = my(), O = Nf(), L = gy();
        function m(t) {
            var l = "https://react.dev/errors/" + t;
            if (1 < arguments.length) {
                l += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var e = 2; e < arguments.length; e++)l += "&args[]=" + encodeURIComponent(arguments[e]);
            }
            return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function w(t) {
            return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
        }
        function V(t) {
            var l = t, e = t;
            if (t.alternate) for(; l.return;)l = l.return;
            else {
                t = l;
                do l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
                while (t);
            }
            return l.tag === 3 ? e : null;
        }
        function G(t) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
            }
            return null;
        }
        function p(t) {
            if (t.tag === 31) {
                var l = t.memoizedState;
                if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
            }
            return null;
        }
        function q(t) {
            if (V(t) !== t) throw Error(m(188));
        }
        function A(t) {
            var l = t.alternate;
            if (!l) {
                if (l = V(t), l === null) throw Error(m(188));
                return l !== t ? null : t;
            }
            for(var e = t, n = l;;){
                var u = e.return;
                if (u === null) break;
                var a = u.alternate;
                if (a === null) {
                    if (n = u.return, n !== null) {
                        e = n;
                        continue;
                    }
                    break;
                }
                if (u.child === a.child) {
                    for(a = u.child; a;){
                        if (a === e) return q(u), t;
                        if (a === n) return q(u), l;
                        a = a.sibling;
                    }
                    throw Error(m(188));
                }
                if (e.return !== n.return) e = u, n = a;
                else {
                    for(var f = !1, r = u.child; r;){
                        if (r === e) {
                            f = !0, e = u, n = a;
                            break;
                        }
                        if (r === n) {
                            f = !0, n = u, e = a;
                            break;
                        }
                        r = r.sibling;
                    }
                    if (!f) {
                        for(r = a.child; r;){
                            if (r === e) {
                                f = !0, e = a, n = u;
                                break;
                            }
                            if (r === n) {
                                f = !0, n = a, e = u;
                                break;
                            }
                            r = r.sibling;
                        }
                        if (!f) throw Error(m(189));
                    }
                }
                if (e.alternate !== n) throw Error(m(190));
            }
            if (e.tag !== 3) throw Error(m(188));
            return e.stateNode.current === e ? t : l;
        }
        function R(t) {
            var l = t.tag;
            if (l === 5 || l === 26 || l === 27 || l === 6) return t;
            for(t = t.child; t !== null;){
                if (l = R(t), l !== null) return l;
                t = t.sibling;
            }
            return null;
        }
        var C = Object.assign, F = Symbol.for("react.element"), X = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), Et = Symbol.for("react.profiler"), Tt = Symbol.for("react.consumer"), dt = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), Ft = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), rl = Symbol.for("react.activity"), Xl = Symbol.for("react.memo_cache_sentinel"), ol = Symbol.iterator;
        function kt(t) {
            return t === null || typeof t != "object" ? null : (t = ol && t[ol] || t["@@iterator"], typeof t == "function" ? t : null);
        }
        var ql = Symbol.for("react.client.reference");
        function al(t) {
            if (t == null) return null;
            if (typeof t == "function") return t.$$typeof === ql ? null : t.displayName || t.name || null;
            if (typeof t == "string") return t;
            switch(t){
                case k:
                    return "Fragment";
                case Et:
                    return "Profiler";
                case Ut:
                    return "StrictMode";
                case mt:
                    return "Suspense";
                case Ft:
                    return "SuspenseList";
                case rl:
                    return "Activity";
            }
            if (typeof t == "object") switch(t.$$typeof){
                case J:
                    return "Portal";
                case dt:
                    return t.displayName || "Context";
                case Tt:
                    return (t._context.displayName || "Context") + ".Consumer";
                case wt:
                    var l = t.render;
                    return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                case nt:
                    return l = t.displayName || null, l !== null ? l : al(t.type) || "Memo";
                case Wt:
                    l = t._payload, t = t._init;
                    try {
                        return al(t(l));
                    } catch  {}
            }
            return null;
        }
        var it = Array.isArray, _ = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, yt = [], vt = -1;
        function d(t) {
            return {
                current: t
            };
        }
        function U(t) {
            0 > vt || (t.current = yt[vt], yt[vt] = null, vt--);
        }
        function Y(t, l) {
            vt++, yt[vt] = t.current, t.current = l;
        }
        var Q = d(null), tt = d(null), at = d(null), gt = d(null);
        function Yt(t, l) {
            switch(Y(at, l), Y(tt, t), Y(Q, null), l.nodeType){
                case 9:
                case 11:
                    t = (t = l.documentElement) && (t = t.namespaceURI) ? Ps(t) : 0;
                    break;
                default:
                    if (t = l.tagName, l = l.namespaceURI) l = Ps(l), t = t0(l, t);
                    else switch(t){
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0;
                    }
            }
            U(Q), Y(Q, t);
        }
        function Nt() {
            U(Q), U(tt), U(at);
        }
        function ye(t) {
            t.memoizedState !== null && Y(gt, t);
            var l = Q.current, e = t0(l, t.type);
            l !== e && (Y(tt, t), Y(Q, e));
        }
        function un(t) {
            tt.current === t && (U(Q), U(tt)), gt.current === t && (U(gt), wu._currentValue = W);
        }
        var an, Fl;
        function pl(t) {
            if (an === void 0) try {
                throw Error();
            } catch (e) {
                var l = e.stack.trim().match(/\n( *(at )?)/);
                an = l && l[1] || "", Fl = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + an + t + Fl;
        }
        var Kn = !1;
        function Jn(t, l) {
            if (!t || Kn) return "";
            Kn = !0;
            var e = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var n = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (l) {
                                var N = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(N.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(N, []);
                                    } catch (x) {
                                        var b = x;
                                    }
                                    Reflect.construct(t, [], N);
                                } else {
                                    try {
                                        N.call();
                                    } catch (x) {
                                        b = x;
                                    }
                                    t.call(N.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (x) {
                                    b = x;
                                }
                                (N = t()) && typeof N.catch == "function" && N.catch(function() {});
                            }
                        } catch (x) {
                            if (x && b && typeof x.stack == "string") return [
                                x.stack,
                                b.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var u = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
                u && u.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var a = n.DetermineComponentFrameRoot(), f = a[0], r = a[1];
                if (f && r) {
                    var h = f.split(`
`), E = r.split(`
`);
                    for(u = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; u < E.length && !E[u].includes("DetermineComponentFrameRoot");)u++;
                    if (n === h.length || u === E.length) for(n = h.length - 1, u = E.length - 1; 1 <= n && 0 <= u && h[n] !== E[u];)u--;
                    for(; 1 <= n && 0 <= u; n--, u--)if (h[n] !== E[u]) {
                        if (n !== 1 || u !== 1) do if (n--, u--, 0 > u || h[n] !== E[u]) {
                            var B = `
` + h[n].replace(" at new ", " at ");
                            return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                        }
                        while (1 <= n && 0 <= u);
                        break;
                    }
                }
            } finally{
                Kn = !1, Error.prepareStackTrace = e;
            }
            return (e = t ? t.displayName || t.name : "") ? pl(e) : "";
        }
        function Fn(t, l) {
            switch(t.tag){
                case 26:
                case 27:
                case 5:
                    return pl(t.type);
                case 16:
                    return pl("Lazy");
                case 13:
                    return t.child !== l && l !== null ? pl("Suspense Fallback") : pl("Suspense");
                case 19:
                    return pl("SuspenseList");
                case 0:
                case 15:
                    return Jn(t.type, !1);
                case 11:
                    return Jn(t.type.render, !1);
                case 1:
                    return Jn(t.type, !0);
                case 31:
                    return pl("Activity");
                default:
                    return "";
            }
        }
        function Ku(t) {
            try {
                var l = "", e = null;
                do l += Fn(t, e), e = t, t = t.return;
                while (t);
                return l;
            } catch (n) {
                return `
Error generating stack: ` + n.message + `
` + n.stack;
            }
        }
        var Wn = Object.prototype.hasOwnProperty, cn = z.unstable_scheduleCallback, me = z.unstable_cancelCallback, xl = z.unstable_shouldYield, $n = z.unstable_requestPaint, cl = z.unstable_now, Ql = z.unstable_getCurrentPriorityLevel, Ju = z.unstable_ImmediatePriority, o = z.unstable_UserBlockingPriority, i = z.unstable_NormalPriority, c = z.unstable_LowPriority, s = z.unstable_IdlePriority, v = z.log, T = z.unstable_setDisableYieldValue, M = null, I = null;
        function bt(t) {
            if (typeof v == "function" && T(t), I && typeof I.setStrictMode == "function") try {
                I.setStrictMode(M, t);
            } catch  {}
        }
        var ct = Math.clz32 ? Math.clz32 : J0, jt = Math.log, zt = Math.LN2;
        function J0(t) {
            return t >>>= 0, t === 0 ? 32 : 31 - (jt(t) / zt | 0) | 0;
        }
        var Fu = 256, Wu = 262144, $u = 4194304;
        function Ge(t) {
            var l = t & 42;
            if (l !== 0) return l;
            switch(t & -t){
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return t & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return t & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return t;
            }
        }
        function ku(t, l, e) {
            var n = t.pendingLanes;
            if (n === 0) return 0;
            var u = 0, a = t.suspendedLanes, f = t.pingedLanes;
            t = t.warmLanes;
            var r = n & 134217727;
            return r !== 0 ? (n = r & ~a, n !== 0 ? u = Ge(n) : (f &= r, f !== 0 ? u = Ge(f) : e || (e = r & ~t, e !== 0 && (u = Ge(e))))) : (r = n & ~a, r !== 0 ? u = Ge(r) : f !== 0 ? u = Ge(f) : e || (e = n & ~t, e !== 0 && (u = Ge(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & a) === 0 && (a = u & -u, e = l & -l, a >= e || a === 32 && (e & 4194048) !== 0) ? l : u;
        }
        function kn(t, l) {
            return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
        }
        function F0(t, l) {
            switch(t){
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return l + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return l + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function Cf() {
            var t = $u;
            return $u <<= 1, ($u & 62914560) === 0 && ($u = 4194304), t;
        }
        function si(t) {
            for(var l = [], e = 0; 31 > e; e++)l.push(t);
            return l;
        }
        function In(t, l) {
            t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
        }
        function W0(t, l, e, n, u, a) {
            var f = t.pendingLanes;
            t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
            var r = t.entanglements, h = t.expirationTimes, E = t.hiddenUpdates;
            for(e = f & ~e; 0 < e;){
                var B = 31 - ct(e), N = 1 << B;
                r[B] = 0, h[B] = -1;
                var b = E[B];
                if (b !== null) for(E[B] = null, B = 0; B < b.length; B++){
                    var x = b[B];
                    x !== null && (x.lane &= -536870913);
                }
                e &= ~N;
            }
            n !== 0 && Rf(t, n, 0), a !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= a & ~(f & ~l));
        }
        function Rf(t, l, e) {
            t.pendingLanes |= l, t.suspendedLanes &= ~l;
            var n = 31 - ct(l);
            t.entangledLanes |= l, t.entanglements[n] = t.entanglements[n] | 1073741824 | e & 261930;
        }
        function Hf(t, l) {
            var e = t.entangledLanes |= l;
            for(t = t.entanglements; e;){
                var n = 31 - ct(e), u = 1 << n;
                u & l | t[n] & l && (t[n] |= l), e &= ~u;
            }
        }
        function jf(t, l) {
            var e = l & -l;
            return e = (e & 42) !== 0 ? 1 : hi(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
        }
        function hi(t) {
            switch(t){
                case 2:
                    t = 1;
                    break;
                case 8:
                    t = 4;
                    break;
                case 32:
                    t = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    t = 128;
                    break;
                case 268435456:
                    t = 134217728;
                    break;
                default:
                    t = 0;
            }
            return t;
        }
        function di(t) {
            return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function qf() {
            var t = H.p;
            return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : T0(t.type));
        }
        function wf(t, l) {
            var e = H.p;
            try {
                return H.p = t, l();
            } finally{
                H.p = e;
            }
        }
        var ve = Math.random().toString(36).slice(2), tl = "__reactFiber$" + ve, sl = "__reactProps$" + ve, fn = "__reactContainer$" + ve, yi = "__reactEvents$" + ve, $0 = "__reactListeners$" + ve, k0 = "__reactHandles$" + ve, Yf = "__reactResources$" + ve, Pn = "__reactMarker$" + ve;
        function mi(t) {
            delete t[tl], delete t[sl], delete t[yi], delete t[$0], delete t[k0];
        }
        function rn(t) {
            var l = t[tl];
            if (l) return l;
            for(var e = t.parentNode; e;){
                if (l = e[fn] || e[tl]) {
                    if (e = l.alternate, l.child !== null || e !== null && e.child !== null) for(t = c0(t); t !== null;){
                        if (e = t[tl]) return e;
                        t = c0(t);
                    }
                    return l;
                }
                t = e, e = t.parentNode;
            }
            return null;
        }
        function on(t) {
            if (t = t[tl] || t[fn]) {
                var l = t.tag;
                if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3) return t;
            }
            return null;
        }
        function tu(t) {
            var l = t.tag;
            if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
            throw Error(m(33));
        }
        function sn(t) {
            var l = t[Yf];
            return l || (l = t[Yf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), l;
        }
        function It(t) {
            t[Pn] = !0;
        }
        var Gf = new Set, Lf = {};
        function Le(t, l) {
            hn(t, l), hn(t + "Capture", l);
        }
        function hn(t, l) {
            for(Lf[t] = l, t = 0; t < l.length; t++)Gf.add(l[t]);
        }
        var I0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Xf = {}, Qf = {};
        function P0(t) {
            return Wn.call(Qf, t) ? !0 : Wn.call(Xf, t) ? !1 : I0.test(t) ? Qf[t] = !0 : (Xf[t] = !0, !1);
        }
        function Iu(t, l, e) {
            if (P0(l)) if (e === null) t.removeAttribute(l);
            else {
                switch(typeof e){
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(l);
                        return;
                    case "boolean":
                        var n = l.toLowerCase().slice(0, 5);
                        if (n !== "data-" && n !== "aria-") {
                            t.removeAttribute(l);
                            return;
                        }
                }
                t.setAttribute(l, "" + e);
            }
        }
        function Pu(t, l, e) {
            if (e === null) t.removeAttribute(l);
            else {
                switch(typeof e){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(l);
                        return;
                }
                t.setAttribute(l, "" + e);
            }
        }
        function Wl(t, l, e, n) {
            if (n === null) t.removeAttribute(e);
            else {
                switch(typeof n){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(e);
                        return;
                }
                t.setAttributeNS(l, e, "" + n);
            }
        }
        function Ul(t) {
            switch(typeof t){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return t;
                case "object":
                    return t;
                default:
                    return "";
            }
        }
        function Zf(t) {
            var l = t.type;
            return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
        }
        function th(t, l, e) {
            var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
            if (!t.hasOwnProperty(l) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
                var u = n.get, a = n.set;
                return Object.defineProperty(t, l, {
                    configurable: !0,
                    get: function() {
                        return u.call(this);
                    },
                    set: function(f) {
                        e = "" + f, a.call(this, f);
                    }
                }), Object.defineProperty(t, l, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return e;
                    },
                    setValue: function(f) {
                        e = "" + f;
                    },
                    stopTracking: function() {
                        t._valueTracker = null, delete t[l];
                    }
                };
            }
        }
        function vi(t) {
            if (!t._valueTracker) {
                var l = Zf(t) ? "checked" : "value";
                t._valueTracker = th(t, l, "" + t[l]);
            }
        }
        function Vf(t) {
            if (!t) return !1;
            var l = t._valueTracker;
            if (!l) return !0;
            var e = l.getValue(), n = "";
            return t && (n = Zf(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== e ? (l.setValue(t), !0) : !1;
        }
        function ta(t) {
            if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
            try {
                return t.activeElement || t.body;
            } catch  {
                return t.body;
            }
        }
        var lh = /[\n"\\]/g;
        function Bl(t) {
            return t.replace(lh, function(l) {
                return "\\" + l.charCodeAt(0).toString(16) + " ";
            });
        }
        function gi(t, l, e, n, u, a, f, r) {
            t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), l != null ? f === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + Ul(l)) : t.value !== "" + Ul(l) && (t.value = "" + Ul(l)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), l != null ? pi(t, f, Ul(l)) : e != null ? pi(t, f, Ul(e)) : n != null && t.removeAttribute("value"), u == null && a != null && (t.defaultChecked = !!a), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + Ul(r) : t.removeAttribute("name");
        }
        function Kf(t, l, e, n, u, a, f, r) {
            if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (t.type = a), l != null || e != null) {
                if (!(a !== "submit" && a !== "reset" || l != null)) {
                    vi(t);
                    return;
                }
                e = e != null ? "" + Ul(e) : "", l = l != null ? "" + Ul(l) : e, r || l === t.value || (t.value = l), t.defaultValue = l;
            }
            n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = r ? t.checked : !!n, t.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), vi(t);
        }
        function pi(t, l, e) {
            l === "number" && ta(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
        }
        function dn(t, l, e, n) {
            if (t = t.options, l) {
                l = {};
                for(var u = 0; u < e.length; u++)l["$" + e[u]] = !0;
                for(e = 0; e < t.length; e++)u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && n && (t[e].defaultSelected = !0);
            } else {
                for(e = "" + Ul(e), l = null, u = 0; u < t.length; u++){
                    if (t[u].value === e) {
                        t[u].selected = !0, n && (t[u].defaultSelected = !0);
                        return;
                    }
                    l !== null || t[u].disabled || (l = t[u]);
                }
                l !== null && (l.selected = !0);
            }
        }
        function Jf(t, l, e) {
            if (l != null && (l = "" + Ul(l), l !== t.value && (t.value = l), e == null)) {
                t.defaultValue !== l && (t.defaultValue = l);
                return;
            }
            t.defaultValue = e != null ? "" + Ul(e) : "";
        }
        function Ff(t, l, e, n) {
            if (l == null) {
                if (n != null) {
                    if (e != null) throw Error(m(92));
                    if (it(n)) {
                        if (1 < n.length) throw Error(m(93));
                        n = n[0];
                    }
                    e = n;
                }
                e == null && (e = ""), l = e;
            }
            e = Ul(l), t.defaultValue = e, n = t.textContent, n === e && n !== "" && n !== null && (t.value = n), vi(t);
        }
        function yn(t, l) {
            if (l) {
                var e = t.firstChild;
                if (e && e === t.lastChild && e.nodeType === 3) {
                    e.nodeValue = l;
                    return;
                }
            }
            t.textContent = l;
        }
        var eh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Wf(t, l, e) {
            var n = l.indexOf("--") === 0;
            e == null || typeof e == "boolean" || e === "" ? n ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : n ? t.setProperty(l, e) : typeof e != "number" || e === 0 || eh.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
        }
        function $f(t, l, e) {
            if (l != null && typeof l != "object") throw Error(m(62));
            if (t = t.style, e != null) {
                for(var n in e)!e.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
                for(var u in l)n = l[u], l.hasOwnProperty(u) && e[u] !== n && Wf(t, u, n);
            } else for(var a in l)l.hasOwnProperty(a) && Wf(t, a, l[a]);
        }
        function Si(t) {
            if (t.indexOf("-") === -1) return !1;
            switch(t){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var nh = new Map([
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ],
            [
                "crossOrigin",
                "crossorigin"
            ],
            [
                "accentHeight",
                "accent-height"
            ],
            [
                "alignmentBaseline",
                "alignment-baseline"
            ],
            [
                "arabicForm",
                "arabic-form"
            ],
            [
                "baselineShift",
                "baseline-shift"
            ],
            [
                "capHeight",
                "cap-height"
            ],
            [
                "clipPath",
                "clip-path"
            ],
            [
                "clipRule",
                "clip-rule"
            ],
            [
                "colorInterpolation",
                "color-interpolation"
            ],
            [
                "colorInterpolationFilters",
                "color-interpolation-filters"
            ],
            [
                "colorProfile",
                "color-profile"
            ],
            [
                "colorRendering",
                "color-rendering"
            ],
            [
                "dominantBaseline",
                "dominant-baseline"
            ],
            [
                "enableBackground",
                "enable-background"
            ],
            [
                "fillOpacity",
                "fill-opacity"
            ],
            [
                "fillRule",
                "fill-rule"
            ],
            [
                "floodColor",
                "flood-color"
            ],
            [
                "floodOpacity",
                "flood-opacity"
            ],
            [
                "fontFamily",
                "font-family"
            ],
            [
                "fontSize",
                "font-size"
            ],
            [
                "fontSizeAdjust",
                "font-size-adjust"
            ],
            [
                "fontStretch",
                "font-stretch"
            ],
            [
                "fontStyle",
                "font-style"
            ],
            [
                "fontVariant",
                "font-variant"
            ],
            [
                "fontWeight",
                "font-weight"
            ],
            [
                "glyphName",
                "glyph-name"
            ],
            [
                "glyphOrientationHorizontal",
                "glyph-orientation-horizontal"
            ],
            [
                "glyphOrientationVertical",
                "glyph-orientation-vertical"
            ],
            [
                "horizAdvX",
                "horiz-adv-x"
            ],
            [
                "horizOriginX",
                "horiz-origin-x"
            ],
            [
                "imageRendering",
                "image-rendering"
            ],
            [
                "letterSpacing",
                "letter-spacing"
            ],
            [
                "lightingColor",
                "lighting-color"
            ],
            [
                "markerEnd",
                "marker-end"
            ],
            [
                "markerMid",
                "marker-mid"
            ],
            [
                "markerStart",
                "marker-start"
            ],
            [
                "overlinePosition",
                "overline-position"
            ],
            [
                "overlineThickness",
                "overline-thickness"
            ],
            [
                "paintOrder",
                "paint-order"
            ],
            [
                "panose-1",
                "panose-1"
            ],
            [
                "pointerEvents",
                "pointer-events"
            ],
            [
                "renderingIntent",
                "rendering-intent"
            ],
            [
                "shapeRendering",
                "shape-rendering"
            ],
            [
                "stopColor",
                "stop-color"
            ],
            [
                "stopOpacity",
                "stop-opacity"
            ],
            [
                "strikethroughPosition",
                "strikethrough-position"
            ],
            [
                "strikethroughThickness",
                "strikethrough-thickness"
            ],
            [
                "strokeDasharray",
                "stroke-dasharray"
            ],
            [
                "strokeDashoffset",
                "stroke-dashoffset"
            ],
            [
                "strokeLinecap",
                "stroke-linecap"
            ],
            [
                "strokeLinejoin",
                "stroke-linejoin"
            ],
            [
                "strokeMiterlimit",
                "stroke-miterlimit"
            ],
            [
                "strokeOpacity",
                "stroke-opacity"
            ],
            [
                "strokeWidth",
                "stroke-width"
            ],
            [
                "textAnchor",
                "text-anchor"
            ],
            [
                "textDecoration",
                "text-decoration"
            ],
            [
                "textRendering",
                "text-rendering"
            ],
            [
                "transformOrigin",
                "transform-origin"
            ],
            [
                "underlinePosition",
                "underline-position"
            ],
            [
                "underlineThickness",
                "underline-thickness"
            ],
            [
                "unicodeBidi",
                "unicode-bidi"
            ],
            [
                "unicodeRange",
                "unicode-range"
            ],
            [
                "unitsPerEm",
                "units-per-em"
            ],
            [
                "vAlphabetic",
                "v-alphabetic"
            ],
            [
                "vHanging",
                "v-hanging"
            ],
            [
                "vIdeographic",
                "v-ideographic"
            ],
            [
                "vMathematical",
                "v-mathematical"
            ],
            [
                "vectorEffect",
                "vector-effect"
            ],
            [
                "vertAdvY",
                "vert-adv-y"
            ],
            [
                "vertOriginX",
                "vert-origin-x"
            ],
            [
                "vertOriginY",
                "vert-origin-y"
            ],
            [
                "wordSpacing",
                "word-spacing"
            ],
            [
                "writingMode",
                "writing-mode"
            ],
            [
                "xmlnsXlink",
                "xmlns:xlink"
            ],
            [
                "xHeight",
                "x-height"
            ]
        ]), uh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function la(t) {
            return uh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
        }
        function $l() {}
        var Ei = null;
        function bi(t) {
            return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
        }
        var mn = null, vn = null;
        function kf(t) {
            var l = on(t);
            if (l && (t = l.stateNode)) {
                var e = t[sl] || null;
                t: switch(t = l.stateNode, l.type){
                    case "input":
                        if (gi(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
                            for(e = t; e.parentNode;)e = e.parentNode;
                            for(e = e.querySelectorAll('input[name="' + Bl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++){
                                var n = e[l];
                                if (n !== t && n.form === t.form) {
                                    var u = n[sl] || null;
                                    if (!u) throw Error(m(90));
                                    gi(n, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                                }
                            }
                            for(l = 0; l < e.length; l++)n = e[l], n.form === t.form && Vf(n);
                        }
                        break t;
                    case "textarea":
                        Jf(t, e.value, e.defaultValue);
                        break t;
                    case "select":
                        l = e.value, l != null && dn(t, !!e.multiple, l, !1);
                }
            }
        }
        var Ai = !1;
        function If(t, l, e) {
            if (Ai) return t(l, e);
            Ai = !0;
            try {
                var n = t(l);
                return n;
            } finally{
                if (Ai = !1, (mn !== null || vn !== null) && (Xa(), mn && (l = mn, t = vn, vn = mn = null, kf(l), t))) for(l = 0; l < t.length; l++)kf(t[l]);
            }
        }
        function lu(t, l) {
            var e = t.stateNode;
            if (e === null) return null;
            var n = e[sl] || null;
            if (n === null) return null;
            e = n[l];
            t: switch(l){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
                    break t;
                default:
                    t = !1;
            }
            if (t) return null;
            if (e && typeof e != "function") throw Error(m(231, l, typeof e));
            return e;
        }
        var kl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ti = !1;
        if (kl) try {
            var eu = {};
            Object.defineProperty(eu, "passive", {
                get: function() {
                    Ti = !0;
                }
            }), window.addEventListener("test", eu, eu), window.removeEventListener("test", eu, eu);
        } catch  {
            Ti = !1;
        }
        var ge = null, zi = null, ea = null;
        function Pf() {
            if (ea) return ea;
            var t, l = zi, e = l.length, n, u = "value" in ge ? ge.value : ge.textContent, a = u.length;
            for(t = 0; t < e && l[t] === u[t]; t++);
            var f = e - t;
            for(n = 1; n <= f && l[e - n] === u[a - n]; n++);
            return ea = u.slice(t, 1 < n ? 1 - n : void 0);
        }
        function na(t) {
            var l = t.keyCode;
            return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
        }
        function ua() {
            return !0;
        }
        function tr() {
            return !1;
        }
        function hl(t) {
            function l(e, n, u, a, f) {
                this._reactName = e, this._targetInst = u, this.type = n, this.nativeEvent = a, this.target = f, this.currentTarget = null;
                for(var r in t)t.hasOwnProperty(r) && (e = t[r], this[r] = e ? e(a) : a[r]);
                return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ua : tr, this.isPropagationStopped = tr, this;
            }
            return C(l.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = ua);
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = ua);
                },
                persist: function() {},
                isPersistent: ua
            }), l;
        }
        var Xe = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, aa = hl(Xe), nu = C({}, Xe, {
            view: 0,
            detail: 0
        }), ah = hl(nu), _i, xi, uu, ia = C({}, nu, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Bi,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== uu && (uu && t.type === "mousemove" ? (_i = t.screenX - uu.screenX, xi = t.screenY - uu.screenY) : xi = _i = 0, uu = t), _i);
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : xi;
            }
        }), lr = hl(ia), ih = C({}, ia, {
            dataTransfer: 0
        }), ch = hl(ih), fh = C({}, nu, {
            relatedTarget: 0
        }), Ui = hl(fh), rh = C({}, Xe, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), oh = hl(rh), sh = C({}, Xe, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData;
            }
        }), hh = hl(sh), dh = C({}, Xe, {
            data: 0
        }), er = hl(dh), yh = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, mh = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, vh = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function gh(t) {
            var l = this.nativeEvent;
            return l.getModifierState ? l.getModifierState(t) : (t = vh[t]) ? !!l[t] : !1;
        }
        function Bi() {
            return gh;
        }
        var ph = C({}, nu, {
            key: function(t) {
                if (t.key) {
                    var l = yh[t.key] || t.key;
                    if (l !== "Unidentified") return l;
                }
                return t.type === "keypress" ? (t = na(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? mh[t.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Bi,
            charCode: function(t) {
                return t.type === "keypress" ? na(t) : 0;
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
            },
            which: function(t) {
                return t.type === "keypress" ? na(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
            }
        }), Sh = hl(ph), Eh = C({}, ia, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), nr = hl(Eh), bh = C({}, nu, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Bi
        }), Ah = hl(bh), Th = C({}, Xe, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), zh = hl(Th), _h = C({}, ia, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), xh = hl(_h), Uh = C({}, Xe, {
            newState: 0,
            oldState: 0
        }), Bh = hl(Uh), Oh = [
            9,
            13,
            27,
            32
        ], Oi = kl && "CompositionEvent" in window, au = null;
        kl && "documentMode" in document && (au = document.documentMode);
        var Mh = kl && "TextEvent" in window && !au, ur = kl && (!Oi || au && 8 < au && 11 >= au), ar = " ", ir = !1;
        function cr(t, l) {
            switch(t){
                case "keyup":
                    return Oh.indexOf(l.keyCode) !== -1;
                case "keydown":
                    return l.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function fr(t) {
            return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
        }
        var gn = !1;
        function Dh(t, l) {
            switch(t){
                case "compositionend":
                    return fr(l);
                case "keypress":
                    return l.which !== 32 ? null : (ir = !0, ar);
                case "textInput":
                    return t = l.data, t === ar && ir ? null : t;
                default:
                    return null;
            }
        }
        function Nh(t, l) {
            if (gn) return t === "compositionend" || !Oi && cr(t, l) ? (t = Pf(), ea = zi = ge = null, gn = !1, t) : null;
            switch(t){
                case "paste":
                    return null;
                case "keypress":
                    if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
                        if (l.char && 1 < l.char.length) return l.char;
                        if (l.which) return String.fromCharCode(l.which);
                    }
                    return null;
                case "compositionend":
                    return ur && l.locale !== "ko" ? null : l.data;
                default:
                    return null;
            }
        }
        var Ch = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function rr(t) {
            var l = t && t.nodeName && t.nodeName.toLowerCase();
            return l === "input" ? !!Ch[t.type] : l === "textarea";
        }
        function or(t, l, e, n) {
            mn ? vn ? vn.push(n) : vn = [
                n
            ] : mn = n, l = Wa(l, "onChange"), 0 < l.length && (e = new aa("onChange", "change", null, e, n), t.push({
                event: e,
                listeners: l
            }));
        }
        var iu = null, cu = null;
        function Rh(t) {
            Js(t, 0);
        }
        function ca(t) {
            var l = tu(t);
            if (Vf(l)) return t;
        }
        function sr(t, l) {
            if (t === "change") return l;
        }
        var hr = !1;
        if (kl) {
            var Mi;
            if (kl) {
                var Di = "oninput" in document;
                if (!Di) {
                    var dr = document.createElement("div");
                    dr.setAttribute("oninput", "return;"), Di = typeof dr.oninput == "function";
                }
                Mi = Di;
            } else Mi = !1;
            hr = Mi && (!document.documentMode || 9 < document.documentMode);
        }
        function yr() {
            iu && (iu.detachEvent("onpropertychange", mr), cu = iu = null);
        }
        function mr(t) {
            if (t.propertyName === "value" && ca(cu)) {
                var l = [];
                or(l, cu, t, bi(t)), If(Rh, l);
            }
        }
        function Hh(t, l, e) {
            t === "focusin" ? (yr(), iu = l, cu = e, iu.attachEvent("onpropertychange", mr)) : t === "focusout" && yr();
        }
        function jh(t) {
            if (t === "selectionchange" || t === "keyup" || t === "keydown") return ca(cu);
        }
        function qh(t, l) {
            if (t === "click") return ca(l);
        }
        function wh(t, l) {
            if (t === "input" || t === "change") return ca(l);
        }
        function Yh(t, l) {
            return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
        }
        var Sl = typeof Object.is == "function" ? Object.is : Yh;
        function fu(t, l) {
            if (Sl(t, l)) return !0;
            if (typeof t != "object" || t === null || typeof l != "object" || l === null) return !1;
            var e = Object.keys(t), n = Object.keys(l);
            if (e.length !== n.length) return !1;
            for(n = 0; n < e.length; n++){
                var u = e[n];
                if (!Wn.call(l, u) || !Sl(t[u], l[u])) return !1;
            }
            return !0;
        }
        function vr(t) {
            for(; t && t.firstChild;)t = t.firstChild;
            return t;
        }
        function gr(t, l) {
            var e = vr(t);
            t = 0;
            for(var n; e;){
                if (e.nodeType === 3) {
                    if (n = t + e.textContent.length, t <= l && n >= l) return {
                        node: e,
                        offset: l - t
                    };
                    t = n;
                }
                t: {
                    for(; e;){
                        if (e.nextSibling) {
                            e = e.nextSibling;
                            break t;
                        }
                        e = e.parentNode;
                    }
                    e = void 0;
                }
                e = vr(e);
            }
        }
        function pr(t, l) {
            return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? pr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
        }
        function Sr(t) {
            t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
            for(var l = ta(t.document); l instanceof t.HTMLIFrameElement;){
                try {
                    var e = typeof l.contentWindow.location.href == "string";
                } catch  {
                    e = !1;
                }
                if (e) t = l.contentWindow;
                else break;
                l = ta(t.document);
            }
            return l;
        }
        function Ni(t) {
            var l = t && t.nodeName && t.nodeName.toLowerCase();
            return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
        }
        var Gh = kl && "documentMode" in document && 11 >= document.documentMode, pn = null, Ci = null, ru = null, Ri = !1;
        function Er(t, l, e) {
            var n = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
            Ri || pn == null || pn !== ta(n) || (n = pn, "selectionStart" in n && Ni(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ru && fu(ru, n) || (ru = n, n = Wa(Ci, "onSelect"), 0 < n.length && (l = new aa("onSelect", "select", null, l, e), t.push({
                event: l,
                listeners: n
            }), l.target = pn)));
        }
        function Qe(t, l) {
            var e = {};
            return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
        }
        var Sn = {
            animationend: Qe("Animation", "AnimationEnd"),
            animationiteration: Qe("Animation", "AnimationIteration"),
            animationstart: Qe("Animation", "AnimationStart"),
            transitionrun: Qe("Transition", "TransitionRun"),
            transitionstart: Qe("Transition", "TransitionStart"),
            transitioncancel: Qe("Transition", "TransitionCancel"),
            transitionend: Qe("Transition", "TransitionEnd")
        }, Hi = {}, br = {};
        kl && (br = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
        function Ze(t) {
            if (Hi[t]) return Hi[t];
            if (!Sn[t]) return t;
            var l = Sn[t], e;
            for(e in l)if (l.hasOwnProperty(e) && e in br) return Hi[t] = l[e];
            return t;
        }
        var Ar = Ze("animationend"), Tr = Ze("animationiteration"), zr = Ze("animationstart"), Lh = Ze("transitionrun"), Xh = Ze("transitionstart"), Qh = Ze("transitioncancel"), _r = Ze("transitionend"), xr = new Map, ji = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        ji.push("scrollEnd");
        function wl(t, l) {
            xr.set(t, l), Le(l, [
                t
            ]);
        }
        var fa = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var l = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(l)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return;
            }
            console.error(t);
        }, Ol = [], En = 0, qi = 0;
        function ra() {
            for(var t = En, l = qi = En = 0; l < t;){
                var e = Ol[l];
                Ol[l++] = null;
                var n = Ol[l];
                Ol[l++] = null;
                var u = Ol[l];
                Ol[l++] = null;
                var a = Ol[l];
                if (Ol[l++] = null, n !== null && u !== null) {
                    var f = n.pending;
                    f === null ? u.next = u : (u.next = f.next, f.next = u), n.pending = u;
                }
                a !== 0 && Ur(e, u, a);
            }
        }
        function oa(t, l, e, n) {
            Ol[En++] = t, Ol[En++] = l, Ol[En++] = e, Ol[En++] = n, qi |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
        }
        function wi(t, l, e, n) {
            return oa(t, l, e, n), sa(t);
        }
        function Ve(t, l) {
            return oa(t, null, null, l), sa(t);
        }
        function Ur(t, l, e) {
            t.lanes |= e;
            var n = t.alternate;
            n !== null && (n.lanes |= e);
            for(var u = !1, a = t.return; a !== null;)a.childLanes |= e, n = a.alternate, n !== null && (n.childLanes |= e), a.tag === 22 && (t = a.stateNode, t === null || t._visibility & 1 || (u = !0)), t = a, a = a.return;
            return t.tag === 3 ? (a = t.stateNode, u && l !== null && (u = 31 - ct(e), t = a.hiddenUpdates, n = t[u], n === null ? t[u] = [
                l
            ] : n.push(l), l.lane = e | 536870912), a) : null;
        }
        function sa(t) {
            if (50 < Du) throw Du = 0, Jc = null, Error(m(185));
            for(var l = t.return; l !== null;)t = l, l = t.return;
            return t.tag === 3 ? t.stateNode : null;
        }
        var bn = {};
        function Zh(t, l, e, n) {
            this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function El(t, l, e, n) {
            return new Zh(t, l, e, n);
        }
        function Yi(t) {
            return t = t.prototype, !(!t || !t.isReactComponent);
        }
        function Il(t, l) {
            var e = t.alternate;
            return e === null ? (e = El(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
                lanes: l.lanes,
                firstContext: l.firstContext
            }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
        }
        function Br(t, l) {
            t.flags &= 65011714;
            var e = t.alternate;
            return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
                lanes: l.lanes,
                firstContext: l.firstContext
            }), t;
        }
        function ha(t, l, e, n, u, a) {
            var f = 0;
            if (n = t, typeof t == "function") Yi(t) && (f = 1);
            else if (typeof t == "string") f = Wd(t, e, Q.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
            else t: switch(t){
                case rl:
                    return t = El(31, e, l, u), t.elementType = rl, t.lanes = a, t;
                case k:
                    return Ke(e.children, u, a, l);
                case Ut:
                    f = 8, u |= 24;
                    break;
                case Et:
                    return t = El(12, e, l, u | 2), t.elementType = Et, t.lanes = a, t;
                case mt:
                    return t = El(13, e, l, u), t.elementType = mt, t.lanes = a, t;
                case Ft:
                    return t = El(19, e, l, u), t.elementType = Ft, t.lanes = a, t;
                default:
                    if (typeof t == "object" && t !== null) switch(t.$$typeof){
                        case dt:
                            f = 10;
                            break t;
                        case Tt:
                            f = 9;
                            break t;
                        case wt:
                            f = 11;
                            break t;
                        case nt:
                            f = 14;
                            break t;
                        case Wt:
                            f = 16, n = null;
                            break t;
                    }
                    f = 29, e = Error(m(130, t === null ? "null" : typeof t, "")), n = null;
            }
            return l = El(f, e, l, u), l.elementType = t, l.type = n, l.lanes = a, l;
        }
        function Ke(t, l, e, n) {
            return t = El(7, t, n, l), t.lanes = e, t;
        }
        function Gi(t, l, e) {
            return t = El(6, t, null, l), t.lanes = e, t;
        }
        function Or(t) {
            var l = El(18, null, null, 0);
            return l.stateNode = t, l;
        }
        function Li(t, l, e) {
            return l = El(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation
            }, l;
        }
        var Mr = new WeakMap;
        function Ml(t, l) {
            if (typeof t == "object" && t !== null) {
                var e = Mr.get(t);
                return e !== void 0 ? e : (l = {
                    value: t,
                    source: l,
                    stack: Ku(l)
                }, Mr.set(t, l), l);
            }
            return {
                value: t,
                source: l,
                stack: Ku(l)
            };
        }
        var An = [], Tn = 0, da = null, ou = 0, Dl = [], Nl = 0, pe = null, Zl = 1, Vl = "";
        function Pl(t, l) {
            An[Tn++] = ou, An[Tn++] = da, da = t, ou = l;
        }
        function Dr(t, l, e) {
            Dl[Nl++] = Zl, Dl[Nl++] = Vl, Dl[Nl++] = pe, pe = t;
            var n = Zl;
            t = Vl;
            var u = 32 - ct(n) - 1;
            n &= ~(1 << u), e += 1;
            var a = 32 - ct(l) + u;
            if (30 < a) {
                var f = u - u % 5;
                a = (n & (1 << f) - 1).toString(32), n >>= f, u -= f, Zl = 1 << 32 - ct(l) + u | e << u | n, Vl = a + t;
            } else Zl = 1 << a | e << u | n, Vl = t;
        }
        function Xi(t) {
            t.return !== null && (Pl(t, 1), Dr(t, 1, 0));
        }
        function Qi(t) {
            for(; t === da;)da = An[--Tn], An[Tn] = null, ou = An[--Tn], An[Tn] = null;
            for(; t === pe;)pe = Dl[--Nl], Dl[Nl] = null, Vl = Dl[--Nl], Dl[Nl] = null, Zl = Dl[--Nl], Dl[Nl] = null;
        }
        function Nr(t, l) {
            Dl[Nl++] = Zl, Dl[Nl++] = Vl, Dl[Nl++] = pe, Zl = l.id, Vl = l.overflow, pe = t;
        }
        var ll = null, Ct = null, ht = !1, Se = null, Cl = !1, Zi = Error(m(519));
        function Ee(t) {
            var l = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw su(Ml(l, t)), Zi;
        }
        function Cr(t) {
            var l = t.stateNode, e = t.type, n = t.memoizedProps;
            switch(l[tl] = t, l[sl] = n, e){
                case "dialog":
                    rt("cancel", l), rt("close", l);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    rt("load", l);
                    break;
                case "video":
                case "audio":
                    for(e = 0; e < Cu.length; e++)rt(Cu[e], l);
                    break;
                case "source":
                    rt("error", l);
                    break;
                case "img":
                case "image":
                case "link":
                    rt("error", l), rt("load", l);
                    break;
                case "details":
                    rt("toggle", l);
                    break;
                case "input":
                    rt("invalid", l), Kf(l, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0);
                    break;
                case "select":
                    rt("invalid", l);
                    break;
                case "textarea":
                    rt("invalid", l), Ff(l, n.value, n.defaultValue, n.children);
            }
            e = n.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || n.suppressHydrationWarning === !0 || ks(l.textContent, e) ? (n.popover != null && (rt("beforetoggle", l), rt("toggle", l)), n.onScroll != null && rt("scroll", l), n.onScrollEnd != null && rt("scrollend", l), n.onClick != null && (l.onclick = $l), l = !0) : l = !1, l || Ee(t, !0);
        }
        function Rr(t) {
            for(ll = t.return; ll;)switch(ll.tag){
                case 5:
                case 31:
                case 13:
                    Cl = !1;
                    return;
                case 27:
                case 3:
                    Cl = !0;
                    return;
                default:
                    ll = ll.return;
            }
        }
        function zn(t) {
            if (t !== ll) return !1;
            if (!ht) return Rr(t), ht = !0, !1;
            var l = t.tag, e;
            if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || rf(t.type, t.memoizedProps)), e = !e), e && Ct && Ee(t), Rr(t), l === 13) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(m(317));
                Ct = i0(t);
            } else if (l === 31) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(m(317));
                Ct = i0(t);
            } else l === 27 ? (l = Ct, Re(t.type) ? (t = yf, yf = null, Ct = t) : Ct = l) : Ct = ll ? Hl(t.stateNode.nextSibling) : null;
            return !0;
        }
        function Je() {
            Ct = ll = null, ht = !1;
        }
        function Vi() {
            var t = Se;
            return t !== null && (vl === null ? vl = t : vl.push.apply(vl, t), Se = null), t;
        }
        function su(t) {
            Se === null ? Se = [
                t
            ] : Se.push(t);
        }
        var Ki = d(null), Fe = null, te = null;
        function be(t, l, e) {
            Y(Ki, l._currentValue), l._currentValue = e;
        }
        function le(t) {
            t._currentValue = Ki.current, U(Ki);
        }
        function Ji(t, l, e) {
            for(; t !== null;){
                var n = t.alternate;
                if ((t.childLanes & l) !== l ? (t.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), t === e) break;
                t = t.return;
            }
        }
        function Fi(t, l, e, n) {
            var u = t.child;
            for(u !== null && (u.return = t); u !== null;){
                var a = u.dependencies;
                if (a !== null) {
                    var f = u.child;
                    a = a.firstContext;
                    t: for(; a !== null;){
                        var r = a;
                        a = u;
                        for(var h = 0; h < l.length; h++)if (r.context === l[h]) {
                            a.lanes |= e, r = a.alternate, r !== null && (r.lanes |= e), Ji(a.return, e, t), n || (f = null);
                            break t;
                        }
                        a = r.next;
                    }
                } else if (u.tag === 18) {
                    if (f = u.return, f === null) throw Error(m(341));
                    f.lanes |= e, a = f.alternate, a !== null && (a.lanes |= e), Ji(f, e, t), f = null;
                } else f = u.child;
                if (f !== null) f.return = u;
                else for(f = u; f !== null;){
                    if (f === t) {
                        f = null;
                        break;
                    }
                    if (u = f.sibling, u !== null) {
                        u.return = f.return, f = u;
                        break;
                    }
                    f = f.return;
                }
                u = f;
            }
        }
        function _n(t, l, e, n) {
            t = null;
            for(var u = l, a = !1; u !== null;){
                if (!a) {
                    if ((u.flags & 524288) !== 0) a = !0;
                    else if ((u.flags & 262144) !== 0) break;
                }
                if (u.tag === 10) {
                    var f = u.alternate;
                    if (f === null) throw Error(m(387));
                    if (f = f.memoizedProps, f !== null) {
                        var r = u.type;
                        Sl(u.pendingProps.value, f.value) || (t !== null ? t.push(r) : t = [
                            r
                        ]);
                    }
                } else if (u === gt.current) {
                    if (f = u.alternate, f === null) throw Error(m(387));
                    f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(wu) : t = [
                        wu
                    ]);
                }
                u = u.return;
            }
            t !== null && Fi(l, t, e, n), l.flags |= 262144;
        }
        function ya(t) {
            for(t = t.firstContext; t !== null;){
                if (!Sl(t.context._currentValue, t.memoizedValue)) return !0;
                t = t.next;
            }
            return !1;
        }
        function We(t) {
            Fe = t, te = null, t = t.dependencies, t !== null && (t.firstContext = null);
        }
        function el(t) {
            return Hr(Fe, t);
        }
        function ma(t, l) {
            return Fe === null && We(t), Hr(t, l);
        }
        function Hr(t, l) {
            var e = l._currentValue;
            if (l = {
                context: l,
                memoizedValue: e,
                next: null
            }, te === null) {
                if (t === null) throw Error(m(308));
                te = l, t.dependencies = {
                    lanes: 0,
                    firstContext: l
                }, t.flags |= 524288;
            } else te = te.next = l;
            return e;
        }
        var Vh = typeof AbortController < "u" ? AbortController : function() {
            var t = [], l = this.signal = {
                aborted: !1,
                addEventListener: function(e, n) {
                    t.push(n);
                }
            };
            this.abort = function() {
                l.aborted = !0, t.forEach(function(e) {
                    return e();
                });
            };
        }, Kh = z.unstable_scheduleCallback, Jh = z.unstable_NormalPriority, Zt = {
            $$typeof: dt,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Wi() {
            return {
                controller: new Vh,
                data: new Map,
                refCount: 0
            };
        }
        function hu(t) {
            t.refCount--, t.refCount === 0 && Kh(Jh, function() {
                t.controller.abort();
            });
        }
        var du = null, $i = 0, xn = 0, Un = null;
        function Fh(t, l) {
            if (du === null) {
                var e = du = [];
                $i = 0, xn = Pc(), Un = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        e.push(n);
                    }
                };
            }
            return $i++, l.then(jr, jr), l;
        }
        function jr() {
            if (--$i === 0 && du !== null) {
                Un !== null && (Un.status = "fulfilled");
                var t = du;
                du = null, xn = 0, Un = null;
                for(var l = 0; l < t.length; l++)(0, t[l])();
            }
        }
        function Wh(t, l) {
            var e = [], n = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    e.push(u);
                }
            };
            return t.then(function() {
                n.status = "fulfilled", n.value = l;
                for(var u = 0; u < e.length; u++)(0, e[u])(l);
            }, function(u) {
                for(n.status = "rejected", n.reason = u, u = 0; u < e.length; u++)(0, e[u])(void 0);
            }), n;
        }
        var qr = _.S;
        _.S = function(t, l) {
            bs = cl(), typeof l == "object" && l !== null && typeof l.then == "function" && Fh(t, l), qr !== null && qr(t, l);
        };
        var $e = d(null);
        function ki() {
            var t = $e.current;
            return t !== null ? t : Dt.pooledCache;
        }
        function va(t, l) {
            l === null ? Y($e, $e.current) : Y($e, l.pool);
        }
        function wr() {
            var t = ki();
            return t === null ? null : {
                parent: Zt._currentValue,
                pool: t
            };
        }
        var Bn = Error(m(460)), Ii = Error(m(474)), ga = Error(m(542)), pa = {
            then: function() {}
        };
        function Yr(t) {
            return t = t.status, t === "fulfilled" || t === "rejected";
        }
        function Gr(t, l, e) {
            switch(e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then($l, $l), l = e), l.status){
                case "fulfilled":
                    return l.value;
                case "rejected":
                    throw t = l.reason, Xr(t), t;
                default:
                    if (typeof l.status == "string") l.then($l, $l);
                    else {
                        if (t = Dt, t !== null && 100 < t.shellSuspendCounter) throw Error(m(482));
                        t = l, t.status = "pending", t.then(function(n) {
                            if (l.status === "pending") {
                                var u = l;
                                u.status = "fulfilled", u.value = n;
                            }
                        }, function(n) {
                            if (l.status === "pending") {
                                var u = l;
                                u.status = "rejected", u.reason = n;
                            }
                        });
                    }
                    switch(l.status){
                        case "fulfilled":
                            return l.value;
                        case "rejected":
                            throw t = l.reason, Xr(t), t;
                    }
                    throw Ie = l, Bn;
            }
        }
        function ke(t) {
            try {
                var l = t._init;
                return l(t._payload);
            } catch (e) {
                throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ie = e, Bn) : e;
            }
        }
        var Ie = null;
        function Lr() {
            if (Ie === null) throw Error(m(459));
            var t = Ie;
            return Ie = null, t;
        }
        function Xr(t) {
            if (t === Bn || t === ga) throw Error(m(483));
        }
        var On = null, yu = 0;
        function Sa(t) {
            var l = yu;
            return yu += 1, On === null && (On = []), Gr(On, t, l);
        }
        function mu(t, l) {
            l = l.props.ref, t.ref = l !== void 0 ? l : null;
        }
        function Ea(t, l) {
            throw l.$$typeof === F ? Error(m(525)) : (t = Object.prototype.toString.call(l), Error(m(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
        }
        function Qr(t) {
            function l(g, y) {
                if (t) {
                    var S = g.deletions;
                    S === null ? (g.deletions = [
                        y
                    ], g.flags |= 16) : S.push(y);
                }
            }
            function e(g, y) {
                if (!t) return null;
                for(; y !== null;)l(g, y), y = y.sibling;
                return null;
            }
            function n(g) {
                for(var y = new Map; g !== null;)g.key !== null ? y.set(g.key, g) : y.set(g.index, g), g = g.sibling;
                return y;
            }
            function u(g, y) {
                return g = Il(g, y), g.index = 0, g.sibling = null, g;
            }
            function a(g, y, S) {
                return g.index = S, t ? (S = g.alternate, S !== null ? (S = S.index, S < y ? (g.flags |= 67108866, y) : S) : (g.flags |= 67108866, y)) : (g.flags |= 1048576, y);
            }
            function f(g) {
                return t && g.alternate === null && (g.flags |= 67108866), g;
            }
            function r(g, y, S, D) {
                return y === null || y.tag !== 6 ? (y = Gi(S, g.mode, D), y.return = g, y) : (y = u(y, S), y.return = g, y);
            }
            function h(g, y, S, D) {
                var $ = S.type;
                return $ === k ? B(g, y, S.props.children, D, S.key) : y !== null && (y.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Wt && ke($) === y.type) ? (y = u(y, S.props), mu(y, S), y.return = g, y) : (y = ha(S.type, S.key, S.props, null, g.mode, D), mu(y, S), y.return = g, y);
            }
            function E(g, y, S, D) {
                return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = Li(S, g.mode, D), y.return = g, y) : (y = u(y, S.children || []), y.return = g, y);
            }
            function B(g, y, S, D, $) {
                return y === null || y.tag !== 7 ? (y = Ke(S, g.mode, D, $), y.return = g, y) : (y = u(y, S), y.return = g, y);
            }
            function N(g, y, S) {
                if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Gi("" + y, g.mode, S), y.return = g, y;
                if (typeof y == "object" && y !== null) {
                    switch(y.$$typeof){
                        case X:
                            return S = ha(y.type, y.key, y.props, null, g.mode, S), mu(S, y), S.return = g, S;
                        case J:
                            return y = Li(y, g.mode, S), y.return = g, y;
                        case Wt:
                            return y = ke(y), N(g, y, S);
                    }
                    if (it(y) || kt(y)) return y = Ke(y, g.mode, S, null), y.return = g, y;
                    if (typeof y.then == "function") return N(g, Sa(y), S);
                    if (y.$$typeof === dt) return N(g, ma(g, y), S);
                    Ea(g, y);
                }
                return null;
            }
            function b(g, y, S, D) {
                var $ = y !== null ? y.key : null;
                if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return $ !== null ? null : r(g, y, "" + S, D);
                if (typeof S == "object" && S !== null) {
                    switch(S.$$typeof){
                        case X:
                            return S.key === $ ? h(g, y, S, D) : null;
                        case J:
                            return S.key === $ ? E(g, y, S, D) : null;
                        case Wt:
                            return S = ke(S), b(g, y, S, D);
                    }
                    if (it(S) || kt(S)) return $ !== null ? null : B(g, y, S, D, null);
                    if (typeof S.then == "function") return b(g, y, Sa(S), D);
                    if (S.$$typeof === dt) return b(g, y, ma(g, S), D);
                    Ea(g, S);
                }
                return null;
            }
            function x(g, y, S, D, $) {
                if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return g = g.get(S) || null, r(y, g, "" + D, $);
                if (typeof D == "object" && D !== null) {
                    switch(D.$$typeof){
                        case X:
                            return g = g.get(D.key === null ? S : D.key) || null, h(y, g, D, $);
                        case J:
                            return g = g.get(D.key === null ? S : D.key) || null, E(y, g, D, $);
                        case Wt:
                            return D = ke(D), x(g, y, S, D, $);
                    }
                    if (it(D) || kt(D)) return g = g.get(S) || null, B(y, g, D, $, null);
                    if (typeof D.then == "function") return x(g, y, S, Sa(D), $);
                    if (D.$$typeof === dt) return x(g, y, S, ma(y, D), $);
                    Ea(y, D);
                }
                return null;
            }
            function Z(g, y, S, D) {
                for(var $ = null, pt = null, K = y, ut = y = 0, st = null; K !== null && ut < S.length; ut++){
                    K.index > ut ? (st = K, K = null) : st = K.sibling;
                    var St = b(g, K, S[ut], D);
                    if (St === null) {
                        K === null && (K = st);
                        break;
                    }
                    t && K && St.alternate === null && l(g, K), y = a(St, y, ut), pt === null ? $ = St : pt.sibling = St, pt = St, K = st;
                }
                if (ut === S.length) return e(g, K), ht && Pl(g, ut), $;
                if (K === null) {
                    for(; ut < S.length; ut++)K = N(g, S[ut], D), K !== null && (y = a(K, y, ut), pt === null ? $ = K : pt.sibling = K, pt = K);
                    return ht && Pl(g, ut), $;
                }
                for(K = n(K); ut < S.length; ut++)st = x(K, g, ut, S[ut], D), st !== null && (t && st.alternate !== null && K.delete(st.key === null ? ut : st.key), y = a(st, y, ut), pt === null ? $ = st : pt.sibling = st, pt = st);
                return t && K.forEach(function(Ye) {
                    return l(g, Ye);
                }), ht && Pl(g, ut), $;
            }
            function P(g, y, S, D) {
                if (S == null) throw Error(m(151));
                for(var $ = null, pt = null, K = y, ut = y = 0, st = null, St = S.next(); K !== null && !St.done; ut++, St = S.next()){
                    K.index > ut ? (st = K, K = null) : st = K.sibling;
                    var Ye = b(g, K, St.value, D);
                    if (Ye === null) {
                        K === null && (K = st);
                        break;
                    }
                    t && K && Ye.alternate === null && l(g, K), y = a(Ye, y, ut), pt === null ? $ = Ye : pt.sibling = Ye, pt = Ye, K = st;
                }
                if (St.done) return e(g, K), ht && Pl(g, ut), $;
                if (K === null) {
                    for(; !St.done; ut++, St = S.next())St = N(g, St.value, D), St !== null && (y = a(St, y, ut), pt === null ? $ = St : pt.sibling = St, pt = St);
                    return ht && Pl(g, ut), $;
                }
                for(K = n(K); !St.done; ut++, St = S.next())St = x(K, g, ut, St.value, D), St !== null && (t && St.alternate !== null && K.delete(St.key === null ? ut : St.key), y = a(St, y, ut), pt === null ? $ = St : pt.sibling = St, pt = St);
                return t && K.forEach(function(iy) {
                    return l(g, iy);
                }), ht && Pl(g, ut), $;
            }
            function Mt(g, y, S, D) {
                if (typeof S == "object" && S !== null && S.type === k && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
                    switch(S.$$typeof){
                        case X:
                            t: {
                                for(var $ = S.key; y !== null;){
                                    if (y.key === $) {
                                        if ($ = S.type, $ === k) {
                                            if (y.tag === 7) {
                                                e(g, y.sibling), D = u(y, S.props.children), D.return = g, g = D;
                                                break t;
                                            }
                                        } else if (y.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Wt && ke($) === y.type) {
                                            e(g, y.sibling), D = u(y, S.props), mu(D, S), D.return = g, g = D;
                                            break t;
                                        }
                                        e(g, y);
                                        break;
                                    } else l(g, y);
                                    y = y.sibling;
                                }
                                S.type === k ? (D = Ke(S.props.children, g.mode, D, S.key), D.return = g, g = D) : (D = ha(S.type, S.key, S.props, null, g.mode, D), mu(D, S), D.return = g, g = D);
                            }
                            return f(g);
                        case J:
                            t: {
                                for($ = S.key; y !== null;){
                                    if (y.key === $) if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                                        e(g, y.sibling), D = u(y, S.children || []), D.return = g, g = D;
                                        break t;
                                    } else {
                                        e(g, y);
                                        break;
                                    }
                                    else l(g, y);
                                    y = y.sibling;
                                }
                                D = Li(S, g.mode, D), D.return = g, g = D;
                            }
                            return f(g);
                        case Wt:
                            return S = ke(S), Mt(g, y, S, D);
                    }
                    if (it(S)) return Z(g, y, S, D);
                    if (kt(S)) {
                        if ($ = kt(S), typeof $ != "function") throw Error(m(150));
                        return S = $.call(S), P(g, y, S, D);
                    }
                    if (typeof S.then == "function") return Mt(g, y, Sa(S), D);
                    if (S.$$typeof === dt) return Mt(g, y, ma(g, S), D);
                    Ea(g, S);
                }
                return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (e(g, y.sibling), D = u(y, S), D.return = g, g = D) : (e(g, y), D = Gi(S, g.mode, D), D.return = g, g = D), f(g)) : e(g, y);
            }
            return function(g, y, S, D) {
                try {
                    yu = 0;
                    var $ = Mt(g, y, S, D);
                    return On = null, $;
                } catch (K) {
                    if (K === Bn || K === ga) throw K;
                    var pt = El(29, K, null, g.mode);
                    return pt.lanes = D, pt.return = g, pt;
                } finally{}
            };
        }
        var Pe = Qr(!0), Zr = Qr(!1), Ae = !1;
        function Pi(t) {
            t.updateQueue = {
                baseState: t.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }
        function tc(t, l) {
            t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                callbacks: null
            });
        }
        function Te(t) {
            return {
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function ze(t, l, e) {
            var n = t.updateQueue;
            if (n === null) return null;
            if (n = n.shared, (At & 2) !== 0) {
                var u = n.pending;
                return u === null ? l.next = l : (l.next = u.next, u.next = l), n.pending = l, l = sa(t), Ur(t, null, e), l;
            }
            return oa(t, n, l, e), sa(t);
        }
        function vu(t, l, e) {
            if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
                var n = l.lanes;
                n &= t.pendingLanes, e |= n, l.lanes = e, Hf(t, e);
            }
        }
        function lc(t, l) {
            var e = t.updateQueue, n = t.alternate;
            if (n !== null && (n = n.updateQueue, e === n)) {
                var u = null, a = null;
                if (e = e.firstBaseUpdate, e !== null) {
                    do {
                        var f = {
                            lane: e.lane,
                            tag: e.tag,
                            payload: e.payload,
                            callback: null,
                            next: null
                        };
                        a === null ? u = a = f : a = a.next = f, e = e.next;
                    }while (e !== null);
                    a === null ? u = a = l : a = a.next = l;
                } else u = a = l;
                e = {
                    baseState: n.baseState,
                    firstBaseUpdate: u,
                    lastBaseUpdate: a,
                    shared: n.shared,
                    callbacks: n.callbacks
                }, t.updateQueue = e;
                return;
            }
            t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
        }
        var ec = !1;
        function gu() {
            if (ec) {
                var t = Un;
                if (t !== null) throw t;
            }
        }
        function pu(t, l, e, n) {
            ec = !1;
            var u = t.updateQueue;
            Ae = !1;
            var a = u.firstBaseUpdate, f = u.lastBaseUpdate, r = u.shared.pending;
            if (r !== null) {
                u.shared.pending = null;
                var h = r, E = h.next;
                h.next = null, f === null ? a = E : f.next = E, f = h;
                var B = t.alternate;
                B !== null && (B = B.updateQueue, r = B.lastBaseUpdate, r !== f && (r === null ? B.firstBaseUpdate = E : r.next = E, B.lastBaseUpdate = h));
            }
            if (a !== null) {
                var N = u.baseState;
                f = 0, B = E = h = null, r = a;
                do {
                    var b = r.lane & -536870913, x = b !== r.lane;
                    if (x ? (ot & b) === b : (n & b) === b) {
                        b !== 0 && b === xn && (ec = !0), B !== null && (B = B.next = {
                            lane: 0,
                            tag: r.tag,
                            payload: r.payload,
                            callback: null,
                            next: null
                        });
                        t: {
                            var Z = t, P = r;
                            b = l;
                            var Mt = e;
                            switch(P.tag){
                                case 1:
                                    if (Z = P.payload, typeof Z == "function") {
                                        N = Z.call(Mt, N, b);
                                        break t;
                                    }
                                    N = Z;
                                    break t;
                                case 3:
                                    Z.flags = Z.flags & -65537 | 128;
                                case 0:
                                    if (Z = P.payload, b = typeof Z == "function" ? Z.call(Mt, N, b) : Z, b == null) break t;
                                    N = C({}, N, b);
                                    break t;
                                case 2:
                                    Ae = !0;
                            }
                        }
                        b = r.callback, b !== null && (t.flags |= 64, x && (t.flags |= 8192), x = u.callbacks, x === null ? u.callbacks = [
                            b
                        ] : x.push(b));
                    } else x = {
                        lane: b,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null
                    }, B === null ? (E = B = x, h = N) : B = B.next = x, f |= b;
                    if (r = r.next, r === null) {
                        if (r = u.shared.pending, r === null) break;
                        x = r, r = x.next, x.next = null, u.lastBaseUpdate = x, u.shared.pending = null;
                    }
                }while (!0);
                B === null && (h = N), u.baseState = h, u.firstBaseUpdate = E, u.lastBaseUpdate = B, a === null && (u.shared.lanes = 0), Oe |= f, t.lanes = f, t.memoizedState = N;
            }
        }
        function Vr(t, l) {
            if (typeof t != "function") throw Error(m(191, t));
            t.call(l);
        }
        function Kr(t, l) {
            var e = t.callbacks;
            if (e !== null) for(t.callbacks = null, t = 0; t < e.length; t++)Vr(e[t], l);
        }
        var Mn = d(null), ba = d(0);
        function Jr(t, l) {
            t = oe, Y(ba, t), Y(Mn, l), oe = t | l.baseLanes;
        }
        function nc() {
            Y(ba, oe), Y(Mn, Mn.current);
        }
        function uc() {
            oe = ba.current, U(Mn), U(ba);
        }
        var bl = d(null), Rl = null;
        function _e(t) {
            var l = t.alternate;
            Y(Xt, Xt.current & 1), Y(bl, t), Rl === null && (l === null || Mn.current !== null || l.memoizedState !== null) && (Rl = t);
        }
        function ac(t) {
            Y(Xt, Xt.current), Y(bl, t), Rl === null && (Rl = t);
        }
        function Fr(t) {
            t.tag === 22 ? (Y(Xt, Xt.current), Y(bl, t), Rl === null && (Rl = t)) : xe();
        }
        function xe() {
            Y(Xt, Xt.current), Y(bl, bl.current);
        }
        function Al(t) {
            U(bl), Rl === t && (Rl = null), U(Xt);
        }
        var Xt = d(0);
        function Aa(t) {
            for(var l = t; l !== null;){
                if (l.tag === 13) {
                    var e = l.memoizedState;
                    if (e !== null && (e = e.dehydrated, e === null || hf(e) || df(e))) return l;
                } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
                    if ((l.flags & 128) !== 0) return l;
                } else if (l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue;
                }
                if (l === t) break;
                for(; l.sibling === null;){
                    if (l.return === null || l.return === t) return null;
                    l = l.return;
                }
                l.sibling.return = l.return, l = l.sibling;
            }
            return null;
        }
        var ee = 0, et = null, Bt = null, Vt = null, Ta = !1, Dn = !1, tn = !1, za = 0, Su = 0, Nn = null, $h = 0;
        function Gt() {
            throw Error(m(321));
        }
        function ic(t, l) {
            if (l === null) return !1;
            for(var e = 0; e < l.length && e < t.length; e++)if (!Sl(t[e], l[e])) return !1;
            return !0;
        }
        function cc(t, l, e, n, u, a) {
            return ee = a, et = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, _.H = t === null || t.memoizedState === null ? No : Ac, tn = !1, a = e(n, u), tn = !1, Dn && (a = $r(l, e, n, u)), Wr(t), a;
        }
        function Wr(t) {
            _.H = Au;
            var l = Bt !== null && Bt.next !== null;
            if (ee = 0, Vt = Bt = et = null, Ta = !1, Su = 0, Nn = null, l) throw Error(m(300));
            t === null || Kt || (t = t.dependencies, t !== null && ya(t) && (Kt = !0));
        }
        function $r(t, l, e, n) {
            et = t;
            var u = 0;
            do {
                if (Dn && (Nn = null), Su = 0, Dn = !1, 25 <= u) throw Error(m(301));
                if (u += 1, Vt = Bt = null, t.updateQueue != null) {
                    var a = t.updateQueue;
                    a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
                }
                _.H = Co, a = l(e, n);
            }while (Dn);
            return a;
        }
        function kh() {
            var t = _.H, l = t.useState()[0];
            return l = typeof l.then == "function" ? Eu(l) : l, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (et.flags |= 1024), l;
        }
        function fc() {
            var t = za !== 0;
            return za = 0, t;
        }
        function rc(t, l, e) {
            l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
        }
        function oc(t) {
            if (Ta) {
                for(t = t.memoizedState; t !== null;){
                    var l = t.queue;
                    l !== null && (l.pending = null), t = t.next;
                }
                Ta = !1;
            }
            ee = 0, Vt = Bt = et = null, Dn = !1, Su = za = 0, Nn = null;
        }
        function fl() {
            var t = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Vt === null ? et.memoizedState = Vt = t : Vt = Vt.next = t, Vt;
        }
        function Qt() {
            if (Bt === null) {
                var t = et.alternate;
                t = t !== null ? t.memoizedState : null;
            } else t = Bt.next;
            var l = Vt === null ? et.memoizedState : Vt.next;
            if (l !== null) Vt = l, Bt = t;
            else {
                if (t === null) throw et.alternate === null ? Error(m(467)) : Error(m(310));
                Bt = t, t = {
                    memoizedState: Bt.memoizedState,
                    baseState: Bt.baseState,
                    baseQueue: Bt.baseQueue,
                    queue: Bt.queue,
                    next: null
                }, Vt === null ? et.memoizedState = Vt = t : Vt = Vt.next = t;
            }
            return Vt;
        }
        function _a() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Eu(t) {
            var l = Su;
            return Su += 1, Nn === null && (Nn = []), t = Gr(Nn, t, l), l = et, (Vt === null ? l.memoizedState : Vt.next) === null && (l = l.alternate, _.H = l === null || l.memoizedState === null ? No : Ac), t;
        }
        function xa(t) {
            if (t !== null && typeof t == "object") {
                if (typeof t.then == "function") return Eu(t);
                if (t.$$typeof === dt) return el(t);
            }
            throw Error(m(438, String(t)));
        }
        function sc(t) {
            var l = null, e = et.updateQueue;
            if (e !== null && (l = e.memoCache), l == null) {
                var n = et.alternate;
                n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (l = {
                    data: n.data.map(function(u) {
                        return u.slice();
                    }),
                    index: 0
                })));
            }
            if (l == null && (l = {
                data: [],
                index: 0
            }), e === null && (e = _a(), et.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0) for(e = l.data[l.index] = Array(t), n = 0; n < t; n++)e[n] = Xl;
            return l.index++, e;
        }
        function ne(t, l) {
            return typeof l == "function" ? l(t) : l;
        }
        function Ua(t) {
            var l = Qt();
            return hc(l, Bt, t);
        }
        function hc(t, l, e) {
            var n = t.queue;
            if (n === null) throw Error(m(311));
            n.lastRenderedReducer = e;
            var u = t.baseQueue, a = n.pending;
            if (a !== null) {
                if (u !== null) {
                    var f = u.next;
                    u.next = a.next, a.next = f;
                }
                l.baseQueue = u = a, n.pending = null;
            }
            if (a = t.baseState, u === null) t.memoizedState = a;
            else {
                l = u.next;
                var r = f = null, h = null, E = l, B = !1;
                do {
                    var N = E.lane & -536870913;
                    if (N !== E.lane ? (ot & N) === N : (ee & N) === N) {
                        var b = E.revertLane;
                        if (b === 0) h !== null && (h = h.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: E.action,
                            hasEagerState: E.hasEagerState,
                            eagerState: E.eagerState,
                            next: null
                        }), N === xn && (B = !0);
                        else if ((ee & b) === b) {
                            E = E.next, b === xn && (B = !0);
                            continue;
                        } else N = {
                            lane: 0,
                            revertLane: E.revertLane,
                            gesture: null,
                            action: E.action,
                            hasEagerState: E.hasEagerState,
                            eagerState: E.eagerState,
                            next: null
                        }, h === null ? (r = h = N, f = a) : h = h.next = N, et.lanes |= b, Oe |= b;
                        N = E.action, tn && e(a, N), a = E.hasEagerState ? E.eagerState : e(a, N);
                    } else b = {
                        lane: N,
                        revertLane: E.revertLane,
                        gesture: E.gesture,
                        action: E.action,
                        hasEagerState: E.hasEagerState,
                        eagerState: E.eagerState,
                        next: null
                    }, h === null ? (r = h = b, f = a) : h = h.next = b, et.lanes |= N, Oe |= N;
                    E = E.next;
                }while (E !== null && E !== l);
                if (h === null ? f = a : h.next = r, !Sl(a, t.memoizedState) && (Kt = !0, B && (e = Un, e !== null))) throw e;
                t.memoizedState = a, t.baseState = f, t.baseQueue = h, n.lastRenderedState = a;
            }
            return u === null && (n.lanes = 0), [
                t.memoizedState,
                n.dispatch
            ];
        }
        function dc(t) {
            var l = Qt(), e = l.queue;
            if (e === null) throw Error(m(311));
            e.lastRenderedReducer = t;
            var n = e.dispatch, u = e.pending, a = l.memoizedState;
            if (u !== null) {
                e.pending = null;
                var f = u = u.next;
                do a = t(a, f.action), f = f.next;
                while (f !== u);
                Sl(a, l.memoizedState) || (Kt = !0), l.memoizedState = a, l.baseQueue === null && (l.baseState = a), e.lastRenderedState = a;
            }
            return [
                a,
                n
            ];
        }
        function kr(t, l, e) {
            var n = et, u = Qt(), a = ht;
            if (a) {
                if (e === void 0) throw Error(m(407));
                e = e();
            } else e = l();
            var f = !Sl((Bt || u).memoizedState, e);
            if (f && (u.memoizedState = e, Kt = !0), u = u.queue, vc(to.bind(null, n, u, t), [
                t
            ]), u.getSnapshot !== l || f || Vt !== null && Vt.memoizedState.tag & 1) {
                if (n.flags |= 2048, Cn(9, {
                    destroy: void 0
                }, Pr.bind(null, n, u, e, l), null), Dt === null) throw Error(m(349));
                a || (ee & 127) !== 0 || Ir(n, l, e);
            }
            return e;
        }
        function Ir(t, l, e) {
            t.flags |= 16384, t = {
                getSnapshot: l,
                value: e
            }, l = et.updateQueue, l === null ? (l = _a(), et.updateQueue = l, l.stores = [
                t
            ]) : (e = l.stores, e === null ? l.stores = [
                t
            ] : e.push(t));
        }
        function Pr(t, l, e, n) {
            l.value = e, l.getSnapshot = n, lo(l) && eo(t);
        }
        function to(t, l, e) {
            return e(function() {
                lo(l) && eo(t);
            });
        }
        function lo(t) {
            var l = t.getSnapshot;
            t = t.value;
            try {
                var e = l();
                return !Sl(t, e);
            } catch  {
                return !0;
            }
        }
        function eo(t) {
            var l = Ve(t, 2);
            l !== null && gl(l, t, 2);
        }
        function yc(t) {
            var l = fl();
            if (typeof t == "function") {
                var e = t;
                if (t = e(), tn) {
                    bt(!0);
                    try {
                        e();
                    } finally{
                        bt(!1);
                    }
                }
            }
            return l.memoizedState = l.baseState = t, l.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ne,
                lastRenderedState: t
            }, l;
        }
        function no(t, l, e, n) {
            return t.baseState = e, hc(t, Bt, typeof n == "function" ? n : ne);
        }
        function Ih(t, l, e, n, u) {
            if (Ma(t)) throw Error(m(485));
            if (t = l.action, t !== null) {
                var a = {
                    payload: u,
                    action: t,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(f) {
                        a.listeners.push(f);
                    }
                };
                _.T !== null ? e(!0) : a.isTransition = !1, n(a), e = l.pending, e === null ? (a.next = l.pending = a, uo(l, a)) : (a.next = e.next, l.pending = e.next = a);
            }
        }
        function uo(t, l) {
            var e = l.action, n = l.payload, u = t.state;
            if (l.isTransition) {
                var a = _.T, f = {};
                _.T = f;
                try {
                    var r = e(u, n), h = _.S;
                    h !== null && h(f, r), ao(t, l, r);
                } catch (E) {
                    mc(t, l, E);
                } finally{
                    a !== null && f.types !== null && (a.types = f.types), _.T = a;
                }
            } else try {
                a = e(u, n), ao(t, l, a);
            } catch (E) {
                mc(t, l, E);
            }
        }
        function ao(t, l, e) {
            e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(n) {
                io(t, l, n);
            }, function(n) {
                return mc(t, l, n);
            }) : io(t, l, e);
        }
        function io(t, l, e) {
            l.status = "fulfilled", l.value = e, co(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, uo(t, e)));
        }
        function mc(t, l, e) {
            var n = t.pending;
            if (t.pending = null, n !== null) {
                n = n.next;
                do l.status = "rejected", l.reason = e, co(l), l = l.next;
                while (l !== n);
            }
            t.action = null;
        }
        function co(t) {
            t = t.listeners;
            for(var l = 0; l < t.length; l++)(0, t[l])();
        }
        function fo(t, l) {
            return l;
        }
        function ro(t, l) {
            if (ht) {
                var e = Dt.formState;
                if (e !== null) {
                    t: {
                        var n = et;
                        if (ht) {
                            if (Ct) {
                                l: {
                                    for(var u = Ct, a = Cl; u.nodeType !== 8;){
                                        if (!a) {
                                            u = null;
                                            break l;
                                        }
                                        if (u = Hl(u.nextSibling), u === null) {
                                            u = null;
                                            break l;
                                        }
                                    }
                                    a = u.data, u = a === "F!" || a === "F" ? u : null;
                                }
                                if (u) {
                                    Ct = Hl(u.nextSibling), n = u.data === "F!";
                                    break t;
                                }
                            }
                            Ee(n);
                        }
                        n = !1;
                    }
                    n && (l = e[0]);
                }
            }
            return e = fl(), e.memoizedState = e.baseState = l, n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fo,
                lastRenderedState: l
            }, e.queue = n, e = Oo.bind(null, et, n), n.dispatch = e, n = yc(!1), a = bc.bind(null, et, !1, n.queue), n = fl(), u = {
                state: l,
                dispatch: null,
                action: t,
                pending: null
            }, n.queue = u, e = Ih.bind(null, et, u, a, e), u.dispatch = e, n.memoizedState = t, [
                l,
                e,
                !1
            ];
        }
        function oo(t) {
            var l = Qt();
            return so(l, Bt, t);
        }
        function so(t, l, e) {
            if (l = hc(t, l, fo)[0], t = Ua(ne)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
                var n = Eu(l);
            } catch (f) {
                throw f === Bn ? ga : f;
            }
            else n = l;
            l = Qt();
            var u = l.queue, a = u.dispatch;
            return e !== l.memoizedState && (et.flags |= 2048, Cn(9, {
                destroy: void 0
            }, Ph.bind(null, u, e), null)), [
                n,
                a,
                t
            ];
        }
        function Ph(t, l) {
            t.action = l;
        }
        function ho(t) {
            var l = Qt(), e = Bt;
            if (e !== null) return so(l, e, t);
            Qt(), l = l.memoizedState, e = Qt();
            var n = e.queue.dispatch;
            return e.memoizedState = t, [
                l,
                n,
                !1
            ];
        }
        function Cn(t, l, e, n) {
            return t = {
                tag: t,
                create: e,
                deps: n,
                inst: l,
                next: null
            }, l = et.updateQueue, l === null && (l = _a(), et.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, l.lastEffect = t), t;
        }
        function yo() {
            return Qt().memoizedState;
        }
        function Ba(t, l, e, n) {
            var u = fl();
            et.flags |= t, u.memoizedState = Cn(1 | l, {
                destroy: void 0
            }, e, n === void 0 ? null : n);
        }
        function Oa(t, l, e, n) {
            var u = Qt();
            n = n === void 0 ? null : n;
            var a = u.memoizedState.inst;
            Bt !== null && n !== null && ic(n, Bt.memoizedState.deps) ? u.memoizedState = Cn(l, a, e, n) : (et.flags |= t, u.memoizedState = Cn(1 | l, a, e, n));
        }
        function mo(t, l) {
            Ba(8390656, 8, t, l);
        }
        function vc(t, l) {
            Oa(2048, 8, t, l);
        }
        function td(t) {
            et.flags |= 4;
            var l = et.updateQueue;
            if (l === null) l = _a(), et.updateQueue = l, l.events = [
                t
            ];
            else {
                var e = l.events;
                e === null ? l.events = [
                    t
                ] : e.push(t);
            }
        }
        function vo(t) {
            var l = Qt().memoizedState;
            return td({
                ref: l,
                nextImpl: t
            }), function() {
                if ((At & 2) !== 0) throw Error(m(440));
                return l.impl.apply(void 0, arguments);
            };
        }
        function go(t, l) {
            return Oa(4, 2, t, l);
        }
        function po(t, l) {
            return Oa(4, 4, t, l);
        }
        function So(t, l) {
            if (typeof l == "function") {
                t = t();
                var e = l(t);
                return function() {
                    typeof e == "function" ? e() : l(null);
                };
            }
            if (l != null) return t = t(), l.current = t, function() {
                l.current = null;
            };
        }
        function Eo(t, l, e) {
            e = e != null ? e.concat([
                t
            ]) : null, Oa(4, 4, So.bind(null, l, t), e);
        }
        function gc() {}
        function bo(t, l) {
            var e = Qt();
            l = l === void 0 ? null : l;
            var n = e.memoizedState;
            return l !== null && ic(l, n[1]) ? n[0] : (e.memoizedState = [
                t,
                l
            ], t);
        }
        function Ao(t, l) {
            var e = Qt();
            l = l === void 0 ? null : l;
            var n = e.memoizedState;
            if (l !== null && ic(l, n[1])) return n[0];
            if (n = t(), tn) {
                bt(!0);
                try {
                    t();
                } finally{
                    bt(!1);
                }
            }
            return e.memoizedState = [
                n,
                l
            ], n;
        }
        function pc(t, l, e) {
            return e === void 0 || (ee & 1073741824) !== 0 && (ot & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Ts(), et.lanes |= t, Oe |= t, e);
        }
        function To(t, l, e, n) {
            return Sl(e, l) ? e : Mn.current !== null ? (t = pc(t, e, n), Sl(t, l) || (Kt = !0), t) : (ee & 42) === 0 || (ee & 1073741824) !== 0 && (ot & 261930) === 0 ? (Kt = !0, t.memoizedState = e) : (t = Ts(), et.lanes |= t, Oe |= t, l);
        }
        function zo(t, l, e, n, u) {
            var a = H.p;
            H.p = a !== 0 && 8 > a ? a : 8;
            var f = _.T, r = {};
            _.T = r, bc(t, !1, l, e);
            try {
                var h = u(), E = _.S;
                if (E !== null && E(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
                    var B = Wh(h, n);
                    bu(t, l, B, _l(t));
                } else bu(t, l, n, _l(t));
            } catch (N) {
                bu(t, l, {
                    then: function() {},
                    status: "rejected",
                    reason: N
                }, _l());
            } finally{
                H.p = a, f !== null && r.types !== null && (f.types = r.types), _.T = f;
            }
        }
        function ld() {}
        function Sc(t, l, e, n) {
            if (t.tag !== 5) throw Error(m(476));
            var u = _o(t).queue;
            zo(t, u, l, W, e === null ? ld : function() {
                return xo(t), e(n);
            });
        }
        function _o(t) {
            var l = t.memoizedState;
            if (l !== null) return l;
            l = {
                memoizedState: W,
                baseState: W,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: ne,
                    lastRenderedState: W
                },
                next: null
            };
            var e = {};
            return l.next = {
                memoizedState: e,
                baseState: e,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: ne,
                    lastRenderedState: e
                },
                next: null
            }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
        }
        function xo(t) {
            var l = _o(t);
            l.next === null && (l = t.alternate.memoizedState), bu(t, l.next.queue, {}, _l());
        }
        function Ec() {
            return el(wu);
        }
        function Uo() {
            return Qt().memoizedState;
        }
        function Bo() {
            return Qt().memoizedState;
        }
        function ed(t) {
            for(var l = t.return; l !== null;){
                switch(l.tag){
                    case 24:
                    case 3:
                        var e = _l();
                        t = Te(e);
                        var n = ze(l, t, e);
                        n !== null && (gl(n, l, e), vu(n, l, e)), l = {
                            cache: Wi()
                        }, t.payload = l;
                        return;
                }
                l = l.return;
            }
        }
        function nd(t, l, e) {
            var n = _l();
            e = {
                lane: n,
                revertLane: 0,
                gesture: null,
                action: e,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ma(t) ? Mo(l, e) : (e = wi(t, l, e, n), e !== null && (gl(e, t, n), Do(e, l, n)));
        }
        function Oo(t, l, e) {
            var n = _l();
            bu(t, l, e, n);
        }
        function bu(t, l, e, n) {
            var u = {
                lane: n,
                revertLane: 0,
                gesture: null,
                action: e,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Ma(t)) Mo(l, u);
            else {
                var a = t.alternate;
                if (t.lanes === 0 && (a === null || a.lanes === 0) && (a = l.lastRenderedReducer, a !== null)) try {
                    var f = l.lastRenderedState, r = a(f, e);
                    if (u.hasEagerState = !0, u.eagerState = r, Sl(r, f)) return oa(t, l, u, 0), Dt === null && ra(), !1;
                } catch  {} finally{}
                if (e = wi(t, l, u, n), e !== null) return gl(e, t, n), Do(e, l, n), !0;
            }
            return !1;
        }
        function bc(t, l, e, n) {
            if (n = {
                lane: 2,
                revertLane: Pc(),
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ma(t)) {
                if (l) throw Error(m(479));
            } else l = wi(t, e, n, 2), l !== null && gl(l, t, 2);
        }
        function Ma(t) {
            var l = t.alternate;
            return t === et || l !== null && l === et;
        }
        function Mo(t, l) {
            Dn = Ta = !0;
            var e = t.pending;
            e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
        }
        function Do(t, l, e) {
            if ((e & 4194048) !== 0) {
                var n = l.lanes;
                n &= t.pendingLanes, e |= n, l.lanes = e, Hf(t, e);
            }
        }
        var Au = {
            readContext: el,
            use: xa,
            useCallback: Gt,
            useContext: Gt,
            useEffect: Gt,
            useImperativeHandle: Gt,
            useLayoutEffect: Gt,
            useInsertionEffect: Gt,
            useMemo: Gt,
            useReducer: Gt,
            useRef: Gt,
            useState: Gt,
            useDebugValue: Gt,
            useDeferredValue: Gt,
            useTransition: Gt,
            useSyncExternalStore: Gt,
            useId: Gt,
            useHostTransitionStatus: Gt,
            useFormState: Gt,
            useActionState: Gt,
            useOptimistic: Gt,
            useMemoCache: Gt,
            useCacheRefresh: Gt
        };
        Au.useEffectEvent = Gt;
        var No = {
            readContext: el,
            use: xa,
            useCallback: function(t, l) {
                return fl().memoizedState = [
                    t,
                    l === void 0 ? null : l
                ], t;
            },
            useContext: el,
            useEffect: mo,
            useImperativeHandle: function(t, l, e) {
                e = e != null ? e.concat([
                    t
                ]) : null, Ba(4194308, 4, So.bind(null, l, t), e);
            },
            useLayoutEffect: function(t, l) {
                return Ba(4194308, 4, t, l);
            },
            useInsertionEffect: function(t, l) {
                Ba(4, 2, t, l);
            },
            useMemo: function(t, l) {
                var e = fl();
                l = l === void 0 ? null : l;
                var n = t();
                if (tn) {
                    bt(!0);
                    try {
                        t();
                    } finally{
                        bt(!1);
                    }
                }
                return e.memoizedState = [
                    n,
                    l
                ], n;
            },
            useReducer: function(t, l, e) {
                var n = fl();
                if (e !== void 0) {
                    var u = e(l);
                    if (tn) {
                        bt(!0);
                        try {
                            e(l);
                        } finally{
                            bt(!1);
                        }
                    }
                } else u = l;
                return n.memoizedState = n.baseState = u, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: u
                }, n.queue = t, t = t.dispatch = nd.bind(null, et, t), [
                    n.memoizedState,
                    t
                ];
            },
            useRef: function(t) {
                var l = fl();
                return t = {
                    current: t
                }, l.memoizedState = t;
            },
            useState: function(t) {
                t = yc(t);
                var l = t.queue, e = Oo.bind(null, et, l);
                return l.dispatch = e, [
                    t.memoizedState,
                    e
                ];
            },
            useDebugValue: gc,
            useDeferredValue: function(t, l) {
                var e = fl();
                return pc(e, t, l);
            },
            useTransition: function() {
                var t = yc(!1);
                return t = zo.bind(null, et, t.queue, !0, !1), fl().memoizedState = t, [
                    !1,
                    t
                ];
            },
            useSyncExternalStore: function(t, l, e) {
                var n = et, u = fl();
                if (ht) {
                    if (e === void 0) throw Error(m(407));
                    e = e();
                } else {
                    if (e = l(), Dt === null) throw Error(m(349));
                    (ot & 127) !== 0 || Ir(n, l, e);
                }
                u.memoizedState = e;
                var a = {
                    value: e,
                    getSnapshot: l
                };
                return u.queue = a, mo(to.bind(null, n, a, t), [
                    t
                ]), n.flags |= 2048, Cn(9, {
                    destroy: void 0
                }, Pr.bind(null, n, a, e, l), null), e;
            },
            useId: function() {
                var t = fl(), l = Dt.identifierPrefix;
                if (ht) {
                    var e = Vl, n = Zl;
                    e = (n & ~(1 << 32 - ct(n) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = za++, 0 < e && (l += "H" + e.toString(32)), l += "_";
                } else e = $h++, l = "_" + l + "r_" + e.toString(32) + "_";
                return t.memoizedState = l;
            },
            useHostTransitionStatus: Ec,
            useFormState: ro,
            useActionState: ro,
            useOptimistic: function(t) {
                var l = fl();
                l.memoizedState = l.baseState = t;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return l.queue = e, l = bc.bind(null, et, !0, e), e.dispatch = l, [
                    t,
                    l
                ];
            },
            useMemoCache: sc,
            useCacheRefresh: function() {
                return fl().memoizedState = ed.bind(null, et);
            },
            useEffectEvent: function(t) {
                var l = fl(), e = {
                    impl: t
                };
                return l.memoizedState = e, function() {
                    if ((At & 2) !== 0) throw Error(m(440));
                    return e.impl.apply(void 0, arguments);
                };
            }
        }, Ac = {
            readContext: el,
            use: xa,
            useCallback: bo,
            useContext: el,
            useEffect: vc,
            useImperativeHandle: Eo,
            useInsertionEffect: go,
            useLayoutEffect: po,
            useMemo: Ao,
            useReducer: Ua,
            useRef: yo,
            useState: function() {
                return Ua(ne);
            },
            useDebugValue: gc,
            useDeferredValue: function(t, l) {
                var e = Qt();
                return To(e, Bt.memoizedState, t, l);
            },
            useTransition: function() {
                var t = Ua(ne)[0], l = Qt().memoizedState;
                return [
                    typeof t == "boolean" ? t : Eu(t),
                    l
                ];
            },
            useSyncExternalStore: kr,
            useId: Uo,
            useHostTransitionStatus: Ec,
            useFormState: oo,
            useActionState: oo,
            useOptimistic: function(t, l) {
                var e = Qt();
                return no(e, Bt, t, l);
            },
            useMemoCache: sc,
            useCacheRefresh: Bo
        };
        Ac.useEffectEvent = vo;
        var Co = {
            readContext: el,
            use: xa,
            useCallback: bo,
            useContext: el,
            useEffect: vc,
            useImperativeHandle: Eo,
            useInsertionEffect: go,
            useLayoutEffect: po,
            useMemo: Ao,
            useReducer: dc,
            useRef: yo,
            useState: function() {
                return dc(ne);
            },
            useDebugValue: gc,
            useDeferredValue: function(t, l) {
                var e = Qt();
                return Bt === null ? pc(e, t, l) : To(e, Bt.memoizedState, t, l);
            },
            useTransition: function() {
                var t = dc(ne)[0], l = Qt().memoizedState;
                return [
                    typeof t == "boolean" ? t : Eu(t),
                    l
                ];
            },
            useSyncExternalStore: kr,
            useId: Uo,
            useHostTransitionStatus: Ec,
            useFormState: ho,
            useActionState: ho,
            useOptimistic: function(t, l) {
                var e = Qt();
                return Bt !== null ? no(e, Bt, t, l) : (e.baseState = t, [
                    t,
                    e.queue.dispatch
                ]);
            },
            useMemoCache: sc,
            useCacheRefresh: Bo
        };
        Co.useEffectEvent = vo;
        function Tc(t, l, e, n) {
            l = t.memoizedState, e = e(n, l), e = e == null ? l : C({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
        }
        var zc = {
            enqueueSetState: function(t, l, e) {
                t = t._reactInternals;
                var n = _l(), u = Te(n);
                u.payload = l, e != null && (u.callback = e), l = ze(t, u, n), l !== null && (gl(l, t, n), vu(l, t, n));
            },
            enqueueReplaceState: function(t, l, e) {
                t = t._reactInternals;
                var n = _l(), u = Te(n);
                u.tag = 1, u.payload = l, e != null && (u.callback = e), l = ze(t, u, n), l !== null && (gl(l, t, n), vu(l, t, n));
            },
            enqueueForceUpdate: function(t, l) {
                t = t._reactInternals;
                var e = _l(), n = Te(e);
                n.tag = 2, l != null && (n.callback = l), l = ze(t, n, e), l !== null && (gl(l, t, e), vu(l, t, e));
            }
        };
        function Ro(t, l, e, n, u, a, f) {
            return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, a, f) : l.prototype && l.prototype.isPureReactComponent ? !fu(e, n) || !fu(u, a) : !0;
        }
        function Ho(t, l, e, n) {
            t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, n), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, n), l.state !== t && zc.enqueueReplaceState(l, l.state, null);
        }
        function ln(t, l) {
            var e = l;
            if ("ref" in l) {
                e = {};
                for(var n in l)n !== "ref" && (e[n] = l[n]);
            }
            if (t = t.defaultProps) {
                e === l && (e = C({}, e));
                for(var u in t)e[u] === void 0 && (e[u] = t[u]);
            }
            return e;
        }
        function jo(t) {
            fa(t);
        }
        function qo(t) {
            console.error(t);
        }
        function wo(t) {
            fa(t);
        }
        function Da(t, l) {
            try {
                var e = t.onUncaughtError;
                e(l.value, {
                    componentStack: l.stack
                });
            } catch (n) {
                setTimeout(function() {
                    throw n;
                });
            }
        }
        function Yo(t, l, e) {
            try {
                var n = t.onCaughtError;
                n(e.value, {
                    componentStack: e.stack,
                    errorBoundary: l.tag === 1 ? l.stateNode : null
                });
            } catch (u) {
                setTimeout(function() {
                    throw u;
                });
            }
        }
        function _c(t, l, e) {
            return e = Te(e), e.tag = 3, e.payload = {
                element: null
            }, e.callback = function() {
                Da(t, l);
            }, e;
        }
        function Go(t) {
            return t = Te(t), t.tag = 3, t;
        }
        function Lo(t, l, e, n) {
            var u = e.type.getDerivedStateFromError;
            if (typeof u == "function") {
                var a = n.value;
                t.payload = function() {
                    return u(a);
                }, t.callback = function() {
                    Yo(l, e, n);
                };
            }
            var f = e.stateNode;
            f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
                Yo(l, e, n), typeof u != "function" && (Me === null ? Me = new Set([
                    this
                ]) : Me.add(this));
                var r = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: r !== null ? r : ""
                });
            });
        }
        function ud(t, l, e, n, u) {
            if (e.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (l = e.alternate, l !== null && _n(l, e, u, !0), e = bl.current, e !== null) {
                    switch(e.tag){
                        case 31:
                        case 13:
                            return Rl === null ? Qa() : e.alternate === null && Lt === 0 && (Lt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, n === pa ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = new Set([
                                n
                            ]) : l.add(n), $c(t, n, u)), !1;
                        case 22:
                            return e.flags |= 65536, n === pa ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = new Set([
                                n
                            ]) : e.add(n)), $c(t, n, u)), !1;
                    }
                    throw Error(m(435, e.tag));
                }
                return $c(t, n, u), Qa(), !1;
            }
            if (ht) return l = bl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, n !== Zi && (t = Error(m(422), {
                cause: n
            }), su(Ml(t, e)))) : (n !== Zi && (l = Error(m(423), {
                cause: n
            }), su(Ml(l, e))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, n = Ml(n, e), u = _c(t.stateNode, n, u), lc(t, u), Lt !== 4 && (Lt = 2)), !1;
            var a = Error(m(520), {
                cause: n
            });
            if (a = Ml(a, e), Mu === null ? Mu = [
                a
            ] : Mu.push(a), Lt !== 4 && (Lt = 2), l === null) return !0;
            n = Ml(n, e), e = l;
            do {
                switch(e.tag){
                    case 3:
                        return e.flags |= 65536, t = u & -u, e.lanes |= t, t = _c(e.stateNode, n, t), lc(e, t), !1;
                    case 1:
                        if (l = e.type, a = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (Me === null || !Me.has(a)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Go(u), Lo(u, t, e, n), lc(e, u), !1;
                }
                e = e.return;
            }while (e !== null);
            return !1;
        }
        var xc = Error(m(461)), Kt = !1;
        function nl(t, l, e, n) {
            l.child = t === null ? Zr(l, null, e, n) : Pe(l, t.child, e, n);
        }
        function Xo(t, l, e, n, u) {
            e = e.render;
            var a = l.ref;
            if ("ref" in n) {
                var f = {};
                for(var r in n)r !== "ref" && (f[r] = n[r]);
            } else f = n;
            return We(l), n = cc(t, l, e, f, a, u), r = fc(), t !== null && !Kt ? (rc(t, l, u), ue(t, l, u)) : (ht && r && Xi(l), l.flags |= 1, nl(t, l, n, u), l.child);
        }
        function Qo(t, l, e, n, u) {
            if (t === null) {
                var a = e.type;
                return typeof a == "function" && !Yi(a) && a.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = a, Zo(t, l, a, n, u)) : (t = ha(e.type, null, n, l, l.mode, u), t.ref = l.ref, t.return = l, l.child = t);
            }
            if (a = t.child, !Rc(t, u)) {
                var f = a.memoizedProps;
                if (e = e.compare, e = e !== null ? e : fu, e(f, n) && t.ref === l.ref) return ue(t, l, u);
            }
            return l.flags |= 1, t = Il(a, n), t.ref = l.ref, t.return = l, l.child = t;
        }
        function Zo(t, l, e, n, u) {
            if (t !== null) {
                var a = t.memoizedProps;
                if (fu(a, n) && t.ref === l.ref) if (Kt = !1, l.pendingProps = n = a, Rc(t, u)) (t.flags & 131072) !== 0 && (Kt = !0);
                else return l.lanes = t.lanes, ue(t, l, u);
            }
            return Uc(t, l, e, n, u);
        }
        function Vo(t, l, e, n) {
            var u = n.children, a = t !== null ? t.memoizedState : null;
            if (t === null && l.stateNode === null && (l.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), n.mode === "hidden") {
                if ((l.flags & 128) !== 0) {
                    if (a = a !== null ? a.baseLanes | e : e, t !== null) {
                        for(n = l.child = t.child, u = 0; n !== null;)u = u | n.lanes | n.childLanes, n = n.sibling;
                        n = u & ~a;
                    } else n = 0, l.child = null;
                    return Ko(t, l, a, e, n);
                }
                if ((e & 536870912) !== 0) l.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, t !== null && va(l, a !== null ? a.cachePool : null), a !== null ? Jr(l, a) : nc(), Fr(l);
                else return n = l.lanes = 536870912, Ko(t, l, a !== null ? a.baseLanes | e : e, e, n);
            } else a !== null ? (va(l, a.cachePool), Jr(l, a), xe(), l.memoizedState = null) : (t !== null && va(l, null), nc(), xe());
            return nl(t, l, u, e), l.child;
        }
        function Tu(t, l) {
            return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), l.sibling;
        }
        function Ko(t, l, e, n, u) {
            var a = ki();
            return a = a === null ? null : {
                parent: Zt._currentValue,
                pool: a
            }, l.memoizedState = {
                baseLanes: e,
                cachePool: a
            }, t !== null && va(l, null), nc(), Fr(l), t !== null && _n(t, l, n, !0), l.childLanes = u, null;
        }
        function Na(t, l) {
            return l = Ra({
                mode: l.mode,
                children: l.children
            }, t.mode), l.ref = t.ref, t.child = l, l.return = t, l;
        }
        function Jo(t, l, e) {
            return Pe(l, t.child, null, e), t = Na(l, l.pendingProps), t.flags |= 2, Al(l), l.memoizedState = null, t;
        }
        function ad(t, l, e) {
            var n = l.pendingProps, u = (l.flags & 128) !== 0;
            if (l.flags &= -129, t === null) {
                if (ht) {
                    if (n.mode === "hidden") return t = Na(l, n), l.lanes = 536870912, Tu(null, t);
                    if (ac(l), (t = Ct) ? (t = a0(t, Cl), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
                        dehydrated: t,
                        treeContext: pe !== null ? {
                            id: Zl,
                            overflow: Vl
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, e = Or(t), e.return = l, l.child = e, ll = l, Ct = null)) : t = null, t === null) throw Ee(l);
                    return l.lanes = 536870912, null;
                }
                return Na(l, n);
            }
            var a = t.memoizedState;
            if (a !== null) {
                var f = a.dehydrated;
                if (ac(l), u) if (l.flags & 256) l.flags &= -257, l = Jo(t, l, e);
                else if (l.memoizedState !== null) l.child = t.child, l.flags |= 128, l = null;
                else throw Error(m(558));
                else if (Kt || _n(t, l, e, !1), u = (e & t.childLanes) !== 0, Kt || u) {
                    if (n = Dt, n !== null && (f = jf(n, e), f !== 0 && f !== a.retryLane)) throw a.retryLane = f, Ve(t, f), gl(n, t, f), xc;
                    Qa(), l = Jo(t, l, e);
                } else t = a.treeContext, Ct = Hl(f.nextSibling), ll = l, ht = !0, Se = null, Cl = !1, t !== null && Nr(l, t), l = Na(l, n), l.flags |= 4096;
                return l;
            }
            return t = Il(t.child, {
                mode: n.mode,
                children: n.children
            }), t.ref = l.ref, l.child = t, t.return = l, t;
        }
        function Ca(t, l) {
            var e = l.ref;
            if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
            else {
                if (typeof e != "function" && typeof e != "object") throw Error(m(284));
                (t === null || t.ref !== e) && (l.flags |= 4194816);
            }
        }
        function Uc(t, l, e, n, u) {
            return We(l), e = cc(t, l, e, n, void 0, u), n = fc(), t !== null && !Kt ? (rc(t, l, u), ue(t, l, u)) : (ht && n && Xi(l), l.flags |= 1, nl(t, l, e, u), l.child);
        }
        function Fo(t, l, e, n, u, a) {
            return We(l), l.updateQueue = null, e = $r(l, n, e, u), Wr(t), n = fc(), t !== null && !Kt ? (rc(t, l, a), ue(t, l, a)) : (ht && n && Xi(l), l.flags |= 1, nl(t, l, e, a), l.child);
        }
        function Wo(t, l, e, n, u) {
            if (We(l), l.stateNode === null) {
                var a = bn, f = e.contextType;
                typeof f == "object" && f !== null && (a = el(f)), a = new e(n, a), l.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = zc, l.stateNode = a, a._reactInternals = l, a = l.stateNode, a.props = n, a.state = l.memoizedState, a.refs = {}, Pi(l), f = e.contextType, a.context = typeof f == "object" && f !== null ? el(f) : bn, a.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (Tc(l, e, f, n), a.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (f = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), f !== a.state && zc.enqueueReplaceState(a, a.state, null), pu(l, n, a, u), gu(), a.state = l.memoizedState), typeof a.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
            } else if (t === null) {
                a = l.stateNode;
                var r = l.memoizedProps, h = ln(e, r);
                a.props = h;
                var E = a.context, B = e.contextType;
                f = bn, typeof B == "object" && B !== null && (f = el(B));
                var N = e.getDerivedStateFromProps;
                B = typeof N == "function" || typeof a.getSnapshotBeforeUpdate == "function", r = l.pendingProps !== r, B || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (r || E !== f) && Ho(l, a, n, f), Ae = !1;
                var b = l.memoizedState;
                a.state = b, pu(l, n, a, u), gu(), E = l.memoizedState, r || b !== E || Ae ? (typeof N == "function" && (Tc(l, e, N, n), E = l.memoizedState), (h = Ae || Ro(l, e, h, n, b, E, f)) ? (B || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = E), a.props = n, a.state = E, a.context = f, n = h) : (typeof a.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
            } else {
                a = l.stateNode, tc(t, l), f = l.memoizedProps, B = ln(e, f), a.props = B, N = l.pendingProps, b = a.context, E = e.contextType, h = bn, typeof E == "object" && E !== null && (h = el(E)), r = e.getDerivedStateFromProps, (E = typeof r == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (f !== N || b !== h) && Ho(l, a, n, h), Ae = !1, b = l.memoizedState, a.state = b, pu(l, n, a, u), gu();
                var x = l.memoizedState;
                f !== N || b !== x || Ae || t !== null && t.dependencies !== null && ya(t.dependencies) ? (typeof r == "function" && (Tc(l, e, r, n), x = l.memoizedState), (B = Ae || Ro(l, e, B, n, b, x, h) || t !== null && t.dependencies !== null && ya(t.dependencies)) ? (E || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, x, h), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, x, h)), typeof a.componentDidUpdate == "function" && (l.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || f === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = x), a.props = n, a.state = x, a.context = h, n = B) : (typeof a.componentDidUpdate != "function" || f === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), n = !1);
            }
            return a = n, Ca(t, l), n = (l.flags & 128) !== 0, a || n ? (a = l.stateNode, e = n && typeof e.getDerivedStateFromError != "function" ? null : a.render(), l.flags |= 1, t !== null && n ? (l.child = Pe(l, t.child, null, u), l.child = Pe(l, null, e, u)) : nl(t, l, e, u), l.memoizedState = a.state, t = l.child) : t = ue(t, l, u), t;
        }
        function $o(t, l, e, n) {
            return Je(), l.flags |= 256, nl(t, l, e, n), l.child;
        }
        var Bc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Oc(t) {
            return {
                baseLanes: t,
                cachePool: wr()
            };
        }
        function Mc(t, l, e) {
            return t = t !== null ? t.childLanes & ~e : 0, l && (t |= zl), t;
        }
        function ko(t, l, e) {
            var n = l.pendingProps, u = !1, a = (l.flags & 128) !== 0, f;
            if ((f = a) || (f = t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0), f && (u = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
                if (ht) {
                    if (u ? _e(l) : xe(), (t = Ct) ? (t = a0(t, Cl), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
                        dehydrated: t,
                        treeContext: pe !== null ? {
                            id: Zl,
                            overflow: Vl
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, e = Or(t), e.return = l, l.child = e, ll = l, Ct = null)) : t = null, t === null) throw Ee(l);
                    return df(t) ? l.lanes = 32 : l.lanes = 536870912, null;
                }
                var r = n.children;
                return n = n.fallback, u ? (xe(), u = l.mode, r = Ra({
                    mode: "hidden",
                    children: r
                }, u), n = Ke(n, u, e, null), r.return = l, n.return = l, r.sibling = n, l.child = r, n = l.child, n.memoizedState = Oc(e), n.childLanes = Mc(t, f, e), l.memoizedState = Bc, Tu(null, n)) : (_e(l), Dc(l, r));
            }
            var h = t.memoizedState;
            if (h !== null && (r = h.dehydrated, r !== null)) {
                if (a) l.flags & 256 ? (_e(l), l.flags &= -257, l = Nc(t, l, e)) : l.memoizedState !== null ? (xe(), l.child = t.child, l.flags |= 128, l = null) : (xe(), r = n.fallback, u = l.mode, n = Ra({
                    mode: "visible",
                    children: n.children
                }, u), r = Ke(r, u, e, null), r.flags |= 2, n.return = l, r.return = l, n.sibling = r, l.child = n, Pe(l, t.child, null, e), n = l.child, n.memoizedState = Oc(e), n.childLanes = Mc(t, f, e), l.memoizedState = Bc, l = Tu(null, n));
                else if (_e(l), df(r)) {
                    if (f = r.nextSibling && r.nextSibling.dataset, f) var E = f.dgst;
                    f = E, n = Error(m(419)), n.stack = "", n.digest = f, su({
                        value: n,
                        source: null,
                        stack: null
                    }), l = Nc(t, l, e);
                } else if (Kt || _n(t, l, e, !1), f = (e & t.childLanes) !== 0, Kt || f) {
                    if (f = Dt, f !== null && (n = jf(f, e), n !== 0 && n !== h.retryLane)) throw h.retryLane = n, Ve(t, n), gl(f, t, n), xc;
                    hf(r) || Qa(), l = Nc(t, l, e);
                } else hf(r) ? (l.flags |= 192, l.child = t.child, l = null) : (t = h.treeContext, Ct = Hl(r.nextSibling), ll = l, ht = !0, Se = null, Cl = !1, t !== null && Nr(l, t), l = Dc(l, n.children), l.flags |= 4096);
                return l;
            }
            return u ? (xe(), r = n.fallback, u = l.mode, h = t.child, E = h.sibling, n = Il(h, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = h.subtreeFlags & 65011712, E !== null ? r = Il(E, r) : (r = Ke(r, u, e, null), r.flags |= 2), r.return = l, n.return = l, n.sibling = r, l.child = n, Tu(null, n), n = l.child, r = t.child.memoizedState, r === null ? r = Oc(e) : (u = r.cachePool, u !== null ? (h = Zt._currentValue, u = u.parent !== h ? {
                parent: h,
                pool: h
            } : u) : u = wr(), r = {
                baseLanes: r.baseLanes | e,
                cachePool: u
            }), n.memoizedState = r, n.childLanes = Mc(t, f, e), l.memoizedState = Bc, Tu(t.child, n)) : (_e(l), e = t.child, t = e.sibling, e = Il(e, {
                mode: "visible",
                children: n.children
            }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [
                t
            ], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
        }
        function Dc(t, l) {
            return l = Ra({
                mode: "visible",
                children: l
            }, t.mode), l.return = t, t.child = l;
        }
        function Ra(t, l) {
            return t = El(22, t, null, l), t.lanes = 0, t;
        }
        function Nc(t, l, e) {
            return Pe(l, t.child, null, e), t = Dc(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
        }
        function Io(t, l, e) {
            t.lanes |= l;
            var n = t.alternate;
            n !== null && (n.lanes |= l), Ji(t.return, l, e);
        }
        function Cc(t, l, e, n, u, a) {
            var f = t.memoizedState;
            f === null ? t.memoizedState = {
                isBackwards: l,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: e,
                tailMode: u,
                treeForkCount: a
            } : (f.isBackwards = l, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = e, f.tailMode = u, f.treeForkCount = a);
        }
        function Po(t, l, e) {
            var n = l.pendingProps, u = n.revealOrder, a = n.tail;
            n = n.children;
            var f = Xt.current, r = (f & 2) !== 0;
            if (r ? (f = f & 1 | 2, l.flags |= 128) : f &= 1, Y(Xt, f), nl(t, l, n, e), n = ht ? ou : 0, !r && t !== null && (t.flags & 128) !== 0) t: for(t = l.child; t !== null;){
                if (t.tag === 13) t.memoizedState !== null && Io(t, e, l);
                else if (t.tag === 19) Io(t, e, l);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === l) break t;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === l) break t;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            switch(u){
                case "forwards":
                    for(e = l.child, u = null; e !== null;)t = e.alternate, t !== null && Aa(t) === null && (u = e), e = e.sibling;
                    e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), Cc(l, !1, u, e, a, n);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for(e = null, u = l.child, l.child = null; u !== null;){
                        if (t = u.alternate, t !== null && Aa(t) === null) {
                            l.child = u;
                            break;
                        }
                        t = u.sibling, u.sibling = e, e = u, u = t;
                    }
                    Cc(l, !0, e, null, a, n);
                    break;
                case "together":
                    Cc(l, !1, null, null, void 0, n);
                    break;
                default:
                    l.memoizedState = null;
            }
            return l.child;
        }
        function ue(t, l, e) {
            if (t !== null && (l.dependencies = t.dependencies), Oe |= l.lanes, (e & l.childLanes) === 0) if (t !== null) {
                if (_n(t, l, e, !1), (e & l.childLanes) === 0) return null;
            } else return null;
            if (t !== null && l.child !== t.child) throw Error(m(153));
            if (l.child !== null) {
                for(t = l.child, e = Il(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null;)t = t.sibling, e = e.sibling = Il(t, t.pendingProps), e.return = l;
                e.sibling = null;
            }
            return l.child;
        }
        function Rc(t, l) {
            return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ya(t)));
        }
        function id(t, l, e) {
            switch(l.tag){
                case 3:
                    Yt(l, l.stateNode.containerInfo), be(l, Zt, t.memoizedState.cache), Je();
                    break;
                case 27:
                case 5:
                    ye(l);
                    break;
                case 4:
                    Yt(l, l.stateNode.containerInfo);
                    break;
                case 10:
                    be(l, l.type, l.memoizedProps.value);
                    break;
                case 31:
                    if (l.memoizedState !== null) return l.flags |= 128, ac(l), null;
                    break;
                case 13:
                    var n = l.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (_e(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? ko(t, l, e) : (_e(l), t = ue(t, l, e), t !== null ? t.sibling : null);
                    _e(l);
                    break;
                case 19:
                    var u = (t.flags & 128) !== 0;
                    if (n = (e & l.childLanes) !== 0, n || (_n(t, l, e, !1), n = (e & l.childLanes) !== 0), u) {
                        if (n) return Po(t, l, e);
                        l.flags |= 128;
                    }
                    if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Y(Xt, Xt.current), n) break;
                    return null;
                case 22:
                    return l.lanes = 0, Vo(t, l, e, l.pendingProps);
                case 24:
                    be(l, Zt, t.memoizedState.cache);
            }
            return ue(t, l, e);
        }
        function ts(t, l, e) {
            if (t !== null) if (t.memoizedProps !== l.pendingProps) Kt = !0;
            else {
                if (!Rc(t, e) && (l.flags & 128) === 0) return Kt = !1, id(t, l, e);
                Kt = (t.flags & 131072) !== 0;
            }
            else Kt = !1, ht && (l.flags & 1048576) !== 0 && Dr(l, ou, l.index);
            switch(l.lanes = 0, l.tag){
                case 16:
                    t: {
                        var n = l.pendingProps;
                        if (t = ke(l.elementType), l.type = t, typeof t == "function") Yi(t) ? (n = ln(t, n), l.tag = 1, l = Wo(null, l, t, n, e)) : (l.tag = 0, l = Uc(null, l, t, n, e));
                        else {
                            if (t != null) {
                                var u = t.$$typeof;
                                if (u === wt) {
                                    l.tag = 11, l = Xo(null, l, t, n, e);
                                    break t;
                                } else if (u === nt) {
                                    l.tag = 14, l = Qo(null, l, t, n, e);
                                    break t;
                                }
                            }
                            throw l = al(t) || t, Error(m(306, l, ""));
                        }
                    }
                    return l;
                case 0:
                    return Uc(t, l, l.type, l.pendingProps, e);
                case 1:
                    return n = l.type, u = ln(n, l.pendingProps), Wo(t, l, n, u, e);
                case 3:
                    t: {
                        if (Yt(l, l.stateNode.containerInfo), t === null) throw Error(m(387));
                        n = l.pendingProps;
                        var a = l.memoizedState;
                        u = a.element, tc(t, l), pu(l, n, null, e);
                        var f = l.memoizedState;
                        if (n = f.cache, be(l, Zt, n), n !== a.cache && Fi(l, [
                            Zt
                        ], e, !0), gu(), n = f.element, a.isDehydrated) if (a = {
                            element: n,
                            isDehydrated: !1,
                            cache: f.cache
                        }, l.updateQueue.baseState = a, l.memoizedState = a, l.flags & 256) {
                            l = $o(t, l, n, e);
                            break t;
                        } else if (n !== u) {
                            u = Ml(Error(m(424)), l), su(u), l = $o(t, l, n, e);
                            break t;
                        } else {
                            switch(t = l.stateNode.containerInfo, t.nodeType){
                                case 9:
                                    t = t.body;
                                    break;
                                default:
                                    t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                            }
                            for(Ct = Hl(t.firstChild), ll = l, ht = !0, Se = null, Cl = !0, e = Zr(l, null, n, e), l.child = e; e;)e.flags = e.flags & -3 | 4096, e = e.sibling;
                        }
                        else {
                            if (Je(), n === u) {
                                l = ue(t, l, e);
                                break t;
                            }
                            nl(t, l, n, e);
                        }
                        l = l.child;
                    }
                    return l;
                case 26:
                    return Ca(t, l), t === null ? (e = s0(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : ht || (e = l.type, t = l.pendingProps, n = $a(at.current).createElement(e), n[tl] = l, n[sl] = t, ul(n, e, t), It(n), l.stateNode = n) : l.memoizedState = s0(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
                case 27:
                    return ye(l), t === null && ht && (n = l.stateNode = f0(l.type, l.pendingProps, at.current), ll = l, Cl = !0, u = Ct, Re(l.type) ? (yf = u, Ct = Hl(n.firstChild)) : Ct = u), nl(t, l, l.pendingProps.children, e), Ca(t, l), t === null && (l.flags |= 4194304), l.child;
                case 5:
                    return t === null && ht && ((u = n = Ct) && (n = jd(n, l.type, l.pendingProps, Cl), n !== null ? (l.stateNode = n, ll = l, Ct = Hl(n.firstChild), Cl = !1, u = !0) : u = !1), u || Ee(l)), ye(l), u = l.type, a = l.pendingProps, f = t !== null ? t.memoizedProps : null, n = a.children, rf(u, a) ? n = null : f !== null && rf(u, f) && (l.flags |= 32), l.memoizedState !== null && (u = cc(t, l, kh, null, null, e), wu._currentValue = u), Ca(t, l), nl(t, l, n, e), l.child;
                case 6:
                    return t === null && ht && ((t = e = Ct) && (e = qd(e, l.pendingProps, Cl), e !== null ? (l.stateNode = e, ll = l, Ct = null, t = !0) : t = !1), t || Ee(l)), null;
                case 13:
                    return ko(t, l, e);
                case 4:
                    return Yt(l, l.stateNode.containerInfo), n = l.pendingProps, t === null ? l.child = Pe(l, null, n, e) : nl(t, l, n, e), l.child;
                case 11:
                    return Xo(t, l, l.type, l.pendingProps, e);
                case 7:
                    return nl(t, l, l.pendingProps, e), l.child;
                case 8:
                    return nl(t, l, l.pendingProps.children, e), l.child;
                case 12:
                    return nl(t, l, l.pendingProps.children, e), l.child;
                case 10:
                    return n = l.pendingProps, be(l, l.type, n.value), nl(t, l, n.children, e), l.child;
                case 9:
                    return u = l.type._context, n = l.pendingProps.children, We(l), u = el(u), n = n(u), l.flags |= 1, nl(t, l, n, e), l.child;
                case 14:
                    return Qo(t, l, l.type, l.pendingProps, e);
                case 15:
                    return Zo(t, l, l.type, l.pendingProps, e);
                case 19:
                    return Po(t, l, e);
                case 31:
                    return ad(t, l, e);
                case 22:
                    return Vo(t, l, e, l.pendingProps);
                case 24:
                    return We(l), n = el(Zt), t === null ? (u = ki(), u === null && (u = Dt, a = Wi(), u.pooledCache = a, a.refCount++, a !== null && (u.pooledCacheLanes |= e), u = a), l.memoizedState = {
                        parent: n,
                        cache: u
                    }, Pi(l), be(l, Zt, u)) : ((t.lanes & e) !== 0 && (tc(t, l), pu(l, null, null, e), gu()), u = t.memoizedState, a = l.memoizedState, u.parent !== n ? (u = {
                        parent: n,
                        cache: n
                    }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), be(l, Zt, n)) : (n = a.cache, be(l, Zt, n), n !== u.cache && Fi(l, [
                        Zt
                    ], e, !0))), nl(t, l, l.pendingProps.children, e), l.child;
                case 29:
                    throw l.pendingProps;
            }
            throw Error(m(156, l.tag));
        }
        function ae(t) {
            t.flags |= 4;
        }
        function Hc(t, l, e, n, u) {
            if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
                if (t.flags |= 16777216, (u & 335544128) === u) if (t.stateNode.complete) t.flags |= 8192;
                else if (Us()) t.flags |= 8192;
                else throw Ie = pa, Ii;
            } else t.flags &= -16777217;
        }
        function ls(t, l) {
            if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
            else if (t.flags |= 16777216, !v0(l)) if (Us()) t.flags |= 8192;
            else throw Ie = pa, Ii;
        }
        function Ha(t, l) {
            l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Cf() : 536870912, t.lanes |= l, qn |= l);
        }
        function zu(t, l) {
            if (!ht) switch(t.tailMode){
                case "hidden":
                    l = t.tail;
                    for(var e = null; l !== null;)l.alternate !== null && (e = l), l = l.sibling;
                    e === null ? t.tail = null : e.sibling = null;
                    break;
                case "collapsed":
                    e = t.tail;
                    for(var n = null; e !== null;)e.alternate !== null && (n = e), e = e.sibling;
                    n === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
            }
        }
        function Rt(t) {
            var l = t.alternate !== null && t.alternate.child === t.child, e = 0, n = 0;
            if (l) for(var u = t.child; u !== null;)e |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = t, u = u.sibling;
            else for(u = t.child; u !== null;)e |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = t, u = u.sibling;
            return t.subtreeFlags |= n, t.childLanes = e, l;
        }
        function cd(t, l, e) {
            var n = l.pendingProps;
            switch(Qi(l), l.tag){
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Rt(l), null;
                case 1:
                    return Rt(l), null;
                case 3:
                    return e = l.stateNode, n = null, t !== null && (n = t.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), le(Zt), Nt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (zn(l) ? ae(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Vi())), Rt(l), null;
                case 26:
                    var u = l.type, a = l.memoizedState;
                    return t === null ? (ae(l), a !== null ? (Rt(l), ls(l, a)) : (Rt(l), Hc(l, u, null, n, e))) : a ? a !== t.memoizedState ? (ae(l), Rt(l), ls(l, a)) : (Rt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== n && ae(l), Rt(l), Hc(l, u, t, n, e)), null;
                case 27:
                    if (un(l), e = at.current, u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== n && ae(l);
                    else {
                        if (!n) {
                            if (l.stateNode === null) throw Error(m(166));
                            return Rt(l), null;
                        }
                        t = Q.current, zn(l) ? Cr(l) : (t = f0(u, n, e), l.stateNode = t, ae(l));
                    }
                    return Rt(l), null;
                case 5:
                    if (un(l), u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== n && ae(l);
                    else {
                        if (!n) {
                            if (l.stateNode === null) throw Error(m(166));
                            return Rt(l), null;
                        }
                        if (a = Q.current, zn(l)) Cr(l);
                        else {
                            var f = $a(at.current);
                            switch(a){
                                case 1:
                                    a = f.createElementNS("http://www.w3.org/2000/svg", u);
                                    break;
                                case 2:
                                    a = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                    break;
                                default:
                                    switch(u){
                                        case "svg":
                                            a = f.createElementNS("http://www.w3.org/2000/svg", u);
                                            break;
                                        case "math":
                                            a = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                            break;
                                        case "script":
                                            a = f.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
                                            break;
                                        case "select":
                                            a = typeof n.is == "string" ? f.createElement("select", {
                                                is: n.is
                                            }) : f.createElement("select"), n.multiple ? a.multiple = !0 : n.size && (a.size = n.size);
                                            break;
                                        default:
                                            a = typeof n.is == "string" ? f.createElement(u, {
                                                is: n.is
                                            }) : f.createElement(u);
                                    }
                            }
                            a[tl] = l, a[sl] = n;
                            t: for(f = l.child; f !== null;){
                                if (f.tag === 5 || f.tag === 6) a.appendChild(f.stateNode);
                                else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                    f.child.return = f, f = f.child;
                                    continue;
                                }
                                if (f === l) break t;
                                for(; f.sibling === null;){
                                    if (f.return === null || f.return === l) break t;
                                    f = f.return;
                                }
                                f.sibling.return = f.return, f = f.sibling;
                            }
                            l.stateNode = a;
                            t: switch(ul(a, u, n), u){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    n = !!n.autoFocus;
                                    break t;
                                case "img":
                                    n = !0;
                                    break t;
                                default:
                                    n = !1;
                            }
                            n && ae(l);
                        }
                    }
                    return Rt(l), Hc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e), null;
                case 6:
                    if (t && l.stateNode != null) t.memoizedProps !== n && ae(l);
                    else {
                        if (typeof n != "string" && l.stateNode === null) throw Error(m(166));
                        if (t = at.current, zn(l)) {
                            if (t = l.stateNode, e = l.memoizedProps, n = null, u = ll, u !== null) switch(u.tag){
                                case 27:
                                case 5:
                                    n = u.memoizedProps;
                            }
                            t[tl] = l, t = !!(t.nodeValue === e || n !== null && n.suppressHydrationWarning === !0 || ks(t.nodeValue, e)), t || Ee(l, !0);
                        } else t = $a(t).createTextNode(n), t[tl] = l, l.stateNode = t;
                    }
                    return Rt(l), null;
                case 31:
                    if (e = l.memoizedState, t === null || t.memoizedState !== null) {
                        if (n = zn(l), e !== null) {
                            if (t === null) {
                                if (!n) throw Error(m(318));
                                if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(m(557));
                                t[tl] = l;
                            } else Je(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                            Rt(l), t = !1;
                        } else e = Vi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
                        if (!t) return l.flags & 256 ? (Al(l), l) : (Al(l), null);
                        if ((l.flags & 128) !== 0) throw Error(m(558));
                    }
                    return Rt(l), null;
                case 13:
                    if (n = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                        if (u = zn(l), n !== null && n.dehydrated !== null) {
                            if (t === null) {
                                if (!u) throw Error(m(318));
                                if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
                                u[tl] = l;
                            } else Je(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                            Rt(l), u = !1;
                        } else u = Vi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
                        if (!u) return l.flags & 256 ? (Al(l), l) : (Al(l), null);
                    }
                    return Al(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = n !== null, t = t !== null && t.memoizedState !== null, e && (n = l.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== u && (n.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Ha(l, l.updateQueue), Rt(l), null);
                case 4:
                    return Nt(), t === null && nf(l.stateNode.containerInfo), Rt(l), null;
                case 10:
                    return le(l.type), Rt(l), null;
                case 19:
                    if (U(Xt), n = l.memoizedState, n === null) return Rt(l), null;
                    if (u = (l.flags & 128) !== 0, a = n.rendering, a === null) if (u) zu(n, !1);
                    else {
                        if (Lt !== 0 || t !== null && (t.flags & 128) !== 0) for(t = l.child; t !== null;){
                            if (a = Aa(t), a !== null) {
                                for(l.flags |= 128, zu(n, !1), t = a.updateQueue, l.updateQueue = t, Ha(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null;)Br(e, t), e = e.sibling;
                                return Y(Xt, Xt.current & 1 | 2), ht && Pl(l, n.treeForkCount), l.child;
                            }
                            t = t.sibling;
                        }
                        n.tail !== null && cl() > Ga && (l.flags |= 128, u = !0, zu(n, !1), l.lanes = 4194304);
                    }
                    else {
                        if (!u) if (t = Aa(a), t !== null) {
                            if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, Ha(l, t), zu(n, !0), n.tail === null && n.tailMode === "hidden" && !a.alternate && !ht) return Rt(l), null;
                        } else 2 * cl() - n.renderingStartTime > Ga && e !== 536870912 && (l.flags |= 128, u = !0, zu(n, !1), l.lanes = 4194304);
                        n.isBackwards ? (a.sibling = l.child, l.child = a) : (t = n.last, t !== null ? t.sibling = a : l.child = a, n.last = a);
                    }
                    return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = cl(), t.sibling = null, e = Xt.current, Y(Xt, u ? e & 1 | 2 : e & 1), ht && Pl(l, n.treeForkCount), t) : (Rt(l), null);
                case 22:
                case 23:
                    return Al(l), uc(), n = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Rt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Rt(l), e = l.updateQueue, e !== null && Ha(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== e && (l.flags |= 2048), t !== null && U($e), null;
                case 24:
                    return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), le(Zt), Rt(l), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(m(156, l.tag));
        }
        function fd(t, l) {
            switch(Qi(l), l.tag){
                case 1:
                    return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
                case 3:
                    return le(Zt), Nt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
                case 26:
                case 27:
                case 5:
                    return un(l), null;
                case 31:
                    if (l.memoizedState !== null) {
                        if (Al(l), l.alternate === null) throw Error(m(340));
                        Je();
                    }
                    return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
                case 13:
                    if (Al(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
                        if (l.alternate === null) throw Error(m(340));
                        Je();
                    }
                    return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
                case 19:
                    return U(Xt), null;
                case 4:
                    return Nt(), null;
                case 10:
                    return le(l.type), null;
                case 22:
                case 23:
                    return Al(l), uc(), t !== null && U($e), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
                case 24:
                    return le(Zt), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function es(t, l) {
            switch(Qi(l), l.tag){
                case 3:
                    le(Zt), Nt();
                    break;
                case 26:
                case 27:
                case 5:
                    un(l);
                    break;
                case 4:
                    Nt();
                    break;
                case 31:
                    l.memoizedState !== null && Al(l);
                    break;
                case 13:
                    Al(l);
                    break;
                case 19:
                    U(Xt);
                    break;
                case 10:
                    le(l.type);
                    break;
                case 22:
                case 23:
                    Al(l), uc(), t !== null && U($e);
                    break;
                case 24:
                    le(Zt);
            }
        }
        function _u(t, l) {
            try {
                var e = l.updateQueue, n = e !== null ? e.lastEffect : null;
                if (n !== null) {
                    var u = n.next;
                    e = u;
                    do {
                        if ((e.tag & t) === t) {
                            n = void 0;
                            var a = e.create, f = e.inst;
                            n = a(), f.destroy = n;
                        }
                        e = e.next;
                    }while (e !== u);
                }
            } catch (r) {
                xt(l, l.return, r);
            }
        }
        function Ue(t, l, e) {
            try {
                var n = l.updateQueue, u = n !== null ? n.lastEffect : null;
                if (u !== null) {
                    var a = u.next;
                    n = a;
                    do {
                        if ((n.tag & t) === t) {
                            var f = n.inst, r = f.destroy;
                            if (r !== void 0) {
                                f.destroy = void 0, u = l;
                                var h = e, E = r;
                                try {
                                    E();
                                } catch (B) {
                                    xt(u, h, B);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== a);
                }
            } catch (B) {
                xt(l, l.return, B);
            }
        }
        function ns(t) {
            var l = t.updateQueue;
            if (l !== null) {
                var e = t.stateNode;
                try {
                    Kr(l, e);
                } catch (n) {
                    xt(t, t.return, n);
                }
            }
        }
        function us(t, l, e) {
            e.props = ln(t.type, t.memoizedProps), e.state = t.memoizedState;
            try {
                e.componentWillUnmount();
            } catch (n) {
                xt(t, l, n);
            }
        }
        function xu(t, l) {
            try {
                var e = t.ref;
                if (e !== null) {
                    switch(t.tag){
                        case 26:
                        case 27:
                        case 5:
                            var n = t.stateNode;
                            break;
                        case 30:
                            n = t.stateNode;
                            break;
                        default:
                            n = t.stateNode;
                    }
                    typeof e == "function" ? t.refCleanup = e(n) : e.current = n;
                }
            } catch (u) {
                xt(t, l, u);
            }
        }
        function Kl(t, l) {
            var e = t.ref, n = t.refCleanup;
            if (e !== null) if (typeof n == "function") try {
                n();
            } catch (u) {
                xt(t, l, u);
            } finally{
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
            }
            else if (typeof e == "function") try {
                e(null);
            } catch (u) {
                xt(t, l, u);
            }
            else e.current = null;
        }
        function as(t) {
            var l = t.type, e = t.memoizedProps, n = t.stateNode;
            try {
                t: switch(l){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e.autoFocus && n.focus();
                        break t;
                    case "img":
                        e.src ? n.src = e.src : e.srcSet && (n.srcset = e.srcSet);
                }
            } catch (u) {
                xt(t, t.return, u);
            }
        }
        function jc(t, l, e) {
            try {
                var n = t.stateNode;
                Md(n, t.type, e, l), n[sl] = l;
            } catch (u) {
                xt(t, t.return, u);
            }
        }
        function is(t) {
            return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Re(t.type) || t.tag === 4;
        }
        function qc(t) {
            t: for(;;){
                for(; t.sibling === null;){
                    if (t.return === null || is(t.return)) return null;
                    t = t.return;
                }
                for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;){
                    if (t.tag === 27 && Re(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                    t.child.return = t, t = t.child;
                }
                if (!(t.flags & 2)) return t.stateNode;
            }
        }
        function wc(t, l, e) {
            var n = t.tag;
            if (n === 5 || n === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = $l));
            else if (n !== 4 && (n === 27 && Re(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null)) for(wc(t, l, e), t = t.sibling; t !== null;)wc(t, l, e), t = t.sibling;
        }
        function ja(t, l, e) {
            var n = t.tag;
            if (n === 5 || n === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
            else if (n !== 4 && (n === 27 && Re(t.type) && (e = t.stateNode), t = t.child, t !== null)) for(ja(t, l, e), t = t.sibling; t !== null;)ja(t, l, e), t = t.sibling;
        }
        function cs(t) {
            var l = t.stateNode, e = t.memoizedProps;
            try {
                for(var n = t.type, u = l.attributes; u.length;)l.removeAttributeNode(u[0]);
                ul(l, n, e), l[tl] = t, l[sl] = e;
            } catch (a) {
                xt(t, t.return, a);
            }
        }
        var ie = !1, Jt = !1, Yc = !1, fs = typeof WeakSet == "function" ? WeakSet : Set, Pt = null;
        function rd(t, l) {
            if (t = t.containerInfo, cf = ni, t = Sr(t), Ni(t)) {
                if ("selectionStart" in t) var e = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
                else t: {
                    e = (e = t.ownerDocument) && e.defaultView || window;
                    var n = e.getSelection && e.getSelection();
                    if (n && n.rangeCount !== 0) {
                        e = n.anchorNode;
                        var u = n.anchorOffset, a = n.focusNode;
                        n = n.focusOffset;
                        try {
                            e.nodeType, a.nodeType;
                        } catch  {
                            e = null;
                            break t;
                        }
                        var f = 0, r = -1, h = -1, E = 0, B = 0, N = t, b = null;
                        l: for(;;){
                            for(var x; N !== e || u !== 0 && N.nodeType !== 3 || (r = f + u), N !== a || n !== 0 && N.nodeType !== 3 || (h = f + n), N.nodeType === 3 && (f += N.nodeValue.length), (x = N.firstChild) !== null;)b = N, N = x;
                            for(;;){
                                if (N === t) break l;
                                if (b === e && ++E === u && (r = f), b === a && ++B === n && (h = f), (x = N.nextSibling) !== null) break;
                                N = b, b = N.parentNode;
                            }
                            N = x;
                        }
                        e = r === -1 || h === -1 ? null : {
                            start: r,
                            end: h
                        };
                    } else e = null;
                }
                e = e || {
                    start: 0,
                    end: 0
                };
            } else e = null;
            for(ff = {
                focusedElem: t,
                selectionRange: e
            }, ni = !1, Pt = l; Pt !== null;)if (l = Pt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null) t.return = l, Pt = t;
            else for(; Pt !== null;){
                switch(l = Pt, a = l.alternate, t = l.flags, l.tag){
                    case 0:
                        if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null)) for(e = 0; e < t.length; e++)u = t[e], u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && a !== null) {
                            t = void 0, e = l, u = a.memoizedProps, a = a.memoizedState, n = e.stateNode;
                            try {
                                var Z = ln(e.type, u);
                                t = n.getSnapshotBeforeUpdate(Z, a), n.__reactInternalSnapshotBeforeUpdate = t;
                            } catch (P) {
                                xt(e, e.return, P);
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) sf(t);
                            else if (e === 1) switch(t.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    sf(t);
                                    break;
                                default:
                                    t.textContent = "";
                            }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0) throw Error(m(163));
                }
                if (t = l.sibling, t !== null) {
                    t.return = l.return, Pt = t;
                    break;
                }
                Pt = l.return;
            }
        }
        function rs(t, l, e) {
            var n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    fe(t, e), n & 4 && _u(5, e);
                    break;
                case 1:
                    if (fe(t, e), n & 4) if (t = e.stateNode, l === null) try {
                        t.componentDidMount();
                    } catch (f) {
                        xt(e, e.return, f);
                    }
                    else {
                        var u = ln(e.type, l.memoizedProps);
                        l = l.memoizedState;
                        try {
                            t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
                        } catch (f) {
                            xt(e, e.return, f);
                        }
                    }
                    n & 64 && ns(e), n & 512 && xu(e, e.return);
                    break;
                case 3:
                    if (fe(t, e), n & 64 && (t = e.updateQueue, t !== null)) {
                        if (l = null, e.child !== null) switch(e.child.tag){
                            case 27:
                            case 5:
                                l = e.child.stateNode;
                                break;
                            case 1:
                                l = e.child.stateNode;
                        }
                        try {
                            Kr(t, l);
                        } catch (f) {
                            xt(e, e.return, f);
                        }
                    }
                    break;
                case 27:
                    l === null && n & 4 && cs(e);
                case 26:
                case 5:
                    fe(t, e), l === null && n & 4 && as(e), n & 512 && xu(e, e.return);
                    break;
                case 12:
                    fe(t, e);
                    break;
                case 31:
                    fe(t, e), n & 4 && hs(t, e);
                    break;
                case 13:
                    fe(t, e), n & 4 && ds(t, e), n & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = pd.bind(null, e), wd(t, e))));
                    break;
                case 22:
                    if (n = e.memoizedState !== null || ie, !n) {
                        l = l !== null && l.memoizedState !== null || Jt, u = ie;
                        var a = Jt;
                        ie = n, (Jt = l) && !a ? re(t, e, (e.subtreeFlags & 8772) !== 0) : fe(t, e), ie = u, Jt = a;
                    }
                    break;
                case 30:
                    break;
                default:
                    fe(t, e);
            }
        }
        function os(t) {
            var l = t.alternate;
            l !== null && (t.alternate = null, os(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && mi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
        }
        var qt = null, dl = !1;
        function ce(t, l, e) {
            for(e = e.child; e !== null;)ss(t, l, e), e = e.sibling;
        }
        function ss(t, l, e) {
            if (I && typeof I.onCommitFiberUnmount == "function") try {
                I.onCommitFiberUnmount(M, e);
            } catch  {}
            switch(e.tag){
                case 26:
                    Jt || Kl(e, l), ce(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                    break;
                case 27:
                    Jt || Kl(e, l);
                    var n = qt, u = dl;
                    Re(e.type) && (qt = e.stateNode, dl = !1), ce(t, l, e), Hu(e.stateNode), qt = n, dl = u;
                    break;
                case 5:
                    Jt || Kl(e, l);
                case 6:
                    if (n = qt, u = dl, qt = null, ce(t, l, e), qt = n, dl = u, qt !== null) if (dl) try {
                        (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(e.stateNode);
                    } catch (a) {
                        xt(e, l, a);
                    }
                    else try {
                        qt.removeChild(e.stateNode);
                    } catch (a) {
                        xt(e, l, a);
                    }
                    break;
                case 18:
                    qt !== null && (dl ? (t = qt, n0(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), Vn(t)) : n0(qt, e.stateNode));
                    break;
                case 4:
                    n = qt, u = dl, qt = e.stateNode.containerInfo, dl = !0, ce(t, l, e), qt = n, dl = u;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Ue(2, e, l), Jt || Ue(4, e, l), ce(t, l, e);
                    break;
                case 1:
                    Jt || (Kl(e, l), n = e.stateNode, typeof n.componentWillUnmount == "function" && us(e, l, n)), ce(t, l, e);
                    break;
                case 21:
                    ce(t, l, e);
                    break;
                case 22:
                    Jt = (n = Jt) || e.memoizedState !== null, ce(t, l, e), Jt = n;
                    break;
                default:
                    ce(t, l, e);
            }
        }
        function hs(t, l) {
            if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
                t = t.dehydrated;
                try {
                    Vn(t);
                } catch (e) {
                    xt(l, l.return, e);
                }
            }
        }
        function ds(t, l) {
            if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
                Vn(t);
            } catch (e) {
                xt(l, l.return, e);
            }
        }
        function od(t) {
            switch(t.tag){
                case 31:
                case 13:
                case 19:
                    var l = t.stateNode;
                    return l === null && (l = t.stateNode = new fs), l;
                case 22:
                    return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new fs), l;
                default:
                    throw Error(m(435, t.tag));
            }
        }
        function qa(t, l) {
            var e = od(t);
            l.forEach(function(n) {
                if (!e.has(n)) {
                    e.add(n);
                    var u = Sd.bind(null, t, n);
                    n.then(u, u);
                }
            });
        }
        function yl(t, l) {
            var e = l.deletions;
            if (e !== null) for(var n = 0; n < e.length; n++){
                var u = e[n], a = t, f = l, r = f;
                t: for(; r !== null;){
                    switch(r.tag){
                        case 27:
                            if (Re(r.type)) {
                                qt = r.stateNode, dl = !1;
                                break t;
                            }
                            break;
                        case 5:
                            qt = r.stateNode, dl = !1;
                            break t;
                        case 3:
                        case 4:
                            qt = r.stateNode.containerInfo, dl = !0;
                            break t;
                    }
                    r = r.return;
                }
                if (qt === null) throw Error(m(160));
                ss(a, f, u), qt = null, dl = !1, a = u.alternate, a !== null && (a.return = null), u.return = null;
            }
            if (l.subtreeFlags & 13886) for(l = l.child; l !== null;)ys(l, t), l = l.sibling;
        }
        var Yl = null;
        function ys(t, l) {
            var e = t.alternate, n = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    yl(l, t), ml(t), n & 4 && (Ue(3, t, t.return), _u(3, t), Ue(5, t, t.return));
                    break;
                case 1:
                    yl(l, t), ml(t), n & 512 && (Jt || e === null || Kl(e, e.return)), n & 64 && ie && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? n : e.concat(n))));
                    break;
                case 26:
                    var u = Yl;
                    if (yl(l, t), ml(t), n & 512 && (Jt || e === null || Kl(e, e.return)), n & 4) {
                        var a = e !== null ? e.memoizedState : null;
                        if (n = t.memoizedState, e === null) if (n === null) if (t.stateNode === null) {
                            t: {
                                n = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                                l: switch(n){
                                    case "title":
                                        a = u.getElementsByTagName("title")[0], (!a || a[Pn] || a[tl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(n), u.head.insertBefore(a, u.querySelector("head > title"))), ul(a, n, e), a[tl] = t, It(a), n = a;
                                        break t;
                                    case "link":
                                        var f = y0("link", "href", u).get(n + (e.href || ""));
                                        if (f) {
                                            for(var r = 0; r < f.length; r++)if (a = f[r], a.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && a.getAttribute("rel") === (e.rel == null ? null : e.rel) && a.getAttribute("title") === (e.title == null ? null : e.title) && a.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                f.splice(r, 1);
                                                break l;
                                            }
                                        }
                                        a = u.createElement(n), ul(a, n, e), u.head.appendChild(a);
                                        break;
                                    case "meta":
                                        if (f = y0("meta", "content", u).get(n + (e.content || ""))) {
                                            for(r = 0; r < f.length; r++)if (a = f[r], a.getAttribute("content") === (e.content == null ? null : "" + e.content) && a.getAttribute("name") === (e.name == null ? null : e.name) && a.getAttribute("property") === (e.property == null ? null : e.property) && a.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && a.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                f.splice(r, 1);
                                                break l;
                                            }
                                        }
                                        a = u.createElement(n), ul(a, n, e), u.head.appendChild(a);
                                        break;
                                    default:
                                        throw Error(m(468, n));
                                }
                                a[tl] = t, It(a), n = a;
                            }
                            t.stateNode = n;
                        } else m0(u, t.type, t.stateNode);
                        else t.stateNode = d0(u, n, t.memoizedProps);
                        else a !== n ? (a === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : a.count--, n === null ? m0(u, t.type, t.stateNode) : d0(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && jc(t, t.memoizedProps, e.memoizedProps);
                    }
                    break;
                case 27:
                    yl(l, t), ml(t), n & 512 && (Jt || e === null || Kl(e, e.return)), e !== null && n & 4 && jc(t, t.memoizedProps, e.memoizedProps);
                    break;
                case 5:
                    if (yl(l, t), ml(t), n & 512 && (Jt || e === null || Kl(e, e.return)), t.flags & 32) {
                        u = t.stateNode;
                        try {
                            yn(u, "");
                        } catch (Z) {
                            xt(t, t.return, Z);
                        }
                    }
                    n & 4 && t.stateNode != null && (u = t.memoizedProps, jc(t, u, e !== null ? e.memoizedProps : u)), n & 1024 && (Yc = !0);
                    break;
                case 6:
                    if (yl(l, t), ml(t), n & 4) {
                        if (t.stateNode === null) throw Error(m(162));
                        n = t.memoizedProps, e = t.stateNode;
                        try {
                            e.nodeValue = n;
                        } catch (Z) {
                            xt(t, t.return, Z);
                        }
                    }
                    break;
                case 3:
                    if (Pa = null, u = Yl, Yl = ka(l.containerInfo), yl(l, t), Yl = u, ml(t), n & 4 && e !== null && e.memoizedState.isDehydrated) try {
                        Vn(l.containerInfo);
                    } catch (Z) {
                        xt(t, t.return, Z);
                    }
                    Yc && (Yc = !1, ms(t));
                    break;
                case 4:
                    n = Yl, Yl = ka(t.stateNode.containerInfo), yl(l, t), ml(t), Yl = n;
                    break;
                case 12:
                    yl(l, t), ml(t);
                    break;
                case 31:
                    yl(l, t), ml(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, qa(t, n)));
                    break;
                case 13:
                    yl(l, t), ml(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ya = cl()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, qa(t, n)));
                    break;
                case 22:
                    u = t.memoizedState !== null;
                    var h = e !== null && e.memoizedState !== null, E = ie, B = Jt;
                    if (ie = E || u, Jt = B || h, yl(l, t), Jt = B, ie = E, ml(t), n & 8192) t: for(l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || h || ie || Jt || en(t)), e = null, l = t;;){
                        if (l.tag === 5 || l.tag === 26) {
                            if (e === null) {
                                h = e = l;
                                try {
                                    if (a = h.stateNode, u) f = a.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                    else {
                                        r = h.stateNode;
                                        var N = h.memoizedProps.style, b = N != null && N.hasOwnProperty("display") ? N.display : null;
                                        r.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                                    }
                                } catch (Z) {
                                    xt(h, h.return, Z);
                                }
                            }
                        } else if (l.tag === 6) {
                            if (e === null) {
                                h = l;
                                try {
                                    h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                                } catch (Z) {
                                    xt(h, h.return, Z);
                                }
                            }
                        } else if (l.tag === 18) {
                            if (e === null) {
                                h = l;
                                try {
                                    var x = h.stateNode;
                                    u ? u0(x, !0) : u0(h.stateNode, !1);
                                } catch (Z) {
                                    xt(h, h.return, Z);
                                }
                            }
                        } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
                            l.child.return = l, l = l.child;
                            continue;
                        }
                        if (l === t) break t;
                        for(; l.sibling === null;){
                            if (l.return === null || l.return === t) break t;
                            e === l && (e = null), l = l.return;
                        }
                        e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
                    }
                    n & 4 && (n = t.updateQueue, n !== null && (e = n.retryQueue, e !== null && (n.retryQueue = null, qa(t, e))));
                    break;
                case 19:
                    yl(l, t), ml(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, qa(t, n)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    yl(l, t), ml(t);
            }
        }
        function ml(t) {
            var l = t.flags;
            if (l & 2) {
                try {
                    for(var e, n = t.return; n !== null;){
                        if (is(n)) {
                            e = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (e == null) throw Error(m(160));
                    switch(e.tag){
                        case 27:
                            var u = e.stateNode, a = qc(t);
                            ja(t, a, u);
                            break;
                        case 5:
                            var f = e.stateNode;
                            e.flags & 32 && (yn(f, ""), e.flags &= -33);
                            var r = qc(t);
                            ja(t, r, f);
                            break;
                        case 3:
                        case 4:
                            var h = e.stateNode.containerInfo, E = qc(t);
                            wc(t, E, h);
                            break;
                        default:
                            throw Error(m(161));
                    }
                } catch (B) {
                    xt(t, t.return, B);
                }
                t.flags &= -3;
            }
            l & 4096 && (t.flags &= -4097);
        }
        function ms(t) {
            if (t.subtreeFlags & 1024) for(t = t.child; t !== null;){
                var l = t;
                ms(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
            }
        }
        function fe(t, l) {
            if (l.subtreeFlags & 8772) for(l = l.child; l !== null;)rs(t, l.alternate, l), l = l.sibling;
        }
        function en(t) {
            for(t = t.child; t !== null;){
                var l = t;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Ue(4, l, l.return), en(l);
                        break;
                    case 1:
                        Kl(l, l.return);
                        var e = l.stateNode;
                        typeof e.componentWillUnmount == "function" && us(l, l.return, e), en(l);
                        break;
                    case 27:
                        Hu(l.stateNode);
                    case 26:
                    case 5:
                        Kl(l, l.return), en(l);
                        break;
                    case 22:
                        l.memoizedState === null && en(l);
                        break;
                    case 30:
                        en(l);
                        break;
                    default:
                        en(l);
                }
                t = t.sibling;
            }
        }
        function re(t, l, e) {
            for(e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null;){
                var n = l.alternate, u = t, a = l, f = a.flags;
                switch(a.tag){
                    case 0:
                    case 11:
                    case 15:
                        re(u, a, e), _u(4, a);
                        break;
                    case 1:
                        if (re(u, a, e), n = a, u = n.stateNode, typeof u.componentDidMount == "function") try {
                            u.componentDidMount();
                        } catch (E) {
                            xt(n, n.return, E);
                        }
                        if (n = a, u = n.updateQueue, u !== null) {
                            var r = n.stateNode;
                            try {
                                var h = u.shared.hiddenCallbacks;
                                if (h !== null) for(u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++)Vr(h[u], r);
                            } catch (E) {
                                xt(n, n.return, E);
                            }
                        }
                        e && f & 64 && ns(a), xu(a, a.return);
                        break;
                    case 27:
                        cs(a);
                    case 26:
                    case 5:
                        re(u, a, e), e && n === null && f & 4 && as(a), xu(a, a.return);
                        break;
                    case 12:
                        re(u, a, e);
                        break;
                    case 31:
                        re(u, a, e), e && f & 4 && hs(u, a);
                        break;
                    case 13:
                        re(u, a, e), e && f & 4 && ds(u, a);
                        break;
                    case 22:
                        a.memoizedState === null && re(u, a, e), xu(a, a.return);
                        break;
                    case 30:
                        break;
                    default:
                        re(u, a, e);
                }
                l = l.sibling;
            }
        }
        function Gc(t, l) {
            var e = null;
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && hu(e));
        }
        function Lc(t, l) {
            t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && hu(t));
        }
        function Gl(t, l, e, n) {
            if (l.subtreeFlags & 10256) for(l = l.child; l !== null;)vs(t, l, e, n), l = l.sibling;
        }
        function vs(t, l, e, n) {
            var u = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    Gl(t, l, e, n), u & 2048 && _u(9, l);
                    break;
                case 1:
                    Gl(t, l, e, n);
                    break;
                case 3:
                    Gl(t, l, e, n), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && hu(t)));
                    break;
                case 12:
                    if (u & 2048) {
                        Gl(t, l, e, n), t = l.stateNode;
                        try {
                            var a = l.memoizedProps, f = a.id, r = a.onPostCommit;
                            typeof r == "function" && r(f, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                        } catch (h) {
                            xt(l, l.return, h);
                        }
                    } else Gl(t, l, e, n);
                    break;
                case 31:
                    Gl(t, l, e, n);
                    break;
                case 13:
                    Gl(t, l, e, n);
                    break;
                case 23:
                    break;
                case 22:
                    a = l.stateNode, f = l.alternate, l.memoizedState !== null ? a._visibility & 2 ? Gl(t, l, e, n) : Uu(t, l) : a._visibility & 2 ? Gl(t, l, e, n) : (a._visibility |= 2, Rn(t, l, e, n, (l.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Gc(f, l);
                    break;
                case 24:
                    Gl(t, l, e, n), u & 2048 && Lc(l.alternate, l);
                    break;
                default:
                    Gl(t, l, e, n);
            }
        }
        function Rn(t, l, e, n, u) {
            for(u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null;){
                var a = t, f = l, r = e, h = n, E = f.flags;
                switch(f.tag){
                    case 0:
                    case 11:
                    case 15:
                        Rn(a, f, r, h, u), _u(8, f);
                        break;
                    case 23:
                        break;
                    case 22:
                        var B = f.stateNode;
                        f.memoizedState !== null ? B._visibility & 2 ? Rn(a, f, r, h, u) : Uu(a, f) : (B._visibility |= 2, Rn(a, f, r, h, u)), u && E & 2048 && Gc(f.alternate, f);
                        break;
                    case 24:
                        Rn(a, f, r, h, u), u && E & 2048 && Lc(f.alternate, f);
                        break;
                    default:
                        Rn(a, f, r, h, u);
                }
                l = l.sibling;
            }
        }
        function Uu(t, l) {
            if (l.subtreeFlags & 10256) for(l = l.child; l !== null;){
                var e = t, n = l, u = n.flags;
                switch(n.tag){
                    case 22:
                        Uu(e, n), u & 2048 && Gc(n.alternate, n);
                        break;
                    case 24:
                        Uu(e, n), u & 2048 && Lc(n.alternate, n);
                        break;
                    default:
                        Uu(e, n);
                }
                l = l.sibling;
            }
        }
        var Bu = 8192;
        function Hn(t, l, e) {
            if (t.subtreeFlags & Bu) for(t = t.child; t !== null;)gs(t, l, e), t = t.sibling;
        }
        function gs(t, l, e) {
            switch(t.tag){
                case 26:
                    Hn(t, l, e), t.flags & Bu && t.memoizedState !== null && $d(e, Yl, t.memoizedState, t.memoizedProps);
                    break;
                case 5:
                    Hn(t, l, e);
                    break;
                case 3:
                case 4:
                    var n = Yl;
                    Yl = ka(t.stateNode.containerInfo), Hn(t, l, e), Yl = n;
                    break;
                case 22:
                    t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Bu, Bu = 16777216, Hn(t, l, e), Bu = n) : Hn(t, l, e));
                    break;
                default:
                    Hn(t, l, e);
            }
        }
        function ps(t) {
            var l = t.alternate;
            if (l !== null && (t = l.child, t !== null)) {
                l.child = null;
                do l = t.sibling, t.sibling = null, t = l;
                while (t !== null);
            }
        }
        function Ou(t) {
            var l = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (l !== null) for(var e = 0; e < l.length; e++){
                    var n = l[e];
                    Pt = n, Es(n, t);
                }
                ps(t);
            }
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ss(t), t = t.sibling;
        }
        function Ss(t) {
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    Ou(t), t.flags & 2048 && Ue(9, t, t.return);
                    break;
                case 3:
                    Ou(t);
                    break;
                case 12:
                    Ou(t);
                    break;
                case 22:
                    var l = t.stateNode;
                    t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, wa(t)) : Ou(t);
                    break;
                default:
                    Ou(t);
            }
        }
        function wa(t) {
            var l = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (l !== null) for(var e = 0; e < l.length; e++){
                    var n = l[e];
                    Pt = n, Es(n, t);
                }
                ps(t);
            }
            for(t = t.child; t !== null;){
                switch(l = t, l.tag){
                    case 0:
                    case 11:
                    case 15:
                        Ue(8, l, l.return), wa(l);
                        break;
                    case 22:
                        e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, wa(l));
                        break;
                    default:
                        wa(l);
                }
                t = t.sibling;
            }
        }
        function Es(t, l) {
            for(; Pt !== null;){
                var e = Pt;
                switch(e.tag){
                    case 0:
                    case 11:
                    case 15:
                        Ue(8, e, l);
                        break;
                    case 23:
                    case 22:
                        if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                            var n = e.memoizedState.cachePool.pool;
                            n != null && n.refCount++;
                        }
                        break;
                    case 24:
                        hu(e.memoizedState.cache);
                }
                if (n = e.child, n !== null) n.return = e, Pt = n;
                else t: for(e = t; Pt !== null;){
                    n = Pt;
                    var u = n.sibling, a = n.return;
                    if (os(n), n === e) {
                        Pt = null;
                        break t;
                    }
                    if (u !== null) {
                        u.return = a, Pt = u;
                        break t;
                    }
                    Pt = a;
                }
            }
        }
        var sd = {
            getCacheForType: function(t) {
                var l = el(Zt), e = l.data.get(t);
                return e === void 0 && (e = t(), l.data.set(t, e)), e;
            },
            cacheSignal: function() {
                return el(Zt).controller.signal;
            }
        }, hd = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Dt = null, ft = null, ot = 0, _t = 0, Tl = null, Be = !1, jn = !1, Xc = !1, oe = 0, Lt = 0, Oe = 0, nn = 0, Qc = 0, zl = 0, qn = 0, Mu = null, vl = null, Zc = !1, Ya = 0, bs = 0, Ga = 1 / 0, La = null, Me = null, $t = 0, De = null, wn = null, se = 0, Vc = 0, Kc = null, As = null, Du = 0, Jc = null;
        function _l() {
            return (At & 2) !== 0 && ot !== 0 ? ot & -ot : _.T !== null ? Pc() : qf();
        }
        function Ts() {
            if (zl === 0) if ((ot & 536870912) === 0 || ht) {
                var t = Wu;
                Wu <<= 1, (Wu & 3932160) === 0 && (Wu = 262144), zl = t;
            } else zl = 536870912;
            return t = bl.current, t !== null && (t.flags |= 32), zl;
        }
        function gl(t, l, e) {
            (t === Dt && (_t === 2 || _t === 9) || t.cancelPendingCommit !== null) && (Yn(t, 0), Ne(t, ot, zl, !1)), In(t, e), ((At & 2) === 0 || t !== Dt) && (t === Dt && ((At & 2) === 0 && (nn |= e), Lt === 4 && Ne(t, ot, zl, !1)), Jl(t));
        }
        function zs(t, l, e) {
            if ((At & 6) !== 0) throw Error(m(327));
            var n = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || kn(t, l), u = n ? md(t, l) : Wc(t, l, !0), a = n;
            do {
                if (u === 0) {
                    jn && !n && Ne(t, l, 0, !1);
                    break;
                } else {
                    if (e = t.current.alternate, a && !dd(e)) {
                        u = Wc(t, l, !1), a = !1;
                        continue;
                    }
                    if (u === 2) {
                        if (a = l, t.errorRecoveryDisabledLanes & a) var f = 0;
                        else f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                        if (f !== 0) {
                            l = f;
                            t: {
                                var r = t;
                                u = Mu;
                                var h = r.current.memoizedState.isDehydrated;
                                if (h && (Yn(r, f).flags |= 256), f = Wc(r, f, !1), f !== 2) {
                                    if (Xc && !h) {
                                        r.errorRecoveryDisabledLanes |= a, nn |= a, u = 4;
                                        break t;
                                    }
                                    a = vl, vl = u, a !== null && (vl === null ? vl = a : vl.push.apply(vl, a));
                                }
                                u = f;
                            }
                            if (a = !1, u !== 2) continue;
                        }
                    }
                    if (u === 1) {
                        Yn(t, 0), Ne(t, l, 0, !0);
                        break;
                    }
                    t: {
                        switch(n = t, a = u, a){
                            case 0:
                            case 1:
                                throw Error(m(345));
                            case 4:
                                if ((l & 4194048) !== l) break;
                            case 6:
                                Ne(n, l, zl, !Be);
                                break t;
                            case 2:
                                vl = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(m(329));
                        }
                        if ((l & 62914560) === l && (u = Ya + 300 - cl(), 10 < u)) {
                            if (Ne(n, l, zl, !Be), ku(n, 0, !0) !== 0) break t;
                            se = l, n.timeoutHandle = l0(_s.bind(null, n, e, vl, La, Zc, l, zl, nn, qn, Be, a, "Throttled", -0, 0), u);
                            break t;
                        }
                        _s(n, e, vl, La, Zc, l, zl, nn, qn, Be, a, null, -0, 0);
                    }
                }
                break;
            }while (!0);
            Jl(t);
        }
        function _s(t, l, e, n, u, a, f, r, h, E, B, N, b, x) {
            if (t.timeoutHandle = -1, N = l.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
                N = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: $l
                }, gs(l, a, N);
                var Z = (a & 62914560) === a ? Ya - cl() : (a & 4194048) === a ? bs - cl() : 0;
                if (Z = kd(N, Z), Z !== null) {
                    se = a, t.cancelPendingCommit = Z(Cs.bind(null, t, l, a, e, n, u, f, r, h, B, N, null, b, x)), Ne(t, a, f, !E);
                    return;
                }
            }
            Cs(t, l, a, e, n, u, f, r, h);
        }
        function dd(t) {
            for(var l = t;;){
                var e = l.tag;
                if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null))) for(var n = 0; n < e.length; n++){
                    var u = e[n], a = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Sl(a(), u)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
                else {
                    if (l === t) break;
                    for(; l.sibling === null;){
                        if (l.return === null || l.return === t) return !0;
                        l = l.return;
                    }
                    l.sibling.return = l.return, l = l.sibling;
                }
            }
            return !0;
        }
        function Ne(t, l, e, n) {
            l &= ~Qc, l &= ~nn, t.suspendedLanes |= l, t.pingedLanes &= ~l, n && (t.warmLanes |= l), n = t.expirationTimes;
            for(var u = l; 0 < u;){
                var a = 31 - ct(u), f = 1 << a;
                n[a] = -1, u &= ~f;
            }
            e !== 0 && Rf(t, e, l);
        }
        function Xa() {
            return (At & 6) === 0 ? (Nu(0), !1) : !0;
        }
        function Fc() {
            if (ft !== null) {
                if (_t === 0) var t = ft.return;
                else t = ft, te = Fe = null, oc(t), On = null, yu = 0, t = ft;
                for(; t !== null;)es(t.alternate, t), t = t.return;
                ft = null;
            }
        }
        function Yn(t, l) {
            var e = t.timeoutHandle;
            e !== -1 && (t.timeoutHandle = -1, Cd(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), se = 0, Fc(), Dt = t, ft = e = Il(t.current, null), ot = l, _t = 0, Tl = null, Be = !1, jn = kn(t, l), Xc = !1, qn = zl = Qc = nn = Oe = Lt = 0, vl = Mu = null, Zc = !1, (l & 8) !== 0 && (l |= l & 32);
            var n = t.entangledLanes;
            if (n !== 0) for(t = t.entanglements, n &= l; 0 < n;){
                var u = 31 - ct(n), a = 1 << u;
                l |= t[u], n &= ~a;
            }
            return oe = l, ra(), e;
        }
        function xs(t, l) {
            et = null, _.H = Au, l === Bn || l === ga ? (l = Lr(), _t = 3) : l === Ii ? (l = Lr(), _t = 4) : _t = l === xc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Tl = l, ft === null && (Lt = 1, Da(t, Ml(l, t.current)));
        }
        function Us() {
            var t = bl.current;
            return t === null ? !0 : (ot & 4194048) === ot ? Rl === null : (ot & 62914560) === ot || (ot & 536870912) !== 0 ? t === Rl : !1;
        }
        function Bs() {
            var t = _.H;
            return _.H = Au, t === null ? Au : t;
        }
        function Os() {
            var t = _.A;
            return _.A = sd, t;
        }
        function Qa() {
            Lt = 4, Be || (ot & 4194048) !== ot && bl.current !== null || (jn = !0), (Oe & 134217727) === 0 && (nn & 134217727) === 0 || Dt === null || Ne(Dt, ot, zl, !1);
        }
        function Wc(t, l, e) {
            var n = At;
            At |= 2;
            var u = Bs(), a = Os();
            (Dt !== t || ot !== l) && (La = null, Yn(t, l)), l = !1;
            var f = Lt;
            t: do try {
                if (_t !== 0 && ft !== null) {
                    var r = ft, h = Tl;
                    switch(_t){
                        case 8:
                            Fc(), f = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            bl.current === null && (l = !0);
                            var E = _t;
                            if (_t = 0, Tl = null, Gn(t, r, h, E), e && jn) {
                                f = 0;
                                break t;
                            }
                            break;
                        default:
                            E = _t, _t = 0, Tl = null, Gn(t, r, h, E);
                    }
                }
                yd(), f = Lt;
                break;
            } catch (B) {
                xs(t, B);
            }
            while (!0);
            return l && t.shellSuspendCounter++, te = Fe = null, At = n, _.H = u, _.A = a, ft === null && (Dt = null, ot = 0, ra()), f;
        }
        function yd() {
            for(; ft !== null;)Ms(ft);
        }
        function md(t, l) {
            var e = At;
            At |= 2;
            var n = Bs(), u = Os();
            Dt !== t || ot !== l ? (La = null, Ga = cl() + 500, Yn(t, l)) : jn = kn(t, l);
            t: do try {
                if (_t !== 0 && ft !== null) {
                    l = ft;
                    var a = Tl;
                    l: switch(_t){
                        case 1:
                            _t = 0, Tl = null, Gn(t, l, a, 1);
                            break;
                        case 2:
                        case 9:
                            if (Yr(a)) {
                                _t = 0, Tl = null, Ds(l);
                                break;
                            }
                            l = function() {
                                _t !== 2 && _t !== 9 || Dt !== t || (_t = 7), Jl(t);
                            }, a.then(l, l);
                            break t;
                        case 3:
                            _t = 7;
                            break t;
                        case 4:
                            _t = 5;
                            break t;
                        case 7:
                            Yr(a) ? (_t = 0, Tl = null, Ds(l)) : (_t = 0, Tl = null, Gn(t, l, a, 7));
                            break;
                        case 5:
                            var f = null;
                            switch(ft.tag){
                                case 26:
                                    f = ft.memoizedState;
                                case 5:
                                case 27:
                                    var r = ft;
                                    if (f ? v0(f) : r.stateNode.complete) {
                                        _t = 0, Tl = null;
                                        var h = r.sibling;
                                        if (h !== null) ft = h;
                                        else {
                                            var E = r.return;
                                            E !== null ? (ft = E, Za(E)) : ft = null;
                                        }
                                        break l;
                                    }
                            }
                            _t = 0, Tl = null, Gn(t, l, a, 5);
                            break;
                        case 6:
                            _t = 0, Tl = null, Gn(t, l, a, 6);
                            break;
                        case 8:
                            Fc(), Lt = 6;
                            break t;
                        default:
                            throw Error(m(462));
                    }
                }
                vd();
                break;
            } catch (B) {
                xs(t, B);
            }
            while (!0);
            return te = Fe = null, _.H = n, _.A = u, At = e, ft !== null ? 0 : (Dt = null, ot = 0, ra(), Lt);
        }
        function vd() {
            for(; ft !== null && !xl();)Ms(ft);
        }
        function Ms(t) {
            var l = ts(t.alternate, t, oe);
            t.memoizedProps = t.pendingProps, l === null ? Za(t) : ft = l;
        }
        function Ds(t) {
            var l = t, e = l.alternate;
            switch(l.tag){
                case 15:
                case 0:
                    l = Fo(e, l, l.pendingProps, l.type, void 0, ot);
                    break;
                case 11:
                    l = Fo(e, l, l.pendingProps, l.type.render, l.ref, ot);
                    break;
                case 5:
                    oc(l);
                default:
                    es(e, l), l = ft = Br(l, oe), l = ts(e, l, oe);
            }
            t.memoizedProps = t.pendingProps, l === null ? Za(t) : ft = l;
        }
        function Gn(t, l, e, n) {
            te = Fe = null, oc(l), On = null, yu = 0;
            var u = l.return;
            try {
                if (ud(t, u, l, e, ot)) {
                    Lt = 1, Da(t, Ml(e, t.current)), ft = null;
                    return;
                }
            } catch (a) {
                if (u !== null) throw ft = u, a;
                Lt = 1, Da(t, Ml(e, t.current)), ft = null;
                return;
            }
            l.flags & 32768 ? (ht || n === 1 ? t = !0 : jn || (ot & 536870912) !== 0 ? t = !1 : (Be = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = bl.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ns(l, t)) : Za(l);
        }
        function Za(t) {
            var l = t;
            do {
                if ((l.flags & 32768) !== 0) {
                    Ns(l, Be);
                    return;
                }
                t = l.return;
                var e = cd(l.alternate, l, oe);
                if (e !== null) {
                    ft = e;
                    return;
                }
                if (l = l.sibling, l !== null) {
                    ft = l;
                    return;
                }
                ft = l = t;
            }while (l !== null);
            Lt === 0 && (Lt = 5);
        }
        function Ns(t, l) {
            do {
                var e = fd(t.alternate, t);
                if (e !== null) {
                    e.flags &= 32767, ft = e;
                    return;
                }
                if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
                    ft = t;
                    return;
                }
                ft = t = e;
            }while (t !== null);
            Lt = 6, ft = null;
        }
        function Cs(t, l, e, n, u, a, f, r, h) {
            t.cancelPendingCommit = null;
            do Va();
            while ($t !== 0);
            if ((At & 6) !== 0) throw Error(m(327));
            if (l !== null) {
                if (l === t.current) throw Error(m(177));
                if (a = l.lanes | l.childLanes, a |= qi, W0(t, e, a, f, r, h), t === Dt && (ft = Dt = null, ot = 0), wn = l, De = t, se = e, Vc = a, Kc = u, As = n, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Ed(i, function() {
                    return ws(), null;
                })) : (t.callbackNode = null, t.callbackPriority = 0), n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
                    n = _.T, _.T = null, u = H.p, H.p = 2, f = At, At |= 4;
                    try {
                        rd(t, l, e);
                    } finally{
                        At = f, H.p = u, _.T = n;
                    }
                }
                $t = 1, Rs(), Hs(), js();
            }
        }
        function Rs() {
            if ($t === 1) {
                $t = 0;
                var t = De, l = wn, e = (l.flags & 13878) !== 0;
                if ((l.subtreeFlags & 13878) !== 0 || e) {
                    e = _.T, _.T = null;
                    var n = H.p;
                    H.p = 2;
                    var u = At;
                    At |= 4;
                    try {
                        ys(l, t);
                        var a = ff, f = Sr(t.containerInfo), r = a.focusedElem, h = a.selectionRange;
                        if (f !== r && r && r.ownerDocument && pr(r.ownerDocument.documentElement, r)) {
                            if (h !== null && Ni(r)) {
                                var E = h.start, B = h.end;
                                if (B === void 0 && (B = E), "selectionStart" in r) r.selectionStart = E, r.selectionEnd = Math.min(B, r.value.length);
                                else {
                                    var N = r.ownerDocument || document, b = N && N.defaultView || window;
                                    if (b.getSelection) {
                                        var x = b.getSelection(), Z = r.textContent.length, P = Math.min(h.start, Z), Mt = h.end === void 0 ? P : Math.min(h.end, Z);
                                        !x.extend && P > Mt && (f = Mt, Mt = P, P = f);
                                        var g = gr(r, P), y = gr(r, Mt);
                                        if (g && y && (x.rangeCount !== 1 || x.anchorNode !== g.node || x.anchorOffset !== g.offset || x.focusNode !== y.node || x.focusOffset !== y.offset)) {
                                            var S = N.createRange();
                                            S.setStart(g.node, g.offset), x.removeAllRanges(), P > Mt ? (x.addRange(S), x.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), x.addRange(S));
                                        }
                                    }
                                }
                            }
                            for(N = [], x = r; x = x.parentNode;)x.nodeType === 1 && N.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop
                            });
                            for(typeof r.focus == "function" && r.focus(), r = 0; r < N.length; r++){
                                var D = N[r];
                                D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
                            }
                        }
                        ni = !!cf, ff = cf = null;
                    } finally{
                        At = u, H.p = n, _.T = e;
                    }
                }
                t.current = l, $t = 2;
            }
        }
        function Hs() {
            if ($t === 2) {
                $t = 0;
                var t = De, l = wn, e = (l.flags & 8772) !== 0;
                if ((l.subtreeFlags & 8772) !== 0 || e) {
                    e = _.T, _.T = null;
                    var n = H.p;
                    H.p = 2;
                    var u = At;
                    At |= 4;
                    try {
                        rs(t, l.alternate, l);
                    } finally{
                        At = u, H.p = n, _.T = e;
                    }
                }
                $t = 3;
            }
        }
        function js() {
            if ($t === 4 || $t === 3) {
                $t = 0, $n();
                var t = De, l = wn, e = se, n = As;
                (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? $t = 5 : ($t = 0, wn = De = null, qs(t, t.pendingLanes));
                var u = t.pendingLanes;
                if (u === 0 && (Me = null), di(e), l = l.stateNode, I && typeof I.onCommitFiberRoot == "function") try {
                    I.onCommitFiberRoot(M, l, void 0, (l.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    l = _.T, u = H.p, H.p = 2, _.T = null;
                    try {
                        for(var a = t.onRecoverableError, f = 0; f < n.length; f++){
                            var r = n[f];
                            a(r.value, {
                                componentStack: r.stack
                            });
                        }
                    } finally{
                        _.T = l, H.p = u;
                    }
                }
                (se & 3) !== 0 && Va(), Jl(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === Jc ? Du++ : (Du = 0, Jc = t) : Du = 0, Nu(0);
            }
        }
        function qs(t, l) {
            (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, hu(l)));
        }
        function Va() {
            return Rs(), Hs(), js(), ws();
        }
        function ws() {
            if ($t !== 5) return !1;
            var t = De, l = Vc;
            Vc = 0;
            var e = di(se), n = _.T, u = H.p;
            try {
                H.p = 32 > e ? 32 : e, _.T = null, e = Kc, Kc = null;
                var a = De, f = se;
                if ($t = 0, wn = De = null, se = 0, (At & 6) !== 0) throw Error(m(331));
                var r = At;
                if (At |= 4, Ss(a.current), vs(a, a.current, f, e), At = r, Nu(0, !1), I && typeof I.onPostCommitFiberRoot == "function") try {
                    I.onPostCommitFiberRoot(M, a);
                } catch  {}
                return !0;
            } finally{
                H.p = u, _.T = n, qs(t, l);
            }
        }
        function Ys(t, l, e) {
            l = Ml(e, l), l = _c(t.stateNode, l, 2), t = ze(t, l, 2), t !== null && (In(t, 2), Jl(t));
        }
        function xt(t, l, e) {
            if (t.tag === 3) Ys(t, t, e);
            else for(; l !== null;){
                if (l.tag === 3) {
                    Ys(l, t, e);
                    break;
                } else if (l.tag === 1) {
                    var n = l.stateNode;
                    if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Me === null || !Me.has(n))) {
                        t = Ml(e, t), e = Go(2), n = ze(l, e, 2), n !== null && (Lo(e, n, l, t), In(n, 2), Jl(n));
                        break;
                    }
                }
                l = l.return;
            }
        }
        function $c(t, l, e) {
            var n = t.pingCache;
            if (n === null) {
                n = t.pingCache = new hd;
                var u = new Set;
                n.set(l, u);
            } else u = n.get(l), u === void 0 && (u = new Set, n.set(l, u));
            u.has(e) || (Xc = !0, u.add(e), t = gd.bind(null, t, l, e), l.then(t, t));
        }
        function gd(t, l, e) {
            var n = t.pingCache;
            n !== null && n.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Dt === t && (ot & e) === e && (Lt === 4 || Lt === 3 && (ot & 62914560) === ot && 300 > cl() - Ya ? (At & 2) === 0 && Yn(t, 0) : Qc |= e, qn === ot && (qn = 0)), Jl(t);
        }
        function Gs(t, l) {
            l === 0 && (l = Cf()), t = Ve(t, l), t !== null && (In(t, l), Jl(t));
        }
        function pd(t) {
            var l = t.memoizedState, e = 0;
            l !== null && (e = l.retryLane), Gs(t, e);
        }
        function Sd(t, l) {
            var e = 0;
            switch(t.tag){
                case 31:
                case 13:
                    var n = t.stateNode, u = t.memoizedState;
                    u !== null && (e = u.retryLane);
                    break;
                case 19:
                    n = t.stateNode;
                    break;
                case 22:
                    n = t.stateNode._retryCache;
                    break;
                default:
                    throw Error(m(314));
            }
            n !== null && n.delete(l), Gs(t, e);
        }
        function Ed(t, l) {
            return cn(t, l);
        }
        var Ka = null, Ln = null, kc = !1, Ja = !1, Ic = !1, Ce = 0;
        function Jl(t) {
            t !== Ln && t.next === null && (Ln === null ? Ka = Ln = t : Ln = Ln.next = t), Ja = !0, kc || (kc = !0, Ad());
        }
        function Nu(t, l) {
            if (!Ic && Ja) {
                Ic = !0;
                do for(var e = !1, n = Ka; n !== null;){
                    if (t !== 0) {
                        var u = n.pendingLanes;
                        if (u === 0) var a = 0;
                        else {
                            var f = n.suspendedLanes, r = n.pingedLanes;
                            a = (1 << 31 - ct(42 | t) + 1) - 1, a &= u & ~(f & ~r), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
                        }
                        a !== 0 && (e = !0, Zs(n, a));
                    } else a = ot, a = ku(n, n === Dt ? a : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (a & 3) === 0 || kn(n, a) || (e = !0, Zs(n, a));
                    n = n.next;
                }
                while (e);
                Ic = !1;
            }
        }
        function bd() {
            Ls();
        }
        function Ls() {
            Ja = kc = !1;
            var t = 0;
            Ce !== 0 && Nd() && (t = Ce);
            for(var l = cl(), e = null, n = Ka; n !== null;){
                var u = n.next, a = Xs(n, l);
                a === 0 ? (n.next = null, e === null ? Ka = u : e.next = u, u === null && (Ln = e)) : (e = n, (t !== 0 || (a & 3) !== 0) && (Ja = !0)), n = u;
            }
            $t !== 0 && $t !== 5 || Nu(t), Ce !== 0 && (Ce = 0);
        }
        function Xs(t, l) {
            for(var e = t.suspendedLanes, n = t.pingedLanes, u = t.expirationTimes, a = t.pendingLanes & -62914561; 0 < a;){
                var f = 31 - ct(a), r = 1 << f, h = u[f];
                h === -1 ? ((r & e) === 0 || (r & n) !== 0) && (u[f] = F0(r, l)) : h <= l && (t.expiredLanes |= r), a &= ~r;
            }
            if (l = Dt, e = ot, e = ku(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n = t.callbackNode, e === 0 || t === l && (_t === 2 || _t === 9) || t.cancelPendingCommit !== null) return n !== null && n !== null && me(n), t.callbackNode = null, t.callbackPriority = 0;
            if ((e & 3) === 0 || kn(t, e)) {
                if (l = e & -e, l === t.callbackPriority) return l;
                switch(n !== null && me(n), di(e)){
                    case 2:
                    case 8:
                        e = o;
                        break;
                    case 32:
                        e = i;
                        break;
                    case 268435456:
                        e = s;
                        break;
                    default:
                        e = i;
                }
                return n = Qs.bind(null, t), e = cn(e, n), t.callbackPriority = l, t.callbackNode = e, l;
            }
            return n !== null && n !== null && me(n), t.callbackPriority = 2, t.callbackNode = null, 2;
        }
        function Qs(t, l) {
            if ($t !== 0 && $t !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
            var e = t.callbackNode;
            if (Va() && t.callbackNode !== e) return null;
            var n = ot;
            return n = ku(t, t === Dt ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n === 0 ? null : (zs(t, n, l), Xs(t, cl()), t.callbackNode != null && t.callbackNode === e ? Qs.bind(null, t) : null);
        }
        function Zs(t, l) {
            if (Va()) return null;
            zs(t, l, !0);
        }
        function Ad() {
            Rd(function() {
                (At & 6) !== 0 ? cn(Ju, bd) : Ls();
            });
        }
        function Pc() {
            if (Ce === 0) {
                var t = xn;
                t === 0 && (t = Fu, Fu <<= 1, (Fu & 261888) === 0 && (Fu = 256)), Ce = t;
            }
            return Ce;
        }
        function Vs(t) {
            return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : la("" + t);
        }
        function Ks(t, l) {
            var e = l.ownerDocument.createElement("input");
            return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
        }
        function Td(t, l, e, n, u) {
            if (l === "submit" && e && e.stateNode === u) {
                var a = Vs((u[sl] || null).action), f = n.submitter;
                f && (l = (l = f[sl] || null) ? Vs(l.formAction) : f.getAttribute("formAction"), l !== null && (a = l, f = null));
                var r = new aa("action", "action", null, n, u);
                t.push({
                    event: r,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (Ce !== 0) {
                                        var h = f ? Ks(u, f) : new FormData(u);
                                        Sc(e, {
                                            pending: !0,
                                            data: h,
                                            method: u.method,
                                            action: a
                                        }, null, h);
                                    }
                                } else typeof a == "function" && (r.preventDefault(), h = f ? Ks(u, f) : new FormData(u), Sc(e, {
                                    pending: !0,
                                    data: h,
                                    method: u.method,
                                    action: a
                                }, a, h));
                            },
                            currentTarget: u
                        }
                    ]
                });
            }
        }
        for(var tf = 0; tf < ji.length; tf++){
            var lf = ji[tf], zd = lf.toLowerCase(), _d = lf[0].toUpperCase() + lf.slice(1);
            wl(zd, "on" + _d);
        }
        wl(Ar, "onAnimationEnd"), wl(Tr, "onAnimationIteration"), wl(zr, "onAnimationStart"), wl("dblclick", "onDoubleClick"), wl("focusin", "onFocus"), wl("focusout", "onBlur"), wl(Lh, "onTransitionRun"), wl(Xh, "onTransitionStart"), wl(Qh, "onTransitionCancel"), wl(_r, "onTransitionEnd"), hn("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), hn("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), hn("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), hn("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), Le("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Le("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Le("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Le("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Le("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Le("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Cu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cu));
        function Js(t, l) {
            l = (l & 4) !== 0;
            for(var e = 0; e < t.length; e++){
                var n = t[e], u = n.event;
                n = n.listeners;
                t: {
                    var a = void 0;
                    if (l) for(var f = n.length - 1; 0 <= f; f--){
                        var r = n[f], h = r.instance, E = r.currentTarget;
                        if (r = r.listener, h !== a && u.isPropagationStopped()) break t;
                        a = r, u.currentTarget = E;
                        try {
                            a(u);
                        } catch (B) {
                            fa(B);
                        }
                        u.currentTarget = null, a = h;
                    }
                    else for(f = 0; f < n.length; f++){
                        if (r = n[f], h = r.instance, E = r.currentTarget, r = r.listener, h !== a && u.isPropagationStopped()) break t;
                        a = r, u.currentTarget = E;
                        try {
                            a(u);
                        } catch (B) {
                            fa(B);
                        }
                        u.currentTarget = null, a = h;
                    }
                }
            }
        }
        function rt(t, l) {
            var e = l[yi];
            e === void 0 && (e = l[yi] = new Set);
            var n = t + "__bubble";
            e.has(n) || (Fs(l, t, 2, !1), e.add(n));
        }
        function ef(t, l, e) {
            var n = 0;
            l && (n |= 4), Fs(e, t, n, l);
        }
        var Fa = "_reactListening" + Math.random().toString(36).slice(2);
        function nf(t) {
            if (!t[Fa]) {
                t[Fa] = !0, Gf.forEach(function(e) {
                    e !== "selectionchange" && (xd.has(e) || ef(e, !1, t), ef(e, !0, t));
                });
                var l = t.nodeType === 9 ? t : t.ownerDocument;
                l === null || l[Fa] || (l[Fa] = !0, ef("selectionchange", !1, l));
            }
        }
        function Fs(t, l, e, n) {
            switch(T0(l)){
                case 2:
                    var u = ty;
                    break;
                case 8:
                    u = ly;
                    break;
                default:
                    u = Sf;
            }
            e = u.bind(null, l, e, t), u = void 0, !Ti || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), n ? u !== void 0 ? t.addEventListener(l, e, {
                capture: !0,
                passive: u
            }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
                passive: u
            }) : t.addEventListener(l, e, !1);
        }
        function uf(t, l, e, n, u) {
            var a = n;
            if ((l & 1) === 0 && (l & 2) === 0 && n !== null) t: for(;;){
                if (n === null) return;
                var f = n.tag;
                if (f === 3 || f === 4) {
                    var r = n.stateNode.containerInfo;
                    if (r === u) break;
                    if (f === 4) for(f = n.return; f !== null;){
                        var h = f.tag;
                        if ((h === 3 || h === 4) && f.stateNode.containerInfo === u) return;
                        f = f.return;
                    }
                    for(; r !== null;){
                        if (f = rn(r), f === null) return;
                        if (h = f.tag, h === 5 || h === 6 || h === 26 || h === 27) {
                            n = a = f;
                            continue t;
                        }
                        r = r.parentNode;
                    }
                }
                n = n.return;
            }
            If(function() {
                var E = a, B = bi(e), N = [];
                t: {
                    var b = xr.get(t);
                    if (b !== void 0) {
                        var x = aa, Z = t;
                        switch(t){
                            case "keypress":
                                if (na(e) === 0) break t;
                            case "keydown":
                            case "keyup":
                                x = Sh;
                                break;
                            case "focusin":
                                Z = "focus", x = Ui;
                                break;
                            case "focusout":
                                Z = "blur", x = Ui;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                x = Ui;
                                break;
                            case "click":
                                if (e.button === 2) break t;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                x = lr;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                x = ch;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                x = Ah;
                                break;
                            case Ar:
                            case Tr:
                            case zr:
                                x = oh;
                                break;
                            case _r:
                                x = zh;
                                break;
                            case "scroll":
                            case "scrollend":
                                x = ah;
                                break;
                            case "wheel":
                                x = xh;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                x = hh;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                x = nr;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                x = Bh;
                        }
                        var P = (l & 4) !== 0, Mt = !P && (t === "scroll" || t === "scrollend"), g = P ? b !== null ? b + "Capture" : null : b;
                        P = [];
                        for(var y = E, S; y !== null;){
                            var D = y;
                            if (S = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || S === null || g === null || (D = lu(y, g), D != null && P.push(Ru(y, D, S))), Mt) break;
                            y = y.return;
                        }
                        0 < P.length && (b = new x(b, Z, null, e, B), N.push({
                            event: b,
                            listeners: P
                        }));
                    }
                }
                if ((l & 7) === 0) {
                    t: {
                        if (b = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", b && e !== Ei && (Z = e.relatedTarget || e.fromElement) && (rn(Z) || Z[fn])) break t;
                        if ((x || b) && (b = B.window === B ? B : (b = B.ownerDocument) ? b.defaultView || b.parentWindow : window, x ? (Z = e.relatedTarget || e.toElement, x = E, Z = Z ? rn(Z) : null, Z !== null && (Mt = V(Z), P = Z.tag, Z !== Mt || P !== 5 && P !== 27 && P !== 6) && (Z = null)) : (x = null, Z = E), x !== Z)) {
                            if (P = lr, D = "onMouseLeave", g = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (P = nr, D = "onPointerLeave", g = "onPointerEnter", y = "pointer"), Mt = x == null ? b : tu(x), S = Z == null ? b : tu(Z), b = new P(D, y + "leave", x, e, B), b.target = Mt, b.relatedTarget = S, D = null, rn(B) === E && (P = new P(g, y + "enter", Z, e, B), P.target = S, P.relatedTarget = Mt, D = P), Mt = D, x && Z) l: {
                                for(P = Ud, g = x, y = Z, S = 0, D = g; D; D = P(D))S++;
                                D = 0;
                                for(var $ = y; $; $ = P($))D++;
                                for(; 0 < S - D;)g = P(g), S--;
                                for(; 0 < D - S;)y = P(y), D--;
                                for(; S--;){
                                    if (g === y || y !== null && g === y.alternate) {
                                        P = g;
                                        break l;
                                    }
                                    g = P(g), y = P(y);
                                }
                                P = null;
                            }
                            else P = null;
                            x !== null && Ws(N, b, x, P, !1), Z !== null && Mt !== null && Ws(N, Mt, Z, P, !0);
                        }
                    }
                    t: {
                        if (b = E ? tu(E) : window, x = b.nodeName && b.nodeName.toLowerCase(), x === "select" || x === "input" && b.type === "file") var pt = sr;
                        else if (rr(b)) if (hr) pt = wh;
                        else {
                            pt = jh;
                            var K = Hh;
                        }
                        else x = b.nodeName, !x || x.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? E && Si(E.elementType) && (pt = sr) : pt = qh;
                        if (pt && (pt = pt(t, E))) {
                            or(N, pt, e, B);
                            break t;
                        }
                        K && K(t, b, E), t === "focusout" && E && b.type === "number" && E.memoizedProps.value != null && pi(b, "number", b.value);
                    }
                    switch(K = E ? tu(E) : window, t){
                        case "focusin":
                            (rr(K) || K.contentEditable === "true") && (pn = K, Ci = E, ru = null);
                            break;
                        case "focusout":
                            ru = Ci = pn = null;
                            break;
                        case "mousedown":
                            Ri = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Ri = !1, Er(N, e, B);
                            break;
                        case "selectionchange":
                            if (Gh) break;
                        case "keydown":
                        case "keyup":
                            Er(N, e, B);
                    }
                    var ut;
                    if (Oi) t: {
                        switch(t){
                            case "compositionstart":
                                var st = "onCompositionStart";
                                break t;
                            case "compositionend":
                                st = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                st = "onCompositionUpdate";
                                break t;
                        }
                        st = void 0;
                    }
                    else gn ? cr(t, e) && (st = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (st = "onCompositionStart");
                    st && (ur && e.locale !== "ko" && (gn || st !== "onCompositionStart" ? st === "onCompositionEnd" && gn && (ut = Pf()) : (ge = B, zi = "value" in ge ? ge.value : ge.textContent, gn = !0)), K = Wa(E, st), 0 < K.length && (st = new er(st, t, null, e, B), N.push({
                        event: st,
                        listeners: K
                    }), ut ? st.data = ut : (ut = fr(e), ut !== null && (st.data = ut)))), (ut = Mh ? Dh(t, e) : Nh(t, e)) && (st = Wa(E, "onBeforeInput"), 0 < st.length && (K = new er("onBeforeInput", "beforeinput", null, e, B), N.push({
                        event: K,
                        listeners: st
                    }), K.data = ut)), Td(N, t, E, e, B);
                }
                Js(N, l);
            });
        }
        function Ru(t, l, e) {
            return {
                instance: t,
                listener: l,
                currentTarget: e
            };
        }
        function Wa(t, l) {
            for(var e = l + "Capture", n = []; t !== null;){
                var u = t, a = u.stateNode;
                if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || a === null || (u = lu(t, e), u != null && n.unshift(Ru(t, u, a)), u = lu(t, l), u != null && n.push(Ru(t, u, a))), t.tag === 3) return n;
                t = t.return;
            }
            return [];
        }
        function Ud(t) {
            if (t === null) return null;
            do t = t.return;
            while (t && t.tag !== 5 && t.tag !== 27);
            return t || null;
        }
        function Ws(t, l, e, n, u) {
            for(var a = l._reactName, f = []; e !== null && e !== n;){
                var r = e, h = r.alternate, E = r.stateNode;
                if (r = r.tag, h !== null && h === n) break;
                r !== 5 && r !== 26 && r !== 27 || E === null || (h = E, u ? (E = lu(e, a), E != null && f.unshift(Ru(e, E, h))) : u || (E = lu(e, a), E != null && f.push(Ru(e, E, h)))), e = e.return;
            }
            f.length !== 0 && t.push({
                event: l,
                listeners: f
            });
        }
        var Bd = /\r\n?/g, Od = /\u0000|\uFFFD/g;
        function $s(t) {
            return (typeof t == "string" ? t : "" + t).replace(Bd, `
`).replace(Od, "");
        }
        function ks(t, l) {
            return l = $s(l), $s(t) === l;
        }
        function Ot(t, l, e, n, u, a) {
            switch(e){
                case "children":
                    typeof n == "string" ? l === "body" || l === "textarea" && n === "" || yn(t, n) : (typeof n == "number" || typeof n == "bigint") && l !== "body" && yn(t, "" + n);
                    break;
                case "className":
                    Pu(t, "class", n);
                    break;
                case "tabIndex":
                    Pu(t, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    Pu(t, e, n);
                    break;
                case "style":
                    $f(t, n, a);
                    break;
                case "data":
                    if (l !== "object") {
                        Pu(t, "data", n);
                        break;
                    }
                case "src":
                case "href":
                    if (n === "" && (l !== "a" || e !== "href")) {
                        t.removeAttribute(e);
                        break;
                    }
                    if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                        t.removeAttribute(e);
                        break;
                    }
                    n = la("" + n), t.setAttribute(e, n);
                    break;
                case "action":
                case "formAction":
                    if (typeof n == "function") {
                        t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof a == "function" && (e === "formAction" ? (l !== "input" && Ot(t, l, "name", u.name, u, null), Ot(t, l, "formEncType", u.formEncType, u, null), Ot(t, l, "formMethod", u.formMethod, u, null), Ot(t, l, "formTarget", u.formTarget, u, null)) : (Ot(t, l, "encType", u.encType, u, null), Ot(t, l, "method", u.method, u, null), Ot(t, l, "target", u.target, u, null)));
                    if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                        t.removeAttribute(e);
                        break;
                    }
                    n = la("" + n), t.setAttribute(e, n);
                    break;
                case "onClick":
                    n != null && (t.onclick = $l);
                    break;
                case "onScroll":
                    n != null && rt("scroll", t);
                    break;
                case "onScrollEnd":
                    n != null && rt("scrollend", t);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(m(61));
                        if (e = n.__html, e != null) {
                            if (u.children != null) throw Error(m(60));
                            t.innerHTML = e;
                        }
                    }
                    break;
                case "multiple":
                    t.multiple = n && typeof n != "function" && typeof n != "symbol";
                    break;
                case "muted":
                    t.muted = n && typeof n != "function" && typeof n != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                        t.removeAttribute("xlink:href");
                        break;
                    }
                    e = la("" + n), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, "" + n) : t.removeAttribute(e);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
                    break;
                case "capture":
                case "download":
                    n === !0 ? t.setAttribute(e, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, n) : t.removeAttribute(e);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(e, n) : t.removeAttribute(e);
                    break;
                case "rowSpan":
                case "start":
                    n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
                    break;
                case "popover":
                    rt("beforetoggle", t), rt("toggle", t), Iu(t, "popover", n);
                    break;
                case "xlinkActuate":
                    Wl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    Wl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    Wl(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    Wl(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    Wl(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    Wl(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    Wl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    Wl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    Wl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    Iu(t, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = nh.get(e) || e, Iu(t, e, n));
            }
        }
        function af(t, l, e, n, u, a) {
            switch(e){
                case "style":
                    $f(t, n, a);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(m(61));
                        if (e = n.__html, e != null) {
                            if (u.children != null) throw Error(m(60));
                            t.innerHTML = e;
                        }
                    }
                    break;
                case "children":
                    typeof n == "string" ? yn(t, n) : (typeof n == "number" || typeof n == "bigint") && yn(t, "" + n);
                    break;
                case "onScroll":
                    n != null && rt("scroll", t);
                    break;
                case "onScrollEnd":
                    n != null && rt("scrollend", t);
                    break;
                case "onClick":
                    n != null && (t.onclick = $l);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!Lf.hasOwnProperty(e)) t: {
                        if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), a = t[sl] || null, a = a != null ? a[e] : null, typeof a == "function" && t.removeEventListener(l, a, u), typeof n == "function")) {
                            typeof a != "function" && a !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, n, u);
                            break t;
                        }
                        e in t ? t[e] = n : n === !0 ? t.setAttribute(e, "") : Iu(t, e, n);
                    }
            }
        }
        function ul(t, l, e) {
            switch(l){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    rt("error", t), rt("load", t);
                    var n = !1, u = !1, a;
                    for(a in e)if (e.hasOwnProperty(a)) {
                        var f = e[a];
                        if (f != null) switch(a){
                            case "src":
                                n = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(m(137, l));
                            default:
                                Ot(t, l, a, f, e, null);
                        }
                    }
                    u && Ot(t, l, "srcSet", e.srcSet, e, null), n && Ot(t, l, "src", e.src, e, null);
                    return;
                case "input":
                    rt("invalid", t);
                    var r = a = f = u = null, h = null, E = null;
                    for(n in e)if (e.hasOwnProperty(n)) {
                        var B = e[n];
                        if (B != null) switch(n){
                            case "name":
                                u = B;
                                break;
                            case "type":
                                f = B;
                                break;
                            case "checked":
                                h = B;
                                break;
                            case "defaultChecked":
                                E = B;
                                break;
                            case "value":
                                a = B;
                                break;
                            case "defaultValue":
                                r = B;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (B != null) throw Error(m(137, l));
                                break;
                            default:
                                Ot(t, l, n, B, e, null);
                        }
                    }
                    Kf(t, a, r, h, E, f, u, !1);
                    return;
                case "select":
                    rt("invalid", t), n = f = a = null;
                    for(u in e)if (e.hasOwnProperty(u) && (r = e[u], r != null)) switch(u){
                        case "value":
                            a = r;
                            break;
                        case "defaultValue":
                            f = r;
                            break;
                        case "multiple":
                            n = r;
                        default:
                            Ot(t, l, u, r, e, null);
                    }
                    l = a, e = f, t.multiple = !!n, l != null ? dn(t, !!n, l, !1) : e != null && dn(t, !!n, e, !0);
                    return;
                case "textarea":
                    rt("invalid", t), a = u = n = null;
                    for(f in e)if (e.hasOwnProperty(f) && (r = e[f], r != null)) switch(f){
                        case "value":
                            n = r;
                            break;
                        case "defaultValue":
                            u = r;
                            break;
                        case "children":
                            a = r;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (r != null) throw Error(m(91));
                            break;
                        default:
                            Ot(t, l, f, r, e, null);
                    }
                    Ff(t, n, u, a);
                    return;
                case "option":
                    for(h in e)if (e.hasOwnProperty(h) && (n = e[h], n != null)) switch(h){
                        case "selected":
                            t.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            Ot(t, l, h, n, e, null);
                    }
                    return;
                case "dialog":
                    rt("beforetoggle", t), rt("toggle", t), rt("cancel", t), rt("close", t);
                    break;
                case "iframe":
                case "object":
                    rt("load", t);
                    break;
                case "video":
                case "audio":
                    for(n = 0; n < Cu.length; n++)rt(Cu[n], t);
                    break;
                case "image":
                    rt("error", t), rt("load", t);
                    break;
                case "details":
                    rt("toggle", t);
                    break;
                case "embed":
                case "source":
                case "link":
                    rt("error", t), rt("load", t);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for(E in e)if (e.hasOwnProperty(E) && (n = e[E], n != null)) switch(E){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(m(137, l));
                        default:
                            Ot(t, l, E, n, e, null);
                    }
                    return;
                default:
                    if (Si(l)) {
                        for(B in e)e.hasOwnProperty(B) && (n = e[B], n !== void 0 && af(t, l, B, n, e, void 0));
                        return;
                    }
            }
            for(r in e)e.hasOwnProperty(r) && (n = e[r], n != null && Ot(t, l, r, n, e, null));
        }
        function Md(t, l, e, n) {
            switch(l){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var u = null, a = null, f = null, r = null, h = null, E = null, B = null;
                    for(x in e){
                        var N = e[x];
                        if (e.hasOwnProperty(x) && N != null) switch(x){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                h = N;
                            default:
                                n.hasOwnProperty(x) || Ot(t, l, x, null, n, N);
                        }
                    }
                    for(var b in n){
                        var x = n[b];
                        if (N = e[b], n.hasOwnProperty(b) && (x != null || N != null)) switch(b){
                            case "type":
                                a = x;
                                break;
                            case "name":
                                u = x;
                                break;
                            case "checked":
                                E = x;
                                break;
                            case "defaultChecked":
                                B = x;
                                break;
                            case "value":
                                f = x;
                                break;
                            case "defaultValue":
                                r = x;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (x != null) throw Error(m(137, l));
                                break;
                            default:
                                x !== N && Ot(t, l, b, x, n, N);
                        }
                    }
                    gi(t, f, r, h, E, B, a, u);
                    return;
                case "select":
                    x = f = r = b = null;
                    for(a in e)if (h = e[a], e.hasOwnProperty(a) && h != null) switch(a){
                        case "value":
                            break;
                        case "multiple":
                            x = h;
                        default:
                            n.hasOwnProperty(a) || Ot(t, l, a, null, n, h);
                    }
                    for(u in n)if (a = n[u], h = e[u], n.hasOwnProperty(u) && (a != null || h != null)) switch(u){
                        case "value":
                            b = a;
                            break;
                        case "defaultValue":
                            r = a;
                            break;
                        case "multiple":
                            f = a;
                        default:
                            a !== h && Ot(t, l, u, a, n, h);
                    }
                    l = r, e = f, n = x, b != null ? dn(t, !!e, b, !1) : !!n != !!e && (l != null ? dn(t, !!e, l, !0) : dn(t, !!e, e ? [] : "", !1));
                    return;
                case "textarea":
                    x = b = null;
                    for(r in e)if (u = e[r], e.hasOwnProperty(r) && u != null && !n.hasOwnProperty(r)) switch(r){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ot(t, l, r, null, n, u);
                    }
                    for(f in n)if (u = n[f], a = e[f], n.hasOwnProperty(f) && (u != null || a != null)) switch(f){
                        case "value":
                            b = u;
                            break;
                        case "defaultValue":
                            x = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(m(91));
                            break;
                        default:
                            u !== a && Ot(t, l, f, u, n, a);
                    }
                    Jf(t, b, x);
                    return;
                case "option":
                    for(var Z in e)if (b = e[Z], e.hasOwnProperty(Z) && b != null && !n.hasOwnProperty(Z)) switch(Z){
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            Ot(t, l, Z, null, n, b);
                    }
                    for(h in n)if (b = n[h], x = e[h], n.hasOwnProperty(h) && b !== x && (b != null || x != null)) switch(h){
                        case "selected":
                            t.selected = b && typeof b != "function" && typeof b != "symbol";
                            break;
                        default:
                            Ot(t, l, h, b, n, x);
                    }
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for(var P in e)b = e[P], e.hasOwnProperty(P) && b != null && !n.hasOwnProperty(P) && Ot(t, l, P, null, n, b);
                    for(E in n)if (b = n[E], x = e[E], n.hasOwnProperty(E) && b !== x && (b != null || x != null)) switch(E){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (b != null) throw Error(m(137, l));
                            break;
                        default:
                            Ot(t, l, E, b, n, x);
                    }
                    return;
                default:
                    if (Si(l)) {
                        for(var Mt in e)b = e[Mt], e.hasOwnProperty(Mt) && b !== void 0 && !n.hasOwnProperty(Mt) && af(t, l, Mt, void 0, n, b);
                        for(B in n)b = n[B], x = e[B], !n.hasOwnProperty(B) || b === x || b === void 0 && x === void 0 || af(t, l, B, b, n, x);
                        return;
                    }
            }
            for(var g in e)b = e[g], e.hasOwnProperty(g) && b != null && !n.hasOwnProperty(g) && Ot(t, l, g, null, n, b);
            for(N in n)b = n[N], x = e[N], !n.hasOwnProperty(N) || b === x || b == null && x == null || Ot(t, l, N, b, n, x);
        }
        function Is(t) {
            switch(t){
                case "css":
                case "script":
                case "font":
                case "img":
                case "image":
                case "input":
                case "link":
                    return !0;
                default:
                    return !1;
            }
        }
        function Dd() {
            if (typeof performance.getEntriesByType == "function") {
                for(var t = 0, l = 0, e = performance.getEntriesByType("resource"), n = 0; n < e.length; n++){
                    var u = e[n], a = u.transferSize, f = u.initiatorType, r = u.duration;
                    if (a && r && Is(f)) {
                        for(f = 0, r = u.responseEnd, n += 1; n < e.length; n++){
                            var h = e[n], E = h.startTime;
                            if (E > r) break;
                            var B = h.transferSize, N = h.initiatorType;
                            B && Is(N) && (h = h.responseEnd, f += B * (h < r ? 1 : (r - E) / (h - E)));
                        }
                        if (--n, l += 8 * (a + f) / (u.duration / 1e3), t++, 10 < t) break;
                    }
                }
                if (0 < t) return l / t / 1e6;
            }
            return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
        }
        var cf = null, ff = null;
        function $a(t) {
            return t.nodeType === 9 ? t : t.ownerDocument;
        }
        function Ps(t) {
            switch(t){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function t0(t, l) {
            if (t === 0) switch(l){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return t === 1 && l === "foreignObject" ? 0 : t;
        }
        function rf(t, l) {
            return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
        }
        var of = null;
        function Nd() {
            var t = window.event;
            return t && t.type === "popstate" ? t === of ? !1 : (of = t, !0) : (of = null, !1);
        }
        var l0 = typeof setTimeout == "function" ? setTimeout : void 0, Cd = typeof clearTimeout == "function" ? clearTimeout : void 0, e0 = typeof Promise == "function" ? Promise : void 0, Rd = typeof queueMicrotask == "function" ? queueMicrotask : typeof e0 < "u" ? function(t) {
            return e0.resolve(null).then(t).catch(Hd);
        } : l0;
        function Hd(t) {
            setTimeout(function() {
                throw t;
            });
        }
        function Re(t) {
            return t === "head";
        }
        function n0(t, l) {
            var e = l, n = 0;
            do {
                var u = e.nextSibling;
                if (t.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
                    if (n === 0) {
                        t.removeChild(u), Vn(l);
                        return;
                    }
                    n--;
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") n++;
                else if (e === "html") Hu(t.ownerDocument.documentElement);
                else if (e === "head") {
                    e = t.ownerDocument.head, Hu(e);
                    for(var a = e.firstChild; a;){
                        var f = a.nextSibling, r = a.nodeName;
                        a[Pn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && a.rel.toLowerCase() === "stylesheet" || e.removeChild(a), a = f;
                    }
                } else e === "body" && Hu(t.ownerDocument.body);
                e = u;
            }while (e);
            Vn(l);
        }
        function u0(t, l) {
            var e = t;
            t = 0;
            do {
                var n = e.nextSibling;
                if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), n && n.nodeType === 8) if (e = n.data, e === "/$") {
                    if (t === 0) break;
                    t--;
                } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
                e = n;
            }while (e);
        }
        function sf(t) {
            var l = t.firstChild;
            for(l && l.nodeType === 10 && (l = l.nextSibling); l;){
                var e = l;
                switch(l = l.nextSibling, e.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        sf(e), mi(e);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (e.rel.toLowerCase() === "stylesheet") continue;
                }
                t.removeChild(e);
            }
        }
        function jd(t, l, e, n) {
            for(; t.nodeType === 1;){
                var u = e;
                if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
                    if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
                } else if (n) {
                    if (!t[Pn]) switch(l){
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (a = t.getAttribute("rel"), a === "stylesheet" && t.hasAttribute("data-precedence")) break;
                            if (a !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (a = t.getAttribute("src"), (a !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && a && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                            return t;
                        default:
                            return t;
                    }
                } else if (l === "input" && t.type === "hidden") {
                    var a = u.name == null ? null : "" + u.name;
                    if (u.type === "hidden" && t.getAttribute("name") === a) return t;
                } else return t;
                if (t = Hl(t.nextSibling), t === null) break;
            }
            return null;
        }
        function qd(t, l, e) {
            if (l === "") return null;
            for(; t.nodeType !== 3;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Hl(t.nextSibling), t === null)) return null;
            return t;
        }
        function a0(t, l) {
            for(; t.nodeType !== 8;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Hl(t.nextSibling), t === null)) return null;
            return t;
        }
        function hf(t) {
            return t.data === "$?" || t.data === "$~";
        }
        function df(t) {
            return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
        }
        function wd(t, l) {
            var e = t.ownerDocument;
            if (t.data === "$~") t._reactRetry = l;
            else if (t.data !== "$?" || e.readyState !== "loading") l();
            else {
                var n = function() {
                    l(), e.removeEventListener("DOMContentLoaded", n);
                };
                e.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
            }
        }
        function Hl(t) {
            for(; t != null; t = t.nextSibling){
                var l = t.nodeType;
                if (l === 1 || l === 3) break;
                if (l === 8) {
                    if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F") break;
                    if (l === "/$" || l === "/&") return null;
                }
            }
            return t;
        }
        var yf = null;
        function i0(t) {
            t = t.nextSibling;
            for(var l = 0; t;){
                if (t.nodeType === 8) {
                    var e = t.data;
                    if (e === "/$" || e === "/&") {
                        if (l === 0) return Hl(t.nextSibling);
                        l--;
                    } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
                }
                t = t.nextSibling;
            }
            return null;
        }
        function c0(t) {
            t = t.previousSibling;
            for(var l = 0; t;){
                if (t.nodeType === 8) {
                    var e = t.data;
                    if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                        if (l === 0) return t;
                        l--;
                    } else e !== "/$" && e !== "/&" || l++;
                }
                t = t.previousSibling;
            }
            return null;
        }
        function f0(t, l, e) {
            switch(l = $a(e), t){
                case "html":
                    if (t = l.documentElement, !t) throw Error(m(452));
                    return t;
                case "head":
                    if (t = l.head, !t) throw Error(m(453));
                    return t;
                case "body":
                    if (t = l.body, !t) throw Error(m(454));
                    return t;
                default:
                    throw Error(m(451));
            }
        }
        function Hu(t) {
            for(var l = t.attributes; l.length;)t.removeAttributeNode(l[0]);
            mi(t);
        }
        var jl = new Map, r0 = new Set;
        function ka(t) {
            return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
        }
        var he = H.d;
        H.d = {
            f: Yd,
            r: Gd,
            D: Ld,
            C: Xd,
            L: Qd,
            m: Zd,
            X: Kd,
            S: Vd,
            M: Jd
        };
        function Yd() {
            var t = he.f(), l = Xa();
            return t || l;
        }
        function Gd(t) {
            var l = on(t);
            l !== null && l.tag === 5 && l.type === "form" ? xo(l) : he.r(t);
        }
        var Xn = typeof document > "u" ? null : document;
        function o0(t, l, e) {
            var n = Xn;
            if (n && typeof l == "string" && l) {
                var u = Bl(l);
                u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), r0.has(u) || (r0.add(u), t = {
                    rel: t,
                    crossOrigin: e,
                    href: l
                }, n.querySelector(u) === null && (l = n.createElement("link"), ul(l, "link", t), It(l), n.head.appendChild(l)));
            }
        }
        function Ld(t) {
            he.D(t), o0("dns-prefetch", t, null);
        }
        function Xd(t, l) {
            he.C(t, l), o0("preconnect", t, l);
        }
        function Qd(t, l, e) {
            he.L(t, l, e);
            var n = Xn;
            if (n && t && l) {
                var u = 'link[rel="preload"][as="' + Bl(l) + '"]';
                l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Bl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + Bl(e.imageSizes) + '"]')) : u += '[href="' + Bl(t) + '"]';
                var a = u;
                switch(l){
                    case "style":
                        a = Qn(t);
                        break;
                    case "script":
                        a = Zn(t);
                }
                jl.has(a) || (t = C({
                    rel: "preload",
                    href: l === "image" && e && e.imageSrcSet ? void 0 : t,
                    as: l
                }, e), jl.set(a, t), n.querySelector(u) !== null || l === "style" && n.querySelector(ju(a)) || l === "script" && n.querySelector(qu(a)) || (l = n.createElement("link"), ul(l, "link", t), It(l), n.head.appendChild(l)));
            }
        }
        function Zd(t, l) {
            he.m(t, l);
            var e = Xn;
            if (e && t) {
                var n = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + Bl(n) + '"][href="' + Bl(t) + '"]', a = u;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        a = Zn(t);
                }
                if (!jl.has(a) && (t = C({
                    rel: "modulepreload",
                    href: t
                }, l), jl.set(a, t), e.querySelector(u) === null)) {
                    switch(n){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (e.querySelector(qu(a))) return;
                    }
                    n = e.createElement("link"), ul(n, "link", t), It(n), e.head.appendChild(n);
                }
            }
        }
        function Vd(t, l, e) {
            he.S(t, l, e);
            var n = Xn;
            if (n && t) {
                var u = sn(n).hoistableStyles, a = Qn(t);
                l = l || "default";
                var f = u.get(a);
                if (!f) {
                    var r = {
                        loading: 0,
                        preload: null
                    };
                    if (f = n.querySelector(ju(a))) r.loading = 5;
                    else {
                        t = C({
                            rel: "stylesheet",
                            href: t,
                            "data-precedence": l
                        }, e), (e = jl.get(a)) && mf(t, e);
                        var h = f = n.createElement("link");
                        It(h), ul(h, "link", t), h._p = new Promise(function(E, B) {
                            h.onload = E, h.onerror = B;
                        }), h.addEventListener("load", function() {
                            r.loading |= 1;
                        }), h.addEventListener("error", function() {
                            r.loading |= 2;
                        }), r.loading |= 4, Ia(f, l, n);
                    }
                    f = {
                        type: "stylesheet",
                        instance: f,
                        count: 1,
                        state: r
                    }, u.set(a, f);
                }
            }
        }
        function Kd(t, l) {
            he.X(t, l);
            var e = Xn;
            if (e && t) {
                var n = sn(e).hoistableScripts, u = Zn(t), a = n.get(u);
                a || (a = e.querySelector(qu(u)), a || (t = C({
                    src: t,
                    async: !0
                }, l), (l = jl.get(u)) && vf(t, l), a = e.createElement("script"), It(a), ul(a, "link", t), e.head.appendChild(a)), a = {
                    type: "script",
                    instance: a,
                    count: 1,
                    state: null
                }, n.set(u, a));
            }
        }
        function Jd(t, l) {
            he.M(t, l);
            var e = Xn;
            if (e && t) {
                var n = sn(e).hoistableScripts, u = Zn(t), a = n.get(u);
                a || (a = e.querySelector(qu(u)), a || (t = C({
                    src: t,
                    async: !0,
                    type: "module"
                }, l), (l = jl.get(u)) && vf(t, l), a = e.createElement("script"), It(a), ul(a, "link", t), e.head.appendChild(a)), a = {
                    type: "script",
                    instance: a,
                    count: 1,
                    state: null
                }, n.set(u, a));
            }
        }
        function s0(t, l, e, n) {
            var u = (u = at.current) ? ka(u) : null;
            if (!u) throw Error(m(446));
            switch(t){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Qn(e.href), e = sn(u).hoistableStyles, n = e.get(l), n || (n = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, e.set(l, n)), n) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                        t = Qn(e.href);
                        var a = sn(u).hoistableStyles, f = a.get(t);
                        if (f || (u = u.ownerDocument || u, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, a.set(t, f), (a = u.querySelector(ju(t))) && !a._p && (f.instance = a, f.state.loading = 5), jl.has(t) || (e = {
                            rel: "preload",
                            as: "style",
                            href: e.href,
                            crossOrigin: e.crossOrigin,
                            integrity: e.integrity,
                            media: e.media,
                            hrefLang: e.hrefLang,
                            referrerPolicy: e.referrerPolicy
                        }, jl.set(t, e), a || Fd(u, t, e, f.state))), l && n === null) throw Error(m(528, ""));
                        return f;
                    }
                    if (l && n !== null) throw Error(m(529, ""));
                    return null;
                case "script":
                    return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Zn(e), e = sn(u).hoistableScripts, n = e.get(l), n || (n = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, e.set(l, n)), n) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(m(444, t));
            }
        }
        function Qn(t) {
            return 'href="' + Bl(t) + '"';
        }
        function ju(t) {
            return 'link[rel="stylesheet"][' + t + "]";
        }
        function h0(t) {
            return C({}, t, {
                "data-precedence": t.precedence,
                precedence: null
            });
        }
        function Fd(t, l, e, n) {
            t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? n.loading = 1 : (l = t.createElement("link"), n.preload = l, l.addEventListener("load", function() {
                return n.loading |= 1;
            }), l.addEventListener("error", function() {
                return n.loading |= 2;
            }), ul(l, "link", e), It(l), t.head.appendChild(l));
        }
        function Zn(t) {
            return '[src="' + Bl(t) + '"]';
        }
        function qu(t) {
            return "script[async]" + t;
        }
        function d0(t, l, e) {
            if (l.count++, l.instance === null) switch(l.type){
                case "style":
                    var n = t.querySelector('style[data-href~="' + Bl(e.href) + '"]');
                    if (n) return l.instance = n, It(n), n;
                    var u = C({}, e, {
                        "data-href": e.href,
                        "data-precedence": e.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (t.ownerDocument || t).createElement("style"), It(n), ul(n, "style", u), Ia(n, e.precedence, t), l.instance = n;
                case "stylesheet":
                    u = Qn(e.href);
                    var a = t.querySelector(ju(u));
                    if (a) return l.state.loading |= 4, l.instance = a, It(a), a;
                    n = h0(e), (u = jl.get(u)) && mf(n, u), a = (t.ownerDocument || t).createElement("link"), It(a);
                    var f = a;
                    return f._p = new Promise(function(r, h) {
                        f.onload = r, f.onerror = h;
                    }), ul(a, "link", n), l.state.loading |= 4, Ia(a, e.precedence, t), l.instance = a;
                case "script":
                    return a = Zn(e.src), (u = t.querySelector(qu(a))) ? (l.instance = u, It(u), u) : (n = e, (u = jl.get(a)) && (n = C({}, e), vf(n, u)), t = t.ownerDocument || t, u = t.createElement("script"), It(u), ul(u, "link", n), t.head.appendChild(u), l.instance = u);
                case "void":
                    return null;
                default:
                    throw Error(m(443, l.type));
            }
            else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, Ia(n, e.precedence, t));
            return l.instance;
        }
        function Ia(t, l, e) {
            for(var n = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = n.length ? n[n.length - 1] : null, a = u, f = 0; f < n.length; f++){
                var r = n[f];
                if (r.dataset.precedence === l) a = r;
                else if (a !== u) break;
            }
            a ? a.parentNode.insertBefore(t, a.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
        }
        function mf(t, l) {
            t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
        }
        function vf(t, l) {
            t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
        }
        var Pa = null;
        function y0(t, l, e) {
            if (Pa === null) {
                var n = new Map, u = Pa = new Map;
                u.set(e, n);
            } else u = Pa, n = u.get(e), n || (n = new Map, u.set(e, n));
            if (n.has(t)) return n;
            for(n.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++){
                var a = e[u];
                if (!(a[Pn] || a[tl] || t === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var f = a.getAttribute(l) || "";
                    f = t + f;
                    var r = n.get(f);
                    r ? r.push(a) : n.set(f, [
                        a
                    ]);
                }
            }
            return n;
        }
        function m0(t, l, e) {
            t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null);
        }
        function Wd(t, l, e) {
            if (e === 1 || l.itemProp != null) return !1;
            switch(t){
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
                    return !0;
                case "link":
                    if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
                    switch(l.rel){
                        case "stylesheet":
                            return t = l.disabled, typeof l.precedence == "string" && t == null;
                        default:
                            return !0;
                    }
                case "script":
                    if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return !0;
            }
            return !1;
        }
        function v0(t) {
            return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
        }
        function $d(t, l, e, n) {
            if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
                if (e.instance === null) {
                    var u = Qn(n.href), a = l.querySelector(ju(u));
                    if (a) {
                        l = a._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = ti.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = a, It(a);
                        return;
                    }
                    a = l.ownerDocument || l, n = h0(n), (u = jl.get(u)) && mf(n, u), a = a.createElement("link"), It(a);
                    var f = a;
                    f._p = new Promise(function(r, h) {
                        f.onload = r, f.onerror = h;
                    }), ul(a, "link", n), e.instance = a;
                }
                t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = ti.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
            }
        }
        var gf = 0;
        function kd(t, l) {
            return t.stylesheets && t.count === 0 && ei(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
                var n = setTimeout(function() {
                    if (t.stylesheets && ei(t, t.stylesheets), t.unsuspend) {
                        var a = t.unsuspend;
                        t.unsuspend = null, a();
                    }
                }, 6e4 + l);
                0 < t.imgBytes && gf === 0 && (gf = 62500 * Dd());
                var u = setTimeout(function() {
                    if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ei(t, t.stylesheets), t.unsuspend)) {
                        var a = t.unsuspend;
                        t.unsuspend = null, a();
                    }
                }, (t.imgBytes > gf ? 50 : 800) + l);
                return t.unsuspend = e, function() {
                    t.unsuspend = null, clearTimeout(n), clearTimeout(u);
                };
            } : null;
        }
        function ti() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) ei(this, this.stylesheets);
                else if (this.unsuspend) {
                    var t = this.unsuspend;
                    this.unsuspend = null, t();
                }
            }
        }
        var li = null;
        function ei(t, l) {
            t.stylesheets = null, t.unsuspend !== null && (t.count++, li = new Map, l.forEach(Id, t), li = null, ti.call(t));
        }
        function Id(t, l) {
            if (!(l.state.loading & 4)) {
                var e = li.get(t);
                if (e) var n = e.get(null);
                else {
                    e = new Map, li.set(t, e);
                    for(var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < u.length; a++){
                        var f = u[a];
                        (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (e.set(f.dataset.precedence, f), n = f);
                    }
                    n && e.set(null, n);
                }
                u = l.instance, f = u.getAttribute("data-precedence"), a = e.get(f) || n, a === n && e.set(null, u), e.set(f, u), this.count++, n = ti.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), a ? a.parentNode.insertBefore(u, a.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
            }
        }
        var wu = {
            $$typeof: dt,
            Provider: null,
            Consumer: null,
            _currentValue: W,
            _currentValue2: W,
            _threadCount: 0
        };
        function Pd(t, l, e, n, u, a, f, r, h) {
            this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = si(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = si(0), this.hiddenUpdates = si(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = a, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = new Map;
        }
        function g0(t, l, e, n, u, a, f, r, h, E, B, N) {
            return t = new Pd(t, l, e, f, h, E, B, N, r), l = 1, a === !0 && (l |= 24), a = El(3, null, null, l), t.current = a, a.stateNode = t, l = Wi(), l.refCount++, t.pooledCache = l, l.refCount++, a.memoizedState = {
                element: n,
                isDehydrated: e,
                cache: l
            }, Pi(a), t;
        }
        function p0(t) {
            return t ? (t = bn, t) : bn;
        }
        function S0(t, l, e, n, u, a) {
            u = p0(u), n.context === null ? n.context = u : n.pendingContext = u, n = Te(l), n.payload = {
                element: e
            }, a = a === void 0 ? null : a, a !== null && (n.callback = a), e = ze(t, n, l), e !== null && (gl(e, t, l), vu(e, t, l));
        }
        function E0(t, l) {
            if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
                var e = t.retryLane;
                t.retryLane = e !== 0 && e < l ? e : l;
            }
        }
        function pf(t, l) {
            E0(t, l), (t = t.alternate) && E0(t, l);
        }
        function b0(t) {
            if (t.tag === 13 || t.tag === 31) {
                var l = Ve(t, 67108864);
                l !== null && gl(l, t, 67108864), pf(t, 67108864);
            }
        }
        function A0(t) {
            if (t.tag === 13 || t.tag === 31) {
                var l = _l();
                l = hi(l);
                var e = Ve(t, l);
                e !== null && gl(e, t, l), pf(t, l);
            }
        }
        var ni = !0;
        function ty(t, l, e, n) {
            var u = _.T;
            _.T = null;
            var a = H.p;
            try {
                H.p = 2, Sf(t, l, e, n);
            } finally{
                H.p = a, _.T = u;
            }
        }
        function ly(t, l, e, n) {
            var u = _.T;
            _.T = null;
            var a = H.p;
            try {
                H.p = 8, Sf(t, l, e, n);
            } finally{
                H.p = a, _.T = u;
            }
        }
        function Sf(t, l, e, n) {
            if (ni) {
                var u = Ef(n);
                if (u === null) uf(t, l, n, ui, e), z0(t, n);
                else if (ny(u, t, l, e, n)) n.stopPropagation();
                else if (z0(t, n), l & 4 && -1 < ey.indexOf(t)) {
                    for(; u !== null;){
                        var a = on(u);
                        if (a !== null) switch(a.tag){
                            case 3:
                                if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                                    var f = Ge(a.pendingLanes);
                                    if (f !== 0) {
                                        var r = a;
                                        for(r.pendingLanes |= 2, r.entangledLanes |= 2; f;){
                                            var h = 1 << 31 - ct(f);
                                            r.entanglements[1] |= h, f &= ~h;
                                        }
                                        Jl(a), (At & 6) === 0 && (Ga = cl() + 500, Nu(0));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                r = Ve(a, 2), r !== null && gl(r, a, 2), Xa(), pf(a, 2);
                        }
                        if (a = Ef(n), a === null && uf(t, l, n, ui, e), a === u) break;
                        u = a;
                    }
                    u !== null && n.stopPropagation();
                } else uf(t, l, n, null, e);
            }
        }
        function Ef(t) {
            return t = bi(t), bf(t);
        }
        var ui = null;
        function bf(t) {
            if (ui = null, t = rn(t), t !== null) {
                var l = V(t);
                if (l === null) t = null;
                else {
                    var e = l.tag;
                    if (e === 13) {
                        if (t = G(l), t !== null) return t;
                        t = null;
                    } else if (e === 31) {
                        if (t = p(l), t !== null) return t;
                        t = null;
                    } else if (e === 3) {
                        if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
                        t = null;
                    } else l !== t && (t = null);
                }
            }
            return ui = t, null;
        }
        function T0(t) {
            switch(t){
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch(Ql()){
                        case Ju:
                            return 2;
                        case o:
                            return 8;
                        case i:
                        case c:
                            return 32;
                        case s:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Af = !1, He = null, je = null, qe = null, Yu = new Map, Gu = new Map, we = [], ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function z0(t, l) {
            switch(t){
                case "focusin":
                case "focusout":
                    He = null;
                    break;
                case "dragenter":
                case "dragleave":
                    je = null;
                    break;
                case "mouseover":
                case "mouseout":
                    qe = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Yu.delete(l.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Gu.delete(l.pointerId);
            }
        }
        function Lu(t, l, e, n, u, a) {
            return t === null || t.nativeEvent !== a ? (t = {
                blockedOn: l,
                domEventName: e,
                eventSystemFlags: n,
                nativeEvent: a,
                targetContainers: [
                    u
                ]
            }, l !== null && (l = on(l), l !== null && b0(l)), t) : (t.eventSystemFlags |= n, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
        }
        function ny(t, l, e, n, u) {
            switch(l){
                case "focusin":
                    return He = Lu(He, t, l, e, n, u), !0;
                case "dragenter":
                    return je = Lu(je, t, l, e, n, u), !0;
                case "mouseover":
                    return qe = Lu(qe, t, l, e, n, u), !0;
                case "pointerover":
                    var a = u.pointerId;
                    return Yu.set(a, Lu(Yu.get(a) || null, t, l, e, n, u)), !0;
                case "gotpointercapture":
                    return a = u.pointerId, Gu.set(a, Lu(Gu.get(a) || null, t, l, e, n, u)), !0;
            }
            return !1;
        }
        function _0(t) {
            var l = rn(t.target);
            if (l !== null) {
                var e = V(l);
                if (e !== null) {
                    if (l = e.tag, l === 13) {
                        if (l = G(e), l !== null) {
                            t.blockedOn = l, wf(t.priority, function() {
                                A0(e);
                            });
                            return;
                        }
                    } else if (l === 31) {
                        if (l = p(e), l !== null) {
                            t.blockedOn = l, wf(t.priority, function() {
                                A0(e);
                            });
                            return;
                        }
                    } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                        t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            t.blockedOn = null;
        }
        function ai(t) {
            if (t.blockedOn !== null) return !1;
            for(var l = t.targetContainers; 0 < l.length;){
                var e = Ef(t.nativeEvent);
                if (e === null) {
                    e = t.nativeEvent;
                    var n = new e.constructor(e.type, e);
                    Ei = n, e.target.dispatchEvent(n), Ei = null;
                } else return l = on(e), l !== null && b0(l), t.blockedOn = e, !1;
                l.shift();
            }
            return !0;
        }
        function x0(t, l, e) {
            ai(t) && e.delete(l);
        }
        function uy() {
            Af = !1, He !== null && ai(He) && (He = null), je !== null && ai(je) && (je = null), qe !== null && ai(qe) && (qe = null), Yu.forEach(x0), Gu.forEach(x0);
        }
        function ii(t, l) {
            t.blockedOn === l && (t.blockedOn = null, Af || (Af = !0, z.unstable_scheduleCallback(z.unstable_NormalPriority, uy)));
        }
        var ci = null;
        function U0(t) {
            ci !== t && (ci = t, z.unstable_scheduleCallback(z.unstable_NormalPriority, function() {
                ci === t && (ci = null);
                for(var l = 0; l < t.length; l += 3){
                    var e = t[l], n = t[l + 1], u = t[l + 2];
                    if (typeof n != "function") {
                        if (bf(n || e) === null) continue;
                        break;
                    }
                    var a = on(e);
                    a !== null && (t.splice(l, 3), l -= 3, Sc(a, {
                        pending: !0,
                        data: u,
                        method: e.method,
                        action: n
                    }, n, u));
                }
            }));
        }
        function Vn(t) {
            function l(h) {
                return ii(h, t);
            }
            He !== null && ii(He, t), je !== null && ii(je, t), qe !== null && ii(qe, t), Yu.forEach(l), Gu.forEach(l);
            for(var e = 0; e < we.length; e++){
                var n = we[e];
                n.blockedOn === t && (n.blockedOn = null);
            }
            for(; 0 < we.length && (e = we[0], e.blockedOn === null);)_0(e), e.blockedOn === null && we.shift();
            if (e = (t.ownerDocument || t).$$reactFormReplay, e != null) for(n = 0; n < e.length; n += 3){
                var u = e[n], a = e[n + 1], f = u[sl] || null;
                if (typeof a == "function") f || U0(e);
                else if (f) {
                    var r = null;
                    if (a && a.hasAttribute("formAction")) {
                        if (u = a, f = a[sl] || null) r = f.formAction;
                        else if (bf(u) !== null) continue;
                    } else r = f.action;
                    typeof r == "function" ? e[n + 1] = r : (e.splice(n, 3), n -= 3), U0(e);
                }
            }
        }
        function B0() {
            function t(a) {
                a.canIntercept && a.info === "react-transition" && a.intercept({
                    handler: function() {
                        return new Promise(function(f) {
                            return u = f;
                        });
                    },
                    focusReset: "manual",
                    scroll: "manual"
                });
            }
            function l() {
                u !== null && (u(), u = null), n || setTimeout(e, 20);
            }
            function e() {
                if (!n && !navigation.transition) {
                    var a = navigation.currentEntry;
                    a && a.url != null && navigation.navigate(a.url, {
                        state: a.getState(),
                        info: "react-transition",
                        history: "replace"
                    });
                }
            }
            if (typeof navigation == "object") {
                var n = !1, u = null;
                return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
                    n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
                };
            }
        }
        function Tf(t) {
            this._internalRoot = t;
        }
        fi.prototype.render = Tf.prototype.render = function(t) {
            var l = this._internalRoot;
            if (l === null) throw Error(m(409));
            var e = l.current, n = _l();
            S0(e, n, t, l, null, null);
        }, fi.prototype.unmount = Tf.prototype.unmount = function() {
            var t = this._internalRoot;
            if (t !== null) {
                this._internalRoot = null;
                var l = t.containerInfo;
                S0(t.current, 2, null, t, null, null), Xa(), l[fn] = null;
            }
        };
        function fi(t) {
            this._internalRoot = t;
        }
        fi.prototype.unstable_scheduleHydration = function(t) {
            if (t) {
                var l = qf();
                t = {
                    blockedOn: null,
                    target: t,
                    priority: l
                };
                for(var e = 0; e < we.length && l !== 0 && l < we[e].priority; e++);
                we.splice(e, 0, t), e === 0 && _0(t);
            }
        };
        var O0 = O.version;
        if (O0 !== "19.2.8") throw Error(m(527, O0, "19.2.8"));
        H.findDOMNode = function(t) {
            var l = t._reactInternals;
            if (l === void 0) throw typeof t.render == "function" ? Error(m(188)) : (t = Object.keys(t).join(","), Error(m(268, t)));
            return t = A(l), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
        };
        var ay = {
            bundleType: 0,
            version: "19.2.8",
            rendererPackageName: "react-dom",
            currentDispatcherRef: _,
            reconcilerVersion: "19.2.8"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ri.isDisabled && ri.supportsFiber) try {
                M = ri.inject(ay), I = ri;
            } catch  {}
        }
        return Zu.createRoot = function(t, l) {
            if (!w(t)) throw Error(m(299));
            var e = !1, n = "", u = jo, a = qo, f = wo;
            return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (a = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError)), l = g0(t, 1, !1, null, null, e, n, null, u, a, f, B0), t[fn] = l.current, nf(t), new Tf(l);
        }, Zu.hydrateRoot = function(t, l, e) {
            if (!w(t)) throw Error(m(299));
            var n = !1, u = "", a = jo, f = qo, r = wo, h = null;
            return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (r = e.onRecoverableError), e.formState !== void 0 && (h = e.formState)), l = g0(t, 1, !0, l, e ?? null, n, u, h, a, f, r, B0), l.context = p0(null), e = l.current, n = _l(), n = hi(n), u = Te(n), u.callback = null, ze(e, u, n), e = n, l.current.lanes = e, In(l, e), Jl(l), t[fn] = l.current, nf(t), new fi(l);
        }, Zu.version = "19.2.8", Zu;
    }
    var X0;
    function Sy() {
        if (X0) return Uf.exports;
        X0 = 1;
        function z() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
            } catch (O) {
                console.error(O);
            }
        }
        return z(), Uf.exports = py(), Uf.exports;
    }
    var Ey = Sy();
    function by(z) {
        return !z || z === "(address unavailable)" ? z || "" : z.length <= 24 ? z : `${z.slice(0, 14)}...${z.slice(-8)}`;
    }
    function Ay({ walletState: z, address: O, error: L, debugLog: m, onConnect: w, onDisconnect: V, onClearError: G }) {
        const p = z === "connected", q = z === "detecting", A = z === "connecting", R = z === "no-wallet";
        return j.jsx("div", {
            className: "wallet-section",
            children: j.jsxs("div", {
                className: "wallet-card",
                children: [
                    j.jsxs("div", {
                        className: "wallet-header",
                        children: [
                            j.jsx("h2", {
                                children: "Wallet Connection"
                            }),
                            j.jsxs("span", {
                                className: `status-badge ${z}`,
                                children: [
                                    p && "CONNECTED",
                                    q && "Detecting...",
                                    A && "CONNECTING...",
                                    R && "NOT FOUND",
                                    z === "error" && "ERROR",
                                    z === "ready" && "READY"
                                ]
                            })
                        ]
                    }),
                    p && O ? j.jsxs("div", {
                        className: "wallet-connected",
                        children: [
                            j.jsxs("div", {
                                className: "wallet-address",
                                children: [
                                    j.jsx("span", {
                                        className: "status-dot connected"
                                    }),
                                    j.jsx("span", {
                                        className: "address-label",
                                        children: "Address:"
                                    }),
                                    j.jsx("span", {
                                        className: "address-text",
                                        children: by(O)
                                    })
                                ]
                            }),
                            j.jsx("button", {
                                className: "btn btn-disconnect",
                                onClick: V,
                                children: "Disconnect"
                            })
                        ]
                    }) : q ? j.jsxs("div", {
                        className: "wallet-waiting",
                        children: [
                            j.jsx("span", {
                                className: "spinner"
                            }),
                            j.jsx("span", {
                                children: "Looking for Lace wallet..."
                            })
                        ]
                    }) : A ? j.jsxs("div", {
                        className: "wallet-waiting connecting-state",
                        children: [
                            j.jsx("span", {
                                className: "spinner"
                            }),
                            j.jsxs("div", {
                                children: [
                                    j.jsx("span", {
                                        children: "Connecting to Lace..."
                                    }),
                                    j.jsxs("p", {
                                        className: "hint",
                                        children: [
                                            "A Lace popup should appear. Click ",
                                            j.jsx("strong", {
                                                children: "Approve"
                                            }),
                                            " in it."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : R ? j.jsxs("div", {
                        className: "wallet-none",
                        children: [
                            j.jsx("p", {
                                children: "Lace wallet not detected. Install it to continue."
                            }),
                            j.jsx("a", {
                                className: "btn btn-install",
                                href: "https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Install Lace"
                            })
                        ]
                    }) : j.jsxs("div", {
                        className: "wallet-ready",
                        children: [
                            j.jsx("p", {
                                children: "Click below to connect your Lace wallet."
                            }),
                            j.jsx("button", {
                                className: "btn btn-connect",
                                onClick: w,
                                children: "Connect Wallet"
                            })
                        ]
                    }),
                    L && j.jsxs("div", {
                        className: "error-bar",
                        children: [
                            j.jsx("span", {
                                children: L
                            }),
                            j.jsx("button", {
                                onClick: G,
                                className: "error-close",
                                children: "x"
                            })
                        ]
                    }),
                    m.length > 0 && j.jsxs("details", {
                        className: "debug-section",
                        children: [
                            j.jsxs("summary", {
                                children: [
                                    "Debug Log (",
                                    m.length,
                                    " entries)"
                                ]
                            }),
                            j.jsx("div", {
                                className: "debug-log",
                                children: m.map((C, F)=>j.jsx("div", {
                                        className: "debug-line",
                                        children: C
                                    }, F))
                            })
                        ]
                    })
                ]
            })
        });
    }
    function Q0(z) {
        const O = z.trim();
        if (!O) return {
            ok: !1,
            message: "Enter a private increment amount greater than zero."
        };
        if (!/^\d+$/.test(O)) return {
            ok: !1,
            message: "Private input must be a positive whole number."
        };
        try {
            const L = BigInt(O);
            return L <= 0n ? {
                ok: !1,
                message: "Private input must be greater than zero."
            } : {
                ok: !0,
                value: L
            };
        } catch  {
            return {
                ok: !1,
                message: "Could not parse private input. Use a positive whole number."
            };
        }
    }
    function Ty({ isCalling: z, result: O, txId: L, error: m, walletConnected: w, onCallCircuit: V, onClearError: G }) {
        const [p, q] = Ll.useState(""), [A, R] = Ll.useState(null), C = Q0(p), F = w && !z && C.ok, X = ()=>{
            R(null), G();
            const k = Q0(p);
            if (!k.ok) {
                R(k.message);
                return;
            }
            q(""), V(k.value);
        }, J = A || m;
        return j.jsx("section", {
            className: "circuit-section",
            "aria-labelledby": "circuit-heading",
            children: j.jsxs("div", {
                className: "circuit-card",
                children: [
                    j.jsx("h2", {
                        id: "circuit-heading",
                        children: "Increment Counter"
                    }),
                    j.jsx("p", {
                        className: "description",
                        children: "Enter a private increment value. A zero-knowledge proof is generated locally; the UI never shows your private input in the result."
                    }),
                    j.jsxs("div", {
                        className: "privacy-banner",
                        role: "note",
                        children: [
                            j.jsx("strong", {
                                children: "Privacy:"
                            }),
                            " Your increment stays a private witness while proving. On success you only see proof status and the public counter update — not your secret."
                        ]
                    }),
                    j.jsx("div", {
                        className: "private-label",
                        children: "Proved without revealing your private input"
                    }),
                    j.jsxs("div", {
                        className: "input-group",
                        children: [
                            j.jsx("label", {
                                className: "input-label",
                                htmlFor: "private-increment",
                                children: "Private increment (witness — never shown in results)"
                            }),
                            j.jsx("input", {
                                id: "private-increment",
                                className: "input",
                                type: "text",
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                                autoComplete: "off",
                                placeholder: "e.g. 1",
                                value: p,
                                onChange: (k)=>{
                                    q(k.target.value), R(null);
                                },
                                disabled: z || !w,
                                "aria-invalid": !!A,
                                "aria-describedby": "private-help"
                            }),
                            j.jsx("p", {
                                id: "private-help",
                                className: "hint left",
                                children: "This field is cleared on submit and is not rendered in the success panel."
                            })
                        ]
                    }),
                    j.jsx("button", {
                        className: "btn btn-primary",
                        onClick: X,
                        disabled: !F,
                        type: "button",
                        children: z ? j.jsxs(j.Fragment, {
                            children: [
                                j.jsx("span", {
                                    className: "spinner",
                                    "aria-hidden": "true"
                                }),
                                " Generating proof…"
                            ]
                        }) : "Call Circuit"
                    }),
                    z && j.jsxs("div", {
                        className: "status-bar",
                        role: "status",
                        "aria-live": "polite",
                        children: [
                            j.jsx("span", {
                                className: "spinner",
                                "aria-hidden": "true"
                            }),
                            j.jsx("span", {
                                children: "Generating zero-knowledge proof. Keep this tab open — this can take a moment…"
                            })
                        ]
                    }),
                    O && !J && j.jsxs("div", {
                        className: "status-bar success",
                        role: "status",
                        children: [
                            j.jsx("span", {
                                className: "check-icon",
                                "aria-hidden": "true",
                                children: "✓"
                            }),
                            j.jsxs("div", {
                                children: [
                                    j.jsx("p", {
                                        children: O
                                    }),
                                    j.jsx("p", {
                                        className: "privacy-note",
                                        children: "Private input is not shown here (cleared from the form and omitted from this result)."
                                    }),
                                    L && j.jsxs("p", {
                                        className: "tx-id",
                                        children: [
                                            "TX: ",
                                            L
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    J && j.jsxs("div", {
                        className: "status-bar error",
                        role: "alert",
                        children: [
                            j.jsx("span", {
                                "aria-hidden": "true",
                                children: "!"
                            }),
                            j.jsx("span", {
                                children: J
                            }),
                            j.jsx("button", {
                                type: "button",
                                onClick: ()=>{
                                    R(null), G();
                                },
                                className: "error-close",
                                "aria-label": "Dismiss error",
                                children: "×"
                            })
                        ]
                    }),
                    !w && j.jsx("p", {
                        className: "hint",
                        children: "Connect your Lace wallet first to call the circuit."
                    })
                ]
            })
        });
    }
    const zy = "modulepreload", _y = function(z) {
        return "/Degree_Verification-_Portal/" + z;
    }, Z0 = {}, de = function(O, L, m) {
        let w = Promise.resolve();
        if (L && L.length > 0) {
            let G = function(A) {
                return Promise.all(A.map((R)=>Promise.resolve(R).then((C)=>({
                            status: "fulfilled",
                            value: C
                        }), (C)=>({
                            status: "rejected",
                            reason: C
                        }))));
            };
            document.getElementsByTagName("link");
            const p = document.querySelector("meta[property=csp-nonce]"), q = p?.nonce || p?.getAttribute("nonce");
            w = G(L.map((A)=>{
                if (A = _y(A), A in Z0) return;
                Z0[A] = !0;
                const R = A.endsWith(".css"), C = R ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${A}"]${C}`)) return;
                const F = document.createElement("link");
                if (F.rel = R ? "stylesheet" : zy, R || (F.as = "script"), F.crossOrigin = "", F.href = A, q && F.setAttribute("nonce", q), document.head.appendChild(F), R) return new Promise((X, J)=>{
                    F.addEventListener("load", X), F.addEventListener("error", ()=>J(new Error(`Unable to preload CSS for ${A}`)));
                });
            }));
        }
        function V(G) {
            const p = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (p.payload = G, window.dispatchEvent(p), !p.defaultPrevented) throw G;
        }
        return w.then((G)=>{
            for (const p of G || [])p.status === "rejected" && V(p.reason);
            return O().catch(V);
        });
    }, Df = "preprod";
    function Ht(z, O) {
        console.log("[Midnight]", O), z((L)=>({
                ...L,
                debugLog: [
                    ...L.debugLog.slice(-20),
                    O
                ]
            }));
    }
    function V0() {
        const z = window.midnight;
        if (!z) return;
        const O = Object.entries(z);
        console.log("[Midnight] window.midnight keys:", O.map(([m, w])=>`${m}(${w?.apiVersion ?? "?"})`));
        const L = O.find(([, m])=>!!m && typeof m == "object" && typeof m.connect == "function");
        if (L) return console.log("[Midnight] Using wallet:", L[0], L[1]?.apiVersion), L[1];
    }
    function Vu(z) {
        if (!z) return "Unknown error (null)";
        if (typeof z == "string") return z;
        const O = z?.message || "", L = z?.cause?.message || z?.cause?.failure?.message || "", m = O + " | " + L;
        return m.includes("reject") ? "User rejected the connection. Try again and approve in Lace." : m.includes("network") || m.includes("Network") ? "Network mismatch. Set Lace to Preprod network." : m.includes("proof server") || m.includes("ProofServer") || m.includes("ECONNREFUSED") || m.includes(":6300") ? "Proof server unreachable. Run npm run proof-server:start and set Lace proof server to http://localhost:6300." : m.includes("fetch") ? "Network error. Check your internet connection and indexer status." : m.includes("Insufficient Funds") || m.includes("dust") ? "Insufficient tDUST. Get Preprod faucet tokens, then generate tDUST in Lace." : m.includes("greater than zero") || m.includes("Increment amount") ? "Private increment must be greater than zero." : m.length > 10 ? m.slice(0, 300) : "Something went wrong. Open the debug log below or browser console (F12) for details.";
    }
    function xy() {
        const [z, O] = Ll.useState({
            walletState: "detecting",
            walletAPI: void 0,
            wallet: null,
            address: null,
            error: null,
            debugLog: []
        }), [L, m] = Ll.useState({
            isCalling: !1,
            result: null,
            txId: null,
            error: null
        }), w = Ll.useRef(null);
        Ll.useEffect(()=>{
            const A = V0();
            if (A) {
                Ht(O, "Wallet detected, ready to connect"), O((F)=>({
                        ...F,
                        walletAPI: A,
                        walletState: "ready"
                    }));
                return;
            }
            let R = 0;
            const C = setInterval(()=>{
                R += 200;
                const F = V0();
                F ? (Ht(O, "Wallet detected after waiting"), O((X)=>({
                        ...X,
                        walletAPI: F,
                        walletState: "ready"
                    })), clearInterval(C)) : R >= 8e3 && (Ht(O, "No wallet found after 8s"), O((X)=>({
                        ...X,
                        walletState: "no-wallet"
                    })), clearInterval(C));
            }, 200);
            return ()=>clearInterval(C);
        }, []);
        const V = Ll.useCallback(async ()=>{
            if (!z.walletAPI) {
                Ht(O, "ERROR: No walletAPI"), O((R)=>({
                        ...R,
                        walletState: "error",
                        error: "Wallet not detected. Install Lace and reload."
                    }));
                return;
            }
            Ht(O, 'Step 1: Calling walletAPI.connect("' + Df + '")...'), O((R)=>({
                    ...R,
                    walletState: "connecting",
                    error: null
                }));
            let A;
            try {
                A = await z.walletAPI.connect(Df), Ht(O, "Step 2: Connected! Getting address...");
            } catch (R) {
                console.error("[Midnight] connect() failed:", R), Ht(O, "Step 1 FAILED: " + Vu(R)), O((C)=>({
                        ...C,
                        walletState: "ready",
                        error: "Connection failed: " + Vu(R)
                    }));
                return;
            }
            try {
                const C = (await A.getUnshieldedAddress()).unshieldedAddress;
                Ht(O, "Step 3: Got address: " + C), console.log("[Midnight] FULL ADDRESS (copy this):", C), w.current = A, O((F)=>({
                        ...F,
                        wallet: A,
                        address: C,
                        walletState: "connected",
                        error: null
                    })), Ht(O, "DONE: Wallet connected successfully!");
            } catch (R) {
                console.error("[Midnight] getUnshieldedAddress() failed:", R), Ht(O, "Step 2 FAILED: " + Vu(R)), w.current = A, O((C)=>({
                        ...C,
                        wallet: A,
                        address: "(address unavailable)",
                        walletState: "connected",
                        error: "Connected but could not get address: " + Vu(R)
                    }));
            }
        }, [
            z.walletAPI
        ]), G = Ll.useCallback(()=>{
            w.current = null, O((A)=>({
                    ...A,
                    wallet: null,
                    address: null,
                    walletState: "ready",
                    error: null,
                    debugLog: [
                        ...A.debugLog,
                        "Disconnected"
                    ]
                })), m({
                isCalling: !1,
                result: null,
                txId: null,
                error: null
            });
        }, []), p = Ll.useCallback(async (A)=>{
            if (!z.wallet) {
                m({
                    isCalling: !1,
                    result: null,
                    txId: null,
                    error: "Wallet not connected."
                });
                return;
            }
            m({
                isCalling: !0,
                result: null,
                txId: null,
                error: null
            });
            try {
                const { setNetworkId: R } = await de(async ()=>{
                    const { setNetworkId: it } = await import("./index-lg-b2sIa.js");
                    return {
                        setNetworkId: it
                    };
                }, []), { findDeployedContract: C } = await de(async ()=>{
                    const { findDeployedContract: it } = await import("./index-tNVTduxC.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    });
                    return {
                        findDeployedContract: it
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9])), { FetchZkConfigProvider: F } = await de(async ()=>{
                    const { FetchZkConfigProvider: it } = await import("./index-CQxKysc-.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    });
                    return {
                        FetchZkConfigProvider: it
                    };
                }, __vite__mapDeps([10,1,2,3,4,5,11])), { indexerPublicDataProvider: X } = await de(async ()=>{
                    const { indexerPublicDataProvider: it } = await import("./index-ydjKOtMC.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    });
                    return {
                        indexerPublicDataProvider: it
                    };
                }, __vite__mapDeps([12,1,2,3,4,5,11,7])), { CompiledContract: J } = await de(async ()=>{
                    const { CompiledContract: it } = await import("./compact-js-CR9XYrWy.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    });
                    return {
                        CompiledContract: it
                    };
                }, __vite__mapDeps([13,5,8,9,7,3,4,2])), { Transaction: k, Proof: Ut, Binding: Et, SignatureEnabled: Tt } = await de(async ()=>{
                    const { Transaction: it, Proof: _, Binding: H, SignatureEnabled: W } = await import("./ledger-KI6kX-Tc.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    });
                    return {
                        Transaction: it,
                        Proof: _,
                        Binding: H,
                        SignatureEnabled: W
                    };
                }, __vite__mapDeps([2,3])), { inMemoryPrivateStateProvider: dt } = await de(async ()=>{
                    const { inMemoryPrivateStateProvider: it } = await import("./in-memory-private-state-provider-cekjsjw4.js");
                    return {
                        inMemoryPrivateStateProvider: it
                    };
                }, []);
                R(Df);
                const wt = await z.wallet.getConfiguration();
                Ht(O, "Loading compiled contract...");
                const mt = await de(()=>import("./index-Cvve7t99.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([14,9,7,3,4])), Ft = J.make("counter", mt.Contract).pipe(J.withVacantWitnesses);
                Ht(O, "Setting up ZK config provider...");
                const nt = new F(window.location.origin, fetch.bind(window)), Wt = await z.wallet.getShieldedAddresses();
                Ht(O, "Creating proof provider via wallet proving API...");
                const { CostModel: rl } = await de(async ()=>{
                    const { CostModel: it } = await import("./ledger-KI6kX-Tc.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    });
                    return {
                        CostModel: it
                    };
                }, __vite__mapDeps([2,3])), Xl = await z.wallet.getProvingProvider(nt.asKeyMaterialProvider()), ol = {
                    async proveTx (it) {
                        return it.prove(Xl, rl.initialCostModel());
                    }
                };
                Ht(O, "Setting up providers...");
                const kt = {
                    privateStateProvider: dt(),
                    zkConfigProvider: nt,
                    proofProvider: ol,
                    publicDataProvider: X(wt.indexerUri, wt.indexerWsUri),
                    walletProvider: {
                        getCoinPublicKey: ()=>Wt.shieldedCoinPublicKey,
                        getEncryptionPublicKey: ()=>Wt.shieldedEncryptionPublicKey,
                        balanceTx: async (it)=>{
                            try {
                                const _ = it.serialize(), H = Array.from(_).map((vt)=>vt.toString(16).padStart(2, "0")).join("");
                                Ht(O, "Balancing tx (hex length: " + H.length + ")...");
                                const W = await z.wallet.balanceUnsealedTransaction(H);
                                Ht(O, "balanceUnsealedTransaction returned OK");
                                const yt = new Uint8Array(W.tx.match(/.{2}/g).map((vt)=>parseInt(vt, 16)));
                                return k.deserialize("signature", "proof", "binding", yt);
                            } catch (_) {
                                const H = _?.message || JSON.stringify(_);
                                throw Ht(O, "balanceTx FAILED: " + H), _;
                            }
                        }
                    },
                    midnightProvider: {
                        submitTx: async (it)=>{
                            try {
                                const _ = it.serialize(), H = Array.from(_).map((yt)=>yt.toString(16).padStart(2, "0")).join("");
                                Ht(O, "Submitting tx (hex length: " + H.length + ")...");
                                const W = await z.wallet.submitTransaction(H);
                                return Ht(O, "submitTransaction returned: " + JSON.stringify(W)), it.identifiers()[0];
                            } catch (_) {
                                const H = _?.message || JSON.stringify(_);
                                throw Ht(O, "submitTransaction FAILED: " + H), _;
                            }
                        }
                    }
                };
                Ht(O, "Finding deployed contract...");
                const ql = await C(kt, {
                    contractAddress: "a746a03e40e6e4b36ec451548e355f2611657c2334e0e7594c3d14d4ef8da1de",
                    compiledContract: Ft,
                    privateStateId: "counterPrivateState",
                    initialPrivateState: {}
                });
                Ht(O, "Calling incrementCounter circuit (proof generating in wallet)...");
                const al = await ql.callTx.incrementCounter(A);
                Ht(O, "Transaction submitted! TX: " + al.public.txId), Ht(O, "Full tx result: " + JSON.stringify(al.public, (it, _)=>typeof _ == "bigint" ? _.toString() : _, 2)), m({
                    isCalling: !1,
                    result: "Counter incremented successfully. Private input was not included in this result.",
                    txId: al.public.txId,
                    error: null
                });
            } catch (R) {
                console.error("[Midnight] Circuit call failed:", R);
                const C = Vu(R);
                Ht(O, "Circuit call FAILED: " + C), m({
                    isCalling: !1,
                    result: null,
                    txId: null,
                    error: "Circuit call failed: " + C
                });
            }
        }, [
            z.wallet
        ]), q = Ll.useCallback(()=>{
            O((A)=>({
                    ...A,
                    error: null
                })), m((A)=>({
                    ...A,
                    error: null
                }));
        }, []);
        return {
            ...z,
            ...L,
            connect: V,
            disconnect: G,
            callIncrementCounter: p,
            clearError: q
        };
    }
    function Uy() {
        const { walletState: z, address: O, error: L, debugLog: m, connect: w, disconnect: V, isCalling: G, result: p, txId: q, error: A, callIncrementCounter: R, clearError: C } = xy();
        return j.jsxs("div", {
            className: "app",
            children: [
                j.jsx("header", {
                    className: "header",
                    children: j.jsxs("div", {
                        className: "header-text",
                        children: [
                            j.jsx("h1", {
                                children: "Degree Verification Portal"
                            }),
                            j.jsx("span", {
                                className: "subtitle",
                                children: "Midnight Network · Zero-knowledge privacy"
                            })
                        ]
                    })
                }),
                j.jsxs("main", {
                    className: "main",
                    children: [
                        j.jsx(Ay, {
                            walletState: z,
                            address: O,
                            error: L,
                            debugLog: m,
                            onConnect: w,
                            onDisconnect: V,
                            onClearError: C
                        }),
                        j.jsx(Ty, {
                            isCalling: G,
                            result: p,
                            txId: q,
                            error: A,
                            walletConnected: z === "connected",
                            onCallCircuit: R,
                            onClearError: C
                        }),
                        j.jsx("section", {
                            className: "info-section",
                            "aria-labelledby": "privacy-heading",
                            children: j.jsxs("div", {
                                className: "info-card",
                                children: [
                                    j.jsx("h3", {
                                        id: "privacy-heading",
                                        children: "Privacy Model"
                                    }),
                                    j.jsxs("ul", {
                                        children: [
                                            j.jsxs("li", {
                                                children: [
                                                    j.jsx("strong", {
                                                        children: "PUBLIC:"
                                                    }),
                                                    " Counter value on the ledger (visible on-chain)"
                                                ]
                                            }),
                                            j.jsxs("li", {
                                                children: [
                                                    j.jsx("strong", {
                                                        children: "PRIVATE:"
                                                    }),
                                                    " Your increment witness (never shown in the UI result)"
                                                ]
                                            }),
                                            j.jsxs("li", {
                                                children: [
                                                    j.jsx("strong", {
                                                        children: "PROVED without revealing:"
                                                    }),
                                                    " That the increment is positive and the state transition is valid"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                j.jsx("footer", {
                    className: "footer",
                    children: j.jsxs("span", {
                        children: [
                            "Built on",
                            " ",
                            j.jsx("a", {
                                href: "https://midnight.network",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Midnight Network"
                            })
                        ]
                    })
                })
            ]
        });
    }
    globalThis.Buffer = hy.Buffer;
    const By = "http://localhost:3333", K0 = window.fetch.bind(window);
    window.fetch = (z, O)=>{
        const L = typeof z == "string" ? z : z instanceof URL ? z.href : z.url;
        if (L.includes("proof-server.preprod.midnight.network")) {
            const m = L.replace("https://proof-server.preprod.midnight.network", By);
            return console.log("[proxy] Routing proof request through local proxy:", m), K0(m, O);
        }
        return K0(z, O);
    };
    Ey.createRoot(document.getElementById("root")).render(j.jsx(Ll.StrictMode, {
        children: j.jsx(Uy, {})
    }));
})();
export { hy as b, __tla };
