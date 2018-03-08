const e = require("./logger"), {
    ipcMain: o
} = require("electron"), {
    autoUpdater: r
} = require("electron-updater"), {
    createUpdaterWindow: a
} = require("./windowList"), t = require("./helper/sendToWebContents"), n = require("./services/interaction/notify");
r.autoDownload = !1, r.logger = e;
let d = null;

function l(o, r = null) {
    e.info(o, r), t(d, "updater-message", {
        event: o,
        meta: r
    })
}
r.on("checking-for-update", () => {
    l("checking-for-update")
}), r.on("update-available", e => {
    d ? l("update-available", e) : n({
        title: `\u5b58\u5728\u53ef\u7528\u66f4\u65b0($ {
            e.version
        })`,
        body: "\u70b9\u51fb\u8fdb\u5165\u66f4\u65b0\uff0c\u4f53\u9a8c\u65b0\u7248",
        type: "none",
        onClick: () => {
            i.show()
        }
    })
}), r.on("update-not-available", e => {
    l("update-not-available", e)
}), r.on("error", e => {
    l("error", e)
}), r.on("download-progress", e => {
    l("download-progress", e)
}), r.on("update-downloaded", e => {
    l("update-downloaded", e)
});
const i = {
    show: () => {
        d ? (d.show(), d.focus()) : ((d = a()).on("ready-to-show", () => {
            d.show()
        }), d.on("close", () => {
            d.destroy(), d = null
        }))
    },
    register: () => {
        o.on("updater-check", (o, a) => {
            r.checkForUpdates().
            catch (o => {
                l("error", o), e.error("Failed handling checkForUpdates:", o)
            })
        }), o.on("updater-close", (e, o) => {
            d.close()
        }), o.on("updater-start", (o, a) => {
            r.downloadUpdate().
            catch (o => {
                l("error", o), e.error("Failed handling downloadUpdate:", o)
            })
        }), o.on("updater-install", (e, o) => {
            r.quitAndInstall()
        }), e.info("Updater starting..."), r.checkForUpdates().
        catch (o => {
            e.error("Failed handling checkForUpdatesAndNotify:", o)
        })
    },
    checkForUpdatesAndNotify() {
        r.checkForUpdatesAndNotify().
        catch (o => {
            e.error("Failed handling checkForUpdatesAndNotify:", o)
        })
    }
};
module.exports = i;