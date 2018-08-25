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
/******/ 		4: 0
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
/******/ 	deferredModules.push([698,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);

var services = electron__WEBPACK_IMPORTED_MODULE_0__["remote"].getGlobal('services');
/* harmony default export */ __webpack_exports__["a"] = (services);

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(10);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// CONCATENATED MODULE: ./renderer/src/lib/bridge.js
var _require = __webpack_require__(6),
    remote = _require.remote;

var log = remote.require('./logger');


// CONCATENATED MODULE: ./renderer/src/lib/project-utils.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return project_utils_checkProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return project_utils_getDefaultProjectName; });
/* unused harmony export validateProjectName */
/* unused harmony export scanLayouts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return project_utils_scanPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dependenciesFormat; });
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* eslint-disable no-empty */

/**
 * 检测是否符合 iceworks 运行的项目
 * @param {String} projectPath  项目目录地址
 * @return promise
 */

var isProject =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(projectPath) {
    var pkgPath, pkgData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pkgPath = external_path_default.a.join(projectPath, 'package.json');

            if (external_fs_default.a.existsSync(pkgPath)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", false);

          case 3:
            _context.prev = 3;
            pkgData = external_fs_default.a.readFileSync(pkgPath);
            pkgData = JSON.parse(pkgData.toString());
            return _context.abrupt("return", pkgData);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            log.error(_context.t0);
            return _context.abrupt("return", false);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));

  return function isProject(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 检测当前目录状态，权限，是否为当前项目等
 * @param {String} projectPath  项目目录地址
 */

var project_utils_checkProject = function checkProject(currentPath) {
  // 检查是否可用
  if (external_fs_default.a.accessSync(currentPath)) {
    return 'noAccess';
  } // 检查是否存在文件


  var dir = external_fs_default.a.readdirSync(currentPath);

  if (dir.length > 0) {
    // 检查存在的文件是否是合法项目
    // @TODO 检查 abc.json 判断是不是 ice 项目
    try {
      var exited = external_fs_default.a.existsSync(external_path_default.a.join(currentPath, './package.json'));

      if (exited) {
        return 'legalProject';
      }
    } catch (error) {}

    return 'hasFiles';
  }

  return 'emptyProject';
};
/**
 * 根据目录地址后去默认的项目名
 * @param {String} projectPath  项目目录地址
 */

var project_utils_getDefaultProjectName = function getDefaultProjectName(projectPath) {
  // All valid unicode categories
  var UNICODE = {
    letter: new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),
    digit: new RegExp("[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"),
    connector_punctuation: new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]"),
    format: new RegExp("[\\u0600-\\u0605\\u061C\\u06DD\\u070F\\u180E\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]"),
    non_spacing_mark: new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),
    space_combining_mark: new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]")
  };

  function is_letter(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 0xaa && UNICODE.letter.test(String.fromCharCode(code));
  }

  function is_digit(code) {
    return code >= 48 && code <= 57;
  }

  function is_unicode_digit(ch) {
    return UNICODE.digit.test(ch);
  }

  function is_unicode_format(ch) {
    return UNICODE.format.test(ch);
  }

  function is_unicode_combining_mark(ch) {
    return UNICODE.non_spacing_mark.test(ch) || UNICODE.space_combining_mark.test(ch);
  }

  function is_unicode_connector_punctuation(ch) {
    return UNICODE.connector_punctuation.test(ch);
  }
  /**
   * Tests if the specified character is valid.
   * @param {String} ch The character to test.
   * @returns {Boolean} The
   */


  function isValid(ch) {
    var code = ch.charCodeAt(0);
    return is_letter(code) || is_digit(code) || ch === '.' || ch === '_' || is_unicode_connector_punctuation(ch) || is_unicode_format(ch) || is_unicode_combining_mark(ch) || is_unicode_digit(ch);
  }
  /**
   * Helper to replace characters at a specific index, js strings
   * are immuatable so str[index]='' wont work.
   * @param {String} value The original string to modify.
   * @param {Number} index The index of the character to replace.
   * @param {String} character The replacement character.
   * @returns {String} The modified string.
   */


  function replaceAt(value, index, character) {
    return value.substr(0, index) + character + value.substr(index + character.length);
  }

  var name = projectPath.split(external_path_default.a.sep).pop();

  if (!name || /^\s+$/.test(name)) {
    return '';
  } // replace invalid unicode chars


  for (var i = 0; i < name.length; i++) {
    if (!isValid(name[i])) {
      name = replaceAt(name, i, '_');
    }
  }

  return name;
};
/**
 * 检测项目名是否合法
 * @param {String} name  项目名
 */

