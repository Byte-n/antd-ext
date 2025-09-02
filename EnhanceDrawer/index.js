var _excluded = ["placement", "drawerRender", "resize", "rootClassName", "prefixCls"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { ConfigProvider, Drawer } from 'antd';
import DragIndicator from "./DragIndicator";
import classNames from 'classnames';
import React, { useCallback, useContext, useRef } from 'react';
var incr = 1;
export default (function (props) {
  var _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _drawerRender = props.drawerRender,
    resize = props.resize,
    rootClassName = props.rootClassName,
    customizePrefixCls = props.prefixCls,
    rest = _objectWithoutProperties(props, _excluded);
  var configContext = useContext(ConfigProvider.ConfigContext);
  var drawerPrefixCls = configContext.getPrefixCls('drawer');
  var rootClass = useRef("enhance-drawer-root-".concat(incr++));
  var wrapperRef = useRef(null);
  var getWrapperElement = useCallback(function () {
    if (!wrapperRef.current) {
      wrapperRef.current = document.getElementsByClassName(rootClass.current)[0].querySelector(".".concat(drawerPrefixCls, "-content-wrapper"));
    }
    return wrapperRef.current;
  }, [drawerPrefixCls]);
  var onRDragStart = useCallback(function () {
    getWrapperElement().style.transition = 'none';
    getWrapperElement().style.pointerEvents = 'none';
    if (_typeof(resize) === 'object') {
      var _resize$onReSizeStart;
      (_resize$onReSizeStart = resize.onReSizeStart) === null || _resize$onReSizeStart === void 0 || _resize$onReSizeStart.call(resize);
    }
  }, [resize]);
  var onRDragEnd = useCallback(function () {
    getWrapperElement().style.transition = '';
    getWrapperElement().style.pointerEvents = 'none';
    if (_typeof(resize) === 'object') {
      var _resize$onReSizeEnd;
      (_resize$onReSizeEnd = resize.onReSizeEnd) === null || _resize$onReSizeEnd === void 0 || _resize$onReSizeEnd.call(resize);
    }
  }, [resize]);
  var onRDragMove = useCallback(function (x, y) {
    var ele = getWrapperElement();
    function _limit(v) {
      if (_typeof(resize) !== 'object') {
        return v;
      }
      var min = resize.min,
        max = resize.max;
      if (min !== undefined && v < min) {
        return min;
      }
      if (max !== undefined && v > max) {
        return max;
      }
      return v;
    }
    if (placement === 'right') {
      ele.style.width = "".concat(_limit(ele.clientWidth - x), "px");
    } else if (placement === 'left') {
      ele.style.width = "".concat(_limit(ele.clientWidth + x), "px");
    } else if (placement === 'top') {
      ele.style.height = "".concat(_limit(ele.clientHeight + y), "px");
    } else {
      ele.style.height = "".concat(_limit(ele.clientHeight - y), "px");
    }
  }, [placement, resize]);
  return /*#__PURE__*/React.createElement(Drawer, _extends({}, rest, {
    prefixCls: drawerPrefixCls,
    rootClassName: classNames(rootClassName, rootClass.current),
    placement: placement,
    drawerRender: function drawerRender(node) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, _drawerRender ? _drawerRender(node) : node, resize && /*#__PURE__*/React.createElement(DragIndicator, {
        prefixCls: customizePrefixCls,
        placement: placement,
        onRDragStart: onRDragStart,
        onRDragEnd: onRDragEnd,
        onRDragMove: onRDragMove,
        dragIcon: _typeof(resize) === 'object' ? resize.dragIcon : undefined
      }));
    }
  }));
});