import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  ConfigProvider,
  Empty,
  Flex,
  Form,
  FormItemProps,
  Space,
  Typography,
} from 'antd';
import { type EnhanceSelectProps } from 'antd-ext';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { useLocale } from 'antd/es/locale';
import classNames from 'classnames';
import React, {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  Ref,
  RefAttributes,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cloneDeep, isNil } from '../utils/object';
import { LogicalCondition } from './LogicalCondition';
import LogicalSymbolSelect, { LogicalSymbol } from './LogicalSymbolSelect';
import {
  ConditionTypeOptionsObject,
  getConditionDefaultValue,
  LogicalSelectConditionTypeEnum,
} from './conditionType';
import { zhCN } from './locale';
import useStyle from './style';
import { LogicalSelectDefaultWidgets } from './widget';

export interface InternalLogicalSelectValueProps {
  options:
    | LogicalSelectOption[]
    | ((
        condition: LogicalSelectValueRaw,
        value: LogicalSelectValue,
      ) => LogicalSelectOption[]);
  value: LogicalSelectValue;
  onChange: (value: LogicalSelectValue | LogicalSelectValueRaw) => void;
  removeCondition?: () => void;
  widgets: Record<string, FC<LogicalSelectWidgetProps>>;
  isRoot?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 当前节点路径，根为 []，第 i 条为 [i]，依次类推
   */
  path: number[];
  /**
   * 控制逻辑选择器的层级，<br/>
   * hierarchy = 0 ，则表示不允许添加子条件<br/>
   * hierarchy = 1 ，则表示允许添加子条件，但只能嵌套一层<br/>
   * hierarchy = 2 ，则表示允许添加子条件，根 > 子 > 孙 <br/>
   * hierarchy = ['and', 'or']，则表示允许添加子条件，根 > 子  ，且 根下的都是 and, 子 下的都是 or <br/>
   * hierarchy = ['and', null]，则表示允许添加子条件，根 > 子  ，且 根下的都是 and, 子 下的可选择 <br/>
   */
  hierarchy?: number | (LogicalSymbol | null)[];
  level: number;
  renderConditionExtra?: (value: LogicalSelectValueRaw) => React.ReactNode;
  prefixCls: string;
}

export interface LogicalSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  widget?: string | FC<LogicalSelectWidgetProps>;
  widgetProps?: Record<string, unknown>;
  /**
   * 可选：自定义值校验（优先级高于默认非空校验）
   */
  verification?: (
    value: unknown,
    rootValue: LogicalSelectValue,
    condition: LogicalSelectValueRaw,
  ) => boolean;
  selectProps?: Omit<
    EnhanceSelectProps<string>,
    'showSearch' | 'options' | 'value' | 'onChange'
  >;
  conditionTypeOptions?: (
    | LogicalSelectConditionTypeEnum
    | ConditionTypeOptionsObject
  )[];
}

export interface LogicalSelectValue {
  symbol: LogicalSymbol;
  conditions: (LogicalSelectValueRaw | LogicalSelectValue)[];
  data?: unknown;
}

export interface LogicalSelectValueRaw {
  key?: string;
  value?: unknown;
  data?: unknown;
  conditionType?: LogicalSelectConditionTypeEnum;
}

export interface LogicalSelectWidgetProps<T = unknown>
  extends Record<string, unknown> {
  value: T;
  condition?: unknown;
  disabled?: boolean;
  onChange: (value: T) => void;
  className?: string;
  size?: SizeType;
}

/**
 * 逻辑选择器
 * @constructor
 */
