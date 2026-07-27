import { n as js, o as Bs, a as fe, S as Ls, F as Us, q as Qs, I as oi, w as ci, __tla as __tla_0 } from "./index-DAa3eXPp.js";
import { b as $s, __tla as __tla_1 } from "./index-Couc_5BG.js";
import { c as zs } from "./cross-fetch-CSg03jRD.js";
import { LedgerParameters as pr, ZswapChainState as Ws, Transaction as Hs, __tla as __tla_2 } from "./ledger-KI6kX-Tc.js";
import { C as Ys, __tla as __tla_3 } from "./constants-D7c6DMua.js";
import "./___vite-browser-external_commonjs-proxy-DfwQUR7A.js";
import "./ZKConfiguration-DQjWTRyA.js";
import "./__vite-plugin-wasm-helper-D7K_KhUE.js";
let ge, St, Ol, Cl, _s, ti, ru, gu, yn, nu, Ms, Ps, xn, Vs;
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
    })()
]).then(async ()=>{
    function Gs(t, e) {
        if (!!!t) throw new Error(e);
    }
    const mr = {
        Name: [],
        Document: [
            "definitions"
        ],
        OperationDefinition: [
            "description",
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet"
        ],
        VariableDefinition: [
            "description",
            "variable",
            "type",
            "defaultValue",
            "directives"
        ],
        Variable: [
            "name"
        ],
        SelectionSet: [
            "selections"
        ],
        Field: [
            "alias",
            "name",
            "arguments",
            "directives",
            "selectionSet"
        ],
        Argument: [
            "name",
            "value"
        ],
        FragmentSpread: [
            "name",
            "directives"
        ],
        InlineFragment: [
            "typeCondition",
            "directives",
            "selectionSet"
        ],
        FragmentDefinition: [
            "description",
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: [
            "values"
        ],
        ObjectValue: [
            "fields"
        ],
        ObjectField: [
            "name",
            "value"
        ],
        Directive: [
            "name",
            "arguments"
        ],
        NamedType: [
            "name"
        ],
        ListType: [
            "type"
        ],
        NonNullType: [
            "type"
        ],
        SchemaDefinition: [
            "description",
            "directives",
            "operationTypes"
        ],
        OperationTypeDefinition: [
            "type"
        ],
        ScalarTypeDefinition: [
            "description",
            "name",
            "directives"
        ],
        ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives"
        ],
        InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives"
        ],
        InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        UnionTypeDefinition: [
            "description",
            "name",
            "directives",
            "types"
        ],
        EnumTypeDefinition: [
            "description",
            "name",
            "directives",
            "values"
        ],
        EnumValueDefinition: [
            "description",
            "name",
            "directives"
        ],
        InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields"
        ],
        DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "directives",
            "locations"
        ],
        SchemaExtension: [
            "directives",
            "operationTypes"
        ],
        DirectiveExtension: [
            "name",
            "directives"
        ],
        ScalarTypeExtension: [
            "name",
            "directives"
        ],
        ObjectTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        UnionTypeExtension: [
            "name",
            "directives",
            "types"
        ],
        EnumTypeExtension: [
            "name",
            "directives",
            "values"
        ],
        InputObjectTypeExtension: [
            "name",
            "directives",
            "fields"
        ],
        TypeCoordinate: [
            "name"
        ],
        MemberCoordinate: [
            "name",
            "memberName"
        ],
        ArgumentCoordinate: [
            "name",
            "fieldName",
            "argumentName"
        ],
        DirectiveCoordinate: [
            "name"
        ],
        DirectiveArgumentCoordinate: [
            "name",
            "argumentName"
        ]
    }, Js = new Set(Object.keys(mr));
    function li(t) {
        const e = t?.kind;
        return typeof e == "string" && Js.has(e);
    }
    var Fe;
    (function(t) {
        t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
    })(Fe || (Fe = {}));
    var C;
    (function(t) {
        t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.DIRECTIVE_EXTENSION = "DirectiveExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", t.TYPE_COORDINATE = "TypeCoordinate", t.MEMBER_COORDINATE = "MemberCoordinate", t.ARGUMENT_COORDINATE = "ArgumentCoordinate", t.DIRECTIVE_COORDINATE = "DirectiveCoordinate", t.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
    })(C || (C = {}));
    function ui(t) {
        return t === 9 || t === 32;
    }
    function Xs(t, e) {
        const n = t.replace(/"""/g, '\\"""'), i = n.split(/\r\n|[\n\r]/g), r = i.length === 1, s = i.length > 1 && i.slice(1).every((h)=>h.length === 0 || ui(h.charCodeAt(0))), a = n.endsWith('\\"""'), o = t.endsWith('"') && !a, c = t.endsWith("\\"), l = o || c, u = !r || t.length > 70 || l || s || a;
        let d = "";
        const f = r && ui(t.charCodeAt(0));
        return (u && !f || s) && (d += `
`), d += n, (u || l) && (d += `
`), '"""' + d + '"""';
    }
    const Ks = 10, yr = 2;
    function Zs(t) {
        return Mt(t, []);
    }
    function Mt(t, e) {
        switch(typeof t){
            case "string":
                return JSON.stringify(t);
            case "function":
                return t.name ? `[function ${t.name}]` : "[function]";
            case "object":
                return ea(t, e);
            default:
                return String(t);
        }
    }
    function ea(t, e) {
        if (t === null) return "null";
        if (e.includes(t)) return "[Circular]";
        const n = [
            ...e,
            t
        ];
        if (ta(t)) {
            const i = t.toJSON();
            if (i !== t) return typeof i == "string" ? i : Mt(i, n);
        } else if (Array.isArray(t)) return ia(t, n);
        return na(t, n);
    }
    function ta(t) {
        return typeof t.toJSON == "function";
    }
    function na(t, e) {
        const n = Object.entries(t);
        return n.length === 0 ? "{}" : e.length > yr ? "[" + ra(t) + "]" : "{ " + n.map(([r, s])=>r + ": " + Mt(s, e)).join(", ") + " }";
    }
    function ia(t, e) {
        if (t.length === 0) return "[]";
        if (e.length > yr) return "[Array]";
        const n = Math.min(Ks, t.length), i = t.length - n, r = [];
        for(let s = 0; s < n; ++s)r.push(Mt(t[s], e));
        return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
    }
    function ra(t) {
        const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
        if (e === "Object" && typeof t.constructor == "function") {
            const n = t.constructor.name;
            if (typeof n == "string" && n !== "") return n;
        }
        return e;
    }
    function sa(t) {
        return `"${t.replace(aa, oa)}"`;
    }
    const aa = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function oa(t) {
        return ca[t.charCodeAt(0)];
    }
    const ca = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F"
    ], Rn = Object.freeze({});
    function ce(t, e, n = mr) {
        const i = new Map;
        for (const v of Object.values(C))i.set(v, la(e, v));
        let r, s = Array.isArray(t), a = [
            t
        ], o = -1, c = [], l = t, u, d;
        const f = [], h = [];
        do {
            o++;
            const v = o === a.length, k = v && c.length !== 0;
            if (v) {
                if (u = h.length === 0 ? void 0 : f[f.length - 1], l = d, d = h.pop(), k) if (s) {
                    l = l.slice();
                    let S = 0;
                    for (const [w, q] of c){
                        const B = w - S;
                        q === null ? (l.splice(B, 1), S++) : l[B] = q;
                    }
                } else {
                    l = {
                        ...l
                    };
                    for (const [S, w] of c)l[S] = w;
                }
                o = r.index, a = r.keys, c = r.edits, s = r.inArray, r = r.prev;
            } else if (d) {
                if (u = s ? o : a[o], l = d[u], l == null) continue;
                f.push(u);
            }
            let b;
            if (!Array.isArray(l)) {
                var p, y;
                li(l) || Gs(!1, `Invalid AST Node: ${Zs(l)}.`);
                const S = v ? (p = i.get(l.kind)) === null || p === void 0 ? void 0 : p.leave : (y = i.get(l.kind)) === null || y === void 0 ? void 0 : y.enter;
                if (b = S?.call(e, l, u, d, f, h), b === Rn) break;
                if (b === !1) {
                    if (!v) {
                        f.pop();
                        continue;
                    }
                } else if (b !== void 0 && (c.push([
                    u,
                    b
                ]), !v)) if (li(b)) l = b;
                else {
                    f.pop();
                    continue;
                }
            }
            if (b === void 0 && k && c.push([
                u,
                l
            ]), v) f.pop();
            else {
                var m;
                r = {
                    inArray: s,
                    index: o,
                    keys: a,
                    edits: c,
                    prev: r
                }, s = Array.isArray(l), a = s ? l : (m = n[l.kind]) !== null && m !== void 0 ? m : [], o = -1, c = [], d && h.push(d), d = l;
            }
        }while (r !== void 0);
        return c.length !== 0 ? c[c.length - 1][1] : t;
    }
    function la(t, e) {
        const n = t[e];
        return typeof n == "object" ? n : typeof n == "function" ? {
            enter: n,
            leave: void 0
        } : {
            enter: t.enter,
            leave: t.leave
        };
    }
    function ua(t) {
        return ce(t, fa);
    }
    const da = 80, fa = {
        Name: {
            leave: (t)=>t.value
        },
        Variable: {
            leave: (t)=>"$" + t.name
        },
        Document: {
            leave: (t)=>g(t.definitions, `

`)
        },
        OperationDefinition: {
            leave (t) {
                const e = Gt(t.variableDefinitions) ? N(`(
`, g(t.variableDefinitions, `
`), `
)`) : N("(", g(t.variableDefinitions, ", "), ")"), n = N("", t.description, `
`) + g([
                    t.operation,
                    g([
                        t.name,
                        e
                    ]),
                    g(t.directives, " ")
                ], " ");
                return (n === "query" ? "" : n + " ") + t.selectionSet;
            }
        },
        VariableDefinition: {
            leave: ({ variable: t, type: e, defaultValue: n, directives: i, description: r })=>N("", r, `
`) + t + ": " + e + N(" = ", n) + N(" ", g(i, " "))
        },
        SelectionSet: {
            leave: ({ selections: t })=>se(t)
        },
        Field: {
            leave ({ alias: t, name: e, arguments: n, directives: i, selectionSet: r }) {
                const s = N("", t, ": ") + e;
                let a = s + N("(", g(n, ", "), ")");
                return a.length > da && (a = s + N(`(
`, Ft(g(n, `
`)), `
)`)), g([
                    a,
                    g(i, " "),
                    r
                ], " ");
            }
        },
        Argument: {
            leave: ({ name: t, value: e })=>t + ": " + e
        },
        FragmentSpread: {
            leave: ({ name: t, directives: e })=>"..." + t + N(" ", g(e, " "))
        },
        InlineFragment: {
            leave: ({ typeCondition: t, directives: e, selectionSet: n })=>g([
                    "...",
                    N("on ", t),
                    g(e, " "),
                    n
                ], " ")
        },
        FragmentDefinition: {
            leave: ({ name: t, typeCondition: e, variableDefinitions: n, directives: i, selectionSet: r, description: s })=>N("", s, `
`) + `fragment ${t}${N("(", g(n, ", "), ")")} on ${e} ${N("", g(i, " "), " ")}` + r
        },
        IntValue: {
            leave: ({ value: t })=>t
        },
        FloatValue: {
            leave: ({ value: t })=>t
        },
        StringValue: {
            leave: ({ value: t, block: e })=>e ? Xs(t) : sa(t)
        },
        BooleanValue: {
            leave: ({ value: t })=>t ? "true" : "false"
        },
        NullValue: {
            leave: ()=>"null"
        },
        EnumValue: {
            leave: ({ value: t })=>t
        },
        ListValue: {
            leave: ({ values: t })=>"[" + g(t, ", ") + "]"
        },
        ObjectValue: {
            leave: ({ fields: t })=>"{" + g(t, ", ") + "}"
        },
        ObjectField: {
            leave: ({ name: t, value: e })=>t + ": " + e
        },
        Directive: {
            leave: ({ name: t, arguments: e })=>"@" + t + N("(", g(e, ", "), ")")
        },
        NamedType: {
            leave: ({ name: t })=>t
        },
        ListType: {
            leave: ({ type: t })=>"[" + t + "]"
        },
        NonNullType: {
            leave: ({ type: t })=>t + "!"
        },
        SchemaDefinition: {
            leave: ({ description: t, directives: e, operationTypes: n })=>N("", t, `
`) + g([
                    "schema",
                    g(e, " "),
                    se(n)
                ], " ")
        },
        OperationTypeDefinition: {
            leave: ({ operation: t, type: e })=>t + ": " + e
        },
        ScalarTypeDefinition: {
            leave: ({ description: t, name: e, directives: n })=>N("", t, `
`) + g([
                    "scalar",
                    e,
                    g(n, " ")
                ], " ")
        },
        ObjectTypeDefinition: {
            leave: ({ description: t, name: e, interfaces: n, directives: i, fields: r })=>N("", t, `
`) + g([
                    "type",
                    e,
                    N("implements ", g(n, " & ")),
                    g(i, " "),
                    se(r)
                ], " ")
        },
        FieldDefinition: {
            leave: ({ description: t, name: e, arguments: n, type: i, directives: r })=>N("", t, `
`) + e + (Gt(n) ? N(`(
`, Ft(g(n, `
`)), `
)`) : N("(", g(n, ", "), ")")) + ": " + i + N(" ", g(r, " "))
        },
        InputValueDefinition: {
            leave: ({ description: t, name: e, type: n, defaultValue: i, directives: r })=>N("", t, `
`) + g([
                    e + ": " + n,
                    N("= ", i),
                    g(r, " ")
                ], " ")
        },
        InterfaceTypeDefinition: {
            leave: ({ description: t, name: e, interfaces: n, directives: i, fields: r })=>N("", t, `
`) + g([
                    "interface",
                    e,
                    N("implements ", g(n, " & ")),
                    g(i, " "),
                    se(r)
                ], " ")
        },
        UnionTypeDefinition: {
            leave: ({ description: t, name: e, directives: n, types: i })=>N("", t, `
`) + g([
                    "union",
                    e,
                    g(n, " "),
                    N("= ", g(i, " | "))
                ], " ")
        },
        EnumTypeDefinition: {
            leave: ({ description: t, name: e, directives: n, values: i })=>N("", t, `
`) + g([
                    "enum",
                    e,
                    g(n, " "),
                    se(i)
                ], " ")
        },
        EnumValueDefinition: {
            leave: ({ description: t, name: e, directives: n })=>N("", t, `
`) + g([
                    e,
                    g(n, " ")
                ], " ")
        },
        InputObjectTypeDefinition: {
            leave: ({ description: t, name: e, directives: n, fields: i })=>N("", t, `
`) + g([
                    "input",
                    e,
                    g(n, " "),
                    se(i)
                ], " ")
        },
        DirectiveDefinition: {
            leave: ({ description: t, name: e, arguments: n, directives: i, repeatable: r, locations: s })=>N("", t, `
`) + "directive @" + e + (Gt(n) ? N(`(
`, Ft(g(n, `
`)), `
)`) : N("(", g(n, ", "), ")")) + N(" ", g(i, " ")) + (r ? " repeatable" : "") + " on " + g(s, " | ")
        },
        SchemaExtension: {
            leave: ({ directives: t, operationTypes: e })=>g([
                    "extend schema",
                    g(t, " "),
                    se(e)
                ], " ")
        },
        ScalarTypeExtension: {
            leave: ({ name: t, directives: e })=>g([
                    "extend scalar",
                    t,
                    g(e, " ")
                ], " ")
        },
        ObjectTypeExtension: {
            leave: ({ name: t, interfaces: e, directives: n, fields: i })=>g([
                    "extend type",
                    t,
                    N("implements ", g(e, " & ")),
                    g(n, " "),
                    se(i)
                ], " ")
        },
        InterfaceTypeExtension: {
            leave: ({ name: t, interfaces: e, directives: n, fields: i })=>g([
                    "extend interface",
                    t,
                    N("implements ", g(e, " & ")),
                    g(n, " "),
                    se(i)
                ], " ")
        },
        UnionTypeExtension: {
            leave: ({ name: t, directives: e, types: n })=>g([
                    "extend union",
                    t,
                    g(e, " "),
                    N("= ", g(n, " | "))
                ], " ")
        },
        EnumTypeExtension: {
            leave: ({ name: t, directives: e, values: n })=>g([
                    "extend enum",
                    t,
                    g(e, " "),
                    se(n)
                ], " ")
        },
        InputObjectTypeExtension: {
            leave: ({ name: t, directives: e, fields: n })=>g([
                    "extend input",
                    t,
                    g(e, " "),
                    se(n)
                ], " ")
        },
        DirectiveExtension: {
            leave: ({ name: t, directives: e })=>g([
                    "extend directive @" + t,
                    g(e, " ")
                ], " ")
        },
        TypeCoordinate: {
            leave: ({ name: t })=>t
        },
        MemberCoordinate: {
            leave: ({ name: t, memberName: e })=>g([
                    t,
                    N(".", e)
                ])
        },
        ArgumentCoordinate: {
            leave: ({ name: t, fieldName: e, argumentName: n })=>g([
                    t,
                    N(".", e),
                    N("(", n, ":)")
                ])
        },
        DirectiveCoordinate: {
            leave: ({ name: t })=>g([
                    "@",
                    t
                ])
        },
        DirectiveArgumentCoordinate: {
            leave: ({ name: t, argumentName: e })=>g([
                    "@",
                    t,
                    N("(", e, ":)")
                ])
        }
    };
    function g(t, e = "") {
        var n;
        return (n = t?.filter((i)=>i).join(e)) !== null && n !== void 0 ? n : "";
    }
    function se(t) {
        return N(`{
`, Ft(g(t, `
`)), `
}`);
    }
    function N(t, e, n = "") {
        return e != null && e !== "" ? t + e + n : "";
    }
    function Ft(t) {
        return N("  ", t.replace(/\n/g, `
  `));
    }
    function Gt(t) {
        var e;
        return (e = t?.some((n)=>n.includes(`
`))) !== null && e !== void 0 ? e : !1;
    }
    var bn = function(t, e) {
        return bn = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(n, i) {
            n.__proto__ = i;
        } || function(n, i) {
            for(var r in i)Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
        }, bn(t, e);
    };
    function le(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        bn(t, e);
        function n() {
            this.constructor = t;
        }
        t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n);
    }
    function ha(t, e, n, i) {
        function r(s) {
            return s instanceof n ? s : new n(function(a) {
                a(s);
            });
        }
        return new (n || (n = Promise))(function(s, a) {
            function o(u) {
                try {
                    l(i.next(u));
                } catch (d) {
                    a(d);
                }
            }
            function c(u) {
                try {
                    l(i.throw(u));
                } catch (d) {
                    a(d);
                }
            }
            function l(u) {
                u.done ? s(u.value) : r(u.value).then(o, c);
            }
            l((i = i.apply(t, e || [])).next());
        });
    }
    function vr(t, e) {
        var n = {
            label: 0,
            sent: function() {
                if (s[0] & 1) throw s[1];
                return s[1];
            },
            trys: [],
            ops: []
        }, i, r, s, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
        return a.next = o(0), a.throw = o(1), a.return = o(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
            return this;
        }), a;
        function o(l) {
            return function(u) {
                return c([
                    l,
                    u
                ]);
            };
        }
        function c(l) {
            if (i) throw new TypeError("Generator is already executing.");
            for(; a && (a = 0, l[0] && (n = 0)), n;)try {
                if (i = 1, r && (s = l[0] & 2 ? r.return : l[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, l[1])).done) return s;
                switch(r = 0, s && (l = [
                    l[0] & 2,
                    s.value
                ]), l[0]){
                    case 0:
                    case 1:
                        s = l;
                        break;
                    case 4:
                        return n.label++, {
                            value: l[1],
                            done: !1
                        };
                    case 5:
                        n.label++, r = l[1], l = [
                            0
                        ];
                        continue;
                    case 7:
                        l = n.ops.pop(), n.trys.pop();
                        continue;
                    default:
                        if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                            n = 0;
                            continue;
                        }
                        if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                            n.label = l[1];
                            break;
                        }
                        if (l[0] === 6 && n.label < s[1]) {
                            n.label = s[1], s = l;
                            break;
                        }
                        if (s && n.label < s[2]) {
                            n.label = s[2], n.ops.push(l);
                            break;
                        }
                        s[2] && n.ops.pop(), n.trys.pop();
                        continue;
                }
                l = e.call(t, n);
            } catch (u) {
                l = [
                    6,
                    u
                ], r = 0;
            } finally{
                i = s = 0;
            }
            if (l[0] & 5) throw l[1];
            return {
                value: l[0] ? l[1] : void 0,
                done: !0
            };
        }
    }
    function Ue(t) {
        var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
        if (n) return n.call(t);
        if (t && typeof t.length == "number") return {
            next: function() {
                return t && i >= t.length && (t = void 0), {
                    value: t && t[i++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function Qe(t, e) {
        var n = typeof Symbol == "function" && t[Symbol.iterator];
        if (!n) return t;
        var i = n.call(t), r, s = [], a;
        try {
            for(; (e === void 0 || e-- > 0) && !(r = i.next()).done;)s.push(r.value);
        } catch (o) {
            a = {
                error: o
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (a) throw a.error;
            }
        }
        return s;
    }
    function $e(t, e, n) {
        if (n || arguments.length === 2) for(var i = 0, r = e.length, s; i < r; i++)(s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
        return t.concat(s || Array.prototype.slice.call(e));
    }
    function je(t) {
        return this instanceof je ? (this.v = t, this) : new je(t);
    }
    function pa(t, e, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i = n.apply(t, e || []), r, s = [];
        return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", a), r[Symbol.asyncIterator] = function() {
            return this;
        }, r;
        function a(h) {
            return function(p) {
                return Promise.resolve(p).then(h, d);
            };
        }
        function o(h, p) {
            i[h] && (r[h] = function(y) {
                return new Promise(function(m, v) {
                    s.push([
                        h,
                        y,
                        m,
                        v
                    ]) > 1 || c(h, y);
                });
            }, p && (r[h] = p(r[h])));
        }
        function c(h, p) {
            try {
                l(i[h](p));
            } catch (y) {
                f(s[0][3], y);
            }
        }
        function l(h) {
            h.value instanceof je ? Promise.resolve(h.value.v).then(u, d) : f(s[0][2], h);
        }
        function u(h) {
            c("next", h);
        }
        function d(h) {
            c("throw", h);
        }
        function f(h, p) {
            h(p), s.shift(), s.length && c(s[0][0], s[0][1]);
        }
    }
    function ma(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e = t[Symbol.asyncIterator], n;
        return e ? e.call(t) : (t = typeof Ue == "function" ? Ue(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
            return this;
        }, n);
        function i(s) {
            n[s] = t[s] && function(a) {
                return new Promise(function(o, c) {
                    a = t[s](a), r(o, c, a.done, a.value);
                });
            };
        }
        function r(s, a, o, c) {
            Promise.resolve(c).then(function(l) {
                s({
                    value: l,
                    done: o
                });
            }, a);
        }
    }
    function M(t) {
        return typeof t == "function";
    }
    function Pn(t) {
        var e = function(i) {
            Error.call(i), i.stack = new Error().stack;
        }, n = t(e);
        return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
    }
    var Jt = Pn(function(t) {
        return function(n) {
            t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(i, r) {
                return r + 1 + ") " + i.toString();
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
        };
    });
    function xt(t, e) {
        if (t) {
            var n = t.indexOf(e);
            0 <= n && t.splice(n, 1);
        }
    }
    var mt = (function() {
        function t(e) {
            this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
        }
        return t.prototype.unsubscribe = function() {
            var e, n, i, r, s;
            if (!this.closed) {
                this.closed = !0;
                var a = this._parentage;
                if (a) if (this._parentage = null, Array.isArray(a)) try {
                    for(var o = Ue(a), c = o.next(); !c.done; c = o.next()){
                        var l = c.value;
                        l.remove(this);
                    }
                } catch (y) {
                    e = {
                        error: y
                    };
                } finally{
                    try {
                        c && !c.done && (n = o.return) && n.call(o);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                else a.remove(this);
                var u = this.initialTeardown;
                if (M(u)) try {
                    u();
                } catch (y) {
                    s = y instanceof Jt ? y.errors : [
                        y
                    ];
                }
                var d = this._finalizers;
                if (d) {
                    this._finalizers = null;
                    try {
                        for(var f = Ue(d), h = f.next(); !h.done; h = f.next()){
                            var p = h.value;
                            try {
                                di(p);
                            } catch (y) {
                                s = s ?? [], y instanceof Jt ? s = $e($e([], Qe(s)), Qe(y.errors)) : s.push(y);
                            }
                        }
                    } catch (y) {
                        i = {
                            error: y
                        };
                    } finally{
                        try {
                            h && !h.done && (r = f.return) && r.call(f);
                        } finally{
                            if (i) throw i.error;
                        }
                    }
                }
                if (s) throw new Jt(s);
            }
        }, t.prototype.add = function(e) {
            var n;
            if (e && e !== this) if (this.closed) di(e);
            else {
                if (e instanceof t) {
                    if (e.closed || e._hasParent(this)) return;
                    e._addParent(this);
                }
                (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
            }
        }, t.prototype._hasParent = function(e) {
            var n = this._parentage;
            return n === e || Array.isArray(n) && n.includes(e);
        }, t.prototype._addParent = function(e) {
            var n = this._parentage;
            this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [
                n,
                e
            ] : e;
        }, t.prototype._removeParent = function(e) {
            var n = this._parentage;
            n === e ? this._parentage = null : Array.isArray(n) && xt(n, e);
        }, t.prototype.remove = function(e) {
            var n = this._finalizers;
            n && xt(n, e), e instanceof t && e._removeParent(this);
        }, t.EMPTY = (function() {
            var e = new t;
            return e.closed = !0, e;
        })(), t;
    })(), kr = mt.EMPTY;
    function br(t) {
        return t instanceof mt || t && "closed" in t && M(t.remove) && M(t.add) && M(t.unsubscribe);
    }
    function di(t) {
        M(t) ? t() : t.unsubscribe();
    }
    var ya = {
        Promise: void 0
    }, va = {
        setTimeout: function(t, e) {
            for(var n = [], i = 2; i < arguments.length; i++)n[i - 2] = arguments[i];
            return setTimeout.apply(void 0, $e([
                t,
                e
            ], Qe(n)));
        },
        clearTimeout: function(t) {
            return clearTimeout(t);
        },
        delegate: void 0
    };
    function gr(t) {
        va.setTimeout(function() {
            throw t;
        });
    }
    function fi() {}
    function Ot(t) {
        t();
    }
    var Mn = (function(t) {
        le(e, t);
        function e(n) {
            var i = t.call(this) || this;
            return i.isStopped = !1, n ? (i.destination = n, br(n) && n.add(i)) : i.destination = ga, i;
        }
        return e.create = function(n, i, r) {
            return new ze(n, i, r);
        }, e.prototype.next = function(n) {
            this.isStopped || this._next(n);
        }, e.prototype.error = function(n) {
            this.isStopped || (this.isStopped = !0, this._error(n));
        }, e.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete());
        }, e.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
        }, e.prototype._next = function(n) {
            this.destination.next(n);
        }, e.prototype._error = function(n) {
            try {
                this.destination.error(n);
            } finally{
                this.unsubscribe();
            }
        }, e.prototype._complete = function() {
            try {
                this.destination.complete();
            } finally{
                this.unsubscribe();
            }
        }, e;
    })(mt), ka = (function() {
        function t(e) {
            this.partialObserver = e;
        }
        return t.prototype.next = function(e) {
            var n = this.partialObserver;
            if (n.next) try {
                n.next(e);
            } catch (i) {
                Nt(i);
            }
        }, t.prototype.error = function(e) {
            var n = this.partialObserver;
            if (n.error) try {
                n.error(e);
            } catch (i) {
                Nt(i);
            }
            else Nt(e);
        }, t.prototype.complete = function() {
            var e = this.partialObserver;
            if (e.complete) try {
                e.complete();
            } catch (n) {
                Nt(n);
            }
        }, t;
    })(), ze = (function(t) {
        le(e, t);
        function e(n, i, r) {
            var s = t.call(this) || this, a;
            return M(n) || !n ? a = {
                next: n ?? void 0,
                error: i ?? void 0,
                complete: r ?? void 0
            } : a = n, s.destination = new ka(a), s;
        }
        return e;
    })(Mn);
    function Nt(t) {
        gr(t);
    }
    function ba(t) {
        throw t;
    }
    var ga = {
        closed: !0,
        next: fi,
        error: ba,
        complete: fi
    }, Vn = (function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable";
    })();
    function Vt(t) {
        return t;
    }
    function Sr() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        return wr(t);
    }
    function wr(t) {
        return t.length === 0 ? Vt : t.length === 1 ? t[0] : function(n) {
            return t.reduce(function(i, r) {
                return r(i);
            }, n);
        };
    }
    var A = (function() {
        function t(e) {
            e && (this._subscribe = e);
        }
        return t.prototype.lift = function(e) {
            var n = new t;
            return n.source = this, n.operator = e, n;
        }, t.prototype.subscribe = function(e, n, i) {
            var r = this, s = wa(e) ? e : new ze(e, n, i);
            return Ot(function() {
                var a = r, o = a.operator, c = a.source;
                s.add(o ? o.call(s, c) : c ? r._subscribe(s) : r._trySubscribe(s));
            }), s;
        }, t.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e);
            } catch (n) {
                e.error(n);
            }
        }, t.prototype.forEach = function(e, n) {
            var i = this;
            return n = hi(n), new n(function(r, s) {
                var a = new ze({
                    next: function(o) {
                        try {
                            e(o);
                        } catch (c) {
                            s(c), a.unsubscribe();
                        }
                    },
                    error: s,
                    complete: r
                });
                i.subscribe(a);
            });
        }, t.prototype._subscribe = function(e) {
            var n;
            return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
        }, t.prototype[Vn] = function() {
            return this;
        }, t.prototype.pipe = function() {
            for(var e = [], n = 0; n < arguments.length; n++)e[n] = arguments[n];
            return wr(e)(this);
        }, t.prototype.toPromise = function(e) {
            var n = this;
            return e = hi(e), new e(function(i, r) {
                var s;
                n.subscribe(function(a) {
                    return s = a;
                }, function(a) {
                    return r(a);
                }, function() {
                    return i(s);
                });
            });
        }, t.create = function(e) {
            return new t(e);
        }, t;
    })();
    function hi(t) {
        var e;
        return (e = t ?? ya.Promise) !== null && e !== void 0 ? e : Promise;
    }
    function Sa(t) {
        return t && M(t.next) && M(t.error) && M(t.complete);
    }
    function wa(t) {
        return t && t instanceof Mn || Sa(t) && br(t);
    }
    function Ea(t) {
        return M(t?.lift);
    }
    function X(t) {
        return function(e) {
            if (Ea(e)) return e.lift(function(n) {
                try {
                    return t(n, this);
                } catch (i) {
                    this.error(i);
                }
            });
            throw new TypeError("Unable to lift unknown Observable type");
        };
    }
    function te(t, e, n, i, r) {
        return new Na(t, e, n, i, r);
    }
    var Na = (function(t) {
        le(e, t);
        function e(n, i, r, s, a, o) {
            var c = t.call(this, n) || this;
            return c.onFinalize = a, c.shouldUnsubscribe = o, c._next = i ? function(l) {
                try {
                    i(l);
                } catch (u) {
                    n.error(u);
                }
            } : t.prototype._next, c._error = s ? function(l) {
                try {
                    s(l);
                } catch (u) {
                    n.error(u);
                } finally{
                    this.unsubscribe();
                }
            } : t.prototype._error, c._complete = r ? function() {
                try {
                    r();
                } catch (l) {
                    n.error(l);
                } finally{
                    this.unsubscribe();
                }
            } : t.prototype._complete, c;
        }
        return e.prototype.unsubscribe = function() {
            var n;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var i = this.closed;
                t.prototype.unsubscribe.call(this), !i && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
            }
        }, e;
    })(Mn), Ta = Pn(function(t) {
        return function() {
            t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
        };
    }), Xe = (function(t) {
        le(e, t);
        function e() {
            var n = t.call(this) || this;
            return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
        }
        return e.prototype.lift = function(n) {
            var i = new pi(this, this);
            return i.operator = n, i;
        }, e.prototype._throwIfClosed = function() {
            if (this.closed) throw new Ta;
        }, e.prototype.next = function(n) {
            var i = this;
            Ot(function() {
                var r, s;
                if (i._throwIfClosed(), !i.isStopped) {
                    i.currentObservers || (i.currentObservers = Array.from(i.observers));
                    try {
                        for(var a = Ue(i.currentObservers), o = a.next(); !o.done; o = a.next()){
                            var c = o.value;
                            c.next(n);
                        }
                    } catch (l) {
                        r = {
                            error: l
                        };
                    } finally{
                        try {
                            o && !o.done && (s = a.return) && s.call(a);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }
            });
        }, e.prototype.error = function(n) {
            var i = this;
            Ot(function() {
                if (i._throwIfClosed(), !i.isStopped) {
                    i.hasError = i.isStopped = !0, i.thrownError = n;
                    for(var r = i.observers; r.length;)r.shift().error(n);
                }
            });
        }, e.prototype.complete = function() {
            var n = this;
            Ot(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.isStopped = !0;
                    for(var i = n.observers; i.length;)i.shift().complete();
                }
            });
        }, e.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
        }, Object.defineProperty(e.prototype, "observed", {
            get: function() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype._trySubscribe = function(n) {
            return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
        }, e.prototype._subscribe = function(n) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
        }, e.prototype._innerSubscribe = function(n) {
            var i = this, r = this, s = r.hasError, a = r.isStopped, o = r.observers;
            return s || a ? kr : (this.currentObservers = null, o.push(n), new mt(function() {
                i.currentObservers = null, xt(o, n);
            }));
        }, e.prototype._checkFinalizedStatuses = function(n) {
            var i = this, r = i.hasError, s = i.thrownError, a = i.isStopped;
            r ? n.error(s) : a && n.complete();
        }, e.prototype.asObservable = function() {
            var n = new A;
            return n.source = this, n;
        }, e.create = function(n, i) {
            return new pi(n, i);
        }, e;
    })(A), pi = (function(t) {
        le(e, t);
        function e(n, i) {
            var r = t.call(this) || this;
            return r.destination = n, r.source = i, r;
        }
        return e.prototype.next = function(n) {
            var i, r;
            (r = (i = this.destination) === null || i === void 0 ? void 0 : i.next) === null || r === void 0 || r.call(i, n);
        }, e.prototype.error = function(n) {
            var i, r;
            (r = (i = this.destination) === null || i === void 0 ? void 0 : i.error) === null || r === void 0 || r.call(i, n);
        }, e.prototype.complete = function() {
            var n, i;
            (i = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || i === void 0 || i.call(n);
        }, e.prototype._subscribe = function(n) {
            var i, r;
            return (r = (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(n)) !== null && r !== void 0 ? r : kr;
        }, e;
    })(Xe), Fa = (function(t) {
        le(e, t);
        function e(n) {
            var i = t.call(this) || this;
            return i._value = n, i;
        }
        return Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this.getValue();
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype._subscribe = function(n) {
            var i = t.prototype._subscribe.call(this, n);
            return !i.closed && n.next(this._value), i;
        }, e.prototype.getValue = function() {
            var n = this, i = n.hasError, r = n.thrownError, s = n._value;
            if (i) throw r;
            return this._throwIfClosed(), s;
        }, e.prototype.next = function(n) {
            t.prototype.next.call(this, this._value = n);
        }, e;
    })(Xe), qn = {
        now: function() {
            return (qn.delegate || Date).now();
        },
        delegate: void 0
    }, Er = (function(t) {
        le(e, t);
        function e(n, i, r) {
            n === void 0 && (n = 1 / 0), i === void 0 && (i = 1 / 0), r === void 0 && (r = qn);
            var s = t.call(this) || this;
            return s._bufferSize = n, s._windowTime = i, s._timestampProvider = r, s._buffer = [], s._infiniteTimeWindow = !0, s._infiniteTimeWindow = i === 1 / 0, s._bufferSize = Math.max(1, n), s._windowTime = Math.max(1, i), s;
        }
        return e.prototype.next = function(n) {
            var i = this, r = i.isStopped, s = i._buffer, a = i._infiniteTimeWindow, o = i._timestampProvider, c = i._windowTime;
            r || (s.push(n), !a && s.push(o.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
        }, e.prototype._subscribe = function(n) {
            this._throwIfClosed(), this._trimBuffer();
            for(var i = this._innerSubscribe(n), r = this, s = r._infiniteTimeWindow, a = r._buffer, o = a.slice(), c = 0; c < o.length && !n.closed; c += s ? 1 : 2)n.next(o[c]);
            return this._checkFinalizedStatuses(n), i;
        }, e.prototype._trimBuffer = function() {
            var n = this, i = n._bufferSize, r = n._timestampProvider, s = n._buffer, a = n._infiniteTimeWindow, o = (a ? 1 : 2) * i;
            if (i < 1 / 0 && o < s.length && s.splice(0, s.length - o), !a) {
                for(var c = r.now(), l = 0, u = 1; u < s.length && s[u] <= c; u += 2)l = u;
                l && s.splice(0, l + 1);
            }
        }, e;
    })(Xe), Oa = (function(t) {
        le(e, t);
        function e(n, i) {
            return t.call(this) || this;
        }
        return e.prototype.schedule = function(n, i) {
            return this;
        }, e;
    })(mt), mi = {
        setInterval: function(t, e) {
            for(var n = [], i = 2; i < arguments.length; i++)n[i - 2] = arguments[i];
            return setInterval.apply(void 0, $e([
                t,
                e
            ], Qe(n)));
        },
        clearInterval: function(t) {
            return clearInterval(t);
        },
        delegate: void 0
    }, Ca = (function(t) {
        le(e, t);
        function e(n, i) {
            var r = t.call(this, n, i) || this;
            return r.scheduler = n, r.work = i, r.pending = !1, r;
        }
        return e.prototype.schedule = function(n, i) {
            var r;
            if (i === void 0 && (i = 0), this.closed) return this;
            this.state = n;
            var s = this.id, a = this.scheduler;
            return s != null && (this.id = this.recycleAsyncId(a, s, i)), this.pending = !0, this.delay = i, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(a, this.id, i), this;
        }, e.prototype.requestAsyncId = function(n, i, r) {
            return r === void 0 && (r = 0), mi.setInterval(n.flush.bind(n, this), r);
        }, e.prototype.recycleAsyncId = function(n, i, r) {
            if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === !1) return i;
            i != null && mi.clearInterval(i);
        }, e.prototype.execute = function(n, i) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var r = this._execute(n, i);
            if (r) return r;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }, e.prototype._execute = function(n, i) {
            var r = !1, s;
            try {
                this.work(n);
            } catch (a) {
                r = !0, s = a || new Error("Scheduled action threw falsy error");
            }
            if (r) return this.unsubscribe(), s;
        }, e.prototype.unsubscribe = function() {
            if (!this.closed) {
                var n = this, i = n.id, r = n.scheduler, s = r.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, xt(s, this), i != null && (this.id = this.recycleAsyncId(r, i, null)), this.delay = null, t.prototype.unsubscribe.call(this);
            }
        }, e;
    })(Oa), yi = (function() {
        function t(e, n) {
            n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
        }
        return t.prototype.schedule = function(e, n, i) {
            return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(i, n);
        }, t.now = qn.now, t;
    })(), Da = (function(t) {
        le(e, t);
        function e(n, i) {
            i === void 0 && (i = yi.now);
            var r = t.call(this, n, i) || this;
            return r.actions = [], r._active = !1, r;
        }
        return e.prototype.flush = function(n) {
            var i = this.actions;
            if (this._active) {
                i.push(n);
                return;
            }
            var r;
            this._active = !0;
            do if (r = n.execute(n.state, n.delay)) break;
            while (n = i.shift());
            if (this._active = !1, r) {
                for(; n = i.shift();)n.unsubscribe();
                throw r;
            }
        }, e;
    })(yi), _a = new Da(Ca), Ia = _a, _e = new A(function(t) {
        return t.complete();
    });
    function Aa(t) {
        return t && M(t.schedule);
    }
    function Nr(t) {
        return t[t.length - 1];
    }
    function xa(t) {
        return M(Nr(t)) ? t.pop() : void 0;
    }
    function Tr(t) {
        return Aa(Nr(t)) ? t.pop() : void 0;
    }
    var Fr = (function(t) {
        return t && typeof t.length == "number" && typeof t != "function";
    });
    function Or(t) {
        return M(t?.then);
    }
    function Cr(t) {
        return M(t[Vn]);
    }
    function Dr(t) {
        return Symbol.asyncIterator && M(t?.[Symbol.asyncIterator]);
    }
    function _r(t) {
        return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    function Ra() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
    }
    var Ir = Ra();
    function Ar(t) {
        return M(t?.[Ir]);
    }
    function xr(t) {
        return pa(this, arguments, function() {
            var n, i, r, s;
            return vr(this, function(a) {
                switch(a.label){
                    case 0:
                        n = t.getReader(), a.label = 1;
                    case 1:
                        a.trys.push([
                            1,
                            ,
                            9,
                            10
                        ]), a.label = 2;
                    case 2:
                        return [
                            4,
                            je(n.read())
                        ];
                    case 3:
                        return i = a.sent(), r = i.value, s = i.done, s ? [
                            4,
                            je(void 0)
                        ] : [
                            3,
                            5
                        ];
                    case 4:
                        return [
                            2,
                            a.sent()
                        ];
                    case 5:
                        return [
                            4,
                            je(r)
                        ];
                    case 6:
                        return [
                            4,
                            a.sent()
                        ];
                    case 7:
                        return a.sent(), [
                            3,
                            2
                        ];
                    case 8:
                        return [
                            3,
                            10
                        ];
                    case 9:
                        return n.releaseLock(), [
                            7
                        ];
                    case 10:
                        return [
                            2
                        ];
                }
            });
        });
    }
    function Rr(t) {
        return M(t?.getReader);
    }
    function ue(t) {
        if (t instanceof A) return t;
        if (t != null) {
            if (Cr(t)) return Pa(t);
            if (Fr(t)) return Ma(t);
            if (Or(t)) return Va(t);
            if (Dr(t)) return Pr(t);
            if (Ar(t)) return qa(t);
            if (Rr(t)) return ja(t);
        }
        throw _r(t);
    }
    function Pa(t) {
        return new A(function(e) {
            var n = t[Vn]();
            if (M(n.subscribe)) return n.subscribe(e);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
    }
    function Ma(t) {
        return new A(function(e) {
            for(var n = 0; n < t.length && !e.closed; n++)e.next(t[n]);
            e.complete();
        });
    }
    function Va(t) {
        return new A(function(e) {
            t.then(function(n) {
                e.closed || (e.next(n), e.complete());
            }, function(n) {
                return e.error(n);
            }).then(null, gr);
        });
    }
    function qa(t) {
        return new A(function(e) {
            var n, i;
            try {
                for(var r = Ue(t), s = r.next(); !s.done; s = r.next()){
                    var a = s.value;
                    if (e.next(a), e.closed) return;
                }
            } catch (o) {
                n = {
                    error: o
                };
            } finally{
                try {
                    s && !s.done && (i = r.return) && i.call(r);
                } finally{
                    if (n) throw n.error;
                }
            }
            e.complete();
        });
    }
    function Pr(t) {
        return new A(function(e) {
            Ba(t, e).catch(function(n) {
                return e.error(n);
            });
        });
    }
    function ja(t) {
        return Pr(xr(t));
    }
    function Ba(t, e) {
        var n, i, r, s;
        return ha(this, void 0, void 0, function() {
            var a, o;
            return vr(this, function(c) {
                switch(c.label){
                    case 0:
                        c.trys.push([
                            0,
                            5,
                            6,
                            11
                        ]), n = ma(t), c.label = 1;
                    case 1:
                        return [
                            4,
                            n.next()
                        ];
                    case 2:
                        if (i = c.sent(), !!i.done) return [
                            3,
                            4
                        ];
                        if (a = i.value, e.next(a), e.closed) return [
                            2
                        ];
                        c.label = 3;
                    case 3:
                        return [
                            3,
                            1
                        ];
                    case 4:
                        return [
                            3,
                            11
                        ];
                    case 5:
                        return o = c.sent(), r = {
                            error: o
                        }, [
                            3,
                            11
                        ];
                    case 6:
                        return c.trys.push([
                            6,
                            ,
                            9,
                            10
                        ]), i && !i.done && (s = n.return) ? [
                            4,
                            s.call(n)
                        ] : [
                            3,
                            8
                        ];
                    case 7:
                        c.sent(), c.label = 8;
                    case 8:
                        return [
                            3,
                            10
                        ];
                    case 9:
                        if (r) throw r.error;
                        return [
                            7
                        ];
                    case 10:
                        return [
                            7
                        ];
                    case 11:
                        return e.complete(), [
                            2
                        ];
                }
            });
        });
    }
    function Ce(t, e, n, i, r) {
        i === void 0 && (i = 0), r === void 0 && (r = !1);
        var s = e.schedule(function() {
            n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
        }, i);
        if (t.add(s), !r) return s;
    }
    function Mr(t, e) {
        return e === void 0 && (e = 0), X(function(n, i) {
            n.subscribe(te(i, function(r) {
                return Ce(i, t, function() {
                    return i.next(r);
                }, e);
            }, function() {
                return Ce(i, t, function() {
                    return i.complete();
                }, e);
            }, function(r) {
                return Ce(i, t, function() {
                    return i.error(r);
                }, e);
            }));
        });
    }
    function Vr(t, e) {
        return e === void 0 && (e = 0), X(function(n, i) {
            i.add(t.schedule(function() {
                return n.subscribe(i);
            }, e));
        });
    }
    function La(t, e) {
        return ue(t).pipe(Vr(e), Mr(e));
    }
    function Ua(t, e) {
        return ue(t).pipe(Vr(e), Mr(e));
    }
    function Qa(t, e) {
        return new A(function(n) {
            var i = 0;
            return e.schedule(function() {
                i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
            });
        });
    }
    function $a(t, e) {
        return new A(function(n) {
            var i;
            return Ce(n, e, function() {
                i = t[Ir](), Ce(n, e, function() {
                    var r, s, a;
                    try {
                        r = i.next(), s = r.value, a = r.done;
                    } catch (o) {
                        n.error(o);
                        return;
                    }
                    a ? n.complete() : n.next(s);
                }, 0, !0);
            }), function() {
                return M(i?.return) && i.return();
            };
        });
    }
    function qr(t, e) {
        if (!t) throw new Error("Iterable cannot be null");
        return new A(function(n) {
            Ce(n, e, function() {
                var i = t[Symbol.asyncIterator]();
                Ce(n, e, function() {
                    i.next().then(function(r) {
                        r.done ? n.complete() : n.next(r.value);
                    });
                }, 0, !0);
            });
        });
    }
    function za(t, e) {
        return qr(xr(t), e);
    }
    function Wa(t, e) {
        if (t != null) {
            if (Cr(t)) return La(t, e);
            if (Fr(t)) return Qa(t, e);
            if (Or(t)) return Ua(t, e);
            if (Dr(t)) return qr(t, e);
            if (Ar(t)) return $a(t, e);
            if (Rr(t)) return za(t, e);
        }
        throw _r(t);
    }
    function oe(t, e) {
        return e ? Wa(t, e) : ue(t);
    }
    function Ne() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        var n = Tr(t);
        return oe(t, n);
    }
    function jr(t, e) {
        var n = M(t) ? t : function() {
            return t;
        }, i = function(r) {
            return r.error(n());
        };
        return new A(i);
    }
    var vi;
    (function(t) {
        t.NEXT = "N", t.ERROR = "E", t.COMPLETE = "C";
    })(vi || (vi = {}));
    var Xt = (function() {
        function t(e, n, i) {
            this.kind = e, this.value = n, this.error = i, this.hasValue = e === "N";
        }
        return t.prototype.observe = function(e) {
            return Ha(this, e);
        }, t.prototype.do = function(e, n, i) {
            var r = this, s = r.kind, a = r.value, o = r.error;
            return s === "N" ? e?.(a) : s === "E" ? n?.(o) : i?.();
        }, t.prototype.accept = function(e, n, i) {
            var r;
            return M((r = e) === null || r === void 0 ? void 0 : r.next) ? this.observe(e) : this.do(e, n, i);
        }, t.prototype.toObservable = function() {
            var e = this, n = e.kind, i = e.value, r = e.error, s = n === "N" ? Ne(i) : n === "E" ? jr(function() {
                return r;
            }) : n === "C" ? _e : 0;
            if (!s) throw new TypeError("Unexpected notification kind " + n);
            return s;
        }, t.createNext = function(e) {
            return new t("N", e);
        }, t.createError = function(e) {
            return new t("E", void 0, e);
        }, t.createComplete = function() {
            return t.completeNotification;
        }, t.completeNotification = new t("C"), t;
    })();
    function Ha(t, e) {
        var n, i, r, s = t, a = s.kind, o = s.value, c = s.error;
        if (typeof a != "string") throw new TypeError('Invalid notification, missing "kind"');
        a === "N" ? (n = e.next) === null || n === void 0 || n.call(e, o) : a === "E" ? (i = e.error) === null || i === void 0 || i.call(e, c) : (r = e.complete) === null || r === void 0 || r.call(e);
    }
    var Br = Pn(function(t) {
        return function() {
            t(this), this.name = "EmptyError", this.message = "no elements in sequence";
        };
    });
    function Ya(t, e) {
        var n = typeof e == "object";
        return new Promise(function(i, r) {
            var s = !1, a;
            t.subscribe({
                next: function(o) {
                    a = o, s = !0;
                },
                error: r,
                complete: function() {
                    s ? i(a) : n ? i(e.defaultValue) : r(new Br);
                }
            });
        });
    }
    function Tt(t, e) {
        return new Promise(function(n, i) {
            var r = new ze({
                next: function(s) {
                    n(s), r.unsubscribe();
                },
                error: i,
                complete: function() {
                    i(new Br);
                }
            });
            t.subscribe(r);
        });
    }
    function Ga(t) {
        return t instanceof Date && !isNaN(t);
    }
    function I(t, e) {
        return X(function(n, i) {
            var r = 0;
            n.subscribe(te(i, function(s) {
                i.next(t.call(e, s, r++));
            }));
        });
    }
    function Ja(t, e, n, i, r, s, a, o) {
        var c = [], l = 0, u = 0, d = !1, f = function() {
            d && !c.length && !l && e.complete();
        }, h = function(y) {
            return l < i ? p(y) : c.push(y);
        }, p = function(y) {
            l++;
            var m = !1;
            ue(n(y, u++)).subscribe(te(e, function(v) {
                e.next(v);
            }, function() {
                m = !0;
            }, void 0, function() {
                if (m) try {
                    l--;
                    for(var v = function() {
                        var k = c.shift();
                        a || p(k);
                    }; c.length && l < i;)v();
                    f();
                } catch (k) {
                    e.error(k);
                }
            }));
        };
        return t.subscribe(te(e, h, function() {
            d = !0, f();
        })), function() {};
    }
    function be(t, e, n) {
        return n === void 0 && (n = 1 / 0), M(e) ? be(function(i, r) {
            return I(function(s, a) {
                return e(i, s, r, a);
            })(ue(t(i, r)));
        }, n) : (typeof e == "number" && (n = e), X(function(i, r) {
            return Ja(i, r, t, n);
        }));
    }
    function Xa(t) {
        return be(Vt, t);
    }
    function Ka() {
        return Xa(1);
    }
    function Kt() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        return Ka()(oe(t, Tr(t)));
    }
    function Za(t) {
        return new A(function(e) {
            ue(t()).subscribe(e);
        });
    }
    function ki(t, e, n) {
        return Za(function() {
            return t() ? e : n;
        });
    }
    function eo(t, e, n) {
        return n === void 0 && (n = Ia), new A(function(i) {
            var r = Ga(t) ? +t - n.now() : t;
            r < 0 && (r = 0);
            var s = 0;
            return n.schedule(function() {
                i.closed || (i.next(s++), i.complete());
            }, r);
        });
    }
    var to = Array.isArray;
    function no(t) {
        return t.length === 1 && to(t[0]) ? t[0] : t;
    }
    function W(t, e) {
        return X(function(n, i) {
            var r = 0;
            n.subscribe(te(i, function(s) {
                return t.call(e, s, r++) && i.next(s);
            }));
        });
    }
    function io() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        var n = xa(t), i = no(t);
        return i.length ? new A(function(r) {
            var s = i.map(function() {
                return [];
            }), a = i.map(function() {
                return !1;
            });
            r.add(function() {
                s = a = null;
            });
            for(var o = function(l) {
                ue(i[l]).subscribe(te(r, function(u) {
                    if (s[l].push(u), s.every(function(f) {
                        return f.length;
                    })) {
                        var d = s.map(function(f) {
                            return f.shift();
                        });
                        r.next(n ? n.apply(void 0, $e([], Qe(d))) : d), s.some(function(f, h) {
                            return !f.length && a[h];
                        }) && r.complete();
                    }
                }, function() {
                    a[l] = !0, !s[l].length && r.complete();
                }));
            }, c = 0; !r.closed && c < i.length; c++)o(c);
            return function() {
                s = a = null;
            };
        }) : _e;
    }
    function Ct(t) {
        return X(function(e, n) {
            var i = null, r = !1, s;
            i = e.subscribe(te(n, void 0, void 0, function(a) {
                s = ue(t(a, Ct(t)(e))), i ? (i.unsubscribe(), i = null, s.subscribe(n)) : r = !0;
            })), r && (i.unsubscribe(), i = null, s.subscribe(n));
        });
    }
    function ee(t, e) {
        return M(e) ? be(t, e, 1) : be(t, 1);
    }
    function qt(t) {
        return t <= 0 ? function() {
            return _e;
        } : X(function(e, n) {
            var i = 0;
            e.subscribe(te(n, function(r) {
                ++i <= t && (n.next(r), t <= i && n.complete());
            }));
        });
    }
    function ro(t, e) {
        return e === void 0 && (e = Vt), t = t ?? so, X(function(n, i) {
            var r, s = !0;
            n.subscribe(te(i, function(a) {
                var o = e(a);
                (s || !t(r, o)) && (s = !1, r = o, i.next(a));
            }));
        });
    }
    function so(t, e) {
        return t === e;
    }
    function ao(t) {
        return X(function(e, n) {
            try {
                e.subscribe(n);
            } finally{
                n.add(t);
            }
        });
    }
    function oo() {
        return X(function(t, e) {
            t.subscribe(te(e, function(n) {
                e.next(Xt.createNext(n));
            }, function() {
                e.next(Xt.createComplete()), e.complete();
            }, function(n) {
                e.next(Xt.createError(n)), e.complete();
            }));
        });
    }
    function lt(t) {
        t === void 0 && (t = {});
        var e = t.connector, n = e === void 0 ? function() {
            return new Xe;
        } : e, i = t.resetOnError, r = i === void 0 ? !0 : i, s = t.resetOnComplete, a = s === void 0 ? !0 : s, o = t.resetOnRefCountZero, c = o === void 0 ? !0 : o;
        return function(l) {
            var u, d, f, h = 0, p = !1, y = !1, m = function() {
                d?.unsubscribe(), d = void 0;
            }, v = function() {
                m(), u = f = void 0, p = y = !1;
            }, k = function() {
                var b = u;
                v(), b?.unsubscribe();
            };
            return X(function(b, S) {
                h++, !y && !p && m();
                var w = f = f ?? n();
                S.add(function() {
                    h--, h === 0 && !y && !p && (d = Zt(k, c));
                }), w.subscribe(S), !u && h > 0 && (u = new ze({
                    next: function(q) {
                        return w.next(q);
                    },
                    error: function(q) {
                        y = !0, m(), d = Zt(v, r, q), w.error(q);
                    },
                    complete: function() {
                        p = !0, m(), d = Zt(v, a), w.complete();
                    }
                }), ue(b).subscribe(u));
            })(l);
        };
    }
    function Zt(t, e) {
        for(var n = [], i = 2; i < arguments.length; i++)n[i - 2] = arguments[i];
        if (e === !0) {
            t();
            return;
        }
        if (e !== !1) {
            var r = new ze({
                next: function() {
                    r.unsubscribe(), t();
                }
            });
            return ue(e.apply(void 0, $e([], Qe(n)))).subscribe(r);
        }
    }
    function jn(t, e, n) {
        var i, r, s, a, o = !1;
        return t && typeof t == "object" ? (i = t.bufferSize, a = i === void 0 ? 1 / 0 : i, r = t.windowTime, e = r === void 0 ? 1 / 0 : r, s = t.refCount, o = s === void 0 ? !1 : s, n = t.scheduler) : a = t ?? 1 / 0, lt({
            connector: function() {
                return new Er(a, e, n);
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: o
        });
    }
    function en(t) {
        return W(function(e, n) {
            return t <= n;
        });
    }
    function co(t) {
        return X(function(e, n) {
            var i = !1, r = 0;
            e.subscribe(te(n, function(s) {
                return (i || (i = !t(s, r++))) && n.next(s);
            }));
        });
    }
    function ut(t, e, n) {
        var i = M(t) || e || n ? {
            next: t,
            error: e,
            complete: n
        } : t;
        return i ? X(function(r, s) {
            var a;
            (a = i.subscribe) === null || a === void 0 || a.call(i);
            var o = !0;
            r.subscribe(te(s, function(c) {
                var l;
                (l = i.next) === null || l === void 0 || l.call(i, c), s.next(c);
            }, function() {
                var c;
                o = !1, (c = i.complete) === null || c === void 0 || c.call(i), s.complete();
            }, function(c) {
                var l;
                o = !1, (l = i.error) === null || l === void 0 || l.call(i, c), s.error(c);
            }, function() {
                var c, l;
                o && ((c = i.unsubscribe) === null || c === void 0 || c.call(i)), (l = i.finalize) === null || l === void 0 || l.call(i);
            }));
        }) : Vt;
    }
    const Lr = !1;
    function ke(t) {
        try {
            return t();
        } catch  {}
    }
    const gn = ke(()=>globalThis) || ke(()=>window) || ke(()=>self) || ke(()=>global) || ke(function() {
        return ke.constructor("return this")();
    }), Bn = "4.2.7", bi = new Map;
    function Ur(t) {
        const e = bi.get(t) || 1;
        return bi.set(t, e + 1), `${t}:${e}:${Math.random().toString(36).slice(2)}`;
    }
    function lo(t, e = 0) {
        const n = Ur("stringifyForDisplay");
        return JSON.stringify(t, (i, r)=>r === void 0 ? n : r, e).split(JSON.stringify(n)).join("<undefined>");
    }
    const gi = "Invariant Violation";
    class Ln extends Error {
        constructor(e = gi){
            super(e), this.name = gi, Object.setPrototypeOf(this, Ln.prototype);
        }
    }
    const Qr = [
        "debug",
        "log",
        "warn",
        "error",
        "silent"
    ];
    let uo = Qr.indexOf("silent");
    function F(t, ...e) {
        if (!t) throw ne(...e);
    }
    function jt(t) {
        return function(e, ...n) {
            if (Qr.indexOf(t) >= uo) {
                const i = console[t] || console.log;
                if (typeof e == "number") {
                    const r = e;
                    e = $r(r), e || (e = zr(r, n), n = []);
                }
                i(e, ...n);
            }
        };
    }
    F.debug = jt("debug");
    F.log = jt("log");
    F.warn = jt("warn");
    F.error = jt("error");
    function ne(t, ...e) {
        return new Ln($r(t, e) || zr(t, e));
    }
    const Si = Symbol.for("ApolloErrorMessageHandler_" + Bn);
    function Sn(t) {
        if (typeof t == "string") return t;
        try {
            return lo(t, 2).slice(0, 1e3);
        } catch  {
            return "<non-serializable>";
        }
    }
    function $r(t, e = []) {
        if (t) return gn[Si] && gn[Si](t, e.map(Sn));
    }
    function zr(t, e = []) {
        if (t) return typeof t == "string" ? e.reduce((n, i)=>n.replace(/%[sdfo]/, Sn(i)), t) : `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
            version: Bn,
            message: t,
            args: e.map(Sn)
        }))}`;
    }
    function We(t, e, n, i) {
        if (n.kind === C.INT || n.kind === C.FLOAT) t[e.value] = Number(n.value);
        else if (n.kind === C.BOOLEAN || n.kind === C.STRING) t[e.value] = n.value;
        else if (n.kind === C.OBJECT) {
            const r = {};
            n.fields.map((s)=>We(r, s.name, s.value, i)), t[e.value] = r;
        } else if (n.kind === C.VARIABLE) {
            const r = (i || {})[n.name.value];
            t[e.value] = r;
        } else if (n.kind === C.LIST) t[e.value] = n.values.map((r)=>{
            const s = {};
            return We(s, e, r, i), s[e.value];
        });
        else if (n.kind === C.ENUM) t[e.value] = n.value;
        else if (n.kind === C.NULL) t[e.value] = null;
        else throw ne(19, e.value, n.kind);
    }
    function Un(t, e) {
        if (t.arguments && t.arguments.length) {
            const n = {};
            return t.arguments.forEach(({ name: i, value: r })=>We(n, i, r, e)), n;
        }
        return null;
    }
    const fo = Symbol.for("apollo.cacheSize"), ye = {
        ...gn[fo]
    };
    function He(t, e) {
        return t.definitions.find((n)=>n.kind === "OperationDefinition" && !!n.name)?.name.value ?? e;
    }
    const ho = ()=>Object.create(null), { forEach: po, slice: wi } = Array.prototype, { hasOwnProperty: mo } = Object.prototype;
    class de {
        constructor(e = !0, n = ho){
            this.weakness = e, this.makeData = n;
        }
        lookup() {
            return this.lookupArray(arguments);
        }
        lookupArray(e) {
            let n = this;
            return po.call(e, (i)=>n = n.getChildTrie(i)), mo.call(n, "data") ? n.data : n.data = this.makeData(wi.call(e));
        }
        peek() {
            return this.peekArray(arguments);
        }
        peekArray(e) {
            let n = this;
            for(let i = 0, r = e.length; n && i < r; ++i){
                const s = n.mapFor(e[i], !1);
                n = s && s.get(e[i]);
            }
            return n && n.data;
        }
        remove() {
            return this.removeArray(arguments);
        }
        removeArray(e) {
            let n;
            if (e.length) {
                const i = e[0], r = this.mapFor(i, !1), s = r && r.get(i);
                s && (n = s.removeArray(wi.call(e, 1)), !s.data && !s.weak && !(s.strong && s.strong.size) && r.delete(i));
            } else n = this.data, delete this.data;
            return n;
        }
        getChildTrie(e) {
            const n = this.mapFor(e, !0);
            let i = n.get(e);
            return i || n.set(e, i = new de(this.weakness, this.makeData)), i;
        }
        mapFor(e, n) {
            return this.weakness && yo(e) ? this.weak || (n ? this.weak = new WeakMap : void 0) : this.strong || (n ? this.strong = new Map : void 0);
        }
    }
    function yo(t) {
        switch(typeof t){
            case "object":
                if (t === null) break;
            case "function":
                return !0;
        }
        return !1;
    }
    function vo() {}
    class wn {
        constructor(e = 1 / 0, n = vo){
            this.max = e, this.dispose = n, this.map = new Map, this.newest = null, this.oldest = null;
        }
        has(e) {
            return this.map.has(e);
        }
        get(e) {
            const n = this.getNode(e);
            return n && n.value;
        }
        get size() {
            return this.map.size;
        }
        getNode(e) {
            const n = this.map.get(e);
            if (n && n !== this.newest) {
                const { older: i, newer: r } = n;
                r && (r.older = i), i && (i.newer = r), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = r);
            }
            return n;
        }
        set(e, n) {
            let i = this.getNode(e);
            return i ? i.value = n : (i = {
                key: e,
                value: n,
                newer: null,
                older: this.newest
            }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.map.set(e, i), i.value);
        }
        clean() {
            for(; this.oldest && this.map.size > this.max;)this.delete(this.oldest.key);
        }
        delete(e) {
            const n = this.map.get(e);
            return n ? (n === this.newest && (this.newest = n.older), n === this.oldest && (this.oldest = n.newer), n.newer && (n.newer.older = n.older), n.older && (n.older.newer = n.newer), this.map.delete(e), this.dispose(n.value, e), !0) : !1;
        }
    }
    function En() {}
    const ko = En, bo = typeof WeakRef < "u" ? WeakRef : function(t) {
        return {
            deref: ()=>t
        };
    }, go = typeof WeakMap < "u" ? WeakMap : Map, So = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
        return {
            register: En,
            unregister: En
        };
    }, wo = 10024;
    class Rt {
        constructor(e = 1 / 0, n = ko){
            this.max = e, this.dispose = n, this.map = new go, this.newest = null, this.oldest = null, this.unfinalizedNodes = new Set, this.finalizationScheduled = !1, this.size = 0, this.finalize = ()=>{
                const i = this.unfinalizedNodes.values();
                for(let r = 0; r < wo; r++){
                    const s = i.next().value;
                    if (!s) break;
                    this.unfinalizedNodes.delete(s);
                    const a = s.key;
                    delete s.key, s.keyRef = new bo(a), this.registry.register(a, s, s);
                }
                this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
            }, this.registry = new So(this.deleteNode.bind(this));
        }
        has(e) {
            return this.map.has(e);
        }
        get(e) {
            const n = this.getNode(e);
            return n && n.value;
        }
        getNode(e) {
            const n = this.map.get(e);
            if (n && n !== this.newest) {
                const { older: i, newer: r } = n;
                r && (r.older = i), i && (i.newer = r), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = r);
            }
            return n;
        }
        set(e, n) {
            let i = this.getNode(e);
            return i ? i.value = n : (i = {
                key: e,
                value: n,
                newer: null,
                older: this.newest
            }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.scheduleFinalization(i), this.map.set(e, i), this.size++, i.value);
        }
        clean() {
            for(; this.oldest && this.size > this.max;)this.deleteNode(this.oldest);
        }
        deleteNode(e) {
            e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
            const n = e.key || e.keyRef && e.keyRef.deref();
            this.dispose(e.value, n), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), n && this.map.delete(n);
        }
        delete(e) {
            const n = this.map.get(e);
            return n ? (this.deleteNode(n), !0) : !1;
        }
        scheduleFinalization(e) {
            this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
        }
    }
    const tn = new WeakSet;
    function Wr(t) {
        t.size <= (t.max || -1) || tn.has(t) || (tn.add(t), setTimeout(()=>{
            t.clean(), tn.delete(t);
        }, 100));
    }
    const Qn = function(t, e) {
        const n = new Rt(t, e);
        return n.set = function(i, r) {
            const s = Rt.prototype.set.call(this, i, r);
            return Wr(this), s;
        }, n;
    }, Eo = function(t, e) {
        const n = new wn(t, e);
        return n.set = function(i, r) {
            const s = wn.prototype.set.call(this, i, r);
            return Wr(this), s;
        }, n;
    };
    function Hr(t, { max: e, makeCacheKey: n = (i)=>i }) {
        const i = new de(!0), r = new Qn(e);
        return (...s)=>{
            const a = i.lookupArray(n(s)), o = r.get(a);
            if (o) {
                if (o.error) throw o.error;
                return o.result;
            }
            const c = r.set(a, {});
            try {
                return c.result = t(...s);
            } catch (l) {
                throw c.error = l, l;
            }
        };
    }
    const Se = Hr((t, e)=>{
        F(t && t.kind === "Document", 1);
        const n = t.definitions.filter((i)=>i.kind === "OperationDefinition");
        e && F(n.length == 1 && n[0].operation === e, 4, e, e, n[0].operation), ce(t, {
            Field (i, r, s, a) {
                if (i.alias && (i.alias.value === "__typename" || i.alias.value.startsWith("__ac_")) && i.alias.value !== i.name.value) {
                    let o = t, c = [];
                    for (const l of a)o = o[l], o.kind === C.FIELD && c.push(o.alias?.value || o.name.value);
                    throw c.splice(-1, 1, i.name.value), ne(5, i.alias.value, c.join("."), n[0].operation, He(t, "(anonymous)"));
                }
            }
        });
    }, {
        max: ye.checkDocument || 2e3
    });
    function No(t) {
        return t.length === 0 ? _e : new A((e)=>{
            const { length: n } = t, i = new Array(n), r = new Map;
            t.forEach((c, l)=>{
                r.has(c) || r.set(c, new Set), r.get(c).add(l);
            });
            let s = r.size, a = r.size, o;
            r.forEach((c, l)=>{
                let u = !1;
                const d = l.subscribe({
                    next: (f)=>{
                        c.forEach((h)=>i[h] = f), u || (u = !0, a--), a || (o ||= new Set(t.filter((h)=>h.dirty)), o.delete(l), o.size || (e.next(i.slice()), o = void 0));
                    },
                    complete: ()=>{
                        s--, s || e.complete();
                    },
                    error: e.error.bind(e)
                });
                e.add(d);
            });
        });
    }
    function J(...t) {
        const e = {};
        return t.forEach((n)=>{
            n && Reflect.ownKeys(n).forEach((i)=>{
                const r = n[i];
                r !== void 0 && (e[i] = r);
            });
        }), e;
    }
    function yt(t = []) {
        const e = {};
        return t.forEach((n)=>{
            e[n.name.value] = n;
        }), e;
    }
    function H(t) {
        return t !== null && typeof t == "object";
    }
    const { hasOwnProperty: To } = Object.prototype, Fo = function(t, e, n) {
        return this.merge(t[n], e[n]);
    }, Ei = (t)=>isNaN(+t) ? {} : [];
    class Ye {
        options;
        reconciler;
        constructor(e = {}){
            this.options = e, this.reconciler = e.reconciler || Fo;
        }
        merge(e, n, i = {}) {
            const r = i.atPath;
            if (r?.length) {
                const [s, ...a] = r;
                e === void 0 && (e = Ei(s));
                let o = e[s];
                o === void 0 && a.length && (o = Ei(a[0]));
                const c = this.merge(o, n, {
                    ...i,
                    atPath: a
                });
                return o !== c && (e = this.shallowCopyForMerge(e), e[s] = c), e;
            }
            return Array.isArray(e) && Array.isArray(n) && this.options.arrayMerge === "truncate" && e.length > n.length && (e = e.slice(0, n.length), this.pastCopies.add(e)), H(n) && H(e) ? (Object.keys(n).forEach((s)=>{
                if (To.call(e, s)) {
                    const a = e[s];
                    if (n[s] !== a) {
                        const o = this.reconciler(e, n, s);
                        o !== a && (e = this.shallowCopyForMerge(e), e[s] = o);
                    }
                } else e = this.shallowCopyForMerge(e), e[s] = n[s];
            }), e) : n;
        }
        isObject = H;
        pastCopies = new Set;
        shallowCopyForMerge(e) {
            return H(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = {
                __proto__: Object.getPrototypeOf(e),
                ...e
            }, this.pastCopies.add(e))), e;
        }
    }
    function $n(t) {
        const e = {}, n = t && t.variableDefinitions;
        return n && n.length && n.forEach((i)=>{
            i.defaultValue && We(e, i.variable.name, i.defaultValue);
        }), e;
    }
    function Bt(t, e) {
        switch(t.kind){
            case "InlineFragment":
                return t;
            case "FragmentSpread":
                {
                    const n = t.name.value;
                    if (typeof e == "function") return e(n);
                    const i = e && e[n];
                    return F(i, 9, n), i || null;
                }
            default:
                return null;
        }
    }
    function Oo(t, e) {
        let n = e;
        const i = [];
        return t.definitions.forEach((s)=>{
            if (s.kind === "OperationDefinition") throw ne(10, s.operation, s.name ? ` named '${s.name.value}'` : "");
            s.kind === "FragmentDefinition" && i.push(s);
        }), typeof n > "u" && (F(i.length === 1, 11, i.length), n = i[0].name.value), {
            ...t,
            definitions: [
                {
                    kind: "OperationDefinition",
                    operation: "query",
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: n
                                }
                            }
                        ]
                    }
                },
                ...t.definitions
            ]
        };
    }
    function Co(t) {
        F(t.kind === "Document", 6), F(t.definitions.length <= 1, 7);
        const e = t.definitions[0];
        return F(e.kind === "FragmentDefinition", 8), e;
    }
    function vt(t) {
        return t.definitions.filter((e)=>e.kind === "FragmentDefinition");
    }
    function zn(t) {
        Se(t);
        let e;
        for (let n of t.definitions){
            if (n.kind === "OperationDefinition") return n;
            n.kind === "FragmentDefinition" && !e && (e = n);
        }
        if (e) return e;
        throw ne(12);
    }
    function ve(t) {
        return Se(t), t.definitions.filter((e)=>e.kind === "OperationDefinition")[0];
    }
    function Do(t) {
        const e = ve(t);
        return F(e && e.operation === "query", 13), e;
    }
    const me = Object.assign(function(e) {
        return JSON.stringify(e, _o);
    }, {
        reset () {
            it = new Eo(ye.canonicalStringify || 1e3);
        }
    });
    let it;
    me.reset();
    function _o(t, e) {
        if (e && typeof e == "object") {
            const n = Object.getPrototypeOf(e);
            if (n === Object.prototype || n === null) {
                const i = Object.keys(e);
                if (i.every(Io)) return e;
                const r = JSON.stringify(i);
                let s = it.get(r);
                if (!s) {
                    i.sort();
                    const o = JSON.stringify(i);
                    s = it.get(o) || i, it.set(r, s), it.set(o, s);
                }
                const a = Object.create(n);
                return s.forEach((o)=>{
                    a[o] = e[o];
                }), a;
            }
        }
        return e;
    }
    function Io(t, e, n) {
        return e === 0 || n[e - 1] <= t;
    }
    const Ao = [
        "connection",
        "include",
        "skip",
        "client",
        "rest",
        "export",
        "nonreactive",
        "stream"
    ];
    let et = me;
    const Yr = Object.assign(function(t, e, n) {
        if (e && n && n.connection && n.connection.key) {
            if (n.connection.filter && n.connection.filter.length > 0) {
                const r = n.connection.filter ? n.connection.filter : [];
                r.sort();
                const s = {};
                r.forEach((o)=>{
                    s[o] = e[o];
                });
                const a = et(s);
                if (a !== "{}") return `${n.connection.key}(${a})`;
            }
            return n.connection.key;
        }
        let i = t;
        if (e) {
            const r = et(e);
            r !== "{}" && (i += `(${r})`);
        }
        return n && Object.keys(n).forEach((r)=>{
            Ao.indexOf(r) === -1 && (n[r] && Object.keys(n[r]).length ? i += `@${r}(${et(n[r])})` : i += `@${r}`);
        }), i;
    }, {
        setStringify (t) {
            const e = et;
            return et = t, e;
        }
    });
    function Me(t) {
        return !!t.errors?.length;
    }
    function rt(t, e, n) {
        const i = new Set(t), r = i.size;
        return ce(e, {
            Directive (s) {
                if (i.delete(s.name.value) && (!n || !i.size)) return Rn;
            }
        }), n ? !i.size : i.size < r;
    }
    function xo(t) {
        let e = !1;
        return ce(t, {
            Directive: {
                enter (n) {
                    if (n.name.value === "client" && n.arguments && (e = n.arguments.some((i)=>i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0), e)) return Rn;
                }
            }
        }), e;
    }
    const j = Array.isArray;
    function Ro(t) {
        return H(t) && t.kind === "Document" && Array.isArray(t.definitions);
    }
    function kt(t) {
        return t.kind === "Field";
    }
    function Wn(t) {
        return Array.isArray(t) && t.length > 0;
    }
    function Be(t) {
        return {
            __ref: String(t)
        };
    }
    function Po(t) {
        let e = t[0] || {};
        const n = t.length;
        if (n > 1) {
            const i = new Ye;
            for(let r = 1; r < n; ++r)e = i.merge(e, t[r]);
        }
        return e;
    }
    function Dt(t, e) {
        return J(t, e, e.variables && {
            variables: J({
                ...t && t.variables,
                ...e.variables
            })
        });
    }
    function Ni(t) {
        return t.catch(()=>{}), t;
    }
    function Mo(t, e) {
        Se(e);
        const n = Ti(""), i = Ti(""), r = (m)=>{
            for(let v = 0, k; v < m.length && (k = m[v]); ++v)if (!j(k)) {
                if (k.kind === C.OPERATION_DEFINITION) return n(k.name && k.name.value);
                if (k.kind === C.FRAGMENT_DEFINITION) return i(k.name.value);
            }
            return F.error(14), null;
        };
        let s = 0;
        for(let m = e.definitions.length - 1; m >= 0; --m)e.definitions[m].kind === C.OPERATION_DEFINITION && ++s;
        const a = Vo(t), o = (m)=>Wn(m) && m.map(a).some((v)=>v && v.remove), c = new Map;
        let l = !1;
        const u = {
            enter (m) {
                if (o(m.directives)) return l = !0, null;
            }
        }, d = ce(e, {
            Field: u,
            InlineFragment: u,
            VariableDefinition: {
                enter () {
                    return !1;
                }
            },
            Variable: {
                enter (m, v, k, b, S) {
                    const w = r(S);
                    w && w.variables.add(m.name.value);
                }
            },
            FragmentSpread: {
                enter (m, v, k, b, S) {
                    if (o(m.directives)) return l = !0, null;
                    const w = r(S);
                    w && w.fragmentSpreads.add(m.name.value);
                }
            },
            FragmentDefinition: {
                enter (m, v, k, b) {
                    c.set(JSON.stringify(b), m);
                },
                leave (m, v, k, b) {
                    const S = c.get(JSON.stringify(b));
                    if (m === S) return m;
                    if (s > 0 && m.selectionSet.selections.every((w)=>w.kind === C.FIELD && w.name.value === "__typename")) return i(m.name.value).removed = !0, l = !0, null;
                }
            },
            Directive: {
                leave (m) {
                    if (a(m)) return l = !0, null;
                }
            }
        });
        if (!l) return e;
        const f = (m)=>(m.transitiveVars || (m.transitiveVars = new Set(m.variables), m.removed || m.fragmentSpreads.forEach((v)=>{
                f(i(v)).transitiveVars.forEach((k)=>{
                    m.transitiveVars.add(k);
                });
            })), m), h = new Set;
        d.definitions.forEach((m)=>{
            m.kind === C.OPERATION_DEFINITION ? f(n(m.name && m.name.value)).fragmentSpreads.forEach((v)=>{
                h.add(v);
            }) : m.kind === C.FRAGMENT_DEFINITION && s === 0 && !i(m.name.value).removed && h.add(m.name.value);
        }), h.forEach((m)=>{
            f(i(m)).fragmentSpreads.forEach((v)=>{
                h.add(v);
            });
        });
        const p = (m)=>!!(!h.has(m) || i(m).removed), y = {
            enter (m) {
                if (p(m.name.value)) return null;
            }
        };
        return qo(ce(d, {
            FragmentSpread: y,
            FragmentDefinition: y,
            OperationDefinition: {
                leave (m) {
                    if (m.variableDefinitions) {
                        const v = f(n(m.name && m.name.value)).transitiveVars;
                        if (v.size < m.variableDefinitions.length) return {
                            ...m,
                            variableDefinitions: m.variableDefinitions.filter((k)=>v.has(k.variable.name.value))
                        };
                    }
                }
            }
        }));
    }
    function Ti(t) {
        const e = new Map;
        return function(i = t) {
            let r = e.get(i);
            return r || e.set(i, r = {
                variables: new Set,
                fragmentSpreads: new Set
            }), r;
        };
    }
    function Vo(t) {
        const e = new Map, n = new Map;
        return t.forEach((i)=>{
            i && (i.name ? e.set(i.name, i) : i.test && n.set(i.test, i));
        }), (i)=>{
            let r = e.get(i.name.value);
            return !r && n.size && n.forEach((s, a)=>{
                a(i) && (r = s);
            }), r;
        };
    }
    function Gr(t, e) {
        return !t || t.selectionSet.selections.every((n)=>n.kind === C.FRAGMENT_SPREAD && Gr(e[n.name.value], e));
    }
    function qo(t) {
        return Gr(ve(t) || Co(t), yt(vt(t))) ? null : t;
    }
    function jo(t) {
        return ce(t, {
            FragmentSpread (e) {
                if (!e.directives?.some(({ name: n })=>n.value === "unmask")) return null;
            }
        });
    }
    function Ke(t) {
        return t.alias ? t.alias.value : t.name.value;
    }
    function Lt({ directives: t }, e) {
        return !t || !t.length ? !0 : Lo(t).every(({ directive: n, ifArgument: i })=>{
            let r = !1;
            return i.value.kind === "Variable" ? (r = e && e[i.value.name.value], F(r !== void 0, 15, n.name.value)) : r = i.value.value, n.name.value === "skip" ? !r : r;
        });
    }
    function Bo({ name: { value: t } }) {
        return t === "skip" || t === "include";
    }
    function Lo(t) {
        const e = [];
        return t && t.length && t.forEach((n)=>{
            if (!Bo(n)) return;
            const i = n.arguments, r = n.name.value;
            F(i && i.length === 1, 16, r);
            const s = i[0];
            F(s.name && s.name.value === "if", 17, r);
            const a = s.value;
            F(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 18, r), e.push({
                directive: n,
                ifArgument: s
            });
        }), e;
    }
    function Uo(t, e) {
        let n = null;
        t.directives && (n = {}, t.directives.forEach((r)=>{
            n[r.name.value] = {}, r.arguments && r.arguments.forEach(({ name: s, value: a })=>We(n[r.name.value], s, a, e));
        }));
        let i = null;
        return t.arguments && t.arguments.length && (i = {}, t.arguments.forEach(({ name: r, value: s })=>We(i, r, s, e))), Yr(t.name.value, i, n);
    }
    function st(t) {
        const e = {
            data: t.data
        };
        return t.error && (e.error = t.error), e;
    }
    function Nn(t, e = ()=>{}) {
        return (n)=>new A((i)=>{
                let r = e();
                return n.subscribe({
                    next (s) {
                        let a;
                        try {
                            a = t(s, r);
                        } catch (o) {
                            i.error(o);
                        }
                        a !== void 0 && i.next(a);
                    },
                    error (s) {
                        i.error(s);
                    },
                    complete () {
                        i.complete();
                    }
                });
            });
    }
    const { toString: Fi, hasOwnProperty: Qo } = Object.prototype, Oi = Function.prototype.toString, Tn = new Map;
    function P(t, e) {
        try {
            return Fn(t, e);
        } finally{
            Tn.clear();
        }
    }
    function Fn(t, e) {
        if (t === e) return !0;
        const n = Fi.call(t), i = Fi.call(e);
        if (n !== i) return !1;
        switch(n){
            case "[object Array]":
                if (t.length !== e.length) return !1;
            case "[object Object]":
                {
                    if (Di(t, e)) return !0;
                    const r = Ci(t), s = Ci(e), a = r.length;
                    if (a !== s.length) return !1;
                    for(let o = 0; o < a; ++o)if (!Qo.call(e, r[o])) return !1;
                    for(let o = 0; o < a; ++o){
                        const c = r[o];
                        if (!Fn(t[c], e[c])) return !1;
                    }
                    return !0;
                }
            case "[object Error]":
                return t.name === e.name && t.message === e.message;
            case "[object Number]":
                if (t !== t) return e !== e;
            case "[object Boolean]":
            case "[object Date]":
                return +t == +e;
            case "[object RegExp]":
            case "[object String]":
                return t == `${e}`;
            case "[object Map]":
            case "[object Set]":
                {
                    if (t.size !== e.size) return !1;
                    if (Di(t, e)) return !0;
                    const r = t.entries(), s = n === "[object Map]";
                    for(;;){
                        const a = r.next();
                        if (a.done) break;
                        const [o, c] = a.value;
                        if (!e.has(o) || s && !Fn(c, e.get(o))) return !1;
                    }
                    return !0;
                }
            case "[object Uint16Array]":
            case "[object Uint8Array]":
            case "[object Uint32Array]":
            case "[object Int32Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object ArrayBuffer]":
                t = new Uint8Array(t), e = new Uint8Array(e);
            case "[object DataView]":
                {
                    let r = t.byteLength;
                    if (r === e.byteLength) for(; r-- && t[r] === e[r];);
                    return r === -1;
                }
            case "[object AsyncFunction]":
            case "[object GeneratorFunction]":
            case "[object AsyncGeneratorFunction]":
            case "[object Function]":
                {
                    const r = Oi.call(t);
                    return r !== Oi.call(e) ? !1 : !Wo(r, zo);
                }
        }
        return !1;
    }
    function Ci(t) {
        return Object.keys(t).filter($o, t);
    }
    function $o(t) {
        return this[t] !== void 0;
    }
    const zo = "{ [native code] }";
    function Wo(t, e) {
        const n = t.length - e.length;
        return n >= 0 && t.indexOf(e, n) === n;
    }
    function Di(t, e) {
        let n = Tn.get(t);
        if (n) {
            if (n.has(e)) return !0;
        } else Tn.set(t, n = new Set);
        return n.add(e), !1;
    }
    function Jr(t, { data: e, ...n }, { data: i, ...r }, s) {
        return P(n, r) && _t(zn(t).selectionSet, e, i, {
            fragmentMap: yt(vt(t)),
            variables: s
        });
    }
    function _t(t, e, n, i) {
        if (e === n) return !0;
        const r = new Set;
        return t.selections.every((s)=>{
            if (r.has(s) || (r.add(s), !Lt(s, i.variables)) || _i(s)) return !0;
            if (kt(s)) {
                const a = Ke(s), o = e && e[a], c = n && n[a], l = s.selectionSet;
                if (!l) return P(o, c);
                const u = Array.isArray(o), d = Array.isArray(c);
                if (u !== d) return !1;
                if (u && d) {
                    const f = o.length;
                    if (c.length !== f) return !1;
                    for(let h = 0; h < f; ++h)if (!_t(l, o[h], c[h], i)) return !1;
                    return !0;
                }
                return _t(l, o, c, i);
            } else {
                const a = Bt(s, i.fragmentMap);
                if (a) return _i(a) ? !0 : _t(a.selectionSet, e, n, i);
            }
        });
    }
    function _i(t) {
        return !!t.directives && t.directives.some(Ho);
    }
    function Ho(t) {
        return t.name.value === "nonreactive";
    }
    function Yo(t, e) {
        let n, i;
        function r(s) {
            return s !== n && (n = s, i = e(n)), i;
        }
        return Object.assign(t.pipe(I(r), jn({
            bufferSize: 1,
            refCount: !0
        })), {
            getCurrentResult: ()=>r(t.getCurrentResult())
        });
    }
    const Go = Hr(function(e, n, i) {
        return Yo(e, i);
    }, {
        max: 1,
        makeCacheKey: (t)=>t.slice(0, 2)
    }), Xr = Symbol.for("apollo.result.extensions"), we = Symbol.for("apollo.result.streamInfo"), Jo = Symbol.for("apollo.observableQuery.variablesUnknown");
    let Q = null;
    const Ii = {};
    let Xo = 1;
    const Ko = ()=>class {
            constructor(){
                this.id = [
                    "slot",
                    Xo++,
                    Date.now(),
                    Math.random().toString(36).slice(2)
                ].join(":");
            }
            hasValue() {
                for(let e = Q; e; e = e.parent)if (this.id in e.slots) {
                    const n = e.slots[this.id];
                    if (n === Ii) break;
                    return e !== Q && (Q.slots[this.id] = n), !0;
                }
                return Q && (Q.slots[this.id] = Ii), !1;
            }
            getValue() {
                if (this.hasValue()) return Q.slots[this.id];
            }
            withValue(e, n, i, r) {
                const s = {
                    __proto__: null,
                    [this.id]: e
                }, a = Q;
                Q = {
                    parent: a,
                    slots: s
                };
                try {
                    return n.apply(r, i);
                } finally{
                    Q = a;
                }
            }
            static bind(e) {
                const n = Q;
                return function() {
                    const i = Q;
                    try {
                        return Q = n, e.apply(this, arguments);
                    } finally{
                        Q = i;
                    }
                };
            }
            static noContext(e, n, i) {
                if (Q) {
                    const r = Q;
                    try {
                        return Q = null, e.apply(i, n);
                    } finally{
                        Q = r;
                    }
                } else return e.apply(i, n);
            }
        };
    function Ai(t) {
        try {
            return t();
        } catch  {}
    }
    const nn = "@wry/context:Slot", Zo = Ai(()=>globalThis) || Ai(()=>global) || Object.create(null), xi = Zo, Ut = xi[nn] || Array[nn] || (function(t) {
        try {
            Object.defineProperty(xi, nn, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            });
        } finally{
            return t;
        }
    })(Ko()), { bind: ku, noContext: bu } = Ut, Qt = new Ut, { hasOwnProperty: ec } = Object.prototype, Hn = Array.from || function(t) {
        const e = [];
        return t.forEach((n)=>e.push(n)), e;
    };
    function Yn(t) {
        const { unsubscribe: e } = t;
        typeof e == "function" && (t.unsubscribe = void 0, e());
    }
    const dt = [], tc = 100;
    function Ge(t, e) {
        if (!t) throw new Error(e || "assertion failure");
    }
    function Kr(t, e) {
        const n = t.length;
        return n > 0 && n === e.length && t[n - 1] === e[n - 1];
    }
    function Zr(t) {
        switch(t.length){
            case 0:
                throw new Error("unknown value");
            case 1:
                return t[0];
            case 2:
                throw t[1];
        }
    }
    function es(t) {
        return t.slice(0);
    }
    class $t {
        constructor(e){
            this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++$t.count;
        }
        peek() {
            if (this.value.length === 1 && !Ee(this)) return Ri(this), this.value[0];
        }
        recompute(e) {
            return Ge(!this.recomputing, "already recomputing"), Ri(this), Ee(this) ? nc(this, e) : Zr(this.value);
        }
        setDirty() {
            this.dirty || (this.dirty = !0, ts(this), Yn(this));
        }
        dispose() {
            this.setDirty(), as(this), Gn(this, (e, n)=>{
                e.setDirty(), os(e, this);
            });
        }
        forget() {
            this.dispose();
        }
        dependOn(e) {
            e.add(this), this.deps || (this.deps = dt.pop() || new Set), this.deps.add(e);
        }
        forgetDeps() {
            this.deps && (Hn(this.deps).forEach((e)=>e.delete(this)), this.deps.clear(), dt.push(this.deps), this.deps = null);
        }
    }
    $t.count = 0;
    function Ri(t) {
        const e = Qt.getValue();
        if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), Ee(t) ? is(e, t) : rs(e, t), e;
    }
    function nc(t, e) {
        return as(t), Qt.withValue(t, ic, [
            t,
            e
        ]), sc(t, e) && rc(t), Zr(t.value);
    }
    function ic(t, e) {
        t.recomputing = !0;
        const { normalizeResult: n } = t;
        let i;
        n && t.value.length === 1 && (i = es(t.value)), t.value.length = 0;
        try {
            if (t.value[0] = t.fn.apply(null, e), n && i && !Kr(i, t.value)) try {
                t.value[0] = n(t.value[0], i[0]);
            } catch  {}
        } catch (r) {
            t.value[1] = r;
        }
        t.recomputing = !1;
    }
    function Ee(t) {
        return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
    }
    function rc(t) {
        t.dirty = !1, !Ee(t) && ns(t);
    }
    function ts(t) {
        Gn(t, is);
    }
    function ns(t) {
        Gn(t, rs);
    }
    function Gn(t, e) {
        const n = t.parents.size;
        if (n) {
            const i = Hn(t.parents);
            for(let r = 0; r < n; ++r)e(i[r], t);
        }
    }
    function is(t, e) {
        Ge(t.childValues.has(e)), Ge(Ee(e));
        const n = !Ee(t);
        if (!t.dirtyChildren) t.dirtyChildren = dt.pop() || new Set;
        else if (t.dirtyChildren.has(e)) return;
        t.dirtyChildren.add(e), n && ts(t);
    }
    function rs(t, e) {
        Ge(t.childValues.has(e)), Ge(!Ee(e));
        const n = t.childValues.get(e);
        n.length === 0 ? t.childValues.set(e, es(e.value)) : Kr(n, e.value) || t.setDirty(), ss(t, e), !Ee(t) && ns(t);
    }
    function ss(t, e) {
        const n = t.dirtyChildren;
        n && (n.delete(e), n.size === 0 && (dt.length < tc && dt.push(n), t.dirtyChildren = null));
    }
    function as(t) {
        t.childValues.size > 0 && t.childValues.forEach((e, n)=>{
            os(t, n);
        }), t.forgetDeps(), Ge(t.dirtyChildren === null);
    }
    function os(t, e) {
        e.parents.delete(t), t.childValues.delete(e), ss(t, e);
    }
    function sc(t, e) {
        if (typeof t.subscribe == "function") try {
            Yn(t), t.unsubscribe = t.subscribe.apply(null, e);
        } catch  {
            return t.setDirty(), !1;
        }
        return !0;
    }
    const ac = {
        setDirty: !0,
        dispose: !0,
        forget: !0
    };
    function cs(t) {
        const e = new Map;
        function n(i) {
            const r = Qt.getValue();
            if (r) {
                let s = e.get(i);
                s || e.set(i, s = new Set), r.dependOn(s);
            }
        }
        return n.dirty = function(r, s) {
            const a = e.get(r);
            if (a) {
                const o = s && ec.call(ac, s) ? s : "setDirty";
                Hn(a).forEach((c)=>c[o]()), e.delete(r), Yn(a);
            }
        }, n;
    }
    let Pi;
    function ls(...t) {
        return (Pi || (Pi = new de(typeof WeakMap == "function"))).lookupArray(t);
    }
    const rn = new Set;
    function ft(t, { max: e = Math.pow(2, 16), keyArgs: n, makeCacheKey: i = ls, normalizeResult: r, subscribe: s, cache: a = wn } = Object.create(null)) {
        const o = typeof a == "function" ? new a(e, (f)=>f.dispose()) : a, c = function() {
            const f = i.apply(null, n ? n.apply(null, arguments) : arguments);
            if (f === void 0) return t.apply(null, arguments);
            let h = o.get(f);
            h || (o.set(f, h = new $t(t)), h.normalizeResult = r, h.subscribe = s, h.forget = ()=>o.delete(f));
            const p = h.recompute(Array.prototype.slice.call(arguments));
            return o.set(f, h), rn.add(o), Qt.hasValue() || (rn.forEach((y)=>y.clean()), rn.clear()), p;
        };
        Object.defineProperty(c, "size", {
            get: ()=>o.size,
            configurable: !1,
            enumerable: !1
        }), Object.freeze(c.options = {
            max: e,
            keyArgs: n,
            makeCacheKey: i,
            normalizeResult: r,
            subscribe: s,
            cache: o
        });
        function l(f) {
            const h = f && o.get(f);
            h && h.setDirty();
        }
        c.dirtyKey = l, c.dirty = function() {
            l(i.apply(null, arguments));
        };
        function u(f) {
            const h = f && o.get(f);
            if (h) return h.peek();
        }
        c.peekKey = u, c.peek = function() {
            return u(i.apply(null, arguments));
        };
        function d(f) {
            return f ? o.delete(f) : !1;
        }
        return c.forgetKey = d, c.forget = function() {
            return d(i.apply(null, arguments));
        }, c.makeCacheKey = i, c.getKey = n ? function() {
            return i.apply(null, n.apply(null, arguments));
        } : i, Object.freeze(c);
    }
    function oc(...t) {
        return ls.bind(null, ...t);
    }
    class cc {
        isIncrementalResult(e) {
            return !1;
        }
        prepareRequest(e) {
            return F(!rt([
                "defer",
                "stream"
            ], e.query), 67), e;
        }
        extractErrors() {}
        startRequest = void 0;
    }
    function lc(t, { client: e }) {
        const n = {
            query: t.query,
            variables: t.variables || {},
            extensions: t.extensions || {},
            operationName: He(t.query),
            operationType: ve(t.query).operation
        };
        let i = {
            ...t.context
        };
        const r = (a)=>{
            typeof a == "function" ? i = {
                ...i,
                ...a(s())
            } : i = {
                ...i,
                ...a
            };
        }, s = ()=>Object.freeze({
                ...i
            });
        return Object.defineProperty(n, "setContext", {
            enumerable: !1,
            value: r
        }), Object.defineProperty(n, "getContext", {
            enumerable: !1,
            value: s
        }), Object.defineProperty(n, "client", {
            enumerable: !1,
            value: e
        }), n;
    }
    function uc(t, e) {
        const n = {
            ...t
        }, i = new Set(Object.keys(t));
        return ce(e, {
            Variable (r, s, a) {
                a && a.kind !== "VariableDefinition" && i.delete(r.name.value);
            }
        }), i.forEach((r)=>{
            delete n[r];
        }), n;
    }
    class $ {
        static empty() {
            return new $(()=>_e);
        }
        static from(e) {
            if (e.length === 0) return $.empty();
            const [n, ...i] = e;
            return n.concat(...i);
        }
        static split(e, n, i = new $((r, s)=>s(r))) {
            const r = new $((s, a)=>e(s) ? n.request(s, a) : i.request(s, a));
            return Object.assign(r, {
                left: n,
                right: i
            });
        }
        static execute(e, n, i) {
            return e.request(lc(n, i), ()=>_e);
        }
        static concat(...e) {
            return $.from(e);
        }
        constructor(e){
            e && (this.request = e);
        }
        split(e, n, i) {
            return this.concat($.split(e, n, i));
        }
        concat(...e) {
            return e.length === 0 ? this : e.reduce(this.combine.bind(this), this);
        }
        combine(e, n) {
            const i = new $((r, s)=>e.request(r, (a)=>n.request(a, s)));
            return Object.assign(i, {
                left: e,
                right: n
            });
        }
        request(e, n) {
            throw ne(65);
        }
        left;
        right;
    }
    const dc = $.from, fc = $.split, On = $.execute;
    function hc(t) {
        return t;
    }
    class he {
        transform;
        cached;
        resultCache = new WeakSet;
        getCacheKey(e) {
            return [
                e
            ];
        }
        static identity() {
            return new he(hc, {
                cache: !1
            });
        }
        static split(e, n, i = he.identity()) {
            return Object.assign(new he((r)=>(e(r) ? n : i).transformDocument(r), {
                cache: !1
            }), {
                left: n,
                right: i
            });
        }
        constructor(e, n = {}){
            this.transform = e, n.getCacheKey && (this.getCacheKey = n.getCacheKey), this.cached = n.cache !== !1, this.resetCache();
        }
        resetCache() {
            if (this.cached) {
                const e = new de;
                this.performWork = ft(he.prototype.performWork.bind(this), {
                    makeCacheKey: (n)=>{
                        const i = this.getCacheKey(n);
                        if (i) return F(Array.isArray(i), 20), e.lookupArray(i);
                    },
                    max: ye["documentTransform.cache"],
                    cache: Rt
                });
            }
        }
        performWork(e) {
            return Se(e), this.transform(e);
        }
        transformDocument(e) {
            if (this.resultCache.has(e)) return e;
            const n = this.performWork(e);
            return this.resultCache.add(n), n;
        }
        concat(e) {
            return Object.assign(new he((n)=>e.transformDocument(this.transformDocument(n)), {
                cache: !1
            }), {
                left: this,
                right: e
            });
        }
        left;
        right;
    }
    let sn;
    const De = Object.assign((t)=>{
        let e = sn.get(t);
        return e || (e = ua(t), sn.set(t, e)), e;
    }, {
        reset () {
            sn = new Qn(ye.print || 2e3);
        }
    });
    De.reset();
    function x(t) {
        return !!(t && typeof t == "object" && typeof t.__ref == "string");
    }
    const Mi = {
        kind: C.FIELD,
        name: {
            kind: C.NAME,
            value: "__typename"
        }
    }, us = Object.assign(function(t) {
        return ce(t, {
            SelectionSet: {
                enter (e, n, i) {
                    if (i && i.kind === C.OPERATION_DEFINITION) return;
                    const { selections: r } = e;
                    if (!r || r.some((o)=>o.kind === C.FIELD && (o.name.value === "__typename" || o.name.value.lastIndexOf("__", 0) === 0))) return;
                    const a = i;
                    if (!(a.kind === C.FIELD && a.directives && a.directives.some((o)=>o.name.value === "export"))) return {
                        ...e,
                        selections: [
                            ...r,
                            Mi
                        ]
                    };
                }
            }
        });
    }, {
        added (t) {
            return t === Mi;
        }
    });
    function ds(t, e) {
        return ve(t)?.operation === e;
    }
    function pc(t) {
        return ds(t, "mutation");
    }
    function mc(t) {
        return ds(t, "subscription");
    }
    function fs(t) {
        return t === 7 || t === 8;
    }
    function It(t) {
        return !fs(t);
    }
    class yc {
        assumeImmutableResults = !1;
        lookupFragment(e) {
            return null;
        }
        batch(e) {
            const n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0;
            let i;
            return this.performTransaction(()=>i = e.update(this), n), i;
        }
        recordOptimisticTransaction(e, n) {
            this.performTransaction(e, n);
        }
        transformDocument(e) {
            return e;
        }
        transformForLink(e) {
            return e;
        }
        identify(e) {}
        gc() {
            return [];
        }
        modify(e) {
            return !1;
        }
        readQuery(e, n = !!e.optimistic) {
            return this.read({
                ...e,
                rootId: e.id || "ROOT_QUERY",
                optimistic: n
            });
        }
        fragmentWatches = new de(!0);
        watchFragment(e) {
            const { fragment: n, fragmentName: i, from: r } = e, s = this.getFragmentDoc(n, i), o = (Array.isArray(r) ? r : [
                r
            ]).map((h)=>h == null ? h : this.toCacheId(h));
            if (!Array.isArray(r)) {
                const h = this.watchSingleFragment(o[0], s, e);
                return r === null ? h : Go(h, Symbol.for("apollo.transform.individualResult"), (p)=>({
                        ...p,
                        data: p.data ?? {}
                    }));
            }
            let c;
            function l(h) {
                const p = h.reduce((y, m, v)=>(y.data.push(m.data), y.complete &&= m.complete, y.dataState = y.complete ? "complete" : "partial", m.missing && (y.missing ||= {}, y.missing[v] = m.missing), y), {
                    data: [],
                    dataState: "complete",
                    complete: !0
                });
                return P(c, p) || (c = p), c;
            }
            if (o.length === 0) return kc;
            let u = !1;
            const d = o.map((h)=>this.watchSingleFragment(h, s, e)), f = No(d).pipe(I(l), ut({
                subscribe: ()=>u = !0,
                unsubscribe: ()=>u = !1
            }), jn({
                bufferSize: 1,
                refCount: !0
            }));
            return Object.assign(f, {
                getCurrentResult: ()=>{
                    if (u && c) return c;
                    const h = d.map((p)=>p.getCurrentResult());
                    return l(h);
                }
            });
        }
        onAfterBroadcast = (e)=>e();
        watchSingleFragment(e, n, i) {
            if (e === null) return vc;
            const { optimistic: r = !0, variables: s } = i, a = [
                n,
                me({
                    id: e,
                    optimistic: r,
                    variables: s
                })
            ], o = this.fragmentWatches.lookupArray(a);
            if (!o.observable) {
                let u = function(f) {
                    const h = f.result;
                    return (!l || !Jr(n, {
                        data: l.data
                    }, {
                        data: h
                    }, i.variables)) && (l = {
                        data: h,
                        dataState: f.complete ? "complete" : "partial",
                        complete: f.complete
                    }, f.missing && (l.missing = f.missing.missing)), l;
                }, c = !1, l;
                const d = new A((f)=>{
                    c = !0;
                    const h = this.watch({
                        variables: s,
                        returnPartialData: !0,
                        id: e,
                        query: n,
                        optimistic: r,
                        immediate: !0,
                        callback: (p)=>{
                            d.dirty = !0, this.onAfterBroadcast(()=>{
                                f.next(u(p)), d.dirty = !1;
                            });
                        }
                    });
                    return ()=>{
                        c = !1, h(), this.fragmentWatches.removeArray(a);
                    };
                }).pipe(ro(), lt({
                    connector: ()=>new Er(1),
                    resetOnRefCountZero: ()=>eo(0)
                }));
                o.observable = Object.assign(d, {
                    dirty: !1,
                    getCurrentResult: ()=>c && l ? l : u(this.diff({
                            id: e,
                            query: n,
                            returnPartialData: !0,
                            optimistic: r,
                            variables: s
                        }))
                });
            }
            return o.observable;
        }
        getFragmentDoc = ft(Oo, {
            max: ye["cache.fragmentQueryDocuments"] || 1e3,
            cache: Rt,
            makeCacheKey: oc(this)
        });
        readFragment(e, n = !!e.optimistic) {
            const i = e.from !== void 0 ? this.toCacheId(e.from) : e.id;
            return this.read({
                ...e,
                query: this.getFragmentDoc(e.fragment, e.fragmentName),
                rootId: i,
                optimistic: n
            });
        }
        writeQuery({ id: e, data: n, ...i }) {
            return this.write(Object.assign(i, {
                dataId: e || "ROOT_QUERY",
                result: n
            }));
        }
        writeFragment({ data: e, fragment: n, fragmentName: i, ...r }) {
            const s = r.from !== void 0 ? this.toCacheId(r.from) : r.id;
            return this.write(Object.assign(r, {
                query: this.getFragmentDoc(n, i),
                dataId: s,
                result: e
            }));
        }
        updateQuery(e, n) {
            return this.batch({
                update (i) {
                    const r = i.readQuery(e), s = n(r);
                    return s == null ? r : (i.writeQuery({
                        ...e,
                        data: s
                    }), s);
                }
            });
        }
        updateFragment(e, n) {
            return this.batch({
                update (i) {
                    const r = i.readFragment(e), s = n(r);
                    return s == null ? r : (i.writeFragment({
                        ...e,
                        data: s
                    }), s);
                }
            });
        }
        toCacheId(e) {
            return typeof e == "string" ? e : this.identify(e);
        }
    }
    const Vi = Object.freeze({
        data: null,
        dataState: "complete",
        complete: !0
    }), vc = Object.assign(new A((t)=>{
        t.next(Vi);
    }), {
        dirty: !1,
        getCurrentResult: ()=>Vi
    }), qi = Object.freeze({
        data: [],
        dataState: "complete",
        complete: !0
    }), kc = Object.assign(new A((t)=>{
        t.next(qi);
    }), {
        getCurrentResult: ()=>qi
    });
    class Jn extends Error {
        message;
        path;
        query;
        variables;
        constructor(e, n, i, r){
            if (super(e), this.message = e, this.path = n, this.query = i, this.variables = r, this.name = "MissingFieldError", Array.isArray(this.path)) {
                this.missing = this.message;
                for(let s = this.path.length - 1; s >= 0; --s)this.missing = {
                    [this.path[s]]: this.missing
                };
            } else this.missing = this.path;
            this.__proto__ = Jn.prototype;
        }
        missing;
    }
    const { hasOwnProperty: L } = Object.prototype;
    function hs({ __typename: t, id: e, _id: n }, i) {
        if (typeof t == "string" && (i && (i.keyObject = e != null ? {
            id: e
        } : n != null ? {
            _id: n
        } : void 0), e == null && n != null && (e = n), e != null)) return `${t}:${typeof e == "number" || typeof e == "string" ? e : JSON.stringify(e)}`;
    }
    const bc = {
        dataIdFromObject: hs,
        resultCaching: !0
    };
    function gc(t) {
        return J(bc, t);
    }
    const ps = /^[_a-z][_0-9a-z]*/i;
    function Je(t) {
        const e = t.match(ps);
        return e ? e[0] : t;
    }
    function Cn(t, e, n) {
        return H(e) ? j(e) ? e.every((i)=>Cn(t, i, n)) : t.selections.every((i)=>{
            if (kt(i) && Lt(i, n)) {
                const r = Ke(i);
                return L.call(e, r) && (!i.selectionSet || Cn(i.selectionSet, e[r], n));
            }
            return !0;
        }) : !1;
    }
    function Ve(t) {
        return H(t) && !x(t) && !j(t);
    }
    function Sc() {
        return new Ye;
    }
    function ms(t, e) {
        const n = yt(vt(t));
        return {
            fragmentMap: n,
            lookupFragment (i) {
                let r = n[i];
                return !r && e && (r = e.lookup(i)), r || null;
            }
        };
    }
    const At = {}, an = ()=>At, ji = {};
    class zt {
        policies;
        group;
        data = {};
        constructor(e, n){
            this.policies = e, this.group = n;
        }
        toObject() {
            return {
                ...this.data
            };
        }
        has(e) {
            return this.lookup(e, !0) !== void 0;
        }
        get(e, n) {
            if (this.group.depend(e, n), L.call(this.data, e)) {
                const i = this.data[e];
                if (i && L.call(i, n)) return i[n];
            }
            if (n === "__typename" && L.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
            if (this instanceof ae) return this.parent.get(e, n);
        }
        lookup(e, n) {
            if (n && this.group.depend(e, "__exists"), L.call(this.data, e)) return this.data[e];
            if (this instanceof ae) return this.parent.lookup(e, n);
            if (this.policies.rootTypenamesById[e]) return {};
        }
        merge(e, n) {
            let i;
            x(e) && (e = e.__ref), x(n) && (n = n.__ref);
            const r = typeof e == "string" ? this.lookup(i = e) : e, s = typeof n == "string" ? this.lookup(i = n) : n;
            if (!s) return;
            F(typeof i == "string", 104);
            const a = new Ye({
                reconciler: Nc
            }).merge(r, s);
            if (this.data[i] = a, a !== r && (delete this.refs[i], this.group.caching)) {
                const o = {};
                r || (o.__exists = 1), Object.keys(s).forEach((c)=>{
                    if (!r || r[c] !== a[c]) {
                        o[c] = 1;
                        const l = Je(c);
                        l !== c && !this.policies.hasKeyArgs(a.__typename, l) && (o[l] = 1), a[c] === void 0 && !(this instanceof ae) && delete a[c];
                    }
                }), o.__typename && !(r && r.__typename) && this.policies.rootTypenamesById[i] === a.__typename && delete o.__typename, Object.keys(o).forEach((c)=>this.group.dirty(i, c));
            }
        }
        modify(e, n, i) {
            const r = this.lookup(e);
            if (r) {
                const s = {};
                let a = !1, o = !0;
                const c = {
                    DELETE: At,
                    INVALIDATE: ji,
                    isReference: x,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: (l, u)=>this.policies.readField(typeof l == "string" ? {
                            fieldName: l,
                            from: u || Be(e)
                        } : l, {
                            store: this
                        })
                };
                if (Object.keys(r).forEach((l)=>{
                    const u = Je(l);
                    let d = r[l];
                    if (d === void 0) return;
                    const f = typeof n == "function" ? n : n[l] || (i ? void 0 : n[u]);
                    if (f) {
                        let h = f === an ? At : f(d, {
                            ...c,
                            fieldName: u,
                            storeFieldName: l,
                            storage: this.getStorage(e, l)
                        });
                        h === ji ? this.group.dirty(e, l) : (h === At && (h = void 0), h !== d && (s[l] = h, a = !0, d = h));
                    }
                    d !== void 0 && (o = !1);
                }), a) return this.merge(e, s), o && (this instanceof ae ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
            }
            return !1;
        }
        delete(e, n, i) {
            const r = this.lookup(e);
            if (r) {
                const s = this.getFieldValue(r, "__typename"), a = n && i ? this.policies.getStoreFieldName({
                    typename: s,
                    fieldName: n,
                    args: i
                }) : n;
                return this.modify(e, a ? {
                    [a]: an
                } : an, !!i);
            }
            return !1;
        }
        evict(e, n) {
            let i = !1;
            return e.id && (L.call(this.data, e.id) && (i = this.delete(e.id, e.fieldName, e.args)), this instanceof ae && this !== n && (i = this.parent.evict(e, n) || i), (e.fieldName || i) && this.group.dirty(e.id, e.fieldName || "__exists")), i;
        }
        clear() {
            this.replace(null);
        }
        extract() {
            const e = this.toObject(), n = [];
            return this.getRootIdSet().forEach((i)=>{
                L.call(this.policies.rootTypenamesById, i) || n.push(i);
            }), n.length && (e.__META = {
                extraRootIds: n.sort()
            }), e;
        }
        replace(e) {
            if (Object.keys(this.data).forEach((n)=>{
                e && L.call(e, n) || this.delete(n);
            }), e) {
                const { __META: n, ...i } = e;
                Object.keys(i).forEach((r)=>{
                    this.merge(r, i[r]);
                }), n && n.extraRootIds.forEach(this.retain, this);
            }
        }
        rootIds = {};
        retain(e) {
            return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
        }
        release(e) {
            if (this.rootIds[e] > 0) {
                const n = --this.rootIds[e];
                return n || delete this.rootIds[e], n;
            }
            return 0;
        }
        getRootIdSet(e = new Set) {
            return Object.keys(this.rootIds).forEach(e.add, e), this instanceof ae ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
        }
        gc() {
            const e = this.getRootIdSet(), n = this.toObject();
            e.forEach((r)=>{
                L.call(n, r) && (Object.keys(this.findChildRefIds(r)).forEach(e.add, e), delete n[r]);
            });
            const i = Object.keys(n);
            if (i.length) {
                let r = this;
                for(; r instanceof ae;)r = r.parent;
                i.forEach((s)=>r.delete(s));
            }
            return i;
        }
        refs = {};
        findChildRefIds(e) {
            if (!L.call(this.refs, e)) {
                const n = this.refs[e] = {}, i = this.data[e];
                if (!i) return n;
                const r = new Set([
                    i
                ]);
                r.forEach((s)=>{
                    x(s) && (n[s.__ref] = !0), H(s) && Object.keys(s).forEach((a)=>{
                        const o = s[a];
                        H(o) && r.add(o);
                    });
                });
            }
            return this.refs[e];
        }
        makeCacheKey() {
            return this.group.keyMaker.lookupArray(arguments);
        }
        getFieldValue = (e, n)=>x(e) ? this.get(e.__ref, n) : e && e[n];
        canRead = (e)=>x(e) ? this.has(e.__ref) : typeof e == "object";
        toReference = (e, n)=>{
            if (typeof e == "string") return Be(e);
            if (x(e)) return e;
            const [i] = this.policies.identify(e);
            if (i) {
                const r = Be(i);
                return n && this.merge(i, e), r;
            }
        };
        get supportsResultCaching() {
            return this.group.caching;
        }
    }
    class ys {
        caching;
        parent;
        d = null;
        keyMaker;
        constructor(e, n = null){
            this.caching = e, this.parent = n, this.resetCaching();
        }
        resetCaching() {
            this.d = this.caching ? cs() : null, this.keyMaker = new de;
        }
        depend(e, n) {
            if (this.d) {
                this.d(on(e, n));
                const i = Je(n);
                i !== n && this.d(on(e, i)), this.parent && this.parent.depend(e, n);
            }
        }
        dirty(e, n) {
            this.d && this.d.dirty(on(e, n), n === "__exists" ? "forget" : "setDirty");
        }
    }
    function on(t, e) {
        return e + "#" + t;
    }
    function Bi(t, e) {
        ot(t) && t.group.depend(e, "__exists");
    }
    class wc extends zt {
        constructor({ policies: e, resultCaching: n = !0, seed: i }){
            super(e, new ys(n)), i && this.replace(i);
        }
        stump = new Ec(this);
        addLayer(e, n) {
            return this.stump.addLayer(e, n);
        }
        removeLayer() {
            return this;
        }
        storageTrie = new de;
        getStorage() {
            return this.storageTrie.lookupArray(arguments);
        }
    }
    zt.Root = wc;
    class ae extends zt {
        id;
        parent;
        replay;
        group;
        constructor(e, n, i, r){
            super(n.policies, r), this.id = e, this.parent = n, this.replay = i, this.group = r, i(this);
        }
        addLayer(e, n) {
            return new ae(e, this, n, this.group);
        }
        removeLayer(e) {
            const n = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((i)=>{
                const r = this.data[i], s = n.lookup(i);
                s ? r ? r !== s && Object.keys(r).forEach((a)=>{
                    P(r[a], s[a]) || this.group.dirty(i, a);
                }) : (this.group.dirty(i, "__exists"), Object.keys(s).forEach((a)=>{
                    this.group.dirty(i, a);
                })) : this.delete(i);
            }), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
        }
        toObject() {
            return {
                ...this.parent.toObject(),
                ...this.data
            };
        }
        findChildRefIds(e) {
            const n = this.parent.findChildRefIds(e);
            return L.call(this.data, e) ? {
                ...n,
                ...super.findChildRefIds(e)
            } : n;
        }
        getStorage(...e) {
            let n = this.parent;
            for(; n.parent;)n = n.parent;
            return n.getStorage(...e);
        }
    }
    class Ec extends ae {
        constructor(e){
            super("EntityStore.Stump", e, ()=>{}, new ys(e.group.caching, e.group));
        }
        removeLayer() {
            return this;
        }
        merge(e, n) {
            return this.parent.merge(e, n);
        }
    }
    function Nc(t, e, n) {
        const i = t[n], r = e[n];
        return P(i, r) ? i : r;
    }
    function ot(t) {
        return !!(t && t.supportsResultCaching);
    }
    const vs = new Ut;
    function Tc(t) {
        const e = t.directives?.find(({ name: i })=>i.value === "unmask");
        if (!e) return "mask";
        const n = e.arguments?.find(({ name: i })=>i.value === "mode");
        return n && "value" in n.value && n.value.value === "migrate" ? "migrate" : "unmask";
    }
    function ks(t, e, n) {
        return vs.withValue(!0, ()=>at(t, e, n, !1));
    }
    function Fc(t, e) {
        if (e.has(t)) return e.get(t);
        const n = Array.isArray(t) ? [] : {};
        return e.set(t, n), n;
    }
    function at(t, e, n, i, r) {
        const { knownChanged: s } = n, a = Fc(t, n.mutableTargets);
        if (Array.isArray(t)) {
            for (const [o, c] of Array.from(t.entries())){
                if (c === null) {
                    a[o] = null;
                    continue;
                }
                const l = at(c, e, n, i);
                s.has(l) && s.add(a), a[o] = l;
            }
            return s.has(a) ? a : t;
        }
        for (const o of e.selections){
            let c;
            if (i && s.add(a), o.kind === C.FIELD) {
                const l = Ke(o), u = o.selectionSet;
                if (c = a[l] || t[l], c === void 0) continue;
                if (u && c !== null) {
                    const d = at(t[l], u, n, i);
                    s.has(d) && (c = d);
                }
                a[l] = c;
            }
            if (o.kind === C.INLINE_FRAGMENT && (!o.typeCondition || n.cache.fragmentMatches(o, t.__typename)) && (c = at(t, o.selectionSet, n, i)), o.kind === C.FRAGMENT_SPREAD) {
                const l = o.name.value, u = n.fragmentMap[l] || (n.fragmentMap[l] = n.cache.lookupFragment(l));
                F(u, 39, l);
                const d = Tc(o);
                d !== "mask" && (c = at(t, u.selectionSet, n, d === "migrate"));
            }
            s.has(c) && s.add(a);
        }
        return "__typename" in t && !("__typename" in a) && (a.__typename = t.__typename), Object.keys(a).length !== Object.keys(t).length && s.add(a), s.has(a) ? a : t;
    }
    function Oc(t, e, n, i) {
        const r = e.definitions.filter((a)=>a.kind === C.FRAGMENT_DEFINITION);
        typeof i > "u" && (F(r.length === 1, 41, r.length), i = r[0].name.value);
        const s = r.find((a)=>a.name.value === i);
        return F(!!s, 42, i), t == null || P(t, {}) ? t : ks(t, s.selectionSet, {
            operationName: s.name.value,
            fragmentMap: yt(vt(e)),
            cache: n,
            mutableTargets: new WeakMap,
            knownChanged: new WeakSet
        });
    }
    function Cc(t, e, n) {
        const i = ve(e);
        return F(i, 43), t == null ? t : ks(t, i.selectionSet, {
            operationType: i.operation,
            operationName: i.name?.value,
            fragmentMap: yt(vt(e)),
            cache: n,
            mutableTargets: new WeakMap,
            knownChanged: new WeakSet
        });
    }
    const Li = {};
    function Xn(t) {
        const e = JSON.stringify(t);
        return Li[e] || (Li[e] = {});
    }
    function Ui(t) {
        const e = Xn(t);
        return e.keyFieldsFn || (e.keyFieldsFn = (n, i)=>{
            const r = (a, o)=>i.readField(o, a), s = i.keyObject = Kn(t, (a)=>{
                let o = Le(i.storeObject, a, r);
                return o === void 0 && n !== i.storeObject && L.call(n, a[0]) && (o = Le(n, a, gs)), F(o !== void 0, 107, a.join("."), n), o;
            });
            return `${i.typename}:${JSON.stringify(s)}`;
        });
    }
    function Qi(t) {
        const e = Xn(t);
        return e.keyArgsFn || (e.keyArgsFn = (n, { field: i, variables: r, fieldName: s })=>{
            const a = Kn(t, (c)=>{
                const l = c[0], u = l.charAt(0);
                if (u === "@") {
                    if (i && Wn(i.directives)) {
                        const d = l.slice(1), f = i.directives.find((p)=>p.name.value === d), h = f && Un(f, r);
                        return h && Le(h, c.slice(1));
                    }
                    return;
                }
                if (u === "$") {
                    const d = l.slice(1);
                    if (r && L.call(r, d)) {
                        const f = c.slice(0);
                        return f[0] = d, Le(r, f);
                    }
                    return;
                }
                if (n) return Le(n, c);
            }), o = JSON.stringify(a);
            return (n || o !== "{}") && (s += ":" + o), s;
        });
    }
    function Kn(t, e) {
        const n = new Ye;
        return bs(t).reduce((i, r)=>{
            let s = e(r);
            if (s !== void 0) {
                for(let a = r.length - 1; a >= 0; --a)s = {
                    [r[a]]: s
                };
                i = n.merge(i, s);
            }
            return i;
        }, {});
    }
    function bs(t) {
        const e = Xn(t);
        if (!e.paths) {
            const n = e.paths = [], i = [];
            t.forEach((r, s)=>{
                j(r) ? (bs(r).forEach((a)=>n.push(i.concat(a))), i.length = 0) : (i.push(r), j(t[s + 1]) || (n.push(i.slice(0)), i.length = 0));
            });
        }
        return e.paths;
    }
    function gs(t, e) {
        return t[e];
    }
    function Le(t, e, n) {
        return n = n || gs, Ss(e.reduce(function i(r, s) {
            return j(r) ? r.map((a)=>i(a, s)) : r && n(r, s);
        }, t));
    }
    function Ss(t) {
        return H(t) ? j(t) ? t.map(Ss) : Kn(Object.keys(t).sort(), (e)=>Le(t, e)) : t;
    }
    const ws = new Ut, $i = new WeakMap;
    function ct(t) {
        let e = $i.get(t);
        return e || $i.set(t, e = {
            vars: new Set,
            dep: cs()
        }), e;
    }
    function zi(t) {
        ct(t).vars.forEach((e)=>e.forgetCache(t));
    }
    function Dc(t) {
        ct(t).vars.forEach((e)=>e.attachCache(t));
    }
    function _c(t) {
        const e = new Set, n = new Set, i = function(s) {
            if (arguments.length > 0) {
                if (t !== s) {
                    t = s, e.forEach((o)=>{
                        ct(o).dep.dirty(i), Ic(o);
                    });
                    const a = Array.from(n);
                    n.clear(), a.forEach((o)=>o(t));
                }
            } else {
                const a = ws.getValue();
                a && (r(a), ct(a).dep(i));
            }
            return t;
        };
        i.onNextChange = (s)=>(n.add(s), ()=>{
                n.delete(s);
            });
        const r = i.attachCache = (s)=>(e.add(s), ct(s).vars.add(i), i);
        return i.forgetCache = (s)=>e.delete(s), i;
    }
    function Ic(t) {
        t.broadcastWatches && t.broadcastWatches();
    }
    function Dn(t) {
        return t.args !== void 0 ? t.args : t.field ? Un(t.field, t.variables) : null;
    }
    const Ac = ()=>{}, Wi = (t, e)=>e.fieldName, Hi = (t, e, { mergeObjects: n })=>n(t, e), Yi = (t, e)=>e, xc = (t, e, { streamFieldInfo: n, existingData: i })=>{
        if (!t && !i) return e;
        const r = [], s = t ?? i, a = n?.isLastChunk ? e.length : Math.max(s.length, e.length);
        for(let o = 0; o < a; o++)r[o] = e[o] === void 0 ? s[o] : e[o];
        return r;
    };
    class Rc {
        config;
        typePolicies = {};
        toBeAdded = {};
        supertypeMap = new Map;
        fuzzySubtypes = new Map;
        cache;
        rootIdsByTypename = {};
        rootTypenamesById = {};
        usingPossibleTypes = !1;
        constructor(e){
            this.config = e, this.config = {
                dataIdFromObject: hs,
                ...e
            }, this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
        }
        identify(e, n) {
            const i = this, r = n && (n.typename || n.storeObject?.__typename) || e.__typename;
            if (r === this.rootTypenamesById.ROOT_QUERY) return [
                "ROOT_QUERY"
            ];
            const s = n && n.storeObject || e, a = {
                ...n,
                typename: r,
                storeObject: s,
                readField: n && n.readField || ((...u)=>{
                    const d = Zn(u, s);
                    return i.readField(d, {
                        store: i.cache.data,
                        variables: d.variables
                    });
                })
            };
            let o;
            const c = r && this.getTypePolicy(r);
            let l = c && c.keyFn || this.config.dataIdFromObject;
            return vs.withValue(!0, ()=>{
                for(; l;){
                    const u = l({
                        ...e,
                        ...s
                    }, a);
                    if (j(u)) l = Ui(u);
                    else {
                        o = u;
                        break;
                    }
                }
            }), o = o ? String(o) : void 0, a.keyObject ? [
                o,
                a.keyObject
            ] : [
                o
            ];
        }
        addTypePolicies(e) {
            Object.keys(e).forEach((n)=>{
                const { queryType: i, mutationType: r, subscriptionType: s, ...a } = e[n];
                i && this.setRootTypename("Query", n), r && this.setRootTypename("Mutation", n), s && this.setRootTypename("Subscription", n), L.call(this.toBeAdded, n) ? this.toBeAdded[n].push(a) : this.toBeAdded[n] = [
                    a
                ];
            });
        }
        updateTypePolicy(e, n, i) {
            const r = this.getTypePolicy(e), { keyFields: s, fields: a } = n;
            function o(c, l) {
                c.merge = typeof l == "function" ? l : l === !0 ? Hi : l === !1 ? Yi : c.merge;
            }
            o(r, n.merge), r.keyFn = s === !1 ? Ac : j(s) ? Ui(s) : typeof s == "function" ? s : r.keyFn, a && Object.keys(a).forEach((c)=>{
                let l = i[c];
                (!l || l?.typename !== e) && (l = i[c] = {
                    typename: e
                });
                const u = a[c];
                if (typeof u == "function") l.read = u;
                else {
                    const { keyArgs: d, read: f, merge: h } = u;
                    l.keyFn = d === !1 ? Wi : j(d) ? Qi(d) : typeof d == "function" ? d : l.keyFn, typeof f == "function" && (l.read = f), o(l, h);
                }
                l.read && l.merge && (l.keyFn = l.keyFn || Wi);
            });
        }
        setRootTypename(e, n = e) {
            const i = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[i];
            n !== r && (F(!r || r === e, 108, e), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[n] = i, this.rootTypenamesById[i] = n);
        }
        addPossibleTypes(e) {
            this.usingPossibleTypes = !0, Object.keys(e).forEach((n)=>{
                this.getSupertypeSet(n, !0), e[n].forEach((i)=>{
                    this.getSupertypeSet(i, !0).add(n);
                    const r = i.match(ps);
                    (!r || r[0] !== i) && this.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }
        getTypePolicy(e) {
            if (!L.call(this.typePolicies, e)) {
                const i = this.typePolicies[e] = {};
                i.fields = {};
                let r = this.supertypeMap.get(e);
                !r && this.fuzzySubtypes.size && (r = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach((s, a)=>{
                    if (s.test(e)) {
                        const o = this.supertypeMap.get(a);
                        o && o.forEach((c)=>r.add(c));
                    }
                })), r && r.size && r.forEach((s)=>{
                    const { fields: a, ...o } = this.getTypePolicy(s);
                    Object.assign(i, o), Object.assign(i.fields, a);
                });
            }
            const n = this.toBeAdded[e];
            return n && n.length && n.splice(0).forEach((i)=>{
                this.updateTypePolicy(e, i, this.typePolicies[e].fields);
            }), this.typePolicies[e];
        }
        getFieldPolicy(e, n) {
            if (e) return this.getTypePolicy(e).fields[n];
        }
        getSupertypeSet(e, n) {
            let i = this.supertypeMap.get(e);
            return !i && n && this.supertypeMap.set(e, i = new Set), i;
        }
        fragmentMatches(e, n, i, r) {
            if (!e.typeCondition) return !0;
            if (!n) return !1;
            const s = e.typeCondition.name.value;
            if (n === s) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(s)) {
                const a = this.getSupertypeSet(n, !0), o = [
                    a
                ], c = (u)=>{
                    const d = this.getSupertypeSet(u, !1);
                    d && d.size && o.indexOf(d) < 0 && o.push(d);
                };
                let l = !!(i && this.fuzzySubtypes.size);
                for(let u = 0; u < o.length; ++u){
                    const d = o[u];
                    if (d.has(s)) return a.has(s) || a.add(s), !0;
                    d.forEach(c), l && u === o.length - 1 && Cn(e.selectionSet, i, r) && (l = !1, this.fuzzySubtypes.forEach((f, h)=>{
                        const p = n.match(f);
                        p && p[0] === n && c(h);
                    }));
                }
            }
            return !1;
        }
        hasKeyArgs(e, n) {
            const i = this.getFieldPolicy(e, n);
            return !!(i && i.keyFn);
        }
        getStoreFieldName(e) {
            const { typename: n, fieldName: i } = e, r = this.getFieldPolicy(n, i);
            let s, a = r && r.keyFn;
            if (a && n) {
                const o = {
                    typename: n,
                    fieldName: i,
                    field: e.field || null,
                    variables: e.variables
                }, c = Dn(e);
                for(; a;){
                    const l = a(c, o);
                    if (j(l)) a = Qi(l);
                    else {
                        s = l || i;
                        break;
                    }
                }
            }
            return s === void 0 && (s = e.field ? Uo(e.field, e.variables) : Yr(i, Dn(e))), s === !1 ? i : i === Je(s) ? s : i + ":" + s;
        }
        readField(e, n) {
            const i = e.from;
            if (!i || !(e.field || e.fieldName)) return;
            if (e.typename === void 0) {
                const u = n.store.getFieldValue(i, "__typename");
                u && (e.typename = u);
            }
            const s = this.getStoreFieldName(e), a = Je(s), o = n.store.getFieldValue(i, s), c = this.getFieldPolicy(e.typename, a), l = c && c.read;
            if (l) {
                const u = Es(this, i, e, n, n.store.getStorage(x(i) ? i.__ref : i, s));
                return ws.withValue(this.cache, l, [
                    o,
                    u
                ]);
            }
            return o;
        }
        getReadFunction(e, n) {
            const i = this.getFieldPolicy(e, n);
            return i && i.read;
        }
        getMergeFunction(e, n, i) {
            let r = this.getFieldPolicy(e, n), s = r && r.merge;
            return !s && i && (r = this.getTypePolicy(i), s = r && r.merge), s;
        }
        runMergeFunction(e, n, { field: i, typename: r, merge: s, path: a }, o, c) {
            const l = e;
            if (s === Hi) return Ns(o.store)(e, n);
            if (s === Yi) return n;
            o.overwrite && (e = void 0);
            const u = o.extensions?.[we]?.deref()?.peekArray(a);
            if (u) {
                const { current: f, previous: h } = u;
                if (h && P(h.incoming, n) && P(h.streamFieldInfo, f)) return h.result;
            }
            const d = s(e, n, Pc(this, void 0, {
                typename: r,
                fieldName: i.name.value,
                field: i,
                variables: o.variables,
                path: a
            }, o, c || {}, l));
            return u && (u.previous = {
                incoming: n,
                streamFieldInfo: u.current,
                result: d
            }), d;
        }
    }
    function Es(t, e, n, i, r) {
        const s = t.getStoreFieldName(n), a = Je(s), o = n.variables || i.variables, { toReference: c, canRead: l } = i.store;
        return {
            args: Dn(n),
            field: n.field || null,
            fieldName: a,
            storeFieldName: s,
            variables: o,
            isReference: x,
            toReference: c,
            storage: r,
            cache: t.cache,
            canRead: l,
            readField (...u) {
                return t.readField(Zn(u, e, o), i);
            },
            mergeObjects: Ns(i.store)
        };
    }
    function Pc(t, e, n, i, r, s) {
        const a = {
            ...Es(t, e, n, i, r),
            extensions: i.extensions,
            existingData: s
        }, o = i.extensions;
        if (o && we in o) {
            const { [we]: c, ...l } = o, u = c?.deref()?.peekArray(n.path);
            u && (a.streamFieldInfo = u.current), a.extensions = Object.keys(l).length === 0 ? void 0 : l;
        }
        return a;
    }
    function Zn(t, e, n) {
        const { 0: i, 1: r, length: s } = t;
        let a;
        return typeof i == "string" ? a = {
            fieldName: i,
            from: s > 1 ? r : e
        } : (a = {
            ...i
        }, L.call(a, "from") || (a.from = e)), a.variables === void 0 && (a.variables = n), a;
    }
    function Ns(t) {
        return function(n, i) {
            if (j(n) || j(i)) throw ne(111);
            if (H(n) && H(i)) {
                const r = t.getFieldValue(n, "__typename"), s = t.getFieldValue(i, "__typename");
                if (r && s && r !== s) return i;
                if (x(n) && Ve(i)) return t.merge(n.__ref, i), n;
                if (Ve(n) && x(i)) return t.merge(n, i.__ref), i;
                if (Ve(n) && Ve(i)) return {
                    ...n,
                    ...i
                };
            }
            return i;
        };
    }
    function Gi(t) {
        return [
            t.selectionSet,
            t.objectOrReference,
            t.context
        ];
    }
    class Mc {
        executeSelectionSet;
        executeSubSelectedArray;
        config;
        knownResults = new WeakMap;
        constructor(e){
            this.config = e, this.executeSelectionSet = ft((n)=>{
                const i = Gi(n), r = this.executeSelectionSet.peek(...i);
                return r || (Bi(n.context.store, n.enclosingRef.__ref), this.execSelectionSetImpl(n));
            }, {
                max: ye["inMemoryCache.executeSelectionSet"] || 5e4,
                keyArgs: Gi,
                makeCacheKey (n, i, r) {
                    if (ot(r.store)) return r.store.makeCacheKey(n, x(i) ? i.__ref : i, r.varString);
                }
            }), this.executeSubSelectedArray = ft((n)=>(Bi(n.context.store, n.enclosingRef.__ref), this.execSubSelectedArrayImpl(n)), {
                max: ye["inMemoryCache.executeSubSelectedArray"] || 1e4,
                makeCacheKey ({ field: n, array: i, context: r }) {
                    if (ot(r.store)) return r.store.makeCacheKey(n, i, r.varString);
                }
            });
        }
        diffQueryAgainstStore({ store: e, query: n, rootId: i = "ROOT_QUERY", variables: r, returnPartialData: s = !0 }) {
            const a = this.config.cache.policies;
            r = {
                ...$n(Do(n)),
                ...r
            };
            const o = Be(i), c = this.executeSelectionSet({
                selectionSet: zn(n).selectionSet,
                objectOrReference: o,
                enclosingRef: o,
                context: {
                    store: e,
                    query: n,
                    policies: a,
                    variables: r,
                    varString: me(r),
                    ...ms(n, this.config.fragments)
                }
            });
            let l;
            c.missing && (l = new Jn(Vc(c.missing), c.missing, n, r));
            const u = !l, { result: d } = c;
            return {
                result: u ? d : s ? Object.keys(d).length === 0 ? null : d : null,
                complete: u,
                missing: l
            };
        }
        isFresh(e, n, i, r) {
            if (ot(r.store) && this.knownResults.get(e) === i) {
                const s = this.executeSelectionSet.peek(i, n, r);
                if (s && e === s.result) return !0;
            }
            return !1;
        }
        execSelectionSetImpl({ selectionSet: e, objectOrReference: n, enclosingRef: i, context: r }) {
            if (x(n) && !r.policies.rootTypenamesById[n.__ref] && !r.store.has(n.__ref)) return {
                result: {},
                missing: `Dangling reference to missing ${n.__ref} object`
            };
            const { variables: s, policies: a, store: o } = r, c = o.getFieldValue(n, "__typename"), l = [];
            let u;
            const d = new Ye;
            typeof c == "string" && !a.rootIdsByTypename[c] && l.push({
                __typename: c
            });
            function f(v, k) {
                return v.missing && (u = d.merge(u, {
                    [k]: v.missing
                })), v.result;
            }
            const h = new Set(e.selections);
            h.forEach((v)=>{
                if (Lt(v, s)) if (kt(v)) {
                    let k = a.readField({
                        fieldName: v.name.value,
                        field: v,
                        variables: r.variables,
                        from: n
                    }, r);
                    const b = Ke(v);
                    k === void 0 ? us.added(v) || (u = d.merge(u, {
                        [b]: `Can't find field '${v.name.value}' on ${x(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)}`
                    })) : j(k) ? k.length > 0 && (k = f(this.executeSubSelectedArray({
                        field: v,
                        array: k,
                        enclosingRef: i,
                        context: r
                    }), b)) : v.selectionSet && k != null && (k = f(this.executeSelectionSet({
                        selectionSet: v.selectionSet,
                        objectOrReference: k,
                        enclosingRef: x(k) ? k : i,
                        context: r
                    }), b)), k !== void 0 && l.push({
                        [b]: k
                    });
                } else {
                    const k = Bt(v, r.lookupFragment);
                    if (!k && v.kind === C.FRAGMENT_SPREAD) throw ne(112, v.name.value);
                    k && a.fragmentMatches(k, c) && k.selectionSet.selections.forEach(h.add, h);
                }
            });
            const y = {
                result: Po(l),
                missing: u
            }, m = y;
            return m.result && this.knownResults.set(m.result, e), m;
        }
        execSubSelectedArrayImpl({ field: e, array: n, enclosingRef: i, context: r }) {
            let s, a = new Ye;
            function o(c, l) {
                return c.missing && (s = a.merge(s, {
                    [l]: c.missing
                })), c.result;
            }
            return e.selectionSet && (n = n.filter((c)=>c === void 0 || r.store.canRead(c))), n = n.map((c, l)=>c === null ? null : j(c) ? o(this.executeSubSelectedArray({
                    field: e,
                    array: c,
                    enclosingRef: i,
                    context: r
                }), l) : e.selectionSet ? o(this.executeSelectionSet({
                    selectionSet: e.selectionSet,
                    objectOrReference: c,
                    enclosingRef: x(c) ? c : i,
                    context: r
                }), l) : c), {
                result: n,
                missing: s
            };
        }
    }
    function Vc(t) {
        try {
            JSON.stringify(t, (e, n)=>{
                if (typeof n == "string") throw n;
                return n;
            });
        } catch (e) {
            return e;
        }
    }
    function cn(t, e, n) {
        const i = `${e}${n}`;
        let r = t.flavors.get(i);
        return r || t.flavors.set(i, r = t.clientOnly === e && t.deferred === n ? t : {
            ...t,
            clientOnly: e,
            deferred: n
        }), r;
    }
    class qc {
        cache;
        reader;
        fragments;
        constructor(e, n, i){
            this.cache = e, this.reader = n, this.fragments = i;
        }
        writeToStore(e, { query: n, result: i, dataId: r, variables: s, overwrite: a, extensions: o }) {
            const c = ve(n), l = Sc();
            s = {
                ...$n(c),
                ...s
            };
            const u = {
                store: e,
                written: {},
                merge (f, h) {
                    return l.merge(f, h);
                },
                variables: s,
                varString: me(s),
                ...ms(n, this.fragments),
                overwrite: !!a,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map,
                extensions: o
            }, d = this.processSelectionSet({
                result: i || {},
                dataId: r,
                selectionSet: c.selectionSet,
                mergeTree: {
                    map: new Map
                },
                context: u,
                path: []
            });
            if (!x(d)) throw ne(114, i);
            return u.incomingById.forEach(({ storeObject: f, mergeTree: h, fieldNodeSet: p }, y)=>{
                const m = Be(y);
                if (h && h.map.size) {
                    const v = this.applyMerges(h, m, f, u);
                    if (x(v)) return;
                    f = v;
                }
                e.merge(y, f);
            }), e.retain(d.__ref), d;
        }
        processSelectionSet({ dataId: e, result: n, selectionSet: i, context: r, mergeTree: s, path: a }) {
            const { policies: o } = this.cache;
            let c = {};
            const l = e && o.rootTypenamesById[e] || In(n, i, r.fragmentMap) || e && r.store.get(e, "__typename");
            typeof l == "string" && (c.__typename = l);
            const u = (...f)=>{
                const h = Zn(f, c, r.variables);
                if (x(h.from)) {
                    const p = r.incomingById.get(h.from.__ref);
                    if (p) {
                        const y = o.readField({
                            ...h,
                            from: p.storeObject
                        }, r);
                        if (y !== void 0) return y;
                    }
                }
                return o.readField(h, r);
            }, d = new Set;
            this.flattenFields(i, n, r, l).forEach((f, h)=>{
                const p = Ke(h), y = n[p], m = [
                    ...a,
                    h.name.value
                ];
                if (d.add(h), y !== void 0) {
                    const v = o.getStoreFieldName({
                        typename: l,
                        fieldName: h.name.value,
                        field: h,
                        variables: f.variables
                    }), k = Ji(s, v);
                    let b = this.processFieldValue(y, h, h.selectionSet ? cn(f, !1, !1) : f, k, m), S;
                    h.selectionSet && (x(b) || Ve(b)) && (S = u("__typename", b));
                    const w = o.getMergeFunction(l, h.name.value, S);
                    w ? k.info = {
                        field: h,
                        typename: l,
                        merge: w,
                        path: m
                    } : f.extensions?.[we] && Array.isArray(b) && jc(h) ? k.info = {
                        field: h,
                        typename: l,
                        merge: xc,
                        path: m
                    } : Xi(s, v), c = f.merge(c, {
                        [v]: b
                    });
                }
            });
            try {
                const [f, h] = o.identify(n, {
                    typename: l,
                    selectionSet: i,
                    fragmentMap: r.fragmentMap,
                    storeObject: c,
                    readField: u
                });
                e = e || f, h && (c = r.merge(c, h));
            } catch (f) {
                if (!e) throw f;
            }
            if (typeof e == "string") {
                const f = Be(e), h = r.written[e] || (r.written[e] = []);
                if (h.indexOf(i) >= 0 || (h.push(i), this.reader && this.reader.isFresh(n, f, i, r))) return f;
                const p = r.incomingById.get(e);
                return p ? (p.storeObject = r.merge(p.storeObject, c), p.mergeTree = _n(p.mergeTree, s), d.forEach((y)=>p.fieldNodeSet.add(y))) : r.incomingById.set(e, {
                    storeObject: c,
                    mergeTree: Pt(s) ? void 0 : s,
                    fieldNodeSet: d
                }), f;
            }
            return c;
        }
        processFieldValue(e, n, i, r, s) {
            return !n.selectionSet || e === null ? e : j(e) ? e.map((a, o)=>{
                const c = this.processFieldValue(a, n, i, Ji(r, o), [
                    ...s,
                    o
                ]);
                return Xi(r, o), c;
            }) : this.processSelectionSet({
                result: e,
                selectionSet: n.selectionSet,
                context: i,
                mergeTree: r,
                path: s
            });
        }
        flattenFields(e, n, i, r = In(n, e, i.fragmentMap)) {
            const s = new Map, { policies: a } = this.cache, o = new de(!1);
            return (function c(l, u) {
                const d = o.lookup(l, u.clientOnly, u.deferred);
                d.visited || (d.visited = !0, l.selections.forEach((f)=>{
                    if (!Lt(f, i.variables)) return;
                    let { clientOnly: h, deferred: p } = u;
                    if (!(h && p) && Wn(f.directives) && f.directives.forEach((y)=>{
                        const m = y.name.value;
                        if (m === "client" && (h = !0), m === "defer") {
                            const v = Un(y, i.variables);
                            (!v || v.if !== !1) && (p = !0);
                        }
                    }), kt(f)) {
                        const y = s.get(f);
                        y && (h = h && y.clientOnly, p = p && y.deferred), s.set(f, cn(i, h, p));
                    } else {
                        const y = Bt(f, i.lookupFragment);
                        if (!y && f.kind === C.FRAGMENT_SPREAD) throw ne(116, f.name.value);
                        y && a.fragmentMatches(y, r, n, i.variables) && c(y.selectionSet, cn(i, h, p));
                    }
                }));
            })(e, i), s;
        }
        applyMerges(e, n, i, r, s) {
            if (e.map.size && !x(i)) {
                const a = !j(i) && (x(n) || Ve(n)) ? n : void 0, o = i;
                a && !s && (s = [
                    x(a) ? a.__ref : a
                ]);
                let c;
                const l = (u, d)=>j(u) ? typeof d == "number" ? u[d] : void 0 : r.store.getFieldValue(u, String(d));
                e.map.forEach((u, d)=>{
                    const f = l(a, d), h = l(o, d);
                    if (h === void 0) return;
                    s && s.push(d);
                    const p = this.applyMerges(u, f, h, r, s);
                    p !== h && (c = c || new Map, c.set(d, p)), s && F(s.pop() === d);
                }), c && (i = j(o) ? o.slice(0) : {
                    ...o
                }, c.forEach((u, d)=>{
                    i[d] = u;
                }));
            }
            return e.info ? this.cache.policies.runMergeFunction(n, i, e.info, r, s && r.store.getStorage(...s)) : i;
        }
    }
    const Ts = [];
    function Ji({ map: t }, e) {
        return t.has(e) || t.set(e, Ts.pop() || {
            map: new Map
        }), t.get(e);
    }
    function _n(t, e) {
        if (t === e || !e || Pt(e)) return t;
        if (!t || Pt(t)) return e;
        const n = t.info && e.info ? {
            ...t.info,
            ...e.info
        } : t.info || e.info, i = t.map.size && e.map.size, r = i ? new Map : t.map.size ? t.map : e.map, s = {
            info: n,
            map: r
        };
        if (i) {
            const a = new Set(e.map.keys());
            t.map.forEach((o, c)=>{
                s.map.set(c, _n(o, e.map.get(c))), a.delete(c);
            }), a.forEach((o)=>{
                s.map.set(o, _n(e.map.get(o), t.map.get(o)));
            });
        }
        return s;
    }
    function jc(t) {
        return !!t.directives && t.directives.some((e)=>e.name.value === "stream");
    }
    function Pt(t) {
        return !t || !(t.info || t.map.size);
    }
    function Xi({ map: t }, e) {
        const n = t.get(e);
        n && Pt(n) && (Ts.push(n), t.delete(e));
    }
    function In(t, e, n) {
        let i;
        for (const r of e.selections)if (kt(r)) {
            if (r.name.value === "__typename") return t[Ke(r)];
        } else i ? i.push(r) : i = [
            r
        ];
        if (typeof t.__typename == "string") return t.__typename;
        if (i) for (const r of i){
            const s = In(t, Bt(r, n).selectionSet, n);
            if (typeof s == "string") return s;
        }
    }
    class Bc extends yc {
        data;
        optimisticData;
        config;
        watches = new Set;
        storeReader;
        storeWriter;
        addTypenameTransform = new he(us);
        maybeBroadcastWatch;
        assumeImmutableResults = !0;
        policies;
        makeVar = _c;
        constructor(e = {}){
            super(), this.config = gc(e), this.policies = new Rc({
                cache: this,
                dataIdFromObject: this.config.dataIdFromObject,
                possibleTypes: this.config.possibleTypes,
                typePolicies: this.config.typePolicies
            }), this.init();
        }
        init() {
            const e = this.data = new zt.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache();
        }
        resetResultCache() {
            const { fragments: e } = this.config;
            this.addTypenameTransform.resetCache(), e?.resetCaches(), this.storeWriter = new qc(this, this.storeReader = new Mc({
                cache: this,
                fragments: e
            }), e), this.maybeBroadcastWatch = ft((n, i)=>this.broadcastWatch(n, i), {
                max: ye["inMemoryCache.maybeBroadcastWatch"] || 5e3,
                makeCacheKey: (n)=>{
                    const i = n.optimistic ? this.optimisticData : this.data;
                    if (ot(i)) {
                        const { optimistic: r, id: s, variables: a } = n;
                        return i.makeCacheKey(n.query, n.callback, me({
                            optimistic: r,
                            id: s,
                            variables: a
                        }));
                    }
                }
            }), new Set([
                this.data.group,
                this.optimisticData.group
            ]).forEach((n)=>n.resetCaching());
        }
        restore(e) {
            return this.init(), e && this.data.replace(e), this;
        }
        extract(e = !1) {
            return (e ? this.optimisticData : this.data).extract();
        }
        read(e) {
            const { returnPartialData: n = !1 } = e;
            return this.storeReader.diffQueryAgainstStore({
                ...e,
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: n
            }).result;
        }
        write(e) {
            try {
                return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
            } finally{
                !--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
            }
        }
        modify(e) {
            if (L.call(e, "id") && !e.id) return !1;
            const n = e.optimistic ? this.optimisticData : this.data;
            try {
                return ++this.txCount, n.modify(e.id || "ROOT_QUERY", e.fields, !1);
            } finally{
                !--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
            }
        }
        diff(e) {
            return this.storeReader.diffQueryAgainstStore({
                ...e,
                store: e.optimistic ? this.optimisticData : this.data,
                rootId: e.id || "ROOT_QUERY",
                config: this.config
            });
        }
        watch(e) {
            return this.watches.size || Dc(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), ()=>{
                this.watches.delete(e) && !this.watches.size && zi(this), this.maybeBroadcastWatch.forget(e);
            };
        }
        gc(e) {
            me.reset(), De.reset();
            const n = this.optimisticData.gc();
            return e && !this.txCount && e.resetResultCache && this.resetResultCache(), n;
        }
        retain(e, n) {
            return (n ? this.optimisticData : this.data).retain(e);
        }
        release(e, n) {
            return (n ? this.optimisticData : this.data).release(e);
        }
        identify(e) {
            if (x(e)) return e.__ref;
            try {
                return this.policies.identify(e)[0];
            } catch  {}
        }
        evict(e) {
            if (!e.id) {
                if (L.call(e, "id")) return !1;
                e = {
                    ...e,
                    id: "ROOT_QUERY"
                };
            }
            try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
            } finally{
                !--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
            }
        }
        reset(e) {
            return this.init(), me.reset(), e && e.discardWatches ? (this.watches.forEach((n)=>this.maybeBroadcastWatch.forget(n)), this.watches.clear(), zi(this)) : this.broadcastWatches(), Promise.resolve();
        }
        removeOptimistic(e) {
            const n = this.optimisticData.removeLayer(e);
            n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
        }
        txCount = 0;
        batch(e) {
            const { update: n, optimistic: i = !0, removeOptimistic: r, onWatchUpdated: s } = e;
            let a;
            const o = (l)=>{
                const { data: u, optimisticData: d } = this;
                ++this.txCount, l && (this.data = this.optimisticData = l);
                try {
                    return a = n(this);
                } finally{
                    --this.txCount, this.data = u, this.optimisticData = d;
                }
            }, c = new Set;
            return s && !this.txCount && this.broadcastWatches({
                ...e,
                onWatchUpdated (l) {
                    return c.add(l), !1;
                }
            }), typeof i == "string" ? this.optimisticData = this.optimisticData.addLayer(i, o) : i === !1 ? o(this.data) : o(), typeof r == "string" && (this.optimisticData = this.optimisticData.removeLayer(r)), s && c.size ? (this.broadcastWatches({
                ...e,
                onWatchUpdated (l, u) {
                    const d = s.call(this, l, u);
                    return d !== !1 && c.delete(l), d;
                }
            }), c.size && c.forEach((l)=>this.maybeBroadcastWatch.dirty(l))) : this.broadcastWatches(e), a;
        }
        performTransaction(e, n) {
            return this.batch({
                update: e,
                optimistic: n || n !== null
            });
        }
        transformDocument(e) {
            return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(e));
        }
        fragmentMatches(e, n) {
            return this.policies.fragmentMatches(e, n);
        }
        lookupFragment(e) {
            return this.config.fragments?.lookup(e) || null;
        }
        resolvesClientField(e, n) {
            return !!this.policies.getReadFunction(e, n);
        }
        broadcastWatches(e) {
            if (!this.txCount) {
                const n = this.onAfterBroadcast, i = new Set;
                this.onAfterBroadcast = (r)=>{
                    i.add(r);
                };
                try {
                    this.watches.forEach((r)=>this.maybeBroadcastWatch(r, e)), i.forEach((r)=>r());
                } finally{
                    this.onAfterBroadcast = n;
                }
            }
        }
        addFragmentsToDocument(e) {
            const { fragments: n } = this.config;
            return n ? n.transform(e) : e;
        }
        broadcastWatch(e, n) {
            const { lastDiff: i } = e, r = this.diff(e);
            n && (e.optimistic && typeof n.optimistic == "string" && (r.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, e, r, i) === !1) || (!i || !P(i.result, r.result)) && e.callback(e.lastDiff = r, i);
        }
    }
    function bt(t, e) {
        return typeof t == "object" && t !== null && t[Symbol.for("apollo.error")] === e;
    }
    function gt(t) {
        Object.defineProperty(t, Symbol.for("apollo.error"), {
            value: t.name,
            enumerable: !1,
            writable: !1,
            configurable: !1
        });
    }
    function Ki(t) {
        return t.map((e)=>e.message || "Error message not found.").join(`
`);
    }
    class ht extends Error {
        static is(e) {
            return bt(e, "CombinedProtocolErrors");
        }
        static formatMessage = Ki;
        errors;
        constructor(e){
            super(ht.formatMessage(e, {
                defaultFormatMessage: Ki
            })), this.name = "CombinedProtocolErrors", this.errors = e, gt(this), Object.setPrototypeOf(this, ht.prototype);
        }
    }
    function Lc(t) {
        return t !== null && typeof t == "object" && typeof t.message == "string" && typeof t.name == "string" && (typeof t.stack == "string" || typeof t.stack > "u");
    }
    class ei extends Error {
        static is(e) {
            return bt(e, "UnconventionalError");
        }
        constructor(e){
            super("An error of unexpected shape occurred.", {
                cause: e
            }), this.name = "UnconventionalError", gt(this), Object.setPrototypeOf(this, ei.prototype);
        }
    }
    function Zi(t) {
        return t.filter((e)=>e).map((e)=>e.message || "Error message not found.").join(`
`);
    }
    class pe extends Error {
        static is(e) {
            return bt(e, "CombinedGraphQLErrors");
        }
        static formatMessage = Zi;
        errors;
        data;
        extensions;
        constructor(e, n = e.errors || []){
            super(pe.formatMessage(n, {
                result: e,
                defaultFormatMessage: Zi
            })), this.errors = n, this.data = e.data, this.extensions = e.extensions, this.name = "CombinedGraphQLErrors", gt(this), Object.setPrototypeOf(this, pe.prototype);
        }
    }
    const Uc = new WeakSet;
    function Qc(t) {
        Uc.add(t);
    }
    class Wt extends Error {
        static is(e) {
            return bt(e, "ServerError");
        }
        response;
        statusCode;
        bodyText;
        constructor(e, n){
            super(e), this.name = "ServerError", this.response = n.response, this.statusCode = n.response.status, this.bodyText = n.bodyText, gt(this), Object.setPrototypeOf(this, Wt.prototype);
        }
    }
    class Ht extends Error {
        static is(e) {
            return bt(e, "ServerParseError");
        }
        response;
        statusCode;
        bodyText;
        constructor(e, n){
            super(e instanceof Error ? e.message : "Could not parse server response", {
                cause: e
            }), this.name = "ServerParseError", this.response = n.response, this.statusCode = n.response.status, this.bodyText = n.bodyText, gt(this), Object.setPrototypeOf(this, Ht.prototype);
        }
    }
    const pt = Symbol();
    function Fs(t) {
        return "extensions" in t ? ht.is(t.extensions[pt]) : !1;
    }
    function Os(t) {
        return Lc(t) ? t : typeof t == "string" ? new Error(t, {
            cause: t
        }) : new ei(t);
    }
    var E;
    (function(t) {
        t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error", t[t.streaming = 9] = "streaming";
    })(E || (E = {}));
    const { assign: er } = Object, Pe = {
        loading: !0,
        networkStatus: E.loading,
        data: void 0,
        dataState: "empty",
        partial: !0
    }, ln = {
        loading: !1,
        networkStatus: E.ready,
        data: void 0,
        dataState: "empty",
        partial: !0
    };
    class un {
        options;
        queryName;
        variablesUnknown = !1;
        _lastWrite;
        get query() {
            return this.lastQuery;
        }
        get variables() {
            return this.options.variables;
        }
        unsubscribeFromCache;
        input;
        subject;
        isTornDown;
        queryManager;
        subscriptions = new Set;
        waitForNetworkResult;
        lastQuery;
        linkSubscription;
        pollingInfo;
        get networkStatus() {
            return this.subject.getValue().result.networkStatus;
        }
        get cache() {
            return this.queryManager.cache;
        }
        constructor({ queryManager: e, options: n, transformedQuery: i = e.transform(n.query) }){
            this.queryManager = e, this.waitForNetworkResult = n.fetchPolicy === "network-only", this.isTornDown = !1, this.subscribeToMore = this.subscribeToMore.bind(this), this.maskResult = this.maskResult.bind(this);
            const { watchQuery: { fetchPolicy: r = "cache-first" } = {} } = e.defaultOptions, { fetchPolicy: s = r, initialFetchPolicy: a = s === "standby" ? r : s } = n;
            n[Jo] && (F(s === "standby", 82), this.variablesUnknown = !0), this.lastQuery = i, this.options = {
                ...n,
                initialFetchPolicy: a,
                fetchPolicy: s,
                variables: this.getVariablesWithDefaults(n.variables)
            }, this.initializeObservablesQueue(), this["@@observable"] = ()=>this, Symbol.observable && (this[Symbol.observable] = ()=>this);
            const o = ve(this.query);
            this.queryName = o && o.name && o.name.value;
        }
        initializeObservablesQueue() {
            this.subject = new Fa({
                query: this.query,
                variables: this.variables,
                result: Pe,
                meta: {}
            });
            const e = this.subject.pipe(ut({
                subscribe: ()=>{
                    this.subject.observed || (this.reobserve(), setTimeout(()=>this.updatePolling()));
                },
                unsubscribe: ()=>{
                    this.subject.observed || this.tearDownQuery();
                }
            }), Nn(({ query: n, variables: i, result: r, meta: s }, a)=>{
                const { shouldEmit: o } = s;
                if (r === Pe && (a.previous = void 0, a.previousVariables = void 0), this.options.fetchPolicy === "standby" || o === 2) return;
                if (o === 1) return u();
                const { previous: c, previousVariables: l } = a;
                if (c) {
                    const d = this.queryManager.getDocumentInfo(n), f = this.queryManager.dataMasking, h = f ? d.nonReactiveQuery : n;
                    if ((f || d.hasNonreactiveDirective ? Jr(h, c, r, i) : P(c, r)) && P(l, i)) return;
                }
                if (o === 3 && (!this.options.notifyOnNetworkStatusChange || P(c, r))) return;
                return u();
                function u() {
                    return a.previous = r, a.previousVariables = i, r;
                }
            }, ()=>({})));
            this.pipe = e.pipe.bind(e), this.subscribe = e.subscribe.bind(e), this.input = new Xe, this.input.complete = ()=>{}, this.input.pipe(this.operator).subscribe(this.subject);
        }
        subscribe;
        pipe;
        [Symbol.observable];
        "@@observable";
        getCacheDiff({ optimistic: e = !0 } = {}) {
            return this.cache.diff({
                query: this.query,
                variables: this.variables,
                returnPartialData: !0,
                optimistic: e
            });
        }
        getInitialResult(e) {
            let n = e || this.options.fetchPolicy;
            this.queryManager.prioritizeCacheValues && (n === "network-only" || n === "cache-and-network") && (n = "cache-first");
            const i = ()=>{
                const r = this.getCacheDiff(), s = this.options.returnPartialData || r.complete ? r.result ?? void 0 : void 0;
                return this.maskResult({
                    data: s,
                    dataState: r.complete ? "complete" : s === void 0 ? "empty" : "partial",
                    loading: !r.complete,
                    networkStatus: r.complete ? E.ready : E.loading,
                    partial: !r.complete
                });
            };
            switch(n){
                case "cache-only":
                    return {
                        ...i(),
                        loading: !1,
                        networkStatus: E.ready
                    };
                case "cache-first":
                    return i();
                case "cache-and-network":
                    return {
                        ...i(),
                        loading: !0,
                        networkStatus: E.loading
                    };
                case "standby":
                    return ln;
                default:
                    return Pe;
            }
        }
        resubscribeCache() {
            const { variables: e, fetchPolicy: n } = this.options, i = this.query, r = n === "standby" || n === "no-cache" || this.waitForNetworkResult, s = !tt({
                query: i,
                variables: e
            }, this.unsubscribeFromCache) && !this.waitForNetworkResult;
            if ((r || s) && this.unsubscribeFromCache?.(), r || !s) return;
            const a = {
                query: i,
                variables: e,
                optimistic: !0,
                watcher: this,
                callback: (c)=>{
                    const l = this.queryManager.getDocumentInfo(i);
                    if ((l.hasClientExports || l.hasForcedResolvers) && (a.lastDiff = void 0), a.lastOwnDiff === c) return;
                    const { result: u } = this.subject.getValue();
                    !c.complete && (u.error || u === Pe || u === ln) || P(u.data, c.result) || this.scheduleNotify();
                }
            }, o = this.cache.watch(a);
            this.unsubscribeFromCache = Object.assign(()=>{
                this.unsubscribeFromCache = void 0, o();
            }, {
                query: i,
                variables: e
            });
        }
        stableLastResult;
        getCurrentResult() {
            const { result: e } = this.subject.getValue();
            let n = e.networkStatus === E.error || this.hasObservers() || this.options.fetchPolicy === "no-cache" ? e : this.getInitialResult();
            return n === Pe && (n = this.getInitialResult()), P(this.stableLastResult, n) || (this.stableLastResult = n), this.stableLastResult;
        }
        refetch(e) {
            const { fetchPolicy: n } = this.options, i = {
                pollInterval: 0
            };
            return n === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", e && !P(this.variables, e) && (i.variables = this.options.variables = this.getVariablesWithDefaults({
                ...this.variables,
                ...e
            })), this._lastWrite = void 0, this._reobserve(i, {
                newNetworkStatus: E.refetch
            });
        }
        fetchMore({ query: e, variables: n, context: i, errorPolicy: r, updateQuery: s }) {
            F(this.options.fetchPolicy !== "cache-only", 84, He(this.query, "(anonymous)"));
            const a = {
                ...J(this.options, {
                    errorPolicy: "none"
                }, {
                    query: e,
                    context: i,
                    errorPolicy: r
                }),
                variables: e ? n : {
                    ...this.variables,
                    ...n
                },
                fetchPolicy: "no-cache",
                notifyOnNetworkStatusChange: this.options.notifyOnNetworkStatusChange
            };
            a.query = this.transformDocument(a.query), this.lastQuery = e ? this.transformDocument(this.options.query) : a.query;
            let o = !1;
            const c = this.options.fetchPolicy !== "no-cache";
            c || F(s, 85);
            const { finalize: l, pushNotification: u } = this.pushOperation(E.fetchMore);
            u({
                source: "newNetworkStatus",
                kind: "N",
                value: {}
            }, {
                shouldEmit: 3
            });
            const { promise: d, operator: f } = tr(), { observable: h } = this.queryManager.fetchObservableWithInfo(a, {
                networkStatus: E.fetchMore,
                exposeExtensions: !0
            }), p = h.pipe(f, W((y)=>y.kind === "N" && y.source === "network")).subscribe({
                next: (y)=>{
                    o = !1;
                    const m = y.value, v = m[Xr];
                    if (fs(y.value.networkStatus) && l(), c) {
                        const k = this.getCacheDiff();
                        this.cache.batch({
                            update: (b)=>{
                                s ? b.updateQuery({
                                    query: this.query,
                                    variables: this.variables,
                                    returnPartialData: !0,
                                    optimistic: !1,
                                    extensions: v
                                }, (S)=>s(S, {
                                        fetchMoreResult: m.data,
                                        variables: a.variables
                                    })) : b.writeQuery({
                                    query: a.query,
                                    variables: a.variables,
                                    data: m.data,
                                    extensions: v
                                });
                            },
                            onWatchUpdated: (b, S)=>{
                                if (b.watcher === this && !P(S.result, k.result)) {
                                    o = !0;
                                    const w = this.getCurrentResult();
                                    It(m.networkStatus) && u({
                                        kind: "N",
                                        source: "network",
                                        value: {
                                            ...w,
                                            networkStatus: m.networkStatus === E.error ? E.ready : m.networkStatus,
                                            loading: !1,
                                            data: S.result,
                                            dataState: m.dataState === "streaming" ? "streaming" : "complete"
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        const k = this.getCurrentResult(), b = s(k.data, {
                            fetchMoreResult: m.data,
                            variables: a.variables
                        });
                        u({
                            kind: "N",
                            value: {
                                ...k,
                                networkStatus: E.ready,
                                loading: !1,
                                data: b,
                                dataState: k.dataState === "streaming" ? "streaming" : "complete"
                            },
                            source: "network"
                        });
                    }
                }
            });
            return Ni(d.then((y)=>st(this.maskResult(y))).finally(()=>{
                if (p.unsubscribe(), l(), c && !o) {
                    const y = this.getCurrentResult();
                    y.dataState === "streaming" ? u({
                        kind: "N",
                        source: "network",
                        value: {
                            ...y,
                            dataState: "complete",
                            networkStatus: E.ready
                        }
                    }) : u({
                        kind: "N",
                        source: "newNetworkStatus",
                        value: {}
                    }, {
                        shouldEmit: 1
                    });
                }
            }));
        }
        subscribeToMore(e) {
            const n = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
            }).subscribe({
                next: (i)=>{
                    const { updateQuery: r, onError: s } = e, { error: a } = i;
                    if (a) {
                        s ? s(a) : F.error(86, a);
                        return;
                    }
                    r && this.updateQuery((o, c)=>r(o, {
                            subscriptionData: i,
                            ...c
                        }));
                }
            });
            return this.subscriptions.add(n), ()=>{
                this.subscriptions.delete(n) && n.unsubscribe();
            };
        }
        applyOptions(e) {
            const n = J(this.options, e || {});
            er(this.options, n), this.updatePolling();
        }
        async setVariables(e) {
            return e = this.getVariablesWithDefaults(e), P(this.variables, e) ? st(this.getCurrentResult()) : (this.options.variables = e, this.hasObservers() ? this._reobserve({
                fetchPolicy: this.options.initialFetchPolicy,
                variables: e
            }, {
                newNetworkStatus: E.setVariables
            }) : st(this.getCurrentResult()));
        }
        updateQuery(e) {
            const { queryManager: n } = this, { result: i, complete: r } = this.getCacheDiff({
                optimistic: !1
            }), s = e(i, {
                variables: this.variables,
                complete: !!r,
                previousData: i
            });
            s && (this.cache.writeQuery({
                query: this.options.query,
                data: s,
                variables: this.variables
            }), n.broadcastQueries());
        }
        startPolling(e) {
            this.options.pollInterval = e, this.updatePolling();
        }
        stopPolling() {
            this.options.pollInterval = 0, this.updatePolling();
        }
        applyNextFetchPolicy(e, n) {
            if (n.nextFetchPolicy) {
                const { fetchPolicy: i = "cache-first", initialFetchPolicy: r = i } = n;
                i === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy.call(n, i, {
                    reason: e,
                    options: n,
                    observable: this,
                    initialFetchPolicy: r
                }) : e === "variables-changed" ? n.fetchPolicy = r : n.fetchPolicy = n.nextFetchPolicy);
            }
            return n.fetchPolicy;
        }
        fetch(e, n, i, r) {
            const s = this.options.fetchPolicy;
            e.context ??= {};
            let a = !1;
            const o = ()=>{
                a = !0;
            }, c = (m)=>new A((v)=>{
                    try {
                        return m.subscribe({
                            next (k) {
                                a = !0, v.next(k);
                            },
                            error: (k)=>v.error(k),
                            complete: ()=>v.complete()
                        });
                    } finally{
                        a || (h.override = n, this.input.next({
                            kind: "N",
                            source: "newNetworkStatus",
                            value: {
                                resetError: !0
                            },
                            query: d,
                            variables: f,
                            meta: {
                                shouldEmit: 3,
                                fetchPolicy: s
                            }
                        }));
                    }
                });
            let { observable: l, fromLink: u } = this.queryManager.fetchObservableWithInfo(e, {
                networkStatus: n,
                query: i,
                onCacheHit: o,
                fetchQueryOperator: c,
                observableQuery: this
            });
            const { query: d, variables: f } = this, h = {
                abort: ()=>{
                    y.unsubscribe();
                },
                query: d,
                variables: f
            };
            this.activeOperations.add(h);
            let p = n == E.refetch || n == E.setVariables;
            l = l.pipe(r, lt());
            const y = l.pipe(ut({
                next: (m)=>{
                    m.source === "newNetworkStatus" || m.kind === "N" && m.value.loading ? h.override = n : delete h.override;
                },
                finalize: ()=>this.activeOperations.delete(h)
            })).subscribe({
                next: (m)=>{
                    const v = {};
                    p && m.kind === "N" && "loading" in m.value && !m.value.loading && (p = !1, v.shouldEmit = 1), this.input.next({
                        ...m,
                        query: d,
                        variables: f,
                        meta: v
                    });
                }
            });
            return {
                fromLink: u,
                subscription: y,
                observable: l
            };
        }
        didWarnCacheOnlyPolling = !1;
        updatePolling() {
            if (this.queryManager.ssrMode) return;
            const { pollingInfo: e, options: { fetchPolicy: n, pollInterval: i } } = this, r = ()=>{
                const { options: c } = this;
                return !c.pollInterval || !this.hasObservers() || c.fetchPolicy === "cache-only" || c.fetchPolicy === "standby";
            };
            if (r()) {
                this.cancelPolling();
                return;
            }
            if (e?.interval === i) return;
            const s = e || (this.pollingInfo = {});
            s.interval = i;
            const a = ()=>{
                if (r()) return this.cancelPolling();
                this.pollingInfo && (!It(this.networkStatus) && !this.options.skipPollAttempt?.() ? this._reobserve({
                    fetchPolicy: this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
                }, {
                    newNetworkStatus: E.poll
                }).then(o, o) : o());
            }, o = ()=>{
                const c = this.pollingInfo;
                c && (clearTimeout(c.timeout), c.timeout = setTimeout(a, c.interval));
            };
            o();
        }
        cancelPolling() {
            this.pollingInfo && (clearTimeout(this.pollingInfo.timeout), delete this.pollingInfo);
        }
        reobserve(e) {
            return this._reobserve(e);
        }
        _reobserve(e, n) {
            this.isTornDown = !1;
            let { newNetworkStatus: i } = n || {};
            this.queryManager.obsQueries.add(this);
            const r = i === E.refetch || i === E.poll, s = this.variables, a = this.options.fetchPolicy, o = J(this.options, e || {});
            this.variablesUnknown &&= o.fetchPolicy === "standby";
            const c = r ? o : er(this.options, o), l = this.transformDocument(c.query);
            this.lastQuery = l, e && "variables" in e && (c.variables = this.getVariablesWithDefaults(e.variables)), r || (this.updatePolling(), e && e.variables && !P(e.variables, s) && c.fetchPolicy !== "standby" && (c.fetchPolicy === a || typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), i === void 0 && (i = E.setVariables)));
            const u = this.networkStatus;
            i || (i = E.loading, u !== E.loading && e?.variables && !P(e.variables, s) && (i = E.setVariables), c.fetchPolicy === "standby" && (i = E.ready)), c.fetchPolicy === "standby" && this.cancelPolling(), this.resubscribeCache();
            const { promise: d, operator: f } = tr(c.fetchPolicy === "standby" ? {
                data: void 0
            } : void 0), { subscription: h, observable: p, fromLink: y } = this.fetch(c, i, l, f);
            !r && (y || !this.linkSubscription) && (this.linkSubscription && this.linkSubscription.unsubscribe(), this.linkSubscription = h);
            const m = Object.assign(Ni(d.then((v)=>st(this.maskResult(v))).finally(()=>{
                !this.hasObservers() && this.activeOperations.size === 0 && this.tearDownQuery();
            })), {
                retain: ()=>{
                    const v = p.subscribe({}), k = ()=>v.unsubscribe();
                    return d.then(k, k), m;
                }
            });
            return m;
        }
        hasObservers() {
            return this.subject.observed;
        }
        stop() {
            this.subject.complete(), this.initializeObservablesQueue(), this.tearDownQuery();
        }
        tearDownQuery() {
            this.isTornDown || (this.resetNotifications(), this.unsubscribeFromCache?.(), this.linkSubscription && (this.linkSubscription.unsubscribe(), delete this.linkSubscription), this.stopPolling(), this.subscriptions.forEach((e)=>e.unsubscribe()), this.subscriptions.clear(), this.queryManager.obsQueries.delete(this), this.isTornDown = !0, this.abortActiveOperations(), this._lastWrite = void 0);
        }
        transformDocument(e) {
            return this.queryManager.transform(e);
        }
        maskResult(e) {
            const n = this.queryManager.maskOperation({
                document: this.query,
                data: e.data,
                fetchPolicy: this.options.fetchPolicy,
                cause: this
            });
            return n === e.data ? e : {
                ...e,
                data: n
            };
        }
        dirty = !1;
        notifyTimeout;
        resetNotifications() {
            this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0), this.dirty = !1;
        }
        scheduleNotify() {
            this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(()=>this.notify(!0), 0)));
        }
        notify(e = !1) {
            if (!e) {
                const i = this.queryManager.getDocumentInfo(this.query);
                if (i.hasClientExports || i.hasForcedResolvers) return;
            }
            const { dirty: n } = this;
            if (this.resetNotifications(), n && (this.options.fetchPolicy === "cache-only" || this.options.fetchPolicy === "cache-and-network" || !this.activeOperations.size)) {
                const i = this.getCacheDiff();
                P(i.result, this.getCacheDiff({
                    optimistic: !1
                }).result) ? this.reobserveCacheFirst() : this.input.next({
                    kind: "N",
                    value: {
                        data: i.result,
                        dataState: i.complete ? "complete" : i.result ? "partial" : "empty",
                        networkStatus: E.ready,
                        loading: !1,
                        error: void 0,
                        partial: !i.complete
                    },
                    source: "cache",
                    query: this.query,
                    variables: this.variables,
                    meta: {}
                });
            }
        }
        activeOperations = new Set;
        pushOperation(e) {
            let n = !1;
            const { query: i, variables: r } = this, s = ()=>{
                this.activeOperations.delete(a);
            }, a = {
                override: e,
                abort: ()=>{
                    n = !0, s();
                },
                query: i,
                variables: r
            };
            return this.activeOperations.add(a), {
                finalize: s,
                pushNotification: (o, c)=>{
                    n || this.input.next({
                        ...o,
                        query: i,
                        variables: r,
                        meta: {
                            ...c
                        }
                    });
                }
            };
        }
        calculateNetworkStatus(e) {
            return e === E.streaming ? e : Array.from(this.activeOperations.values()).reverse().find((i)=>tt(i, this) && i.override !== void 0)?.override ?? e;
        }
        abortActiveOperations() {
            this.activeOperations.forEach((e)=>e.abort());
        }
        reset() {
            const e = this.options.fetchPolicy === "cache-only";
            this.setResult(e ? ln : Pe, {
                shouldEmit: e ? 1 : 2
            }), this.abortActiveOperations();
        }
        setResult(e, n) {
            this.input.next({
                source: "setResult",
                kind: "N",
                value: e,
                query: this.query,
                variables: this.variables,
                meta: {
                    ...n
                }
            });
        }
        operator = Nn((e)=>{
            const { query: n, variables: i, meta: r } = e;
            if (e.source === "setResult") return {
                query: n,
                variables: i,
                result: e.value,
                meta: r
            };
            if (e.kind === "C" || !tt(e, this)) return;
            let s;
            const a = this.subject.getValue();
            if (e.source === "cache") {
                if (s = e.value, s.networkStatus === E.ready && s.partial && (!this.options.returnPartialData || a.result.networkStatus === E.error) && this.options.fetchPolicy !== "cache-only") return;
            } else if (e.source === "network") this.waitForNetworkResult && (this.waitForNetworkResult = !1, this.resubscribeCache()), s = e.kind === "E" ? {
                ...tt(a, e) ? a.result : {
                    data: void 0,
                    dataState: "empty",
                    partial: !0
                },
                error: e.error,
                networkStatus: E.error,
                loading: !1
            } : e.value, e.kind === "E" && s.dataState === "streaming" && (s.dataState = "complete"), s.error && (r.shouldEmit = 1);
            else if (e.source === "newNetworkStatus") {
                const o = tt(a, e) ? a.result : this.getInitialResult(r.fetchPolicy), { resetError: c } = e.value, l = c ? void 0 : o.error, u = l ? E.error : E.ready;
                s = {
                    ...o,
                    error: l,
                    networkStatus: u
                };
            }
            return F(s), s.error || delete s.error, s.networkStatus = this.calculateNetworkStatus(s.networkStatus), s.loading = It(s.networkStatus), s = this.maskResult(s), a.result.data !== void 0 && s.data !== a.result.data && P(s.data, a.result.data) && (s.data = a.result.data), {
                query: n,
                variables: i,
                result: s,
                meta: r
            };
        });
        reobserveCacheFirst() {
            const { fetchPolicy: e, nextFetchPolicy: n } = this.options;
            e === "cache-and-network" || e === "network-only" ? this.reobserve({
                fetchPolicy: "cache-first",
                nextFetchPolicy (i, r) {
                    return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, r) : e;
                }
            }) : this.reobserve();
        }
        getVariablesWithDefaults(e) {
            return this.queryManager.getVariables(this.query, e);
        }
    }
    function tt(t, e) {
        return !!(t && e && t.query === e.query && P(t.variables, e.variables));
    }
    function tr(t) {
        let e = t, n, i;
        const r = new Promise((a, o)=>{
            n = a, i = o;
        }), s = ut({
            next (a) {
                if (a.kind === "E") return i(a.error);
                a.kind === "N" && a.source !== "newNetworkStatus" && !a.value.loading && (e = a.value);
            },
            finalize: ()=>{
                if (e) n(e);
                else {
                    const a = "The operation was aborted.", o = "AbortError";
                    i(typeof DOMException < "u" ? new DOMException(a, o) : Object.assign(new Error(a), {
                        name: o
                    }));
                }
            }
        });
        return {
            promise: r,
            operator: s
        };
    }
    const nr = {}, qe = new WeakMap;
    function dn(t, e) {
        const n = t[e];
        typeof n == "function" && (t[e] = function() {
            return qe.set(t, (qe.get(t) + 1) % 1e15), n.apply(this, arguments);
        });
    }
    const ir = new WeakMap;
    class fn {
        cache;
        queryManager;
        id;
        observableQuery;
        incremental;
        constructor(e, n){
            const i = this.cache = e.cache, r = (ir.get(e) || 0) + 1;
            ir.set(e, r), this.id = r + "", this.observableQuery = n, this.queryManager = e, qe.has(i) || (qe.set(i, 0), dn(i, "evict"), dn(i, "modify"), dn(i, "reset"));
        }
        _lastWrite;
        get lastWrite() {
            return (this.observableQuery || this)._lastWrite;
        }
        set lastWrite(e) {
            (this.observableQuery || this)._lastWrite = e;
        }
        resetLastWrite() {
            this.lastWrite = void 0;
        }
        shouldWrite(e, n) {
            const { lastWrite: i } = this;
            return !(i && i.dmCount === qe.get(this.cache) && P(n, i.variables) && P(e.data, i.result.data) && e.extensions?.[we] === i.result.extensions?.[we]);
        }
        get hasNext() {
            return this.incremental ? this.incremental.hasNext : !1;
        }
        maybeHandleIncrementalResult(e, n, i) {
            const { incrementalHandler: r } = this.queryManager;
            return r.isIncrementalResult(n) ? (this.incremental ||= r.startRequest({
                query: i
            }), this.incremental.handle(e, n)) : n;
        }
        markQueryResult(e, { document: n, variables: i, errorPolicy: r, cacheWriteBehavior: s }) {
            const a = {
                query: n,
                variables: i,
                returnPartialData: !0,
                optimistic: !0
            };
            this.observableQuery?.resetNotifications();
            const o = s === 0, c = o ? void 0 : this.cache.diff(a);
            let l = this.maybeHandleIncrementalResult(c?.result, e, n);
            return o || (hn(l, r) ? this.cache.batch({
                onWatchUpdated: (u, d)=>{
                    u.watcher === this.observableQuery && (u.lastOwnDiff = d);
                },
                update: (u)=>{
                    if (this.shouldWrite(l, i)) u.writeQuery({
                        query: n,
                        data: l.data,
                        variables: i,
                        overwrite: s === 1,
                        extensions: l.extensions
                    }), this.lastWrite = {
                        result: l,
                        variables: i,
                        dmCount: qe.get(this.cache)
                    };
                    else if (c && c.complete) {
                        l = {
                            ...l,
                            data: c.result
                        };
                        return;
                    }
                    const d = u.diff(a);
                    d.complete && (l = {
                        ...l,
                        data: d.result
                    });
                }
            }) : this.lastWrite = void 0), l;
        }
        markMutationResult(e, n, i = this.cache) {
            const r = [], s = n.cacheWriteBehavior === 0;
            let a = this.maybeHandleIncrementalResult(s ? void 0 : i.diff({
                id: "ROOT_MUTATION",
                query: this.queryManager.getDocumentInfo(n.document).asQuery,
                variables: n.variables,
                optimistic: !1,
                returnPartialData: !0
            }).result, e, n.document);
            if (n.errorPolicy === "ignore" && (a = {
                ...a,
                errors: []
            }), Me(a) && n.errorPolicy === "none") return Promise.resolve(a);
            const o = ()=>({
                    ...a,
                    dataState: this.hasNext ? "streaming" : "complete"
                });
            if (!s && hn(a, n.errorPolicy)) {
                r.push({
                    result: a.data,
                    dataId: "ROOT_MUTATION",
                    query: n.document,
                    variables: n.variables,
                    extensions: a.extensions
                });
                const { updateQueries: l } = n;
                l && this.queryManager.getObservableQueries("all").forEach((u)=>{
                    const d = u && u.queryName;
                    if (!d || !Object.hasOwnProperty.call(l, d)) return;
                    const f = l[d], { query: h, variables: p } = u, { result: y, complete: m } = u.getCacheDiff({
                        optimistic: !1
                    });
                    if (m && y) {
                        const v = f(y, {
                            mutationResult: o(),
                            queryName: h && He(h) || void 0,
                            queryVariables: p
                        });
                        v && r.push({
                            result: v,
                            dataId: "ROOT_QUERY",
                            query: h,
                            variables: p
                        });
                    }
                });
            }
            let c = n.refetchQueries;
            if (typeof c == "function" && (c = c(o())), r.length > 0 || (c || "").length > 0 || n.update || n.onQueryUpdated || n.removeOptimistic) {
                const l = [];
                if (this.queryManager.refetchQueries({
                    updateCache: (u)=>{
                        s || r.forEach((f)=>u.write(f));
                        const { update: d } = n;
                        if (d) {
                            if (!s) {
                                const f = u.diff({
                                    id: "ROOT_MUTATION",
                                    query: this.queryManager.getDocumentInfo(n.document).asQuery,
                                    variables: n.variables,
                                    optimistic: !1,
                                    returnPartialData: !0
                                });
                                f.complete && (a = {
                                    ...a,
                                    data: f.result
                                });
                            }
                            this.hasNext || d(u, a, {
                                context: n.context,
                                variables: n.variables
                            });
                        }
                        !s && !n.keepRootFields && !this.hasNext && u.modify({
                            id: "ROOT_MUTATION",
                            fields (f, { fieldName: h, DELETE: p }) {
                                return h === "__typename" ? f : p;
                            }
                        });
                    },
                    include: c,
                    optimistic: !1,
                    removeOptimistic: n.removeOptimistic,
                    onQueryUpdated: n.onQueryUpdated || null
                }).forEach((u)=>l.push(u)), n.awaitRefetchQueries || n.onQueryUpdated) return Promise.all(l).then(()=>a);
            }
            return Promise.resolve(a);
        }
        markMutationOptimistic(e, n) {
            const i = typeof e == "function" ? e(n.variables, {
                IGNORE: nr
            }) : e;
            return i === nr ? !1 : (this.cache.recordOptimisticTransaction((r)=>{
                try {
                    this.markMutationResult({
                        data: i
                    }, n, r);
                } catch (s) {
                    F.error(s);
                }
            }, this.id), !0);
        }
        markSubscriptionResult(e, { document: n, variables: i, errorPolicy: r, cacheWriteBehavior: s }) {
            s !== 0 && (hn(e, r) && this.cache.write({
                query: n,
                result: e.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: i,
                extensions: e.extensions
            }), this.queryManager.broadcastQueries());
        }
    }
    function hn(t, e = "none") {
        const n = e === "ignore" || e === "all";
        let i = !Me(t);
        return !i && n && t.data && (i = !0), i;
    }
    class $c {
        defaultOptions;
        client;
        clientOptions;
        assumeImmutableResults;
        documentTransform;
        ssrMode;
        defaultContext;
        dataMasking;
        incrementalHandler;
        localState;
        queryDeduplication;
        prioritizeCacheValues = !1;
        onBroadcast;
        mutationStore;
        obsQueries = new Set;
        fetchCancelFns = new Map;
        constructor(e){
            const n = new he((r)=>this.cache.transformDocument(r), {
                cache: !1
            });
            this.client = e.client, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientOptions = e.clientOptions, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking, this.localState = e.localState, this.incrementalHandler = e.incrementalHandler;
            const i = e.documentTransform;
            this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || {}, (this.onBroadcast = e.onBroadcast) && (this.mutationStore = {});
        }
        get link() {
            return this.client.link;
        }
        get cache() {
            return this.client.cache;
        }
        stop() {
            this.obsQueries.forEach((e)=>e.stop()), this.cancelPendingFetches(ne(89));
        }
        cancelPendingFetches(e) {
            this.fetchCancelFns.forEach((n)=>n(e)), this.fetchCancelFns.clear();
        }
        async mutate({ mutation: e, variables: n, optimisticResponse: i, updateQueries: r, refetchQueries: s = [], awaitRefetchQueries: a = !1, update: o, onQueryUpdated: c, fetchPolicy: l, errorPolicy: u, keepRootFields: d, context: f }) {
            const h = new fn(this);
            e = this.cache.transformForLink(this.transform(e));
            const { hasClientExports: p } = this.getDocumentInfo(e);
            n = this.getVariables(e, n), p && (n = await this.localState.getExportedVariables({
                client: this.client,
                document: e,
                variables: n,
                context: f
            }));
            const y = this.mutationStore && (this.mutationStore[h.id] = {
                mutation: e,
                variables: n,
                loading: !0,
                error: null
            }), m = i && h.markMutationOptimistic(i, {
                document: e,
                variables: n,
                cacheWriteBehavior: l === "no-cache" ? 0 : 2,
                errorPolicy: u,
                context: f,
                updateQueries: r,
                update: o,
                keepRootFields: d
            });
            return this.broadcastQueries(), new Promise((v, k)=>{
                const b = {};
                return this.getObservableFromLink(e, {
                    ...f,
                    optimisticResponse: m ? i : void 0
                }, n, l, {}, !1).observable.pipe(rr(), be((S)=>{
                    const w = {
                        ...S
                    };
                    return oe(h.markMutationResult(w, {
                        document: e,
                        variables: n,
                        cacheWriteBehavior: l === "no-cache" ? 0 : 2,
                        errorPolicy: u,
                        context: f,
                        update: o,
                        updateQueries: r,
                        awaitRefetchQueries: a,
                        refetchQueries: s,
                        removeOptimistic: m ? h.id : void 0,
                        onQueryUpdated: c,
                        keepRootFields: d
                    }));
                })).pipe(I((S)=>{
                    if (Me(S) && u === "none") throw new pe(pn(S));
                    return y && (y.loading = !1, y.error = null), S;
                })).subscribe({
                    next: (S)=>{
                        if (this.broadcastQueries(), !h.hasNext) {
                            const w = {
                                data: this.maskOperation({
                                    document: e,
                                    data: S.data,
                                    fetchPolicy: l,
                                    cause: b
                                })
                            };
                            Me(S) && (w.error = new pe(S)), Object.keys(S.extensions || {}).length && (w.extensions = S.extensions), v(w);
                        }
                    },
                    error: (S)=>{
                        if (y && (y.loading = !1, y.error = S), m && this.cache.removeOptimistic(h.id), this.broadcastQueries(), u === "ignore") return v({
                            data: void 0
                        });
                        if (u === "all") return v({
                            data: void 0,
                            error: S
                        });
                        k(S);
                    }
                });
            });
        }
        fetchQuery(e, n) {
            return Se(e.query, Fe.QUERY), (async ()=>Ya(this.fetchObservableWithInfo(e, {
                    networkStatus: n
                }).observable.pipe(Nn((i)=>{
                    switch(i.kind){
                        case "E":
                            throw i.error;
                        case "N":
                            if (i.source !== "newNetworkStatus") return st(i.value);
                    }
                })), {
                    defaultValue: {
                        data: void 0
                    }
                }))();
        }
        transform(e) {
            return this.documentTransform.transformDocument(e);
        }
        transformCache = new Qn(ye["queryManager.getDocumentInfo"] || 2e3);
        getDocumentInfo(e) {
            const { transformCache: n } = this;
            if (!n.has(e)) {
                const r = ve(e), s = {
                    hasClientExports: rt([
                        "client",
                        "export"
                    ], e, !0),
                    hasForcedResolvers: xo(e),
                    hasNonreactiveDirective: rt([
                        "nonreactive"
                    ], e),
                    hasIncrementalDirective: rt([
                        "defer"
                    ], e),
                    nonReactiveQuery: zc(e),
                    clientQuery: rt([
                        "client"
                    ], e) ? e : null,
                    serverQuery: Mo([
                        {
                            name: "client",
                            remove: !0
                        },
                        {
                            name: "connection"
                        },
                        {
                            name: "nonreactive"
                        },
                        {
                            name: "unmask"
                        }
                    ], e),
                    operationType: r?.operation,
                    defaultVars: $n(r),
                    asQuery: {
                        ...e,
                        definitions: e.definitions.map((a)=>a.kind === "OperationDefinition" && a.operation !== "query" ? {
                                ...a,
                                operation: "query"
                            } : a)
                    }
                };
                n.set(e, s);
            }
            const i = n.get(e);
            if (i.violation) throw i.violation;
            return i;
        }
        getVariables(e, n) {
            const i = this.getDocumentInfo(e).defaultVars, r = Object.entries(n ?? {}).map(([s, a])=>[
                    s,
                    a === void 0 ? i[s] : a
                ]);
            return {
                ...i,
                ...Object.fromEntries(r)
            };
        }
        watchQuery(e) {
            Se(e.query, Fe.QUERY);
            const n = this.transform(e.query);
            return e = {
                ...e,
                variables: this.getVariables(n, e.variables)
            }, typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !0), new un({
                queryManager: this,
                options: e,
                transformedQuery: n
            });
        }
        query(e) {
            const n = this.transform(e.query);
            return this.fetchQuery({
                ...e,
                query: n
            }).then((i)=>({
                    ...i,
                    data: this.maskOperation({
                        document: n,
                        data: i?.data,
                        fetchPolicy: e.fetchPolicy
                    })
                }));
        }
        clearStore(e = {
            discardWatches: !0
        }) {
            return this.cancelPendingFetches(ne(91)), this.obsQueries.forEach((n)=>{
                n.reset();
            }), this.mutationStore && (this.mutationStore = {}), this.cache.reset(e);
        }
        getObservableQueries(e = "active") {
            const n = new Set, i = new Map, r = new Map, s = new Set;
            return Array.isArray(e) && e.forEach((a)=>{
                if (typeof a == "string") i.set(a, a), r.set(a, !1);
                else if (Ro(a)) {
                    const o = De(this.transform(a));
                    i.set(o, He(a)), r.set(o, !1);
                } else H(a) && a.query && s.add(a);
            }), this.obsQueries.forEach((a)=>{
                const o = De(this.transform(a.options.query));
                if (e === "all") {
                    n.add(a);
                    return;
                }
                const { queryName: c, options: { fetchPolicy: l } } = a;
                e === "active" && l === "standby" || (e === "active" || c && r.has(c) || o && r.has(o)) && (n.add(a), c && r.set(c, !0), o && r.set(o, !0));
            }), s.size && s.forEach((a)=>{
                const o = new un({
                    queryManager: this,
                    options: {
                        ...Dt(this.defaultOptions.watchQuery, a),
                        fetchPolicy: "network-only"
                    }
                });
                n.add(o);
            }), n;
        }
        refetchObservableQueries(e = !1) {
            const n = [];
            return this.getObservableQueries(e ? "all" : "active").forEach((i)=>{
                const { fetchPolicy: r } = i.options;
                (e || r !== "standby") && r !== "cache-only" && n.push(i.refetch());
            }), this.broadcastQueries(), Promise.all(n);
        }
        startGraphQLSubscription(e) {
            let { query: n, variables: i } = e;
            const { fetchPolicy: r = "cache-first", errorPolicy: s = "none", context: a = {}, extensions: o = {} } = e;
            Se(n, Fe.SUBSCRIPTION), n = this.transform(n), i = this.getVariables(n, i);
            let c;
            const l = (this.getDocumentInfo(n).hasClientExports ? oe(this.localState.getExportedVariables({
                client: this.client,
                document: n,
                variables: i,
                context: a
            })) : Ne(i)).pipe(be((u)=>{
                const { observable: d, restart: f } = this.getObservableFromLink(n, a, u, r, o), h = new fn(this);
                return c = f, d.pipe(I((p)=>{
                    h.markSubscriptionResult(p, {
                        document: n,
                        variables: u,
                        errorPolicy: s,
                        cacheWriteBehavior: r === "no-cache" ? 0 : 2
                    });
                    const y = {
                        data: p.data ?? void 0
                    };
                    return Me(p) ? y.error = new pe(p) : Fs(p) && (y.error = p.extensions[pt], delete p.extensions[pt]), p.extensions && Object.keys(p.extensions).length && (y.extensions = p.extensions), y.error && s === "none" && (y.data = void 0), s === "ignore" && delete y.error, y;
                }), Ct((p)=>Ne(s === "ignore" ? {
                        data: void 0
                    } : {
                        data: void 0,
                        error: p
                    })), W((p)=>!!(p.data || p.error)));
            }));
            return Object.assign(l, {
                restart: ()=>c?.()
            });
        }
        broadcastQueries() {
            this.onBroadcast && this.onBroadcast(), this.obsQueries.forEach((e)=>e.notify());
        }
        inFlightLinkObservables = new de(!1);
        getObservableFromLink(e, n, i, r, s, a = n?.queryDeduplication ?? this.queryDeduplication) {
            let o = {};
            const { serverQuery: c, clientQuery: l, operationType: u, hasIncrementalDirective: d } = this.getDocumentInfo(e), f = He(e), h = {
                client: this.client
            };
            if (c) {
                const { inFlightLinkObservables: p, link: y } = this;
                try {
                    let v = function(k) {
                        return new A((b)=>{
                            function S() {
                                return k.subscribe({
                                    next: b.next.bind(b),
                                    complete: b.complete.bind(b),
                                    error: b.error.bind(b)
                                });
                            }
                            let w = S();
                            return o.restart ||= ()=>{
                                w.unsubscribe(), w = S();
                            }, ()=>{
                                w.unsubscribe(), o.restart = void 0;
                            };
                        });
                    };
                    const m = this.incrementalHandler.prepareRequest({
                        query: c,
                        variables: i,
                        context: {
                            ...this.defaultContext,
                            ...n,
                            queryDeduplication: a
                        },
                        extensions: s
                    });
                    if (n = m.context, a) {
                        const k = De(c), b = me(i);
                        o = p.lookup(k, b), o.observable || (o.observable = On(y, m, h).pipe(v, ao(()=>{
                            p.peek(k, b) === o && p.remove(k, b);
                        }), u === Fe.SUBSCRIPTION ? lt() : jn({
                            refCount: !0
                        })));
                    } else o.observable = On(y, m, h).pipe(v);
                } catch (m) {
                    o.observable = jr(()=>m);
                }
            } else o.observable = Ne({
                data: {}
            });
            if (l) {
                const { operation: p } = ve(e);
                F(!d, 96, p[0].toUpperCase() + p.slice(1), f ?? "(anonymous)"), o.observable = o.observable.pipe(be((y)=>oe(this.localState.execute({
                        client: this.client,
                        document: l,
                        remoteResult: y,
                        context: n,
                        variables: i,
                        fetchPolicy: r
                    }))));
            }
            return {
                restart: ()=>o.restart?.(),
                observable: o.observable.pipe(Ct((p)=>{
                    throw p = Os(p), Qc(p), p;
                }))
            };
        }
        getResultsFromLink(e, { queryInfo: n, cacheWriteBehavior: i, observableQuery: r, exposeExtensions: s }) {
            const { errorPolicy: a } = e, o = this.cache.transformForLink(e.query);
            return this.getObservableFromLink(o, e.context, e.variables, e.fetchPolicy).observable.pipe(I((c)=>{
                const l = n.markQueryResult(c, {
                    ...e,
                    document: o,
                    cacheWriteBehavior: i
                }), u = Me(l);
                if (u && a === "none") throw n.resetLastWrite(), r?.resetNotifications(), new pe(pn(l));
                const d = {
                    data: l.data,
                    ...n.hasNext ? {
                        loading: !0,
                        networkStatus: E.streaming,
                        dataState: "streaming",
                        partial: !0
                    } : {
                        dataState: l.data ? "complete" : "empty",
                        loading: !1,
                        networkStatus: E.ready,
                        partial: !l.data
                    }
                };
                return s && "extensions" in l && (d[Xr] = l.extensions), u && (a === "none" && (d.data = void 0, d.dataState = "empty"), a !== "ignore" && (d.error = new pe(pn(l)), d.dataState !== "streaming" && (d.networkStatus = E.error))), d;
            }), Ct((c)=>{
                if (a === "none") throw n.resetLastWrite(), r?.resetNotifications(), c;
                const l = {
                    data: void 0,
                    dataState: "empty",
                    loading: !1,
                    networkStatus: E.ready,
                    partial: !0
                };
                return a !== "ignore" && (l.error = c, l.networkStatus = E.error), Ne(l);
            }));
        }
        fetchObservableWithInfo(e, { networkStatus: n = E.loading, query: i = e.query, fetchQueryOperator: r = (c)=>c, onCacheHit: s = ()=>{}, observableQuery: a, exposeExtensions: o }) {
            const c = this.getVariables(i, e.variables);
            let { fetchPolicy: l = "cache-first", errorPolicy: u = "none", returnPartialData: d = !1, notifyOnNetworkStatusChange: f = !0, context: h = {} } = e;
            this.prioritizeCacheValues && (l === "network-only" || l === "cache-and-network") && (l = "cache-first");
            const p = Object.assign({}, e, {
                query: i,
                variables: c,
                fetchPolicy: l,
                errorPolicy: u,
                returnPartialData: d,
                notifyOnNetworkStatusChange: f,
                context: h
            }), y = new fn(this, a), m = (w)=>{
                p.variables = w;
                const q = l === "no-cache" ? 0 : n === E.refetch && p.refetchWritePolicy !== "merge" ? 1 : 2, B = this.fetchQueryByPolicy(p, {
                    queryInfo: y,
                    cacheWriteBehavior: q,
                    onCacheHit: s,
                    observableQuery: a,
                    exposeExtensions: o
                });
                return B.observable = B.observable.pipe(r), p.fetchPolicy !== "standby" && a?.applyNextFetchPolicy("after-fetch", e), B;
            }, v = ()=>{
                this.fetchCancelFns.delete(y.id);
            };
            this.fetchCancelFns.set(y.id, (w)=>{
                k.next({
                    kind: "E",
                    error: w,
                    source: "network"
                });
            });
            const k = new Xe;
            let b, S;
            if (this.getDocumentInfo(p.query).hasClientExports) b = oe(this.localState.getExportedVariables({
                client: this.client,
                document: p.query,
                variables: p.variables,
                context: p.context
            })).pipe(be((w)=>m(w).observable)), S = !0;
            else {
                const w = m(p.variables);
                S = w.fromLink, b = w.observable;
            }
            return {
                observable: new A((w)=>{
                    w.add(v), b.subscribe(w), k.subscribe(w);
                }).pipe(lt()),
                fromLink: S
            };
        }
        refetchQueries({ updateCache: e, include: n, optimistic: i = !1, removeOptimistic: r = i ? Ur("refetchQueries") : void 0, onQueryUpdated: s }) {
            const a = new Map;
            n && this.getObservableQueries(n).forEach((c)=>{
                if (c.options.fetchPolicy === "cache-only" || c.variablesUnknown) return;
                const l = c.getCurrentResult();
                a.set(c, {
                    oq: c,
                    lastDiff: {
                        result: l?.data,
                        complete: !l?.partial
                    }
                });
            });
            const o = new Map;
            if (e) {
                const c = new Set;
                this.cache.batch({
                    update: e,
                    optimistic: i && r || !1,
                    removeOptimistic: r,
                    onWatchUpdated (l, u, d) {
                        const f = l.watcher;
                        if (f instanceof un && !c.has(f)) {
                            if (c.add(f), s) {
                                a.delete(f);
                                let h = s(f, u, d);
                                return h === !0 && (h = f.refetch().retain()), h !== !1 && o.set(f, h), h;
                            }
                            s !== null && f.options.fetchPolicy !== "cache-only" && a.set(f, {
                                oq: f,
                                lastDiff: d,
                                diff: u
                            });
                        }
                    }
                });
            }
            return a.size && a.forEach(({ oq: c, lastDiff: l, diff: u })=>{
                let d;
                s && (u || (u = c.getCacheDiff()), d = s(c, u, l)), (!s || d === !0) && (d = c.refetch().retain()), d !== !1 && o.set(c, d);
            }), r && this.cache.removeOptimistic(r), o;
        }
        noCacheWarningsByCause = new WeakSet;
        maskOperation(e) {
            const { document: n, data: i } = e;
            return this.dataMasking ? Cc(i, n, this.cache) : i;
        }
        maskFragment(e) {
            const { data: n, fragment: i, fragmentName: r } = e;
            return this.dataMasking ? Oc(n, i, this.cache, r) : n;
        }
        fetchQueryByPolicy({ query: e, variables: n, fetchPolicy: i, errorPolicy: r, returnPartialData: s, context: a }, { cacheWriteBehavior: o, onCacheHit: c, queryInfo: l, observableQuery: u, exposeExtensions: d }) {
            const f = ()=>this.cache.diff({
                    query: e,
                    variables: n,
                    returnPartialData: !0,
                    optimistic: !0
                }), h = (y, m)=>{
                const v = y.result, k = (S)=>(!y.complete && !s && (S = void 0), {
                        data: S,
                        dataState: y.complete ? "complete" : S ? "partial" : "empty",
                        loading: It(m),
                        networkStatus: m,
                        partial: !y.complete
                    }), b = (S)=>Ne({
                        kind: "N",
                        value: k(S),
                        source: "cache"
                    });
                return (y.complete || s) && this.getDocumentInfo(e).hasForcedResolvers ? (c(), oe(this.localState.execute({
                    client: this.client,
                    document: e,
                    remoteResult: v ? {
                        data: v
                    } : void 0,
                    context: a,
                    variables: n,
                    onlyRunForcedResolvers: !0,
                    returnPartialData: !0,
                    fetchPolicy: i
                }).then((S)=>({
                        kind: "N",
                        value: k(S.data || void 0),
                        source: "cache"
                    })))) : r === "none" && m === E.refetch && y.missing ? b(void 0) : b(v || void 0);
            }, p = ()=>this.getResultsFromLink({
                    query: e,
                    variables: n,
                    context: a,
                    fetchPolicy: i,
                    errorPolicy: r
                }, {
                    cacheWriteBehavior: o,
                    queryInfo: l,
                    observableQuery: u,
                    exposeExtensions: d
                }).pipe(rr(), oo(), I((y)=>({
                        ...y,
                        source: "network"
                    })));
            switch(i){
                default:
                case "cache-first":
                    {
                        const y = f();
                        return y.complete ? {
                            fromLink: !1,
                            observable: h(y, E.ready)
                        } : s ? {
                            fromLink: !0,
                            observable: Kt(h(y, E.loading), p())
                        } : {
                            fromLink: !0,
                            observable: p()
                        };
                    }
                case "cache-and-network":
                    {
                        const y = f();
                        return y.complete || s ? {
                            fromLink: !0,
                            observable: Kt(h(y, E.loading), p())
                        } : {
                            fromLink: !0,
                            observable: p()
                        };
                    }
                case "cache-only":
                    return {
                        fromLink: !1,
                        observable: Kt(h(f(), E.ready))
                    };
                case "network-only":
                    return {
                        fromLink: !0,
                        observable: p()
                    };
                case "no-cache":
                    return {
                        fromLink: !0,
                        observable: p()
                    };
                case "standby":
                    return {
                        fromLink: !1,
                        observable: _e
                    };
            }
        }
    }
    function rr() {
        let t = !1;
        return ut({
            next () {
                t = !0;
            },
            complete () {
                F(t, 100);
            }
        });
    }
    function zc(t) {
        return ce(t, {
            FragmentSpread: (e)=>{
                if (!e.directives?.some((n)=>n.name.value === "unmask")) return {
                    ...e,
                    directives: [
                        ...e.directives || [],
                        {
                            kind: C.DIRECTIVE,
                            name: {
                                kind: C.NAME,
                                value: "nonreactive"
                            }
                        }
                    ]
                };
            }
        });
    }
    function pn(t) {
        if (t.extensions?.[we] == null) return t;
        const { extensions: { [we]: e, ...n }, ...i } = t;
        return Object.keys(n).length > 0 && (i.extensions = n), i;
    }
    class Wc {
        link;
        cache;
        disableNetworkFetches;
        set prioritizeCacheValues(e) {
            this.queryManager.prioritizeCacheValues = e;
        }
        get prioritizeCacheValues() {
            return this.queryManager.prioritizeCacheValues;
        }
        version;
        queryDeduplication;
        defaultOptions;
        devtoolsConfig;
        refetchEventManager;
        queryManager;
        devToolsHookCb;
        resetStoreCallbacks = [];
        clearStoreCallbacks = [];
        constructor(e){
            const { cache: n, documentTransform: i, ssrMode: r = !1, ssrForceFetchDelay: s = 0, queryDeduplication: a = !0, defaultOptions: o, defaultContext: c, assumeImmutableResults: l = n.assumeImmutableResults, localState: u, devtools: d, dataMasking: f, link: h, incrementalHandler: p = new cc, experiments: y = [], refetchEventManager: m } = e;
            this.link = h, this.cache = n, this.queryDeduplication = a, this.defaultOptions = o || {}, this.devtoolsConfig = {
                ...d,
                enabled: d?.enabled ?? Lr
            }, this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.refetchObservableQueries = this.refetchObservableQueries.bind(this), this.version = Bn, this.queryManager = new $c({
                client: this,
                defaultOptions: this.defaultOptions,
                defaultContext: c,
                documentTransform: i,
                queryDeduplication: a,
                ssrMode: r,
                dataMasking: !!f,
                clientOptions: e,
                incrementalHandler: p,
                assumeImmutableResults: l,
                onBroadcast: this.devtoolsConfig.enabled ? ()=>{
                    this.devToolsHookCb && this.devToolsHookCb();
                } : void 0,
                localState: u
            }), this.prioritizeCacheValues = r || s > 0, s && setTimeout(()=>{
                this.prioritizeCacheValues = !1;
            }, s), this.devtoolsConfig.enabled && this.connectToDevTools(), y.forEach((v)=>v.call(this, e)), this.refetchEventManager = m, this.refetchEventManager?.connect(this);
        }
        connectToDevTools() {
            if (typeof window > "u") return;
            const e = window, n = Symbol.for("apollo.devtools");
            (e[n] = e[n] || []).push(this), e.__APOLLO_CLIENT__ = this;
        }
        get documentTransform() {
            return this.queryManager.documentTransform;
        }
        get localState() {
            return this.queryManager.localState;
        }
        set localState(e) {
            this.queryManager.localState = e;
        }
        stop() {
            this.queryManager.stop(), this.refetchEventManager?.disconnect(this);
        }
        watchQuery(e) {
            const { refetchOn: n } = e;
            if (this.defaultOptions.watchQuery) {
                const i = this.defaultOptions.watchQuery.refetchOn;
                let r;
                n && typeof n == "object" && (typeof i == "object" ? r = {
                    ...i,
                    ...n
                } : i != null && (r = (s)=>{
                    const a = n[s.source] ?? i;
                    return typeof a == "function" ? a(s) : a;
                })), e = Dt(this.defaultOptions.watchQuery, e), r && (e.refetchOn = r);
            }
            return this.queryManager.watchQuery(e);
        }
        query = (e)=>(this.defaultOptions.query && (e = Dt(this.defaultOptions.query, e)), this.queryManager.query(e));
        mutate = (e)=>{
            const n = Dt(J({
                fetchPolicy: "network-only",
                errorPolicy: "none"
            }, this.defaultOptions.mutate), e);
            return Se(n.mutation, Fe.MUTATION), this.queryManager.mutate(n);
        };
        subscribe(e) {
            const n = {}, i = this.queryManager.startGraphQLSubscription(e), r = i.pipe(I((s)=>({
                    ...s,
                    data: this.queryManager.maskOperation({
                        document: e.query,
                        data: s.data,
                        fetchPolicy: e.fetchPolicy,
                        cause: n
                    })
                })));
            return Object.assign(r, {
                restart: i.restart
            });
        }
        readQuery(e, n = !!e.optimistic) {
            return this.cache.readQuery({
                ...e,
                query: this.transform(e.query)
            }, n);
        }
        watchFragment(e) {
            const n = this.queryManager.dataMasking;
            return this.cache.watchFragment({
                ...e,
                fragment: this.transform(e.fragment, n)
            });
        }
        readFragment(e, n = !!e.optimistic) {
            return this.cache.readFragment({
                ...e,
                fragment: this.transform(e.fragment)
            }, n);
        }
        writeQuery(e) {
            const n = this.cache.writeQuery(e);
            return e.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }
        writeFragment(e) {
            const n = this.cache.writeFragment(e);
            return e.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }
        __actionHookForDevTools(e) {
            this.devToolsHookCb = e;
        }
        __requestRaw(e) {
            return On(this.link, e, {
                client: this
            });
        }
        resetStore() {
            return Promise.resolve().then(()=>this.queryManager.clearStore({
                    discardWatches: !1
                })).then(()=>Promise.all(this.resetStoreCallbacks.map((e)=>e()))).then(()=>this.refetchObservableQueries());
        }
        clearStore() {
            return Promise.resolve().then(()=>this.queryManager.clearStore({
                    discardWatches: !0
                })).then(()=>Promise.all(this.clearStoreCallbacks.map((e)=>e())));
        }
        onResetStore(e) {
            return this.resetStoreCallbacks.push(e), ()=>{
                this.resetStoreCallbacks = this.resetStoreCallbacks.filter((n)=>n !== e);
            };
        }
        onClearStore(e) {
            return this.clearStoreCallbacks.push(e), ()=>{
                this.clearStoreCallbacks = this.clearStoreCallbacks.filter((n)=>n !== e);
            };
        }
        reFetchObservableQueries;
        refetchObservableQueries(e) {
            return this.queryManager.refetchObservableQueries(e);
        }
        refetchQueries(e) {
            const n = this.queryManager.refetchQueries(e), i = [], r = [];
            n.forEach((a, o)=>{
                i.push(o), r.push(a);
            });
            const s = Promise.all(r);
            return s.queries = i, s.results = r, s.catch((a)=>{}), s;
        }
        getObservableQueries(e = "active") {
            return this.queryManager.getObservableQueries(e);
        }
        extract(e) {
            return this.cache.extract(e);
        }
        restore(e) {
            return this.cache.restore(e);
        }
        setLink(e) {
            this.link = e;
        }
        get defaultContext() {
            return this.queryManager.defaultContext;
        }
        maskedFragmentTransform = new he(jo);
        transform(e, n = !1) {
            const i = this.queryManager.transform(e);
            return n ? this.maskedFragmentTransform.transformDocument(i) : i;
        }
    }
    const { hasOwnProperty: sr } = Object.prototype;
    function Hc(t) {
        return H(t) && "payload" in t;
    }
    async function* Yc(t) {
        const e = new TextDecoder("utf-8"), i = t.headers?.get("content-type")?.match(/;\s*boundary=(?:'([^']+)'|"([^"]+)"|([^"'].+?))\s*(?:;|$)/i), r = `\r
--` + (i ? i[1] ?? i[2] ?? i[3] ?? "-" : "-");
        let s = "";
        F(t.body && typeof t.body.getReader == "function", 62);
        const o = t.body.getReader();
        let c = !1, l = !1, u;
        const d = ()=>l && s[0] == "-" && s[1] == "-";
        try {
            for(; !c;){
                ({ value: u, done: c } = await o.read());
                const f = typeof u == "string" ? u : e.decode(u), h = s.length - r.length + 1;
                s += f;
                let p = s.indexOf(r, h);
                for(; p > -1 && !d();){
                    l = !0;
                    let y;
                    [y, s] = [
                        s.slice(0, p),
                        s.slice(p + r.length)
                    ];
                    const m = y.indexOf(`\r
\r
`), k = Jc(y.slice(0, m))["content-type"];
                    if (k && k.toLowerCase().indexOf("application/json") === -1) throw new Error("Unsupported patch content type: application/json is required.");
                    const b = y.slice(m);
                    b && (yield b), p = s.indexOf(r);
                }
                if (d()) return;
            }
            throw new Error("premature end of multipart body");
        } finally{
            o.cancel();
        }
    }
    async function Gc(t, e) {
        for await (const n of Yc(t)){
            const i = Cs(t, n);
            if (Object.keys(i).length != 0) if (Hc(i)) {
                if (Object.keys(i).length === 1 && i.payload === null) return;
                let r = {
                    ...i.payload
                };
                "errors" in i && (r.extensions = {
                    ...r.extensions,
                    [pt]: new ht(i.errors ?? [])
                }), e(r);
            } else e(i);
        }
    }
    function Jc(t) {
        const e = {};
        return t.split(`
`).forEach((n)=>{
            const i = n.indexOf(":");
            if (i > -1) {
                const r = n.slice(0, i).trim().toLowerCase(), s = n.slice(i + 1).trim();
                e[r] = s;
            }
        }), e;
    }
    function Cs(t, e) {
        if (t.status >= 300) throw new Wt(`Response not successful: Received status code ${t.status}`, {
            response: t,
            bodyText: e
        });
        try {
            return JSON.parse(e);
        } catch (n) {
            throw new Ht(n, {
                response: t,
                bodyText: e
            });
        }
    }
    function Xc(t, e) {
        try {
            return JSON.parse(e);
        } catch (n) {
            throw new Ht(n, {
                response: t,
                bodyText: e
            });
        }
    }
    function Kc(t, e) {
        return t.headers.get("content-type")?.includes("application/graphql-response+json") ? Xc(t, e) : Cs(t, e);
    }
    function Zc(t) {
        return (e)=>e.text().then((n)=>{
                const i = Kc(e, n);
                if (!Array.isArray(i) && !sr.call(i, "data") && !sr.call(i, "errors")) throw new Wt(`Server response was malformed for query '${Array.isArray(t) ? t.map((r)=>r.operationName) : t.operationName}'.`, {
                    response: e,
                    bodyText: n
                });
                return i;
            });
    }
    const el = {
        includeQuery: !0,
        includeExtensions: !0,
        preserveHeaderCase: !1
    }, tl = {
        accept: "application/graphql-response+json,application/json;q=0.9",
        "content-type": "application/json"
    }, nl = {
        method: "POST"
    }, il = {
        http: el,
        headers: tl,
        options: nl
    }, rl = (t, e)=>e(t);
    function sl(t, e, ...n) {
        let i = {}, r = {};
        n.forEach((u)=>{
            i = {
                ...i,
                ...u.options,
                headers: {
                    ...i.headers,
                    ...u.headers
                }
            }, u.credentials && (i.credentials = u.credentials), i.headers.accept = (u.http?.accept || []).concat(i.headers.accept).join(","), r = {
                ...r,
                ...u.http
            };
        }), i.headers = al(i.headers, r.preserveHeaderCase);
        const { operationName: s, extensions: a, variables: o, query: c } = t, l = {
            operationName: s,
            variables: o
        };
        return r.includeExtensions && Object.keys(a || {}).length && (l.extensions = a), r.includeQuery && (l.query = e(c, De)), {
            options: i,
            body: l
        };
    }
    function al(t, e) {
        if (!e) {
            const r = {};
            return Object.keys(Object(t)).forEach((s)=>{
                r[s.toLowerCase()] = t[s];
            }), r;
        }
        const n = {};
        Object.keys(Object(t)).forEach((r)=>{
            n[r.toLowerCase()] = {
                originalName: r,
                value: t[r]
            };
        });
        const i = {};
        return Object.keys(n).forEach((r)=>{
            i[n[r].originalName] = n[r].value;
        }), i;
    }
    const ol = (t, e)=>{
        const i = t.getContext().uri;
        return i || (typeof e == "function" ? e(t) : e || "/graphql");
    };
    function cl(t, e) {
        const n = [], i = (l, u)=>{
            n.push(`${l}=${encodeURIComponent(u)}`);
        };
        if ("query" in e && i("query", e.query), e.operationName && i("operationName", e.operationName), e.variables) {
            let l;
            try {
                l = JSON.stringify(e.variables);
            } catch (u) {
                return {
                    parseError: u
                };
            }
            i("variables", l);
        }
        if (e.extensions) {
            let l;
            try {
                l = JSON.stringify(e.extensions);
            } catch (u) {
                return {
                    parseError: u
                };
            }
            i("extensions", l);
        }
        let r = "", s = t;
        const a = t.indexOf("#");
        a !== -1 && (r = t.substr(a), s = t.substr(0, a));
        const o = s.indexOf("?") === -1 ? "?" : "&";
        return {
            newURI: s + o + n.join("&") + r
        };
    }
    const ll = ke(()=>fetch);
    function ul() {}
    class dl extends $ {
        constructor(e = {}){
            let { uri: n = "/graphql", fetch: i, print: r = rl, includeExtensions: s, preserveHeaderCase: a, useGETForQueries: o, includeUnusedVariables: c = !1, ...l } = e;
            const u = {
                http: J({
                    includeExtensions: s,
                    preserveHeaderCase: a
                }),
                options: l.fetchOptions,
                credentials: l.credentials,
                headers: l.headers
            };
            super((d)=>{
                let f = ol(d, n);
                const h = d.getContext(), p = {
                    ...h.http
                };
                mc(d.query) && (p.accept = [
                    "multipart/mixed;boundary=graphql;subscriptionSpec=1.0",
                    ...p.accept || []
                ]);
                const y = {
                    http: p,
                    options: h.fetchOptions,
                    credentials: h.credentials,
                    headers: h.headers
                }, { options: m, body: v } = sl(d, r, il, u, y);
                v.variables && !c && (v.variables = uc(v.variables, d.query));
                let k = new AbortController, b = ()=>{
                    k = void 0;
                };
                if (m.signal) {
                    const S = m.signal, w = ()=>{
                        k?.abort(S.reason);
                    };
                    S.addEventListener("abort", w, {
                        once: !0
                    }), b = ()=>{
                        k?.signal.removeEventListener("abort", b), k = void 0, S.removeEventListener("abort", w), b = ul;
                    }, k.signal.addEventListener("abort", b, {
                        once: !0
                    });
                }
                return m.signal = k.signal, o && !pc(d.query) && (m.method = "GET"), new A((S)=>{
                    if (m.method === "GET") {
                        const { newURI: B, parseError: re } = cl(f, v);
                        if (re) throw re;
                        f = B;
                    } else m.body = JSON.stringify(v);
                    const w = i || ke(()=>fetch) || ll, q = S.next.bind(S);
                    return w(f, m).then((B)=>{
                        d.setContext({
                            response: B
                        });
                        const re = B.headers?.get("content-type");
                        return re !== null && /^multipart\/mixed/i.test(re) ? Gc(B, q) : Zc(d)(B).then(q);
                    }).then(()=>{
                        b(), S.complete();
                    }).catch((B)=>{
                        b(), S.error(B);
                    }), ()=>{
                        k && k.abort();
                    };
                });
            });
        }
    }
    class fl extends $ {
        constructor(e = {}){
            super((n, i)=>{
                const r = n.client, s = r.queryManager.clientOptions, a = n.getContext();
                {
                    const { name: o, version: c, transport: l = "headers" } = J({}, s.clientAwareness, e.clientAwareness, a.clientAwareness);
                    l === "headers" && n.setContext(({ headers: u })=>({
                            headers: J({
                                "apollographql-client-name": o,
                                "apollographql-client-version": c
                            }, u)
                        }));
                }
                {
                    const { transport: o = "extensions" } = J({}, s.enhancedClientAwareness, e.enhancedClientAwareness);
                    o === "extensions" && (n.extensions = J({
                        clientLibrary: {
                            name: "@apollo/client",
                            version: r.version
                        }
                    }, n.extensions)), o === "headers" && n.setContext(({ headers: c })=>({
                            headers: J({
                                "apollographql-library-name": "@apollo/client",
                                "apollographql-library-version": r.version
                            }, c)
                        }));
                }
                return i(n);
            });
        }
    }
    class hl extends $ {
        constructor(e = {}){
            const { left: n, right: i, request: r } = $.from([
                new fl(e),
                new dl(e)
            ]);
            super(r), Object.assign(this, {
                left: n,
                right: i
            });
        }
    }
    function pl(t) {
        const { initial: e = 300, jitter: n = !0, max: i = 1 / 0 } = t || {}, r = n ? e : e / 2;
        return function(a) {
            let o = Math.min(i, r * 2 ** a);
            return n && (o = Math.random() * o), o;
        };
    }
    function ml(t) {
        const { retryIf: e, max: n = 5 } = t || {};
        return function(r, s, a) {
            return r >= n ? !1 : e ? e(a, s) : !!a;
        };
    }
    class yl {
        observer;
        operation;
        forward;
        delayFor;
        retryIf;
        retryCount = 0;
        currentSubscription = null;
        timerId;
        constructor(e, n, i, r, s){
            this.observer = e, this.operation = n, this.forward = i, this.delayFor = r, this.retryIf = s, this.try();
        }
        cancel() {
            this.currentSubscription && this.currentSubscription.unsubscribe(), clearTimeout(this.timerId), this.timerId = void 0, this.currentSubscription = null;
        }
        try() {
            this.currentSubscription = this.forward(this.operation).subscribe({
                next: (e)=>{
                    if (Fs(e)) {
                        this.onError(e.extensions[pt], ()=>this.observer.next(e)), this.currentSubscription?.unsubscribe();
                        return;
                    }
                    this.observer.next(e);
                },
                error: (e)=>this.onError(e, ()=>this.observer.error(e)),
                complete: this.observer.complete.bind(this.observer)
            });
        }
        onError = async (e, n)=>{
            this.retryCount += 1;
            const i = Os(e);
            if (await this.retryIf(this.retryCount, this.operation, i)) {
                this.scheduleRetry(this.delayFor(this.retryCount, this.operation, i));
                return;
            }
            n();
        };
        scheduleRetry(e) {
            if (this.timerId) throw new Error("RetryLink BUG! Encountered overlapping retries");
            this.timerId = setTimeout(()=>{
                this.timerId = void 0, this.try();
            }, e);
        }
    }
    class vl extends $ {
        delayFor;
        retryIf;
        constructor(e){
            super();
            const { attempts: n, delay: i } = e || {};
            this.delayFor = typeof i == "function" ? i : pl(i), this.retryIf = typeof n == "function" ? n : ml(n);
        }
        request(e, n) {
            return new A((i)=>{
                const r = new yl(i, e, n, this.delayFor, this.retryIf);
                return ()=>{
                    r.cancel();
                };
            });
        }
    }
    function kl(t) {
        return H(t) && "code" in t && "reason" in t;
    }
    function bl(t) {
        return H(t) && t.target?.readyState === WebSocket.CLOSED;
    }
    class gl extends $ {
        client;
        constructor(e){
            super(), this.client = e;
        }
        request(e) {
            return new A((n)=>{
                const { query: i, variables: r, operationName: s, extensions: a } = e;
                return this.client.subscribe({
                    variables: r,
                    operationName: s,
                    extensions: a,
                    query: De(i)
                }, {
                    next: n.next.bind(n),
                    complete: n.complete.bind(n),
                    error: (o)=>{
                        if (o instanceof Error) return n.error(o);
                        const c = kl(o);
                        return c || bl(o) ? n.error(new Error(`Socket closed${c ? ` with event ${o.code}` : ""}${c ? ` ${o.reason}` : ""}`)) : n.error(new pe({
                            errors: Array.isArray(o) ? o : [
                                o
                            ]
                        }));
                    }
                });
            });
        }
    }
    function G(t) {
        return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    }
    function Te(t) {
        return G(t) === "object";
    }
    function Sl(t) {
        return Array.isArray(t) && t.length > 0 && t.every((e)=>"message" in e);
    }
    function ar(t, e) {
        return t.length < 124 ? t : e;
    }
    const wl = "graphql-transport-ws";
    var K = ((t)=>(t[t.InternalServerError = 4500] = "InternalServerError", t[t.InternalClientError = 4005] = "InternalClientError", t[t.BadRequest = 4400] = "BadRequest", t[t.BadResponse = 4004] = "BadResponse", t[t.Unauthorized = 4401] = "Unauthorized", t[t.Forbidden = 4403] = "Forbidden", t[t.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", t[t.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", t[t.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", t[t.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", t[t.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests", t))(K || {}), Z = ((t)=>(t.ConnectionInit = "connection_init", t.ConnectionAck = "connection_ack", t.Ping = "ping", t.Pong = "pong", t.Subscribe = "subscribe", t.Next = "next", t.Error = "error", t.Complete = "complete", t))(Z || {});
    function Ds(t) {
        if (!Te(t)) throw new Error(`Message is expected to be an object, but got ${G(t)}`);
        if (!t.type) throw new Error("Message is missing the 'type' property");
        if (typeof t.type != "string") throw new Error(`Message is expects the 'type' property to be a string, but got ${G(t.type)}`);
        switch(t.type){
            case "connection_init":
            case "connection_ack":
            case "ping":
            case "pong":
                {
                    if (t.payload != null && !Te(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${t.payload}"`);
                    break;
                }
            case "subscribe":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    if (!Te(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${G(t.payload)}`);
                    if (typeof t.payload.query != "string") throw new Error(`"${t.type}" message payload expects the 'query' property to be a string, but got ${G(t.payload.query)}`);
                    if (t.payload.variables != null && !Te(t.payload.variables)) throw new Error(`"${t.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${G(t.payload.variables)}`);
                    if (t.payload.operationName != null && G(t.payload.operationName) !== "string") throw new Error(`"${t.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${G(t.payload.operationName)}`);
                    if (t.payload.extensions != null && !Te(t.payload.extensions)) throw new Error(`"${t.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${G(t.payload.extensions)}`);
                    break;
                }
            case "next":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    if (!Te(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${G(t.payload)}`);
                    break;
                }
            case "error":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    if (!Sl(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(t.payload)}`);
                    break;
                }
            case "complete":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    break;
                }
            default:
                throw new Error(`Invalid message 'type' property "${t.type}"`);
        }
        return t;
    }
    function El(t, e) {
        return Ds(typeof t == "string" ? JSON.parse(t, e) : t);
    }
    function nt(t, e) {
        return Ds(t), JSON.stringify(t, e);
    }
    function Nl(t) {
        const { url: e, connectionParams: n, lazy: i = !0, onNonLazyError: r = console.error, lazyCloseTimeout: s = 0, keepAlive: a = 0, disablePong: o, connectionAckWaitTimeout: c = 0, retryAttempts: l = 5, retryWait: u = async function(R) {
            const T = Math.pow(2, R);
            await new Promise((D)=>setTimeout(D, T * 1e3 + Math.floor(Math.random() * 2700 + 300)));
        }, shouldRetry: d = mn, on: f, webSocketImpl: h, generateID: p = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (R)=>{
                const T = Math.random() * 16 | 0;
                return (R == "x" ? T : T & 3 | 8).toString(16);
            });
        }, jsonMessageReplacer: y, jsonMessageReviver: m } = t;
        let v;
        if (h) {
            if (!Fl(h)) throw new Error("Invalid WebSocket implementation provided");
            v = h;
        } else typeof WebSocket < "u" ? v = WebSocket : typeof global < "u" ? v = global.WebSocket || global.MozWebSocket : typeof window < "u" && (v = window.WebSocket || window.MozWebSocket);
        if (!v) throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
        const k = v, b = (()=>{
            const O = (()=>{
                const T = {};
                return {
                    on (D, V) {
                        return T[D] = V, ()=>{
                            delete T[D];
                        };
                    },
                    emit (D) {
                        "id" in D && T[D.id]?.(D);
                    }
                };
            })(), R = {
                connecting: f?.connecting ? [
                    f.connecting
                ] : [],
                opened: f?.opened ? [
                    f.opened
                ] : [],
                connected: f?.connected ? [
                    f.connected
                ] : [],
                ping: f?.ping ? [
                    f.ping
                ] : [],
                pong: f?.pong ? [
                    f.pong
                ] : [],
                message: f?.message ? [
                    O.emit,
                    f.message
                ] : [
                    O.emit
                ],
                closed: f?.closed ? [
                    f.closed
                ] : [],
                error: f?.error ? [
                    f.error
                ] : []
            };
            return {
                onMessage: O.on,
                on (T, D) {
                    const V = R[T];
                    return V.push(D), ()=>{
                        V.splice(V.indexOf(D), 1);
                    };
                },
                emit (T, ...D) {
                    for (const V of [
                        ...R[T]
                    ])V(...D);
                }
            };
        })();
        function S(O) {
            const R = [
                b.on("error", (T)=>{
                    R.forEach((D)=>D()), O(T);
                }),
                b.on("closed", (T)=>{
                    R.forEach((D)=>D()), O(T);
                })
            ];
        }
        let w, q = 0, B, re = !1, wt = 0, ii = !1;
        async function ri() {
            clearTimeout(B);
            const [O, R] = await (w ?? (w = new Promise((V, Y)=>(async ()=>{
                    if (re) {
                        if (await u(wt), !q) return w = void 0, Y({
                            code: 1e3,
                            reason: "All Subscriptions Gone"
                        });
                        wt++;
                    }
                    b.emit("connecting", re);
                    const _ = new k(typeof e == "function" ? await e() : e, wl);
                    let xe, Ze;
                    function Et() {
                        isFinite(a) && a > 0 && (clearTimeout(Ze), Ze = setTimeout(()=>{
                            _.readyState === k.OPEN && (_.send(nt({
                                type: Z.Ping
                            })), b.emit("ping", !1, void 0));
                        }, a));
                    }
                    S((z)=>{
                        w = void 0, clearTimeout(xe), clearTimeout(Ze), Y(z), z instanceof or && (_.close(4499, "Terminated"), _.onerror = null, _.onclose = null);
                    }), _.onerror = (z)=>b.emit("error", z), _.onclose = (z)=>b.emit("closed", z), _.onopen = async ()=>{
                        try {
                            b.emit("opened", _);
                            const z = typeof n == "function" ? await n() : n;
                            if (_.readyState !== k.OPEN) return;
                            _.send(nt(z ? {
                                type: Z.ConnectionInit,
                                payload: z
                            } : {
                                type: Z.ConnectionInit
                            }, y)), isFinite(c) && c > 0 && (xe = setTimeout(()=>{
                                _.close(K.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
                            }, c)), Et();
                        } catch (z) {
                            b.emit("error", z), _.close(K.InternalClientError, ar(z instanceof Error ? z.message : String(z), "Internal client error"));
                        }
                    };
                    let Re = !1;
                    _.onmessage = ({ data: z })=>{
                        try {
                            const U = El(z, m);
                            if (b.emit("message", U), U.type === "ping" || U.type === "pong") {
                                b.emit(U.type, !0, U.payload), U.type === "pong" ? Et() : o || (_.send(nt(U.payload ? {
                                    type: Z.Pong,
                                    payload: U.payload
                                } : {
                                    type: Z.Pong
                                })), b.emit("pong", !1, U.payload));
                                return;
                            }
                            if (Re) return;
                            if (U.type !== Z.ConnectionAck) throw new Error(`First message cannot be of type ${U.type}`);
                            clearTimeout(xe), Re = !0, b.emit("connected", _, U.payload, re), re = !1, wt = 0, V([
                                _,
                                new Promise((cu, qs)=>S(qs))
                            ]);
                        } catch (U) {
                            _.onmessage = null, b.emit("error", U), _.close(K.BadResponse, ar(U instanceof Error ? U.message : String(U), "Bad response"));
                        }
                    };
                })())));
            O.readyState === k.CLOSING && await R;
            let T = ()=>{};
            const D = new Promise((V)=>T = V);
            return [
                O,
                T,
                Promise.race([
                    D.then(()=>{
                        if (!q) {
                            const V = ()=>O.close(1e3, "Normal Closure");
                            isFinite(s) && s > 0 ? B = setTimeout(()=>{
                                O.readyState === k.OPEN && V();
                            }, s) : V();
                        }
                    }),
                    R
                ])
            ];
        }
        function si(O) {
            if (mn(O) && (Tl(O.code) || [
                K.InternalServerError,
                K.InternalClientError,
                K.BadRequest,
                K.BadResponse,
                K.Unauthorized,
                K.SubprotocolNotAcceptable,
                K.SubscriberAlreadyExists,
                K.TooManyInitialisationRequests
            ].includes(O.code))) throw O;
            if (ii) return !1;
            if (mn(O) && O.code === 1e3) return q > 0;
            if (!l || wt >= l || !d(O)) throw O;
            return re = !0;
        }
        i || (async ()=>{
            for(q++;;)try {
                const [, , O] = await ri();
                await O;
            } catch (O) {
                try {
                    if (!si(O)) return;
                } catch (R) {
                    return r?.(R);
                }
            }
        })();
        function ai(O, R) {
            const T = p(O);
            let D = !1, V = !1, Y = ()=>{
                q--, D = !0;
            };
            return (async ()=>{
                for(q++;;)try {
                    const [_, xe, Ze] = await ri();
                    if (D) return xe();
                    const Et = b.onMessage(T, (Re)=>{
                        switch(Re.type){
                            case Z.Next:
                                {
                                    R.next(Re.payload);
                                    return;
                                }
                            case Z.Error:
                                {
                                    V = !0, D = !0, R.error(Re.payload), Y();
                                    return;
                                }
                            case Z.Complete:
                                {
                                    D = !0, Y();
                                    return;
                                }
                        }
                    });
                    _.send(nt({
                        id: T,
                        type: Z.Subscribe,
                        payload: O
                    }, y)), Y = ()=>{
                        !D && _.readyState === k.OPEN && _.send(nt({
                            id: T,
                            type: Z.Complete
                        }, y)), q--, D = !0, xe();
                    }, await Ze.finally(Et);
                    return;
                } catch (_) {
                    if (!si(_)) return;
                }
            })().then(()=>{
                V || R.complete();
            }).catch((_)=>{
                R.error(_);
            }), ()=>{
                D || Y();
            };
        }
        return {
            on: b.on,
            subscribe: ai,
            iterate (O) {
                const R = [], T = {
                    done: !1,
                    error: null,
                    resolve: ()=>{}
                }, D = ai(O, {
                    next (Y) {
                        R.push(Y), T.resolve();
                    },
                    error (Y) {
                        T.done = !0, T.error = Y, T.resolve();
                    },
                    complete () {
                        T.done = !0, T.resolve();
                    }
                }), V = (async function*() {
                    for(;;){
                        for(R.length || await new Promise((_)=>T.resolve = _); R.length;)yield R.shift();
                        if (T.error) throw T.error;
                        if (T.done) return;
                    }
                })();
                return V.throw = async (Y)=>(T.done || (T.done = !0, T.error = Y, T.resolve()), {
                        done: !0,
                        value: void 0
                    }), V.return = async ()=>(D(), {
                        done: !0,
                        value: void 0
                    }), V;
            },
            async dispose () {
                if (ii = !0, w) {
                    const [O] = await w;
                    O.close(1e3, "Normal Closure");
                }
            },
            terminate () {
                w && b.emit("closed", new or);
            }
        };
    }
    class or extends Error {
        name = "TerminatedCloseEvent";
        message = "4499: Terminated";
        code = 4499;
        reason = "Terminated";
        wasClean = !1;
    }
    function mn(t) {
        return Te(t) && "code" in t && "reason" in t;
    }
    function Tl(t) {
        return [
            1e3,
            1001,
            1006,
            1005,
            1012,
            1013,
            1014
        ].includes(t) ? !1 : t >= 1e3 && t <= 1999;
    }
    function Fl(t) {
        return typeof t == "function" && "constructor" in t && "CLOSED" in t && "CLOSING" in t && "CONNECTING" in t && "OPEN" in t;
    }
    St = class extends Error {
    };
    Ol = class extends St {
        errors;
        constructor(e){
            const n = e.map((i, r)=>`${r + 1}. ${i.message}`).join(`
	`);
            super(`Indexer GraphQL error(s):
	${n}`), this.errors = e, this.name = "IndexerFormattedError";
        }
    };
    _s = class extends St {
        constructor(e, n){
            super(e, n), this.name = "IndexerQueryError";
        }
    };
    ge = class extends St {
        context;
        constructor(e){
            super(ge.formatMessage(e)), this.context = e, this.name = "IndexerDataError";
        }
        static unknownStatus(e) {
            return new ge({
                kind: "unknown-status",
                value: e
            });
        }
        static missingContractAction(e) {
            return new ge({
                kind: "missing-contract-action",
                contractAddress: e
            });
        }
        static missingIdentifier(e, n, i) {
            return new ge({
                kind: "missing-identifier",
                contractAddress: e,
                actionIndex: n,
                identifiersLength: i
            });
        }
        static formatMessage(e) {
            switch(e.kind){
                case "unknown-status":
                    return `Unexpected transaction status value: ${e.value}`;
                case "missing-contract-action":
                    return `Deploy transaction does not contain a contract action for address ${e.contractAddress}`;
                case "missing-identifier":
                    return `Transaction missing identifier for contract action at address ${e.contractAddress} (actionIndex=${e.actionIndex}, identifiers.length=${e.identifiersLength})`;
            }
        }
    };
    ti = class extends St {
        missingField;
        constructor(e){
            super(`Expected '${e}' in indexer subscription data, got null/undefined`), this.missingField = e, this.name = "IndexerSubscriptionDataError";
        }
    };
    Cl = class extends St {
        constructor(e){
            super(e), this.name = "IndexerProviderConfigError";
        }
    };
    const Dl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BLOCK_HASH_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "block"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hash"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, _l = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TX_ID_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TransactionOffset"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "transactions"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "protocolVersion"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "raw"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hash"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unshieldedCreatedOutputs"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "owner"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "intentHash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tokenType"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "value"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unshieldedSpentOutputs"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "owner"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "intentHash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tokenType"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "value"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "block"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "author"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "timestamp"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "RegularTransaction"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "identifiers"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "fees"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "estimatedFees"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "paidFees"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "transactionResult"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "status"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "segments"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "id"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "success"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Il = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DEPLOY_TX_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "transaction"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "protocolVersion"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "raw"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hash"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "contractActions"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "address"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "block"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "hash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "author"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "timestamp"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedCreatedOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedSpentOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "RegularTransaction"
                                                                    }
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "identifiers"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "fees"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "estimatedFees"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "paidFees"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "transactionResult"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "status"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "segments"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "id"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "success"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "transaction"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "protocolVersion"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "raw"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hash"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "contractActions"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "address"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "block"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "hash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "author"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "timestamp"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedCreatedOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedSpentOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "RegularTransaction"
                                                                    }
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "identifiers"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "fees"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "estimatedFees"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "paidFees"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "transactionResult"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "status"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "segments"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "id"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "success"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "transaction"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "id"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "protocolVersion"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "raw"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "hash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "contractActions"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "address"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "block"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "height"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "hash"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "author"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "timestamp"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "unshieldedCreatedOutputs"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "owner"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "intentHash"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "tokenType"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "value"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "unshieldedSpentOutputs"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "owner"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "intentHash"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "tokenType"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "value"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            typeCondition: {
                                                                                kind: "NamedType",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "RegularTransaction"
                                                                                }
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "identifiers"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "fees"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "estimatedFees"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "paidFees"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "transactionResult"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "status"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "segments"
                                                                                                    },
                                                                                                    selectionSet: {
                                                                                                        kind: "SelectionSet",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "id"
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "success"
                                                                                                                }
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Al = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DEPLOY_CONTRACT_STATE_TX_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "state"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "state"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "transaction"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "contractActions"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "state"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, xl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LATEST_CONTRACT_TX_BLOCK_HEIGHT_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "transaction"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "block"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Rl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "TXS_FROM_BLOCK_SUB"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "blocks"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hash"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "transactions"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "contractActions"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "state"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "address"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "RegularTransaction"
                                                        }
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "identifiers"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Pl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CONTRACT_STATE_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ContractActionOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "state"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Ml = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "CONTRACT_STATE_SUB"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractActions"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "state"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Vl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BOTH_STATE_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ContractActionOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "state"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "zswapState"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "transaction"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "block"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ledgerParameters"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, ql = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UNSHIELDED_BALANCE_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedBalances"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "amount"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, jl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "QUERY_UNSHIELDED_BALANCES_WITH_OFFSET"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ContractActionOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedBalances"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "amount"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Bl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "UNSHIELDED_BALANCE_SUB"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractActions"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedBalances"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "amount"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Ll = {
        "\n  query BLOCK_HASH_QUERY($offset: BlockOffset) {\n    block(offset: $offset) {\n      height\n      hash\n    }\n  }": Dl,
        "\n  query TX_ID_QUERY($offset: TransactionOffset!) {\n    transactions(offset: $offset) {\n      id\n      protocolVersion\n      raw\n      hash\n      unshieldedCreatedOutputs {\n        owner\n        intentHash\n        tokenType\n        value\n      }\n      unshieldedSpentOutputs {\n        owner\n        intentHash\n        tokenType\n        value\n      }\n      block {\n        height\n        hash\n        author\n        timestamp\n      }\n      ... on RegularTransaction {\n        identifiers\n        fees {\n          estimatedFees\n          paidFees\n        }\n        transactionResult {\n          status\n          segments {\n            id\n            success\n          }\n        }\n      }\n    }\n  }": _l,
        "\n  query DEPLOY_TX_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      ... on ContractDeploy {\n        transaction {\n          id\n          protocolVersion\n	        raw\n          hash\n          contractActions {\n            address\n          }\n          block {\n            height\n            hash\n            author\n            timestamp\n          }\n          unshieldedCreatedOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          unshieldedSpentOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          ... on RegularTransaction {\n            identifiers\n            fees {\n              estimatedFees\n              paidFees\n            }\n            transactionResult {\n              status\n              segments {\n                id\n                success\n              }\n            }\n          }\n        }\n      }\n      ... on ContractUpdate {\n        transaction {\n          id\n          protocolVersion\n	        raw\n          hash\n          contractActions {\n            address\n          }\n          block {\n            height\n            hash\n            author\n            timestamp\n          }\n          unshieldedCreatedOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          unshieldedSpentOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          ... on RegularTransaction {\n            identifiers\n            fees {\n              estimatedFees\n              paidFees\n            }\n            transactionResult {\n              status\n              segments {\n                id\n                success\n              }\n            }\n          }\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          transaction {\n            id\n            protocolVersion\n	          raw\n            hash\n            contractActions {\n              address\n            }\n            block {\n              height\n              hash\n              author\n              timestamp\n            }\n            unshieldedCreatedOutputs {\n              owner\n              intentHash\n              tokenType\n              value\n            }\n            unshieldedSpentOutputs {\n              owner\n              intentHash\n              tokenType\n              value\n            }\n            ... on RegularTransaction {\n              identifiers\n              fees {\n                estimatedFees\n                paidFees\n              }\n              transactionResult {\n                status\n                segments {\n                  id\n                  success\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }": Il,
        "\n  query DEPLOY_CONTRACT_STATE_TX_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      ... on ContractDeploy {\n        state\n      }\n      ... on ContractUpdate {\n        state\n      }\n      ... on ContractCall {\n        deploy {\n          transaction {\n            contractActions {\n              address\n              state\n            }\n          }\n        }\n      }\n    }\n  }": Al,
        "\n  query LATEST_CONTRACT_TX_BLOCK_HEIGHT_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      transaction {\n        block {\n          height\n        }\n      }\n    }\n  }": xl,
        "\n  subscription TXS_FROM_BLOCK_SUB($offset: BlockOffset) {\n    blocks(offset: $offset) {\n      hash,\n      height,\n      transactions {\n        hash\n        contractActions {\n          state\n          address\n        }\n        ... on RegularTransaction {\n          identifiers\n        }\n      }\n    }\n  }": Rl,
        "\n  query CONTRACT_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {\n    contractAction(address: $address, offset: $offset) {\n      state\n    }\n  }": Pl,
        "\n  subscription CONTRACT_STATE_SUB($address: HexEncoded!, $offset: BlockOffset) {\n    contractActions(address: $address, offset: $offset) {\n      state\n    }\n  }": Ml,
        "\n  query BOTH_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {\n    contractAction(address: $address, offset: $offset) {\n      state\n      zswapState\n      transaction {\n        block {\n          ledgerParameters\n        }\n      }\n    }\n  }": Vl,
        "\n  query UNSHIELDED_BALANCE_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      ... on ContractDeploy {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractUpdate {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          unshieldedBalances {\n            tokenType\n            amount\n          }\n        }\n      }\n    }\n  }": ql,
        "\n  query QUERY_UNSHIELDED_BALANCES_WITH_OFFSET($address: HexEncoded!, $offset: ContractActionOffset) {\n    contractAction(address: $address, offset: $offset) {\n      ... on ContractDeploy {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractUpdate {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          unshieldedBalances {\n            tokenType\n            amount\n          }\n        }\n      }\n    }\n  }": jl,
        "\n  subscription UNSHIELDED_BALANCE_SUB($address: HexEncoded!, $offset: BlockOffset) {\n    contractActions(address: $address, offset: $offset) {\n      ... on ContractDeploy {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractUpdate {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          unshieldedBalances {\n            tokenType\n            amount\n          }\n        }\n      }\n    }\n  }": Bl
    };
    function ie(t) {
        return Ll[t] ?? {};
    }
    let Ul, Is, Ql, $l, zl, Wl, As, Hl, Yl, Gl, Jl, Xl, xs, vn, Ie, ni, Yt, Oe, Kl, Rs, Zl, Ae, An, eu, tu, cr, iu, su, lr, ur, au, dr, fr, hr, kn, ou;
    Ul = ie(`
  query BLOCK_HASH_QUERY($offset: BlockOffset) {
    block(offset: $offset) {
      height
      hash
    }
  }`);
    Is = ie(`
  query TX_ID_QUERY($offset: TransactionOffset!) {
    transactions(offset: $offset) {
      id
      protocolVersion
      raw
      hash
      unshieldedCreatedOutputs {
        owner
        intentHash
        tokenType
        value
      }
      unshieldedSpentOutputs {
        owner
        intentHash
        tokenType
        value
      }
      block {
        height
        hash
        author
        timestamp
      }
      ... on RegularTransaction {
        identifiers
        fees {
          estimatedFees
          paidFees
        }
        transactionResult {
          status
          segments {
            id
            success
          }
        }
      }
    }
  }`);
    Ql = ie(`
  query DEPLOY_TX_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      ... on ContractDeploy {
        transaction {
          id
          protocolVersion
	        raw
          hash
          contractActions {
            address
          }
          block {
            height
            hash
            author
            timestamp
          }
          unshieldedCreatedOutputs {
            owner
            intentHash
            tokenType
            value
          }
          unshieldedSpentOutputs {
            owner
            intentHash
            tokenType
            value
          }
          ... on RegularTransaction {
            identifiers
            fees {
              estimatedFees
              paidFees
            }
            transactionResult {
              status
              segments {
                id
                success
              }
            }
          }
        }
      }
      ... on ContractUpdate {
        transaction {
          id
          protocolVersion
	        raw
          hash
          contractActions {
            address
          }
          block {
            height
            hash
            author
            timestamp
          }
          unshieldedCreatedOutputs {
            owner
            intentHash
            tokenType
            value
          }
          unshieldedSpentOutputs {
            owner
            intentHash
            tokenType
            value
          }
          ... on RegularTransaction {
            identifiers
            fees {
              estimatedFees
              paidFees
            }
            transactionResult {
              status
              segments {
                id
                success
              }
            }
          }
        }
      }
      ... on ContractCall {
        deploy {
          transaction {
            id
            protocolVersion
	          raw
            hash
            contractActions {
              address
            }
            block {
              height
              hash
              author
              timestamp
            }
            unshieldedCreatedOutputs {
              owner
              intentHash
              tokenType
              value
            }
            unshieldedSpentOutputs {
              owner
              intentHash
              tokenType
              value
            }
            ... on RegularTransaction {
              identifiers
              fees {
                estimatedFees
                paidFees
              }
              transactionResult {
                status
                segments {
                  id
                  success
                }
              }
            }
          }
        }
      }
    }
  }`);
    $l = ie(`
  query DEPLOY_CONTRACT_STATE_TX_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      ... on ContractDeploy {
        state
      }
      ... on ContractUpdate {
        state
      }
      ... on ContractCall {
        deploy {
          transaction {
            contractActions {
              address
              state
            }
          }
        }
      }
    }
  }`);
    zl = ie(`
  query LATEST_CONTRACT_TX_BLOCK_HEIGHT_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      transaction {
        block {
          height
        }
      }
    }
  }`);
    Wl = ie(`
  subscription TXS_FROM_BLOCK_SUB($offset: BlockOffset) {
    blocks(offset: $offset) {
      hash,
      height,
      transactions {
        hash
        contractActions {
          state
          address
        }
        ... on RegularTransaction {
          identifiers
        }
      }
    }
  }`);
    As = ie(`
  query CONTRACT_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {
    contractAction(address: $address, offset: $offset) {
      state
    }
  }`);
    Hl = ie(`
  subscription CONTRACT_STATE_SUB($address: HexEncoded!, $offset: BlockOffset) {
    contractActions(address: $address, offset: $offset) {
      state
    }
  }`);
    Yl = ie(`
  query BOTH_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {
    contractAction(address: $address, offset: $offset) {
      state
      zswapState
      transaction {
        block {
          ledgerParameters
        }
      }
    }
  }`);
    Gl = ie(`
  query UNSHIELDED_BALANCE_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      ... on ContractDeploy {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        deploy {
          unshieldedBalances {
            tokenType
            amount
          }
        }
      }
    }
  }`);
    Jl = ie(`
  query QUERY_UNSHIELDED_BALANCES_WITH_OFFSET($address: HexEncoded!, $offset: ContractActionOffset) {
    contractAction(address: $address, offset: $offset) {
      ... on ContractDeploy {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        deploy {
          unshieldedBalances {
            tokenType
            amount
          }
        }
      }
    }
  }`);
    Xl = ie(`
  subscription UNSHIELDED_BALANCE_SUB($address: HexEncoded!, $offset: BlockOffset) {
    contractActions(address: $address, offset: $offset) {
      ... on ContractDeploy {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        deploy {
          unshieldedBalances {
            tokenType
            amount
          }
        }
      }
    }
  }`);
    yn = (t)=>"identifiers" in t && "hash" in t && Array.isArray(t.identifiers);
    xs = (t)=>t.contractAction != null;
    vn = (t)=>{
        if (t.error) throw new _s(t.error.message, {
            cause: t.error
        });
        return t;
    };
    Ie = ()=>Sr(W((t)=>{
            if (t.error) throw new _s(t.error.message, {
                cause: t.error
            });
            return t.dataState === "complete";
        }), I((t)=>t.data));
    ni = ()=>Sr(I((t)=>{
            if (t.errors && t.errors.length > 0) throw new Ol(t.errors);
            return t.data;
        }), W((t)=>t != null));
    Yt = (t)=>$s.Buffer.from(t, "hex");
    Oe = (t)=>Ys.deserialize(Yt(t));
    Kl = (t)=>Ws.deserialize(Yt(t));
    Rs = (t)=>Hs.deserialize("signature", "proof", "binding", Yt(t));
    Zl = (t)=>pr.deserialize(Yt(t));
    Ae = 1e3;
    An = (t)=>(e)=>t.subscribe({
                query: Wl,
                variables: {
                    offset: e
                },
                fetchPolicy: "no-cache"
            }).pipe(ni(), I((n)=>{
                const i = n.blocks;
                if (!i) throw new ti("blocks");
                return {
                    hash: i.hash,
                    height: i.height,
                    transactions: i.transactions.filter((r)=>"identifiers" in r).map((r)=>({
                            hash: r.hash,
                            identifiers: r.identifiers,
                            contractActions: r.contractActions
                        }))
                };
            }));
    eu = (t)=>(e)=>t.watchQuery({
                query: Is,
                variables: {
                    offset: {
                        identifier: e
                    }
                },
                pollInterval: Ae,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W((n)=>n.transactions.length !== 0), I((n)=>({
                    height: n.transactions[0].block.height
                })), ee(An(t)), ee(({ transactions: n })=>oe(n)));
    tu = (t)=>({ identifiers: e, contractActions: n })=>io(e, n).pipe(co((i)=>i[0] !== t), I((i)=>Oe(i[1].state)));
    Ps = (t)=>{
        const e = t.status, n = {
            FAILURE: Qs,
            PARTIAL_SUCCESS: Us,
            SUCCESS: Ls
        };
        if (e === "FAILURE" || e === "PARTIAL_SUCCESS" || e === "SUCCESS") return n[e];
        throw ge.unknownStatus(e);
    };
    nu = (t)=>t ? js : Bs;
    Ms = (t)=>{
        if (t.status === "PARTIAL_SUCCESS" && t.segments) return new Map(t.segments.map((e)=>[
                e.id,
                nu(e.success)
            ]));
    };
    cr = (t)=>({
            owner: t.owner,
            intentHash: t.intentHash,
            tokenType: t.tokenType,
            value: BigInt(t.value)
        });
    Vs = (t, e)=>({
            created: t.map(cr),
            spent: e.map(cr)
        });
    iu = (t)=>({
            balance: BigInt(t.amount),
            tokenType: t.tokenType
        });
    xn = (t)=>t.map(iu);
    ru = (t, e, n)=>{
        const i = e.findIndex(({ address: s })=>s === t), r = i >= 0 ? n[i] : void 0;
        if (typeof r != "string" || r.length === 0) throw ge.missingIdentifier(t, i, n.length);
        return r;
    };
    su = (t, e)=>({
            tx: Rs(e.raw),
            status: Ps(e.transactionResult),
            txId: ru(t, e.contractActions, e.identifiers),
            identifiers: e.identifiers,
            txHash: e.hash,
            blockHeight: e.block.height,
            blockHash: e.block.hash,
            blockTimestamp: e.block.timestamp,
            blockAuthor: e.block.author,
            segmentStatusMap: Ms(e.transactionResult),
            unshielded: Vs(e.unshieldedCreatedOutputs, e.unshieldedSpentOutputs),
            indexerId: e.id,
            protocolVersion: e.protocolVersion,
            fees: {
                estimatedFees: e.fees.estimatedFees,
                paidFees: e.fees.paidFees
            }
        });
    lr = (t)=>(e)=>oe(e.transactions).pipe(ee(({ contractActions: n })=>oe(n)), W((n)=>n.address === t), I((n)=>Oe(n.state)));
    ur = (t)=>(e)=>t.watchQuery({
                query: zl,
                variables: {
                    address: e
                },
                pollInterval: Ae,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W((n)=>n.contractAction !== null), I((n)=>n.contractAction.transaction.block.height), qt(1), I((n)=>({
                    height: n
                })));
    au = (t)=>(e)=>(n)=>t.subscribe({
                    query: Hl,
                    variables: {
                        address: e,
                        offset: n
                    },
                    fetchPolicy: "no-cache"
                }).pipe(ni(), I((i)=>{
                    const r = i.contractActions;
                    if (!r) throw new ti("contractActions");
                    return r.state;
                }), I(Oe));
    dr = (t)=>(e)=>(n)=>t.watchQuery({
                    query: As,
                    variables: {
                        address: e,
                        offset: n
                    },
                    pollInterval: Ae,
                    fetchPolicy: "no-cache",
                    initialFetchPolicy: "no-cache",
                    nextFetchPolicy: "no-cache"
                }).pipe(Ie(), W(xs), I((i)=>i.contractAction.state), qt(1));
    fr = (t)=>(e)=>t.watchQuery({
                query: Ul,
                variables: {
                    offset: e
                },
                pollInterval: Ae,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W((n)=>n.block !== null), qt(1));
    hr = (t)=>(e)=>t.watchQuery({
                query: Gl,
                variables: {
                    address: e
                },
                pollInterval: Ae,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W(xs), I((n)=>{
                const { contractAction: i } = n;
                return "unshieldedBalances" in i ? i.unshieldedBalances : "deploy" in i ? i.deploy.unshieldedBalances : [];
            }), qt(1));
    kn = (t)=>(e)=>(n)=>t.subscribe({
                    query: Xl,
                    variables: {
                        address: e,
                        offset: n
                    },
                    fetchPolicy: "no-cache"
                }).pipe(ni(), I((i)=>{
                    const r = i.contractActions;
                    if (!r) throw new ti("contractActions");
                    return "unshieldedBalances" in r ? r.unshieldedBalances : "deploy" in r ? r.deploy.unshieldedBalances : [];
                }), I(xn));
    ou = (t, e, n = void 0)=>{
        const i = new URL(t);
        if (i.protocol !== "http:" && i.protocol !== "https:") throw new oi(i.protocol, [
            "http:",
            "https:"
        ]);
        const r = new URL(e);
        if (r.protocol !== "ws:" && r.protocol !== "wss:") throw new oi(r.protocol, [
            "ws:",
            "wss:"
        ]);
        ci(t, "indexer query URL"), ci(e, "indexer subscription URL");
        const s = new hl({
            fetch: zs,
            uri: t
        }), a = new vl({
            delay: {
                initial: 1e3,
                max: 1e4,
                jitter: !0
            },
            attempts: {
                max: 5
            }
        }), o = dc([
            a,
            s
        ]), c = new Wc({
            link: fc(({ query: l })=>{
                const u = zn(l);
                return u.kind === "OperationDefinition" && u.operation === "subscription";
            }, new gl(Nl({
                url: e,
                webSocketImpl: n
            })), o),
            cache: new Bc
        });
        return {
            async queryContractState (l, u) {
                let d;
                u ? d = {
                    blockOffset: u.type === "blockHeight" ? {
                        height: u.blockHeight
                    } : {
                        hash: u.blockHash
                    }
                } : d = null;
                const f = await c.query({
                    query: As,
                    variables: {
                        address: l,
                        offset: d
                    },
                    fetchPolicy: "no-cache"
                }).then(vn).then((h)=>h.data?.contractAction?.state ?? null);
                return f ? Oe(f) : null;
            },
            async queryZSwapAndContractState (l, u) {
                let d;
                u ? d = {
                    blockOffset: u.type === "blockHeight" ? {
                        height: u.blockHeight
                    } : {
                        hash: u.blockHash
                    }
                } : d = null;
                const f = await c.query({
                    query: Yl,
                    variables: {
                        address: l,
                        offset: d
                    },
                    fetchPolicy: "no-cache"
                }).then(vn).then((h)=>h.data?.contractAction);
                return f ? [
                    Kl(f.zswapState),
                    Oe(f.state),
                    f.transaction?.block?.ledgerParameters ? Zl(f.transaction.block.ledgerParameters) : pr.initialParameters()
                ] : null;
            },
            async queryUnshieldedBalances (l, u) {
                let d;
                u ? d = {
                    blockOffset: u.type === "blockHeight" ? {
                        height: u.blockHeight
                    } : {
                        hash: u.blockHash
                    }
                } : d = null;
                const f = await c.query({
                    query: Jl,
                    variables: {
                        address: l,
                        offset: d
                    },
                    fetchPolicy: "no-cache"
                }).then(vn).then((h)=>{
                    const p = h.data?.contractAction;
                    return p ? "unshieldedBalances" in p ? p.unshieldedBalances : "deploy" in p ? p.deploy.unshieldedBalances : [] : null;
                });
                return f ? xn(f) : null;
            },
            async queryDeployContractState (l) {
                return c.query({
                    query: $l,
                    variables: {
                        address: l
                    },
                    fetchPolicy: "no-cache"
                }).then((u)=>{
                    if (u.data?.contractAction) {
                        const d = u.data.contractAction;
                        if (!("deploy" in d)) return d.state;
                        const f = d.deploy.transaction.contractActions.find(({ address: h })=>h === l);
                        if (!f) throw ge.missingContractAction(l);
                        return f.state;
                    }
                    return null;
                }).then((u)=>u ? Oe(u) : null);
            },
            async watchForContractState (l) {
                return Tt(dr(c)(l)(null).pipe(I(Oe)));
            },
            async watchForUnshieldedBalances (l) {
                return Tt(hr(c)(l).pipe(I(xn)));
            },
            async watchForDeployTxData (l) {
                return Tt(c.watchQuery({
                    query: Ql,
                    variables: {
                        address: l
                    },
                    pollInterval: Ae,
                    fetchPolicy: "no-cache",
                    initialFetchPolicy: "no-cache",
                    nextFetchPolicy: "no-cache"
                }).pipe(Ie(), W((u)=>u.contractAction !== null), I((u)=>{
                    const d = u.contractAction;
                    return "deploy" in d ? d.deploy.transaction : d.transaction;
                }), W(yn), I((u)=>su(l, u))));
            },
            async watchForTxData (l) {
                return Tt(c.watchQuery({
                    query: Is,
                    variables: {
                        offset: {
                            identifier: l
                        }
                    },
                    pollInterval: Ae,
                    fetchPolicy: "no-cache",
                    initialFetchPolicy: "no-cache",
                    nextFetchPolicy: "no-cache"
                }).pipe(Ie(), W((u)=>u.transactions.length !== 0), I((u)=>u.transactions[0]), W(yn), I((u)=>({
                        tx: Rs(u.raw),
                        status: Ps(u.transactionResult),
                        txId: l,
                        txHash: u.hash,
                        identifiers: u.identifiers,
                        blockHeight: u.block.height,
                        blockHash: u.block.hash,
                        segmentStatusMap: Ms(u.transactionResult),
                        unshielded: Vs(u.unshieldedCreatedOutputs, u.unshieldedSpentOutputs),
                        blockTimestamp: u.block.timestamp,
                        blockAuthor: u.block.author,
                        indexerId: u.id,
                        protocolVersion: u.protocolVersion,
                        fees: {
                            paidFees: u.fees.paidFees,
                            estimatedFees: u.fees.estimatedFees
                        }
                    }))));
            },
            contractStateObservable (l, u = {
                type: "latest"
            }) {
                if (u.type === "txId") {
                    const p = eu(c)(u.txId).pipe(W(yn), ee(tu(u.txId)));
                    return u.inclusive ?? !0 ? p : p.pipe(en(1));
                }
                if (u.type === "latest") return ur(c)(l).pipe(ee(An(c)), ee(lr(l)));
                if (u.type === "all") return dr(c)(l)(null).pipe(ee(()=>au(c)(l)(null)));
                const d = u.type === "blockHash" ? {
                    hash: u.blockHash
                } : {
                    height: u.blockHeight
                }, f = fr(c)(d).pipe(ee(()=>An(c)(d)));
                return (u.type === "blockHeight" || u.type === "blockHash" ? ki(()=>u.inclusive ?? !0, f, f.pipe(en(1))) : f).pipe(ee(lr(l)));
            },
            unshieldedBalancesObservable (l, u = {
                type: "latest"
            }) {
                if (u.type === "txId") throw new Cl("txId configuration not supported for unshielded balances observable");
                if (u.type === "latest") return ur(c)(l).pipe(ee(kn(c)(l)));
                if (u.type === "all") return hr(c)(l).pipe(ee(()=>kn(c)(l)(null)));
                const d = u.type === "blockHash" ? {
                    hash: u.blockHash
                } : {
                    height: u.blockHeight
                }, f = fr(c)(d).pipe(ee(()=>kn(c)(l)(d)));
                return u.type === "blockHeight" || u.type === "blockHash" ? ki(()=>u.inclusive ?? !0, f, f.pipe(en(1))) : f;
            }
        };
    };
    gu = (t, e, n = void 0)=>{
        const i = ou(t, e, n);
        return {
            contractStateObservable (r, s) {
                return fe(r), i.contractStateObservable(r, s);
            },
            queryContractState (r, s) {
                return fe(r), i.queryContractState(r, s);
            },
            queryDeployContractState (r) {
                return fe(r), i.queryDeployContractState(r);
            },
            queryZSwapAndContractState (r, s) {
                return fe(r), i.queryZSwapAndContractState(r, s);
            },
            queryUnshieldedBalances (r, s) {
                return fe(r), i.queryUnshieldedBalances(r, s);
            },
            watchForContractState (r) {
                return fe(r), i.watchForContractState(r);
            },
            watchForUnshieldedBalances (r) {
                return fe(r), i.watchForUnshieldedBalances(r);
            },
            watchForDeployTxData (r) {
                return fe(r), i.watchForDeployTxData(r);
            },
            watchForTxData (r) {
                return i.watchForTxData(r);
            },
            unshieldedBalancesObservable (r, s) {
                return fe(r), i.unshieldedBalancesObservable(r, s);
            }
        };
    };
});
export { ge as IndexerDataError, St as IndexerError, Ol as IndexerFormattedError, Cl as IndexerProviderConfigError, _s as IndexerQueryError, ti as IndexerSubscriptionDataError, ru as correlateDeployTxId, gu as indexerPublicDataProvider, yn as isRegularTransaction, nu as toSegmentStatus, Ms as toSegmentStatusMap, Ps as toTxStatus, xn as toUnshieldedBalances, Vs as toUnshieldedUtxos, __tla };
