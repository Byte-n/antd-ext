import { FormItemProps } from 'antd';
import { type EnhanceSelectProps } from "..";
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { FC } from 'react';
import { LogicalSymbol } from './LogicalSymbolSelect';
import { ConditionTypeOptionsObject, LogicalSelectConditionTypeEnum } from './conditionType';
export interface InternalLogicalSelectValueProps {
    options: LogicalSelectOption[] | ((condition: LogicalSelectValueRaw, value: LogicalSelectValue) => LogicalSelectOption[]);
    value: LogicalSelectValue;
    onChange: (value: LogicalSelectValue | LogicalSelectValueRaw) => void;
    removeCondition?: () => void;
    widgets: Record<string, FC<LogicalSelectWidgetProps>>;
    isRoot?: boolean;
    className?: string;
    style?: React.CSSProperties;
    /**
     * 当前节点路径，根为 []，第 i 条为 [i]，依次类推
     */
    path: number[];
    /**
     * 控制逻辑选择器的层级，<br/>
     * hierarchy = 0 ，则表示不允许添加子条件<br/>
     * hierarchy = 1 ，则表示允许添加子条件，但只能嵌套一层<br/>
     * hierarchy = 2 ，则表示允许添加子条件，根 > 子 > 孙 <br/>
     * hierarchy = ['and', 'or']，则表示允许添加子条件，根 > 子  ，且 根下的都是 and, 子 下的都是 or <br/>
     * hierarchy = ['and', null]，则表示允许添加子条件，根 > 子  ，且 根下的都是 and, 子 下的可选择 <br/>
     */
    hierarchy?: number | (LogicalSymbol | null)[];
    level: number;
    renderConditionExtra?: (value: LogicalSelectValueRaw) => React.ReactNode;
    prefixCls: string;
}
export interface LogicalSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    widget?: string | FC<LogicalSelectWidgetProps>;
    widgetProps?: Record<string, unknown>;
    /**
     * 可选：自定义值校验（优先级高于默认非空校验）
     */
    verification?: (value: unknown, rootValue: LogicalSelectValue, condition: LogicalSelectValueRaw) => boolean;
    selectProps?: Omit<EnhanceSelectProps<string>, 'showSearch' | 'options' | 'value' | 'onChange'>;
    conditionTypeOptions?: (LogicalSelectConditionTypeEnum | ConditionTypeOptionsObject)[];
}
export interface LogicalSelectValue {
    symbol: LogicalSymbol;
    conditions: (LogicalSelectValueRaw | LogicalSelectValue)[];
    data?: unknown;
}
export interface LogicalSelectValueRaw {
    key?: string;
    value?: unknown;
    data?: unknown;
    conditionType?: LogicalSelectConditionTypeEnum;
}
export interface LogicalSelectWidgetProps<T = unknown> extends Record<string, unknown> {
    value: T;
    condition?: unknown;
    disabled?: boolean;
    onChange: (value: T) => void;
    className?: string;
    size?: SizeType;
}
export interface LogicalSelectRef {
    validate: () => ValidateResult;
}
export interface LogicalSelectProps extends Omit<InternalLogicalSelectValueProps, 'level' | 'removeCondition' | 'onChange' | 'value' | 'isRoot' | 'prefixCls' | 'widgets' | 'path'> {
    onChange?: (value: LogicalSelectValue | null) => void;
    value?: LogicalSelectValue | null;
    defaultValue?: LogicalSelectValue | null;
    disabled?: boolean;
    renderEmpty?: () => React.ReactNode;
    prefixCls?: string;
    widgets?: InternalLogicalSelectValueProps['widgets'];
    onValidate?: (result: ValidateResult) => void;
    size?: SizeType;
}
export interface ErrorItem {
    code: string;
    message: string;
}
export interface ValidateResult {
    valid: boolean;
    errors: Array<{
        path: number[];
        code: string;
        message: string;
    }>;
    errorsByPath: Record<string, ErrorItem[]>;
}
export interface ValidateMeta extends ValidateResult {
    optionsByPath: Record<string, LogicalSelectOption[]>;
}
export declare const LogicalSelectRuntimeContext: React.Context<{
    getOptions: (path: number[]) => LogicalSelectOption[];
    getErrors: (path: number[]) => ErrorItem[] | undefined;
}>;
export declare function validateTree(root: LogicalSelectValue | null | undefined, options: LogicalSelectOption[] | ((condition: LogicalSelectValueRaw, value: LogicalSelectValue) => LogicalSelectOption[])): ValidateMeta;
/**
 * 逻辑选择器
 */
declare const LogicalSelect: React.ForwardRefExoticComponent<LogicalSelectProps & React.RefAttributes<LogicalSelectRef>> & {
    FormItem: typeof LogicalConditionFormItem;
};
export interface LogicalConditionFormItemProps extends Omit<LogicalSelectProps, 'value' | 'onChange' | 'defaultValue'> {
    name: any;
    /** 启用自带校验（默认开启） */
    enableValidate?: boolean;
    /** 追加自定义表单规则 */
    rules?: any[];
    formItemProps?: Omit<FormItemProps<LogicalSelectValue>, 'name' | 'rules'>;
}
export declare const LogicalConditionFormItem: React.ForwardRefExoticComponent<LogicalConditionFormItemProps & React.RefAttributes<LogicalSelectRef>>;
export default LogicalSelect;
