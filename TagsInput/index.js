var _excluded = ["value", "defaultValue", "onChange", "className", "style", "tagsInputProps", "placeholder"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { App, Button, ConfigProvider, Flex, Input, Modal, Space, Tag, Tooltip, Typography } from 'antd';
import { useLocale } from 'antd/es/locale';
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import useComponentFactory from "../hooks/useComponentFactory";
import useStyle from "./style";
import usePrevious from 'antd/es/typography/hooks/usePrevious';
import { zhCN } from "./locale";
/**
 * Tags Input
 * @param props
 * @constructor
 */
function TagsInput(props) {
  var _useLocale = useLocale('TagsInput', zhCN),
    _useLocale2 = _slicedToArray(_useLocale, 1),
    locale = _useLocale2[0];
  var className = props.className,
    style = props.style,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? locale.placeholder : _props$placeholder,
    value = props.value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? [] : _props$defaultValue,
    onChange = props.onChange,
    _props$maxCount = props.maxCount,
    maxCount = _props$maxCount === void 0 ? 200 : _props$maxCount,
    _props$maxDisplayCoun = props.maxDisplayCount,
    maxDisplayCount = _props$maxDisplayCoun === void 0 ? 2 : _props$maxDisplayCoun,
    _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    customizePrefixCls = props.prefixCls,
    inputProps = props.inputProps,
    size = props.size;
  var _useComponentFactory = useComponentFactory(),
    _useComponentFactory2 = _slicedToArray(_useComponentFactory, 2),
    renderModal = _useComponentFactory2[0],
    comp = _useComponentFactory2[1];
  var configContext = useContext(ConfigProvider.ConfigContext);
  var prefixCls = configContext.getPrefixCls('tags-input', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 3),
    wrapCSSVar = _useStyle2[0],
    hashId = _useStyle2[1],
    cssVarCls = _useStyle2[2];

  // 判断是否为受控模式
  var isControlled = value !== undefined;

  // 状态管理
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    currentInput = _useState4[0],
    setCurrentInput = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    inputTooltipTitle = _useState6[0],
    setInputTooltipTitle = _useState6[1];
  var realValue = isControlled ? value : inputValue;

  // 更新Tags
  var updateTags = useCallback(function (tags) {
    if (!isControlled) {
      setInputValue(tags);
    }
    onChange === null || onChange === void 0 || onChange(tags);
  }, [isControlled, onChange]);

  // 移除Tag
  var removeTag = useCallback(function (tagToRemove) {
    updateTags(realValue.filter(function (tag) {
      return tag !== tagToRemove;
    }));
  }, [realValue, updateTags]);

  // 添加单个Tag
  var addTag = useCallback(function (input) {
    var trimmedInput = input.trim();
    if (!trimmedInput) {
      return false;
    }
    var tagValue;
    if (type === 'numeric') {
      var numValue = Number(trimmedInput);
      if (Number.isNaN(numValue)) {
        setInputTooltipTitle(locale.invalidNumber);
        return false;
      }
      tagValue = numValue;
    } else {
      tagValue = trimmedInput;
    }
    if (realValue.includes(tagValue)) {
      setInputTooltipTitle(locale.duplicateItem.replace('${item}', currentInput));
      return false;
    }
    if (realValue.length >= maxCount) {
      setInputTooltipTitle(locale.maxCountLimit.replace('${maxCount}', maxCount.toString()));
      return false;
    }
    updateTags([].concat(_toConsumableArray(realValue), [tagValue]));
    return true;
  }, [realValue, maxCount, updateTags, currentInput, type]);

  // 处理回车事件
  var handleKeyDown = useCallback(function (e) {
    if (e.key === 'Enter') {
      if (!currentInput) {
        return;
      }
      if (addTag(currentInput)) {
        setCurrentInput('');
        setInputTooltipTitle('');
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    } else if (e.key === 'Backspace' && !currentInput && realValue.length > 0) {
      // 当输入为空且存在 Tags 时，按下回退键删除最后一个 Tag
      var lastTag = realValue[realValue.length - 1];
      removeTag(lastTag);
      return;
    }
  }, [currentInput, addTag, realValue, removeTag]);
  var onPaste = useCallback(function (e) {
    var ids = _convertPasteText2Ids(e.clipboardData, type);
    if (!ids) {
      return;
    }
    var list = typeof realValue === 'string' ? ids : [].concat(_toConsumableArray(realValue), _toConsumableArray(ids));
    list = Array.from(new Set(list));
    if (realValue.length >= maxCount) {
      setInputTooltipTitle(locale.maxCountLimitIgnore.replace('${maxCount}', maxCount.toString()));
      list = list.slice(0, maxCount);
    }
    updateTags(list);
    e.preventDefault();
    return false;
  }, [realValue]);

  // 清空所有Tag
  var clearAll = useCallback(function () {
    updateTags([]);
  }, [updateTags]);

  // 计算显示的Tags
  var displayTags = useMemo(function () {
    if (maxDisplayCount === 0) {
      // 当 maxDisplayCount 为 0 时，只显示省略号
      return realValue.length > 0 ? [{
        type: 'ellipsis',
        count: realValue.length
      }] : [];
    }
    if (realValue.length <= maxDisplayCount) {
      return realValue;
    }

    // 当超过最大显示数量时，显示前 maxDisplayCount - 1 个，省略号，最后一个
    var visibleCount = maxDisplayCount - 1;
    var hiddenCount = realValue.length - maxDisplayCount;
    var lastTag = realValue[realValue.length - 1];
    return [].concat(_toConsumableArray(realValue.slice(0, visibleCount)), [{
      type: 'ellipsis',
      count: hiddenCount
    }, lastTag]);
  }, [realValue, maxDisplayCount]);

  // 自动清除 Tooltip 提示
  useEffect(function () {
    if (inputTooltipTitle) {
      var timer = setTimeout(function () {
        setInputTooltipTitle('');
      }, 3000);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [inputTooltipTitle]);
  var showEditModal = useCallback(function () {
    renderModal(BatchInputModal, {
      onFinished: updateTags,
      defaultValue: realValue,
      maxCount: maxCount,
      size: size,
      type: type
    });
  }, [updateTags, realValue, maxCount, type]);
  return wrapCSSVar( /*#__PURE__*/React.createElement(Flex, {
    align: "center",
    wrap: "nowrap",
    className: classNames(prefixCls, hashId, cssVarCls, size, className),
    style: style
  }, realValue.length > 0 && displayTags.map(function (tag, index) {
    // 处理省略号对象
    if (_typeof(tag) === 'object' && tag.type === 'ellipsis') {
      return /*#__PURE__*/React.createElement(Tooltip, {
        key: "ellipsis-".concat(index),
        title: locale.batchInput
      }, /*#__PURE__*/React.createElement(Tag, {
        color: "blue",
        className: "tag-item ellipsis-tag",
        onClick: showEditModal
      }, locale.ellipsisCount.replace('${count}', tag.count.toString())));
    }
    return /*#__PURE__*/React.createElement(Tag, {
      key: "".concat(tag, "-").concat(index),
      closable: true,
      onClose: function onClose() {
        return removeTag(tag);
      },
      className: "tag-item"
    }, String(tag));
  }), /*#__PURE__*/React.createElement(Tooltip, {
    title: inputTooltipTitle,
    open: Boolean(inputTooltipTitle),
    placement: "topLeft"
  }, /*#__PURE__*/React.createElement(Input, _extends({}, inputProps, {
    size: size,
    className: "field",
    value: currentInput,
    onChange: function onChange(e) {
      return setCurrentInput(e.target.value);
    },
    onKeyDown: handleKeyDown,
    placeholder: placeholder,
    onPaste: onPaste,
    suffix: /*#__PURE__*/React.createElement(Space, {
      size: size
    }, realValue.length > 0 && /*#__PURE__*/React.createElement(Tooltip, {
      title: locale.clearAll
    }, /*#__PURE__*/React.createElement(Button, {
      type: "text",
      size: "small",
      icon: /*#__PURE__*/React.createElement(DeleteOutlined, null),
      onClick: clearAll
    })), /*#__PURE__*/React.createElement(Tooltip, {
      title: locale.batchInput
    }, /*#__PURE__*/React.createElement(Button, {
      type: "text",
      size: "small",
      icon: /*#__PURE__*/React.createElement(EditOutlined, null),
      onClick: showEditModal
    })), /*#__PURE__*/React.createElement(Typography.Text, {
      type: "secondary"
    }, realValue === null || realValue === void 0 ? void 0 : realValue.length, "/", maxCount))
  }))), comp));
}
export default TagsInput;

/**
 * 批量输入弹窗
 */
function BatchInputModal(props) {
  var _useLocale3 = useLocale('TagsInput', zhCN),
    _useLocale4 = _slicedToArray(_useLocale3, 1),
    locale = _useLocale4[0];
  var onClose = props.onClose,
    onFinished = props.onFinished,
    _props$maxCount2 = props.maxCount,
    maxCount = _props$maxCount2 === void 0 ? 200 : _props$maxCount2,
    _props$type2 = props.type,
    type = _props$type2 === void 0 ? 'text' : _props$type2,
    size = props.size;
  var _App$useApp = App.useApp(),
    message = _App$useApp.message;
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    data = _useState10[0],
    setData = _useState10[1];
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    text = _useState12[0],
    setText = _useState12[1];
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    rowCount = _useState14[0],
    setRowCount = _useState14[1];

  // 动态生成占位符文本
  var typeHint = type === 'numeric' ? locale.numericTypeHint : locale.textTypeHint;
  var dynamicPlaceholder = locale.dynamicPlaceholder.replace('${typeHint}', typeHint).replace('${maxCount}', maxCount.toString());
  var handleConfirm = useCallback(function (showTips) {
    if (!showTips) {
      onFinished === null || onFinished === void 0 || onFinished(data.filter(function (v, i, arr) {
        return arr.indexOf(v) === i;
      }));
      onClose();
      return;
    }

    // 获取重复的项目
    var repeat = data.filter(function (v, i, arr) {
      return arr.indexOf(v) !== i;
    });
    if (repeat.length) {
      message.warning(locale.duplicateItemRemoved.replace('${items}', repeat.join(',')));
      check(data.filter(function (v, i, arr) {
        return arr.indexOf(v) === i;
      }).join('\n'));
      return;
    }
    onFinished === null || onFinished === void 0 || onFinished(data);
    onClose();
  }, [data, onFinished, onClose, message]);
  var check = useCallback(function (inputText) {
    if (!(inputText !== null && inputText !== void 0 && inputText.trim())) {
      setRowCount(0);
      setText('');
      setData([]);
      return;
    }

    // 获取text最后一字符
    var lastChar = inputText.charAt(inputText.length - 1);
    var rows = inputText.split('\n').map(function (v) {
      return v.trim();
    }).filter(function (v) {
      return v;
    });
    var processedRows = [];
    var hasError = false;
    var errorMessage = '';
    if (type === 'numeric') {
      // 数字类型验证
      var numRows = rows.map(function (v) {
        return {
          text: v,
          num: Number(v)
        };
      });
      var invalidIndex = numRows.findIndex(function (v) {
        return Number.isNaN(v.num);
      });
      if (invalidIndex !== -1) {
        hasError = true;
        errorMessage = locale.invalidNumberRow.replace('${text}', numRows[invalidIndex].text);
        setText(inputText);
      } else {
        processedRows = numRows.map(function (v) {
          return v.num;
        });
      }
    } else {
      // 文本类型，直接使用
      processedRows = rows;
    }
    setRowCount(rows.length);
    if (hasError) {
      setError(errorMessage);
      return;
    }
    if (rows.length > maxCount) {
      setError(locale.maxCountLimitTruncated.replace('${maxCount}', maxCount.toString()));
      setText(rows.slice(0, maxCount).join('\n') + (lastChar === '\n' ? '\n' : ''));
      processedRows = processedRows.slice(0, maxCount);
    } else {
      setError(null);
      setText(rows.join('\n') + (lastChar === '\n' ? '\n' : ''));
    }
    setData(processedRows);
  }, [maxCount, type]);
  useEffect(function () {
    if (props.defaultValue) {
      check(props.defaultValue.join('\n'));
    }
  }, [check]);
  return /*#__PURE__*/React.createElement(Modal, {
    title: dynamicPlaceholder,
    open: true,
    footer: null,
    maskClosable: true,
    onCancel: handleConfirm.bind(null, false),
    width: 600
  }, /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: size,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Input.TextArea, {
    allowClear: true,
    autoSize: {
      minRows: 10,
      maxRows: 20
    },
    placeholder: dynamicPlaceholder,
    value: text,
    onChange: function onChange(e) {
      return check(e.target.value);
    }
  }), error && /*#__PURE__*/React.createElement(Typography.Text, {
    type: "danger"
  }, error), /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    className: "modal-footer",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Typography.Text, null, locale.rowsCountInfo.replace('${rows}', locale.rows).replace('${rowCount}', rowCount.toString()).replace('${maxCount}', maxCount.toString())), /*#__PURE__*/React.createElement(Flex, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(Space, {
    size: size
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleConfirm.bind(null, false)
  }, locale.cancel), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: handleConfirm.bind(null, true)
  }, locale.confirm))))));
}
TagsInput.TextOrNumericList = TextOrNumericList;

