import { FormItemProps } from 'antd';
type Rule = Required<FormItemProps>['rules'][number];
export interface FormRuleBuilderMessageTemplates {
    required: string;
    regexp: string;
    length: string;
    interval: string;
    arrayRequired: string;
}
export declare const defaultFormRuleBuilderMessageTemplates: FormRuleBuilderMessageTemplates;
/**
 * 表单校验规则构造器
 */
export declare class FormRuleBuilder {
    rule: Rule[];
    messageTemplates: FormRuleBuilderMessageTemplates;
    constructor(messageTemplates?: Partial<FormRuleBuilderMessageTemplates>);
    /**
     * 满足条件就执行回调。
     * @param condition
     * @param callback
     */
    if(condition: boolean, callback: (builder: FormRuleBuilder) => void): this;
    /**
     * 必填
     * @param message 自定义错误提示文本，支持占位符
     */
    required(message?: string): this;
    /**
     * 正则校验
     * @param reg
     * @param message 自定义错误提示文本，支持占位符
     */
    regexp(reg: RegExp, message?: string): this;
    /**
     * 字符串长度
     * @param min
     * @param max
     * @param message 自定义错误提示文本，支持占位符
     */
    length(min: number, max: number, message?: string): this;
    /**
     * 数字范围
     * @param min
     * @param max
     * @param message 自定义错误提示文本，支持占位符
     */
    interval(min: number, max: number, message?: string): this;
    /**
     * 正则校验
     * @param validator
     */
    validator<T = unknown>(validator: (rule: Rule, value: T, callback: (error?: string) => void) => Promise<void | unknown> | void): this;
    /**
     * 必须是有效数组
     * @param message 自定义错误提示文本，支持占位符
     * @param context 占位符上下文
     */
    arrayRequired(message?: string): this;
    /**
     * 构建
     */
    build(): import("antd").FormRule[];
}
export default function formRule(messageTemplates?: Partial<FormRuleBuilderMessageTemplates>): FormRuleBuilder;
export {};
