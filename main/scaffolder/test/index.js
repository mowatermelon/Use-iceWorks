const e = require("chai");
e.should();
const r = require("fs"), t = require("path");
describe("create ice app", () => {
    const e = t.join(__dirname, "features"), i = r.readdirSync(e);
    for (let r = 0; r < i.length; r++) {
        const s = i[r], a = require(t.join(e, s, "test.js"));
        it(`should $ {
            s
        }`, async() => {
            await a()
        }).timeout(5e3)
    }
});