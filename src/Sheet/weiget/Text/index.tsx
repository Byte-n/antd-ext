import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import React from 'react';

export default function <T>(
  props: DataCellComponentProps<T> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const { className, style } = props;
  return (
    <div className={className} style={{ color: 'var(--ant-color-text-disabled)', ...style }}>
      {String(props.value)}
    </div>
  );
}
