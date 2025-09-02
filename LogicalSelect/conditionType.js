function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { cloneDeep } from "../utils/object";
/**
 * 逻辑选择器值
 */
export var LogicalSelectConditionTypeEnum = /*#__PURE__*/function (LogicalSelectConditionTypeEnum) {
  LogicalSelectConditionTypeEnum["equal"] = "equal";
  LogicalSelectConditionTypeEnum["notEqual"] = "notEqual";
  LogicalSelectConditionTypeEnum["greater"] = "greater";
  LogicalSelectConditionTypeEnum["greaterEqual"] = "greaterEqual";
  LogicalSelectConditionTypeEnum["less"] = "less";
  LogicalSelectConditionTypeEnum["lessEqual"] = "lessEqual";
  LogicalSelectConditionTypeEnum["inRange"] = "inRange";
  LogicalSelectConditionTypeEnum["notInRange"] = "notInRange";
  LogicalSelectConditionTypeEnum["includes"] = "includes";
  LogicalSelectConditionTypeEnum["excludes"] = "excludes";
  return LogicalSelectConditionTypeEnum;
}({});
export var defaultConditionTypeOptions = [{
  label: '等于',
  value: LogicalSelectConditionTypeEnum.equal
}];
var allConditionTypeOptions = [{
  label: '等于',
  value: LogicalSelectConditionTypeEnum.equal
}, {
  label: '不等于',
  value: LogicalSelectConditionTypeEnum.notEqual
}, {
  label: '大于',
  value: LogicalSelectConditionTypeEnum.greater
}, {
  label: '小于',
  value: LogicalSelectConditionTypeEnum.less
}, {
  label: '大于等于',
  value: LogicalSelectConditionTypeEnum.greaterEqual
}, {
  label: '小于等于',
  value: LogicalSelectConditionTypeEnum.lessEqual
}, {
  label: '在范围内',
  value: LogicalSelectConditionTypeEnum.inRange
}, {
  label: '不在范围',
  value: LogicalSelectConditionTypeEnum.notInRange
}, {
  label: '属于',
  value: LogicalSelectConditionTypeEnum.includes
}, {
  label: '不属于',
  value: LogicalSelectConditionTypeEnum.excludes
}];
export function parseConditionTypeOptions(conditionTypeOptions) {
  if (!(conditionTypeOptions !== null && conditionTypeOptions !== void 0 && conditionTypeOptions.length)) {
    return {
      conditionTypeOptions: cloneDeep(defaultConditionTypeOptions),
      configs: []
    };
  }
  var ks = [];
  var configs = [];
  var _iterator = _createForOfIteratorHelper(conditionTypeOptions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (typeof item === 'string') {
        ks.push(item);
        continue;
      }
      configs.push(item);
      ks.push(item.conditionType);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var list = allConditionTypeOptions.filter(function (v) {
    return ks.includes(v.value);
  });
  if (!list.length) {
    list = defaultConditionTypeOptions;
    console.error('[LogicalCondition] conditionTypeOptions 参数错误：', conditionTypeOptions);
  }
  return {
    conditionTypeOptions: list,
    configs: configs
  };
}
export function getConditionDefaultValue(options, value) {
  var optionList = Array.isArray(options) ? options : options({}, value);
  var find = optionList.find(function (v) {
    return !v.disabled;
  });
  if (find) {
    var _parseConditionTypeOp = parseConditionTypeOptions(find.conditionTypeOptions),
      conditionTypeOptions = _parseConditionTypeOp.conditionTypeOptions;
    return {
      key: find.value,
      conditionType: conditionTypeOptions[0].value
    };
  }
  return {};
}