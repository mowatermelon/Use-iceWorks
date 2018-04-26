const e = require("./logger"), r = require("./helper/checkEnv"), o = require("./services/settings");
global.log = e;
const {
	app: s,
	dialog: t
} = require("electron"), {
	appMenu: a,
	trayMenu: i
} = require("./menu"), {
	registerApp: n,
	registerShortcut: p
} = require("./app"), {
	createHomeWindow: c,
	createTouchBar: l
} = require("./windowList"), u = require("./ipcService"), {
	isDev: g
} = require("./shared"), {
	register: h
} = require("./autoUpdater"), d = require("./services");
global.services = d;
const m = {};
global.windows = m, d.createTouchBar = l, process.on("error", r => {
	e.error(r.stack), e.report("app", {
		type: "error",
		error: JSON.stringify(r.message)
	}), t.showMessageBox({
		title: "\u7a0b\u5e8f\u5f02\u5e38",
		type: "error",
		message: r.message,
		callback: () => {
			s.quit()
		}
	})
}).on("unhandledRejection", (r, o) => {
	e.error(`App Unhandled Rejection at: ,
	$ {
		o
	},
	'reason:',
	$ {
		r
	}`), e.report("app", {
		type: "unhandled-rejection",
		reason: r,
		promise: o
	}), t.showMessageBox({
		title: "\u7a0b\u5e8f\u5f02\u5e38",
		type: "error",
		message: `App Unhandled Rejection at: ,
		$ {
			o
		},
		'reason:',
		$ {
			r
		}`,
		callback: () => {
			s.quit()
		}
	})
}).on("uncaughtException", r => {
	e.error(r.stack), e.report("app", {
		type: "uncaught-exception",
		error: JSON.stringify(r.message)
	}), t.showMessageBox({
		title: "\u7a0b\u5e8f\u5f02\u5e38",
		type: "error",
		message: `App uncaughtException$ - $ {
			r
		}`,
		callback: () => {
			s.quit()
		}
	})
}), s.on("ready", () => {
	e.info("process.version:", process.version), e.info("process.platform:", process.platform), e.info("process.arch:", process.arch), e.info("process.versions.modules:", process.versions.modules), e.report("app", {
		action: "launch",
		version: s.getVersion(),
		platform: process.platform,
		arch: process.arch
	}), o.init();
	const t = c(s);
	m.home = t, s.windows = m, global.windows = m, a(s, m), n(s, m), p(s, m), g || h(s, m), u.init(), r()
});