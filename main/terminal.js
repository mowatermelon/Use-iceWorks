const e = require("./logger"), o = require("./helper/sendToWebContents");
module.exports = {
    send: (t, ...n) => {
        e.debug.apply(e, n), o(windows.home, "terminal-output", {
            path: t,
            data: n.join(" ")
        })
    }
};