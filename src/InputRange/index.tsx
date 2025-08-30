import { InputNumber, Space, InputNumberProps } from 'antd';
import React, { useCallback, useMemo, useState, forwardRef, useImperativeHandle, useRef } from 'react';

interface InputRangeProps {
  min: number;
  max: number;
  value?: VT;
  onChange?: (value: VT) => void;
  defaultValue?: VT;
}

type VT = [number, number];

export interface InputRangeRef {
  getLowerInput: () => HTMLInputElement | null;
  getUpperInput: () => HTMLInputElement | null;
  focus: () => void;
  blur: () => void;
}

const InputRange = forwardRef<InputRangeRef, InputRangeProps>(
  ({ min, max, value, onChange, defaultValue }, ref) => {
    const lowerInputRef = useRef<HTMLInputElement>(null);
    const upperInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getLowerInput: () => lowerInputRef.current,
      getUpperInput: () => upperInputRef.current,
      focus: () => {
        lowerInputRef.current?.focus();
      },
      blur: () => {
        lowerInputRef.current?.blur();
        upperInputRef.current?.blur();
      },
    }));
  // 判断是否处于受控模式
  const isControlled = value !== undefined;

  // 非受控模式下的内部状态
  const [internalValue, setInternalValue] = useState<VT | [null, null]>(defaultValue || [null, null]);

  // 当前值（受控模式使用外部传入的 value，非受控模式使用内部状态）
  const currentValue = useMemo<VT | [null, null]>(() => {
    return isControlled ? (value || [null, null]) : internalValue;
  }, [isControlled, value, internalValue]);

  // 更新值的处理函数
  const update = useCallback((newValue: [number | null, number | null]) => {
    let [down, up] = newValue;

    if (down === null) down = min;
    if (up === null) up = max;

    if (down > up) {
      [up, down] = [down, up];
    }
    if (down < min) {
      down = min;
    }
    if (up > max) {
      up = max;
    }
    const vals: VT = [down, up];
    if (!isControlled) {
      setInternalValue(vals);
    }
    onChange?.(vals);
  }, [onChange, min, max, isControlled]);

  return (
    <Space>
      <InputNumber
        ref={lowerInputRef}
        value={currentValue[0]}
        onChange={(v) => update([v, currentValue[1]])}
        min={min}
        max={max}
      />
      <span>~</span>
      <InputNumber
        ref={upperInputRef}
        value={currentValue[1]}
        onChange={(v) => update([currentValue[0], v])}
        min={min}
        max={max}
      />
    </Space>
  );
  },
);

InputRange.displayName = 'InputRange';

export default InputRange;
