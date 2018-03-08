const e = require("node-ipc"), o = require("./helper/sendToWebContents"), s = require("./logger");
e.config.id = "iceworks", e.config.silent = !0, e.serveNet(function() {
    e.server.on("message", function({
        message: e,
        path: t
    }, r) {
        "sdk_status" === e.type ? o(global.windows.home, "sdk-dev-status", {
            message: e,
            path: t
        }) : "update_project" === e.action ? o(global.windows.home, "update_project", {
            message: e,
            path: t
        }) : s.warn("\u672a\u5904\u7406\u7684\u6d88\u606f\u5185\u5bb9", e)
    })
}), e.server.on("error", function(o) {
    e.log("Got an ERROR!", o)
}), module.exports = {
    init: () => {
        e.server.start(), s.info("iceworks ipc \u542f\u52a8")
    }
};