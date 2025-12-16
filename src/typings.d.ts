// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormRuleBuilderMessageTemplates } from './utils/formRule';
import 'antd/es/locale';
import { SubmitButtonLocale } from './SubmitButton/locale/locale';
import { ComponentToken as TagsInputComponentToken } from './TagsInput/style';
import { ComponentToken as EnhanceDrawerComponentToken } from './EnhanceDrawer/style';
import { ComponentToken as EnhanceSelectComponentToken } from '@byte.n/antd-ext/EnhancedSelect/style';
import { ComponentToken as LogicalSelectComponentToken } from './LogicalSelect/style';
import { ComponentToken as EnhanceTableComponentToken } from './EnhanceTable/style';
import { TagsInputLocale } from './TagsInput/locale';
import { LogicalSelectLocale } from './LogicalSelect/locale';
import { ComponentToken as SheetToken } from '@byte.n/antd-ext/Sheet/style';

// 扩展 antd 的 Locale 接口
declare module 'antd/es/locale' {
  interface Locale {
    SubmitButton?: SubmitButtonLocale;
    FormRuleBuilder?: FormRuleBuilderMessageTemplates;
    TagsInput?: TagsInputLocale;
    LogicalSelect?: LogicalSelectLocale;
  }
}

declare module 'antd/es/theme/interface/components' {
  interface ComponentTokenMap {
    TagsInput?: TagsInputComponentToken;
    EnhanceDrawer?: EnhanceDrawerComponentToken;
    EnhancedSelect?: EnhanceSelectComponentToken;
    LogicalSelect?: LogicalSelectComponentToken;
    EnhanceTable?: EnhanceTableComponentToken;
    Sheet?: SheetToken;
  }
}
