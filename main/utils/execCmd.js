const {
    exec: e
} = require("child_process"), {
    getEnv: r
} = require("../env");
module.exports = function(n, c) {
    return new Promise((o, i) => {
        e(n, {
            cwd: c,
            env: r()
        }, (e, r, n) => {
            e ? i(r + n) : o(r + n)
        })
    })
};