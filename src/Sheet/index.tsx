import { extractInnerLayoutClasses } from '@byte.n/antd-ext/Sheet/utils/extractInnerLayoutClasses';
import type { Rule } from '@rc-component/async-validator/es';
import { useClickAway, useMemoizedFn, useMount } from 'ahooks';
import { GetProp, GetRef, Table, TableProps, ThemeConfig } from 'antd';
import { getStatusClassNames } from 'antd/es/_util/statusUtils';
import type { AnyObject } from 'antd/es/_util/type';
import ConfigProvider, { ConfigContext } from 'antd/es/config-provider';
import { FormItemInputContext } from 'antd/es/form/context';
import { ColumnType as _ColumnType } from 'antd/es/table';
import classNames from 'classnames';
import React, { useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { isNil } from '../utils/object';
import Cell, { DataCellComponentProps, DataCellProps } from './components/DataCell';
import Empty, { EmptyProps } from './components/Empty';
import OperatorCell, { OperatorCellComponentProps } from './components/OperatorCell';
import OperatorColumn from './components/OperatorColumn';
import type { GenerateRowValueOptions } from './hooks/useUpdates';
import { useUpdates } from './hooks/useUpdates';
import useStyle from './style';
import { validateData } from './utils/validate';
import * as Weigets from './weiget';

type TableColumnType<RecordType> = Exclude<TableProps<RecordType>['columns'], undefined>[number];

/**
 * 表格列字段
 */
type BaseTableType = Pick<_ColumnType, 'title' | 'key' | 'width' | 'minWidth' | 'fixed'>;

/**
 * 数据列
 */
export interface DataColumnType<
  RecordType,
  K extends keyof RecordType,
  Props extends DataCellComponentProps<RecordType[K]> = any,
> extends BaseTableType {
  dataIndex: K;
  type?: 'data';
  Component?: React.ComponentType<Props>;
  componentProps?: Omit<Props, keyof DataCellComponentProps<RecordType[K]>>;
  generateRowValue?: (opts: GenerateRowValueOptions, value: RecordType[]) => any;
  rule?: Rule;
  align?: DataCellProps['align'];
  layout?: 'block' | 'inline' | 'w-full' | 'h-full';
}

/**
 * 操作列
 */
export interface OperatorColumnType<RecordType, Props extends OperatorCellComponentProps<RecordType> = any>
  extends BaseTableType {
  type: 'operator';
  Component?: React.ComponentType<Props>;
  componentProps?: Omit<Props, keyof OperatorCellComponentProps<RecordType>>;
  generateRowValue?: (opts: GenerateRowValueOptions, value: RecordType[]) => any;
  align?: DataCellProps['align'];
  layout?: 'block' | 'inline' | 'w-full' | 'h-full';
}

/**
 * 所有列的联合类型
 */
export type ColumnType<RecordType> =
  | { [K in keyof RecordType]: DataColumnType<RecordType, K> }[keyof RecordType]
  | OperatorColumnType<RecordType>;

interface BaseSheetProps<RecordType extends AnyObject> {
  prefixCls?: string;
  columns: ColumnType<RecordType>[];
  defaultValue?: RecordType[];
  value?: RecordType[];
  onChange?: (value: RecordType[]) => void;
  size?: TableProps['size'];
  className?: string;
  style?: React.CSSProperties;
  classNames?: TableProps['classNames'];
  styles?: TableProps['styles'];
  renderEmpty?: (props: EmptyProps) => React.ReactNode;
  operatorColumn?: {
    position?: 'left' | 'right';
    title?: React.ReactNode;
    width?: number;
    render?: (record: RecordType, index: number) => React.ReactNode;
  };
  validateTooltip?: DataCellProps<RecordType>['validateTooltip'];
}

export type SheetProps<RecordType extends AnyObject> = BaseSheetProps<RecordType> &
  {
    [K in keyof RecordType]: {
      rowKey: K;
      createNewKey: (opt: GenerateRowValueOptions<RecordType>, value: RecordType[]) => RecordType[K];
    };
  }[keyof RecordType];

export interface SheetRef<RecordType> extends GetRef<typeof Table> {
  insertRow(index: number): void;

  deleteRow(index: number): void;

  validate(): Promise<RecordType[]>;
}

function InternalSheet<RecordType extends AnyObject>(
  props: SheetProps<RecordType>,
  ref: React.Ref<SheetRef<RecordType>>,
) {
  const {
    columns,
    size,
    value: _value,
    defaultValue,
    onChange,
    rowKey,
    className,
    style,
    classNames: cns,
    styles,
    createNewKey,
    renderEmpty,
    operatorColumn,
    validateTooltip,
    prefixCls: cusPrefixCls,
  } = props;

  const isControlled = _value !== undefined;
  const [internalValue, setInternalValue] = useState<RecordType[]>(defaultValue || []);
  const value = isControlled ? _value : internalValue;

  const [cellStatus, setCellStatus] = useState<Record<number, Record<number, string>>>(
    {} as Record<number, Record<number, string>>,
  );
  const validateDataMemoized = useMemoizedFn((newValue: RecordType[]) =>
    validateData({
      newValue,
      columns,
      setCellStatus,
    }),
  );

  useMount(() => void (isControlled && validateDataMemoized(value)));

  const change = useMemoizedFn((newValue: RecordType[]) => {
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
    validateDataMemoized(newValue);
  });

  const { updateCellByKey, updateCell, insertRow, deleteRow } = useUpdates({
    value,
    columns,
    rowKey,
    createNewKey,
    change,
  });

  const [cellClickCount, setCellClickCount] = useState<[number, number, number]>([-1, -1, 1]);
  const tableRef = useRef<GetRef<typeof Table>>(null);
  useClickAway(() => {
    setCellClickCount([-1, -1, 0]);
  }, tableRef.current?.nativeElement);
  useImperativeHandle(
    ref,
    () => ({
      ...tableRef.current!,
      insertRow: insertRow,
      deleteRow,
      validate: async () => {
        const error = await validateDataMemoized(value);
        if (error) {
          throw error;
        }
        return value;
      },
    }),
    [insertRow, deleteRow, validateDataMemoized, value],
  );

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('sheet', cusPrefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls);

  const computeStatus = useCallback(
    (rowIndex: number, columnIndex: number) => {
      const edited = cellClickCount[0] === columnIndex && cellClickCount[1] === rowIndex;
      const errorMessage = cellStatus[columnIndex]?.[rowIndex];
      return { edited, errorMessage, clickCount: cellClickCount[2] };
    },
    [cellStatus, cellClickCount],
  );

  const convertColumn = useCallback(
    (column: ColumnType<RecordType>, columnIndex: number): TableColumnType<RecordType> => {
      const { Component, componentProps, type, align, layout, ...rest } = column;
      const isDataCell = type === 'data' || isNil(type);
      let layouts: (typeof layout)[] = [];
      let isInlineLayout = false;
      if (!Component && !layout) {
        layouts = ['inline'];
        isInlineLayout = true;
      } else {
        layouts = layout === 'block' || !layout ? ['w-full', 'h-full'] : [layout];
        isInlineLayout = layouts.includes('inline');
      }
      const dataIndex = isDataCell ? (column as DataColumnType<RecordType, keyof RecordType>).dataIndex : rowKey;
      return {
        ...rest,
        dataIndex: dataIndex as string,
        onHeaderCell: () => {
          return {
            className: classNames({
              [`${prefixCls}-th-status-error`]: Boolean(cellStatus[columnIndex]),
            }),
          };
        },
        onCell: (record: RecordType, rowIndex) => {
          if (!record || isNil(rowIndex)) {
            return {};
          }
          if (isDataCell) {
            const { edited, errorMessage, clickCount } = computeStatus(rowIndex, columnIndex);
            const cns = isDataCell
              ? classNames(`${prefixCls}-cell-data`, {
                  [`${prefixCls}-cell-error`]: errorMessage,
                  [`${prefixCls}-cell-active`]: edited,
                  [`${prefixCls}-cell-no-selection`]: clickCount === 1,
                  [`${prefixCls}-cell-layout-w-full`]: layouts.includes('w-full'),
                  [`${prefixCls}-cell-layout-h-full`]: layouts.includes('h-full'),
                  [`${prefixCls}-cell-layout-inline`]: isInlineLayout,
                })
              : undefined;
            return {
              className: cns,
              onClick: (e) => {
                const newCellClickCount: typeof cellClickCount = [columnIndex, rowIndex, edited ? clickCount + 1 : 1];

                if (edited) {
                  const target = e.target as HTMLInputElement;
                  if (newCellClickCount[2] === 2 && typeof target.selectionStart === 'number') {
                    target.selectionStart = target.selectionEnd;
                  }
                }
              },
              onMouseDown: () => {
                const newCellClickCount: typeof cellClickCount = [columnIndex, rowIndex, edited ? clickCount + 1 : 1];
                setCellClickCount(newCellClickCount);
              }
            };
          }
          return {
            className: `${prefixCls}-cell-operator`,
          };
        },
        render: (_: any, record: RecordType, rowIndex: number) => {
          if (isDataCell) {
            const { edited, errorMessage } = computeStatus(rowIndex, dataIndex as any);
            return (
              <Cell<RecordType>
                componentProps={componentProps}
                Component={(Component ?? Weigets.Text) as React.ComponentType<DataCellComponentProps>}
                value={record[dataIndex]}
                rowIndex={rowIndex}
                dataIndex={dataIndex}
                validateTooltip={Component ? validateTooltip : false}
                edited={edited}
                errorMessage={errorMessage}
                prefixCls={prefixCls}
                onUpdateCellByKey={updateCellByKey}
                align={align}
                className={isInlineLayout ? undefined : `${prefixCls}-cell-inner-layout`}
              />
            );
          }
          return (
            <OperatorCell<RecordType>
              Component={Component as React.ComponentType<OperatorCellComponentProps<RecordType>>}
              value={record}
              index={rowIndex}
              prefixCls={prefixCls}
              componentProps={componentProps}
              onInsertRow={insertRow}
              onDeleteRow={deleteRow}
              onUpdateCell={updateCell}
              align={align}
              className={isInlineLayout ? undefined : `${prefixCls}-cell-inner-layout`}
            />
          );
        },
      };
    },
    [computeStatus, prefixCls, updateCellByKey, validateTooltip, updateCell],
  );
  const realColumns = useMemo<TableProps<RecordType>['columns']>(() => {
    const cols: TableProps<RecordType>['columns'] = !columns ? [] : columns.map(convertColumn);

    const opr = {
      title: operatorColumn?.title,
      width: operatorColumn?.width ?? 60,
      render: (_: any, _record: RecordType, index: number) => {
        if (operatorColumn?.render) {
          return operatorColumn.render(_record, index);
        }
        return <OperatorColumn index={index} insertRow={insertRow} deleteRow={deleteRow} />;
      },
    };
    if (operatorColumn?.position === 'left') {
      cols.unshift(opr);
    } else {
      cols.push(opr);
    }
    return cols;
  }, [
    columns,
    convertColumn,
    operatorColumn?.position,
    operatorColumn?.render,
    operatorColumn?.title,
    operatorColumn?.width,
    insertRow,
    deleteRow,
  ]);

  const realRenderEmpty: GetProp<typeof ConfigProvider, 'renderEmpty'> = useCallback(
    (componentName) => {
      if (componentName === 'Table') {
        return renderEmpty ? (
          renderEmpty({ insertRow: insertRow.bind(null, null) })
        ) : (
          <Empty insertRow={insertRow.bind(null, null)} />
        );
      }
    },
    [renderEmpty, insertRow],
  );

  const { status: contextStatus, hasFeedback } = React.useContext(FormItemInputContext);
  return (
    <ConfigProvider componentSize={size} renderEmpty={realRenderEmpty}>
      <FormItemInputContext.Provider value={emptyObject}>
        <Table<RecordType>
          bordered
          rowKey={rowKey}
          ref={tableRef}
          dataSource={value}
          columns={realColumns}
          className={classNames(
            cssVarCls,
            hashId,
            getStatusClassNames(prefixCls, contextStatus, hasFeedback),
            className,
          )}
          style={style}
          styles={styles}
          classNames={cns}
          prefixCls={prefixCls}
        />
      </FormItemInputContext.Provider>
    </ConfigProvider>
  );
}

const emptyObject = {};

const Sheet = React.forwardRef(InternalSheet) as unknown as SheetComponent;

type WeigetsTypes = typeof Weigets;

interface SheetComponent extends WeigetsTypes {
  /**
   * 定义列的类型增强辅助工具函数<br/>
   * 例如：<br/>
   * const columns: ColumnType<Product>[] = [
   *   Sheet.column(InputNumber<number>,{
   *     title: '价格',
   *     dataIndex: 'price',
   *     componentProps: {}, // 此类型会被推导为：Omit<InputNumberProps<number>, 'value' | 'onChange'>
   *   }),
   * ]
   */
  col: typeof col;
  operatorCol: typeof operatorCol;
  extractInnerLayoutClasses: typeof extractInnerLayoutClasses;

  <RecordType extends AnyObject>(
    props: SheetProps<RecordType> & { ref?: React.Ref<SheetRef<RecordType>> },
  ): React.ReactElement;
}

Sheet.col = col;
Sheet.extractInnerLayoutClasses = extractInnerLayoutClasses;
Sheet.operatorCol = operatorCol;
Object.assign(Sheet, Weigets);

function col<RecordType, K extends keyof RecordType, Props extends DataCellComponentProps<RecordType[K]>>(
  Component: React.ComponentType<Props>,
  v: Omit<DataColumnType<RecordType, K, Props>, 'Component'>,
): DataColumnType<RecordType, K, Props> {
  return { ...v, Component };
}

function operatorCol<RecordType, Props extends OperatorCellComponentProps<RecordType>>(
  Component: React.ComponentType<Props>,
  v: Omit<OperatorColumnType<RecordType, Props>, 'Component'>,
): OperatorColumnType<RecordType, Props> {
  return { ...v, Component };
}

export default Sheet;
