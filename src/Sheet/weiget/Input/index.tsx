import { EnhancedInput, EnhancedInputProps } from '@byte.n/antd-ext';
import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import React from 'react';

export interface InputProps
  extends DataCellComponentProps<string>,
    Omit<EnhancedInputProps, keyof DataCellComponentProps<string>> {}

export default function Input(props: InputProps) {
  return <EnhancedInput {...props} />;
}
