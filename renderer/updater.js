module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([690,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = require("punycode");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icedesign_base_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(367);
/* harmony import */ var _icedesign_base_reset_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_reset_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(688);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_7__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var OSS_CDN_DOMAIN = "https://iceworks.oss-cn-hangzhou.aliyuncs.com";

function requestJSON(uri) {
  return new Promise(function (resolve, reject) {
    request__WEBPACK_IMPORTED_MODULE_4___default()({
      uri: uri,
      json: true
    }, function (err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
} // 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等





var Updater =
/*#__PURE__*/
function (_Component) {
  _inherits(Updater, _Component);

  function Updater(props) {
    var _this;

    _classCallCheck(this, Updater);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Updater).call(this, props));

    _this.handleUpdatesFound = function () {
      // 开始更新
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send('updater-start');

      _this.setState({
        updating: true
      });
    };

    _this.handleUpdaterClose = function () {
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send('updater-close');
    };

    _this.handleUpdaterInstall = function () {
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send('app-quit-install');
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send('updater-install');
    };

    _this.fetchVersionLog = function (meta) {
      if (meta.version) {
        var updateLogUrl = "".concat(OSS_CDN_DOMAIN, "/changelog/").concat(meta.version, ".json");
        requestJSON(updateLogUrl).then(function (res) {
          if (_typeof(res) === 'object') {
            if (Array.isArray(res.log)) {
              _this.setState({
                log: res.log
              });
            }
          } else {
            console.log(res);
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    };

    _this.renderUpdater = function () {
      var _this$state = _this.state,
          event = _this$state.event,
          meta = _this$state.meta;

      if (event == 'update-available') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u68C0\u67E5\u5230\u53EF\u7528\u7248\u672C (", meta.version, ")\uFF0C\u662F\u5426\u66F4\u65B0\uFF1F"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "btn-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: _this.handleUpdaterClose,
          size: "small"
        }, "\u53D6\u6D88"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: _this.handleUpdatesFound,
          loading: _this.state.updating,
          size: "small",
          type: "primary"
        }, "\u786E\u5B9A")));
      } else if (event == 'update-not-available') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u5F53\u524D\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u7248\u672C\u3002"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "btn-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: _this.handleUpdaterClose,
          size: "small",
          type: "primary"
        }, "\u786E\u5B9A")));
      } else if (event == 'download-progress') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0___default.a, {
          showInfo: false,
          percent: parseInt(meta.percent, 10),
          size: "medium"
        }));
      } else if (event == 'unpack-updater') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u6B63\u5728\u89E3\u538B\u66F4\u65B0..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0___default.a, {
          showInfo: false,
          percent: 100,
          size: "medium"
        }));
      } else if (event == 'update-downloaded') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u66F4\u65B0\u5DF2\u5B8C\u6210\u3002"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "btn-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: _this.handleUpdaterInstall,
          size: "small",
          type: "primary"
        }, "\u5B89\u88C5\u5E76\u91CD\u542F\u5E94\u7528")));
      } else if (event == 'error') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u66F4\u65B0\u5931\u8D25!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "btn-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: _this.handleUpdaterClose,
          size: "small",
          type: "primary"
        }, "\u786E\u5B9A")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "updater-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "event-wrapper"
        }, "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0..."));
      }
    };

    _this.renderChangelog = function () {
      var _this$state2 = _this.state,
          log = _this$state2.log,
          meta = _this$state2.meta;

      if (log.length) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "changelog"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, meta.version, " \u66F4\u65B0\u65E5\u5FD7"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, log.map(function (text, index) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
            key: index,
            dangerouslySetInnerHTML: {
              __html: text
            }
          });
        })));
      }

      return null;
    };

    _this.state = {
      event: 'init',
      updating: false,
      log: [],
      meta: {
        percent: 0
      }
    };
    return _this;
  }

  _createClass(Updater, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].on('updater-message', function (e, data) {
        var event = data.event,
            meta = data.meta;

        if (event === 'download-progress' && meta && meta.percent > 99) {
          _this2.setState({
            event: 'unpack-updater',
            meta: {
              percent: 50
            }
          });
        } else {
          // 存在可用更新
          if (event === 'update-available' || event === 'update-not-available') {
            _this2.fetchVersionLog(meta);
          }

          _this2.setState({
            event: event,
            meta: meta
          });
        }
      });
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send('updater-check');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].removeAllListeners('message');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // 更新视图窗口大小
      this.setUpdateWindowSize();
    }
  }, {
    key: "setUpdateWindowSize",
    value: function setUpdateWindowSize() {
      var width = document.documentElement.scrollWidth;
      var height = document.documentElement.scrollHeight;
      electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send('set-updater-window-size', {
        width: width,
        height: height
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "container"
      }, this.renderUpdater(), this.renderChangelog());
    }
  }]);

  return Updater;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_5__["hot"])(module)(Updater));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(203)(module)))

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
 // 当前 page 的主入口




var renderEntry = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
var app = document.createElement('div');
document.body.appendChild(app);
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(renderEntry, app);

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(689);


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = require("net");

/***/ })

/******/ });