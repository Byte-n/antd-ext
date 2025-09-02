function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Flex } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import classNames from 'classnames';
import React, { useContext } from 'react';
import useStyle from "./useStyle";
/** 和马戏团一样的，三个小球的加载动画 */
export default function LoadingIndicatorCircusBall(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('LoadingIndicatorCircusBall');
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 3),
    wrapCSSVar = _useStyle2[0],
    hashId = _useStyle2[1],
    cssVarCls = _useStyle2[2];
  return wrapCSSVar( /*#__PURE__*/React.createElement(Flex, {
    justify: "center",
    align: "center",
    className: "size-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames(prefixCls, cssVarCls, hashId, size)
  }, /*#__PURE__*/React.createElement("div", {
    id: "contain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipText"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    id: "wrap1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball",
    id: "ball1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    id: "wrap2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball",
    id: "ball2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    id: "wrap3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball",
    id: "ball3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    id: "wrap4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball",
    id: "ball4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    id: "wrap5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball",
    id: "ball5"
  }))))));
}