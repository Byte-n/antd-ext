function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Space } from 'antd';
import { LogicalSelect, LogicalSelectConditionTypeEnum } from "../..";
var options = [{
  label: '用户名',
  value: 'username',
  widget: 'Input',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  widgetProps: {
    placeholder: '至少 2 个字符'
  },
  verification: function verification(value) {
    return typeof value === 'string' && value.trim().length >= 2;
  }
}, {
  label: '年龄',
  value: 'age',
  widget: 'InputNumber',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
  widgetProps: {
    min: 0,
    max: 120
  },
  verification: function verification(value) {
    return typeof value === 'number' && value >= 0 && value <= 120;
  }
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
var ValidationDemo = function ValidationDemo() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    value2 = _useState2[0],
    setValue2 = _useState2[1];
  return /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: "large",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(LogicalSelect, {
    options: options,
    value: value2,
    onChange: setValue2,
    style: {
      width: '100%'
    }
  }));
};
export default ValidationDemo;