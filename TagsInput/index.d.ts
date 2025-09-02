import { InputProps } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React from 'react';
export type TagType<T extends 'text' | 'numeric'> = T extends 'numeric' ? number : string;
export interface TagsInputProps<T extends 'text' | 'numeric' = 'text'> {
    className?: string;
    style?: React.CSSProperties;
    placeholder?: string;
    value?: TagType<T>[];
    defaultValue?: TagType<T>[];
    onChange?: (value: TagType<T>[]) => void;
    maxCount?: number;
    maxDisplayCount?: number;
    type?: T;
    inputProps?: Omit<InputProps, 'value' | 'onChange' | 'onKeyDown' | 'placeholder' | 'suffix' | 'size'>;
    prefixCls?: string;
    size?: SizeType;
}
/**
 * Tags Input
 * @param props
 * @constructor
 */
declare function TagsInput<T extends 'text' | 'numeric' = 'text'>(props: TagsInputProps<T>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace TagsInput {
    var TextOrNumericList: (props: TextOrNumericListProps) => React.JSX.Element;
}
export default TagsInput;
export type TextOrNumericListValue = number[] | string;
interface TextOrNumericListProps extends Omit<InputProps, 'value' | 'defaultValue' | 'onChange' | 'onKeyDown'> {
    value?: TextOrNumericListValue;
    defaultValue?: TextOrNumericListValue;
    onChange?: (v: TextOrNumericListValue) => void;
    tagsInputProps?: Omit<TagsInputProps<'numeric'>, 'defaultValue' | 'value' | 'onChange' | 'type' | 'style' | 'className' | 'placeholder'>;
}
