const {
    fork: s
} = require("child_process"), e = require("ramda"), {
    getEnv: t
} = require("../../env"), {
    NPM_CLI: r
} = require("../../paths"), i = require("../../logger"), o = require("tree-kill"), h = require("../../terminal");
class n {
    constructor() {
        this.jobs = {}, this.paths = []
    }
    add(e, i) {
        if (this.paths.some(s => s == e)) return;
        const o = s(r, ["run", "build", "--scripts-prepend-node-path=auto"], {
            cwd: e,
            env: Object.assign({}, t()),
            silent: !0,
            detached: !0
        });
        let n = "", a = "";
        o.stdout.on("data", s => {
            const t = s + "";
            n += t, h.send(e, t.trim())
        }), o.stderr.on("data", s => {
            const t = s + "";
            a += t, h.send(e, t.trim())
        }), o.on("exit", s => {
            i(s, n, a), h.send(e, "buid \u8fdb\u7a0b\u9000\u51fa:", e, s), this.remove(e)
        }), this.jobs[e] = o, this.paths.push(e)
    }
    remove(s) {
        this.paths = e.filter(e => e !== s, this.paths)
    }
    has(s) {
        return -1 !== e.indexOf(s, this.paths)
    }
    destroyByWindows() {
        return 0 == Object.keys(this.jobs) ? Promise.resolve() : (i.debug("\u6e05\u7406 build \u8fdb\u7a0b"), Promise.all(Object.keys(this.jobs).map(s => {
            const t = this.jobs[s] && this.jobs[s].pid;
            return t ? new Promise(r => {
                o(parseInt(t, 10), "SIGINT", i => {
                    i || (console.log("\u505c\u6b62\u8fdb\u7a0b", s, t), delete this.jobs[s], this.paths = e.filter(e => e !== s, this.paths)), r()
                })
            }) : Promise.resolve()
        })))
    }
    destroy() {
        Object.keys(this.jobs).forEach(s => {
            this.jobs[s].kill("SIGINT"), this.paths = e.filter(e => e !== s, this.paths)
        })
    }
    checkRuning() {
        return this.paths.length > 0
    }
}
module.exports = new n;