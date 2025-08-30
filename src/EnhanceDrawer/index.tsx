import { ConfigProvider, Drawer, DrawerProps } from 'antd';
import DragIndicator from 'antd-ext/EnhanceDrawer/DragIndicator';
import classNames from 'classnames';
import React, { useCallback, useContext, useRef } from 'react';

export interface EnhanceDrawerProps extends DrawerProps {
  resize?:
    | boolean
    | {
        min?: number;
        max?: number;
        onReSizeStart?: () => void;
        onReSizeEnd?: () => void;
        dragIcon?: React.ReactNode;
      };
}

let incr = 1;
export default (props: EnhanceDrawerProps) => {
  const {
    placement = 'right',
    drawerRender,
    resize,
    rootClassName,
    prefixCls: customizePrefixCls,
    ...rest
  } = props;

  const configContext = useContext(ConfigProvider.ConfigContext);
  const drawerPrefixCls = configContext.getPrefixCls('drawer');
  const rootClass = useRef(`enhance-drawer-root-${incr++}`);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const getWrapperElement = useCallback(() => {
    if (!wrapperRef.current) {
      wrapperRef.current = document
        .getElementsByClassName(rootClass.current)[0]
        .querySelector(`.${drawerPrefixCls}-content-wrapper`);
    }
    return wrapperRef.current!;
  }, [drawerPrefixCls]);

  const onRDragStart = useCallback(() => {
    getWrapperElement().style.transition = 'none';
    getWrapperElement().style.pointerEvents = 'none';
    if (typeof resize === 'object') {
      resize.onReSizeStart?.();
    }
  }, [resize]);
  const onRDragEnd = useCallback(() => {
    getWrapperElement().style.transition = '';
    getWrapperElement().style.pointerEvents = 'none';
    if (typeof resize === 'object') {
      resize.onReSizeEnd?.();
    }
  }, [resize]);
  const onRDragMove = useCallback(
    (x: number, y: number) => {
      const ele = getWrapperElement();

      function _limit(v: number) {
        if (typeof resize !== 'object') {
          return v;
        }
        const { min, max } = resize;
        if (min !== undefined && v < min) {
          return min;
        }
        if (max !== undefined && v > max) {
          return max;
        }
        return v;
      }

      if (placement === 'right') {
        ele.style.width = `${_limit(ele.clientWidth - x)}px`;
      } else if (placement === 'left') {
        ele.style.width = `${_limit(ele.clientWidth + x)}px`;
      } else if (placement === 'top') {
        ele.style.height = `${_limit(ele.clientHeight + y)}px`;
      } else {
        ele.style.height = `${_limit(ele.clientHeight - y)}px`;
      }
    },
    [placement, resize],
  );
  return (
    <Drawer
      {...rest}
      prefixCls={drawerPrefixCls}
      rootClassName={classNames(rootClassName, rootClass.current)}
      placement={placement}
      drawerRender={(node) => {
        return (
          <>
            {drawerRender ? drawerRender(node) : node}
            {resize && (
              <DragIndicator
                prefixCls={customizePrefixCls}
                placement={placement}
                onRDragStart={onRDragStart}
                onRDragEnd={onRDragEnd}
                onRDragMove={onRDragMove}
                dragIcon={
                  typeof resize === 'object' ? resize.dragIcon : undefined
                }
              />
            )}
          </>
        );
      }}
    />
  );
};
