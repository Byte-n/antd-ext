function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Typography, DatePicker, Checkbox } from 'antd';
import { LogicalSelect, LogicalSelectConditionTypeEnum } from "../..";
var Text = Typography.Text;
var RangePicker = DatePicker.RangePicker;

// 自定义日期范围选择器组件
var DateRangeWidget = function DateRangeWidget(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement(RangePicker, {
    value: value,
    onChange: function onChange(dates, dateStrings) {
      return _onChange(dateStrings);
    },
    disabled: disabled,
    format: "YYYY-MM-DD",
    style: {
      minWidth: 200
    }
  });
};

// 自定义布尔值选择器组件
var BooleanWidget = function BooleanWidget(_ref2) {
  var value = _ref2.value,
    _onChange2 = _ref2.onChange,
    disabled = _ref2.disabled;
  return /*#__PURE__*/React.createElement(Checkbox, {
    checked: value,
    onChange: function onChange(e) {
      return _onChange2(e.target.checked);
    },
    disabled: disabled
  }, "\u662F");
};
var customWidgets = {
  DateRange: DateRangeWidget,
  Boolean: BooleanWidget
};
var optionsWithCustomWidgets = [{
  label: '用户名',
  value: 'username',
  widget: 'Input',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}, {
  label: '年龄范围',
  value: 'ageRange',
  widget: 'InputRange',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange]
}, {
  label: '创建时间',
  value: 'createTime',
  widget: 'DateRange',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange]
}, {
  label: '是否VIP',
  value: 'isVip',
  widget: 'Boolean',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}, {
  label: '部门',
  value: 'department',
  widget: 'Select',
  widgetProps: {
    options: [{
      label: '研发部',
      value: 'dev'
    }, {
      label: '产品部',
      value: 'product'
    }, {
      label: '运营部',
      value: 'operation'
    }, {
      label: '市场部',
      value: 'marketing'
    }]
  },
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.includes, LogicalSelectConditionTypeEnum.excludes]
}];
var CustomWidgetsDemo = function CustomWidgetsDemo() {
  var _useState = useState({
      symbol: 'and',
      conditions: [{
        key: 'department',
        conditionType: LogicalSelectConditionTypeEnum.equal,
        value: 'dev'
      }]
    }),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/React.createElement(LogicalSelect, {
    options: optionsWithCustomWidgets,
    widgets: customWidgets,
    value: value,
    onChange: setValue,
    style: {
      width: '100%'
    }
  });
};
export default CustomWidgetsDemo;