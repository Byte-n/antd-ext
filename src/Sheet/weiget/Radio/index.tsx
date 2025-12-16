import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import { Radio as AntdRadio, RadioChangeEvent, RadioProps as AntdRadioProps } from 'antd';
import { RadioGroupProps as AntdRadioGroupProps } from 'antd/es/radio';
import React, { useCallback } from 'react';

export interface RadioProps<T>
  extends DataCellComponentProps<T>,
    Omit<AntdRadioProps, 'checked' | 'defaultChecked' | keyof DataCellComponentProps> {}

export interface RadioGroupProps<T>
  extends DataCellComponentProps<T>,
    Omit<AntdRadioGroupProps, keyof DataCellComponentProps> {}

function CellRadioGroup<T>(props: RadioGroupProps<T>) {
  const { value, onChange, ...restProps } = props;

  const onGroupChange = useCallback((e: any) => onChange?.(e.target.value), [onChange]);

  return <AntdRadio.Group {...restProps} value={value} onChange={onGroupChange} />;
}

/**
 * Sheet表格中的单选框单元格组件
 *
 * @example
 * // 普通单选框模式
 * <CellRadio />
 */
function Radio<T>(props: RadioProps<T>) {
  const { value, onChange, ...restProps } = props;

  const onChecked = useCallback(
    (e: RadioChangeEvent) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return <AntdRadio {...restProps} value={value} onChange={onChecked} />;
}

(Radio as RadioType).Group = CellRadioGroup;

type RadioType = typeof Radio & {
  Group: typeof CellRadioGroup;
};

export default Radio as RadioType;
