function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["maxTagCount", "labelRender", "options", "onChange", "prefixCls"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { ConfigProvider, Select } from 'antd';
import useStyle from "./style";
import classNames from 'classnames';
import React, { forwardRef, useCallback, useContext, useMemo, useRef } from 'react';
import { unionBy } from "../utils/array";
function InternalEnhanceSelect(opt, ref) {
  var maxTagCount = opt.maxTagCount,
    labelRender = opt.labelRender,
    options = opt.options,
    onChange = opt.onChange,
    customizePrefixCls = opt.prefixCls,
    rest = _objectWithoutProperties(opt, _excluded);
  var allOptionsRef = useRef([]);
  if (options !== null && options !== void 0 && options.length) {
    allOptionsRef.current = unionBy(allOptionsRef.current.concat(options), function (v) {
      return v.value;
    });
  }
  var scroll = useMemo(function () {
    if (maxTagCount === 'responsive') {
      return false;
    }
    return typeof maxTagCount !== 'number';
  }, [maxTagCount]);
  var realLabelRender = useCallback(function (opt) {
    var option = allOptionsRef.current.find(function (v) {
      return v.value === opt.value;
    });
    return labelRender === null || labelRender === void 0 ? void 0 : labelRender(_objectSpread(_objectSpread({}, opt), {}, {
      data: option === null || option === void 0 ? void 0 : option.data
    }));
  }, [labelRender]);
  var configContext = useContext(ConfigProvider.ConfigContext);
  var prefixCls = configContext.getPrefixCls('enhance-select', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 3),
    wrapCSSVar = _useStyle2[0],
    hashId = _useStyle2[1],
    cssVarCls = _useStyle2[2];
  return wrapCSSVar( /*#__PURE__*/React.createElement(Select, _extends({
    ref: ref,
    optionFilterProp: "label"
  }, rest, {
    onChange: onChange,
    options: options,
    labelRender: labelRender ? realLabelRender : undefined,
    className: classNames(prefixCls, hashId, cssVarCls, {
      scroll: scroll
    }, opt.className),
    labelInValue: false,
    maxTagCount: maxTagCount
  })));
}
var EnhanceSelect = /*#__PURE__*/forwardRef(InternalEnhanceSelect);
export default EnhanceSelect;