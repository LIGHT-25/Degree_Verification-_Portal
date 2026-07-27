import { Z as h, I as f, i as u, j as p, k as l, l as d, __tla as __tla_0 } from "./index-DAa3eXPp.js";
import { f as R } from "./cross-fetch-CSg03jRD.js";
import { __tla as __tla_1 } from "./ledger-KI6kX-Tc.js";
import "./__vite-plugin-wasm-helper-D7K_KhUE.js";
import "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
import { __tla as __tla_2 } from "./index-Couc_5BG.js";
import "./ZKConfiguration-DQjWTRyA.js";
let g;
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
    const n = "keys", m = ".prover", y = ".verifier", b = "zkir", w = ".bzkir";
    g = class extends h {
        baseURL;
        fetchFunc;
        constructor(e, s = R){
            super(), this.baseURL = e, this.fetchFunc = s;
            const r = new URL(e);
            if (r.protocol !== "http:" && r.protocol !== "https:") throw new f(r.protocol, [
                "http:",
                "https:"
            ]);
        }
        async sendRequest(e, s, r, a) {
            u(s, "circuitId");
            const i = this.baseURL.endsWith("/") ? this.baseURL : `${this.baseURL}/`, o = new URL(`${e}/${encodeURIComponent(s)}${r}`, i).toString(), t = await this.fetchFunc(o, {
                method: "GET"
            });
            if (!t.ok) throw new Error(`Failed to fetch ZK artifact from ${o}: ${t.status} ${t.statusText}`);
            if ((t.headers.get("content-type") ?? "").includes("text/html")) throw new Error(`Expected ZK artifact, but received text/html from ${o}. This usually means the file does not exist and the server returned an SPA fallback page.`);
            return a === "text" ? await t.text() : await t.arrayBuffer().then((c)=>new Uint8Array(c));
        }
        getProverKey(e) {
            return this.sendRequest(n, e, m, "arraybuffer").then(p);
        }
        getVerifierKey(e) {
            return this.sendRequest(n, e, y, "arraybuffer").then(l);
        }
        getZKIR(e) {
            return this.sendRequest(b, e, w, "arraybuffer").then(d);
        }
    };
});
export { g as FetchZkConfigProvider, __tla };
