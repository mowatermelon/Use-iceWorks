const {
    fork: e
} = require("child_process"), {
    getEnv: t
} = require("../env"), {
    NPM_CLI: s
} = require("../paths"), i = require("../logger"), r = require("../terminal");
class n extends Error {
    constructor(e, t) {
        super(e), this.metadata = t
    }
}
const c = require("path"), p = require("fs"), d = require("path-exists"), o = {
    fork: (i, r) => e(s, i, Object.assign(r, {
        env: t(),
        stdio: ["pipe", "pipe", "pipe", "ipc"],
        detached: !0
    })),
    run(i, c) {
        let p = "";
        "string" == typeof i && (i = i.split(" ")), (i = i.sort(e => e.startsWith("-") ? 1 : 0)).push("--scripts-prepend-node-path=auto");
        const d = c.cwd;
        return r.send(d, "npm " + i.join(" ")), new Promise((o, a) => {
            const u = e(s, i, Object.assign(c, {
                env: t(),
                stdio: ["pipe", "pipe", "pipe", "ipc"],
                detached: !0
            }));
            u.stdout.on("data", e => {
                r.send(d, ("" + e).trim()), p += e
            }), u.stderr.on("data", e => {
                r.send(d, ("" + e).trim()), p += e
            }), u.on("close", e => {
                r.send(d, "exit", e), 0 === e ? o(e, "", p) : a(new n("runcmd", {
                    cmd: s,
                    args: i,
                    message: p
                }))
            })
        })
    },
    repair(e) {
        const t = c.join(e, "package.json");
        return new Promise((e, s) => {
            d(t).then(i => {
                if (i) try {
                    const i = p.readFileSync(t), r = JSON.parse(i.toString());
                    r.scripts = r.scripts || {}, r.devDependencies = r.devDependencies || {}, r.scripts = Object.assign({}, r.scripts, {
                        start: "ice dev",
                        build: "ice build"
                    });
                    const n = r.ice;
                    n && (n.projectName && (r.title = n.projectName), r.buildConfig = {
                        theme: n.themePackage,
                        entry: n.entry
                    }, delete r.ice), r.devDependencies = Object.assign({}, r.devDependencies, {
                        "ice-scripts": "latest"
                    }), p.writeFileSync(t, JSON.stringify(r, null, 2)), e()
                } catch (e) {
                    s(e)
                } else s()
            })
        })
    }
};
module.exports = o;