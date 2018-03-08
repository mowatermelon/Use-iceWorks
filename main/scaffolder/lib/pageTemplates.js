const e = require("fs"), r = require("path"), i = require("ejs");
require("./makeTempDir");
const t = r.join(__dirname, "../templates");
module.exports = e.readdirSync(t).map(a => {
    const m = r.join(t, a), n = e.readFileSync(m, "utf-8");
    return {
        compile: i.compile(n, {}),
        filePath: m,
        fileName: a
    }
});