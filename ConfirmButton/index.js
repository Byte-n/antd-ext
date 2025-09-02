var _excluded = ["popProps", "popTitle", "description", "onConfirm", "onCancel", "okText", "cancelText", "showCancel"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Button, Popconfirm } from 'antd';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
var ConfirmButton = /*#__PURE__*/forwardRef(function (props, ref) {
  var popProps = props.popProps,
    popTitle = props.popTitle,
    description = props.description,
    onConfirm = props.onConfirm,
    onCancel = props.onCancel,
    okText = props.okText,
    cancelText = props.cancelText,
    showCancel = props.showCancel,
    buttonProps = _objectWithoutProperties(props, _excluded);
  var buttonRef = useRef(null);
  var popRef = useRef(null);
  useImperativeHandle(ref, function () {
    var buttonElement = buttonRef.current;
    return Object.assign(buttonElement, {
      getPopRef: function getPopRef() {
        return popRef;
      }
    });
  }, []);
  return /*#__PURE__*/React.createElement(Popconfirm, _extends({}, popProps, {
    ref: popRef,
    title: popTitle,
    description: description,
    onConfirm: onConfirm,
    onCancel: onCancel,
    okText: okText,
    cancelText: cancelText,
    showCancel: showCancel
  }), /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    ref: buttonRef
  })));
});
ConfirmButton.displayName = 'ConfirmButton';
export default ConfirmButton;