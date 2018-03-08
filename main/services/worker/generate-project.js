const e = require("../../scaffolder"), r = require("../../utils/appendDependencies"), {
    dialog: t
} = require("electron"), o = require("../../logger");
module.exports = (t => {
    const n = {}, a = {
        destDir: t.targetPath,
        scaffolding: t.npm,
        version: t.version,
        projectName: t.projectName,
        commonBlock: !0,
        interpreter: ({
            type: e,
            message: r,
            data: t
        }, c) => {
            switch (o.info("generate project", e, r), e) {
            case "FILE_CREATED":
                t.forEach(e => o.info(e)), c(!0);
                break;
            case "ADD_DEPENDENCIES":
                const s = t;
                o.info("generate project dependencies", a.destDir, s), Object.assign(n, s), c(!0);
                break;
            default:
                c(!0)
            }
        }
    };
    return e.createProject(a).then(() => r(a.destDir, n))
});