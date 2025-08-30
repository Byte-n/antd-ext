import { Input, InputProps, InputRef } from 'antd';
import React, { ChangeEvent, memo, useCallback, forwardRef, useImperativeHandle, useRef } from 'react';

export interface EnhancedInputProps extends InputProps {
  value?: string;
  onValueChange?: (value: string, e: ChangeEvent) => void;
}


const EnhancedInput = forwardRef<InputRef, EnhancedInputProps>(
  ({ value, onChange, onValueChange, ...rest }, ref) => {
    const inputRef = useRef<InputRef>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const valueChange = useCallback(
      (v: ChangeEvent<HTMLInputElement>) => {
        onValueChange?.(v.target.value, v);
        if (onChange) {
          return onChange(v);
        }
      },
      [onValueChange, onChange],
    );

    return (
      <Input
        ref={inputRef}
        value={value}
        onChange={valueChange}
        {...rest}
      />
    );
  },
);

EnhancedInput.displayName = 'EnhancedInput';

export default memo(EnhancedInput);

