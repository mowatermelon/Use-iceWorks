const {
    getEnv: e
} = require("../env"), r = require("../logger"), {
    exec: n
} = require("child_process");
module.exports = function() {
    n("node --version", {
        env: e()
    }, (e, n, o) => {
        r.debug("node version:", n + o)
    })
};
