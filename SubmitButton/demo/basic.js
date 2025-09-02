function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Form, Input, message } from 'antd';
import { SubmitButton } from "../..";
import { useFormRuleBuilder } from "../../hooks/useFormRuleBuilder";
import React, { useState } from 'react';
export default (function () {
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    submittedData = _useState2[0],
    setSubmittedData = _useState2[1];
  var initialValues = {
    name: '',
    email: 'test@example.com'
  };
  var ruleBuilder = useFormRuleBuilder();
  var onFinish = function onFinish(values) {
    setSubmittedData(values);
    message.success('表单提交成功！');
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form, {
    form: form,
    initialValues: initialValues,
    onFinish: onFinish,
    layout: "vertical"
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: "\u59D3\u540D",
    name: "name",
    required: true,
    rules: ruleBuilder.required().build()
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Form.Item, {
    label: "\u90AE\u7BB1",
    name: "email"
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(SubmitButton, {
    formInitialValues: initialValues
  }, "\u63D0\u4EA4"))), submittedData && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 16,
      background: '#f6f8fa',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u5F53\u524D\u63D0\u4EA4\u7684\u4FE1\u606F\uFF1A"), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      whiteSpace: 'pre-wrap'
    }
  }, JSON.stringify(submittedData, null, 2))));
});