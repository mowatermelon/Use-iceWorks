module.exports = function() {
    return new Promise((e, r) => {
        try {
            e(require("node-sass").info)
        } catch (e) {
            r(e)
        }
    })
};