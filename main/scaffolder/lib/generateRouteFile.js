const t = require("util");
module.exports = function(e, a) {
    const n = [], u = a.map(t => {
        let e = "";
        return t.page ? (t.layout && !n.includes(t.layout) && (n.push(t.layout), e = `import $ {
            t.layout
        }
        from './layouts/${t.layout}';\n`), `$ {
            e
        }
        import $ {
            t.page
        }
        from './pages/${t.page}';`) : ""
    }).join("\n") + "\n", p = {};
    a.forEach(t => {
        if (!t.path || "*" === t.path) return void p["/"].childRoutes.push(o({
            path: "*",
            layoutName: t.page
        }));
        if ("/" === t.path) return void(p["/"] = o({
            path: "/",
            layoutName: t.layout,
            indexRouteComponent: t.page
        }));
        const e = t.path.replace(/^\//, "").split("/");
        1 === e.length ? p["/" + e[0]] = o({
            path: "/" + e[0],
            layoutName: t.layout,
            indexRouteComponent: t.page
        }) : p["/" + e[0]] ? p["/" + e[0]].childRoutes.push(o({
            path: e.slice(1).join("/"),
            layoutName: t.page
        })) : p["/" + e[0]] = o({
            path: "/" + e[0],
            layoutName: t.layout,
            indexRouteComponent: t.page,
            childRoutes: [o({
                path: e.slice(1).join("/"),
                layoutName: t.page
            })]
        })
    });
    const i = Object.keys(p).map(t => p[t]).sort((t, e) => "/" !== e.path), l = t.inspect(i, {
        showHidden: !1,
        depth: null
    }).replace(/\'@@([a-zA-Z0-9]+)@@\'/g, (t, e) => e);
    return {
        imports: u.replace(/\'@@([a-zA-Z0-9]+)@@\'/g, (t, e) => e),
        routes: l
    }
};
const e = {};

function o({
    path: t,
    layoutName: o,
    indexRouteComponent: a,
    indexRouteRedirect: n,
    childRoutes: u
}) {
    const p = {
        path: t,
        childRoutes: u || []
    };
    return o && (p.component = `@@$ {
        o
    }@@`), a && (p.indexRoute = Object.assign({}, p.indexRoute, {
        component: `@@$ {
            a
        }@@`
    })), n && (p.indexRoute = Object.assign({}, p.indexRoute, {
        redirect: n
    })), e[t] = p, p
}
