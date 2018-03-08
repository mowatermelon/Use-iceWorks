const e = require("electron-log"), o = require("macaddress"), r = require("axios"), {
    isDev: n
} = require("./shared");
let t, l = 0;

function i(e, ...o) {
    n && o.unshift(` [$ {
        e
    }]`), (t[e] || t.info).apply(null, o)
}
o.one((e, o) => {
    e || (l = o)
}), n ? t = console : ((t = e).transports.file.level = "silly", t.transports.file.maxSize = 31457280);
const s = () => {}, a = (e, o = {}) => {
    const n = {
        id: l,
        type: e,
        data: o
    };
    o.action && (n.action = o.action);
    const t = Object.keys(n), s = t.reduce((e, o, r) => {
        return `$ {
            e
        }
        $ {
            o
        } = $ {
            "string" == typeof n[o] ? n[o] : JSON.stringify(n[o])
        }
        $ {
            t.length - 1 === r ? "" : "&"
        }`
    }, "");
    r({
        method: "post",
        url: "http://gm.mmstat.com/iceteam.iceworks.log",
        data: {
            cache: Math.random(),
            gmkey: "CLK",
            gokey: encodeURIComponent(s),
            logtype: "2"
        }
    }).then(() => {}).
    catch (e => {
        i("error", "goldlog", {
            error: e
        })
    })
};
module.exports = {
    report: a,
    uploadLog: s,
    debug: i.bind(null, "debug"),
    error: i.bind(null, "error"),
    info: i.bind(null, "info"),
    verbose: i.bind(null, "verbose"),
    warn: i.bind(null, "warn")
};