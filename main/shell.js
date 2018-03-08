const e = require("child_process"), n = require("os"), o = require("path"), t = require("./logger"), {
    isWin: r,
    isMac: s
} = require("./shared"), i = new Set(["LOCAL_GIT_DIRECTORY"]);
async
function c() {
    const n = u(), o = new Promise(o => {
        let t = null, r = null, s = "", i = !1;
        const c = () => {
            !i && t && (t.kill(), i = !0)
        };
        process.once("exit", c), setTimeout(() => {
            c()
        }, 5e3);
        const u = {
            detached: !0,
            stdio: ["ignore", "pipe", process.stderr]
        }, l = [];
        (t = e.spawn(n, ["-ilc", "command env"], u)).on("error", e => {
            i = !0, r = e
        }), t.stdout.on("data", e => {
            l.push(e)
        }), t.on("close", (e, n) => {
            i = !0, process.removeListener("exit", c), l.length && (s = Buffer.concat(l).toString("utf8")), o({
                stdout: s,
                error: r
            })
        })
    }), {
        stdout: t,
        error: r
    } = await o;
    return r ? null : t
}
function u() {
    return process.env.SHELL ? process.env.SHELL : "/bin/bash"
}
async
function l(e) {
    if (r) return;
    const o = await c();
    if (!o) return;
    const t = {};
    for (const e of o.split(n.EOL)) if (e.includes("=")) {
        const n = e.split("=");
        if (2 === n.length) t[n[0]] = n[1];
        else {
            const e = n.shift(), o = n.join("=");
            e && (t[e] = o)
        }
    }
    e(t)
}
function a(e) {
    for (const n in e) i.has(n) || (process.env[n] = e[n])
}
exports.shellNeedsPatching = function(e) {
    return s && !e.env.PWD
}, exports.updateEnvironmentForProcess = function() {
    return l(a)
};
const d = /: (\d{1,}).*/;
exports.getActiveCodePage = function() {
    return r ? new Promise((n, r) => {
        const s = process.env.windir || "C:\\Windows", i = o.join(s, "System32", "chcp.com"), c = e.spawn(i), u = [];
        let l = !1;
        c.on("error", e => {
            t.error("unable to resolve active code page", e), l = !0
        }), c.stdout.on("data", e => {
            u.push(e)
        }), c.on("close", e => {
            if (l) return void n(null);
            const o = Buffer.concat(u).toString("utf8"), r = d.exec(o);
            if (r) {
                const e = r[1], o = parseInt(e, 10);
                isNaN(o) ? n(null) : n(o)
            } else t.debug(`regex did not match output: '${o}'`), n(null)
        })
    }) : Promise.resolve(null)
};