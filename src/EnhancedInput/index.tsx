import { Input, InputProps, InputRef } from 'antd';
import React, { ChangeEvent, forwardRef, memo, useCallback, useImperativeHandle, useRef } from 'react';

export interface EnhancedInputProps extends Omit<InputProps, 'onChange'> {
  value?: string;
  onOriginChange?: InputProps['onChange'];
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
}

const EnhancedInput = forwardRef<InputRef, EnhancedInputProps>(({ value, onChange, onOriginChange, ...rest }, ref) => {
  const inputRef = useRef<InputRef>(null);

  useImperativeHandle(ref, () => inputRef.current!);

  const valueChange = useCallback(
    (v: ChangeEvent<HTMLInputElement>) => {
      onChange?.(v.target.value, v);
      if (onOriginChange) {
        return onOriginChange(v);
      }
    },
    [onOriginChange, onChange],
  );

  return <Input ref={inputRef} value={value} onChange={valueChange} {...rest} />;
});

EnhancedInput.displayName = 'EnhancedInput';

export default memo(EnhancedInput);
