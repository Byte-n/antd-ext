function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Space, Card, Typography } from 'antd';
import { EnhanceSelect } from "../..";
var Title = Typography.Title,
  Text = Typography.Text;
var options = Array.from({
  length: 100
}, function (_, index) {
  return {
    label: "\u9009\u9879".concat(index + 1),
    value: "".concat(index + 1),
    data: {
      id: index + 1,
      name: "\u9009\u9879".concat(index + 1)
    }
  };
});
var ResponsiveDemo = function ResponsiveDemo() {
  var _useState = useState(Array.from({
      length: 50
    }, function (_, index) {
      return "".concat(index + 1);
    })),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: "large",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    level: 4
  }, "maxTagCount \u4E0D\u540C\u53D6\u503C\u6548\u679C\u5BF9\u6BD4"), /*#__PURE__*/React.createElement(Card, {
    title: "maxTagCount='responsive'",
    size: "small"
  }, /*#__PURE__*/React.createElement(EnhanceSelect, {
    mode: "multiple",
    placeholder: "\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",
    options: options,
    value: value,
    onChange: setValue,
    maxTagCount: "responsive",
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u9009\u4E2D: ", value.length, " \u9879"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "\u4E0D\u8BBE\u7F6E maxTagCount + \u9650\u5236\u9AD8\u5EA6",
    size: "small"
  }, /*#__PURE__*/React.createElement(EnhanceSelect, {
    mode: "multiple",
    placeholder: "\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",
    options: options,
    value: value,
    onChange: setValue,
    style: {
      width: '100%',
      maxHeight: 120
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u9009\u4E2D: ", value.length, " \u9879"))), /*#__PURE__*/React.createElement(Card, {
    title: "maxTagCount={3}",
    size: "small"
  }, /*#__PURE__*/React.createElement(EnhanceSelect, {
    mode: "multiple",
    placeholder: "\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",
    options: options,
    value: value,
    onChange: setValue,
    maxTagCount: 3,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u9009\u4E2D: ", value.length, " \u9879")))), /*#__PURE__*/React.createElement(Card, {
    title: "\u8BF4\u660E",
    size: "small"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "\u4E0D\u8BBE\u7F6E maxTagCount + \u9650\u5236\u9AD8\u5EA6:"), " \u901A\u8FC7 CSS maxHeight \u9650\u5236\u7EC4\u4EF6\u9AD8\u5EA6\uFF0C\u8D85\u51FA\u90E8\u5206\u4F1A\u663E\u793A\u6EDA\u52A8\u6761"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "maxTagCount=\"responsive\":"), " \u6839\u636E\u5BB9\u5668\u5BBD\u5EA6\u81EA\u52A8\u8C03\u6574\u663E\u793A\u7684\u6807\u7B7E\u6570\u91CF\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "maxTagCount=", 3, ":"), " \u6700\u591A\u663E\u793A 3 \u4E2A\u6807\u7B7E\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A \"+N\" \u5F62\u5F0F"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "maxTagCount=", 5, ":"), " \u6700\u591A\u663E\u793A 5 \u4E2A\u6807\u7B7E\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A \"+N\" \u5F62\u5F0F")), /*#__PURE__*/React.createElement(Text, {
    type: "secondary"
  }, "\u5EFA\u8BAE\uFF1A\u9009\u62E9\u591A\u4E2A\u9009\u9879\u540E\u89C2\u5BDF\u4E0D\u540C\u914D\u7F6E\u4E0B\u7684\u663E\u793A\u6548\u679C")));
};
export default ResponsiveDemo;