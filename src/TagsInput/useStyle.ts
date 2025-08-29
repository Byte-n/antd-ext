import { unit } from '@ant-design/cssinjs';
import {
  FullToken,
  GenerateStyle,
  genStyleHooks,
  GetDefaultToken,
  mergeToken,
} from 'antd/es/theme/internal';

declare module 'antd/es/theme/interface/components' {
  interface ComponentTokenMap {
    TagsInput?: ComponentToken;
  }
}

interface ComponentToken {
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

export interface TagsInputToken extends FullToken<'TagsInput'> {}

// 定义 TagsInput 的样式
const createStyle: GenerateStyle<TagsInputToken> = (
  token: FullToken<'TagsInput'>,
) => {
  const {
    componentCls,
    colorTextPlaceholder,
    colorBorder,
    colorPrimary,
    colorBgContainer,
    borderRadius,
    tagMaxWidth,
    paddingSM,
    paddingMD,
    paddingLG,
    controlHeightSM,
    controlHeightMD,
    controlHeightLG,
    fontSizeSM,
    fontSizeLG,
  } = token;

  return {
    [componentCls as string]: {
      position: 'relative',
      width: '100%',
      border: `${unit(1)} solid ${colorBorder}`,
      borderRadius: borderRadius,
      paddingLeft: unit(paddingMD),
      backgroundColor: colorBgContainer,
      minHeight: unit(controlHeightMD),

      // 标签样式
      '.tag-item': {
        maxWidth: unit(tagMaxWidth),
        height: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },

      // 省略号标签样式
      '.ellipsis-tag': {
        cursor: 'pointer',
        color: colorPrimary,
      },

      // 输入框样式
      '.field': {
        flex: 1,
        border: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',

        '&:focus': {
          boxShadow: 'none',
        },

        '&::placeholder': {
          color: colorTextPlaceholder,
        },
      },

      // 小尺寸样式
      '&.small': {
        minHeight: unit(controlHeightSM),
        paddingLeft: unit(paddingSM),
        paddingRight: unit(paddingSM),
        paddingTop: unit(paddingSM/2),
        paddingBottom: unit(paddingSM/2),

        '.field': {
          fontSize: fontSizeSM,
        },
      },

      // 大尺寸样式
      '&.large': {
        minHeight: unit(controlHeightLG),
        paddingLeft: unit(paddingLG),
        paddingRight: unit(paddingLG),

        '.field': {
          fontSize: fontSizeLG,
        },
      },
    },
  }
};

const prepareComponentToken: GetDefaultToken<'TagsInput'> = () => ({
  tagMaxWidth: 100,
  // 参考 Ant Design Input 组件的设计 token
  paddingSM: 4,
  paddingMD: 6,
  paddingLG: 8,
  marginSM: 4,
  marginMD: 6,
  marginLG: 8,
  controlHeightSM: 24,
  controlHeightMD: 32,
  controlHeightLG: 40,
  fontSizeSM: 12,
  fontSizeMD: 14,
  fontSizeLG: 16,
});

export default genStyleHooks(
  'TagsInput',
  (token) => {
    const tagsInputToken = mergeToken<FullToken<'TagsInput'>>(token, {});
    return [createStyle(tagsInputToken)];
  },
  prepareComponentToken,
);
