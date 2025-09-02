import { ConfigProvider, Space } from 'antd';
import React from 'react';
import EnhanceTable from "../index";
var data = [{
  key: '1',
  name: '张三',
  age: 32,
  address: '北京市朝阳区',
  department: '技术部',
  salary: 15000
}, {
  key: '2',
  name: '李四',
  age: 42,
  address: '上海市浦东新区',
  department: '产品部',
  salary: 18000
}, {
  key: '3',
  name: '王五',
  age: 28,
  address: '广州市天河区',
  department: '设计部',
  salary: 12000
}, {
  key: '4',
  name: '赵六',
  age: 35,
  address: '深圳市南山区',
  department: '技术部',
  salary: 16000
}, {
  key: '5',
  name: '钱七',
  age: 29,
  address: '杭州市西湖区',
  department: '运营部',
  salary: 11000
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
  title: '部门',
  dataIndex: 'department',
  key: 'department'
}, {
  title: '薪资',
  dataIndex: 'salary',
  key: 'salary',
  render: function render(salary) {
    return "\xA5".concat(salary.toLocaleString());
  }
}, {
  title: '操作',
  key: 'action',
  render: function render(_) {
    return /*#__PURE__*/React.createElement(Space, {
      size: "middle"
    }, /*#__PURE__*/React.createElement("a", null, "\u67E5\u770B"), /*#__PURE__*/React.createElement("a", null, "\u7F16\u8F91"), /*#__PURE__*/React.createElement("a", null, "\u5220\u9664"));
  }
}];
var App = function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 500,
      height: 200
    }
  }, /*#__PURE__*/React.createElement(ConfigProvider, {
    theme: {
      token: {
        colorTextBase: '#fa8c16',
        colorPrimary: '#eb2f96',
        colorInfo: '#eb2f96'
      },
      components: {
        Table: {
          stickyScrollBarBg: 'red'
        }
      }
    }
  }, /*#__PURE__*/React.createElement(EnhanceTable, {
    columns: columns,
    dataSource: data,
    scroll: {
      y: 'auto'
    }
  })));
};
export default App;