var validateProjectName = function validateProjectName(proejctName) {
  // From https://github.com/npm/validate-npm-package-name/blob/master/index.js
  var scopedPackagePattern = new RegExp('^(?:@([^/]+?)[/])?([^/]+?)$'); // var builtins = require('builtins')

  var blacklist = ['node_modules', 'favicon.ico'];

  var done = function done(warnings, errors) {
    var result = {
      validForNewPackages: errors.length === 0 && warnings.length === 0,
      validForOldPackages: errors.length === 0,
      warnings: warnings,
      errors: errors
    };
    if (!result.warnings.length) delete result.warnings;
    if (!result.errors.length) delete result.errors;
    return result;
  };

  var validate = function validate(name) {
    var warnings = [];
    var errors = [];

    if (name === null) {
      errors.push('不能为空');
      return done(warnings, errors);
    }

    if (name === undefined) {
      errors.push('不能为空');
      return done(warnings, errors);
    }

    if (typeof name !== 'string') {
      errors.push('必须为字符串');
      return done(warnings, errors);
    }

    if (!name.length) {
      errors.push('长度不能为 0');
    }

    if (name.match(/^\./)) {
      errors.push('不能以 `.` 字符开头');
    }

    if (name.match(/^_/)) {
      errors.push('不能以 `_` 开头');
    }

    if (name.trim() !== name) {
      errors.push('不能以空格开头或者结尾');
    } // No funny business


    blacklist.forEach(function (blacklistedName) {
      if (name.toLowerCase() === blacklistedName) {
        errors.push("".concat(blacklistedName, " \u4E3A\u4FDD\u7559\u540D\uFF0C\u8BF7\u66F4\u6539\u540D\u79F0"));
      }
    }); // Generate warnings for stuff that used to be allowed
    // core module names like http, events, util, etc
    // builtins.forEach(function (builtin) {
    //  if (name.toLowerCase() === builtin) {
    //    warnings.push(builtin + ' is a core module name')
    //  }
    // })
    // really-long-package-names-------------------------------such--length-----many---wow
    // the thisisareallyreallylongpackagenameitshouldpublishdowenowhavealimittothelengthofpackagenames-poch.

    if (name.length > 214) {
      warnings.push('不允许超过 214 个字符');
    }

    if (/[~'!()*]/.test(name.split('/').slice(-1)[0])) {
      warnings.push('不能再包含特殊字符 ("~\'!()*")');
    }

    if (encodeURIComponent(name) !== name) {
      // Maybe it's a scoped package name, like @user/package
      var nameMatch = name.match(scopedPackagePattern);

      if (nameMatch) {
        var user = nameMatch[1];
        var pkg = nameMatch[2];

        if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
          return done(warnings, errors);
        }
      }

      errors.push('项目文件夹仅可使用符合 URL 规范的字符，不支持中文');
    }

    return done(warnings, errors);
  };

  validate.scopedPackagePattern = scopedPackagePattern;
  return validate(proejctName);
};
/**
 * 扫描项目的 layouts
 * @param {String} projectPath  项目目录地址
 */

var project_utils_scanLayouts = function scanLayouts(projectPath) {
  var layoutsPath = external_path_default.a.join(projectPath, 'src', 'layouts');
  var dir = [];

  try {
    dir = external_fs_default.a.readdirSync(layoutsPath);
  } catch (e) {}

  return dir;
};
/**
 * 获取当前项目目录下的 pages, 并且过滤掉 IceworksPreviewPage
 *
 * @param {String} projectPath 项目目录地址
 * @return Promise<Array>
 */

var project_utils_scanPages = function scanPages(projectPath) {
  var pages = [];
  return new Promise(function (resolve) {
    var pagesPath = external_path_default.a.join(projectPath, 'src', 'pages');

    try {
      pages = external_fs_default.a.readdirSync(pagesPath);
    } catch (e) {}

    pages = pages.filter(function (p) {
      return p.toLowerCase() !== 'IceworksPreviewPage'.toLowerCase();
    });
    resolve(pages);
  });
};
/**
 * 格式化依赖包名称，用于作为执行 install 的参数
 *
 * @param {Array|Object} dependencies  依赖包名
 */

