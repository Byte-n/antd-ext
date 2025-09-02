function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Space, Typography, Card, Divider } from 'antd';
import TagsInput from "../index";
var Title = Typography.Title,
  Paragraph = Typography.Paragraph,
  Text = Typography.Text;
var TextOrNumericListDemo = function TextOrNumericListDemo() {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value1 = _useState2[0],
    setValue1 = _useState2[1];
  var _useState3 = useState([1, 2, 3]),
    _useState4 = _slicedToArray(_useState3, 2),
    value2 = _useState4[0],
    setValue2 = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    value3 = _useState6[0],
    setValue3 = _useState6[1];
  return /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: "large",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "TextOrNumericList \u4F7F\u7528\u793A\u4F8B",
    size: "small"
  }, /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: "middle",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    level: 5
  }, "\u57FA\u7840\u7528\u6CD5"), /*#__PURE__*/React.createElement(Paragraph, null, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u53EF\u4EE5\u8F93\u5165\u5355\u4E2A\u6587\u672C\u6216\u6570\u5B57\uFF0C\u5F53\u8F93\u5165\u6570\u5B57\u65F6\u6309\u56DE\u8F66\u53EF\u5207\u6362\u5230\u6807\u7B7E\u6A21\u5F0F")), /*#__PURE__*/React.createElement(TagsInput.TextOrNumericList, {
    value: value1,
    onChange: setValue1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u5F53\u524D\u503C: "), /*#__PURE__*/React.createElement(Text, {
    code: true
  }, JSON.stringify(value1)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    level: 5
  }, "\u9ED8\u8BA4\u6570\u503C\u5217\u8868"), /*#__PURE__*/React.createElement(Paragraph, null, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u9ED8\u8BA4\u503C\u4E3A\u6570\u5B57\u6570\u7EC4\u65F6\uFF0C\u76F4\u63A5\u663E\u793A\u4E3A\u6807\u7B7E\u6A21\u5F0F")), /*#__PURE__*/React.createElement(TagsInput.TextOrNumericList, {
    value: value2,
    onChange: setValue2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u5F53\u524D\u503C: "), /*#__PURE__*/React.createElement(Text, {
    code: true
  }, JSON.stringify(value2)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    level: 5
  }, "\u81EA\u5B9A\u4E49\u914D\u7F6E"), /*#__PURE__*/React.createElement(Paragraph, null, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u901A\u8FC7 tagsInputProps \u53EF\u4EE5\u81EA\u5B9A\u4E49 TagsInput \u7684\u914D\u7F6E")), /*#__PURE__*/React.createElement(TagsInput.TextOrNumericList, {
    value: value3,
    onChange: setValue3,
    placeholder: "\u8F93\u5165\u7528\u6237ID\u6216\u7528\u6237\u540D",
    tagsInputProps: {
      maxCount: 10,
      maxDisplayCount: 3,
      size: 'large'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u5F53\u524D\u503C: "), /*#__PURE__*/React.createElement(Text, {
    code: true
  }, JSON.stringify(value3)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    level: 5
  }, "\u4F7F\u7528\u8BF4\u660E"), /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: "small"
  }, /*#__PURE__*/React.createElement(Text, null, "\u2022 \u8F93\u5165\u6587\u672C\u65F6\uFF1A\u76F4\u63A5\u8F93\u5165\u4EFB\u610F\u6587\u672C\u5185\u5BB9"), /*#__PURE__*/React.createElement(Text, null, "\u2022 \u8F93\u5165\u6570\u5B57\u65F6\uFF1A\u8F93\u5165\u6570\u5B57\u540E\u6309\u56DE\u8F66\uFF0C\u4F1A\u5207\u6362\u5230\u6807\u7B7E\u6A21\u5F0F"), /*#__PURE__*/React.createElement(Text, null, "\u2022 \u7C98\u8D34\u529F\u80FD\uFF1A\u53EF\u4EE5\u7C98\u8D34\u5305\u542B\u6570\u5B57\u7684\u6587\u672C\uFF0C\u81EA\u52A8\u89E3\u6790\u4E3A\u6570\u5B57\u5217\u8868"), /*#__PURE__*/React.createElement(Text, null, "\u2022 \u6807\u7B7E\u6A21\u5F0F\uFF1A\u652F\u6301\u6279\u91CF\u8F93\u5165\u3001\u6570\u91CF\u9650\u5236\u3001\u663E\u793A\u9650\u5236\u7B49\u529F\u80FD"), /*#__PURE__*/React.createElement(Text, null, "\u2022 \u5207\u6362\u56DE\u6587\u672C\u6A21\u5F0F\uFF1A\u6E05\u7A7A\u6240\u6709\u6807\u7B7E\u540E\u4F1A\u81EA\u52A8\u5207\u6362\u56DE\u6587\u672C\u8F93\u5165\u6A21\u5F0F"))))));
};
export default TextOrNumericListDemo;