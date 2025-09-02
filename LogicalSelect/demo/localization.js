function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Button, ConfigProvider, Divider, Space } from 'antd';
import { LogicalSelect, LogicalSelectConditionTypeEnum } from "../..";
var options = [{
  label: '用户名',
  value: 'username',
  widget: 'Input',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}, {
  label: '状态',
  value: 'status',
  widget: 'Select',
  widgetProps: {
    options: [{
      label: '启用',
      value: 'active'
    }, {
      label: '禁用',
      value: 'inactive'
    }]
  },
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}];
var defaultValue = {
  symbol: 'and',
  conditions: [{
    key: 'username',
    conditionType: LogicalSelectConditionTypeEnum.equal,
    value: 'admin'
  }]
};
var LocalizationDemo = function LocalizationDemo() {
  var _useState = useState('zh'),
    _useState2 = _slicedToArray(_useState, 2),
    currentLocale = _useState2[0],
    setCurrentLocale = _useState2[1];
  var zh = {
    add: '添加',
    emptyGroupError: '分组不能为空',
    selectFieldFirst: '先选条件',
    selectOperatorFirst: '先选运算符',
    valueEmptyError: '不能为空',
    addChildDisabledTip: '上级仅一个条件，不允许次级再增加',
    andLabel: '且',
    orLabel: '或'
  };
  var en = {
    add: 'Add',
    emptyGroupError: 'Group cannot be empty',
    selectFieldFirst: 'Select field first',
    selectOperatorFirst: 'Select operator first',
    valueEmptyError: 'Required',
    addChildDisabledTip: 'Cannot add child when only one condition in parent',
    andLabel: 'AND',
    orLabel: 'OR'
  };
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: {
      locale: currentLocale,
      LogicalSelect: currentLocale === 'zh' ? zh : en
    }
  }, /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    onClick: function onClick() {
      return setCurrentLocale(function (v) {
        return v === 'zh' ? 'en' : 'zh';
      });
    }
  }, "\u5207\u6362\u5230 ", currentLocale === 'zh' ? 'English' : '中文')), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement(LogicalSelect, {
    options: options,
    defaultValue: defaultValue
  })));
};
export default LocalizationDemo;