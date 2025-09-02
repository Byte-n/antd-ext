/// <reference types="react" />
import { FullToken } from 'antd/es/theme/internal';
declare module 'antd/es/theme/interface/components' {
    interface ComponentTokenMap {
        LoadingIndicatorCircusBall?: ComponentToken;
    }
}
interface ComponentToken {
    /** 小球阴影颜色 */
    ballShadowColor?: string;
    /** 小球1颜色 */
    ball1Color?: string;
    /** 小球2颜色 */
    ball2Color?: string;
    /** 小球3颜色 */
    ball3Color?: string;
    /** 小球4颜色 */
    ball4Color?: string;
    /** 小球5颜色 */
    ball5Color?: string;
}
export interface LoadingIndicatorCircusBallToken extends FullToken<'LoadingIndicatorCircusBall'> {
}
declare const _default: (prefixCls: string, rootCls?: string | undefined) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string, string];
export default _default;
