const e = require("./locale");
module.exports = {
    locale: e,
    registry: "https://registry.npm.taobao.org",
    defaultScaffoldings: [{
        name: "ice-design-lite",
        npm: "@icedesign/scaffold-lite",
        version: "latest",
        description: "ICE Design Lite",
        snapshot: "https://gw.alicdn.com/tfs/TB1RYbwnr_I8KJjy1XaXXbsxpXa-500-287.png"
    }, {
        name: "ice-design-pro",
        npm: "@icedesign/scaffold-pro",
        version: "latest",
        description: "ICE Design Pro",
        snapshot: "https://gw.alicdn.com/tfs/TB1lau8nvDH8KJjy1XcXXcpdXXa-417-371.png"
    }],
    defaultLayouts: [],
    defaultBlocks: [],
    prettier: {
        singleQuote: !0,
        trailingComma: "es5"
    },
    routesTagPrefix: "",
    routesTagSuffix: "",
    navsTagPrefix: "",
    navsTagSuffix: ""
};
        