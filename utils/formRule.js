function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 消息模板类型

// 默认消息模板
export var defaultFormRuleBuilderMessageTemplates = {
  required: '${label}为必填项',
  regexp: '${label}格式不正确',
  length: '${label}长度应在${min}到${max}之间',
  interval: '${label}应在${min}到${max}之间',
  arrayRequired: '请至少选择一项${label}'
};

/**
 * 替换消息模板中的占位符
 */
function replacePlaceholders(template, context) {
  if (!context) {
    return template;
  }
  return template.replace(/\$\{(\w+)\}/g, function (match, key) {
    return context[key] !== undefined ? String(context[key]) : match;
  });
}

/**
 * 表单校验规则构造器
 */
export var FormRuleBuilder = /*#__PURE__*/function () {
  function FormRuleBuilder(messageTemplates) {
    _classCallCheck(this, FormRuleBuilder);
    _defineProperty(this, "rule", void 0);
    _defineProperty(this, "messageTemplates", void 0);
    this.rule = [];
    this.messageTemplates = _objectSpread(_objectSpread({}, defaultFormRuleBuilderMessageTemplates), messageTemplates);
  }

  /**
   * 满足条件就执行回调。
   * @param condition
   * @param callback
   */
  _createClass(FormRuleBuilder, [{
    key: "if",
    value: function _if(condition, callback) {
      if (!condition) {
        return this;
      }
      callback(this);
      return this;
    }

    /**
     * 必填
     * @param message 自定义错误提示文本，支持占位符
     */
  }, {
    key: "required",
    value: function required(message) {
      var finalMessage = message || replacePlaceholders(this.messageTemplates.required);
      this.rule.push({
        required: true,
        message: finalMessage
      });
      return this;
    }

    /**
     * 正则校验
     * @param reg
     * @param message 自定义错误提示文本，支持占位符
     */
  }, {
    key: "regexp",
    value: function regexp(reg, message) {
      var finalMessage = message || replacePlaceholders(this.messageTemplates.regexp);
      this.rule.push({
        pattern: reg,
        message: finalMessage
      });
      return this;
    }

    /**
     * 字符串长度
     * @param min
     * @param max
     * @param message 自定义错误提示文本，支持占位符
     */
  }, {
    key: "length",
    value: function length(min, max, message) {
      var finalMessage = message || replacePlaceholders(this.messageTemplates.length, {
        min: min,
        max: max
      });
      this.rule.push({
        max: max,
        min: min,
        message: finalMessage
      });
      return this;
    }

    /**
     * 数字范围
     * @param min
     * @param max
     * @param message 自定义错误提示文本，支持占位符
     */
  }, {
    key: "interval",
    value: function interval(min, max, message) {
      var finalMessage = message || replacePlaceholders(this.messageTemplates.interval, {
        min: min,
        max: max
      });
      this.rule.push({
        max: max,
        min: min,
        message: finalMessage
      });
      return this;
    }

    /**
     * 正则校验
     * @param validator
     */
  }, {
    key: "validator",
    value: function validator(_validator) {
      this.rule.push({
        validator: _validator
      });
      return this;
    }

    /**
     * 必须是有效数组
     * @param message 自定义错误提示文本，支持占位符
     * @param context 占位符上下文
     */
  }, {
    key: "arrayRequired",
    value: function arrayRequired(message) {
      var finalMessage = message || replacePlaceholders(this.messageTemplates.arrayRequired);
      return this.validator(function (_, val) {
        if (!(val !== null && val !== void 0 && val.length)) {
          return Promise.reject(finalMessage);
        }
        return Promise.resolve();
      });
    }

    /**
     * 构建
     */
  }, {
    key: "build",
    value: function build() {
      return this.rule;
    }

    //
    // buildToFormListRule () {
    //   return this.rule as FormListProps['rules'];
    // }
  }]);
  return FormRuleBuilder;
}();
export default function formRule(messageTemplates) {
  return new FormRuleBuilder(messageTemplates);
}