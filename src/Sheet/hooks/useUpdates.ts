import { useMemoizedFn } from 'ahooks';
import type { AnyObject } from 'antd/es/_util/type';
import { useMemo } from 'react';
import { ColumnType, DataColumnType } from '../index';

export interface GenerateRowValueOptions<RecordType = AnyObject> {
  prevValue?: RecordType;
  prevIndex?: number;
  index: number;
  nextValue?: RecordType;
  nextIndex?: number;
}

export interface UseUpdatesParams<
  RecordType extends AnyObject = AnyObject,
  RowKey extends keyof RecordType = keyof RecordType,
> {
  value: RecordType[];
  columns: ColumnType<RecordType>[];
  rowKey: RowKey;
  createNewKey: (opt: GenerateRowValueOptions<RecordType>, value: RecordType[]) => RecordType[RowKey];
  change: (newValue: RecordType[]) => void;
}

export interface UseUpdatesReturn<RecordType extends AnyObject = AnyObject> {
  updateCellByKey: (idx: number, key: keyof RecordType, v: any) => void;
  updateCell: (idx: number, obj: Partial<RecordType>) => void;
  insertRow: (prevIndex: number | null, value?: Partial<RecordType>) => void;
  deleteRow: (index: number) => void;
}

export function useUpdates<
  RecordType extends AnyObject = AnyObject,
  RowKey extends keyof RecordType = keyof RecordType,
>(params: UseUpdatesParams<RecordType, RowKey>): UseUpdatesReturn<RecordType> {
  const { value, columns, rowKey, createNewKey, change } = params;

  const updateCellByKey = useMemoizedFn((idx: number, key: keyof RecordType, v: any) => {
    const newValue = [...value];
    newValue[idx] = { ...newValue[idx], [key]: v };
    change(newValue);
  });

  const updateCell = useMemoizedFn((idx: number, obj: Partial<RecordType>) => {
    const newValue = [...value];
    newValue[idx] = { ...newValue[idx], ...obj };
    change(newValue);
  });

  const insertRow = useMemoizedFn((prevIndex: number | null, v?: Partial<RecordType>) => {
    const curIdx = prevIndex === null ? 0 : prevIndex + 1;
    const opts: GenerateRowValueOptions = {
      index: curIdx,
    };
    if (prevIndex !== null) {
      opts.prevIndex = prevIndex;
      opts.prevValue = value[opts.prevIndex];
    }
    if (curIdx + 1 < columns.length - 1) {
      opts.nextIndex = curIdx + 1;
      opts.nextValue = value[opts.nextIndex];
    }

    const emptyRow: AnyObject = {
      [rowKey]: createNewKey(opts, value),
    };

    columns.forEach((column) => {
      if (column.generateRowValue && (column as DataColumnType<any, any>).dataIndex) {
        emptyRow[(column as DataColumnType<any, any>).dataIndex] = column.generateRowValue(opts, value);
      }
    });

    const newValue = [...value];
    newValue.splice(curIdx, 0, { ...emptyRow, ...(v as RecordType) });
    change(newValue);
  });

  const deleteRow = useMemoizedFn((index: number) => {
    const newValue = [...value];
    newValue.splice(index, 1);
    change(newValue);
  });


  return {
    updateCellByKey,
    updateCell,
    insertRow: insertRow,
    deleteRow,
  };
}
