const e = require("request"), s = require("uppercamelcase"), t = require("../scaffolder/lib/config"), r = {
  table: "\u8868\u683c",
  form: "\u8868\u5355",
  chart: "\u56fe\u8868",
  list: "\u5217\u8868",
  modal: "\u6a21\u6001\u6846",
  filter: "\u7b5b\u9009",
  "data-display": "\u6570\u636e\u5c55\u793a",
  "info-display": "\u4fe1\u606f\u5c55\u793a",
  exception: "\u5f02\u5e38",
  layout: "\u5e03\u5c40"
}, a = {}, o = {};

function c(s) {
  return o[s] ? Promise.resolve(o[s]) : a[s] ? new Promise((e, t) => {
    a[s].push({
      resolve: e,
      reject: t
    })
  }) : (a[s] = [], new Promise((t, r) => {
    e({
      uri: s,
      json: !0
    }, (e, c, i) => {
      e ? (Array.isArray(a[s]) && a[s].forEach(({
        reject: s
      }) => {
        s(e)
      }), delete a[s], r(e)) : (Array.isArray(a[s]) && a[s].forEach(({
        resolve: e
      }) => {
        e(i)
      }), delete a[s], o[s] = i, t(i))
    })
  }))
}
const i = "https://g.alicdn.com/ice-assets/ice-design/databases/scaffolds.db.json";
exports.getScaffolds = function(e) {
  return e = e || {}, c(i).
  catch (e => t.defaultScaffoldings)
};
const n = "https://g.alicdn.com/ice-assets/ice-design/databases/layouts.db.json";
exports.getLayouts = function(e) {
  return e = e || {}, c(n).
  catch (e => t.defaultLayouts)
};
const l = "https://g.alicdn.com/ice-assets/ice-design/databases/blocks.db.json";
exports.getBlocks = function(e) {
  return e = e || {}, c(l).then(s => e.category ? s.filter(s => (s.categories || []).some(s => s === e.category)) : s).
  catch (e => t.defaultBlocks)
}, exports.getCategories = function() {
  return c(l).then(e => {
    const t = {};
    return e.forEach(e => {
      e.categories && e.categories.forEach(e => {
        t[e] = {
          name: e,
          className: s(e),
          description: r[e] || e
        }
      })
    }), Object.values(t)
  })
};