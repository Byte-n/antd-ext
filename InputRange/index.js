function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { InputNumber, Space } from 'antd';
import React, { useCallback, useMemo, useState, forwardRef, useImperativeHandle, useRef } from 'react';
var InputRange = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var min = _ref.min,
    max = _ref.max,
    value = _ref.value,
    onChange = _ref.onChange,
    defaultValue = _ref.defaultValue;
  var lowerInputRef = useRef(null);
  var upperInputRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      getLowerInput: function getLowerInput() {
        return lowerInputRef.current;
      },
      getUpperInput: function getUpperInput() {
        return upperInputRef.current;
      },
      focus: function focus() {
        var _lowerInputRef$curren;
        (_lowerInputRef$curren = lowerInputRef.current) === null || _lowerInputRef$curren === void 0 || _lowerInputRef$curren.focus();
      },
      blur: function blur() {
        var _lowerInputRef$curren2, _upperInputRef$curren;
        (_lowerInputRef$curren2 = lowerInputRef.current) === null || _lowerInputRef$curren2 === void 0 || _lowerInputRef$curren2.blur();
        (_upperInputRef$curren = upperInputRef.current) === null || _upperInputRef$curren === void 0 || _upperInputRef$curren.blur();
      }
    };
  });
  // 判断是否处于受控模式
  var isControlled = value !== undefined;

  // 非受控模式下的内部状态
  var _useState = useState(defaultValue || [null, null]),
    _useState2 = _slicedToArray(_useState, 2),
    internalValue = _useState2[0],
    setInternalValue = _useState2[1];

  // 当前值（受控模式使用外部传入的 value，非受控模式使用内部状态）
  var currentValue = useMemo(function () {
    return isControlled ? value || [null, null] : internalValue;
  }, [isControlled, value, internalValue]);

  // 更新值的处理函数
  var update = useCallback(function (newValue) {
    var _newValue = _slicedToArray(newValue, 2),
      down = _newValue[0],
      up = _newValue[1];
    if (down === null) down = min;
    if (up === null) up = max;
    if (down > up) {
      var _ref2 = [down, up];
      up = _ref2[0];
      down = _ref2[1];
    }
    if (down < min) {
      down = min;
    }
    if (up > max) {
      up = max;
    }
    var vals = [down, up];
    if (!isControlled) {
      setInternalValue(vals);
    }
    onChange === null || onChange === void 0 || onChange(vals);
  }, [onChange, min, max, isControlled]);
  return /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(InputNumber, {
    ref: lowerInputRef,
    value: currentValue[0],
    onChange: function onChange(v) {
      return update([v, currentValue[1]]);
    },
    min: min,
    max: max
  }), /*#__PURE__*/React.createElement("span", null, "~"), /*#__PURE__*/React.createElement(InputNumber, {
    ref: upperInputRef,
    value: currentValue[1],
    onChange: function onChange(v) {
      return update([currentValue[0], v]);
    },
    min: min,
    max: max
  }));
});
InputRange.displayName = 'InputRange';
export default InputRange;