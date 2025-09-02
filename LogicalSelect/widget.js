import { InputNumber } from 'antd';
import React from 'react';
import { EnhanceInput, EnhanceSelect, InputRange } from "./..";
var Input = function Input(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(EnhanceInput, {
    value: value,
    onValueChange: onChange
  });
};
export var LogicalSelectDefaultWidgets = {
  Input: Input,
  InputNumber: InputNumber,
  InputRange: InputRange,
  Select: EnhanceSelect
};