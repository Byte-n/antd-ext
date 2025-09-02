function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button, ConfigProvider, message } from 'antd';
import { EnhanceDrawer } from "../..";
import React, { useState } from 'react';
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handleResizeStart = function handleResizeStart() {
    message.info('开始拖拽调整大小');
  };
  var handleResizeEnd = function handleResizeEnd() {
    message.success('拖拽调整大小完成');
  };
  return /*#__PURE__*/React.createElement(ConfigProvider, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "\u6253\u5F00\u62BD\u5C49"), /*#__PURE__*/React.createElement(EnhanceDrawer, {
    title: "\u62D6\u62FD\u4E8B\u4EF6\u56DE\u8C03",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    resize: {
      onReSizeStart: handleResizeStart,
      onReSizeEnd: handleResizeEnd
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u8FD9\u4E2A\u62BD\u5C49\u6709\u62D6\u62FD\u4E8B\u4EF6\u56DE\u8C03\uFF1A"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u5F00\u59CB\u62D6\u62FD\u65F6\u4F1A\u663E\u793A\u63D0\u793A\u4FE1\u606F"), /*#__PURE__*/React.createElement("li", null, "\u7ED3\u675F\u62D6\u62FD\u65F6\u4F1A\u663E\u793A\u6210\u529F\u4FE1\u606F")), /*#__PURE__*/React.createElement("p", null, "\u5C1D\u8BD5\u62D6\u62FD\u8C03\u6574\u5927\u5C0F\uFF0C\u89C2\u5BDF\u63A7\u5236\u53F0\u548C\u6D88\u606F\u63D0\u793A\u3002")));
});