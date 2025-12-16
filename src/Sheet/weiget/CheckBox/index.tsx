import { DataCellComponentProps } from '@byte.n/antd-ext/Sheet/components/DataCell';
import { extractInnerLayoutClasses } from '@byte.n/antd-ext/Sheet/utils/extractInnerLayoutClasses';
import { Checkbox as AntdCheckbox, CheckboxChangeEvent, CheckboxProps as AntdCheckboxProps } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import React, { useCallback } from 'react';

export interface CheckBoxProps<T>
  extends DataCellComponentProps<T>,
    Omit<AntdCheckboxProps, 'checked' | 'defaultChecked' | keyof DataCellComponentProps> {}

export interface CellCheckBoxGroupProps<T>
  extends DataCellComponentProps<T[]>,
    Omit<CheckboxGroupProps, keyof DataCellComponentProps> {}

function CellCheckBoxGroup<T>(props: CellCheckBoxGroupProps<T>) {
  const { value, onChange, className, ...restProps } = props;

  const onGroupChange = useCallback((checkedValues: T[]) => onChange?.(checkedValues), [onChange]);
  const [wrapper, inner] = extractInnerLayoutClasses(className);
  return (
    <div className={wrapper}>
      <AntdCheckbox.Group<T>
        {...restProps}
        value={value}
        onChange={onGroupChange}
        className={inner}
      />
    </div>
  );
}

/**
 * Sheet表格中的复选框单元格组件
 *
 * @example
 * // 普通复选框模式
 * <CellCheckBox />
 */
function CellCheck(props: CheckBoxProps<boolean>) {
  const { value, onChange, ...restProps } = props;
  const onChecked = useCallback((e: CheckboxChangeEvent) => onChange?.(e.target.checked), [onChange]);
  return <AntdCheckbox {...restProps} checked={value} onChange={onChecked} />;
}

(CellCheck as CellCheckBoxType).Group = CellCheckBoxGroup;

type CellCheckBoxType = typeof CellCheck & {
  Group: typeof CellCheckBoxGroup;
};
export default CellCheck as CellCheckBoxType;
