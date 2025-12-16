import { isNil } from '@byte.n/antd-ext/utils/object';
import type { AnyObject } from 'antd/es/_util/type';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

type Align = 'center' | 'start' | 'end';

export interface OperatorCellProps<RecordType extends AnyObject = AnyObject>
  extends OperatorCellComponentProps<RecordType> {
  componentProps?: any;
  Component?: React.ComponentType<OperatorCellComponentProps<RecordType>>;
  prefixCls: string;
  align?: Align | [Align, Align];
}

export interface OperatorCellComponentProps<RecordType = any> {
  value?: RecordType;
  index?: number;
  onInsertRow?: (prev: number | null, value?: Partial<RecordType>) => void;
  onDeleteRow?: (index: number) => void;
  onUpdateCell?: (index: number, data: Partial<RecordType>) => void;
  className?: string;
}

function OperatorCell<RecordType extends AnyObject = AnyObject>(props: OperatorCellProps<RecordType>) {
  const {
    Component,
    componentProps,
    value,
    prefixCls,
    onInsertRow,
    onDeleteRow,
    onUpdateCell,
    align,
    index,
    className,
  } = props;
  const aligns = useMemo<[Align, Align]>(() => {
    if (isNil(align)) {
      return ['start', 'center'];
    }
    if (Array.isArray(align)) {
      return [align[0], align[1] ?? align[0]];
    }
    return [align, align];
  }, [align]);
  return (
    <div
      className={classNames(
        `${prefixCls}-cell-inner`,
        `${prefixCls}-cell-align-x-${aligns[0]}`,
        `${prefixCls}-cell-align-y-${aligns[1]}`,
      )}
    >
      {Component && (
        <Component
          {...componentProps}
          value={value}
          onInsertRow={onInsertRow}
          onDeleteRow={onDeleteRow}
          onUpdateCell={onUpdateCell}
          index={index}
          className={className}
        />
      )}
    </div>
  );
}

export default memo(OperatorCell) as typeof OperatorCell;
