import { ConfigProvider, Drawer, DrawerProps, theme } from 'antd';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface EnhanceDrawerProps extends DrawerProps {
  resize?:
    | boolean
    | {
        min?: number;
        max?: number;
        onReSizeStart?: () => void;
        onReSizeEnd?: () => void;
      };
}

let incr = 1;
export default (props: EnhanceDrawerProps) => {
  const {
    placement = 'right',
    drawerRender,
    resize,
    rootClassName,
    ...rest
  } = props;
  const rootClass = useRef(`drawer-root-${incr++}`);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const getWrapperElement = useCallback(() => {
    if (!wrapperRef.current) {
      wrapperRef.current = document
        .getElementsByClassName(rootClass.current)[0]
        .querySelector('.ant-drawer-content-wrapper');
    }
    return wrapperRef.current!;
  }, []);

  const onRDragStart = useCallback(() => {
    getWrapperElement().style.transition = 'none';
    if (typeof resize === 'object') {
      resize.onReSizeStart?.();
    }
  }, [resize]);
  const onRDragEnd = useCallback(() => {
    getWrapperElement().style.transition = '';
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

      if (placement === 'left' || placement === 'right') {
        ele.style.width = `${_limit(ele.clientWidth - x)}px`;
      } else {
        ele.style.height = `${_limit(ele.clientHeight + y)}px`;
      }
    },
    [placement, resize],
  );
  return (
    <Drawer
      {...rest}
      rootClassName={
        rootClassName
          ? `${rootClassName} ${rootClass.current}`
          : rootClass.current
      }
      placement={placement}
      drawerRender={(node) => {
        return (
          <>
            {drawerRender ? drawerRender(node) : node}
            {resize && (
              <Handler
                placement={placement}
                onRDragStart={onRDragStart}
                onRDragEnd={onRDragEnd}
                onRDragMove={onRDragMove}
              />
            )}
          </>
        );
      }}
    />
  );
};

interface HandlerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  placement: DrawerProps['placement'];
  onRDragStart?: () => void;
  onRDragEnd?: () => void;
  onRDragMove?: (
    deltaX: number,
    deltaY: number,
    totalDeltaX: number,
    totalDeltaT: number,
  ) => void;
}

/**
 * Resize handler for the drawer
 */
const Handler = (props: HandlerProps) => {
  const { placement, onRDragStart, onRDragEnd, onRDragMove, style, ...rest } =
    props;
  const [drag, setDrag] = useState(false);
  const mouseRef = useRef<{
    x: number;
    y: number;
    preX: number;
    preY: number;
  }>();
  const onRRef = useRef({ onRDragStart, onRDragEnd, onRDragMove });
  onRRef.current = { onRDragStart, onRDragEnd, onRDragMove };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    mouseRef.current = {
      x: e.pageX,
      y: e.pageY,
      preX: e.pageX,
      preY: e.pageY,
    };
    onRRef.current?.onRDragStart?.();
    setDrag(true);
  }, []);

  useEffect(() => {
    const _onMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) {
        return;
      }
      const { x, y, preX, preY } = mouseRef.current;
      const totalDeltaX = e.pageX - x;
      const totalDeltaY = e.pageY - y;
      const deltaX = e.pageX - preX;
      const deltaY = e.pageY - preY;
      mouseRef.current.preX = e.pageX;
      mouseRef.current.preY = e.pageY;
      onRRef.current?.onRDragMove?.(deltaX, deltaY, totalDeltaX, totalDeltaY);
    };
    const _onMouseUp = () => {
      if (!mouseRef.current) {
        return;
      }
      setDrag(false);
      mouseRef.current = undefined;
      onRRef.current?.onRDragEnd?.();
    };

    window.addEventListener('mousemove', _onMouseMove);
    window.addEventListener('mouseup', _onMouseUp);
    window.addEventListener('dragend', _onMouseUp);
    window.addEventListener('mouseleave', _onMouseUp);
    return () => {
      window.removeEventListener('mousemove', _onMouseMove);
      window.removeEventListener('mouseup', _onMouseUp);
    };
  });

  const configContext = useContext(ConfigProvider.ConfigContext);
  const { token } = theme.useToken();
  const dragColor =
    configContext.theme?.components?.Drawer?.dragColor || token.colorPrimary;
  const handlerStyles = createHandlerStyles(placement, dragColor, drag, style);

  return (
    <div
      {...rest}
      onMouseDown={onMouseDown}
      style={{
        ...handlerStyles,
        ...style,
      }}
    />
  );
};

// 定义 Handler 的样式
const createHandlerStyles = (
  placement: DrawerProps['placement'],
  dragColor: string,
  drag?: boolean,
  style?: React.CSSProperties,
): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'auto',
    backgroundColor: drag ? dragColor : undefined,
  };

  switch (placement) {
    case 'right':
      return {
        ...baseStyles,
        cursor: 'ew-resize',
        left: 0,
        top: 0,
        height: '100%',
        width: '4px',
        ...style,
      };
    case 'left':
      return {
        ...baseStyles,
        cursor: 'ew-resize',
        right: 0,
        top: 0,
        height: '100%',
        width: '4px',
        ...style,
      };
    case 'top':
      return {
        ...baseStyles,
        cursor: 'ns-resize',
        left: 0,
        bottom: 0,
        height: '4px',
        width: '100%',
        ...style,
      };
    case 'bottom':
      return {
        ...baseStyles,
        cursor: 'ns-resize',
        left: 0,
        top: 0,
        height: '4px',
        width: '100%',
        ...style,
      };
    default:
      return {
        ...baseStyles,
        cursor: 'ew-resize',
        left: 0,
        top: 0,
        height: '100%',
        width: '4px',
        ...style,
      };
  }
};
