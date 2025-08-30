import { InputNumber } from 'antd';
import React, { FC } from 'react';
import { EnhanceInput, EnhanceSelect, InputRange } from '../index';
import { LogicalSelectWidgetProps } from './index';

const Input: FC<LogicalSelectWidgetProps<string>> = ({ value, onChange }) => (
  <EnhanceInput value={value} onValueChange={onChange} />
);
export const LogicalSelectDefaultWidgets = {
  Input: Input,
  InputNumber,
  InputRange,
  Select: EnhanceSelect,
} as unknown as Record<string, FC<LogicalSelectWidgetProps>>;
