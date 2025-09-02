import {
  LogicalSelectOption,
  LogicalSelectValue,
  LogicalSelectValueRaw, LogicalSelectWidgetProps,
} from './index';
import { cloneDeep } from '../utils/object';
import { FC } from 'react';

export interface ConditionTypeOptionsObject {
  widget: string | FC<LogicalSelectWidgetProps>;
  conditionType: LogicalSelectConditionTypeEnum;
  widgetProps?: Record<string, unknown>;
}
/**
 * 逻辑选择器值
 */
export enum LogicalSelectConditionTypeEnum {
  /**
   * 等于
   */
  equal = 'equal',
  /**
   * 不等于
   */
  notEqual = 'notEqual',
  /**
   * 大于
   */
  greater = 'greater',
  /**
   * 大于等于
   */
  greaterEqual = 'greaterEqual',
  /**
   * 小于
   */
  less = 'less',
  /**
   * 小于等于
   */
  lessEqual = 'lessEqual',
  /**
   * 在范围内
   */
  inRange = 'inRange',
  /**
   * 不在范围内
   */
  notInRange = 'notInRange',
  /**
   * 属于
   */
  includes = 'includes',
  /**
   * 不属于
   */
  excludes = 'excludes',
}


export const defaultConditionTypeOptions = [
  { label: '等于', value: LogicalSelectConditionTypeEnum.equal },
];

const allConditionTypeOptions = [
  { label: '等于', value: LogicalSelectConditionTypeEnum.equal },
  { label: '不等于', value: LogicalSelectConditionTypeEnum.notEqual },
  { label: '大于', value: LogicalSelectConditionTypeEnum.greater },
  { label: '小于', value: LogicalSelectConditionTypeEnum.less },
  { label: '大于等于', value: LogicalSelectConditionTypeEnum.greaterEqual },
  { label: '小于等于', value: LogicalSelectConditionTypeEnum.lessEqual },
  { label: '在范围内', value: LogicalSelectConditionTypeEnum.inRange },
  { label: '不在范围', value: LogicalSelectConditionTypeEnum.notInRange },
  { label: '属于', value: LogicalSelectConditionTypeEnum.includes },
  { label: '不属于', value: LogicalSelectConditionTypeEnum.excludes },
];

export function parseConditionTypeOptions(
  conditionTypeOptions?: (
    | LogicalSelectConditionTypeEnum
    | ConditionTypeOptionsObject
  )[],
) {
  if (!conditionTypeOptions?.length) {
    return {
      conditionTypeOptions: cloneDeep(defaultConditionTypeOptions),
      configs: [],
    };
  }
  const ks: LogicalSelectConditionTypeEnum[] = [];
  const configs: ConditionTypeOptionsObject[] = [];
  for (const item of conditionTypeOptions) {
    if (typeof item === 'string') {
      ks.push(item);
      continue;
    }
    configs.push(item);
    ks.push(item.conditionType);
  }
  let list = allConditionTypeOptions.filter((v) => ks.includes(v.value));
  if (!list.length) {
    list = defaultConditionTypeOptions;
    console.error(
      '[LogicalCondition] conditionTypeOptions 参数错误：',
      conditionTypeOptions,
    );
  }
  return { conditionTypeOptions: list, configs };
}

export function getConditionDefaultValue(
  options: LogicalSelectOption[] |
    ((condition: LogicalSelectValueRaw, value: LogicalSelectValue) => LogicalSelectOption[]),
  value: LogicalSelectValue,
): LogicalSelectValueRaw {
  const optionList = Array.isArray(options)
    ? options
    : options({}, value);
  const find = optionList.find((v) => !v.disabled);
  if (find) {
    const { conditionTypeOptions } = parseConditionTypeOptions(
      find.conditionTypeOptions!,
    );
    return { key: find.value, conditionType: conditionTypeOptions[0].value };
  }
  return {};
}
