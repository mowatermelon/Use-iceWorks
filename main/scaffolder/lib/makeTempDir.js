const r = require("uuid").v4(), e = require("rimraf"), i = require("mkdirp"), u = require("os"), o = require("path"), s = require("debug")("tempDir"), p = o.join(u.tmpdir(), r);
i.sync(p), s(p), process.on("exit", () => {
    e.sync(p)
}), module.exports = p;