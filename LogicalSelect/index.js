var _excluded = ["widgets", "value", "defaultValue", "onChange", "options", "className", "disabled", "renderEmpty", "prefixCls", "size"],
  _excluded2 = ["name", "enableValidate", "rules", "formItemProps"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import { PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Empty, Flex, Form, Space, Typography } from 'antd';
import { useLocale } from 'antd/es/locale';
import classNames from 'classnames';
import React, { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { cloneDeep, isNil } from "../utils/object";
import { LogicalCondition } from "./LogicalCondition";
import LogicalSymbolSelect from "./LogicalSymbolSelect";
import { getConditionDefaultValue } from "./conditionType";
import { zhCN } from "./locale";
import useStyle from "./style";
import { LogicalSelectDefaultWidgets } from "./widget";
/**
 * 逻辑选择器
 * @constructor
 */
function InternalLogicalSelect(props) {
  var value = props.value,
    _onChange = props.onChange,
    options = props.options,
    removeCondition = props.removeCondition,
    widgets = props.widgets,
    isRoot = props.isRoot,
    className = props.className,
    style = props.style,
    path = props.path,
    hierarchy = props.hierarchy,
    level = props.level,
    renderConditionExtra = props.renderConditionExtra,
    prefixCls = props.prefixCls;
  var _ConfigProvider$useCo = ConfigProvider.useConfig(),
    componentDisabled = _ConfigProvider$useCo.componentDisabled;
  var _useLocale = useLocale('LogicalSelect', zhCN),
    _useLocale2 = _slicedToArray(_useLocale, 1),
    locale = _useLocale2[0];
  var runtimeCtx = useContext(LogicalSelectRuntimeContext);
  var change = useCallback(function (index, newValue) {
    return _onChange(_objectSpread(_objectSpread({}, value), {}, {
      conditions: value.conditions.map(function (v, i) {
        if (index === i) {
          return newValue;
        }
        return v;
      })
    }));
  }, [_onChange, value]);
  var addCondition = useCallback(function () {
    var optionList = runtimeCtx.getOptions(path);
    var sourceOptions = optionList && optionList.length ? optionList : typeof options === 'function' ? options({}, value) : options;
    var def = getConditionDefaultValue(sourceOptions, value);
    _onChange(_objectSpread(_objectSpread({}, value), {}, {
      conditions: value.conditions.concat([def])
    }));
  }, [_onChange, value, runtimeCtx, path, options]);
  var removeSonCondition = useCallback(function (index) {
    var conditions = value.conditions.filter(function (_, i) {
      return i !== index;
    });
    if (conditions.length === 0) {
      removeCondition === null || removeCondition === void 0 || removeCondition();
    } else if (conditions.length === 1 && !isRoot) {
      _onChange(conditions[0]);
    } else {
      _onChange(_objectSpread(_objectSpread({}, value), {}, {
        conditions: conditions
      }));
    }
  }, [removeCondition, _onChange, value, isRoot]);
  var fixedSymbol = useMemo(function () {
    if (!Array.isArray(hierarchy)) {
      return null;
    }
    return hierarchy[level] || null;
  }, []);
  var _ConfigProvider$useCo2 = ConfigProvider.useConfig(),
    componentSize = _ConfigProvider$useCo2.componentSize;
  return /*#__PURE__*/React.createElement(Space, {
    size: componentSize,
    direction: "vertical",
    className: className,
    style: _objectSpread({
      width: '100%'
    }, style)
  }, /*#__PURE__*/React.createElement(Flex, {
    gap: 3
  }, value.conditions.length > 1 && /*#__PURE__*/React.createElement(LogicalSymbolSelect, {
    prefixCls: prefixCls,
    disabled: Boolean(fixedSymbol),
    value: fixedSymbol ? fixedSymbol : value.symbol,
    onChange: function onChange(v) {
      return _onChange(_objectSpread(_objectSpread({}, value), {}, {
        symbol: v
      }));
    }
  }), /*#__PURE__*/React.createElement(Space, {
    size: componentSize,
    direction: "vertical",
    className: "".concat(prefixCls, "-conditions")
  }, value.conditions.map(function (condition, index) {
    if (condition.symbol) {
      return /*#__PURE__*/React.createElement(InternalLogicalSelect, {
        prefixCls: prefixCls,
        renderConditionExtra: renderConditionExtra,
        level: level + 1,
        hierarchy: hierarchy,
        key: index.toString(),
        widgets: widgets,
        value: condition,
        options: options,
        onChange: change.bind(null, index),
        removeCondition: removeSonCondition.bind(null, index),
        path: path.concat(index)
      });
    }
    return /*#__PURE__*/React.createElement(LogicalCondition, {
      prefixCls: prefixCls,
      renderConditionExtra: renderConditionExtra,
      level: level + 1,
      hierarchy: hierarchy,
      parentValue: value,
      widgets: widgets,
      key: (condition === null || condition === void 0 ? void 0 : condition.key) + index.toString(),
      condition: condition,
      onChange: change.bind(null, index),
      value: value,
      options: options,
      removeCondition: removeSonCondition.bind(null, index),
      path: path.concat(index)
    });
  }))), !componentDisabled && /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "small",
    variant: "text",
    onClick: addCondition
  }, locale.add));
}
var EMPTY = {
  symbol: 'and',
  conditions: [{}]
};

