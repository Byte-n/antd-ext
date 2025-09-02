function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ConfigProvider, Flex, Segmented, theme } from 'antd';
import React from 'react';
import { useLocale } from 'antd/es/locale';
import { zhCN } from "./locale";
var useOptions = function useOptions() {
  var _useLocale = useLocale('LogicalSelect', zhCN),
    _useLocale2 = _slicedToArray(_useLocale, 1),
    locale = _useLocale2[0];
  return [{
    value: 'and',
    label: locale.andLabel
  }, {
    value: 'or',
    label: locale.orLabel
  }];
};

/**
 * 逻辑符号选择器
 * @constructor
 */
export default (function (_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    prefixCls = _ref.prefixCls;
  var _ConfigProvider$useCo = ConfigProvider.useConfig(),
    componentDisabled = _ConfigProvider$useCo.componentDisabled;
  var _theme$useToken = theme.useToken(),
    token = _theme$useToken.token;
  var dis = disabled || componentDisabled;
  return /*#__PURE__*/React.createElement(Flex, {
    justify: "center",
    align: "center",
    rootClassName: "".concat(prefixCls, "-segmented")
  }, /*#__PURE__*/React.createElement("span", {
    className: "bottom-line"
  }), /*#__PURE__*/React.createElement(ConfigProvider, {
    theme: {
      components: {
        Segmented: {
          itemSelectedBg: dis ? token.colorPrimaryBg : token.colorPrimary,
          trackBg: token.colorBgContainer,
          itemColor: token.colorBgSpotlight,
          itemSelectedColor: token.colorWhite,
          trackPadding: 0
        }
      }
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    disabled: dis,
    size: "small",
    vertical: true,
    options: useOptions(),
    value: value,
    onChange: onChange
  })));
});