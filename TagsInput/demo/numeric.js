function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import TagsInput from "../index";
var NumericDemo = function NumericDemo() {
  var _useState = useState([1, 2, 3, 100]),
    _useState2 = _slicedToArray(_useState, 2),
    numbers = _useState2[0],
    setNumbers = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u6570\u5B57\u7C7B\u578B"), /*#__PURE__*/React.createElement(TagsInput, {
    type: "numeric",
    value: numbers,
    onChange: setNumbers,
    placeholder: "\u8F93\u5165\u6570\u5B57\uFF0C\u6309\u56DE\u8F66\u6DFB\u52A0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u6570\u5B57\uFF1A", numbers.join(', ')), /*#__PURE__*/React.createElement("p", null, "\u6570\u5B57\u603B\u548C\uFF1A", numbers.reduce(function (sum, num) {
    return sum + num;
  }, 0))));
};
export default NumericDemo;