var dependenciesFormat = function dependenciesFormat(dependencies) {
  if (Array.isArray(dependencies)) {
    return dependencies;
  } else {
    return Object.entries(dependencies).map(function (depGroup) {
      return depGroup.join('@');
    });
  }
};

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("stream");

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

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./renderer/src/services.js
var services = __webpack_require__(11);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/reset.scss
var base_reset = __webpack_require__(367);

// EXTERNAL MODULE: ./renderer/src/pages/Status/App.scss
var Status_App = __webpack_require__(697);

// EXTERNAL MODULE: ./renderer/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: external "electron"
var external_electron_ = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/button/index.js
var lib_button = __webpack_require__(9);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./renderer/node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./renderer/src/components/Icon/index.jsx
var Icon = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/fs-extra/lib/index.js
var lib = __webpack_require__(284);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(63);
var external_os_default = /*#__PURE__*/__webpack_require__.n(external_os_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// CONCATENATED MODULE: ./renderer/src/models/Project.js
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * 项目模型， 以所在目录为唯一坐标值。
 */

var homeDir = external_os_default.a.homedir();

var Project_Project =
/*#__PURE__*/
function () {
  function Project(projectPath) {
    _classCallCheck(this, Project);

    this.root = projectPath;
  }
  /**
   * 相对 os.homedir() 的路径
   */


  _createClass(Project, [{
    key: "pkgData",

    /**
     * 获取 package.json 文件内容
     * @return Object package.json content
     */
    value: function () {
      var _pkgData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var pkgPath, pkgData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pkgPath = external_path_default.a.join(this.root, 'package.json');
                _context.prev = 1;
                pkgData = lib_default.a.readFileSync(pkgPath);
                pkgData = JSON.parse(pkgData.toString(0));
                return _context.abrupt("return", pkgData);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", null);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      return function pkgData() {
        return _pkgData.apply(this, arguments);
      };
    }()
  }, {
    key: "path",
    get: function get() {
      return "~/".concat(external_path_default.a.relative(homeDir, this.root));
    }
    /**
     * 完整路径
     */

  }, {
    key: "fullPath",
    get: function get() {
      return this.root;
    }
  }]);

  return Project;
}();

/* harmony default export */ var models_Project = (Project_Project);
// EXTERNAL MODULE: ./renderer/src/pages/Status/ProjectItem/ProjectItem.scss
var ProjectItem_ProjectItem = __webpack_require__(695);

// CONCATENATED MODULE: ./renderer/src/pages/Status/ProjectItem/index.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ProjectItem_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function ProjectItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectItem_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









function setMainWindowSize() {
  var width = document.documentElement.scrollWidth;
  var height = document.documentElement.scrollHeight;
  external_electron_["ipcRenderer"].send('set-main-window-size', {
    width: width,
    height: height
  });
}

