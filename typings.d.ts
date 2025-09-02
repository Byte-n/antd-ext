// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormRuleBuilderMessageTemplates } from 'antd-ext/utils/formRule';
import 'antd/es/locale';
import { SubmitButtonLocale } from 'antd-ext/SubmitButton/locale/locale';
import { ComponentToken as TagsInputComponentToken } from 'antd-ext/TagsInput/style';
import { ComponentToken as EnhanceDrawerComponentToken } from 'antd-ext/EnhanceDrawer/style';
import { ComponentToken as EnhanceSelectComponentToken } from 'antd-ext/EnhanceSelect/style';
import { ComponentToken as LogicalSelectComponentToken } from 'antd-ext/LogicalSelect/style';
import { ComponentToken as EnhanceTableComponentToken } from 'antd-ext/EnhanceTable/style';
import { TagsInputLocale } from 'antd-ext/TagsInput/locale';
import { LogicalSelectLocale } from 'antd-ext/LogicalSelect/locale';

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
    EnhanceSelect?: EnhanceSelectComponentToken;
    LogicalSelect?: LogicalSelectComponentToken;
    EnhanceTable?: EnhanceTableComponentToken;
  }
}
