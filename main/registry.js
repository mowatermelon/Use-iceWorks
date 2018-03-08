const e = require("path"), t = require("path-exists"), {
    spawn: r
} = require("child_process"), {
    APP_PATH: n
} = require("./paths"), o = require("./logger"), {
    getActiveCodePage: i
} = require("./shell"), s = /^(.*)\s(REG_SZ|REG_MULTI_SZ|REG_EXPAND_SZ|REG_DWORD|REG_QWORD|REG_BINARY|REG_NONE)\s+([^\s].*)$/;

function c(e) {
    const t = e.split("\n"), r = [], n = [];
    let o = 0;
    for (let e = 0; e < t.length; e++) {
        const n = t[e].trim();
        n.length > 0 && (0 !== o && r.push(n), ++o)
    }
    for (let e = 0; e < r.length; e++) {
        const t = s.exec(r[e]);
        if (t) {
            const e = t[1].trim(), r = t[2].trim(), o = t[3];
            n.push({
                name: e,
                type: r,
                value: o
            })
        }
    }
    return n
}
function a() {
    return e.join(n, "static", "registry.bat")
}
const u = a();

function l(e, t) {
    return new Promise((n, i) => {
        const s = r(u, [e, t.toString()], {
            cwd: void 0
        }), a = [];
        let l = !1;
        s.on("close", e => {
            if (l) n([]);
            else if (0 !== e) o.debug(`Unable to find registry key - exit code $ {
                e
            }
            returned`), n([]);
            else {
                const e = c(Buffer.concat(a).toString("utf8"));
                n(e)
            }
        }), s.stdout.on("data", e => {
            a.push(e)
        }), s.on("error", e => {
            l = !0, o.debug("An error occurred while trying to find the program", e)
        })
    })
}
exports.readRegistryKeySafe = async function(e) {
    if (!await t(u)) return o.error(`Unable to find batch script at expected location: '${u}'`), [];
    const r = await i();
    return r ? await l(e, r) : (o.debug("Unable to resolve active code page"), [])
};