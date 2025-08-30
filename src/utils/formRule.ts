import { FormItemProps } from 'antd';

type Rule = Required<FormItemProps>['rules'][number];

// 消息模板类型
export interface FormRuleBuilderMessageTemplates {
  required: string;
  regexp: string;
  length: string;
  interval: string;
  arrayRequired: string;
}

// 默认消息模板
export const defaultFormRuleBuilderMessageTemplates: FormRuleBuilderMessageTemplates =
  {
    required: '${label}为必填项',
    regexp: '${label}格式不正确',
    length: '${label}长度应在${min}到${max}之间',
    interval: '${label}应在${min}到${max}之间',
    arrayRequired: '请至少选择一项${label}',
  };

/**
 * 替换消息模板中的占位符
 */
function replacePlaceholders(
  template: string,
  context?: Record<string, any>,
): string {
  if (!context) {
    return template;
  }
  return template.replace(/\$\{(\w+)\}/g, (match, key) => {
    return context[key] !== undefined ? String(context[key]) : match;
  });
}

/**
 * 表单校验规则构造器
 */
export class FormRuleBuilder {
  rule: Rule[];
  messageTemplates: FormRuleBuilderMessageTemplates;

  constructor(messageTemplates?: Partial<FormRuleBuilderMessageTemplates>) {
    this.rule = [];
    this.messageTemplates = {
      ...defaultFormRuleBuilderMessageTemplates,
      ...messageTemplates,
    };
  }

  /**
   * 满足条件就执行回调。
   * @param condition
   * @param callback
   */
  if(condition: boolean, callback: (builder: FormRuleBuilder) => void) {
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
  required(message?: string) {
    const finalMessage =
      message || replacePlaceholders(this.messageTemplates.required);
    this.rule.push({ required: true, message: finalMessage });
    return this;
  }

  /**
   * 正则校验
   * @param reg
   * @param message 自定义错误提示文本，支持占位符
   */
  regexp(reg: RegExp, message?: string) {
    const finalMessage =
      message || replacePlaceholders(this.messageTemplates.regexp);
    this.rule.push({ pattern: reg, message: finalMessage });
    return this;
  }

  /**
   * 字符串长度
   * @param min
   * @param max
   * @param message 自定义错误提示文本，支持占位符
   */
  length(min: number, max: number, message?: string) {
    const finalMessage =
      message ||
      replacePlaceholders(this.messageTemplates.length, { min, max });
    this.rule.push({ max, min, message: finalMessage });
    return this;
  }

  /**
   * 数字范围
   * @param min
   * @param max
   * @param message 自定义错误提示文本，支持占位符
   */
  interval(min: number, max: number, message?: string) {
    const finalMessage =
      message ||
      replacePlaceholders(this.messageTemplates.interval, { min, max });
    this.rule.push({ max, min, message: finalMessage });
    return this;
  }

  /**
   * 正则校验
   * @param validator
   */
  validator<T = unknown>(
    validator: (
      rule: Rule,
      value: T,
      callback: (error?: string) => void,
    ) => Promise<void | unknown> | void,
  ) {
    this.rule.push({ validator });
    return this;
  }

  /**
   * 必须是有效数组
   * @param message 自定义错误提示文本，支持占位符
   * @param context 占位符上下文
   */
  arrayRequired(message?: string) {
    const finalMessage =
      message || replacePlaceholders(this.messageTemplates.arrayRequired);
    return this.validator((_, val: number[]) => {
      if (!val?.length) {
        return Promise.reject(finalMessage);
      }
      return Promise.resolve();
    });
  }

  /**
   * 构建
   */
  build() {
    return this.rule;
  }

  //
  // buildToFormListRule () {
  //   return this.rule as FormListProps['rules'];
  // }
}

export default function formRule(
  messageTemplates?: Partial<FormRuleBuilderMessageTemplates>,
) {
  return new FormRuleBuilder(messageTemplates);
}
