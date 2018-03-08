const {
    Menu: e,
    shell: l,
    BrowserWindow: t
} = require("electron"), o = require("electron-log"), {
    isMac: a,
    isWin: r,
    isDev: s
} = require("./shared"), c = require("./autoUpdater"), i = require("./helper/sendToWebContents"), {
    openAboutWindow: n
} = require("./windowList");

function b(e, {
    state: l,
    title: t,
    url: o
}) {
    i(e.home, "router.push", {
        state: l,
        title: t,
        url: o
    }), e.home.isVisible() ? e.home.focus() : e.home.show()
}
exports.trayMenu = ((l, t, o) => {
    const a = [{
        label: "\u5173\u4e8e Iceworks"
    }, {
        type: "separator"
    }, {
        label: "\u8bbe\u7f6e",
        click() {
            b(t, {
                state: null,
                title: "Settings",
                url: "/settings"
            })
        }
    }, {
        type: "separator"
    }, {
        abel: "\u9000\u51fa",
        role: "quit",
        accelerator: "Cmd+Q"
    }];
    return e.buildFromTemplate(a)
}), exports.appMenu = ((i, p) => {
    const u = [{
        label: "\u6587\u6863",
        click() {
            l.openExternal("https://alibaba.github.io/ice")
        }
    }, {
        label: "Github",
        click() {
            l.openExternal("https://github.com/alibaba/ice")
        }
    }, {
        type: "separator"
    }, {
        label: "\u53cd\u9988\u95ee\u9898",
        click() {
            l.openExternal("https://github.com/alibaba/ice/issues/new?labels=iceworks")
        }
    }, {
        type: "separator"
    }, {
        label: "\u67e5\u770b\u8bb8\u53ef\u8bc1",
        click() {
            l.openExternal("https://github.com/alibaba/ice/blob/master/LICENSE")
        }
    }, {
        label: "\u9690\u79c1\u58f0\u660e",
        click() {
            l.openExternal("https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html")
        }
    }, {
        type: "separator"
    }, {
        label: "\u5207\u6362\u5f00\u53d1\u4eba\u5458\u5de5\u5177",
        accelerator: a ? "Alt+Command+I" : "Ctrl+Shift+I",
        click(e, l) {
            l && l.toggleDevTools()
        }
    }, {
        label: "\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7",
        click() {
            const e = o.transports.file.findLogPath(i.getName());
            l.showItemInFolder(e)
        }
    }];
    r && (u.push({
        type: "separator"
    }), u.push({
        label: "\u68c0\u67e5\u66f4\u65b0...",
        click() {
            c.show()
        }
    }), u.push({
        type: "separator"
    }), u.push({
        label: "\u5173\u4e8e",
        click() {
            n()
        }
    }));
    const m = [{
        label: "\u7f16\u8f91",
        submenu: [{
            label: "\u64a4\u9500",
            role: "undo",
            accelerator: "CommandOrControl+Z"
        }, {
            label: "\u91cd\u505a",
            role: "redo",
            accelerator: "CommandOrControl+Shift+Z"
        }, {
            type: "separator"
        }, {
            label: "\u526a\u5207",
            role: "cut",
            accelerator: "CommandOrControl+X"
        }, {
            label: "\u590d\u5236",
            role: "copy",
            accelerator: "CommandOrControl+C"
        }, {
            label: "\u7c98\u8d34",
            role: "paste",
            accelerator: "CommandOrControl+V"
        }, {
            label: "\u9009\u62e9\u5168\u90e8",
            role: "selectall",
            accelerator: "CommandOrControl+A"
        }]
    }, {
        label: "\u7a97\u53e3",
        submenu: [{
            label: "\u5173\u95ed",
            role: "close",
            accelerator: "CommandOrControl+W"
        }, {
            label: "\u6700\u5c0f\u5316",
            role: "minimize",
            accelerator: "CommandOrControl+M"
        }, {
            label: "\u7f29\u653e",
            role: "zoom"
        }, {
            label: "\u5207\u6362\u5168\u5c4f",
            role: "togglefullscreen",
            accelerator: a ? "Ctrl+Command+F" : "F11"
        }, {
            type: "separator"
        }, {
            label: "\u5168\u90e8\u7f6e\u4e8e\u9876\u5c42",
            role: "front"
        }]
    }, {
        label: "\u5e2e\u52a9",
        submenu: u
    }];
    if (a) {
        const e = i.getName();
        m.unshift({
            label: e,
            submenu: [{
                label: "\u5173\u4e8e Iceworks",
                click() {
                    n()
                }
            }, {
                type: "separator"
            }, {
                label: "\u68c0\u67e5\u66f4\u65b0...",
                click() {
                    c.show()
                }
            }, {
                type: "separator"
            }, {
                label: "\u8bbe\u7f6e",
                accelerator: "CmdOrCtrl+,",
                click() {
                    b(p, {
                        state: null,
                        title: "Settings",
                        url: "/settings"
                    })
                }
            }, {
                type: "separator"
            }, {
                label: "\u670d\u52a1",
                role: "services",
                submenu: []
            }, {
                type: "separator"
            }, {
                label: "\u9690\u85cf Iceworks",
                role: "hide"
            }, {
                label: "\u9690\u85cf\u5176\u4ed6",
                role: "hideothers"
            }, {
                label: "\u5168\u90e8\u663e\u793a",
                role: "unhide"
            }, {
                type: "separator"
            }, {
                label: "\u9000\u51fa Iceworks",
                role: "quit"
            }]
        })
    }
    s && m.push({
        label: "\u5f00\u53d1\u8c03\u8bd5",
        submenu: [{
            label: "Reload",
            accelerator: "CmdOrCtrl+R",
            click(e, l) {
                l && (1 === l.id && t.getAllWindows().forEach(e => {
                    e.id > 1 && e.close()
                }), l.reload())
            }
        }, {
            label: "Toggle Developer Tools",
            accelerator: a ? "Alt+Command+I" : "Ctrl+Shift+I",
            click(e, l) {
                l && l.toggleDevTools()
            }
        }]
    });
    const h = e.buildFromTemplate(m);
    e.setApplicationMenu(h)
});