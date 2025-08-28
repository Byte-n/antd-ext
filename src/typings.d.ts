// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormRuleBuilderMessageTemplates } from 'antd-ext/lib/formRule';
import 'antd/lib/locale';

// 扩展 antd 的 Locale 接口
declare module 'antd/lib/locale' {
  interface Locale {
    SubmitButton?: {
      noChange: string;
      formExpired: string;
    };
    FormRuleBuilder?: FormRuleBuilderMessageTemplates;
  }
}
