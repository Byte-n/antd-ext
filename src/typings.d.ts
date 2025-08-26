// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormRuleBuilderMessageTemplates } from 'antd-ext/lib/formRule';
import 'antd/lib/locale';

// 扩展 antd 的 Locale 接口
declare module 'antd/lib/locale' {
  interface Locale {
    // 添加自定义组件的国际化字段
    SubmitButton?: {
      noChange: string;
      formExpired: string;
    };
    // FormRuleBuilder 的国际化字段
    FormRuleBuilder?: FormRuleBuilderMessageTemplates;
    // 可以继续添加其他需要的字段...
  }
}
