/// <reference types="react" />
import { FullToken } from 'antd/es/theme/internal';
export interface ComponentToken {
    /** 标签最大宽度 */
    tagMaxWidth: number;
    /** 小尺寸内边距 */
    paddingSM: number;
    /** 中等尺寸内边距 */
    paddingMD: number;
    /** 大尺寸内边距 */
    paddingLG: number;
    /** 小尺寸外边距 */
    marginSM: number;
    /** 中等尺寸外边距 */
    marginMD: number;
    /** 大尺寸外边距 */
    marginLG: number;
    /** 小尺寸高度 */
    controlHeightSM: number;
    /** 中等尺寸高度 */
    controlHeightMD: number;
    /** 大尺寸高度 */
    controlHeightLG: number;
    /** 小尺寸字体大小 */
    fontSizeSM: number;
    /** 中等尺寸字体大小 */
    fontSizeMD: number;
    /** 大尺寸字体大小 */
    fontSizeLG: number;
}
export interface TagsInputToken extends FullToken<'TagsInput'> {
}
declare const _default: (prefixCls: string, rootCls?: string | undefined) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string, string];
export default _default;
