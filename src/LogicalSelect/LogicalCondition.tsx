import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
import { EnhanceInput, EnhanceSelect } from 'antd-ext';
import {
  InternalLogicalSelectValueProps,
  LogicalSelectOption,
  LogicalSelectValidateContext,
  LogicalSelectValue,
  LogicalSelectValueRaw,
  LogicalSelectWidgetProps,
} from 'antd-ext/LogicalSelect/index';
import {
  parseConditionTypeOptions,
  defaultConditionTypeOptions,
  LogicalSelectConditionTypeEnum,
} from 'antd-ext/LogicalSelect/conditionType';
import { isEmpty, isNil } from 'antd-ext/utils/object';
import classNames from 'classnames';
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface ConditionProps
  extends InternalLogicalSelectValueProps {
  condition: LogicalSelectValueRaw;
  parentValue: LogicalSelectValue;
}

/**
 * 条件
 * @param props
 * @constructor
 */
export function LogicalCondition(props: ConditionProps) {
  const {
    onChange,
    options,
    condition,
    removeCondition,
    widgets,
    parentValue,
    value,
    hierarchy,
    level,
    renderConditionExtra,
    prefixCls,
  } = props;

  const optionList = useMemo(
    () => (typeof options === 'function' ? options(condition, value) : options),
    [condition, options, value],
  );

  const addCondition = useCallback(
    () => onChange({ symbol: 'or', conditions: [condition, {}] }),
    [condition, onChange],
  );
  const allowAddSon = useMemo(() => {
    if (isNil(hierarchy)) {
      return true;
    }
    if (Array.isArray(hierarchy)) {
      return hierarchy.length > level;
    }
    return hierarchy > level;
  }, [hierarchy, level]);
  const updateValue = useCallback(
    (v: unknown) => onChange({ ...condition, value: v }),
    [condition, onChange],
  );
  const changeOption = useCallback(
    (v: string) => {
      const { conditionTypeOptions } = parseConditionTypeOptions(optionInfo.conditionTypeOptions);
      onChange({
        ...condition,
        key: v,
        value: null,
        conditionType: conditionTypeOptions[0].value,
      });
    },
    [onChange],
  );
  const updateConditionType = useCallback(
    (v: LogicalSelectConditionTypeEnum) =>
      onChange({ ...condition, conditionType: v, value: null }),
    [onChange],
  );
  const [visButton, setVisButton] = useState(false);
  const addValidate = useContext(LogicalSelectValidateContext);
  const [valid, setValid] = useState(true);
  useEffect(() => {
    if (!valid) {
      setValid(true);
    }
    return addValidate(() => {
      const v = (condition as LogicalSelectValueRaw).value;
      const { key, conditionType } = condition;
      const temp = !(
        v === '' ||
        isNil(v) ||
        isNil(key) ||
        isNil(conditionType)
      );
      setValid(temp);
      return temp;
    });
  }, [JSON.stringify(condition)]);

  const optionInfo = useMemo<LogicalSelectOption>(() => {
    const find = optionList.find((v) => v.value === condition.key);
    if (!find) {
      const temp: LogicalSelectOption = {
        label: condition.key!,
        value: condition.key!,
        widgetProps: {},
        conditionTypeOptions: [LogicalSelectConditionTypeEnum.equal],
      };
      return temp;
    }
    return find!;
  }, [condition.key, optionList]);
  const { conditionType } = condition;
  const { Comp, conditionTypeOptions, compProps } = useMemo(() => {
    let Comp: FC<LogicalSelectWidgetProps> | null = null;
    let conditionTypeOptions = defaultConditionTypeOptions;
    let compProps = optionInfo.widgetProps;

    if (optionInfo.conditionTypeOptions?.length) {
      const { conditionTypeOptions: ct, configs } = parseConditionTypeOptions(optionInfo.conditionTypeOptions);
      conditionTypeOptions = ct;
      const find = configs.find(
        (v) => v.conditionType === condition.conditionType,
      );
      if (find) {
        Comp =
          typeof find.widget === 'string' ? widgets[find.widget] : find.widget;
        if (!Comp) {
          console.error(
            '[LogicalCondition] 组件不存在 condition = ',
            condition,
            'conditionTypeOptions 参数错误：',
            optionInfo.conditionTypeOptions,
          );
        }
        if (find.widgetProps) {
          compProps = { ...compProps, ...find.widgetProps };
        }
      }
    }

    if (!Comp) {
      if (optionInfo?.widget) {
        Comp =
          typeof optionInfo.widget === 'function'
            ? optionInfo.widget
            : widgets[optionInfo.widget];
      }
    }

    if (!Comp) {
      if (condition.key) {
        console.error('[LogicalCondition] 组件不存在 condition = ', condition);
      }
      Comp = widgets.Input;
    }
    return { Comp, conditionTypeOptions, compProps };
  }, [widgets, optionList, optionInfo, condition]);

  const { componentDisabled } = ConfigProvider.useConfig();
  return (
    <Flex
      gap={3}
      justify="start"
      align="center"
      className={`${prefixCls}-condition`}
      onMouseEnter={() => !componentDisabled && setVisButton(true)}
      onMouseLeave={() => !componentDisabled && setVisButton(false)}
    >
      <EnhanceSelect<string, undefined>
        dropdownStyle={{ minWidth: 230 }}
        {...optionInfo?.selectProps}
        className={classNames(
          `${prefixCls}-option`,
          { empty: isEmpty(condition.key) },
          optionInfo?.selectProps?.className,
        )}
        showSearch
        options={optionList}
        value={condition.key}
        onChange={changeOption}
      />
      <EnhanceSelect<LogicalSelectConditionTypeEnum, undefined>
        showSearch={false}
        suffixIcon={null}
        disabled={!condition.key || componentDisabled}
        className={`${prefixCls}-condition-type`}
        onChange={updateConditionType}
        value={conditionType}
        options={conditionTypeOptions}
        popupClassName={`${prefixCls}-condition-type-popup`}
        placeholder={condition.key ? null : '先选条件'}
      />
      {conditionType ? (
        <Comp
          {...compProps}
          disabled={componentDisabled}
          condition={condition}
          className={classNames(
            `${prefixCls}-value`,
            { empty: isEmpty(condition.value) },
            optionInfo?.widgetProps?.className as string,
          )}
          value={condition.value}
          onChange={updateValue}
        />
      ) : (
        <EnhanceInput
          disabled
          className={classNames(
            `${prefixCls}-value`,
            { empty: isEmpty(condition.value) },
            optionInfo?.widgetProps?.className as string,
          )}
          placeholder="先选运算符"
        />
      )}
      {!valid && (
        <Flex
          align="center"
          gap={2}
          className={`${prefixCls}-error`}
          wrap="nowrap"
        >
          <ExclamationCircleOutlined style={{ fontSize: '12px' }} />
          不能为空
        </Flex>
      )}
      {allowAddSon &&
        valid &&
        visButton &&
        (parentValue.conditions.length <= 1 ? (
          <Tooltip title="上级仅一个条件，不允许次级再增加">
            <Button
              disabled
              color="primary"
              size="small"
              variant="text"
              icon={<PlusOutlined style={{ fontSize: '12px' }} />}
            />
          </Tooltip>
        ) : (
          <Button
            color="primary"
            size="small"
            variant="text"
            onClick={addCondition}
            icon={<PlusOutlined style={{ fontSize: '12px' }} />}
          />
        ))}
      {visButton && (
        <Button
          color="danger"
          size="small"
          variant="text"
          onClick={removeCondition}
          icon={<DeleteOutlined style={{ fontSize: '12px' }} />}
        />
      )}
      {renderConditionExtra?.(condition)}
    </Flex>
  );
}
