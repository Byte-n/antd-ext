import { ConfigProvider, Table } from 'antd';
import { LoadingIndicatorCircusBall } from "../..";
import React from 'react';
export default (function () {
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    theme: {
      components: {
        LoadingIndicatorCircusBall: {
          ball1Color: '#1890ff',
          ball2Color: '#52c41a',
          ball3Color: '#faad14',
          ball4Color: '#f5222d',
          ball5Color: '#722ed1',
          ballShadowColor: 'rgba(0, 0, 0, 0.2)'
        }
      }
    },
    spin: {
      indicator: /*#__PURE__*/React.createElement(LoadingIndicatorCircusBall, null)
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u8868\u683C\u52A0\u8F7D"), /*#__PURE__*/React.createElement(Table, {
    dataSource: [{
      title: 'title'
    }],
    rowKey: "title",
    loading: true,
    columns: [{
      title: 'Title',
      key: 'title'
    }]
  }));
});