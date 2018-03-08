const t = require("electron-settings"), {
    isWin: e
} = require("../shared"), i = "userconfig", r = {
    registry: "https://registry.npm.taobao.org",
    terminal: e ? "Cmd" : "Terminal",
    editor: "VisualStudioCode",
    tone: !0,
    shortcutKey: "CommandOrControl+alt+P"
};
module.exports = {
    withScope: t => `userconfig.$ {
        t
    }`,
    init() {
        Object.entries(r).forEach(t => {
            const[e, i] = t;
            this.has(e) || this.set(e, i)
        })
    },
    set(e, i) {
        t.set(this.withScope(e), i)
    },
    get(e) {
        return t.get(this.withScope(e))
    },
    has(e) {
        return t.has(this.withScope(e))
    },
    getAll: () => t.get("userconfig")
};