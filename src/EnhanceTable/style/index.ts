import { unit } from '@ant-design/cssinjs';
import { CSSObject } from '@ant-design/cssinjs/es/hooks/useStyleRegister';
import {
  FullToken,
  GenerateStyle,
  genStyleHooks,
  GetDefaultToken,
  mergeToken,
} from 'antd/es/theme/internal';

export interface ComponentToken {
  stripeBgColor: string;
  headBgColor: string;
  headZIndex: number;
  stripeHoverBgColor?: string;
  scrollbarWidth: CSSObject['scrollbarWidth'];
  scrollbarColor: string;
  scrollbarBgColor: string;
  scrollbarGutter: string;
  paginationMarginBlock: string | number;
}

export interface EnhanceTableToken extends FullToken<'EnhanceTable'> {}

const createStyle: GenerateStyle<EnhanceTableToken> = (
  token: FullToken<'EnhanceTable'>,
) => {
  const {
    componentCls,
    antCls,
    stripeBgColor,
    headBgColor,
    headZIndex,
    stripeHoverBgColor,
    scrollbarWidth,
    scrollbarColor,
    scrollbarBgColor,
    scrollbarGutter,
    paginationMarginBlock,
  } = token;
  return {
    [componentCls as string]: {
      '&.y-auto': {
        height: '100%',
        maxHeight: '100%',
        minHeight: 0,
        flex: '1',

        [`${antCls}-spin-nested-loading`]: {
          height: '100%',

          [`${antCls}-spin-container`]: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',

            [`${antCls}-table`]: {
              height: '100%',
              minHeight: 0,

              [`${antCls}-table-container`]: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              },

              [`${antCls}-table-content`]: {
                overflowY: 'auto !important' as 'auto',
                flex: '1',
                minHeight: 0,
              },

              [`${antCls}-table-header`]: {
                height: 'max-content',
                flexShrink: 0,
              },

              'table thead': {
                position: 'sticky',
                top: 0,
                left: 0,
                'z-index': `${headZIndex}`,
                flexShrink: 0,
              },
            },

            [`${antCls}-pagination`]: {
              marginBlock: unit(paginationMarginBlock),
            },
          },
        },
      },

      '&.stripe': {
        [`${antCls}-table-thead > tr > th`]: {
          background: headBgColor,
        },
        [`${antCls}-table ${antCls}-table-content table`]: {
          'tr:nth-child(2n+1) td': {
            backgroundColor: stripeBgColor,
          },
          ['tr td${antCls}-table-cell-row-hover']: {
            background: stripeHoverBgColor,
          },
        },
        [`&${antCls}-table-wrapper ${antCls}-table-tbody ${antCls}-table-row >${antCls}-table-cell-row-hover`]:
          {
            background: stripeHoverBgColor,
          },
      },

      [`${antCls}-table`]: {
        [`${antCls}-table-container`]: {
          [`${antCls}-table-body,${antCls}-table-content`]: {
            scrollbarWidth: scrollbarWidth,
            scrollbarColor: `${scrollbarColor} ${scrollbarBgColor}`,
            scrollbarGutter: scrollbarGutter,
          },
        },
      },
    },
  };
};

const prepareComponentToken: GetDefaultToken<'EnhanceTable'> = (token) => ({
  stripeBgColor: token.colorFillQuaternary,
  stripeHoverBgColor: token.colorFillSecondary,
  headBgColor: token.colorBgContainer,
  headZIndex: token.zIndexPopupBase,
  scrollbarWidth: 'thin',
  scrollbarColor: token.colorTextPlaceholder,
  scrollbarBgColor: 'transparent',
  scrollbarGutter: 'stable',
  paginationMarginBlock: 8,
});

export default genStyleHooks(
  'EnhanceTable',
  (token) => {
    const EnhanceTableToken = mergeToken<FullToken<'EnhanceTable'>>(token, {});
    return [createStyle(EnhanceTableToken)];
  },
  prepareComponentToken,
);