var Status_ProjectItem_ProjectItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectItem, _Component);

  function ProjectItem(props) {
    var _this;

    ProjectItem_classCallCheck(this, ProjectItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectItem).call(this, props));

    _this.handleBuildProject = function () {
      _this.setState({
        buildStatus: 'ing'
      });

      external_electron_["ipcRenderer"].send('sdk-build', {
        path: _this.props.path
      });
    };

    _this.handleDevProject = function () {
      _this.setState({
        devStatus: 'ing'
      });

      external_electron_["ipcRenderer"].send('sdk-dev', {
        path: _this.props.path
      });
    };

    _this.handleStopDevProject = function () {
      _this.setState({
        devStatus: 'stop',
        devServerHref: '',
        compileProgress: 0
      });

      external_electron_["ipcRenderer"].send('sdk-dev-stop', {
        path: _this.props.path
      });
    };

    _this.handleOpenOnFinder = function () {
      external_electron_["shell"].showItemInFolder(_this.props.path);
    };

    _this.handleOpenBrowser = function (event) {
      event.preventDefault();
      external_electron_["shell"].openExternal(event.nativeEvent.target.href);
    };

    _this.handleOpenGeneratePage = function () {
      // 预览服务必须启动 dev
      external_electron_["ipcRenderer"].send('sdk-dev', {
        path: _this.props.path
      });
      external_electron_["ipcRenderer"].send('page-create', {
        path: _this.props.path
      });
    };

    _this.handlePublishToDef = function () {
      external_electron_["ipcRenderer"].send('sdk-publish', {
        path: _this.props.path,
        type: 'daily'
      });
    };

    _this.handleRemoveProject = function () {
      _this.props.removeProject(_this.props.path);
    };

    _this.handleOpenEditor = function () {
      external_electron_["ipcRenderer"].send('open-external-editor', {
        path: _this.props.path
      });
    };

    _this.handleOpenShell = function () {
      external_electron_["ipcRenderer"].send('open-in-shell', {
        path: _this.props.path
      });
    };

    _this.model = new models_Project({
      path: props.path
    });
    _this.state = {
      projectStatus: 'loading',
      buildStatus: 'none',
      // normal 没启动的默认状态
      // ing 正在启动过程中
      // working 自动完成
      // cancel 被取消
      // stop 终止
      devStatus: 'normal',
      compileProgress: 0,
      devServerHref: ''
    };
    return _this;
  }

  ProjectItem_createClass(ProjectItem, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = ProjectItem_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var pkgData, isExist;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.model.pkgData();

              case 2:
                pkgData = _context.sent;
                isExist = pkgData;
                this.setState({
                  pkgData: pkgData,
                  projectStatus: isExist ? 'scanend' : 'notfount'
                }); // 构建回调

                external_electron_["ipcRenderer"].on('sdk-build-status', function (event, eventData) {
                  if (eventData.path == _this2.props.path) {
                    _this2.setState({
                      buildStatus: 'none'
                    });
                  }
                });
                external_electron_["ipcRenderer"].on('sdk-build-failed', function (event, eventData) {
                  if (eventData.path == _this2.props.path) {
                    _this2.setState({
                      buildStatus: 'none'
                    });
                  }
                }); // dev 回调

                external_electron_["ipcRenderer"].on('sdk-dev-status', function (event, eventData) {
                  var path = eventData.path,
                      message = eventData.message;

                  if (path === _this2.props.path) {
                    if (message.type === 'sdk_status' && message.message === 'dev_compiler_progress') {
                      _this2.setState({
                        compileProgress: message.data.percentage
                      });
                    }

                    if (message.type === 'sdk_status' && message.message === 'dev_server_finished') {
                      _this2.setState({
                        devStatus: 'working',
                        devServerHref: message.data.url
                      }, function () {
                        external_electron_["ipcRenderer"].send('global-notify', {
                          title: '调试服务启动完成',
                          body: message.data.url,
                          url: message.data.url
                        });
                      }); // 成功之后，如果有搭建页面，需要通知搭建页面 load 预览界面


                      if (_this2.generatePageWin) {
                        _this2.generatePageWin.webContents.send('preview-dev-status', {
                          devStatus: 'working',
                          devServerHref: message.data.url
                        });
                      }
                    }
                  }
                });
                external_electron_["ipcRenderer"].on('sdk-cancel-dev', function (event, eventData) {
                  if (eventData.path === _this2.props.path) {
                    _this2.setState({
                      devStatus: 'cancel'
                    });
                  }
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      setMainWindowSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      var _this$state = this.state,
          pkgData = _this$state.pkgData,
          projectStatus = _this$state.projectStatus;
      var classes = classnames_default()({
        'project-item': true
      }, className);

      if (!pkgData) {
        if (projectStatus == 'loading') {
          return react_default.a.createElement("div", {
            className: "project-item-wrapper"
          }, react_default.a.createElement("div", {
            className: classes,
            style: style
          }, "\u52A0\u8F7D\u4E2D..."));
        } else {
          return react_default.a.createElement("div", {
            className: "project-item-wrapper"
          }, react_default.a.createElement("div", {
            className: classes,
            style: style
          }, "\u5F53\u524D\u9879\u76EE\u4E0D\u5B58\u5728\uFF0C\u6216\u5DF2\u88AB\u5220\u9664", ' ', react_default.a.createElement("a", {
            className: "remove-project",
            href: "javascript:;",
            onClick: this.handleRemoveProject
          }, react_default.a.createElement(Icon["a" /* default */], {
            name: "trash"
          }))));
        }
      }

      return react_default.a.createElement("div", {
        className: "project-item-wrapper"
      }, react_default.a.createElement("div", {
        className: classes,
        style: style
      }, react_default.a.createElement("div", {
        className: "info"
      }, react_default.a.createElement("div", {
        className: "info-item"
      }, react_default.a.createElement("span", {
        style: {
          lineHeight: '30px'
        }
      }, pkgData.name)), react_default.a.createElement("div", null, react_default.a.createElement(button_default.a.Group, {
        size: "small"
      }, react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleDevProject
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "play",
        alt: "\u542F\u52A8\u672C\u5730\u670D\u52A1\u5668"
      })), react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleStopDevProject
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "stop",
        alt: "\u505C\u6B62\u672C\u5730\u670D\u52A1\u5668"
      })), react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleBuildProject
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "circle-o-notch",
        spin: this.state.buildStatus === 'ing',
        alt: "\u6784\u5EFA"
      })), react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleOpenGeneratePage
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "clone"
      })), react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleOpenOnFinder
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "folder-open-o"
      })), react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleOpenEditor
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "file-code-o"
      })), react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.handleOpenShell
      }, react_default.a.createElement(Icon["a" /* default */], {
        name: "terminal"
      })))))));
    }
  }]);

  return ProjectItem;
}(react["Component"]);

