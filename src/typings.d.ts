// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormRuleBuilderMessageTemplates } from '../utils/formRule';
import 'antd/es/locale';
import { SubmitButtonLocale } from 'antd-ext/SubmitButton/locale/locale';
import { ComponentToken as TagsInputComponentToken } from './TagsInput/style';
import { ComponentToken as EnhanceDrawerComponentToken } from './EnhanceDrawer/style';
import { TagsInputLocale } from 'antd-ext/TagsInput/locale';

// 扩展 antd 的 Locale 接口
declare module 'antd/es/locale' {
  interface Locale {
    SubmitButton?: SubmitButtonLocale;
    FormRuleBuilder?: FormRuleBuilderMessageTemplates;
    TagsInput?: TagsInputLocale;
  }
}

declare module 'antd/es/theme/interface/components' {
  interface ComponentTokenMap {
    TagsInput?: TagsInputComponentToken;
    EnhanceDrawer?: EnhanceDrawerComponentToken;
  }
}
