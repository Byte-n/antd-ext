function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Divider, Space, Typography } from 'antd';
import { LogicalSelect, LogicalSelectConditionTypeEnum } from "../..";
import React, { useState } from 'react';
var Text = Typography.Text,
  Title = Typography.Title;
var options = [{
  label: '用户名',
  value: 'username',
  widget: 'Input',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual],
  widgetProps: {
    placeholder: '请输入用户名'
  }
}, {
  label: '年龄',
  value: 'age',
  widget: 'InputNumber',
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.greater, LogicalSelectConditionTypeEnum.less, LogicalSelectConditionTypeEnum.greaterEqual, LogicalSelectConditionTypeEnum.lessEqual],
  widgetProps: {
    placeholder: '请输入年龄',
    min: 0,
    max: 120
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
    }, {
      label: '待审核',
      value: 'pending'
    }],
    placeholder: '请选择状态'
  },
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}, {
  label: '角色',
  value: 'role',
  widget: 'Select',
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
    }],
    placeholder: '请选择角色'
  },
  conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal, LogicalSelectConditionTypeEnum.notEqual]
}];

// 1. 不允许嵌套的初始值 - 只能有简单的条件组合
var hierarchy0Value = {
  symbol: 'and',
  conditions: [{
    key: 'username',
    conditionType: LogicalSelectConditionTypeEnum.equal,
    value: 'admin'
  }, {
    key: 'status',
    conditionType: LogicalSelectConditionTypeEnum.equal,
    value: 'active'
  }]
};

// 2. 只允许一层嵌套的初始值 - 可以有一层逻辑分组
var hierarchy1Value = {
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
    key: 'age',
    conditionType: LogicalSelectConditionTypeEnum.greaterEqual,
    value: 18
  }]
};

// 3. 固定逻辑关系的初始值 - 根级别固定为 and，子级别固定为 or
var hierarchyFixedValue = {
  symbol: 'and',
  // 根级别固定为 and
  conditions: [{
    symbol: 'or',
    // 子级别固定为 or
    conditions: [{
      key: 'username',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'admin'
    }, {
      key: 'role',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'manager'
    }]
  }, {
    symbol: 'or',
    // 子级别固定为 or
    conditions: [{
      key: 'status',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'active'
    }, {
      key: 'status',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'pending'
    }]
  }]
};

// 4. 混合控制的初始值 - 根级别固定为 and，子级别可选择，孙级别固定为 or
var hierarchyMixedValue = {
  symbol: 'and',
  // 根级别固定为 and
  conditions: [{
    symbol: 'or',
    // 子级别可选择（这里选择了 or）
    conditions: [{
      symbol: 'or',
      // 孙级别固定为 or
      conditions: [{
        key: 'username',
        conditionType: LogicalSelectConditionTypeEnum.equal,
        value: 'admin'
      }, {
        key: 'username',
        conditionType: LogicalSelectConditionTypeEnum.equal,
        value: 'manager'
      }]
    }, {
      key: 'role',
      conditionType: LogicalSelectConditionTypeEnum.equal,
      value: 'admin'
    }]
  }, {
    key: 'age',
    conditionType: LogicalSelectConditionTypeEnum.greater,
    value: 25
  }]
};
var HierarchyControlDemo = function HierarchyControlDemo() {
  var _useState = useState(hierarchy0Value),
    _useState2 = _slicedToArray(_useState, 2),
    value1 = _useState2[0],
    setValue1 = _useState2[1];
  var _useState3 = useState(hierarchy1Value),
    _useState4 = _slicedToArray(_useState3, 2),
    value2 = _useState4[0],
    setValue2 = _useState4[1];
  var _useState5 = useState(hierarchyFixedValue),
    _useState6 = _slicedToArray(_useState5, 2),
    value3 = _useState6[0],
    setValue3 = _useState6[1];
  var _useState7 = useState(hierarchyMixedValue),
    _useState8 = _slicedToArray(_useState7, 2),
    value4 = _useState8[0],
    setValue4 = _useState8[1];
  return /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    size: "large",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "1. \u4E0D\u5141\u8BB8\u5D4C\u5957 (hierarchy = 0)"), /*#__PURE__*/React.createElement(Text, {
    type: "secondary",
    style: {
      display: 'block',
      marginTop: 4
    }
  }, "\u53EA\u80FD\u6DFB\u52A0\u7B80\u5355\u7684\u6761\u4EF6\uFF0C\u4E0D\u80FD\u521B\u5EFA\u903B\u8F91\u5206\u7EC4\u3002\u9002\u5408\u7B80\u5355\u7684\u67E5\u8BE2\u573A\u666F\u3002"), /*#__PURE__*/React.createElement(LogicalSelect, {
    options: options,
    hierarchy: 0,
    value: value1,
    onChange: setValue1,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "2. \u53EA\u5141\u8BB8\u4E00\u5C42\u5D4C\u5957 (hierarchy = 1)"), /*#__PURE__*/React.createElement(Text, {
    type: "secondary",
    style: {
      display: 'block',
      marginTop: 4
    }
  }, "\u53EF\u4EE5\u521B\u5EFA\u4E00\u5C42\u903B\u8F91\u5206\u7EC4\uFF0C\u9002\u5408\u4E2D\u7B49\u590D\u6742\u5EA6\u7684\u67E5\u8BE2\u9700\u6C42\u3002"), /*#__PURE__*/React.createElement(LogicalSelect, {
    options: options,
    hierarchy: 1,
    value: value2,
    onChange: setValue2,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "3. \u56FA\u5B9A\u903B\u8F91\u5173\u7CFB (hierarchy = ", "['and', 'or']", ")"), /*#__PURE__*/React.createElement(Text, {
    type: "secondary",
    style: {
      display: 'block',
      marginTop: 4
    }
  }, "\u6839\u7EA7\u522B\u56FA\u5B9A\u4E3A AND\uFF0C\u5B50\u7EA7\u522B\u56FA\u5B9A\u4E3A OR\u3002\u9002\u5408\u7279\u5B9A\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u6C42\u3002"), /*#__PURE__*/React.createElement(LogicalSelect, {
    options: options,
    hierarchy: ['and', 'or'],
    value: value3,
    onChange: setValue3,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, "4. \u6DF7\u5408\u63A7\u5236 (hierarchy = ", "['and', null, 'or']", ")"), /*#__PURE__*/React.createElement(Text, {
    type: "secondary",
    style: {
      display: 'block',
      marginTop: 4
    }
  }, "\u6839\u7EA7\u522B\u56FA\u5B9A\u4E3A AND\uFF0C\u5B50\u7EA7\u522B\u53EF\u9009\u62E9\uFF0C\u5B59\u7EA7\u522B\u56FA\u5B9A\u4E3A OR\u3002\u63D0\u4F9B\u7075\u6D3B\u6027\u548C\u7EA6\u675F\u7684\u5E73\u8861\u3002"), /*#__PURE__*/React.createElement(LogicalSelect, {
    options: options,
    hierarchy: ['and', null, 'or'],
    value: value4,
    onChange: setValue4,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Divider, null));
};
export default HierarchyControlDemo;