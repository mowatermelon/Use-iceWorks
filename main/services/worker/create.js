const e = require("./generate-project"), t = require("../../logger"), r = require("../npm"), o = require("../interaction"), {
    notify: a
} = o;
class s {
    add({
        data: o,
        path: s
    }, n) {
        const i = Object.assign({}, o.scafford, {
            targetPath: s,
            projectName: o.projectName
        });
        Promise.resolve(e(i)).then(() => o.installDeps ? new Promise((e, o) => {
            let a = "";
            const n = r.fork(["install", "--no-package-lock"], {
                cwd: s
            });
            n.stdout.on("data", e => {
                t.debug((e + "").trim()), a += e
            }), n.stderr.on("data", e => {
                t.debug((e + "").trim()), a += e
            }), n.on("exit", t => {
                0 == t ? e() : o({
                    title: "\u9879\u76ee\u4f9d\u8d56\u5b89\u88c5\u5931\u8d25",
                    message: a
                })
            })
        }) : Promise.resolve()).then(() => {
            t.info("generator process complete"), n(null, {
                path: s
            }), a({
                title: "\u521b\u5efa\u9879\u76ee\u5b8c\u6210",
                body: s
            })
        }).
        catch (e => {
            n(e, {
                path: s
            })
        })
    }
    destroy() {}
}
module.exports = new s;