// 内部使用的校验元信息（包含 optionsByPath）

export var LogicalSelectRuntimeContext = /*#__PURE__*/React.createContext({
  getOptions: function getOptions() {
    return [];
  },
  getErrors: function getErrors() {
    return undefined;
  }
});
function isGroup(v) {
  return v.symbol !== undefined;
}
function pathKey(path) {
  return path.join('.');
}
function getOptionList(options, cond, root) {
  return typeof options === 'function' ? options(cond, root) : options;
}
export function validateTree(root, options) {
  var optionsByPath = {};
  var errorsByPath = {};
  var errors = [];
  if (!root) {
    return {
      valid: true,
      errors: errors,
      errorsByPath: errorsByPath,
      optionsByPath: optionsByPath
    };
  }
  var walk = function walk(node, path) {
    if (isGroup(node)) {
      var group = node;
      // 为分组节点也记录一份可用于新增子条件的选项列表
      var _k = pathKey(path);
      var groupOpts = getOptionList(options, {}, root);
      optionsByPath[_k] = groupOpts;
      if (!Array.isArray(group.conditions) || group.conditions.length === 0) {
        var item = {
          path: path,
          code: 'empty-group',
          message: '分组不能为空'
        };
        errors.push(item);
        errorsByPath[_k] = (errorsByPath[_k] || []).concat([{
          code: item.code,
          message: item.message
        }]);
      }
      group.conditions.forEach(function (child, i) {
        return walk(child, path.concat(i));
      });
      return;
    }
    var cond = node;
    var k = pathKey(path);
    // 解析选项
    var opts = getOptionList(options, cond, root);
    optionsByPath[k] = opts;

    // 结构校验
    if (isNil(cond.key)) {
      var _item = {
        path: path,
        code: 'missing-key',
        message: '未选择字段'
      };
      errors.push(_item);
      errorsByPath[k] = (errorsByPath[k] || []).concat([{
        code: _item.code,
        message: _item.message
      }]);
    }
    if (isNil(cond.conditionType)) {
      var _item2 = {
        path: path,
        code: 'missing-operator',
        message: '未选择运算符'
      };
      errors.push(_item2);
      errorsByPath[k] = (errorsByPath[k] || []).concat([{
        code: _item2.code,
        message: _item2.message
      }]);
    }

    // 值校验（优先使用 widgetProps.verification）
    var opt = opts === null || opts === void 0 ? void 0 : opts.find(function (o) {
      return o.value === cond.key;
    });
    var verifier = opt === null || opt === void 0 ? void 0 : opt.verification;
    var isEmpty = function isEmpty(v) {
      return v === '' || isNil(v);
    };
    var valueOk = verifier ? verifier(cond.value, root, cond) : !isEmpty(cond.value);
    if (!valueOk) {
      var _item3 = {
        path: path,
        code: 'invalid-value',
        message: '值不合法'
      };
      errors.push(_item3);
      errorsByPath[k] = (errorsByPath[k] || []).concat([{
        code: _item3.code,
        message: _item3.message
      }]);
    }
  };
  walk(root, []);
  return {
    valid: errors.length === 0,
    errors: errors,
    errorsByPath: errorsByPath,
    optionsByPath: optionsByPath
  };
}
var InternalLogical = function InternalLogical(props, ref) {
  var widgets = props.widgets,
    value = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    options = props.options,
    className = props.className,
    disabled = props.disabled,
    renderEmpty = props.renderEmpty,
    customizePrefixCls = props.prefixCls,
    size = props.size,
    rest = _objectWithoutProperties(props, _excluded);
  var widgetsObj = useMemo(function () {
    return _objectSpread(_objectSpread({}, LogicalSelectDefaultWidgets), widgets);
  }, [widgets]);
  var isControlled = value !== undefined;
  var _useState = useState((isControlled ? value : defaultValue) || null),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var realValue = isControlled ? value : val;
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    optionsByPath = _useState4[0],
    setOptionsByPath = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errorsByPath = _useState6[0],
    setErrorsByPath = _useState6[1];
  var doValidate = useCallback(function () {
    var _props$onValidate;
    var meta = validateTree(realValue, options);
    setOptionsByPath(meta.optionsByPath);
    setErrorsByPath(meta.errorsByPath);
    var result = {
      valid: meta.valid,
      errors: meta.errors,
      errorsByPath: meta.errorsByPath
    };
    (_props$onValidate = props.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props, result);
    return result;
  }, [realValue, options]);
  var onValueChange = useCallback(function (v) {
    if (!isControlled) {
      setVal(v);
    }
    onChange === null || onChange === void 0 || onChange(v);
  }, [onChange, isControlled, doValidate]);
  React.useImperativeHandle(ref, function () {
    return {
      validate: function validate() {
        return doValidate();
      }
    };
  }, [doValidate, realValue]);
  var onRemoveRootCondition = useCallback(function () {
    setVal(null);
    onChange === null || onChange === void 0 || onChange(null);
  }, []);
  var addCondition = useCallback(function () {
    var lv = cloneDeep(EMPTY);
    lv.conditions[0] = getConditionDefaultValue(options, lv);
    if (!isControlled) {
      setVal(lv);
    }
    onChange === null || onChange === void 0 || onChange(lv);
  }, [onChange]);
  var _ConfigProvider$useCo3 = ConfigProvider.useConfig(),
    componentDisabled = _ConfigProvider$useCo3.componentDisabled;
  var emptyNode = useMemo(function () {
    if (realValue) {
      return null;
    }
    var node = renderEmpty ? renderEmpty() : /*#__PURE__*/React.createElement(Empty, null);
    if (_typeof(node) === 'object') {
      return node;
    }
    return /*#__PURE__*/React.createElement(Typography.Text, {
      type: "secondary"
    }, node);
  }, [renderEmpty, realValue]);
  var configContext = useContext(ConfigProvider.ConfigContext);
  var prefixCls = configContext.getPrefixCls('logical-select', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 3),
    wrapCSSVar = _useStyle2[0],
    hashId = _useStyle2[1],
    cssVarCls = _useStyle2[2];
  var prevControlledValueRef = useRef();
  useEffect(function () {
    if (realValue !== prevControlledValueRef.current) {
      prevControlledValueRef.current = realValue;
      doValidate();
    }
  }, [realValue, doValidate]);
  if (isNil(realValue)) {
    return wrapCSSVar( /*#__PURE__*/React.createElement(Space, {
      direction: "vertical",
      className: classNames(prefixCls, hashId, cssVarCls, className)
    }, emptyNode, !disabled && /*#__PURE__*/React.createElement(Button, {
      color: "primary",
      size: "small",
      variant: "text",
      onClick: addCondition
    }, /*#__PURE__*/React.createElement(PlusOutlined, {
      style: {
        fontSize: '12px'
      }
    }), "\u6DFB\u52A0")));
  }
  return wrapCSSVar( /*#__PURE__*/React.createElement(ConfigProvider, {
    componentDisabled: disabled || componentDisabled,
    componentSize: size
  }, /*#__PURE__*/React.createElement(LogicalSelectRuntimeContext.Provider, {
    value: {
      getOptions: function getOptions(p) {
        return optionsByPath[p.join('.')] || [];
      },
      getErrors: function getErrors(p) {
        return errorsByPath[p.join('.')];
      }
    }
  }, /*#__PURE__*/React.createElement(InternalLogicalSelect, _extends({}, rest, {
    prefixCls: prefixCls,
    options: options,
    className: classNames(prefixCls, hashId, cssVarCls, className),
    widgets: widgetsObj,
    value: realValue,
    onChange: onValueChange,
    removeCondition: onRemoveRootCondition,
    isRoot: true,
    level: 0,
    path: []
  })))));
};

