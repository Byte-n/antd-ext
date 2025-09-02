import { InputProps, InputRef } from 'antd';
import React, { ChangeEvent } from 'react';
export interface EnhancedInputProps extends InputProps {
    value?: string;
    onValueChange?: (value: string, e: ChangeEvent) => void;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<EnhancedInputProps & React.RefAttributes<InputRef>>>;
export default _default;
