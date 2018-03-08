#!/usr/bin/env node

const e = require("../lib"), a = require("path"), o = process.cwd(), c = a.join(o), s = require("child_process").spawnSync;
console.log("CREATE ICE APP"), e.createPage({
	destDir: c,
	pageName: "pageDemo",
	routeName: "page-demo",
	layout: "HeaderAsideFooterLayout",
	blocks: [{
		name: "area-stack-chart-block",
		npm: "@icedesign/area-stack-chart-block",
		version: "latest",
		description: "\u5806\u53e0\u533a\u57df\u56fe"
	}],
	commonBlock: !0,
	interpreter: ({
		type: e,
		message: a,
		data: o
	}, c) => {
		switch (console.log(a), e) {
		case "DESTDIR_EXISTS_OVERRIDE":
			c(!0);
			break;
		case "FILE_CREATED":
			o.forEach(e => console.log(e)), c(!0);
			break;
		case "ADD_DEPENDENCIES":
			const r = [];
			if (Object.keys(o).forEach(e => {
				r.push(`$ {
					e
				}@$ {
					o[e]
				}`)
			}), 0 === r.length) {
				c(!0);
				break
			}
			r.push("-S"), s("tnpm", ["i"].concat(r), {
				stdio: "inherit"
			}), c(!0);
			break;
		default:
			c(!0)
		}
	}
}).then(() => e.removePreviewPage({
	destDir: c
})).then(() => {
	console.log("success")
});