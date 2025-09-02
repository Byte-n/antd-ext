function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { EnhanceSelect } from "../..";
import { Tag } from 'antd';
var options = [{
  label: '选项1',
  value: '1',
  data: {
    id: 1,
    name: '选项1',
    category: 'A'
  }
}, {
  label: '选项2',
  value: '2',
  data: {
    id: 2,
    name: '选项2',
    category: 'B'
  }
}, {
  label: '选项3',
  value: '3',
  data: {
    id: 3,
    name: '选项3',
    category: 'A'
  }
}, {
  label: '选项4',
  value: '4',
  data: {
    id: 4,
    name: '选项4',
    category: 'C'
  }
}, {
  label: '选项5',
  value: '5',
  data: {
    id: 5,
    name: '选项5',
    category: 'B'
  }
}];
var CustomLabelDemo = function CustomLabelDemo() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var labelRender = function labelRender(option) {
    var _option$data;
    return /*#__PURE__*/React.createElement("span", null, option.label, /*#__PURE__*/React.createElement(Tag, {
      color: "blue",
      style: {
        marginLeft: 4
      }
    }, (_option$data = option.data) === null || _option$data === void 0 ? void 0 : _option$data.category));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300
    }
  }, /*#__PURE__*/React.createElement(EnhanceSelect, {
    mode: "multiple",
    placeholder: "\u8BF7\u9009\u62E9",
    options: options,
    value: value,
    onChange: setValue,
    labelRender: labelRender,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u5F53\u524D\u9009\u4E2D\u503C: ", value.length > 0 ? value.join(', ') : '未选择'), /*#__PURE__*/React.createElement("p", null, "\u9009\u4E2D\u6570\u91CF: ", value.length)));
};
export default CustomLabelDemo;