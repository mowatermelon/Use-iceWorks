const e = require("npm-run-path"), r = require("path"), t = require("./services/settings"), {
    isWin: s
} = require("./shared"), {
    NODE_PATH: i,
    SASS_BINARY_PATH: n
} = require("./paths");
exports.SASS_BINARY_PATH = n, exports.getEnv = (() => {
    const o = e.env(), A = Object.assign(o, {
        npm_config_registry: t.get("registry"),
        yarn_registry: t.get("registry"),
        SASS_BINARY_PATH: n,
        CLICOLOR: 1,
        FORCE_COLOR: 1,
        COLORTERM: "truecolor",
        TERM: "xterm-256color",
        ICEWORKS_IPC: "yes"
    }), O = [i, o.PATH, process.env.PATH].filter(e => !! e);
    if (s) {
        const e = Object.keys(process.env), t = -1 !== e.indexOf("Path"), s = -1 !== e.indexOf("PATH"), i = O.join(r.delimiter);
        s ? A.PATH = i : t ? A.Path = i : A.path = i
    } else O.push("/usr/local/bin"), A.PATH = O.join(r.delimiter);
    return A
});