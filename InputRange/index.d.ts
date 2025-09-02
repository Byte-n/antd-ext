import React from 'react';
export interface InputRangeProps {
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
declare const InputRange: React.ForwardRefExoticComponent<InputRangeProps & React.RefAttributes<InputRangeRef>>;
export default InputRange;
