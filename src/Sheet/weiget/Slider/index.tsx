import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import { Slider as AntdSlider, SliderSingleProps as AntdSliderProps } from 'antd';
import React from 'react';
import { extractInnerLayoutClasses } from '@byte.n/antd-ext/Sheet/utils/extractInnerLayoutClasses';

type TV = number | number[];

export interface SliderProps<T extends TV = TV>
  extends DataCellComponentProps<T>,
    Omit<AntdSliderProps, keyof DataCellComponentProps> {}

export default function <T extends TV = TV>(props: SliderProps<T>) {
  const { className, style } = props;
  const [wrapper, inner] = extractInnerLayoutClasses(className);
  return (
    <span className={wrapper}>
      <AntdSlider {...(props as any)} className={inner} style={{ margin: 0, ...style }} />
    </span>
  );
}