/**
 * 输入文本 或 数值列表的组件
 * @param props
 * @constructor
 */
function TextOrNumericList(props) {
  var _useLocale5 = useLocale('TagsInput', zhCN),
    _useLocale6 = _slicedToArray(_useLocale5, 1),
    locale = _useLocale6[0];
  var value = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    className = props.className,
    style = props.style,
    tagsInputProps = props.tagsInputProps,
    _props$placeholder2 = props.placeholder,
    placeholder = _props$placeholder2 === void 0 ? locale.inputIdOrName : _props$placeholder2,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState15 = useState(defaultValue || ''),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  var isControlled = value !== undefined;
  var realValue = isControlled ? value : inputValue;
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    autoFocus = _useState18[0],
    setAutoFocus = _useState18[1];
  var prevValue = usePrevious(realValue);
  var inputOnChange = useCallback(function (v) {
    var realValue = v;
    if (Array.isArray(realValue)) {
      if (!realValue.length) {
        realValue = '';
        if (!autoFocus) {
          setAutoFocus(true);
        }
      }
    } else {
      if (!Array.isArray(prevValue)) {
        setAutoFocus(true);
      }
    }
    if (!isControlled) {
      setInputValue(realValue);
    }
    onChange === null || onChange === void 0 || onChange(realValue);
  }, [isControlled, onChange, autoFocus, prevValue]);
  var handleKeyDown = useCallback(function (e) {
    if (e.key !== 'Enter') {
      return;
    }
    if (!(realValue !== null && realValue !== void 0 && realValue.trim())) {
      inputOnChange(realValue);
      return;
    }
    if (Number.isNaN(Number(realValue))) {
      inputOnChange(realValue);
      return;
    }
    inputOnChange([Number(realValue)]);
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, [realValue]);
  var onPaste = useCallback(function (e) {
    var ids = _convertPasteText2Ids(e.clipboardData, 'numeric');
    if (!ids) {
      return;
    }
    inputOnChange(ids);
    setTagsInputKey(function (prev) {
      return prev + 1;
    });
    e.preventDefault();
    return false;
  }, []);
  var _useState19 = useState(1),
    _useState20 = _slicedToArray(_useState19, 2),
    tagsInputKey = _useState20[0],
    setTagsInputKey = _useState20[1];
  if (Array.isArray(realValue)) {
    return /*#__PURE__*/React.createElement(TagsInput, _extends({}, tagsInputProps, {
      className: className,
      placeholder: placeholder,
      style: style,
      key: tagsInputKey,
      type: "numeric",
      value: realValue,
      defaultValue: defaultValue,
      onChange: inputOnChange,
      inputProps: _objectSpread({
        autoFocus: autoFocus
      }, tagsInputProps === null || tagsInputProps === void 0 ? void 0 : tagsInputProps.inputProps)
    }));
  }
  var isNaNInput = Boolean(realValue) && !Number.isNaN(Number(realValue));
  return /*#__PURE__*/React.createElement(Tooltip, {
    open: isNaNInput,
    title: locale.enterToSwitchMode
  }, /*#__PURE__*/React.createElement(Input, _extends({}, rest, {
    className: className,
    style: style,
    autoFocus: autoFocus,
    onChange: function onChange(e) {
      return inputOnChange(e.target.value);
    },
    value: realValue,
    placeholder: placeholder,
    onKeyDown: handleKeyDown,
    onPaste: onPaste
  })));
}
function _convertPasteText2Ids(clipboardData, type) {
  var _clipboardData$getDat;
  if (!clipboardData) {
    return null;
  }
  var text = (_clipboardData$getDat = clipboardData.getData('text/plain')) === null || _clipboardData$getDat === void 0 ? void 0 : _clipboardData$getDat.trim();
  if (!text) {
    return null;
  }
  var rows = text.split('\n');
  var ids = [];
  var _iterator = _createForOfIteratorHelper(rows),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      row = row.trim();
      if (!row) {
        continue;
      }
      if (type === 'numeric') {
        var num = Number(row);
        if (Number.isNaN(num)) {
          return null;
        }
        ids.push(num);
      } else {
        ids.push(row);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (ids.length) {
    return Array.from(new Set(ids));
  }
  return null;
}