function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { TagsInput } from "../..";
import React from 'react';
import { useState } from 'react';
export default (function () {
  var _useState = useState(['小尺寸', '标签']),
    _useState2 = _slicedToArray(_useState, 2),
    smallValue = _useState2[0],
    setSmallValue = _useState2[1];
  var _useState3 = useState(['中等尺寸', '标签']),
    _useState4 = _slicedToArray(_useState3, 2),
    middleValue = _useState4[0],
    setMiddleValue = _useState4[1];
  var _useState5 = useState(['大尺寸', '标签']),
    _useState6 = _slicedToArray(_useState5, 2),
    largeValue = _useState6[0],
    setLargeValue = _useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u5C0F\u5C3A\u5BF8 (small)"), /*#__PURE__*/React.createElement(TagsInput, {
    size: "small",
    type: "text",
    value: smallValue,
    onChange: setSmallValue,
    placeholder: "\u5C0F\u5C3A\u5BF8\u8F93\u5165\u6846"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u4E2D\u7B49\u5C3A\u5BF8 (middle)"), /*#__PURE__*/React.createElement(TagsInput, {
    size: "middle",
    type: "text",
    value: middleValue,
    onChange: setMiddleValue,
    placeholder: "\u4E2D\u7B49\u5C3A\u5BF8\u8F93\u5165\u6846"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u5927\u5C3A\u5BF8 (large)"), /*#__PURE__*/React.createElement(TagsInput, {
    type: "text",
    size: "large",
    value: largeValue,
    onChange: setLargeValue,
    placeholder: "\u5927\u5C3A\u5BF8\u8F93\u5165\u6846"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u9ED8\u8BA4\u5C3A\u5BF8 (\u4E0D\u6307\u5B9A size)"), /*#__PURE__*/React.createElement(TagsInput, {
    type: "text",
    placeholder: "\u9ED8\u8BA4\u5C3A\u5BF8\u8F93\u5165\u6846",
    defaultValue: ['默认尺寸', '标签']
  })));
});