const e = require("./logger"), {
	ipcMain: o
} = require("electron"), {
	autoUpdater: r
} = require("electron-updater"), {
	createUpdaterWindow: t
} = require("./windowList"), a = require("./helper/sendToWebContents"), n = require("./services/interaction/notify");
r.autoDownload = !1, r.logger = e;
let d = null;

function i(o, r = null) {
	e.info(o, r), a(d, "updater-message", {
		event: o,
		meta: r
	})
}
o.on("set-updater-window-size", (e, {
	width: o,
	height: r
}) => {
	d && d.setContentSize(o, r)
}), r.on("checking-for-update", () => {
	i("checking-for-update")
}), r.on("update-available", e => {
	d ? i("update-available", e) : n({
		title: `\u5b58\u5728\u53ef\u7528\u66f4\u65b0($ {
			e.version
		})`,
		body: "\u70b9\u51fb\u8fdb\u5165\u66f4\u65b0\uff0c\u4f53\u9a8c\u65b0\u7248",
		type: "info",
		onClick: () => {
			l.show()
		}
	})
}), r.on("update-not-available", e => {
	i("update-not-available", e)
}), r.on("error", e => {
	i("error", e)
}), r.on("download-progress", e => {
	i("download-progress", e)
}), r.on("update-downloaded", e => {
	i("update-downloaded", e)
});
const l = {
	show: () => {
		d ? (d.show(), d.focus()) : ((d = t()).on("ready-to-show", () => {
			d.show()
		}), d.on("close", () => {
			d.destroy(), d = null
		}))
	},
	register: () => {
		o.on("updater-check", (o, t) => {
			r.checkForUpdates().
			catch (o => {
				i("error", o), e.error("Failed handling checkForUpdates:", o)
			})
		}), o.on("updater-close", (e, o) => {
			d.close()
		}), o.on("updater-start", (o, t) => {
			r.downloadUpdate().
			catch (o => {
				i("error", o), e.error("Failed handling downloadUpdate:", o)
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
module.exports = l;