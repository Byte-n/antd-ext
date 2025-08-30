import { Button, ConfigProvider, Divider, Space } from 'antd';
import { Locale } from 'antd/es/locale';
import React, { useState } from 'react';
import TagsInput from '../index';

const LocalizationDemo: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['标签1', '标签2']);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [textOrNumericValue, setTextOrNumericValue] = useState<
    string | number[]
  >('');
  const [currentLocale, setCurrentLocale] = useState<'zh' | 'en'>('zh');

  // 中文本地化配置
  const zhLocale: Locale['TagsInput'] = {
    placeholder: '按回车新增',
    batchInput: '批量输入',
    clearAll: '清空所有',
    confirm: '确定',
    cancel: '取消',
    rows: '行数',
    rowsCountInfo: '${rows}：${rowCount}/${maxCount}',
    maxCountLimit: '最大数量限制：${maxCount}个',
    maxCountLimitIgnore: '最大数量限制：${maxCount}个, 忽略超出部分',
    maxCountLimitTruncated:
      '最大数量限制：${maxCount}个，已自动截取前${maxCount}个',
    invalidNumber: '请输入有效的数字',
    duplicateItem: '已有: ${item}',
    duplicateItemRemoved: '已移除重复的项：${items}, 若需要提交，重新点击确定',
    invalidNumberRow: "'${text}'行不是有效数字",
    numericTypeHint: '数字',
    textTypeHint: '文本',
    enterToSwitchMode: '回车可切换输入模式',
    inputIdOrName: '输入ID或名称，输入ID时，回车可切换输入模式',
    dynamicPlaceholder: '一行一个${typeHint}，最多${maxCount}个',
    ellipsisCount: '...${count}个',
  };

  // 英文本地化配置
  const enLocale: Locale['TagsInput'] = {
    placeholder: 'Press Enter to add',
    batchInput: 'Batch Input',
    clearAll: 'Clear All',
    confirm: 'Confirm',
    cancel: 'Cancel',
    rows: 'Rows',
    rowsCountInfo: '${rows}: ${rowCount}/${maxCount}',
    maxCountLimit: 'Maximum count limit: ${maxCount}',
    maxCountLimitIgnore: 'Maximum count limit: ${maxCount}, ignoring excess',
    maxCountLimitTruncated:
      'Maximum count limit: ${maxCount}, automatically truncated to first ${maxCount}',
    invalidNumber: 'Please enter a valid number',
    duplicateItem: 'Already exists: ${item}',
    duplicateItemRemoved:
      'Removed duplicate items: ${items}, click confirm again if you want to submit',
    invalidNumberRow: "'${text}' is not a valid number",
    numericTypeHint: 'Number',
    textTypeHint: 'Text',
    enterToSwitchMode: 'Press Enter to switch mode',
    inputIdOrName:
      'Enter ID or name, press Enter to switch mode when entering ID',
    dynamicPlaceholder: 'One ${typeHint} per line, maximum ${maxCount}',
    ellipsisCount: '...${count}',
  };

  const toggleLocale = () => {
    setCurrentLocale(currentLocale === 'zh' ? 'en' : 'zh');
  };

  return (
    <ConfigProvider
      locale={{
        locale: currentLocale,
        TagsInput: currentLocale === 'zh' ? zhLocale : enLocale,
      }}
    >
      <div style={{ width: '500px' }}>
        <h4>本地化示例</h4>
        <p>当前语言：{currentLocale === 'zh' ? '中文' : 'English'}</p>

        <Space style={{ marginBottom: '16px' }}>
          <Button onClick={toggleLocale}>
            {currentLocale === 'zh' ? 'Switch to English' : '切换到中文'}
          </Button>
        </Space>

        <Divider />

        <h5>文本类型标签输入</h5>
        <TagsInput
          value={tags}
          onChange={setTags}
          maxCount={5}
          maxDisplayCount={3}
        />
        <div style={{ marginTop: '8px' }}>
          <p>当前标签：{tags.join(', ')}</p>
        </div>

        <Divider />

        <h5>数字类型标签输入</h5>
        <TagsInput
          type="numeric"
          value={numbers}
          onChange={setNumbers}
          maxCount={5}
          placeholder="输入数字"
        />
        <div style={{ marginTop: '8px' }}>
          <p>当前数字：{numbers.join(', ')}</p>
          <p>数字总和：{numbers.reduce((sum, num) => sum + num, 0)}</p>
        </div>

        <Divider />

        <h5>TextOrNumericList 组件</h5>
        <TagsInput.TextOrNumericList
          value={textOrNumericValue}
          onChange={setTextOrNumericValue}
          placeholder="输入ID或数字"
        />
        <div style={{ marginTop: '8px' }}>
          <p>
            当前值：
            {Array.isArray(textOrNumericValue)
              ? textOrNumericValue.join(', ')
              : textOrNumericValue}
          </p>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default LocalizationDemo;
