import { useLocale } from 'antd/lib/locale';
import { useMemo } from 'react';
import {
  defaultFormRuleBuilderMessageTemplates,
  FormRuleBuilder,
} from '../formRule';

/**
 * FormRuleBuilder 的 Hook 版本
 * 支持本地化 message，优先使用外部传入的 message
 */
export function useFormRuleBuilder() {
  const [locale] = useLocale(
    'FormRuleBuilder',
    defaultFormRuleBuilderMessageTemplates,
  );

  return useMemo(() => {
    // 直接使用 FormRuleBuilder 的 messageTemplates 功能
    return new FormRuleBuilder(locale);
  }, [locale]);
}

export default useFormRuleBuilder;
