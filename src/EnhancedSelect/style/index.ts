import {
    FullToken,
    GenerateStyle,
    genStyleHooks,
    GetDefaultToken,
    mergeToken,
} from 'antd/es/theme/internal';

export interface ComponentToken {
}

export interface EnhanceSelectToken extends FullToken<'EnhancedSelect'> { }

// 定义 EnhancedSelect 的样式
const createStyle: GenerateStyle<EnhanceSelectToken> = (
    token: FullToken<'EnhancedSelect'>,
) => {
    const { componentCls, antCls, paddingXXS } = token;
    return {
        [componentCls as string]: {
            '&.scroll': {
                flexDirection: 'column',

                [`${antCls}-select-content`]: {
                    minHeight: 0,
                    overflow: 'auto',
                },
                [`${antCls}-select-suffix`]: {
                  paddingBlock: paddingXXS
                },
            }
        },
    };
};

const prepareComponentToken: GetDefaultToken<'EnhancedSelect'> = () => ({});

export default genStyleHooks(
    'EnhancedSelect',
    (token) => {
        const enhanceSelectToken = mergeToken<FullToken<'EnhancedSelect'>>(token, {});
        return [createStyle(enhanceSelectToken)];
    },
    prepareComponentToken,
);
