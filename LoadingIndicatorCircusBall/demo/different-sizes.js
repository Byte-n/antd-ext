import { LoadingIndicatorCircusBall } from "../..";
import React from 'react';
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LoadingIndicatorCircusBall, {
    size: "small"
  }), /*#__PURE__*/React.createElement(LoadingIndicatorCircusBall, {
    size: "default"
  }), /*#__PURE__*/React.createElement(LoadingIndicatorCircusBall, {
    size: "large"
  }));
});