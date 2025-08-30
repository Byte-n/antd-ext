import {
    FullToken,
    GenerateStyle,
    genStyleHooks,
    GetDefaultToken,
    mergeToken,
} from 'antd/es/theme/internal';

export interface ComponentToken {
}

export interface EnhanceSelectToken extends FullToken<'EnhanceSelect'> { }

// 定义 EnhanceSelect 的样式
const createStyle: GenerateStyle<EnhanceSelectToken> = (
    token: FullToken<'EnhanceSelect'>,
) => {
    const { componentCls, antCls } = token;
    return {
        [componentCls as string]: {
            '&.scroll': {
                flexDirection: 'column',

                [`${antCls}-select-selector`]: {
                    minHeight: 0,
                    overflow: 'auto',
                },
            }
        },
    };
};

const prepareComponentToken: GetDefaultToken<'EnhanceSelect'> = () => ({});

export default genStyleHooks(
    'EnhanceSelect',
    (token) => {
        const enhanceSelectToken = mergeToken<FullToken<'EnhanceSelect'>>(token, {});
        return [createStyle(enhanceSelectToken)];
    },
    prepareComponentToken,
);
