const e = require("request"), r = require("./config"), t = require("fs"), n = require("path"), i = require("zlib"), s = require("tar"), o = require("mkdirp"), c = require("rimraf"), a = require("debug")("utils"), p = require("./makeTempDir"), u = require("./errors/DependenciesError"), l = exports.downloadToDest = function(e, r) {
    return o.sync(r), new Promise((e, r) => {})
}, d = exports.extractTarball = function(r, c) {
    return new Promise((p, u) => {
        a("npmTarball", r);
        const l = [];
        e.get(r).on("error", u).pipe(i.Unzip()).pipe(s.Parse()).on("entry", e => {
            if (/\.npmignore/.test(e.path)) return;
            const r = e.path.replace(/^package\//, "");
            a("\u5199\u5165\u6587\u4ef6", r);
            const i = n.join(c, r);
            o.sync(n.dirname(i)), e.pipe(t.createWriteStream(i)), l.push(i)
        }).on("end", () => {
            p(l)
        })
    })
}, m = exports.extractBlock = function(r, c, p, u) {
    return new Promise((l, d) => {
        a("npmTarball", c);
        const m = [], _ = [];
        e.get(c).on("error", d).pipe(i.Unzip()).pipe(s.Parse()).on("entry", e => {
            if (!/src|mock\//.test(e.path)) return;
            if (Array.isArray(u) && u.some(r => new RegExp(r).test(e.path))) return;
            let i = "";
            if (-1 != e.path.indexOf("mock/")) i = n.join(p, e.path.replace(/^package\//, ""));
            else {
                const t = e.path.replace(/^package\//, "").replace(/src/g, "");
                i = n.join(r, t);
                const s = n.basename(t), o = /^__([^_]+)_([^_]+)__/.exec(s);
                if (o && o[1] && o[2]) {
                    const e = n.extname(s);
                    i = n.join(p, "src", o[1], o[2] + e), _.push({
                        destPath: i,
                        projectDir: p,
                        dir: o[1],
                        file: o[2],
                        extName: e
                    })
                } else {
                    const e = /^__([^_]+)__/.exec(s);
                    if (e && e[1]) {
                        const r = n.extname(s);
                        i = n.join(p, "src", e[1] + r), _.push({
                            destPath: i,
                            projectDir: p,
                            dir: ".",
                            file: e[1],
                            extName: r
                        })
                    } else _.push({
                        destPath: i,
                        projectDir: p
                    })
                }
            }
            a("\u5199\u5165\u6587\u4ef6", i), t.existsSync(i) || (o.sync(n.dirname(i)), e.pipe(t.createWriteStream(i)), m.push(i))
        }).on("end", () => {
            _.forEach(({
                destPath: e,
                projectDir: r,
                dir: i
            }) => {
                setTimeout(() => {
                    const s = t.readFileSync(e, "utf-8"), o = n.relative(r, e), c = s.replace(new RegExp(`__$ {
                        i
                    }
                    _([ ^ _] + ) __`, "g"), (e, r) => r).replace(new RegExp("__([^_]+)_([^_]+)__", "g"), (e, r, t) => /components/.test(o) && "config" === r ? `.. / $ {
                        r
                    }
                    /${t}`:r!==i?`../.. / $ {
                        r
                    }
                    /${t}`:e).replace(new RegExp("__([^_]+)__","g"),(e,r)=>/components / .test(o) ? `.. / $ {
                        r
                    }` : `.. / .. / $ {
                        r
                    }`);
                    t.writeFileSync(e, c, "utf-8")
                }, 500)
            }), l(m)
        })
    })
}, _ = exports.getTarballURL = function(t, n = "latest") {
    return new Promise((i, s) => {
        e({
            url: `$ {
                r.registry
            }
            /${t}/$ {
                n
            }`,
            json: !0
        }, (e, r, t) => {
            !e && t && t.dist && t.dist.tarball ? i(t.dist.tarball) : s(e || new Error(JSON.stringify(r.body)))
        })
    })
}, f = exports.getDependencies = function(t, n = "latest") {
    return new Promise((i, s) => {
        e({
            url: `$ {
                r.registry
            }
            /${t}/$ {
                n
            }`,
            json: !0
        }, (e, r, o) => {
            !e && o && o.dist && o.dist.tarball ? i({
                dependencies: o.dependencies,
                devDependencies: o.devDependencies,
                peerDependencies: o.peerDependencies
            }) : s(new u(`$ {
                t
            }
            not found`, {
                body: r.body,
                message: `$ {
                    t
                }@$ {
                    n
                }\u4e0d\u5b58\u5728`
            }))
        })
    })
}, g = "cn";
exports.createInterpreter = function(e, t = {}, n) {
    const i = (r.locale[e] || r.locale.unknown).cn;
    return new Promise(r => {
        n({
            type: e,
            message: i,
            data: t
        }, e => {
            r(e)
        })
    })
}, exports.checkValidICEProject = function(e) {
    if (!t.existsSync(e)) return !1;
    const r = n.join(e, "package.json");
    try {
        const e = require(r);
        return "ice" in e || "buildConfig" in e
    } catch (e) {
        return !1
    }
    const i = n.join(e, "abc.json");
    try {
        const e = require(i);
        return "project" === e.repository.type && "ice" === e.type
    } catch (e) {
        return !1
    }
};