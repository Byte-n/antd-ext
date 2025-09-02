import { LogicalSelectOption, LogicalSelectValue, LogicalSelectValueRaw, LogicalSelectWidgetProps } from "..";
import { FC } from 'react';
export interface ConditionTypeOptionsObject {
    widget: string | FC<LogicalSelectWidgetProps>;
    conditionType: LogicalSelectConditionTypeEnum;
    widgetProps?: Record<string, unknown>;
}
/**
 * 逻辑选择器值
 */
export declare enum LogicalSelectConditionTypeEnum {
    /**
     * 等于
     */
    equal = "equal",
    /**
     * 不等于
     */
    notEqual = "notEqual",
    /**
     * 大于
     */
    greater = "greater",
    /**
     * 大于等于
     */
    greaterEqual = "greaterEqual",
    /**
     * 小于
     */
    less = "less",
    /**
     * 小于等于
     */
    lessEqual = "lessEqual",
    /**
     * 在范围内
     */
    inRange = "inRange",
    /**
     * 不在范围内
     */
    notInRange = "notInRange",
    /**
     * 属于
     */
    includes = "includes",
    /**
     * 不属于
     */
    excludes = "excludes"
}
export declare const defaultConditionTypeOptions: {
    label: string;
    value: LogicalSelectConditionTypeEnum;
}[];
export declare function parseConditionTypeOptions(conditionTypeOptions?: (LogicalSelectConditionTypeEnum | ConditionTypeOptionsObject)[]): {
    conditionTypeOptions: {
        label: string;
        value: LogicalSelectConditionTypeEnum;
    }[];
    configs: ConditionTypeOptionsObject[];
};
export declare function getConditionDefaultValue(options: LogicalSelectOption[] | ((condition: LogicalSelectValueRaw, value: LogicalSelectValue) => LogicalSelectOption[]), value: LogicalSelectValue): LogicalSelectValueRaw;
