import { ConfigProvider, RefSelectProps, Select, SelectProps } from 'antd';
import useStyle from './style';
import classNames from 'classnames';
import React, {
  forwardRef,
  Ref,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { unionBy } from 'antd-ext/utils/array';

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


export interface EnhanceSelectProps<
  V extends Val,
  D = undefined,
  M extends Model = undefined,
> extends Omit<
    SelectProps<ComputeValByModel<M, V>, ComputeOptionType<V, D>>,
    'labelRender' | 'labelInValue' | 'onChange'
  > {
  onChange?: (
    value: ComputeValByModel<M, V>,
    option?: ComputeValByModel<M, ComputeOptionType<V, D>>,
  ) => void;
  mode?: M;
  labelRender?: (props: OptionType<Val, D | undefined>) => React.ReactNode;
}

function InternalEnhanceSelect<
  V extends Val,
  D = undefined,
  M extends Model = undefined,
>(opt: EnhanceSelectProps<V, D, M>, ref: Ref<RefSelectProps>) {
  const {
    maxTagCount,
    labelRender,
    options,
    onChange,
    prefixCls: customizePrefixCls,
    ...rest
  } = opt;
  const allOptionsRef = useRef<ComputeOptionType<V, D>[]>([]);
  if (options?.length) {
    allOptionsRef.current = unionBy(
      allOptionsRef.current.concat(options),
      (v) => v.value,
    );
  }
  const scroll = useMemo(() => {
    if (maxTagCount === 'responsive') {
      return false;
    }
    return typeof maxTagCount !== 'number';
  }, [maxTagCount]);

  const realLabelRender = useCallback(
    (opt: Omit<ComputeOptionType<Val, D | undefined>, 'data'>) => {
      const option = allOptionsRef.current.find(
        (v) => v.value === opt.value,
      ) as unknown as OptionType<Val, D>;
      return labelRender?.({ ...opt, data: option?.data });
    },
    [labelRender],
  );

  const configContext = useContext(ConfigProvider.ConfigContext);
  const prefixCls = configContext.getPrefixCls(
    'enhance-select',
    customizePrefixCls,
  );
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  return wrapCSSVar(
    <Select<ComputeValByModel<M, V>, ComputeOptionType<V, D>>
      ref={ref}
      optionFilterProp="label"
      {...rest}
      onChange={
        onChange as SelectProps<
          ComputeValByModel<M, V>,
          ComputeOptionType<V, D>
        >['onChange']
      }
      options={options}
      labelRender={labelRender ? realLabelRender : undefined}
      className={classNames(
        prefixCls,
        hashId,
        cssVarCls,
        { scroll: scroll },
        opt.className,
      )}
      labelInValue={false}
      maxTagCount={maxTagCount}
    />,
  );
}

const EnhanceSelect = forwardRef(InternalEnhanceSelect) as unknown as <
  V extends Val,
  D = undefined,
  M extends Model = undefined,
>(
  props: EnhanceSelectProps<V, D, M> & { ref?: Ref<RefSelectProps> },
) => React.ReactElement;

export default EnhanceSelect;