function InternalLogicalSelect(props: InternalLogicalSelectValueProps) {
  const {
    value,
    onChange,
    options,
    removeCondition,
    widgets,
    isRoot,
    className,
    style,
    path,
    hierarchy,
    level,
    renderConditionExtra,
    prefixCls,
  } = props;
  const { componentDisabled } = ConfigProvider.useConfig();
  const [locale] = useLocale('LogicalSelect', zhCN);
  const runtimeCtx = useContext(LogicalSelectRuntimeContext);
  const change = useCallback(
    (index: number, newValue: LogicalSelectValue | LogicalSelectValueRaw) =>
      onChange({
        ...value,
        conditions: value.conditions.map((v, i) => {
          if (index === i) {
            return newValue;
          }
          return v;
        }),
      }),
    [onChange, value],
  );
  const addCondition = useCallback(() => {
    const optionList = runtimeCtx.getOptions(path);
    const sourceOptions =
      optionList && optionList.length
        ? optionList
        : typeof options === 'function'
        ? options({}, value)
        : options;
    const def = getConditionDefaultValue(sourceOptions, value);
    onChange({ ...value, conditions: value.conditions.concat([def]) });
  }, [onChange, value, runtimeCtx, path, options]);
  const removeSonCondition = useCallback(
    (index: number) => {
      const conditions = value.conditions.filter((_, i) => i !== index);
      if (conditions.length === 0) {
        removeCondition?.();
      } else if (conditions.length === 1 && !isRoot) {
        onChange(conditions[0]);
      } else {
        onChange({ ...value, conditions });
      }
    },
    [removeCondition, onChange, value, isRoot],
  );

  const fixedSymbol = useMemo(() => {
    if (!Array.isArray(hierarchy)) {
      return null;
    }
    return hierarchy[level] || null;
  }, []);

  const { componentSize } = ConfigProvider.useConfig();
  return (
    <Space
      size={componentSize}
      direction="vertical"
      className={className}
      style={{ width: '100%', ...style }}
    >
      <Flex gap={3}>
        {value.conditions.length > 1 && (
          <LogicalSymbolSelect
            prefixCls={prefixCls}
            disabled={Boolean(fixedSymbol)}
            value={fixedSymbol ? fixedSymbol : value.symbol}
            onChange={(v) => onChange({ ...value, symbol: v })}
          />
        )}
        <Space
          size={componentSize}
          direction="vertical"
          className={`${prefixCls}-conditions`}
        >
          {value.conditions.map((condition, index) => {
            if ((condition as LogicalSelectValue).symbol) {
              return (
                <InternalLogicalSelect
                  prefixCls={prefixCls}
                  renderConditionExtra={renderConditionExtra}
                  level={level + 1}
                  hierarchy={hierarchy}
                  key={index.toString()}
                  widgets={widgets}
                  value={condition as LogicalSelectValue}
                  options={options}
                  onChange={change.bind(null, index)}
                  removeCondition={removeSonCondition.bind(null, index)}
                  path={path.concat(index)}
                />
              );
            }
            return (
              <LogicalCondition
                prefixCls={prefixCls}
                renderConditionExtra={renderConditionExtra}
                level={level + 1}
                hierarchy={hierarchy}
                parentValue={value}
                widgets={widgets}
                key={
                  (condition as LogicalSelectValueRaw)?.key + index.toString()
                }
                condition={condition as LogicalSelectValueRaw}
                onChange={change.bind(null, index)}
                value={value}
                options={options}
                removeCondition={removeSonCondition.bind(null, index)}
                path={path.concat(index)}
              />
            );
          })}
        </Space>
      </Flex>
      {!componentDisabled && (
        <Button
          color="primary"
          size="small"
          variant="text"
          onClick={addCondition}
        >
          {locale.add}
        </Button>
      )}
    </Space>
  );
}

const EMPTY: LogicalSelectValue = { symbol: 'and', conditions: [{}] };

export interface LogicalSelectRef {
  validate: () => ValidateResult;
}

export interface LogicalSelectProps
  extends Omit<
    InternalLogicalSelectValueProps,
    | 'level'
    | 'removeCondition'
    | 'onChange'
    | 'value'
    | 'isRoot'
    | 'prefixCls'
    | 'widgets'
    | 'path'
  > {
  onChange?: (value: LogicalSelectValue | null) => void;
  value?: LogicalSelectValue | null;
  defaultValue?: LogicalSelectValue | null;
  // onRemoveRootCondition?: () => void;
  disabled?: boolean;
  renderEmpty?: () => React.ReactNode;
  prefixCls?: string;
  widgets?: InternalLogicalSelectValueProps['widgets'];
  onValidate?: (result: ValidateResult) => void;
  size?: SizeType;
}

export interface ErrorItem {
  code: string;
  message: string;
}

export interface ValidateResult {
  valid: boolean;
  errors: Array<{ path: number[]; code: string; message: string }>;
  errorsByPath: Record<string, ErrorItem[]>;
}

// 内部使用的校验元信息（包含 optionsByPath）
export interface ValidateMeta extends ValidateResult {
  optionsByPath: Record<string, LogicalSelectOption[]>;
}

export const LogicalSelectRuntimeContext = React.createContext<{
  getOptions: (path: number[]) => LogicalSelectOption[];
  getErrors: (path: number[]) => ErrorItem[] | undefined;
}>({
  getOptions: () => [],
  getErrors: () => undefined,
});

function isGroup(
  v: LogicalSelectValue | LogicalSelectValueRaw,
): v is LogicalSelectValue {
  return (v as LogicalSelectValue).symbol !== undefined;
}

function pathKey(path: number[]): string {
  return path.join('.');
}

function getOptionList(
  options:
    | LogicalSelectOption[]
    | ((
        condition: LogicalSelectValueRaw,
        value: LogicalSelectValue,
      ) => LogicalSelectOption[]),
  cond: LogicalSelectValueRaw,
  root: LogicalSelectValue,
): LogicalSelectOption[] {
  return typeof options === 'function' ? options(cond, root) : options;
}

