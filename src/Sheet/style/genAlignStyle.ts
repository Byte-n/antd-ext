export default function genAlignStyle(componentCls: string) {
  return {
    [`&${componentCls}-cell-align`]: {
      [`&-x-start`]: {
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
      },
      '&-x-center': {
        justifyContent: 'center',
        justifyItems: 'center',
      },
      '&-x-end': {
        justifyContent: 'flex-end',
        justifyItems: 'flex-end',
      },
      '&-y-start': {
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      },
      '&-y-center': {
        alignItems: 'center',
        alignContent: 'center',
      },
      '&-y-end': {
        alignItems: 'flex-end',
        alignContent: 'flex-end',
      },
    },
  };
}
