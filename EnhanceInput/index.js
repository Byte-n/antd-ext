var _excluded = ["value", "onChange", "onValueChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Input } from 'antd';
import React, { memo, useCallback, forwardRef, useImperativeHandle, useRef } from 'react';
var EnhancedInput = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    onValueChange = _ref.onValueChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inputRef = useRef(null);
  useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var valueChange = useCallback(function (v) {
    onValueChange === null || onValueChange === void 0 || onValueChange(v.target.value, v);
    if (onChange) {
      return onChange(v);
    }
  }, [onValueChange, onChange]);
  return /*#__PURE__*/React.createElement(Input, _extends({
    ref: inputRef,
    value: value,
    onChange: valueChange
  }, rest));
});
EnhancedInput.displayName = 'EnhancedInput';
export default /*#__PURE__*/memo(EnhancedInput);