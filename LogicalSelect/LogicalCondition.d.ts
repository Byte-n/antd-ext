import { InternalLogicalSelectValueProps, LogicalSelectValue, LogicalSelectValueRaw } from "./index";
import React from 'react';
export interface ConditionProps extends InternalLogicalSelectValueProps {
    condition: LogicalSelectValueRaw;
    parentValue: LogicalSelectValue;
}
/**
 * 条件
 * @param props
 * @constructor
 */
export declare function LogicalCondition(props: ConditionProps): React.JSX.Element;
