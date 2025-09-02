/// <reference types="react" />
import { FullToken } from 'antd/es/theme/internal';
export interface ComponentToken {
    /** 拖拽指示器在拖拽状态下的背景色 */
    indicatorDraggingColor?: string;
    /** 拖拽图标的颜色 */
    indicatorIconColor?: string;
    /** 拖拽图标的大小（像素） */
    indicatorIconSize?: number;
    /** 拖拽图标的背景色 */
    indicatorIconBgColor?: string;
}
export interface EnhanceDrawerToken extends FullToken<'EnhanceDrawer'> {
}
declare const _default: (prefixCls: string, rootCls?: string | undefined) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string, string];
export default _default;
