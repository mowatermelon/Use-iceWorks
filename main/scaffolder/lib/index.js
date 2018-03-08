const e = require("fs"), r = require("ejs"), t = require("path"), i = require("uppercamelcase"), a = require("kebab-case"), n = require("mkdirp"), s = require("rimraf"), c = require("debug")("create-ice-app"), o = require("./utils"), u = require("./makeTempDir");
require("./pageTemplates"), exports.createProject = require("./createProject"), exports.removePreviewPage = require("./removePreviewPage"), exports.createPage = require("./createPage"), exports.scanLayout = require("./scanLayout"), exports.scanPage = require("./scanPage"), exports.migrateBlock = async
function r({
    name: i,
    npm: a,
    version: u,
    destProjectPath: p,
    interpreter: l
}) {
    const m = t.join(p, "src/components"), q = t.join(m, i);
    if (e.existsSync(q)) {
        const e = await o.createInterpreter("BLOCK_EXISTS_RENAME", {
            name: i
        }, l);
        if (!0 !== e) return e ? r({
            name: e,
            npm: a,
            version: u,
            destProjectPath: p,
            interpreter: l
        }) : void 0;
        s.sync(q)
    }
    const P = await o.getTarballURL(a, u), j = t.join(g, "blocks"), g = t.join(j, i), f = (await o.extractTarball(P, g)).filter(e => /src\//.test(e));
    for (let r = 0; r < f.length; r++) {
        const a = t.relative(t.join(j, i, "src"), f[r]), s = t.join(p, "src/components", i), u = t.join(s, a);
        if (e.existsSync(s) || n.sync(s), e.existsSync(u)) {
            if (!await o.createInterpreter("OVERRIDE_FILE", {
                destFilePath: u
            }, l)) return
        }
        e.writeFileSync(u, e.readFileSync(f[r]), "utf-8"), c("created destFilePath", u)
    }
};