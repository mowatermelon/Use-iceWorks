#!/usr/bin/env node

const e = require("../lib/scanLayout"), r = require("path"), s = process.cwd(), o = r.join(s, process.argv[3] || ""), c = require("inquirer"), i = require("child_process").spawnSync;
console.log("CREATE ICE APP: scanLayout"), e({
	destDir: o
}).then(e => {
	console.log("result", e)
});