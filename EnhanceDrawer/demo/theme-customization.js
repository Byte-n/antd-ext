function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button, ConfigProvider } from 'antd';
import { EnhanceDrawer } from "../..";
import React, { useState } from 'react';
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    theme: {
      components: {
        EnhanceDrawer: {
          indicatorDraggingColor: '#f0f8ff',
          indicatorIconColor: '#1890ff',
          indicatorIconSize: 20,
          indicatorIconBgColor: '#ffffff'
        }
      }
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "\u6253\u5F00\u62BD\u5C49"), /*#__PURE__*/React.createElement(EnhanceDrawer, {
    title: "\u4E3B\u9898\u5B9A\u5236",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    resize: true
  }, /*#__PURE__*/React.createElement("p", null, "\u8FD9\u4E2A\u62BD\u5C49\u4F7F\u7528\u4E86\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF1A"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u62D6\u62FD\u80CC\u666F\u8272\uFF1A\u6D45\u84DD\u8272 (#f0f8ff)"), /*#__PURE__*/React.createElement("li", null, "\u56FE\u6807\u989C\u8272\uFF1A\u84DD\u8272 (#1890ff)"), /*#__PURE__*/React.createElement("li", null, "\u56FE\u6807\u5927\u5C0F\uFF1A20px"), /*#__PURE__*/React.createElement("li", null, "\u56FE\u6807\u80CC\u666F\u8272\uFF1A\u767D\u8272 (#ffffff)")), /*#__PURE__*/React.createElement("p", null, "\u4F60\u53EF\u4EE5\u901A\u8FC7 ConfigProvider \u7684 theme \u914D\u7F6E\u6765\u81EA\u5B9A\u4E49\u8FD9\u4E9B\u6837\u5F0F\u3002")));
});