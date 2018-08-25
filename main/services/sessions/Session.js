const {
    EventEmitter: e
} = require("events"), {
    StringDecoder: t
} = require("string_decoder"), s = require("default-shell"), r = require("electron-is"), {
    getEnv: i
} = require("../../env"), {
    WIN_NPM_CMD: o
} = require("../../paths"), n = r.windows(), c = () => new Error("`node-pty` failed to load. Typically this means that it was built incorrectly. Please check the `readme.md` to more info.");
let h;
try {
    h = require("node-pty").spawn
} catch (e) {
    throw c()
}
module.exports = class extends e {
    constructor({
        rows: e = 40,
        cols: r = 80,
        cwd: l,
        shell: d,
        shellArgs: a,
        env: y = {}
    }) {
        super();
        const w = new t("utf8"),
            p = ["--login"],
            u = Object.assign({}, i(), y);
        n && "npm" == d && (d = o);
        try {
            this.pty = h(d || s, a || p, {
                cols: r,
                rows: e,
                cwd: l,
                env: u
            })
        } catch (e) {
            throw /is not a function/.test(e.message) ? c() : e
        }
        this.pty.on("data", e => {
            this.ended || this.emit("data", w.write(e))
        }), this.pty.on("exit", (e, t) => {
            this.ended || (this.ended = !0, this.emit("exit", e, t))
        }), this.shell = d || s
    }
    exit() {
        this.destroy()
    }
    write(e) {
        this.pty.write(e)
    }
    resize({
        cols: e,
        rows: t
    }) {
        try {
            this.pty.resize(e, t)
        } catch (e) {
            console.error(e.stack)
        }
    }
    destroy() {
        try {
            this.pty.kill()
        } catch (e) {
            console.error("exit error", e.stack)
        }
        this.emit("exit", 0, 0), this.ended = !0
    }
};