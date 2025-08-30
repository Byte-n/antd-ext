import {
  FullToken,
  GenerateStyle,
  genStyleHooks,
  GetDefaultToken,
  mergeToken,
} from 'antd/es/theme/internal';

export interface ComponentToken {}

export interface LogicalSelectToken extends FullToken<'LogicalSelect'> {}

// 定义 LogicalSelect 的样式
const createStyle: GenerateStyle<LogicalSelectToken> = (
  token: FullToken<'LogicalSelect'>,
) => {
  const { componentCls, antCls } = token;
  return  {
    [componentCls as string]: {
      [`${componentCls}-condition`]: {
        width: '100%',
        padding: '4px 8px',
        borderRadius: '6px',
        transition: 'background-color 0.2s',

        '&:hover': {
          backgroundColor: '#eff6ff',
        },

        '&.empty': {
          minWidth: '100px',
        },
      },
      [`${componentCls}-condition-type`]: {
        width: '80px',
        flexShrink: 0,
      },
      [`${componentCls}-value`]: {
        maxWidth: '100%',
        width: 'auto',
        flexShrink: 1,

        '&.empty': {
          minWidth: '200px',
        },
      },
      [`${componentCls}-segmented`]: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // 分隔线样式
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '100%',
          background: 'rgba(0,21,64,.12)',
        },

        // 顶部横线
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '50%',
          height: '2px',
          background: 'rgba(0,21,64,.12)',
        },

        // 底部横线
        '& .bottom-line': {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '50%',
          height: '2px',
          background: 'rgba(0,21,64,.12)',
        },

        // Segmented 组件样式
        [`${antCls}-segmented`]: {
          height: 'max-content',
          position: 'relative',
          zIndex: 10,
          fontSize: 12,

          [`${antCls}-segmented-item-label`]: {
            paddingInline: 2
          }
        },
      },

      // 错误提示样式
      [`${componentCls}-error`]: {
        color: '#ef4444',
        whiteSpace: 'nowrap',
      },

      // 条件容器样式
      [`${componentCls}-conditions`]: {
        flex: 1,
        overflow: 'hidden',
      },
    },

    [`${componentCls}-condition-type-popup`]: {
      '.rc-virtual-list-scrollbar': {
        width: '2px !important',
      },
      '.ant-select-item': {
        padding: '2px 4px !important',
      },
    },
  };
};

const prepareComponentToken: GetDefaultToken<'LogicalSelect'> = () => ({});

export default genStyleHooks(
  'LogicalSelect',
  (token) => {
    const enhanceSelectToken = mergeToken<FullToken<'LogicalSelect'>>(
      token,
      {},
    );
    return [createStyle(enhanceSelectToken)];
  },
  prepareComponentToken,
);