export function validateTree(
  root: LogicalSelectValue | null | undefined,
  options:
    | LogicalSelectOption[]
    | ((
        condition: LogicalSelectValueRaw,
        value: LogicalSelectValue,
      ) => LogicalSelectOption[]),
): ValidateMeta {
  const optionsByPath: Record<string, LogicalSelectOption[]> = {};
  const errorsByPath: Record<string, ErrorItem[]> = {};
  const errors: Array<{ path: number[]; code: string; message: string }> = [];

  if (!root) {
    return { valid: true, errors, errorsByPath, optionsByPath } as ValidateMeta;
  }

  const walk = (
    node: LogicalSelectValue | LogicalSelectValueRaw,
    path: number[],
  ) => {
    if (isGroup(node)) {
      const group = node as LogicalSelectValue;
      // 为分组节点也记录一份可用于新增子条件的选项列表
      const k = pathKey(path);
      const groupOpts = getOptionList(
        options,
        {} as LogicalSelectValueRaw,
        root,
      );
      optionsByPath[k] = groupOpts;
      if (!Array.isArray(group.conditions) || group.conditions.length === 0) {
        const item = { path, code: 'empty-group', message: '分组不能为空' };
        errors.push(item);
        errorsByPath[k] = (errorsByPath[k] || []).concat([
          { code: item.code, message: item.message },
        ]);
      }
      group.conditions.forEach((child, i) =>
        walk(child as any, path.concat(i)),
      );
      return;
    }
    const cond = node as LogicalSelectValueRaw;
    const k = pathKey(path);
    // 解析选项
    const opts = getOptionList(options, cond, root);
    optionsByPath[k] = opts;

    // 结构校验
    if (isNil(cond.key)) {
      const item = { path, code: 'missing-key', message: '未选择字段' };
      errors.push(item);
      errorsByPath[k] = (errorsByPath[k] || []).concat([
        { code: item.code, message: item.message },
      ]);
    }
    if (isNil(cond.conditionType)) {
      const item = { path, code: 'missing-operator', message: '未选择运算符' };
      errors.push(item);
      errorsByPath[k] = (errorsByPath[k] || []).concat([
        { code: item.code, message: item.message },
      ]);
    }

    // 值校验（优先使用 widgetProps.verification）
    const opt = opts?.find((o) => o.value === cond.key);
    const verifier = opt?.verification as
      | ((
          value: unknown,
          rootValue: LogicalSelectValue,
          condition: LogicalSelectValueRaw,
        ) => boolean)
      | undefined;
    const isEmpty = (v: unknown) => v === '' || isNil(v);
    const valueOk = verifier
      ? verifier(cond.value, root, cond)
      : !isEmpty(cond.value);
    if (!valueOk) {
      const item = { path, code: 'invalid-value', message: '值不合法' };
      errors.push(item);
      errorsByPath[k] = (errorsByPath[k] || []).concat([
        { code: item.code, message: item.message },
      ]);
    }
  };

  walk(root, []);
  return {
    valid: errors.length === 0,
    errors,
    errorsByPath,
    optionsByPath,
  } as ValidateMeta;
}

