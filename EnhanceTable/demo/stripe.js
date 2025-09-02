import { Space } from 'antd';
import React from 'react';
import EnhanceTable from "../index";
var data = [{
  key: '1',
  name: '张三',
  age: 32,
  address: '北京市朝阳区'
}, {
  key: '2',
  name: '李四',
  age: 42,
  address: '上海市浦东新区'
}, {
  key: '3',
  name: '王五',
  age: 28,
  address: '广州市天河区'
}, {
  key: '4',
  name: '赵六',
  age: 35,
  address: '深圳市南山区'
}];
var columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return /*#__PURE__*/React.createElement("a", null, text);
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '操作',
  key: 'action',
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(Space, {
      size: "middle"
    }, /*#__PURE__*/React.createElement("a", null, "\u67E5\u770B"), /*#__PURE__*/React.createElement("a", null, "\u7F16\u8F91"), /*#__PURE__*/React.createElement("a", null, "\u5220\u9664"));
  }
}];
var App = function App() {
  return /*#__PURE__*/React.createElement(EnhanceTable, {
    columns: columns,
    dataSource: data,
    stripe: true,
    pagination: false
  });
};
export default App;