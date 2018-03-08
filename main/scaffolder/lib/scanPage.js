const r = require("fs"), e = require("path");
module.exports = 
async function({
    destDir: t,
    interpreter: n
}) {
    if (!t) throw new Error("\u6ca1\u6709\u4f20\u5165\u6b63\u786e\u7684 destDir");
    const o = e.join(t, "generator.json");
    return (JSON.parse(r.readFileSync(o, "utf-8")).routes || []).map(r => {
        const {
            page: e,
            path: t,
            layout: n
        } = r;
        return {
            page: e,
            path: t,
            layout: n
        }
    })
};