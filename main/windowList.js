const path = require('path');

const {
	BrowserWindow: e,
	ipcMain: t,
	dialog: n,
	app: r,
	shell: o
} = require("electron"), {
	windowURL: i,
	isWin: a,
	isMac: l
} = require("./shared"), s = require("./services/worker/"), c = require("./createTouchBar");
let u = !1, d = !1;

function w(e, r) {
	t.on("app-quit-install", () => {
		u = !0
	}), e.on("before-quit", () => {
		u = !0, r.destroy()
	}), r.on("close", t => {
		l ? u || (t.preventDefault(), r.hide()) : !s.build.checkRuning() && !s.start.checkRuning() || d || (t.preventDefault(), n.showMessageBox({
			type: "question",
			title: e.getName(),
			message: "\u9879\u76ee\u6b63\u5728\u8fd0\u884c\u4e2d",
			detail: "\u662f\u5426\u7ec8\u6b62\u4efb\u52a1\uff0c\u5e76\u7acb\u5373\u9000\u51fa\uff1f",
			buttons: ["\u53d6\u6d88", "\u786e\u5b9a"]
		}, e => {
			1 == e && (d = !0, r.close())
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
	return n.loadURL(path.resolve('renderer/index.html')), w(t, n), n
}, exports.createUpdaterWindow = (() => {
	const t = new e({
		backgroundColor: "#ECECEC",
		center: !0,
		frame: !0,
		fullscreenable: !1,
		height: 83,
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
	var n = (e, n) => {
		n != t.webContents.getURL() && (e.preventDefault(), o.openExternal(n))
	};
	return t.webContents.on("will-navigate", n), t.webContents.on("new-window", n), t.setMenu(null), t.loadURL(path.resolve('renderer/updater.html')), t
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
	t.setMenu(null), t.loadURL(path.resolve('renderer/about.html'))
}), exports.createTouchBar = c;