function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { LogicalSelect, LogicalSelectConditionTypeEnum } from "../..";
var basicOptions = [{
  label: '用户名',
  value: 'username',
  widget: 'Input',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}, {
  label: '年龄',
  value: 'age',
  widget: 'InputNumber',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.greaterEqual, LogicalSelectConditionTypeEnum.less, LogicalSelectConditionTypeEnum.lessEqual]
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
    }, {
      label: '待审核',
      value: 'pending'
    }]
  },
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}, {
  label: '注册时间',
  value: 'createTime',
  widget: 'InputRange',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange]
}];
var BasicDemo = function BasicDemo() {
  var _useState = useState({
      symbol: 'and',
      conditions: [{
        key: 'username',
        conditionType: LogicalSelectConditionTypeEnum.equal,
        value: 'admin'
      }]
    }),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/React.createElement(LogicalSelect, {
    options: basicOptions,
    value: value,
    onChange: setValue,
    style: {
      width: '100%'
    }
  });
};
export default BasicDemo;