import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import React from 'react';
import { InputNumber , InputNumberProps as AntdInputNumberProps } from 'antd';

type VT = number | string | null;
export interface InputNumberProps<T extends VT = VT>
  extends DataCellComponentProps<T>,
    Omit<AntdInputNumberProps<any>, keyof DataCellComponentProps<T>> {}

export default function <T extends VT = VT>(props: InputNumberProps<T>) {
  return <InputNumber<any> {...props}/>;
}