/**
 * 逻辑选择器
 */
var LogicalSelect = /*#__PURE__*/forwardRef(InternalLogical);
export var LogicalConditionFormItem = /*#__PURE__*/forwardRef(function (props, ref) {
  var _ref = props,
    name = _ref.name,
    _ref$enableValidate = _ref.enableValidate,
    enableValidate = _ref$enableValidate === void 0 ? true : _ref$enableValidate,
    rules = _ref.rules,
    formItemProps = _ref.formItemProps,
    rest = _objectWithoutProperties(_ref, _excluded2);
  var localRef = useRef();
  var validatorRule = useMemo(function () {
    return enableValidate ? [{
      validator: function () {
        var _validator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                result = localRef.current.validate();
                if (result.valid) {
                  _context.next = 3;
                  break;
                }
                throw new Error(result.errors[0].message);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function validator() {
          return _validator.apply(this, arguments);
        }
        return validator;
      }()
    }] : [];
  }, [enableValidate]);
  useImperativeHandle(ref, function () {
    return localRef.current;
  });
  var mergedRules = Array.isArray(rules) ? [].concat(_toConsumableArray(rules), _toConsumableArray(validatorRule)) : validatorRule;
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, formItemProps, {
    name: name,
    rules: mergedRules
  }), /*#__PURE__*/React.createElement(InternalLogical, _extends({}, rest, {
    ref: localRef
  })));
});
LogicalSelect.FormItem = LogicalConditionFormItem;
export default LogicalSelect;