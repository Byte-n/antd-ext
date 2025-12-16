import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import { Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from 'antd';
import React from 'react';
import { extractInnerLayoutClasses } from '@byte.n/antd-ext/Sheet/utils/extractInnerLayoutClasses';

export interface SwitchProps
  extends DataCellComponentProps<boolean>,
    Omit<AntdSwitchProps, keyof DataCellComponentProps> {}

export default function Switch(props: SwitchProps) {
  const { className } = props;
  const [wrapper, inner] = extractInnerLayoutClasses(className);
  return (
    <span className={wrapper}>
      <AntdSwitch {...props} className={inner} />
    </span>
  );
}
