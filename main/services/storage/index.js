const e = require("./Store");
module.exports = {
    recordStorage: new e("record"),
    projectsStorage: new e("projects"),
    workspaceStorage: new e("workspace")
};