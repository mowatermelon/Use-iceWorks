const e = require("path"), n = require("fs");
module.exports = ((s, i = {}) => new Promise((c, r) => {
    const t = e.join(s, "package.json"), o = n.readFileSync(t);
    try {
        const e = JSON.parse(o);
        e.dependencies = Object.assign(i, e.dependencies), n.writeFileSync(t, JSON.stringify(e, null, 2)), c()
    } catch (e) {
        r()
    }
}));