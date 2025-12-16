import { Tooltip, TooltipProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import classNames from 'classnames';
import React, { memo, useCallback, useMemo } from 'react';
import { isNil } from '../../utils/object';

type Align = 'center' | 'start' | 'end';

export interface DataCellProps<RecordType extends AnyObject = AnyObject> {
  componentProps?: any;
  Component: React.ComponentType<DataCellComponentProps>;
  value: RecordType;
  rowIndex: number;
  dataIndex: keyof RecordType;
  onUpdateCellByKey: (index: number, dataIndex: keyof RecordType, v: any) => void;
  validateTooltip?: boolean | Omit<TooltipProps, 'open' | 'title'>;
  edited: boolean;
  errorMessage?: string | null;
  prefixCls: string;
  align?: Align | [Align, Align];
  className?: string;
}

export interface DataCellComponentProps<T = any> {
  value?: T;
  onChange?: (value: T) => void;
  className?: string;
}

function DataCell<RecordType extends AnyObject = AnyObject>(props: DataCellProps<RecordType>) {
  const {
    Component,
    componentProps,
    value,
    rowIndex,
    dataIndex,
    validateTooltip,
    edited,
    errorMessage,
    prefixCls,
    onUpdateCellByKey,
    align,
    className,
  } = props;
  const onChange = useCallback(
    (v: any) => {
      onUpdateCellByKey(rowIndex, dataIndex, v);
    },
    [dataIndex, onUpdateCellByKey, rowIndex],
  );
  const aligns = useMemo<[Align, Align]>(() => {
    if (isNil(align)) {
      return ['start', 'center'];
    }
    if (Array.isArray(align)) {
      return [align[0], align[1] ?? align[0]];
    }
    return [align, align];
  }, [align]);
  const content = (
    <div
      className={classNames(
        `${prefixCls}-cell-inner`,
        `${prefixCls}-cell-align-x-${aligns[0]}`,
        `${prefixCls}-cell-align-y-${aligns[1]}`,
      )}
    >
      <Component {...componentProps} value={value} onChange={onChange} className={className} />
    </div>
  );
  if (!validateTooltip || !Component) {
    return content;
  }
  return (
    <Tooltip
      open={edited && Boolean(errorMessage)}
      title={errorMessage}
      rootClassName={`${prefixCls}-tip ${prefixCls}-tip-error`}
    >
      {content}
    </Tooltip>
  );
}

export default memo(DataCell) as typeof DataCell;