Status_ProjectItem_ProjectItem.displayName = 'ProjectItem';
Status_ProjectItem_ProjectItem.propTypes = {
  removeProject: prop_types_default.a.func
};
Status_ProjectItem_ProjectItem.defaultProps = {
  removeProject: function removeProject() {}
};

// EXTERNAL MODULE: ./renderer/src/pages/Status/ProjectList/ProjectList.scss
var ProjectList_ProjectList = __webpack_require__(693);

// CONCATENATED MODULE: ./renderer/src/pages/Status/ProjectList/index.js
function ProjectList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectList_typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectList_typeof(obj); }

function ProjectList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectList_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectList_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectList_defineProperties(Constructor, staticProps); return Constructor; }

function ProjectList_possibleConstructorReturn(self, call) { if (call && (ProjectList_typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectList_assertThisInitialized(self); }

function ProjectList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProjectList_getPrototypeOf(o) { ProjectList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProjectList_getPrototypeOf(o); }

function ProjectList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProjectList_setPrototypeOf(subClass, superClass); }

function ProjectList_setPrototypeOf(o, p) { ProjectList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProjectList_setPrototypeOf(o, p); }






var Status_ProjectList_ProjectList =
/*#__PURE__*/
function (_Component) {
  ProjectList_inherits(ProjectList, _Component);

  function ProjectList(props) {
    var _this;

    ProjectList_classCallCheck(this, ProjectList);

    _this = ProjectList_possibleConstructorReturn(this, ProjectList_getPrototypeOf(ProjectList).call(this, props));
    _this.state = {};
    return _this;
  }

  ProjectList_createClass(ProjectList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          _this$props$projects = _this$props.projects,
          projects = _this$props$projects === void 0 ? [] : _this$props$projects;

      if (!projects || projects.length == 0) {
        return react_default.a.createElement("div", {
          className: "projects-empty"
        }, "Workspace Empty");
      }

      return react_default.a.createElement("div", {
        className: "project-list ".concat(className),
        style: style
      }, projects.map(function (path) {
        return react_default.a.createElement(Status_ProjectItem_ProjectItem, {
          removeProject: _this2.props.removeProject,
          key: path,
          path: path
        });
      }));
    }
  }]);

  return ProjectList;
}(react["Component"]);

Status_ProjectList_ProjectList.displayName = 'ProjectList';
Status_ProjectList_ProjectList.propTypes = {
  style: prop_types_default.a.object,
  className: prop_types_default.a.string,
  projects: prop_types_default.a.array,
  removeProject: prop_types_default.a.func
};
Status_ProjectList_ProjectList.defaultProps = {};

// EXTERNAL MODULE: ./renderer/src/lib/project-utils.js + 1 modules
var project_utils = __webpack_require__(35);

// CONCATENATED MODULE: ./renderer/src/pages/Status/App.jsx
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

 // 载入默认全局样式







var _services$storage = services["a" /* default */].storage,
    projectsStorage = _services$storage.projectsStorage,
    workspaceStorage = _services$storage.workspaceStorage;

