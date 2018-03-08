const t = require("fs");
class e {
    constructor(t) {
        this.file = t.file, this.tagPrefix = t.tagPrefix || "// \x3c!-- replace start --\x3e", this.tagSuffix = t.tagSuffix || "// \x3c!-- replace end --\x3e", this.regPrefix = new RegExp(this.tagPrefix), this.regSuffix = new RegExp(this.tagSuffix)
    }
    getFileContent() {
        const e = t.readFileSync(this.file, "utf-8").split(/\r?\n/);
        let i = -1, r = 0;
        return e.forEach((t, e) => {
            this.regPrefix.test(t) && (i = e), this.regSuffix.test(t) && (r = e)
        }), e.slice(i + 1, r).join("\n")
    }
    transformRawContentToNewContent(t, e) {
        const i = t.split(/\r?\n/);
        let r = -1, n = 0, s = 0;
        if (i.forEach((t, e) => {
            this.regPrefix.test(t) && (r = e, s++), this.regSuffix.test(t) && (n = e, s++)
        }), 2 !== s) return t;
        return i.slice(0, r + 1).concat(e).concat(i.slice(n, i.length)).join("\n")
    }
    replace(e) {
        const i = t.readFileSync(this.file, "utf-8"), r = this.transformRawContentToNewContent(i, e);
        return t.writeFileSync(this.file, r, "utf-8"), r
    }
}
module.exports = e;