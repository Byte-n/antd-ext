function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import TagsInput from "../index";
var MaxCountDemo = function MaxCountDemo() {
  var _useState = useState(['标签1', '标签2']),
    _useState2 = _slicedToArray(_useState, 2),
    tags = _useState2[0],
    setTags = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u6700\u5927\u6570\u91CF\u9650\u5236"), /*#__PURE__*/React.createElement(TagsInput, {
    value: tags,
    onChange: setTags,
    maxCount: 5,
    placeholder: "\u6700\u591A\u6DFB\u52A05\u4E2A\u6807\u7B7E"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u6807\u7B7E\uFF1A", tags.join(', ')), /*#__PURE__*/React.createElement("p", null, "\u5DF2\u6DFB\u52A0\uFF1A", tags.length, "/5")));
};
export default MaxCountDemo;