module.exports = function o() {
    return {
        open(e) {
            o[e].isVisible() ? o[e].focus() : o[e].show()
        }
    }
};