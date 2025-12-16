import genAlignStyle from '@byte.n/antd-ext/Sheet/style/genAlignStyle';
import genTooltipStyle from '@byte.n/antd-ext/Sheet/style/genTooltipStyle';
import { FullToken, GenerateStyle, genStyleHooks, GetDefaultToken } from 'antd/es/theme/internal';

/**
 * Sheet 组件的自定义 Token
 * 可在 ConfigProvider 中通过 theme.components.Sheet 来定制
 */
export interface ComponentToken {}

export interface SheetToken extends FullToken<'Sheet'> {}

// 定义 Sheet 的样式
const createStyle: GenerateStyle<SheetToken> = (token: FullToken<'Sheet'>) => {
  const {
    componentCls,
    colorErrorBgHover,
    colorErrorBgActive,
    colorSuccessBgHover,
    colorWarningBgHover,
    paddingXXS,
    paddingXS,
  } = token;
  return {
    [componentCls]: [
      {
        [`${componentCls}-tbody>tr${componentCls}-row>td${componentCls}-cell`]: {
          height: 0,

          [`&:not(${componentCls}-cell-layout-inline)`]: {
            padding: 0,
          },

          // 大小
          [`&${componentCls}-cell-layout-w-full`]: {
            [`${componentCls}-cell-inner-layout`]: {
              width: '100%',
            },
          },
          [`&${componentCls}-cell-layout-h-full`]: {
            [`${componentCls}-cell-inner-layout`]: {
              height: '100%',
            },
          },

          // 对齐
          [`${componentCls}-cell-inner`]: {
            display: 'flex',
            overflow: 'hidden',
            height: '100%',
            width: '100%',

            ...genAlignStyle(componentCls),
          },

          // 数据行的内容
          [`&${componentCls}-cell-data`]: {
            '&>*': {
              pointerEvents: 'none',
            },
            [`&${componentCls}-cell-no-selection::selection`]: {
              background: 'transparent',
              color: 'currentColor',
            },
            [`&${componentCls}-cell-error`]: {
              background: colorErrorBgHover,
            },

            [`&${componentCls}-cell-active`]: {
              boxShadow: `inset 0 0 0 1px var(--ant-color-primary)`,

              [`&>*`]: {
                pointerEvents: 'unset',
              },
            },
          },

          // 操作行的内容
          [`&${componentCls}-cell-operator`]: {
            paddingBlock: paddingXXS,
            paddingInline: paddingXS,
          },
        },
        [`${componentCls}-thead>tr>th${componentCls}-cell`]: [
          genStatusStyle(token, { status: 'success', background: colorSuccessBgHover }),
          genStatusStyle(token, { status: 'warning', background: colorWarningBgHover }),
          genStatusStyle(token, { status: 'error', background: colorErrorBgActive }),
        ],
      },
    ],

    // 根据sheet的大小，调整单元格的内边距
    [`${componentCls}-wrapper ${componentCls}`]: {
      [`${componentCls}-tbody>tr>td ${componentCls}-cell-inner-layout`]: {
        // background: 'red'
        border: 'none',
        boxShadow: 'none',
        background: 'transparent',
        borderRadius: 0,
        margin: 0,
        paddingBlock: 'var(--ant-table-cell-padding-block)',
        paddingInline: 'var(--ant-table-cell-padding-inline)',
      },

      [`&${componentCls}-small`]: {
        [`${componentCls}-tbody>tr>td ${componentCls}-cell-inner-layout`]: {
          paddingBlock: 'var(--ant-table-cell-padding-block-sm)',
          paddingInline: 'var(--ant-table-cell-padding-inline-sm)',
        },
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-tbody>tr>td ${componentCls}-cell-inner-layout`]: {
          paddingBlock: 'var(--ant-table-cell-padding-block-md)',
          paddingInline: 'var(--ant-table-cell-padding-inline-md)',
        },
      },
    },

    // [`${componentCls}-wrapper`]: [],
    ...genTooltipStyle(token),
  };
};

const prepareComponentToken: GetDefaultToken<'Sheet'> = () => ({});

export default genStyleHooks('Sheet', (token) => createStyle(token), prepareComponentToken);

const genStatusStyle = (
  token: FullToken<'Sheet'>,
  options: {
    status: string;
    background: string;
  },
) => ({
  [`&${token.componentCls}-th-status-${options.status}`]: {
    background: options.background,
  },
});
