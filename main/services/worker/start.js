const {
    fork: s
} = require("child_process"), t = require("ramda"), {
    getEnv: e
} = require("../../env"), {
    NPM_CLI: i
} = require("../../paths"), r = require("../../logger"), o = require("tree-kill"), h = require("../../terminal");
class n {
    constructor() {
        this.jobs = {}, this.paths = []
    }
    add(t, r, o) {
        const n = s(i, ["run", "start", "--scripts-prepend-node-path=auto"], {
            cwd: t,
            env: Object.assign({}, e(), {
                PORT: r
            }),
            silent: !0,
            detached: !0
        });
        let a = "", l = "";
        n.stdout.on("data", s => {
            const e = s + "";
            a += e, h.send(t, e.trim())
        }), n.stderr.on("data", s => {
            const e = s + "";
            l += e, h.send(t, e.trim())
        }), n.on("exit", s => {
            h.send(t, "dev \u8fdb\u7a0b\u9000\u51fa:", t, s), 0 !== s && -1 !== this.paths.indexOf(t) ? o(s, a, l) : o(s, null, null), this.remove(t)
        }), this.jobs[t] = n, this.paths.push(t)
    }
    remove(s) {
        if (this.paths = t.filter(t => t !== s, this.paths), this.jobs[s]) {
            const t = this.jobs[s].pid;
            t && o(parseInt(t, 10), "SIGINT", e => {
                e || (console.log("\u505c\u6b62\u8fdb\u7a0b", s, t), delete this.jobs[s])
            })
        }
    }
    has(s) {
        return -1 !== t.indexOf(s, this.paths)
    }
    destroyByWindows() {
        return 0 == Object.keys(this.jobs) ? Promise.resolve() : Promise.all(Object.keys(this.jobs).map(s => {
            const e = this.jobs[s] && this.jobs[s].pid;
            return e ? new Promise(i => {
                o(parseInt(e, 10), "SIGINT", r => {
                    r || (console.log("\u505c\u6b62\u8fdb\u7a0b", s, e), delete this.jobs[s], this.paths = t.filter(t => t !== s, this.paths)), i()
                })
            }) : Promise.resolve()
        }))
    }
    destroy() {
        Object.keys(this.jobs).forEach(s => {
            this.jobs[s].kill("SIGINT"), this.paths = t.filter(t => t !== s, this.paths)
        })
    }
    checkRuning() {
        return this.paths.length > 0
    }
}
module.exports = new n;