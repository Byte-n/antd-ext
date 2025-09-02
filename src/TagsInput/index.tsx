import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  App,
  Button,
  ConfigProvider,
  Flex,
  Input,
  InputProps,
  Modal,
  Space,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { useLocale } from 'antd/es/locale';
import classNames from 'classnames';
import React, {
  ClipboardEventHandler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useComponentFactory, {
  UseComponentProps,
} from '../hooks/useComponentFactory';
import useStyle from './style';
import usePrevious from 'antd/es/typography/hooks/usePrevious';
import { zhCN } from './locale';

export type TagType<T extends 'text' | 'numeric'> = T extends 'numeric'
  ? number
  : string;

type DisplayTag<T extends 'text' | 'numeric'> =
  | TagType<T>
  | { type: 'ellipsis'; count: number };

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
  inputProps?: Omit<
    InputProps,
    'value' | 'onChange' | 'onKeyDown' | 'placeholder' | 'suffix' | 'size'
  >;
  prefixCls?: string;
  size?: SizeType;
}

/**
 * Tags Input
 * @param props
 * @constructor
 */
function TagsInput<T extends 'text' | 'numeric' = 'text'>(
  props: TagsInputProps<T>,
) {
  const [locale] = useLocale('TagsInput', zhCN);
  const {
    className,
    style,
    placeholder = locale.placeholder,
    value,
    defaultValue = [],
    onChange,
    maxCount = 200,
    maxDisplayCount = 2,
    type = 'text' as T,
    prefixCls: customizePrefixCls,
    inputProps,
    size,
  } = props;

  const [renderModal, comp] = useComponentFactory();

  const configContext = useContext(ConfigProvider.ConfigContext);
  const prefixCls = configContext.getPrefixCls(
    'tags-input',
    customizePrefixCls,
  );
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  // 判断是否为受控模式
  const isControlled = value !== undefined;

  // 状态管理
  const [inputValue, setInputValue] = useState<TagType<T>[]>(
    defaultValue as TagType<T>[],
  );
  const [currentInput, setCurrentInput] = useState<string>('');
  const [inputTooltipTitle, setInputTooltipTitle] = useState<string>('');

  const realValue = isControlled ? value : inputValue;

  // 更新Tags
  const updateTags = useCallback(
    (tags: TagType<T>[]) => {
      if (!isControlled) {
        setInputValue(tags);
      }
      onChange?.(tags);
    },
    [isControlled, onChange],
  );

  // 移除Tag
  const removeTag = useCallback(
    (tagToRemove: TagType<T>) => {
      updateTags(realValue.filter((tag) => tag !== tagToRemove));
    },
    [realValue, updateTags],
  );

  // 添加单个Tag
  const addTag = useCallback(
    (input: string) => {
      const trimmedInput = input.trim();
      if (!trimmedInput) {
        return false;
      }

      let tagValue: TagType<T>;

      if (type === 'numeric') {
        const numValue = Number(trimmedInput);
        if (Number.isNaN(numValue)) {
          setInputTooltipTitle(locale.invalidNumber);
          return false;
        }
        tagValue = numValue as TagType<T>;
      } else {
        tagValue = trimmedInput as TagType<T>;
      }

      if (realValue.includes(tagValue)) {
        setInputTooltipTitle(
          locale.duplicateItem.replace('${item}', currentInput),
        );
        return false;
      }

      if (realValue.length >= maxCount) {
        setInputTooltipTitle(
          locale.maxCountLimit.replace('${maxCount}', maxCount.toString()),
        );
        return false;
      }

      updateTags([...realValue, tagValue]);
      return true;
    },
    [realValue, maxCount, updateTags, currentInput, type],
  );

  // 处理回车事件
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (!currentInput) {
          return;
        }
        if (addTag(currentInput)) {
          setCurrentInput('');
          setInputTooltipTitle('');
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
      } else if (
        e.key === 'Backspace' &&
        !currentInput &&
        realValue.length > 0
      ) {
        // 当输入为空且存在 Tags 时，按下回退键删除最后一个 Tag
        const lastTag = realValue[realValue.length - 1];
        removeTag(lastTag);
        return;
      }
    },
    [currentInput, addTag, realValue, removeTag],
  );

  const onPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const ids = _convertPasteText2Ids(e.clipboardData, type);
      if (!ids) {
        return;
      }
      let list = typeof realValue === 'string' ? ids : [...realValue, ...ids];
      list = Array.from(new Set(list));
      if (realValue.length >= maxCount) {
        setInputTooltipTitle(
          locale.maxCountLimitIgnore.replace(
            '${maxCount}',
            maxCount.toString(),
          ),
        );
        list = list.slice(0, maxCount);
      }
      updateTags(list);
      e.preventDefault();
      return false;
    },
    [realValue],
  );

  // 清空所有Tag
  const clearAll = useCallback(() => {
    updateTags([]);
  }, [updateTags]);

  // 计算显示的Tags
  const displayTags = useMemo((): DisplayTag<T>[] => {
    if (maxDisplayCount === 0) {
      // 当 maxDisplayCount 为 0 时，只显示省略号
      return realValue.length > 0
        ? [{ type: 'ellipsis', count: realValue.length }]
        : [];
    }

    if (realValue.length <= maxDisplayCount) {
      return realValue;
    }

    // 当超过最大显示数量时，显示前 maxDisplayCount - 1 个，省略号，最后一个
    const visibleCount = maxDisplayCount - 1;
    const hiddenCount = realValue.length - maxDisplayCount;
    const lastTag = realValue[realValue.length - 1];

    return [
      ...realValue.slice(0, visibleCount),
      { type: 'ellipsis', count: hiddenCount },
      lastTag,
    ];
  }, [realValue, maxDisplayCount]);

  // 自动清除 Tooltip 提示
  useEffect(() => {
    if (inputTooltipTitle) {
      const timer = setTimeout(() => {
        setInputTooltipTitle('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [inputTooltipTitle]);

  const showEditModal = useCallback(() => {
    renderModal(BatchInputModal<T>, {
      onFinished: updateTags,
      defaultValue: realValue,
      maxCount,
      size,
      type,
    });
  }, [updateTags, realValue, maxCount, type]);
  return wrapCSSVar(
    <Flex
      align="center"
      wrap="nowrap"
      className={classNames(prefixCls, hashId, cssVarCls, size, className)}
      style={style}
    >
      {realValue.length > 0 &&
        displayTags.map((tag, index) => {
          // 处理省略号对象
          if (typeof tag === 'object' && tag.type === 'ellipsis') {
            return (
              <Tooltip key={`ellipsis-${index}`} title={locale.batchInput}>
                <Tag
                  color="blue"
                  className="tag-item ellipsis-tag"
                  onClick={showEditModal}
                >
                  {locale.ellipsisCount.replace(
                    '${count}',
                    tag.count.toString(),
                  )}
                </Tag>
              </Tooltip>
            );
          }

          return (
            <Tag
              key={`${tag}-${index}`}
              closable
              onClose={() => removeTag(tag as TagType<T>)}
              className="tag-item"
            >
              {String(tag)}
            </Tag>
          );
        })}

      <Tooltip
        title={inputTooltipTitle}
        open={Boolean(inputTooltipTitle)}
        placement="topLeft"
      >
        <Input
          {...inputProps}
          size={size}
          className="field"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onPaste={onPaste}
          suffix={
            <Space size={size}>
              {realValue.length > 0 && (
                <Tooltip title={locale.clearAll}>
                  <Button
                    type="text"
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={clearAll}
                  />
                </Tooltip>
              )}
              <Tooltip title={locale.batchInput}>
                <Button
                  type="text"
                  size="small"
                  icon={<EditOutlined />}
                  onClick={showEditModal}
                />
              </Tooltip>
              <Typography.Text type="secondary">
                {realValue?.length}/{maxCount}
              </Typography.Text>
            </Space>
          }
        />
      </Tooltip>
      {comp}
    </Flex>,
  );
}

export default TagsInput;

/**
 * 批量输入弹窗
 */
function BatchInputModal<T extends 'text' | 'numeric' = 'text'>(
  props: UseComponentProps & {
    onFinished?: (data: TagType<T>[]) => void; // 完成时回调，传入Tag数组
    defaultValue?: TagType<T>[]; // 默认Tag数组
    maxCount?: number; // 最大Tag数量
    type?: T; // 输入类型
    size?: SizeType;
  },
) {
  const [locale] = useLocale('TagsInput', zhCN);
  const {
    onClose,
    onFinished,
    maxCount = 200,
    type = 'text' as T,
    size,
  } = props;
  const { message } = App.useApp();
  const [error, setError] = useState<string | null>();
  const [data, setData] = useState<TagType<T>[]>([]);
  const [text, setText] = useState<string>();
  const [rowCount, setRowCount] = useState(0);

  // 动态生成占位符文本
  const typeHint =
    type === 'numeric' ? locale.numericTypeHint : locale.textTypeHint;
  const dynamicPlaceholder = locale.dynamicPlaceholder
    .replace('${typeHint}', typeHint)
    .replace('${maxCount}', maxCount.toString());

  const handleConfirm = useCallback(
    (showTips?: boolean) => {
      if (!showTips) {
        onFinished?.(data.filter((v, i, arr) => arr.indexOf(v) === i));
        onClose();
        return;
      }

      // 获取重复的项目
      const repeat = data.filter((v, i, arr) => arr.indexOf(v) !== i);
      if (repeat.length) {
        message.warning(
          locale.duplicateItemRemoved.replace('${items}', repeat.join(',')),
        );
        check(data.filter((v, i, arr) => arr.indexOf(v) === i).join('\n'));
        return;
      }

      onFinished?.(data);
      onClose();
    },
    [data, onFinished, onClose, message],
  );

  const check = useCallback(
    (inputText?: string) => {
      if (!inputText?.trim()) {
        setRowCount(0);
        setText('');
        setData([]);
        return;
      }

      // 获取text最后一字符
      const lastChar = inputText.charAt(inputText.length - 1);
      const rows = inputText
        .split('\n')
        .map((v) => v.trim())
        .filter((v) => v);

      let processedRows: TagType<T>[] = [];
      let hasError = false;
      let errorMessage = '';

      if (type === 'numeric') {
        // 数字类型验证
        const numRows = rows.map((v) => ({ text: v, num: Number(v) }));
        const invalidIndex = numRows.findIndex((v) => Number.isNaN(v.num));

        if (invalidIndex !== -1) {
          hasError = true;
          errorMessage = locale.invalidNumberRow.replace(
            '${text}',
            numRows[invalidIndex].text,
          );
          setText(inputText);
        } else {
          processedRows = numRows.map((v) => v.num) as TagType<T>[];
        }
      } else {
        // 文本类型，直接使用
        processedRows = rows as TagType<T>[];
      }

      setRowCount(rows.length);

      if (hasError) {
        setError(errorMessage);
        return;
      }

      if (rows.length > maxCount) {
        setError(
          locale.maxCountLimitTruncated.replace(
            '${maxCount}',
            maxCount.toString(),
          ),
        );
        setText(
          rows.slice(0, maxCount).join('\n') + (lastChar === '\n' ? '\n' : ''),
        );
        processedRows = processedRows.slice(0, maxCount);
      } else {
        setError(null);
        setText(rows.join('\n') + (lastChar === '\n' ? '\n' : ''));
      }

      setData(processedRows);
    },
    [maxCount, type],
  );

  useEffect(() => {
    if (props.defaultValue) {
      check(props.defaultValue.join('\n'));
    }
  }, [check]);

  return (
    <Modal
      title={dynamicPlaceholder}
      open={true}
      footer={null}
      maskClosable
      onCancel={handleConfirm.bind(null, false)}
      width={600}
    >
      <Space direction="vertical" size={size} style={{ width: '100%' }}>
        <Input.TextArea
          allowClear
          autoSize={{ minRows: 10, maxRows: 20 }}
          placeholder={dynamicPlaceholder}
          value={text}
          onChange={(e) => check(e.target.value)}
        />
        {error && <Typography.Text type="danger">{error}</Typography.Text>}
        <Space
          direction="vertical"
          className="modal-footer"
          style={{ width: '100%' }}
        >
          <Typography.Text>
            {locale.rowsCountInfo
              .replace('${rows}', locale.rows)
              .replace('${rowCount}', rowCount.toString())
              .replace('${maxCount}', maxCount.toString())}
          </Typography.Text>
          <Flex justify="end">
            <Space size={size}>
              <Button onClick={handleConfirm.bind(null, false)}>
                {locale.cancel}
              </Button>
              <Button type="primary" onClick={handleConfirm.bind(null, true)}>
                {locale.confirm}
              </Button>
            </Space>
          </Flex>
        </Space>
      </Space>
    </Modal>
  );
}

export type TextOrNumericListValue = number[] | string;

interface TextOrNumericListProps
  extends Omit<
    InputProps,
    'value' | 'defaultValue' | 'onChange'  | 'onKeyDown'
  > {
  value?: TextOrNumericListValue;
  defaultValue?: TextOrNumericListValue;
  onChange?: (v: TextOrNumericListValue) => void;
  tagsInputProps?: Omit<
    TagsInputProps<'numeric'>,
    'defaultValue' | 'value' | 'onChange' | 'type' | 'style' | 'className' | 'placeholder'
  >;
}

TagsInput.TextOrNumericList = TextOrNumericList;

/**
 * 输入文本 或 数值列表的组件
 * @param props
 * @constructor
 */
function TextOrNumericList(props: TextOrNumericListProps) {
  const [locale] = useLocale('TagsInput', zhCN);
  const {
    value,
    defaultValue,
    onChange,
    className,
    style,
    tagsInputProps,
    placeholder = locale.inputIdOrName,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState<TextOrNumericListValue>(
    defaultValue || '',
  );

  const isControlled = value !== undefined;
  const realValue = isControlled ? value : inputValue;

  const [autoFocus, setAutoFocus] = useState(false);
  const prevValue = usePrevious(realValue);
  const inputOnChange = useCallback(
    (v: TextOrNumericListValue) => {
      let realValue: TextOrNumericListValue = v;
      if (Array.isArray(realValue)) {
        if (!realValue.length) {
          realValue = '';
          if (!autoFocus) {
            setAutoFocus(true);
          }
        }
      } else {
        if (!Array.isArray(prevValue)) {
          setAutoFocus(true);
        }
      }
      if (!isControlled) {
        setInputValue(realValue);
      }
      onChange?.(realValue);
    },
    [isControlled, onChange, autoFocus, prevValue],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') {
        return;
      }
      if (!(realValue as string)?.trim()) {
        inputOnChange(realValue);
        return;
      }
      if (Number.isNaN(Number(realValue))) {
        inputOnChange(realValue);
        return;
      }
      inputOnChange([Number(realValue)]);
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    [realValue],
  );

  const onPaste = useCallback<ClipboardEventHandler<HTMLInputElement>>(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const ids = _convertPasteText2Ids(e.clipboardData, 'numeric');
      if (!ids) {
        return;
      }
      inputOnChange(ids);
      setTagsInputKey((prev) => prev + 1);
      e.preventDefault();
      return false;
    },
    [],
  );

  const [tagsInputKey, setTagsInputKey] = useState(1);
  if (Array.isArray(realValue)) {
    return (
      <TagsInput
        {...tagsInputProps}
        className={className}
        placeholder={placeholder}
        style={style}
        key={tagsInputKey}
        type="numeric"
        value={realValue}
        defaultValue={defaultValue as number[]}
        onChange={inputOnChange}
        inputProps={{ autoFocus, ...tagsInputProps?.inputProps }}
      />
    );
  }

  const isNaNInput = Boolean(realValue) && !Number.isNaN(Number(realValue));
  return (
    <Tooltip open={isNaNInput} title={locale.enterToSwitchMode}>
      <Input
        {...rest}
        className={className}
        style={style}
        autoFocus={autoFocus}
        onChange={(e) => inputOnChange(e.target.value)}
        value={realValue as string}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onPaste={onPaste}
      />
    </Tooltip>
  );
}

type ReturnT<T> = null | Array<T extends 'numeric' ? number : string>;

function _convertPasteText2Ids<T extends 'text' | 'numeric' = 'text'>(
  clipboardData: DataTransfer | null,
  type: T,
): ReturnT<T> {
  if (!clipboardData) {
    return null;
  }
  const text = clipboardData.getData('text/plain')?.trim();
  if (!text) {
    return null;
  }
  const rows = text.split('\n');
  const ids: T[] = [];
  for (let row of rows) {
    row = row.trim();
    if (!row) {
      continue;
    }
    if (type === 'numeric') {
      const num = Number(row);
      if (Number.isNaN(num)) {
        return null;
      }
      ids.push(num as unknown as T);
    } else {
      ids.push(row as unknown as T);
    }
  }
  if (ids.length) {
    return Array.from(new Set(ids)) as unknown as ReturnT<T>;
  }
  return null;
}
