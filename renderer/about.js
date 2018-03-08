module.exports = webpackJsonp([4], {
    14: function(a) {
        a.exports = require("electron")
    },
    873: function(a, b, c) {
        a.exports = c(874)
    },
    874: function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
            default:
                a
            }
        }
        var e = c(875),
            f = d(e),
            g = c(0),
            h = d(g),
            i = c(5),
            j = d(i),
            k = h.
        default.createElement(f.
        default),
            l = document.createElement("div");
        document.body.appendChild(l), j.
    default.render(k, l)
    },
    875: function(a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        function e(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && ("object" == typeof b || "function" == typeof b) ? b : a
        }
        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var g = function() {
                function a(a, b) {
                    for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            h = c(0),
            i = function(a) {
                return a && a.__esModule ? a : {
                default:
                    a
                }
            }(h),
            j = c(14);
        c(876);
        var k = j.remote.app.getName(),
            l = function(a) {
                function b(a) {
                    d(this, b);
                    var c = e(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a));
                    return c.openLink = function(a) {
                        var b = a.target;
                        c.remote.shell.openExternal(b.href), a.preventDefault()
                    }, c.remote = j.remote, c.state = {
                        version: j.remote.app.getVersion()
                    }, c
                }
                return f(b, a), g(b, [{
                    key: "render",
                    value: function() {
                        return i.
                    default.createElement("div", {
                            className: "about"
                        }, i.
                    default.createElement("div", {
                            key: "r1",
                            className: "about-body"
                        }, i.
                    default.createElement("div", {
                            className: "logo"
                        }, i.
                    default.createElement("img", {
                            src: c(877),
                            height: 64
                        })), i.
                    default.createElement("div", {
                            className: "appname"
                        }, i.
                    default.createElement("b", null, k)), i.
                    default.createElement("div", {
                            className: "version"
                        }, "\u7248\u672C ", this.state.version), i.
                    default.createElement("div", {
                            className: "copyright"
                        }, "\u7248\u6743\u6240\u6709 \xA9 2018 \u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2 \u4FDD\u7559\u6240\u6709\u6743\u5229")))
                    }
                }]), b
            }(h.Component);
        b.
    default = l
    },
    876: function() {},
    877: function(a, b, c) {
        a.exports = c.p + "07ad0840992a4fbcb874a2c257233fa2.png"
    }
}, [873]);