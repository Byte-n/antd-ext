import { RefSelectProps, SelectProps } from 'antd';
import React, { Ref } from 'react';
export type Val = string | number | boolean;
export type Model = undefined | 'multiple' | 'tags';
export type ComputeValByModel<Model, V> = Model extends undefined ? V : V[];
export interface OptionType<Value extends Val, Data = unknown> extends ValueType<Value> {
    data: Data;
}
interface ValueType<Value extends Val> {
    key?: React.Key;
    label: React.ReactNode;
    value: Value;
}
export type ComputeOptionType<Value extends Val, Data> = Data extends undefined ? ValueType<Value> : OptionType<Value, Data>;
export interface EnhanceSelectProps<V extends Val, D = undefined, M extends Model = undefined> extends Omit<SelectProps<ComputeValByModel<M, V>, ComputeOptionType<V, D>>, 'labelRender' | 'labelInValue' | 'onChange'> {
    onChange?: (value: ComputeValByModel<M, V>, option?: ComputeValByModel<M, ComputeOptionType<V, D>>) => void;
    mode?: M;
    labelRender?: (props: OptionType<Val, D | undefined>) => React.ReactNode;
}
declare const EnhanceSelect: <V extends Val, D = undefined, M extends Model = undefined>(props: EnhanceSelectProps<V, D, M> & {
    ref?: Ref<RefSelectProps>;
}) => React.ReactElement;
export default EnhanceSelect;
