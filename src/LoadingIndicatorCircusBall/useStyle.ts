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

export interface LoadingIndicatorCircusBallToken extends FullToken<'LoadingIndicatorCircusBall'> {}

// 定义 LoadingIndicatorCircusBall 的样式
const createStyle: GenerateStyle<LoadingIndicatorCircusBallToken> = (
  token: FullToken<'LoadingIndicatorCircusBall'>,
) => {
  const {
    componentCls,
    ballShadowColor ,
    ball1Color,
    ball2Color,
    ball3Color ,
    ball4Color,
    ball5Color,
  } = token;

  return {
    [componentCls as string]: {
      // 定义CSS变量
      '--ball-size': '12px',
      '--ball-shadow': '4.25px',
      '--ball-shadow-h': '5.5px',
      '--ball-translate-x': '-50px',
      '--ball-translate-y': '-60.5px',
      '--ball-scale': '0.85',
      
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'end',
      alignContent: 'end',
      height: 'calc((var(--ball-translate-y) * -1) + var(--ball-size))',
      width: 'calc((var(--ball-translate-x) * -1) + var(--ball-size))',
      margin: 'var(--ball-size)',

      // 小尺寸样式
      '&.small': {
        '--ball-size': '5px',
        '--ball-shadow': '1px',
        '--ball-shadow-h': '2px',
        '--ball-translate-x': '-10px',
        '--ball-translate-y': '-13.5px',
        '--ball-scale': '0.85',
        
        height: 'calc((var(--ball-translate-y) * -1) + var(--ball-size))',
        width: 'calc((var(--ball-translate-x) * -1) + var(--ball-size))',
        margin: 'var(--ball-size)',

        '#contain': {
          height: 'var(--ball-size)',
          width: 'calc(100% - var(--ball-size))',
        },

        '.wrap': {
          '&:after': {
            width: 'var(--ball-size)',
            height: 'var(--ball-shadow-h)',
          },
        },

        '.ball': {
          width: 'var(--ball-size)',
          height: 'var(--ball-size)',
          boxShadow: `var(--ball-shadow) var(--ball-shadow) 0 ${ballShadowColor} inset`,
        },
      },

      // 大尺寸样式
      '&.large': {
        '--ball-size': '18px',
        '--ball-shadow': '4.25px',
        '--ball-shadow-h': '5.5px',
        '--ball-translate-x': '-80px',
        '--ball-translate-y': '-90.5px',
        '--ball-scale': '0.85',
        
        height: 'calc((var(--ball-translate-y) * -1) + var(--ball-size))',
        width: 'calc((var(--ball-translate-x) * -1) + var(--ball-size))',
        margin: 'var(--ball-size)',

        '#contain': {
          height: 'var(--ball-size)',
          width: 'calc(100% - var(--ball-size))',
        },

        '.wrap': {
          '&:after': {
            width: 'var(--ball-size)',
            height: 'var(--ball-shadow-h)',
          },
        },

        '.ball': {
          width: 'var(--ball-size)',
          height: 'var(--ball-size)',
          boxShadow: `var(--ball-shadow) var(--ball-shadow) 0 ${ballShadowColor} inset`,
        },
      },

      '#contain': {
        height: 'var(--ball-size)',
        width: 'calc(100% - var(--ball-size))',
        opacity: 0,
        animationName: 'fadeIn',
        animationDuration: '1s',
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        transform: 'translateX(calc(100% - var(--ball-size)))',
      },

      '.wrap': {
        animationName: 'translateX',
        animationDuration: '1000ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
        position: 'absolute',
      },

      '.ball': {
        width: 'var(--ball-size)',
        height: 'var(--ball-size)',
        boxShadow: `var(--ball-shadow) var(--ball-shadow) 0 ${ballShadowColor} inset`,
        backgroundColor: ball1Color,
        borderRadius: '50%',
        animationName: 'translateY',
        animationDuration: '500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
      },

      '.wrap:after': {
        content: '""',
        width: 'var(--ball-size)',
        height: 'var(--ball-shadow-h)',
        background: '#eee',
        position: 'absolute',
        bottom: 0,
        borderRadius: '50%',
        animationName: 'scale',
        animationDuration: '500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
      },

      '#wrap2, #ball2, #wrap2:after': {
        animationDelay: '-400ms',
      },

      '#wrap3, #ball3, #wrap3:after': {
        animationDelay: '-800ms',
      },

      '#wrap4, #ball4, #wrap4:after': {
        animationDelay: '-1200ms',
      },

      '#wrap5, #ball5, #wrap5:after': {
        animationDelay: '-1600ms',
      },

      '#ball1': {
        backgroundColor: ball1Color,
      },

      '#ball2': {
        backgroundColor: ball2Color,
      },

      '#ball3': {
        backgroundColor: ball3Color,
      },

      '#ball4': {
        backgroundColor: ball4Color,
      },

      '#ball5': {
        backgroundColor: ball5Color,
      },

      '@keyframes translateX': {
        '100%': {
          transform: 'translateX(var(--ball-translate-x))',
        },
      },

      '@keyframes translateY': {
        '100%': {
          transform: 'translateY(var(--ball-translate-y))',
        },
      },

      '@keyframes scale': {
        '100%': {
          transform: 'scale(var(--ball-scale))',
        },
      },

      '@keyframes fadeIn': {
        '100%': {
          opacity: 1,
        },
      },
    },

    // 为 ant-spin 组件添加样式
    '.ant-spin': {
      '&.ant-spin-sm': {
        [componentCls as string]: {
          '--ball-size': '5px',
          '--ball-shadow': '1px',
          '--ball-shadow-h': '2px',
          '--ball-translate-x': '-10px',
          '--ball-translate-y': '-13.5px',
          '--ball-scale': '0.85',
          
          height: 'calc((var(--ball-translate-y) * -1) + var(--ball-size))',
          width: 'calc((var(--ball-translate-x) * -1) + var(--ball-size))',
          margin: 'var(--ball-size)',

          '#contain': {
            height: 'var(--ball-size)',
            width: 'calc(100% - var(--ball-size))',
          },

          '.wrap': {
            '&:after': {
              width: 'var(--ball-size)',
              height: 'var(--ball-shadow-h)',
              animationName: 'scale',
              animationDuration: '500ms',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate',
            },
          },

          '.ball': {
            width: 'var(--ball-size)',
            height: 'var(--ball-size)',
            boxShadow: `var(--ball-shadow) var(--ball-shadow) 0 ${ballShadowColor} inset`,
            animationName: 'translateY',
            animationDuration: '500ms',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDirection: 'alternate',
          },
        },
      },

      '&.ant-spin-lg': {
        [componentCls as string]: {
          '--ball-size': '18px',
          '--ball-shadow': '4.25px',
          '--ball-shadow-h': '5.5px',
          '--ball-translate-x': '-80px',
          '--ball-translate-y': '-90.5px',
          '--ball-scale': '0.85',
          
          height: 'calc((var(--ball-translate-y) * -1) + var(--ball-size))',
          width: 'calc((var(--ball-translate-x) * -1) + var(--ball-size))',
          margin: 'var(--ball-size)',

          '#contain': {
            height: 'var(--ball-size)',
            width: 'calc(100% - var(--ball-size))',
          },

          '.wrap': {
            '&:after': {
              width: 'var(--ball-size)',
              height: 'var(--ball-shadow-h)',
              animationName: 'scale',
              animationDuration: '500ms',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate',
            },
          },

          '.ball': {
            width: 'var(--ball-size)',
            height: 'var(--ball-size)',
            boxShadow: `var(--ball-shadow) var(--ball-shadow) 0 ${ballShadowColor} inset`,
            animationName: 'translateY',
            animationDuration: '500ms',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDirection: 'alternate',
          },
        },
      },
    },
  };
};

const prepareComponentToken: GetDefaultToken<'LoadingIndicatorCircusBall'> = (token) => ({
  ballShadowColor: 'rgba(0, 0, 0, 0.1)',
  ball1Color: '#397BF9',
  ball2Color: '#F4B400',
  ball3Color: '#EEEEEE',
  ball4Color: '#00A656',
  ball5Color: '#E3746B',
});

export default genStyleHooks(
  'LoadingIndicatorCircusBall',
  (token) => {
    const circusBallToken = mergeToken<FullToken<'LoadingIndicatorCircusBall'>>(token, {});
    return [createStyle(circusBallToken), {}];
  },
  prepareComponentToken,
);
