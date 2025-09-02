function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { unit } from '@ant-design/cssinjs';
import { genStyleHooks, mergeToken } from 'antd/es/theme/internal';
// 定义 Handler 的样式
var createStyle = function createStyle(token) {
  var componentCls = token.componentCls,
    indicatorDraggingColor = token.indicatorDraggingColor,
    indicatorIconColor = token.indicatorIconColor,
    _token$indicatorIconS = token.indicatorIconSize,
    indicatorIconSize = _token$indicatorIconS === void 0 ? 16 : _token$indicatorIconS,
    indicatorIconBgColor = token.indicatorIconBgColor;
  return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    position: 'absolute',
    pointerEvents: 'auto',
    // 拖拽图标样式
    '.drag-icon': {
      color: indicatorIconColor,
      fontSize: unit(indicatorIconSize),
      width: 'calc(1em + 4px)',
      height: 'calc(1em + 4px)',
      opacity: 0.6,
      textAlign: 'center',
      lineHeight: 'calc(1em + 4px)',
      transition: 'opacity 0.2s ease',
      pointerEvents: 'none',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: indicatorIconBgColor,
      borderRadius: token.borderRadius,
      padding: unit(2),
      boxShadow: token.boxShadowTertiary
    }
  }, "&.dragging", {
    background: indicatorDraggingColor,
    '.drag-icon': {
      opacity: 1
    }
  }), "&.right", {
    cursor: 'ew-resize',
    left: unit(0),
    top: unit(0),
    height: '100%',
    width: '8px'
  }), "&.left", {
    cursor: 'ew-resize',
    right: unit(0),
    top: unit(0),
    height: '100%',
    width: '8px'
  }), "&.top", {
    cursor: 'ns-resize',
    left: unit(0),
    bottom: unit(0),
    height: '8px',
    width: '100%'
  }), "&.bottom", {
    cursor: 'ns-resize',
    left: unit(0),
    top: unit(0),
    height: '8px',
    width: '100%'
  }));
};
var prepareComponentToken = function prepareComponentToken(token) {
  return {
    indicatorDraggingColor: token.colorPrimaryBg,
    indicatorIconColor: token.colorTextSecondary,
    indicatorIconSize: 16,
    indicatorIconBgColor: token.colorBgContainer
  };
};
export default genStyleHooks('EnhanceDrawer', function (token) {
  var drawerToken = mergeToken(token, {});
  return [createStyle(drawerToken), {}];
}, prepareComponentToken);