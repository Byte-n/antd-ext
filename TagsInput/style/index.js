function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { unit } from '@ant-design/cssinjs';
import { genStyleHooks, mergeToken } from 'antd/es/theme/internal';
// 定义 TagsInput 的样式
var createStyle = function createStyle(token) {
  var componentCls = token.componentCls,
    colorTextPlaceholder = token.colorTextPlaceholder,
    colorBorder = token.colorBorder,
    colorPrimary = token.colorPrimary,
    colorBgContainer = token.colorBgContainer,
    borderRadius = token.borderRadius,
    tagMaxWidth = token.tagMaxWidth,
    paddingSM = token.paddingSM,
    paddingMD = token.paddingMD,
    paddingLG = token.paddingLG,
    controlHeightSM = token.controlHeightSM,
    controlHeightMD = token.controlHeightMD,
    controlHeightLG = token.controlHeightLG,
    fontSizeSM = token.fontSizeSM,
    fontSizeLG = token.fontSizeLG;
  return _defineProperty({}, componentCls, {
    position: 'relative',
    width: '100%',
    border: "".concat(unit(1), " solid ").concat(colorBorder),
    borderRadius: borderRadius,
    paddingLeft: unit(paddingMD),
    backgroundColor: colorBgContainer,
    minHeight: unit(controlHeightMD),
    // 标签样式
    '.tag-item': {
      maxWidth: unit(tagMaxWidth),
      height: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    // 省略号标签样式
    '.ellipsis-tag': {
      cursor: 'pointer',
      color: colorPrimary
    },
    // 输入框样式
    '.field': {
      flex: 1,
      border: 'none',
      boxShadow: 'none',
      borderRadius: 0,
      backgroundColor: 'transparent',
      '&:focus': {
        boxShadow: 'none'
      },
      '&::placeholder': {
        color: colorTextPlaceholder
      }
    },
    // 小尺寸样式
    '&.small': {
      minHeight: unit(controlHeightSM),
      paddingLeft: unit(paddingSM),
      paddingRight: unit(paddingSM),
      paddingTop: unit(paddingSM / 2),
      paddingBottom: unit(paddingSM / 2),
      '.field': {
        fontSize: fontSizeSM
      }
    },
    // 大尺寸样式
    '&.large': {
      minHeight: unit(controlHeightLG),
      paddingLeft: unit(paddingLG),
      paddingRight: unit(paddingLG),
      '.field': {
        fontSize: fontSizeLG
      }
    }
  });
};
var prepareComponentToken = function prepareComponentToken() {
  return {
    tagMaxWidth: 100,
    // 参考 Ant Design Input 组件的设计 token
    paddingSM: 4,
    paddingMD: 6,
    paddingLG: 8,
    marginSM: 4,
    marginMD: 6,
    marginLG: 8,
    controlHeightSM: 24,
    controlHeightMD: 32,
    controlHeightLG: 40,
    fontSizeSM: 12,
    fontSizeMD: 14,
    fontSizeLG: 16
  };
};
export default genStyleHooks('TagsInput', function (token) {
  var tagsInputToken = mergeToken(token, {});
  return [createStyle(tagsInputToken)];
}, prepareComponentToken);