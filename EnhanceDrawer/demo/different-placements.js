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
    openRight = _useState2[0],
    setOpenRight = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openLeft = _useState4[0],
    setOpenLeft = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openTop = _useState6[0],
    setOpenTop = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openBottom = _useState8[0],
    setOpenBottom = _useState8[1];
  return /*#__PURE__*/React.createElement(ConfigProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpenRight(true);
    },
    style: {
      marginRight: 8
    }
  }, "\u53F3\u4FA7\u62BD\u5C49"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpenLeft(true);
    },
    style: {
      marginRight: 8
    }
  }, "\u5DE6\u4FA7\u62BD\u5C49"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpenTop(true);
    },
    style: {
      marginRight: 8
    }
  }, "\u9876\u90E8\u62BD\u5C49"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpenBottom(true);
    }
  }, "\u5E95\u90E8\u62BD\u5C49")), /*#__PURE__*/React.createElement(EnhanceDrawer, {
    title: "\u53F3\u4FA7\u62BD\u5C49",
    open: openRight,
    placement: "right",
    onClose: function onClose() {
      return setOpenRight(false);
    },
    resize: {
      min: 300,
      max: 800
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2A\u53F3\u4FA7\u62BD\u5C49\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u53F3\u4FA7\u8FB9\u7F18\u53EF\u4EE5\u8C03\u6574\u5BBD\u5EA6\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u56FE\u6807\u4F1A\u663E\u793A\u4E3A\u6C34\u5E73\u65B9\u5411\u3002")), /*#__PURE__*/React.createElement(EnhanceDrawer, {
    title: "\u5DE6\u4FA7\u62BD\u5C49",
    open: openLeft,
    placement: "left",
    onClose: function onClose() {
      return setOpenLeft(false);
    },
    resize: {
      min: 300,
      max: 800
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2A\u5DE6\u4FA7\u62BD\u5C49\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u5DE6\u4FA7\u8FB9\u7F18\u53EF\u4EE5\u8C03\u6574\u5BBD\u5EA6\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u56FE\u6807\u4F1A\u663E\u793A\u4E3A\u6C34\u5E73\u65B9\u5411\u3002")), /*#__PURE__*/React.createElement(EnhanceDrawer, {
    title: "\u9876\u90E8\u62BD\u5C49",
    open: openTop,
    placement: "top",
    onClose: function onClose() {
      return setOpenTop(false);
    },
    resize: {
      min: 200,
      max: 600
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2A\u9876\u90E8\u62BD\u5C49\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u9876\u90E8\u8FB9\u7F18\u53EF\u4EE5\u8C03\u6574\u9AD8\u5EA6\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u56FE\u6807\u4F1A\u663E\u793A\u4E3A\u5782\u76F4\u65B9\u5411\u3002")), /*#__PURE__*/React.createElement(EnhanceDrawer, {
    title: "\u5E95\u90E8\u62BD\u5C49",
    open: openBottom,
    placement: "bottom",
    onClose: function onClose() {
      return setOpenBottom(false);
    },
    resize: {
      min: 200,
      max: 600
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2A\u5E95\u90E8\u62BD\u5C49\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u5E95\u90E8\u8FB9\u7F18\u53EF\u4EE5\u8C03\u6574\u9AD8\u5EA6\u3002"), /*#__PURE__*/React.createElement("p", null, "\u62D6\u62FD\u56FE\u6807\u4F1A\u663E\u793A\u4E3A\u5782\u76F4\u65B9\u5411\u3002")));
});