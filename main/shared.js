const e = require("electron-is"), {
    resolve: r
} = require("app-root-path");
exports.isDev = e.dev(), exports.isProd = e.production(), exports.isMac = e.osx(), exports.isWin = e.windows(), exports.isLinux = e.linux();
const t = e.dev() ? "http://localhost:7001" : `file: //${r("renderer")}`;exports.rendererHost=t,exports.windowURL=((e,r="")=>`${t}/${e}.html${r}`),exports.registries=[{name:"npm",value:"https://registry.npmjs.org",label:"https://registry.npmjs.org"},{name:"cnpm",value:"https://registry.npm.taobao.org",label:"https://registry.npm.taobao.org"}];