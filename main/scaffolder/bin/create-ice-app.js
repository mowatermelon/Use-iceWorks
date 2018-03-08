#!/usr/bin/env node

const e = require("../lib"), s = require("path"), o = process.cwd(), r = s.join(o, process.argv[3] || ""), c = require("inquirer"), t = require("child_process").spawnSync;
console.log("CREATE ICE APP");
const a = process.argv[2] || "@icedesign/scafford-lite@latest", i = a.split("@");
let n = "", l = "latest";
"@" === a[0] ? (n = "@" + i[1], i[2] && (l = i[2])) : (n = i[0], i[1] && (l = i[1])), console.log({
	pkgName: n,
	pkgVersion: l
}), e.createProject({
	scaffolding: n,
	version: l,
	projectName: "\u6d4b\u8bd5\u9879\u76ee",
	destDir: r,
	interpreter: ({
		type: e,
		message: s,
		data: o
	}, r) => {
		switch (e) {
		case "DESTDIR_EXISTS_OVERRIDE":
			console.log(), c.prompt([{
				type: "confirm",
				message: `$ {
					s
				}
				$ {
					JSON.stringify(o)
				}`,
				name: "confirm"
			}]).then(e => {
				r(e.confirm)
			});
			break;
		case "FILE_CREATED":
			o.forEach(e => console.log("\u6587\u4ef6\u5df2\u521b\u5efa:", e)), r(!0);
			break;
		case "ADD_DEPENDENCIES":
			console.log("ADD_DEPENDENCIES", {
				type: e,
				message: s,
				data: o
			});
			const a = [];
			if (Object.keys(o).forEach(e => {
				a.push(`$ {
					e
				}@$ {
					o[e]
				}`)
			}), 0 === a.length) {
				r(!0);
				break
			}
			a.push("-S"), t("tnpm", ["i"].concat(a), {
				stdio: "inherit"
			}), r(!0);
			break;
		default:
			r(!1)
		}
	}
}).
catch (e => {
	console.log(e.stack)
});