var App_App =
/*#__PURE__*/
function (_Component) {
  App_inherits(App, _Component);

  function App(props) {
    var _this;

    App_classCallCheck(this, App);

    _this = App_possibleConstructorReturn(this, App_getPrototypeOf(App).call(this, props));

    _this.getWorkspaceList = function () {
      return workspaceStorage.dataSource;
    };

    _this.handleRemoveProject = function (path) {
      workspaceStorage.remove(path);
    };

    _this.pushToWorkspace = function (newPath) {
      workspaceStorage.push(newPath);
      projectsStorage.push(newPath);
    };

    _this.removeLocalStorage = function (path) {
      var projects = JSON.parse(localStorage.getItem('projects') || '[]');
      var newProjects = projects.filter(function (p) {
        return p !== path;
      });
      localStorage.setItem('projects', JSON.stringify(newProjects));

      _this.forceUpdate();
    };

    _this.openDirectory = function () {
      external_electron_["ipcRenderer"].send('project-open-directory');
    };

    _this.createProject = function () {
      external_electron_["ipcRenderer"].send('project-create');
    };

    _this.openProjectList = function () {
      external_electron_["ipcRenderer"].send('app-open-home');
    };

    _this.state = {};
    return _this;
  }

  App_createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      App_setMainWindowSize();
      workspaceStorage.on('change', function () {
        _this2.forceUpdate();
      });
      external_electron_["ipcRenderer"].on('generate-project-success', function (event, data) {
        var path = data.path;

        _this2.pushToWorkspace(path);
      });
      external_electron_["ipcRenderer"].on('project-selected-directory', function (event, data) {
        var paths = data.paths;
        console.log('project-selected-directory', paths);

        if (paths) {
          var currentDirectoryPath = paths[0];
          var status = Object(project_utils["a" /* checkProject */])(currentDirectoryPath);
          console.log(status);

          switch (status) {
            case 'legalProject':
              external_electron_["ipcRenderer"].send('global-notify', {
                title: '提示：',
                body: '识别到该项目已添加，直接进入到开发界面。'
              });

              _this2.pushToWorkspace(currentDirectoryPath);

              break;

            case 'noAccess':
              external_electron_["ipcRenderer"].send('global-notify', {
                title: '错误：',
                type: 'error',
                body: '当前目录没有读写权限，请重新选择其他目录。'
              });

              _this2.openDirectory();

              break;
            // case 'hasFiles':
            //   Dialog.confirm({
            //     content: '当前目录已经存在文件，点击『确定』将继续再当前目录生成 ICE 项目，部分文件可能会被覆盖。',
            //     title: 'Confirm',
            //     onOk: () => {
            //       this.setState({
            //         currentPath: path[0]
            //       });
            //     },
            //     onCancel: () => {
            //       this.openDirectory();
            //     }
            //   });
            //   break;

            case 'emptyProject':
              _this2.setState({
                currentPath: currentDirectoryPath
              });

              break;

            case 'unknown':
              break;
          }
        }
      });
      external_electron_["ipcRenderer"].on('project-add-newproject', function (event, data) {
        var path = data.path;

        _this2.pushToWorkspace(path);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      App_setMainWindowSize();
    }
  }, {
    key: "render",
    value: function render() {
      var workspaceList = this.getWorkspaceList();
      return react_default.a.createElement("div", null, react_default.a.createElement("div", null, react_default.a.createElement("img", {
        style: {
          display: 'block',
          margin: '0 auto'
        },
        src: __webpack_require__(691)
      })), react_default.a.createElement("div", {
        className: "page-main"
      }, react_default.a.createElement(Status_ProjectList_ProjectList, {
        removeProject: this.handleRemoveProject,
        projects: workspaceList
      })));
    }
  }]);

  return App;
}(react["Component"]);

App_App.displayName = 'AppMain';


function App_setMainWindowSize() {
  var width = document.documentElement.scrollWidth;
  var height = document.documentElement.scrollHeight;
  external_electron_["ipcRenderer"].send('set-main-window-size', {
    width: width,
    height: height
  });
}
// EXTERNAL MODULE: ./renderer/node_modules/react-dom/index.js
var react_dom = __webpack_require__(12);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./renderer/src/pages/Status/index.jsx
 // 当前 page 的主入口




var renderEntry = react_default.a.createElement(App_App);
var app = document.createElement('div');
document.body.appendChild(app);
react_dom_default.a.render(renderEntry, app);

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "752dbb8afb4e322149d6b4f04858d373.svg";

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(674);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconfont_iconfont_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var _iconfont_iconfont_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconfont_iconfont_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=568722&keyword=
// 使用 custom 生成自定义 ICON 组件



var fontFamily = 'iceworks';
var prefix = 'iceworks';


var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          type = _this$props.type,
          other = _objectWithoutProperties(_this$props, ["className", "size", "type"]);

      var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()((_cx = {}, _defineProperty(_cx, "".concat(prefix, "-").concat(size), !!size), _defineProperty(_cx, "".concat(fontFamily), true), _defineProperty(_cx, "".concat(prefix, "-").concat(type), !!type), _defineProperty(_cx, className, !!className), _cx));
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", _extends({}, other, {
        className: classes
      }));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

Icon.propTypes = {
  /**
   * 指定显示哪种图标
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 指定图标大小
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'])
};
Icon.defaultProps = {
  size: 'medium'
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ })

/******/ });