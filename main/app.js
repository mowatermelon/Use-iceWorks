const {
    ipcMain: e
} = require("electron"), {
    globalShortcut: o
} = require("electron"), r = require("./services/worker"), t = require("./logger"), {
    isWin: s,
    isMac: i
} = require("./shared");
i && (process.env.PATH = ["/usr/local/bin", process.env.PATH].join(":")), exports.registerApp = ((o, i) => {
    o.on("will-quit", () => {
        console.log("will-quit")
    }).on("window-all-closed", () => {
        console.log("window-all-closed"), s ? Promise.all([r.start.destroyByWindows(), r.build.destroyByWindows()]).then(() => {
            o.quit()
        }).
        catch (() => {
            o.quit()
        }) : (r.start.destroy(), r.build.destroy())
    }).on("before-quit", () => {
        t.report("app", {
            action: "before-quit"
        }), console.log("before-quit")
    }).on("activate", () => {
        i.home.show(), i.home.focus()
    }), e.on("setTitle", (e, o) => {
        i.home.setTitle(o)
    }), i.home.on("focus", ({
        sender: e
    }) => {
        e.webContents.send("focus")
    })
}), exports.registerShortcut = ((e, r) => {
    const s = "CommandOrControl+alt+P";
    o.register(s, () => {
        r.home.show()
    }) && (t.info("shortcutKey register success", s), t.report("app", {
        action: "shortcut-key",
        shortcutKey: s
    })), e.on("will-quit", () => {
        o.unregisterAll()
    })
});