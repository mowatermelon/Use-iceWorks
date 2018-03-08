const {
    isDev: n,
    isWin: i,
    isMac: o
} = require("./shared"), s = require("path"), e = n ? s.join(process.cwd(), "app") : s.join(process.resourcesPath, "app"), d = s.join(e, "node"), r = s.join(e, "bin");
let a = o ? s.join(d, "darwin") : s.join(d, "win-x64");
const j = s.join(e, "node_modules", "npm", "bin", "npm-cli.js");
let p;
o ? p = s.join(e, "sass", "darwin-x64-57_binding.node") : i && (p = s.join(e, "sass", "win32-x64-57_binding.node")), module.exports = {
    APP_BIN_PATH: r,
    APP_PATH: e,
    NODE_PATH: a,
    NPM_CLI: j,
    SASS_BINARY_PATH: p
};