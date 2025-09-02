/// <reference types="react" />
import { CSSObject } from '@ant-design/cssinjs/es/hooks/useStyleRegister';
import { FullToken } from 'antd/es/theme/internal';
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
export interface EnhanceTableToken extends FullToken<'EnhanceTable'> {
}
declare const _default: (prefixCls: string, rootCls?: string | undefined) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string, string];
export default _default;
