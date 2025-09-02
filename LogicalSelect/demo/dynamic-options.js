function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React, { useState } from 'react';
import { Typography } from 'antd';
import { LogicalSelect, LogicalSelectConditionTypeEnum } from "../..";
var Text = Typography.Text;

// 基础字段选项
var baseOptions = [{
  label: '用户类型',
  value: 'userType',
  widget: 'Select',
  widgetProps: {
    options: [{
      label: '普通用户',
      value: 'normal'
    }, {
      label: 'VIP用户',
      value: 'vip'
    }, {
      label: '企业用户',
      value: 'enterprise'
    }]
  },
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}];

// 根据用户类型动态返回不同的选项
var getDynamicOptions = function getDynamicOptions(condition, value) {
  var options = [].concat(baseOptions);

  // 查找当前条件中的用户类型
  var findUserType = function findUserType(conditions) {
    var _iterator = _createForOfIteratorHelper(conditions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cond = _step.value;
        if (cond.symbol) {
          // 递归查找嵌套条件
          var found = findUserType(cond.conditions);
          if (found) return found;
        } else if (cond.key === 'userType' && cond.value) {
          return cond.value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return null;
  };
  var userType = value ? findUserType(value.conditions) : null;

  // 根据用户类型添加不同的选项
  if (userType === 'normal') {
    options.push({
      label: '积分',
      value: 'points',
      widget: 'InputNumber',
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less]
    }, {
      label: '等级',
      value: 'level',
      widget: 'Select',
      widgetProps: {
        options: [{
          label: '青铜',
          value: 'bronze'
        }, {
          label: '白银',
          value: 'silver'
        }, {
          label: '黄金',
          value: 'gold'
        }]
      },
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
    });
  } else if (userType === 'vip') {
    options.push({
      label: 'VIP等级',
      value: 'vipLevel',
      widget: 'Select',
      widgetProps: {
        options: [{
          label: 'VIP1',
          value: 'vip1'
        }, {
          label: 'VIP2',
          value: 'vip2'
        }, {
          label: 'VIP3',
          value: 'vip3'
        }]
      },
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
    }, {
      label: '消费金额',
      value: 'consumeAmount',
      widget: 'InputNumber',
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less]
    });
  } else if (userType === 'enterprise') {
    options.push({
      label: '企业规模',
      value: 'companySize',
      widget: 'Select',
      widgetProps: {
        options: [{
          label: '小型',
          value: 'small'
        }, {
          label: '中型',
          value: 'medium'
        }, {
          label: '大型',
          value: 'large'
        }]
      },
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
    }, {
      label: '员工数量',
      value: 'employeeCount',
      widget: 'InputNumber',
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less]
    });
  }
  return options;
};
var DynamicOptionsDemo = function DynamicOptionsDemo() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/React.createElement(LogicalSelect, {
    options: getDynamicOptions,
    value: value,
    onChange: setValue,
    style: {
      width: '100%'
    }
  });
};
export default DynamicOptionsDemo;