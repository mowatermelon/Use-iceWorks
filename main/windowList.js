const {
    BrowserWindow: e,
    ipcMain: t,
    dialog: n,
    app: r
} = require("electron"), {
    windowURL: i,
    isWin: o,
    isMac: a
} = require("./shared"), l = require("./services/worker/");
let s = !1, c = !1;

function u(e, r) {
    t.on("app-quit-install", () => {
        s = !0
    }), e.on("before-quit", () => {
        s = !0, r.destroy()
    }), r.on("close", t => {
        a ? s || (t.preventDefault(), r.hide()) : !l.build.checkRuning() && !l.start.checkRuning() || c || (t.preventDefault(), n.showMessageBox({
            tyoe: "question",
            title: e.getName(),
            message: "\u9879\u76ee\u6b63\u5728\u8fd0\u884c\u4e2d",
            detail: "\u662f\u5426\u4e2d\u6b62\u4efb\u52a1\uff0c\u5e76\u7acb\u5373\u9000\u51fa\uff1f",
            buttons: ["\u786e\u5b9a", "\u53d6\u6d88"]
        }, e => {
            0 == e && (c = !0, r.close())
        }))
    })
}
exports.createHomeWindow = function(t) {
    const n = new e({
        title: t.getName(),
        backgroundColor: "#fefefe",
        width: 870,
        height: 600,
        minWidth: 870,
        minHeight: 600,
        resizable: !0,
        center: !0,
        show: !0,
        title: "",
        fullscreenable: !1,
        transparent: !1,
        webPreferences: {
            preload: "on"
        }
    });
    return n.loadURL(i("index")), u(t, n), n
}, exports.createUpdaterWindow = (() => {
    const t = new e({
        backgroundColor: "#ECECEC",
        center: !0,
        frame: !0,
        fullscreenable: !1,
        height: 120,
        width: 320,
        maximizable: !1,
        minimizable: !1,
        resizable: !1,
        show: !1,
        title: "",
        webPreferences: {
            backgroundThrottling: !1
        }
    });
    return t.setMenu(null), t.loadURL(i("updater")), t
}), exports.openAboutWindow = (() => {
    const t = new e({
        width: 280,
        height: 200,
        title: "",
        resizable: !1,
        center: !0,
        show: !0,
        fullscreenable: !1,
        maximizable: !1,
        minimizable: !1,
        frame: !0,
        backgroundColor: "#ECECEC",
        webPreferences: {
            backgroundThrottling: !1
        }
    });
    t.setMenu(null), t.loadURL(i("about"))
});