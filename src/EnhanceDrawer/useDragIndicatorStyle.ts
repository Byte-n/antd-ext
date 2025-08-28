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
    EnhanceDrawer?: ComponentToken;
  }
}

interface ComponentToken {
  /** 拖拽指示器在拖拽状态下的背景色 */
  indicatorDraggingColor?: string;
  /** 拖拽图标的颜色 */
  indicatorIconColor?: string;
  /** 拖拽图标的大小（像素） */
  indicatorIconSize?: number;
  /** 拖拽图标的背景色 */
  indicatorIconBgColor?: string;
}

export interface EnhanceDrawerToken extends FullToken<'EnhanceDrawer'> {}

// 定义 Handler 的样式
const createStyle: GenerateStyle<EnhanceDrawerToken> = (
  token: FullToken<'EnhanceDrawer'>,
) => {
  const {
    componentCls,
    indicatorDraggingColor,
    indicatorIconColor,
    indicatorIconSize = 16,
    indicatorIconBgColor,
  } = token;
  return {
    [componentCls as string]: {
      position: 'absolute',
      pointerEvents: 'auto',

      // 拖拽图标样式
      '.drag-icon': {
        color: indicatorIconColor,
        fontSize: unit(indicatorIconSize),
        width: 'calc(1em + 4px)',
        height: 'calc(1em + 4px)',
        opacity: 0.6,
        textAlign: 'center',
        lineHeight: 'calc(1em + 4px)',
        transition: 'opacity 0.2s ease',
        pointerEvents: 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: indicatorIconBgColor,
        borderRadius: token.borderRadius,
        padding: unit(2),
        boxShadow: token.boxShadowTertiary,
      },

      [`&.dragging`]: {
        background: indicatorDraggingColor,

        '.drag-icon': {
          opacity: 1,
        },
      },

      [`&.right`]: {
        cursor: 'ew-resize',
        left: unit(0),
        top: unit(0),
        height: '100%',
        width: '8px',
      },
      [`&.left`]: {
        cursor: 'ew-resize',
        right: unit(0),
        top: unit(0),
        height: '100%',
        width: '8px',
      },
      [`&.top`]: {
        cursor: 'ns-resize',
        left: unit(0),
        bottom: unit(0),
        height: '8px',
        width: '100%',
      },
      [`&.bottom`]: {
        cursor: 'ns-resize',
        left: unit(0),
        top: unit(0),
        height: '8px',
        width: '100%',
      },
    },
  };
};

const prepareComponentToken: GetDefaultToken<'EnhanceDrawer'> = (token) => ({
  indicatorDraggingColor: token.colorPrimaryBg,
  indicatorIconColor: token.colorTextSecondary,
  indicatorIconSize: 16,
  indicatorIconBgColor: token.colorBgContainer,
});

export default genStyleHooks(
  'EnhanceDrawer',
  (token) => {
    const drawerToken = mergeToken<FullToken<'EnhanceDrawer'>>(token, {});
    return [createStyle(drawerToken), {}];
  },
  prepareComponentToken,
);
