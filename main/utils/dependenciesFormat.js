module.exports = function(r) {
    return Array.isArray(r) ? r : Object.entries(r).map(r => r.join("@"))
};