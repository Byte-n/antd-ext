import { Space } from 'antd';
import React from 'react';
import EnhanceTable from "../index";
var data = Array.from({
  length: 50
}, function (_, index) {
  return {
    key: "".concat(index + 1),
    name: "\u5458\u5DE5".concat(index + 1),
    age: 20 + index % 40,
    address: "\u57CE\u5E02".concat(index + 1, "\u533A").concat(index + 1, "\u8857\u9053"),
    email: "employee".concat(index + 1, "@company.com"),
    phone: "138".concat(String(index + 1).padStart(8, '0')),
    department: ['技术部', '产品部', '设计部', '运营部', '市场部'][index % 5],
    position: ['工程师', '产品经理', '设计师', '运营专员', '市场专员'][index % 5],
    joinDate: "202".concat(Math.floor(index / 10) + 1, "-").concat(String(index % 12 + 1).padStart(2, '0'), "-").concat(String(index % 28 + 1).padStart(2, '0'))
  };
});
var columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  width: 100,
  fixed: 'left'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 80
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
  width: 200
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
  width: 200
}, {
  title: '电话',
  dataIndex: 'phone',
  key: 'phone',
  width: 120
}, {
  title: '部门',
  dataIndex: 'department',
  key: 'department',
  width: 100
}, {
  title: '职位',
  dataIndex: 'position',
  key: 'position',
  width: 120
}, {
  title: '入职日期',
  dataIndex: 'joinDate',
  key: 'joinDate',
  width: 120
}, {
  title: '操作',
  key: 'action',
  width: 150,
  fixed: 'right',
  render: function render() {
    return /*#__PURE__*/React.createElement(Space, {
      size: "middle"
    }, /*#__PURE__*/React.createElement("a", null, "\u67E5\u770B"), /*#__PURE__*/React.createElement("a", null, "\u7F16\u8F91"));
  }
}];
var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, "\u5176\u4ED6\u677F\u5757"), /*#__PURE__*/React.createElement(EnhanceTable, {
    style: {
      minWidth: 0
    },
    columns: columns,
    dataSource: data,
    scroll: {
      x: 'max-content',
      y: 'auto'
    },
    pagination: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, "\u5176\u4ED6\u677F\u5757"), /*#__PURE__*/React.createElement(EnhanceTable, {
    columns: columns,
    dataSource: data,
    scroll: {
      x: 'max-content',
      y: 'auto'
    }
  })));
};
export default App;