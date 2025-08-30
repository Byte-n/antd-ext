export interface TagsInputLocale {
  placeholder: string;
  batchInput: string;
  clearAll: string;
  confirm: string;
  cancel: string;
  rows: string;
  rowsCountInfo: string;
  maxCountLimit: string;
  maxCountLimitIgnore: string;
  maxCountLimitTruncated: string;
  invalidNumber: string;
  duplicateItem: string;
  duplicateItemRemoved: string;
  invalidNumberRow: string;
  numericTypeHint: string;
  textTypeHint: string;
  enterToSwitchMode: string;
  inputIdOrName: string;
  dynamicPlaceholder: string;
  ellipsisCount: string;
}

export const zhCN: TagsInputLocale = {
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
