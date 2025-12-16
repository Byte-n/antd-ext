import { useClickAway } from 'ahooks';
import { ConfigProvider, GetRef, RefSelectProps, Select, SelectProps } from 'antd';
import classNames from 'classnames';
import React, { forwardRef, Ref, useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { unionBy } from '../utils/array';
import { isNil } from '../utils/object';
import useStyle from './style';

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

export type ComputeOptionType<Value extends Val, Data> = Data extends undefined
  ? ValueType<Value>
  : OptionType<Value, Data>;

export interface EnhancedSelectProps<V extends Val, D = undefined, M extends Model = undefined>
  extends Omit<
    SelectProps<ComputeValByModel<M, V>, ComputeOptionType<V, D>>,
    | 'labelRender'
    | 'labelInValue'
    | 'onChange'
    | 'dropdownRender'
    | 'onDropdownVisibleChange'
    | 'popupRender'
    | 'classNames'
    | 'styles'
    | 'maxTagCount'
  > {
  onChange?: (value: ComputeValByModel<M, V>, option?: ComputeValByModel<M, ComputeOptionType<V, D>>) => void;
  mode?: M;
  labelRender?: (props: OptionType<Val, D | undefined>) => React.ReactNode;
  popupRender?: (menu: React.ReactElement, opt: { close: VoidFunction }) => React.ReactElement;
  classNames?: SelectProps['classNames'] & { popupProxy?: string };
  styles?: SelectProps['styles'] & { popupProxy?: React.CSSProperties };
  maxTagCount?: SelectProps['maxTagCount'] | 'scroll'
}

function InternalEnhanceSelect<V extends Val, D = undefined, M extends Model = undefined>(
  props: EnhancedSelectProps<V, D, M>,
  ref: Ref<RefSelectProps>,
) {
  const {
    labelRender,
    options,
    onChange,
    prefixCls: customizePrefixCls,
    showSearch,
    onOpenChange,
    popupRender,
    open,
    defaultOpen,
    classNames: cns,
    styles,
    maxTagCount,
    ...rest
  } = props;
  const allOptionsRef = useRef<ComputeOptionType<V, D>[]>([]);
  if (options?.length) {
    allOptionsRef.current = unionBy(allOptionsRef.current.concat(options), (v) => v.value);
  }

  const realLabelRender = useMemo<SelectProps['labelRender']>(() => {
    if (!labelRender) {
      return;
    }
    return (opt) => {
      const option = allOptionsRef.current.find((v) => v.value === opt.value) as OptionType<Val, D>;
      return labelRender?.({ ...opt, data: option?.data });
    };
  }, [labelRender]);

  const configContext = useContext(ConfigProvider.ConfigContext);
  const prefixCls = configContext.getPrefixCls('enhance-select', customizePrefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls);

  const realShowSearch = useMemo(() => {
    if (showSearch === false || isNil(showSearch)) {
      return false;
    }
    if (showSearch === true) {
      return { optionFilterProp: 'label' };
    }
    return {
      optionFilterProp: 'label',
      ...showSearch,
    };
  }, [showSearch]);

  const selectRef = useRef<GetRef<typeof Select>>(null);

  // 传入 popupRender 时，也传入了 open/defaultOpen/onOpenChange
  const openIsControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const realOpen = openIsControlled ? open : internalOpen;

  const changeOpen = useCallback(
    (v: boolean) => {
      if (!openIsControlled) {
        setInternalOpen(v);
      }
      onOpenChange?.(v);
    },
    [onOpenChange, openIsControlled],
  );

  // 仅传 popupRender时生效
  const popupProxyDivRef = useRef<HTMLDivElement>(null);
  useClickAway(
    () => changeOpen(false),
    [
      () => {
        if (!popupRender) {
          return null;
        }
        return selectRef.current?.nativeElement;
      },
      () => {
        if (!popupRender) {
          return null;
        }
        return popupProxyDivRef.current!;
      },
    ],
  );

  // 包裹 popupRender提供 close 函数
  const proxyPopupRender = useCallback<Exclude<SelectProps['popupRender'], undefined>>(
    (nodes) => (
      <div ref={popupProxyDivRef} className={cns?.popupProxy} style={styles?.popupProxy}>
        {popupRender!(nodes, { close: changeOpen.bind(null, false) })}
      </div>
    ),
    [popupRender, cns?.popupProxy, styles?.popupProxy, changeOpen],
  );

  // 拦截原本的 onOpenChange
  const proxyOnOpenChange = useCallback(
    (v: boolean) => {
      if (!v) {
        return;
      }
      changeOpen(v);
    },
    [changeOpen],
  );

  useImperativeHandle(ref, () => selectRef.current!, []);

  return (
    <Select<ComputeValByModel<M, V>, ComputeOptionType<V, D>>
      ref={selectRef}
      showSearch={realShowSearch}
      {...rest}
      maxTagCount={maxTagCount === 'scroll' ? undefined : maxTagCount}
      classNames={cns}
      styles={styles}
      defaultOpen={popupRender || openIsControlled ? undefined : defaultOpen}
      open={popupRender ? realOpen : open}
      popupRender={popupRender ? proxyPopupRender : popupRender}
      onOpenChange={popupRender ? proxyOnOpenChange : onOpenChange}
      onChange={onChange as SelectProps<ComputeValByModel<M, V>, ComputeOptionType<V, D>>['onChange']}
      options={options}
      labelRender={labelRender ? realLabelRender : undefined}
      className={classNames(prefixCls, hashId, cssVarCls, { scroll: maxTagCount === 'scroll' }, props.className)}
      labelInValue={false}
    />
  );
}

const EnhancedSelect = forwardRef(InternalEnhanceSelect) as unknown as <
  V extends Val,
  D = undefined,
  M extends Model = undefined,
>(
  props: EnhancedSelectProps<V, D, M> & { ref?: Ref<RefSelectProps> },
) => React.ReactElement;

export default EnhancedSelect;
