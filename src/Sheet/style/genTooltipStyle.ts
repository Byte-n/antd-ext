import { FullToken } from 'antd/es/theme/internal';

export default function genTooltipStyle(token: FullToken<'Sheet'>) {
  const { componentCls, colorError } = token;
  return {
    [`${componentCls}-tip${componentCls}-tip-error`]: {
      '--ant-color-bg-spotlight': colorError,
    },
  }
}
