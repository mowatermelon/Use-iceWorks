const e = require("./logger"), r = require("./helper/checkEnv"), o = require("./services/settings");
global.log = e;
const {
    app: s,
    dialog: i
} = require("electron"), {
    appMenu: t,
    trayMenu: a
} = require("./menu"), {
    registerApp: n,
    registerShortcut: p
} = require("./app"), {
    createHomeWindow: c
} = require("./windowList"), l = require("./ipcService"), {
    isDev: u
} = require("./shared"), {
    register: g
} = require("./autoUpdater"), h = require("./services");
global.services = h;
const d = {};
process.on("error", r => {
    e.error(r.stack), e.report("app", {
        type: "error",
        error: JSON.stringify(r.message)
    }), i.showMessageBox({
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
    }), i.showMessageBox({
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
    }), i.showMessageBox({
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
    const i = c(s);
    d.home = i, s.windows = d, global.windows = d, t(s, d), n(s, d), p(s, d), u || g(s, d), l.init(), r()
});