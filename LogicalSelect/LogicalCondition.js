function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { DeleteOutlined, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
import { EnhanceInput, EnhanceSelect } from "./..";
import { defaultConditionTypeOptions, LogicalSelectConditionTypeEnum, parseConditionTypeOptions } from "./conditionType";
import { LogicalSelectRuntimeContext } from "./index";
import { isEmpty, isNil } from "../utils/object";
import { useLocale } from 'antd/es/locale';
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { zhCN } from "./locale";
/**
 * 条件
 * @param props
 * @constructor
 */
export function LogicalCondition(props) {
  var _optionInfo$selectPro, _optionInfo$widgetPro, _optionInfo$widgetPro2;
  var onChange = props.onChange,
    condition = props.condition,
    removeCondition = props.removeCondition,
    widgets = props.widgets,
    parentValue = props.parentValue,
    hierarchy = props.hierarchy,
    level = props.level,
    renderConditionExtra = props.renderConditionExtra,
    prefixCls = props.prefixCls,
    path = props.path;
  var runtimeCtx = useContext(LogicalSelectRuntimeContext);
  var _useLocale = useLocale('LogicalSelect', zhCN),
    _useLocale2 = _slicedToArray(_useLocale, 1),
    locale = _useLocale2[0];
  var optionList = runtimeCtx.getOptions(path);
  var addCondition = useCallback(function () {
    return onChange({
      symbol: 'or',
      conditions: [condition, {}]
    });
  }, [condition, onChange]);
  var allowAddSon = useMemo(function () {
    if (isNil(hierarchy)) {
      return true;
    }
    if (Array.isArray(hierarchy)) {
      return hierarchy.length > level;
    }
    return hierarchy > level;
  }, [hierarchy, level]);
  var updateValue = useCallback(function (v) {
    return onChange(_objectSpread(_objectSpread({}, condition), {}, {
      value: v
    }));
  }, [condition, onChange]);
  var changeOption = useCallback(function (v) {
    var _parseConditionTypeOp = parseConditionTypeOptions(optionInfo.conditionTypeOptions),
      conditionTypeOptions = _parseConditionTypeOp.conditionTypeOptions;
    onChange(_objectSpread(_objectSpread({}, condition), {}, {
      key: v,
      value: null,
      conditionType: conditionTypeOptions[0].value
    }));
  }, [onChange]);
  var updateConditionType = useCallback(function (v) {
    return onChange(_objectSpread(_objectSpread({}, condition), {}, {
      conditionType: v,
      value: null
    }));
  }, [onChange]);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visButton = _useState2[0],
    setVisButton = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    valid = _useState4[0],
    setValid = _useState4[1];
  useEffect(function () {
    // 从 Context 读取错误
    var errs = runtimeCtx.getErrors(path);
    var hasError = Array.isArray(errs) && errs.length > 0;
    setValid(!hasError);
  }, [runtimeCtx, path, condition]);
  var optionInfo = useMemo(function () {
    var find = optionList.find(function (v) {
      return v.value === condition.key;
    });
    if (!find) {
      var temp = {
        label: condition.key,
        value: condition.key,
        widgetProps: {},
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal]
      };
      return temp;
    }
    return find;
  }, [condition.key, optionList]);
  var conditionType = condition.conditionType;
  var _useMemo = useMemo(function () {
      var _optionInfo$condition;
      var Comp = null;
      var conditionTypeOptions = defaultConditionTypeOptions;
      var compProps = optionInfo.widgetProps;
      if ((_optionInfo$condition = optionInfo.conditionTypeOptions) !== null && _optionInfo$condition !== void 0 && _optionInfo$condition.length) {
        var _parseConditionTypeOp2 = parseConditionTypeOptions(optionInfo.conditionTypeOptions),
          ct = _parseConditionTypeOp2.conditionTypeOptions,
          configs = _parseConditionTypeOp2.configs;
        conditionTypeOptions = ct;
        var find = configs.find(function (v) {
          return v.conditionType === condition.conditionType;
        });
        if (find) {
          Comp = typeof find.widget === 'string' ? widgets[find.widget] : find.widget;
          if (!Comp) {
            console.error('[LogicalCondition] 组件不存在 condition = ', condition, 'conditionTypeOptions 参数错误：', optionInfo.conditionTypeOptions);
          }
          if (find.widgetProps) {
            compProps = _objectSpread(_objectSpread({}, compProps), find.widgetProps);
          }
        }
      }
      if (!Comp) {
        if (optionInfo !== null && optionInfo !== void 0 && optionInfo.widget) {
          Comp = typeof optionInfo.widget === 'function' ? optionInfo.widget : widgets[optionInfo.widget];
        }
      }
      if (!Comp) {
        if (condition.key) {
          console.error('[LogicalCondition] 组件不存在 condition = ', condition);
        }
        Comp = widgets.Input;
      }
      return {
        Comp: Comp,
        conditionTypeOptions: conditionTypeOptions,
        compProps: compProps
      };
    }, [widgets, optionList, optionInfo, condition]),
    Comp = _useMemo.Comp,
    conditionTypeOptions = _useMemo.conditionTypeOptions,
    compProps = _useMemo.compProps;
  var _ConfigProvider$useCo = ConfigProvider.useConfig(),
    componentDisabled = _ConfigProvider$useCo.componentDisabled;
  var _ConfigProvider$useCo2 = ConfigProvider.useConfig(),
    componentSize = _ConfigProvider$useCo2.componentSize;
  return /*#__PURE__*/React.createElement(Flex, {
    gap: 3,
    justify: "start",
    align: "center",
    className: "".concat(prefixCls, "-condition"),
    onMouseEnter: function onMouseEnter() {
      return !componentDisabled && setVisButton(true);
    },
    onMouseLeave: function onMouseLeave() {
      return !componentDisabled && setVisButton(false);
    }
  }, /*#__PURE__*/React.createElement(EnhanceSelect, _extends({
    dropdownStyle: {
      minWidth: 230
    }
  }, optionInfo === null || optionInfo === void 0 ? void 0 : optionInfo.selectProps, {
    className: classNames("".concat(prefixCls, "-option"), {
      empty: isEmpty(condition.key)
    }, optionInfo === null || optionInfo === void 0 || (_optionInfo$selectPro = optionInfo.selectProps) === null || _optionInfo$selectPro === void 0 ? void 0 : _optionInfo$selectPro.className),
    showSearch: true,
    size: componentSize,
    options: optionList,
    value: condition.key,
    onChange: changeOption
  })), /*#__PURE__*/React.createElement(EnhanceSelect, {
    showSearch: false,
    suffixIcon: null,
    disabled: !condition.key || componentDisabled,
    className: "".concat(prefixCls, "-condition-type"),
    onChange: updateConditionType,
    size: componentSize,
    value: conditionType,
    options: conditionTypeOptions,
    popupClassName: "".concat(prefixCls, "-condition-type-popup"),
    placeholder: condition.key ? null : locale.selectFieldFirst
  }), conditionType ? /*#__PURE__*/React.createElement(Comp, _extends({}, compProps, {
    size: componentSize,
    disabled: componentDisabled,
    condition: condition,
    className: classNames("".concat(prefixCls, "-value"), {
      empty: isEmpty(condition.value)
    }, optionInfo === null || optionInfo === void 0 || (_optionInfo$widgetPro = optionInfo.widgetProps) === null || _optionInfo$widgetPro === void 0 ? void 0 : _optionInfo$widgetPro.className),
    value: condition.value,
    onChange: updateValue
  })) : /*#__PURE__*/React.createElement(EnhanceInput, {
    disabled: true,
    className: classNames("".concat(prefixCls, "-value"), {
      empty: isEmpty(condition.value)
    }, optionInfo === null || optionInfo === void 0 || (_optionInfo$widgetPro2 = optionInfo.widgetProps) === null || _optionInfo$widgetPro2 === void 0 ? void 0 : _optionInfo$widgetPro2.className),
    placeholder: locale.selectOperatorFirst
  }), !valid && /*#__PURE__*/React.createElement(Flex, {
    align: "center",
    gap: 2,
    className: "".concat(prefixCls, "-error"),
    wrap: "nowrap"
  }, /*#__PURE__*/React.createElement(ExclamationCircleOutlined, {
    style: {
      fontSize: '12px'
    }
  }), locale.valueEmptyError), allowAddSon && valid && visButton && (parentValue.conditions.length <= 1 ? /*#__PURE__*/React.createElement(Tooltip, {
    title: locale.addChildDisabledTip
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: true,
    color: "primary",
    size: "small",
    variant: "text",
    icon: /*#__PURE__*/React.createElement(PlusOutlined, {
      style: {
        fontSize: '12px'
      }
    })
  })) : /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "small",
    variant: "text",
    onClick: addCondition,
    icon: /*#__PURE__*/React.createElement(PlusOutlined, {
      style: {
        fontSize: '12px'
      }
    })
  })), visButton && /*#__PURE__*/React.createElement(Button, {
    color: "danger",
    size: "small",
    variant: "text",
    onClick: removeCondition,
    icon: /*#__PURE__*/React.createElement(DeleteOutlined, {
      style: {
        fontSize: '12px'
      }
    })
  }), renderConditionExtra === null || renderConditionExtra === void 0 ? void 0 : renderConditionExtra(condition));
}