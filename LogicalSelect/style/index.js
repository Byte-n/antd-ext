function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { genStyleHooks, mergeToken } from 'antd/es/theme/internal';
// 定义 LogicalSelect 的样式
var createStyle = function createStyle(token) {
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return _defineProperty(_defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-condition"), {
    width: '100%',
    padding: '4px 8px',
    borderRadius: '6px',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#eff6ff'
    },
    '&.empty': {
      minWidth: '100px'
    }
  }), "".concat(componentCls, "-condition-type"), {
    width: '80px',
    flexShrink: 0
  }), "".concat(componentCls, "-value"), {
    maxWidth: '100%',
    width: 'auto',
    flexShrink: 1,
    '&.empty': {
      minWidth: '200px'
    }
  }), "".concat(componentCls, "-segmented"), _defineProperty({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // 分隔线样式
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '2px',
      height: '100%',
      background: 'rgba(0,21,64,.12)'
    },
    // 顶部横线
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '50%',
      height: '2px',
      background: 'rgba(0,21,64,.12)'
    },
    // 底部横线
    '& .bottom-line': {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: '50%',
      height: '2px',
      background: 'rgba(0,21,64,.12)'
    }
  }, "".concat(antCls, "-segmented"), _defineProperty({
    height: 'max-content',
    position: 'relative',
    zIndex: 10,
    fontSize: 12
  }, "".concat(antCls, "-segmented-item-label"), {
    paddingInline: 2
  }))), "".concat(componentCls, "-error"), {
    color: '#ef4444',
    whiteSpace: 'nowrap'
  }), "".concat(componentCls, "-conditions"), {
    flex: 1,
    overflow: 'hidden'
  })), "".concat(componentCls, "-condition-type-popup"), {
    '.rc-virtual-list-scrollbar': {
      width: '2px !important'
    },
    '.ant-select-item': {
      padding: '2px 4px !important'
    }
  });
};
var prepareComponentToken = function prepareComponentToken() {
  return {};
};
export default genStyleHooks('LogicalSelect', function (token) {
  var enhanceSelectToken = mergeToken(token, {});
  return [createStyle(enhanceSelectToken)];
}, prepareComponentToken);