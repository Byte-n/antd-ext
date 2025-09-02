function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { genStyleHooks, mergeToken } from 'antd/es/theme/internal';
// 定义 LoadingIndicatorCircusBall 的样式
var createStyle = function createStyle(token) {
  var componentCls = token.componentCls,
    ballShadowColor = token.ballShadowColor,
    ball1Color = token.ball1Color,
    ball2Color = token.ball2Color,
    ball3Color = token.ball3Color,
    ball4Color = token.ball4Color,
    ball5Color = token.ball5Color;
  return _defineProperty(_defineProperty({}, componentCls, {
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
        width: 'calc(100% - var(--ball-size))'
      },
      '.wrap': {
        '&:after': {
          width: 'var(--ball-size)',
          height: 'var(--ball-shadow-h)'
        }
      },
      '.ball': {
        width: 'var(--ball-size)',
        height: 'var(--ball-size)',
        boxShadow: "var(--ball-shadow) var(--ball-shadow) 0 ".concat(ballShadowColor, " inset")
      }
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
        width: 'calc(100% - var(--ball-size))'
      },
      '.wrap': {
        '&:after': {
          width: 'var(--ball-size)',
          height: 'var(--ball-shadow-h)'
        }
      },
      '.ball': {
        width: 'var(--ball-size)',
        height: 'var(--ball-size)',
        boxShadow: "var(--ball-shadow) var(--ball-shadow) 0 ".concat(ballShadowColor, " inset")
      }
    },
    '#contain': {
      height: 'var(--ball-size)',
      width: 'calc(100% - var(--ball-size))',
      opacity: 0,
      animationName: 'fadeIn',
      animationDuration: '1s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      transform: 'translateX(calc(100% - var(--ball-size)))'
    },
    '.wrap': {
      animationName: 'translateX',
      animationDuration: '1000ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationDirection: 'alternate',
      position: 'absolute'
    },
    '.ball': {
      width: 'var(--ball-size)',
      height: 'var(--ball-size)',
      boxShadow: "var(--ball-shadow) var(--ball-shadow) 0 ".concat(ballShadowColor, " inset"),
      backgroundColor: ball1Color,
      borderRadius: '50%',
      animationName: 'translateY',
      animationDuration: '500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationDirection: 'alternate'
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
      animationDirection: 'alternate'
    },
    '#wrap2, #ball2, #wrap2:after': {
      animationDelay: '-400ms'
    },
    '#wrap3, #ball3, #wrap3:after': {
      animationDelay: '-800ms'
    },
    '#wrap4, #ball4, #wrap4:after': {
      animationDelay: '-1200ms'
    },
    '#wrap5, #ball5, #wrap5:after': {
      animationDelay: '-1600ms'
    },
    '#ball1': {
      backgroundColor: ball1Color
    },
    '#ball2': {
      backgroundColor: ball2Color
    },
    '#ball3': {
      backgroundColor: ball3Color
    },
    '#ball4': {
      backgroundColor: ball4Color
    },
    '#ball5': {
      backgroundColor: ball5Color
    },
    '@keyframes translateX': {
      '100%': {
        transform: 'translateX(var(--ball-translate-x))'
      }
    },
    '@keyframes translateY': {
      '100%': {
        transform: 'translateY(var(--ball-translate-y))'
      }
    },
    '@keyframes scale': {
      '100%': {
        transform: 'scale(var(--ball-scale))'
      }
    },
    '@keyframes fadeIn': {
      '100%': {
        opacity: 1
      }
    }
  }), '.ant-spin', {
    '&.ant-spin-sm': _defineProperty({}, componentCls, {
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
        width: 'calc(100% - var(--ball-size))'
      },
      '.wrap': {
        '&:after': {
          width: 'var(--ball-size)',
          height: 'var(--ball-shadow-h)',
          animationName: 'scale',
          animationDuration: '500ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          animationDirection: 'alternate'
        }
      },
      '.ball': {
        width: 'var(--ball-size)',
        height: 'var(--ball-size)',
        boxShadow: "var(--ball-shadow) var(--ball-shadow) 0 ".concat(ballShadowColor, " inset"),
        animationName: 'translateY',
        animationDuration: '500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate'
      }
    }),
    '&.ant-spin-lg': _defineProperty({}, componentCls, {
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
        width: 'calc(100% - var(--ball-size))'
      },
      '.wrap': {
        '&:after': {
          width: 'var(--ball-size)',
          height: 'var(--ball-shadow-h)',
          animationName: 'scale',
          animationDuration: '500ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          animationDirection: 'alternate'
        }
      },
      '.ball': {
        width: 'var(--ball-size)',
        height: 'var(--ball-size)',
        boxShadow: "var(--ball-shadow) var(--ball-shadow) 0 ".concat(ballShadowColor, " inset"),
        animationName: 'translateY',
        animationDuration: '500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate'
      }
    })
  });
};
var prepareComponentToken = function prepareComponentToken(token) {
  return {
    ballShadowColor: 'rgba(0, 0, 0, 0.1)',
    ball1Color: '#397BF9',
    ball2Color: '#F4B400',
    ball3Color: '#EEEEEE',
    ball4Color: '#00A656',
    ball5Color: '#E3746B'
  };
};
export default genStyleHooks('LoadingIndicatorCircusBall', function (token) {
  var circusBallToken = mergeToken(token, {});
  return [createStyle(circusBallToken), {}];
}, prepareComponentToken);