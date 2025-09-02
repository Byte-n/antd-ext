function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button, ConfigProvider, Divider, Space } from 'antd';
import React, { useState } from 'react';
import TagsInput from "../index";
var LocalizationDemo = function LocalizationDemo() {
  var _useState = useState(['标签1', '标签2']),
    _useState2 = _slicedToArray(_useState, 2),
    tags = _useState2[0],
    setTags = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    numbers = _useState4[0],
    setNumbers = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    textOrNumericValue = _useState6[0],
    setTextOrNumericValue = _useState6[1];
  var _useState7 = useState('zh'),
    _useState8 = _slicedToArray(_useState7, 2),
    currentLocale = _useState8[0],
    setCurrentLocale = _useState8[1];

  // 中文本地化配置
  var zhLocale = {
    placeholder: '按回车新增',
    batchInput: '批量输入',
    clearAll: '清空所有',
    confirm: '确定',
    cancel: '取消',
    rows: '行数',
    rowsCountInfo: '${rows}：${rowCount}/${maxCount}',
    maxCountLimit: '最大数量限制：${maxCount}个',
    maxCountLimitIgnore: '最大数量限制：${maxCount}个, 忽略超出部分',
    maxCountLimitTruncated: '最大数量限制：${maxCount}个，已自动截取前${maxCount}个',
    invalidNumber: '请输入有效的数字',
    duplicateItem: '已有: ${item}',
    duplicateItemRemoved: '已移除重复的项：${items}, 若需要提交，重新点击确定',
    invalidNumberRow: "'${text}'行不是有效数字",
    numericTypeHint: '数字',
    textTypeHint: '文本',
    enterToSwitchMode: '回车可切换输入模式',
    inputIdOrName: '输入ID或名称，输入ID时，回车可切换输入模式',
    dynamicPlaceholder: '一行一个${typeHint}，最多${maxCount}个',
    ellipsisCount: '...${count}个'
  };

  // 英文本地化配置
  var enLocale = {
    placeholder: 'Press Enter to add',
    batchInput: 'Batch Input',
    clearAll: 'Clear All',
    confirm: 'Confirm',
    cancel: 'Cancel',
    rows: 'Rows',
    rowsCountInfo: '${rows}: ${rowCount}/${maxCount}',
    maxCountLimit: 'Maximum count limit: ${maxCount}',
    maxCountLimitIgnore: 'Maximum count limit: ${maxCount}, ignoring excess',
    maxCountLimitTruncated: 'Maximum count limit: ${maxCount}, automatically truncated to first ${maxCount}',
    invalidNumber: 'Please enter a valid number',
    duplicateItem: 'Already exists: ${item}',
    duplicateItemRemoved: 'Removed duplicate items: ${items}, click confirm again if you want to submit',
    invalidNumberRow: "'${text}' is not a valid number",
    numericTypeHint: 'Number',
    textTypeHint: 'Text',
    enterToSwitchMode: 'Press Enter to switch mode',
    inputIdOrName: 'Enter ID or name, press Enter to switch mode when entering ID',
    dynamicPlaceholder: 'One ${typeHint} per line, maximum ${maxCount}',
    ellipsisCount: '...${count}'
  };
  var toggleLocale = function toggleLocale() {
    setCurrentLocale(currentLocale === 'zh' ? 'en' : 'zh');
  };
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: {
      locale: currentLocale,
      TagsInput: currentLocale === 'zh' ? zhLocale : enLocale
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '500px'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u672C\u5730\u5316\u793A\u4F8B"), /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u8BED\u8A00\uFF1A", currentLocale === 'zh' ? '中文' : 'English'), /*#__PURE__*/React.createElement(Space, {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: toggleLocale
  }, currentLocale === 'zh' ? 'Switch to English' : '切换到中文')), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("h5", null, "\u6587\u672C\u7C7B\u578B\u6807\u7B7E\u8F93\u5165"), /*#__PURE__*/React.createElement(TagsInput, {
    value: tags,
    onChange: setTags,
    maxCount: 5,
    maxDisplayCount: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u6807\u7B7E\uFF1A", tags.join(', '))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("h5", null, "\u6570\u5B57\u7C7B\u578B\u6807\u7B7E\u8F93\u5165"), /*#__PURE__*/React.createElement(TagsInput, {
    type: "numeric",
    value: numbers,
    onChange: setNumbers,
    maxCount: 5,
    placeholder: "\u8F93\u5165\u6570\u5B57"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u6570\u5B57\uFF1A", numbers.join(', ')), /*#__PURE__*/React.createElement("p", null, "\u6570\u5B57\u603B\u548C\uFF1A", numbers.reduce(function (sum, num) {
    return sum + num;
  }, 0))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("h5", null, "TextOrNumericList \u7EC4\u4EF6"), /*#__PURE__*/React.createElement(TagsInput.TextOrNumericList, {
    value: textOrNumericValue,
    onChange: setTextOrNumericValue,
    placeholder: "\u8F93\u5165ID\u6216\u6570\u5B57"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u503C\uFF1A", Array.isArray(textOrNumericValue) ? textOrNumericValue.join(', ') : textOrNumericValue))));
};
export default LocalizationDemo;