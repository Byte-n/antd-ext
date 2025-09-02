var _excluded = ["placement", "onRDragStart", "onRDragEnd", "onRDragMove", "prefixCls", "dragIcon"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { DragOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import useStyle from "./style";
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
/**
 * Resize handler for the drawer
 */
export default function DragIndicator(props) {
  var placement = props.placement,
    onRDragStart = props.onRDragStart,
    onRDragEnd = props.onRDragEnd,
    onRDragMove = props.onRDragMove,
    customizePrefixCls = props.prefixCls,
    dragIcon = props.dragIcon,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    dragging = _useState2[0],
    setDragging = _useState2[1];
  var mouseRef = useRef();
  var onRRef = useRef({
    onRDragStart: onRDragStart,
    onRDragEnd: onRDragEnd,
    onRDragMove: onRDragMove
  });
  onRRef.current = {
    onRDragStart: onRDragStart,
    onRDragEnd: onRDragEnd,
    onRDragMove: onRDragMove
  };
  var onMouseDown = useCallback(function (e) {
    var _onRRef$current, _onRRef$current$onRDr;
    mouseRef.current = {
      x: e.pageX,
      y: e.pageY,
      prevX: e.pageX,
      prevY: e.pageY
    };
    (_onRRef$current = onRRef.current) === null || _onRRef$current === void 0 || (_onRRef$current$onRDr = _onRRef$current.onRDragStart) === null || _onRRef$current$onRDr === void 0 || _onRRef$current$onRDr.call(_onRRef$current);
    setDragging(true);
  }, []);
  useEffect(function () {
    var _onMouseMove = function _onMouseMove(e) {
      var _onRRef$current2, _onRRef$current2$onRD;
      if (!mouseRef.current) {
        return;
      }
      var _mouseRef$current = mouseRef.current,
        x = _mouseRef$current.x,
        y = _mouseRef$current.y,
        prevX = _mouseRef$current.prevX,
        prevY = _mouseRef$current.prevY;
      var totalDeltaX = e.pageX - x;
      var totalDeltaY = e.pageY - y;
      var deltaX = e.pageX - prevX;
      var deltaY = e.pageY - prevY;
      mouseRef.current.prevX = e.pageX;
      mouseRef.current.prevY = e.pageY;
      (_onRRef$current2 = onRRef.current) === null || _onRRef$current2 === void 0 || (_onRRef$current2$onRD = _onRRef$current2.onRDragMove) === null || _onRRef$current2$onRD === void 0 || _onRRef$current2$onRD.call(_onRRef$current2, deltaX, deltaY, totalDeltaX, totalDeltaY);
    };
    var _onMouseUp = function _onMouseUp() {
      var _onRRef$current3, _onRRef$current3$onRD;
      if (!mouseRef.current) {
        return;
      }
      setDragging(false);
      mouseRef.current = undefined;
      (_onRRef$current3 = onRRef.current) === null || _onRRef$current3 === void 0 || (_onRRef$current3$onRD = _onRRef$current3.onRDragEnd) === null || _onRRef$current3$onRD === void 0 || _onRRef$current3$onRD.call(_onRRef$current3);
    };
    window.addEventListener('mousemove', _onMouseMove);
    window.addEventListener('mouseup', _onMouseUp);
    window.addEventListener('dragend', _onMouseUp);
    window.addEventListener('mouseleave', _onMouseUp);
    return function () {
      window.removeEventListener('mousemove', _onMouseMove);
      window.removeEventListener('mouseup', _onMouseUp);
    };
  });
  var configContext = useContext(ConfigProvider.ConfigContext);
  var prefixCls = configContext.getPrefixCls('drawer-dragging-indicator', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 3),
    wrapCSSVar = _useStyle2[0],
    hashId = _useStyle2[1],
    cssVarCls = _useStyle2[2];

  // 根据位置选择对应的图标
  var getDragIcon = useCallback(function () {
    // 如果外部传入了图标，优先使用外部图标
    if (dragIcon) {
      return dragIcon;
    }

    // 否则使用默认图标
    var defaultIcon;
    switch (placement) {
      case 'left':
        defaultIcon = /*#__PURE__*/React.createElement(VerticalAlignMiddleOutlined, {
          style: {
            transform: 'rotate(90deg)'
          }
        });
        break;
      case 'right':
        defaultIcon = /*#__PURE__*/React.createElement(VerticalAlignMiddleOutlined, {
          style: {
            transform: 'rotate(90deg)'
          }
        });
        break;
      case 'top':
        defaultIcon = /*#__PURE__*/React.createElement(VerticalAlignMiddleOutlined, null);
        break;
      case 'bottom':
        defaultIcon = /*#__PURE__*/React.createElement(VerticalAlignMiddleOutlined, null);
        break;
      default:
        defaultIcon = /*#__PURE__*/React.createElement(DragOutlined, null);
    }
    return defaultIcon;
  }, [dragIcon, placement]);
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseDown: onMouseDown,
    className: classNames(prefixCls, placement, {
      dragging: dragging
    }, hashId, cssVarCls)
  }), /*#__PURE__*/React.createElement("span", {
    className: "drag-icon"
  }, getDragIcon())));
}