const InternalLogical = (
  props: LogicalSelectProps,
  ref: Ref<LogicalSelectRef>,
) => {
  const {
    widgets,
    value,
    defaultValue,
    onChange,
    options,
    className,
    disabled,
    renderEmpty,
    prefixCls: customizePrefixCls,
    size,
    ...rest
  } = props;
  const widgetsObj = useMemo<Record<string, FC<LogicalSelectWidgetProps>>>(
    () => ({ ...LogicalSelectDefaultWidgets, ...widgets }),
    [widgets],
  );

  const isControlled = value !== undefined;

  const [val, setVal] = useState<LogicalSelectValue | null>(
    (isControlled ? value : defaultValue) || null,
  );

  const realValue = isControlled ? value : val;

  const [optionsByPath, setOptionsByPath] = useState<
    Record<string, LogicalSelectOption[]>
  >({});
  const [errorsByPath, setErrorsByPath] = useState<Record<string, ErrorItem[]>>(
    {},
  );

  const doValidate = useCallback((): ValidateResult => {
    const meta = validateTree(realValue, options);
    setOptionsByPath(meta.optionsByPath);
    setErrorsByPath(meta.errorsByPath);
    const result: ValidateResult = {
      valid: meta.valid,
      errors: meta.errors,
      errorsByPath: meta.errorsByPath,
    };
    props.onValidate?.(result);
    return result;
  }, [realValue, options]);

  const onValueChange = useCallback(
    (v: LogicalSelectValue | LogicalSelectValueRaw) => {
      if (!isControlled) {
        setVal(v as LogicalSelectValue);
      }
      onChange?.(v as LogicalSelectValue);
    },
    [onChange, isControlled, doValidate],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      validate: () => doValidate(),
    }),
    [doValidate, realValue],
  );

  const onRemoveRootCondition = useCallback(() => {
    setVal(null);
    onChange?.(null);
  }, []);

  const addCondition = useCallback(() => {
    const lv = cloneDeep(EMPTY);
    lv.conditions[0] = getConditionDefaultValue(options, lv);
    if (!isControlled) {
      setVal(lv);
    }
    onChange?.(lv);
  }, [onChange]);
  const { componentDisabled } = ConfigProvider.useConfig();
  const emptyNode = useMemo(() => {
    if (realValue) {
      return null;
    }
    const node = renderEmpty ? renderEmpty() : <Empty />;
    if (typeof node === 'object') {
      return node;
    }
    return <Typography.Text type="secondary">{node}</Typography.Text>;
  }, [renderEmpty, realValue]);

  const configContext = useContext(ConfigProvider.ConfigContext);
  const prefixCls = configContext.getPrefixCls(
    'logical-select',
    customizePrefixCls,
  );
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  const prevControlledValueRef = useRef<LogicalSelectValue | null>();
  useEffect(() => {
    if (realValue !== prevControlledValueRef.current) {
      prevControlledValueRef.current = realValue;
      doValidate();
    }
  }, [realValue, doValidate]);

  if (isNil(realValue)) {
    return wrapCSSVar(
      <Space
        direction="vertical"
        className={classNames(prefixCls, hashId, cssVarCls, className)}
      >
        {emptyNode}
        {!disabled && (
          <Button
            color="primary"
            size="small"
            variant="text"
            onClick={addCondition}
          >
            <PlusOutlined style={{ fontSize: '12px' }} />
            添加
          </Button>
        )}
      </Space>,
    );
  }
  return wrapCSSVar(
    <ConfigProvider
      componentDisabled={disabled || componentDisabled}
      componentSize={size}
    >
      <LogicalSelectRuntimeContext.Provider
        value={{
          getOptions: (p: number[]) => optionsByPath[p.join('.')] || [],
          getErrors: (p: number[]) => errorsByPath[p.join('.')],
        }}
      >
        <InternalLogicalSelect
          {...rest}
          prefixCls={prefixCls}
          options={options}
          className={classNames(prefixCls, hashId, cssVarCls, className)}
          widgets={widgetsObj}
          value={realValue!}
          onChange={onValueChange}
          removeCondition={onRemoveRootCondition}
          isRoot={true}
          level={0}
          path={[]}
        />
      </LogicalSelectRuntimeContext.Provider>
    </ConfigProvider>,
  );
};

/**
 * 逻辑选择器
 */
const LogicalSelect = forwardRef<LogicalSelectRef, LogicalSelectProps>(
  InternalLogical,
) as unknown as ForwardRefExoticComponent<
  PropsWithoutRef<LogicalSelectProps> & RefAttributes<LogicalSelectRef>
> & { FormItem: typeof LogicalConditionFormItem };

export interface LogicalConditionFormItemProps
  extends Omit<LogicalSelectProps, 'value' | 'onChange' | 'defaultValue'> {
  name: any;
  /** 启用自带校验（默认开启） */
  enableValidate?: boolean;
  /** 追加自定义表单规则 */
  rules?: any[];
  formItemProps?: Omit<FormItemProps<LogicalSelectValue>, 'name' | 'rules'>;
}

export const LogicalConditionFormItem = forwardRef<
  LogicalSelectRef,
  LogicalConditionFormItemProps
>((props, ref) => {
  const {
    name,
    enableValidate = true,
    rules,
    formItemProps,
    ...rest
  } = props as any;
  const localRef = useRef<LogicalSelectRef>();
  const validatorRule = useMemo(
    () =>
      enableValidate
        ? [
            {
              validator: async () => {
                const result = localRef.current!.validate();
                if (!result.valid) {
                  throw new Error(result.errors[0].message);
                }
              },
            },
          ]
        : [],
    [enableValidate],
  );

  useImperativeHandle(ref, () => localRef.current!);

  const mergedRules = Array.isArray(rules)
    ? [...rules, ...validatorRule]
    : validatorRule;
  return (
    <Form.Item {...formItemProps} name={name} rules={mergedRules}>
      {/* 使用内部导出的组件以避免循环依赖 */}
      <InternalLogical {...rest} ref={localRef} />
    </Form.Item>
  );
});

LogicalSelect.FormItem = LogicalConditionFormItem;

export default LogicalSelect;
