import { Spin } from 'antd';
import { LoadingIndicatorCircusBall } from "../..";
import React from 'react';
export default (function () {
  return /*#__PURE__*/React.createElement(Spin, {
    indicator: /*#__PURE__*/React.createElement(LoadingIndicatorCircusBall, null),
    spinning: true
  });
});