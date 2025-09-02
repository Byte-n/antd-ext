import { Space } from 'antd';
import React from 'react';
import EnhanceTable from "../index";
var data = [{
  key: '1',
  name: '张三',
  age: 32,
  address: '北京市朝阳区',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: '李四',
  age: 42,
  address: '上海市浦东新区',
  tags: ['manager']
}, {
  key: '3',
  name: '王五',
  age: 28,
  address: '广州市天河区',
  tags: ['cool', 'teacher']
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
  title: '标签',
  key: 'tags',
  dataIndex: 'tags',
  render: function render(tags) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, tags.map(function (tag) {
      var color = tag.length > 5 ? 'geekblue' : 'green';
      if (tag === 'loser') {
        color = 'volcano';
      }
      return /*#__PURE__*/React.createElement("span", {
        key: tag,
        style: {
          backgroundColor: color === 'geekblue' ? '#1890ff' : color === 'green' ? '#52c41a' : '#fa541c',
          color: '#fff',
          padding: '2px 8px',
          borderRadius: '4px',
          marginRight: '4px',
          fontSize: '12px'
        }
      }, tag.toUpperCase());
    }));
  }
}, {
  title: '操作',
  key: 'action',
  render: function render(_) {
    return /*#__PURE__*/React.createElement(Space, {
      size: "middle"
    }, /*#__PURE__*/React.createElement("a", null, "\u7F16\u8F91"), /*#__PURE__*/React.createElement("a", null, "\u5220\u9664"));
  }
}];
var App = function App() {
  return /*#__PURE__*/React.createElement(EnhanceTable, {
    columns: columns,
    dataSource: data,
    pagination: false,
    scroll: {
      y: 'auto'
    }
  });
};
export default App;