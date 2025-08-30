export interface LogicalSelectLocale {
  add: string;
  emptyGroupError: string;
  selectFieldFirst: string;
  selectOperatorFirst: string;
  valueEmptyError: string;
  addChildDisabledTip: string;
  andLabel: string;
  orLabel: string;
}

export const zhCN: LogicalSelectLocale = {
  add: '添加',
  emptyGroupError: '分组不能为空',
  selectFieldFirst: '先选条件',
  selectOperatorFirst: '先选运算符',
  valueEmptyError: '不能为空',
  addChildDisabledTip: '上级仅一个条件，不允许次级再增加',
  andLabel: '且',
  orLabel: '或',
};


