const s = require("path"), e = require("fs"), a = require("kebab-case"), {
    getLayouts: r
} = require("../../data/index"), t = "https://img.alicdn.com/tfs/TB1SvQmlsLJ8KJjy0FnXXcFDpXa-976-974.png";
module.exports = (async({
    destDir: c
}) => {
    const i = s.join(c, "generator.json"), n = {};
    e.existsSync(i) && Object.assign(n, require(i));
    const o = s.join(c, "src/layouts");
    let l = [];
    l = e.existsSync(o) ? e.readdirSync(o) : [];
    const m = await r(), u = {};
    Array.isArray(n.layouts) && n.layouts.forEach(s => {
        u[s.className] = Object.assign({}, s, {
            name: s.name || s.source,
            className: s.className || s.alias,
            mockup: s.snapshot || t,
            description: s.description || s.title
        })
    }), Array.isArray(m) && m.forEach(s => {
        if (u[s.className]) for (let e of s) u[s.className][e] || (u[s.className][e] = s[e]);
        else u[s.className] = s
    });
    const p = Object.keys(u);
    return l.forEach(s => {
        p.includes(s) || p.push(s)
    }), p.map(s => u[s] ? u[s] : {
        name: a(s).replace(/^-/, ""),
        className: s,
        title: "\u7528\u6237\u81ea\u5b9a\u4e49\u5e03\u5c40",
        description: "\u7528\u6237\u81ea\u5b9a\u4e49\u5e03\u5c40",
        snapshot: t
    })
});