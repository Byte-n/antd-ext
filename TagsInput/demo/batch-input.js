function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import TagsInput from "../index";
var BatchInputDemo = function BatchInputDemo() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tags = _useState2[0],
    setTags = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    numbers = _useState4[0],
    setNumbers = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u6279\u91CF\u8F93\u5165\u529F\u80FD"), /*#__PURE__*/React.createElement("p", null, "\u70B9\u51FB\u53F3\u4FA7\u7684\u7F16\u8F91\u56FE\u6807\u53EF\u4EE5\u6253\u5F00\u6279\u91CF\u8F93\u5165\u5F39\u7A97"), /*#__PURE__*/React.createElement("h5", null, "\u6587\u672C\u7C7B\u578B\u6279\u91CF\u8F93\u5165"), /*#__PURE__*/React.createElement(TagsInput, {
    value: tags,
    onChange: setTags,
    placeholder: "\u8F93\u5165\u6807\u7B7E\u6216\u70B9\u51FB\u7F16\u8F91\u56FE\u6807\u6279\u91CF\u8F93\u5165"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u6807\u7B7E\uFF1A", tags.join(', '))), /*#__PURE__*/React.createElement("h5", {
    style: {
      marginTop: '20px'
    }
  }, "\u6570\u5B57\u7C7B\u578B\u6279\u91CF\u8F93\u5165"), /*#__PURE__*/React.createElement(TagsInput, {
    type: "numeric",
    value: numbers,
    onChange: setNumbers,
    placeholder: "\u8F93\u5165\u6570\u5B57\u6216\u70B9\u51FB\u7F16\u8F91\u56FE\u6807\u6279\u91CF\u8F93\u5165"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u6570\u5B57\uFF1A", numbers.join(', ')), /*#__PURE__*/React.createElement("p", null, "\u6570\u5B57\u603B\u548C\uFF1A", numbers.reduce(function (sum, num) {
    return sum + num;
  }, 0))));
};
export default BatchInputDemo;