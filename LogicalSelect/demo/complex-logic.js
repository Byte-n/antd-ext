function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Alert, Button, message, Space } from 'antd';
import { LogicalSelect, LogicalSelectConditionTypeEnum, TagsInput } from "../..";
import React, { useState } from 'react';

// 自定义标签组件
var CustomTagWidget = function CustomTagWidget(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(TagsInput, {
    value: value,
    onChange: onChange,
    placeholder: "\u8F93\u5165\u6807\u7B7E\uFF0C\u56DE\u8F66\u786E\u8BA4",
    style: {
      width: '100%'
    }
  });
};

// 自定义评分组件
var CustomScoreWidget = function CustomScoreWidget(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    disabled = _ref2.disabled;
  var handleChange = function handleChange(e) {
    var val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0 && val <= 100) {
      onChange(val);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    max: "100",
    value: value,
    onChange: handleChange,
    disabled: disabled,
    style: {
      width: 60,
      padding: '4px 8px',
      border: '1px solid #d9d9d9',
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100,
      height: 8,
      backgroundColor: '#f0f0f0',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(value, "%"),
      height: '100%',
      backgroundColor: value >= 80 ? '#52c41a' : value >= 60 ? '#faad14' : '#ff4d4f',
      transition: 'width 0.3s'
    }
  })));
};

// 动态选项生成函数
var getDynamicOptions = function getDynamicOptions(condition, _value) {
  var baseOptions = [{
    label: '用户名',
    value: 'username',
    widget: 'Input',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.includes, LogicalSelectConditionTypeEnum.excludes],
    widgetProps: {
      placeholder: '请输入用户名',
      allowClear: true
    }
  }, {
    label: '年龄',
    value: 'age',
    widget: 'InputNumber',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.greaterEqual, LogicalSelectConditionTypeEnum.less, LogicalSelectConditionTypeEnum.lessEqual, LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange],
    widgetProps: {
      min: 0,
      max: 120,
      placeholder: '请输入年龄'
    }
  }, {
    label: '状态',
    value: 'status',
    widget: 'Select',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.includes, LogicalSelectConditionTypeEnum.excludes],
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
      }, {
        label: '已删除',
        value: 'deleted'
      }],
      placeholder: '请选择状态',
      allowClear: true
    }
  }, {
    label: '角色',
    value: 'role',
    widget: 'Select',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.includes, LogicalSelectConditionTypeEnum.excludes],
    widgetProps: {
      options: [{
        label: '管理员',
        value: 'admin'
      }, {
        label: '普通用户',
        value: 'user'
      }, {
        label: '经理',
        value: 'manager'
      }, {
        label: '访客',
        value: 'guest'
      }],
      placeholder: '请选择角色',
      allowClear: true
    }
  }, {
    label: '标签',
    value: 'tags',
    widget: CustomTagWidget,
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.includes, LogicalSelectConditionTypeEnum.excludes, LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
    widgetProps: {
      placeholder: '输入标签'
    }
  }, {
    label: '注册时间',
    value: 'createTime',
    widget: 'InputRange',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
    widgetProps: {
      placeholder: ['开始时间', '结束时间'],
      format: 'YYYY-MM-DD'
    }
  }, {
    label: '最后登录',
    value: 'lastLogin',
    widget: 'InputRange',
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less],
    widgetProps: {
      placeholder: ['开始时间', '结束时间'],
      format: 'YYYY-MM-DD'
    }
  }, {
    label: '评分',
    value: 'score',
    widget: CustomScoreWidget,
    conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.greaterEqual, LogicalSelectConditionTypeEnum.less, LogicalSelectConditionTypeEnum.lessEqual, LogicalSelectConditionTypeEnum.inRange, LogicalSelectConditionTypeEnum.notInRange]
  }];

  // 根据当前条件动态调整选项
  if ((condition === null || condition === void 0 ? void 0 : condition.key) === 'status' && (condition === null || condition === void 0 ? void 0 : condition.value) === 'active') {
    // 如果状态是激活的，添加更多相关选项
    baseOptions.push({
      label: '活跃度',
      value: 'activity',
      widget: 'Select',
      conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
      widgetProps: {
        options: [{
          label: '高',
          value: 'high'
        }, {
          label: '中',
          value: 'medium'
        }, {
          label: '低',
          value: 'low'
        }]
      }
    });
  }
  return baseOptions;
};

// 复杂的默认值 - 模拟实际业务场景
var complexDefaultValue = {
  symbol: 'and',
  conditions: [{
    symbol: 'or',
    conditions: [{
      key: 'username',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'admin'
    }, {
      key: 'role',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'admin'
    }]
  }, {
    symbol: 'and',
    conditions: [{
      key: 'status',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'active'
    }, {
      key: 'age',
      conditionType: LogicalSelectConditionTypeEnum.greaterEqual,
      value: 18
    }]
  }, {
    symbol: 'or',
    conditions: [{
      key: 'score',
      conditionType: LogicalSelectConditionTypeEnum.greater,
      value: 80
    }, {
      key: 'tags',
      conditionType: LogicalSelectConditionTypeEnum.includes,
      value: ['重要', 'VIP']
    }]
  }]
};
var ComplexLogicDemo = function ComplexLogicDemo() {
  var _useState = useState(complexDefaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    complexValue = _useState2[0],
    setComplexValue = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    validationErrors = _useState4[0],
    setValidationErrors = _useState4[1];
  // 重置逻辑
  var handleReset = function handleReset() {
    setComplexValue(complexDefaultValue);
    setValidationErrors([]);
    message.success('已重置为默认逻辑');
  };

  // 清空逻辑
  var handleClear = function handleClear() {
    setComplexValue(null);
    setValidationErrors([]);
    message.success('已清空逻辑条件');
  };
  return /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReset,
    size: "small"
  }, "\u91CD\u7F6E"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleClear,
    size: "small"
  }, "\u6E05\u7A7A")), validationErrors.length > 0 && /*#__PURE__*/React.createElement(Alert, {
    message: "\u9A8C\u8BC1\u9519\u8BEF",
    description: /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 16
      }
    }, validationErrors.map(function (error, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: index
      }, error);
    })),
    type: "error",
    showIcon: true
  }), /*#__PURE__*/React.createElement(LogicalSelect, {
    options: getDynamicOptions,
    value: complexValue,
    onChange: setComplexValue,
    style: {
      width: '100%'
    },
    hierarchy: 2
  }));
};
export default ComplexLogicDemo;