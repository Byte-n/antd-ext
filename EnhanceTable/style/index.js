function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { unit } from '@ant-design/cssinjs';
import { genStyleHooks, mergeToken } from 'antd/es/theme/internal';
var createStyle = function createStyle(token) {
  var componentCls = token.componentCls,
    antCls = token.antCls,
    stripeBgColor = token.stripeBgColor,
    headBgColor = token.headBgColor,
    headZIndex = token.headZIndex,
    stripeHoverBgColor = token.stripeHoverBgColor,
    scrollbarWidth = token.scrollbarWidth,
    scrollbarColor = token.scrollbarColor,
    scrollbarBgColor = token.scrollbarBgColor,
    scrollbarGutter = token.scrollbarGutter,
    paginationMarginBlock = token.paginationMarginBlock;
  return _defineProperty({}, componentCls, _defineProperty({
    '&.y-auto': _defineProperty({
      height: '100%',
      maxHeight: '100%',
      minHeight: 0,
      flex: '1'
    }, "".concat(antCls, "-spin-nested-loading"), _defineProperty({
      height: '100%'
    }, "".concat(antCls, "-spin-container"), _defineProperty(_defineProperty({
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }, "".concat(antCls, "-table"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      height: '100%',
      minHeight: 0
    }, "".concat(antCls, "-table-container"), {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }), "".concat(antCls, "-table-content"), {
      overflowY: 'auto !important',
      flex: '1',
      minHeight: 0
    }), "".concat(antCls, "-table-header"), {
      height: 'max-content',
      flexShrink: 0
    }), 'table thead', {
      position: 'sticky',
      top: 0,
      left: 0,
      'z-index': "".concat(headZIndex),
      flexShrink: 0
    })), "".concat(antCls, "-pagination"), {
      marginBlock: unit(paginationMarginBlock)
    }))),
    '&.stripe': _defineProperty(_defineProperty(_defineProperty({}, "".concat(antCls, "-table-thead > tr > th"), {
      background: headBgColor
    }), "".concat(antCls, "-table ").concat(antCls, "-table-content table"), _defineProperty({
      'tr:nth-child(2n+1) td': {
        backgroundColor: stripeBgColor
      }
    }, 'tr td${antCls}-table-cell-row-hover', {
      background: stripeHoverBgColor
    })), "&".concat(antCls, "-table-wrapper ").concat(antCls, "-table-tbody ").concat(antCls, "-table-row >").concat(antCls, "-table-cell-row-hover"), {
      background: stripeHoverBgColor
    })
  }, "".concat(antCls, "-table"), _defineProperty({}, "".concat(antCls, "-table-container"), _defineProperty({}, "".concat(antCls, "-table-body,").concat(antCls, "-table-content"), {
    scrollbarWidth: scrollbarWidth,
    scrollbarColor: "".concat(scrollbarColor, " ").concat(scrollbarBgColor),
    scrollbarGutter: scrollbarGutter
  }))));
};
var prepareComponentToken = function prepareComponentToken(token) {
  return {
    stripeBgColor: token.colorFillQuaternary,
    stripeHoverBgColor: token.colorFillSecondary,
    headBgColor: token.colorBgContainer,
    headZIndex: token.zIndexPopupBase,
    scrollbarWidth: 'thin',
    scrollbarColor: token.colorTextPlaceholder,
    scrollbarBgColor: 'transparent',
    scrollbarGutter: 'stable',
    paginationMarginBlock: 8
  };
};
export default genStyleHooks('EnhanceTable', function (token) {
  var EnhanceTableToken = mergeToken(token, {});
  return [createStyle(EnhanceTableToken)];
}, prepareComponentToken);