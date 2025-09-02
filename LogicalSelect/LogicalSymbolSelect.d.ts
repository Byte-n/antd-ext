import { SegmentedProps } from 'antd/es/segmented';
import React from 'react';
export type LogicalSymbol = 'and' | 'or';
/**
 * 逻辑符号选择器
 * @constructor
 */
declare const _default: ({ value, onChange, disabled, prefixCls, }: Pick<SegmentedProps<LogicalSymbol>, "value" | "onChange" | "disabled"> & {
    prefixCls: string;
}) => React.JSX.Element;
export default _default;
