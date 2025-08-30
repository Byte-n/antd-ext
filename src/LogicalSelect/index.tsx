import { PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Space, Typography } from 'antd';
import { type EnhanceSelectProps } from 'antd-ext';
import useStyle from './style';
import { LogicalCondition } from './LogicalCondition';
import {
  getConditionDefaultValue, ConditionTypeOptionsObject, LogicalSelectConditionTypeEnum,
} from './conditionType';
import { LogicalSelectDefaultWidgets } from './widget';
import classNames from 'classnames';
import React, {
  FC,
  forwardRef,
  Ref,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cloneDeep } from '../utils/object';
import LogicalSymbolSelect, { LogicalSymbol } from './LogicalSymbolSelect';

export interface InternalLogicalSelectValueProps {
  options:
    | LogicalSelectOption[]
    | ((
        condition: LogicalSelectValueRaw,
        value: LogicalSelectValue,
      ) => LogicalSelectOption[]);
  value: LogicalSelectValue;
  onChange: (
    value: LogicalSelectValue | LogicalSelectValueRaw,
  ) => void;
  removeCondition?: () => void;
  widgets: Record<string, FC<LogicalSelectWidgetProps>>;
  isRoot?: boolean;
  className?: string;
  style?: React.CSSProperties;
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
  renderConditionExtra?: (
    value: LogicalSelectValueRaw,
  ) => React.ReactNode;
  prefixCls: string,
}

export interface LogicalSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  widget?: string | FC<LogicalSelectWidgetProps<unknown>>;
  widgetProps?: Record<string, unknown>;
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
    hierarchy,
    level,
    renderConditionExtra,
    prefixCls,
  } = props;
  const { componentDisabled } = ConfigProvider.useConfig();
  const change = useCallback(
    (
      index: number,
      newValue: LogicalSelectValue | LogicalSelectValueRaw,
    ) =>
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
    const def = getConditionDefaultValue(options, value);
    onChange({ ...value, conditions: value.conditions.concat([def]) });
  }, [onChange, value]);
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
  return (
    <Space
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
        <Space size={3} direction="vertical" className={`${prefixCls}-conditions`}>
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
                  (condition as LogicalSelectValueRaw)?.key +
                  index.toString()
                }
                condition={condition as LogicalSelectValueRaw}
                onChange={change.bind(null, index)}
                value={value}
                options={options}
                removeCondition={removeSonCondition.bind(null, index)}
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
          添加
        </Button>
      )}
    </Space>
  );
}

const EMPTY: LogicalSelectValue = { symbol: 'and', conditions: [{}] };

export interface LogicalSelectRef {
  validate: () => boolean;
  getValue: () => LogicalSelectValue | null;
}

export interface LogicalSelectProps
  extends Omit<
    InternalLogicalSelectValueProps,
    'level' | 'removeCondition' | 'onChange' | 'value' | 'isRoot' | 'prefixCls' | 'widgets'
  > {
  onChange?: (value: LogicalSelectValue | null) => void;
  value?: LogicalSelectValue | null;
  defaultValue?: LogicalSelectValue | null;
  validateTrigger?: 'none' | 'change';
  // onRemoveRootCondition?: () => void;
  disabled?: boolean;
  renderEmpty?: () => React.ReactNode;
  prefixCls?: string;
  widgets?: InternalLogicalSelectValueProps['widgets']
}

export const LogicalSelectValidateContext = React.createContext(
  (_: () => boolean): VoidFunction =>
    () =>
      void 0,
);

const InternalLogical = (props: LogicalSelectProps, ref: Ref<LogicalSelectRef>) => {
    const {
      widgets,
      value,
      defaultValue,
      onChange,
      options,
      validateTrigger,
      className,
      disabled,
      renderEmpty,
      prefixCls: customizePrefixCls,
      ...rest
    } = props;
    const widgetsObj = useMemo<
      Record<string, FC<LogicalSelectWidgetProps>>
    >(() => ({ ...LogicalSelectDefaultWidgets, ...widgets }), [widgets]);
    const [val, setVal] = useState<LogicalSelectValue | null>(
      value || defaultValue || null,
    );

    const isControlled = value !== undefined;
    const realValue = isControlled ? value : val;

    const onValueChange = useCallback(
      (v: LogicalSelectValue | LogicalSelectValueRaw) => {
        if (!isControlled) {
          setVal(v as LogicalSelectValue);
        }
        onChange?.(v as LogicalSelectValue);
        if (validateTrigger === 'change') {
          setValidateIdx((i) => i + 1);
        }
      },
      [onChange, validateTrigger, isControlled],
    );

    const validateListRef = React.useRef<(() => boolean)[]>([]);
    const addValidateRef = useRef((v: () => boolean) => {
      validateListRef.current.push(v);
      return () => {
        validateListRef.current = validateListRef.current.filter(
          (i) => i !== v,
        );
      };
    });
    const validate = useRef(() => validateListRef.current.every((v) => v()));
    React.useImperativeHandle(
      ref,
      () => ({
        validate: validate.current,
        getValue: () => realValue,
      }),
      [],
    );
    const [validateIdx, setValidateIdx] = useState(0);
    useEffect(() => {
      validate.current();
    }, [validateIdx]);

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
      const node = renderEmpty ? renderEmpty() : '规则为空';
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

    if (!realValue) {
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
      <ConfigProvider componentDisabled={disabled || componentDisabled}>
        <LogicalSelectValidateContext.Provider value={addValidateRef.current}>
          <InternalLogicalSelect
            {...rest}
            prefixCls={prefixCls}
            options={options}
            className={classNames(prefixCls, hashId, cssVarCls, className)}
            widgets={widgetsObj}
            value={realValue}
            onChange={onValueChange}
            removeCondition={onRemoveRootCondition}
            isRoot={true}
            level={0}
          />
        </LogicalSelectValidateContext.Provider>
      </ConfigProvider>,
    );
  }

/**
 * 逻辑选择器
 */
export default forwardRef<LogicalSelectRef, LogicalSelectProps>(InternalLogical)
