function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import usePatchElement from 'antd/es/_util/hooks/usePatchElement';
import React, { useCallback } from 'react';
var ElementsHolder = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (_props, ref) {
  var _usePatchElement = usePatchElement(),
    _usePatchElement2 = _slicedToArray(_usePatchElement, 2),
    elements = _usePatchElement2[0],
    patchElement = _usePatchElement2[1];
  React.useImperativeHandle(ref, function () {
    return {
      patchElement: patchElement
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, elements);
}));
/**
 * useComponent
 */
export default function useComponentFactory() {
  var holderRef = React.useRef(null);
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    actionQueue = _React$useState2[0],
    setActionQueue = _React$useState2[1];
  React.useEffect(function () {
    if (actionQueue.length) {
      var cloneQueue = _toConsumableArray(actionQueue);
      cloneQueue.forEach(function (action) {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  var incrKeyRef = React.useRef(0);
  var factory = useCallback(function (Comp, props) {
    var _holderRef$current;
    var closeFunc = (_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.patchElement( /*#__PURE__*/React.createElement(Comp, _extends({
      key: incrKeyRef.current++
    }, props, {
      onClose: function onClose() {
        var _props$onClose;
        closeFunc === null || closeFunc === void 0 || closeFunc();
        props === null || props === void 0 || (_props$onClose = props.onClose) === null || _props$onClose === void 0 || _props$onClose.call(props);
      }
    })));
  }, []);
  var renderModalFactory = useCallback(function (Comp, props) {
    return function () {
      factory(Comp, props);
    };
  }, [factory]);
  return [factory, /*#__PURE__*/React.createElement(ElementsHolder, {
    key: "component-holder",
    ref: holderRef
  }), renderModalFactory];
}
export var UseModalComponentContext = /*#__PURE__*/React.createContext({
  renderModal: function renderModal() {
    throw new Error('Not UseModalComponentContext.Provider');
  },
  renderModalFactory: function renderModalFactory() {
    throw new Error("Not UseModalComponentContext.Provider");
  }
});

/**
 * useModalComponent
 * 此函数必须在 UseModalComponentContext.Provider 下调用
 * const [renderModal, components, renderModalFactory] = useComponentFactory();
 * <UseModalComponentContext.Provider value={{ renderModal, renderModalFactory }}>
 *    // 这里面调用，
 * </UseModalComponentContext.Provider>
 *
 */
export function useModalComponent() {
  return React.useContext(UseModalComponentContext);
}