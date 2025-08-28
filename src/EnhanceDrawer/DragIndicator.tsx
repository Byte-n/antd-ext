import { DragOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { ConfigProvider, DrawerProps } from 'antd';
import useDragIndicatorStyle from 'antd-ext/EnhanceDrawer/useDragIndicatorStyle';
import classNames from 'classnames';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface DragIndicatorProps
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
  prefixCls?: string;
  dragIcon?: React.ReactNode;
}

/**
 * Resize handler for the drawer
 */
export default function DragIndicator(props: DragIndicatorProps) {
  const {
    placement,
    onRDragStart,
    onRDragEnd,
    onRDragMove,
    prefixCls: customizePrefixCls,
    dragIcon,
    ...rest
  } = props;
  const [dragging, setDragging] = useState(false);
  const mouseRef = useRef<{
    x: number;
    y: number;
    prevX: number;
    prevY: number;
  }>();
  const onRRef = useRef({ onRDragStart, onRDragEnd, onRDragMove });
  onRRef.current = { onRDragStart, onRDragEnd, onRDragMove };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    mouseRef.current = {
      x: e.pageX,
      y: e.pageY,
      prevX: e.pageX,
      prevY: e.pageY,
    };
    onRRef.current?.onRDragStart?.();
    setDragging(true);
  }, []);

  useEffect(() => {
    const _onMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) {
        return;
      }
      const { x, y, prevX, prevY } = mouseRef.current;
      const totalDeltaX = e.pageX - x;
      const totalDeltaY = e.pageY - y;
      const deltaX = e.pageX - prevX;
      const deltaY = e.pageY - prevY;
      mouseRef.current.prevX = e.pageX;
      mouseRef.current.prevY = e.pageY;
      onRRef.current?.onRDragMove?.(deltaX, deltaY, totalDeltaX, totalDeltaY);
    };
    const _onMouseUp = () => {
      if (!mouseRef.current) {
        return;
      }
      setDragging(false);
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
  const prefixCls = configContext.getPrefixCls(
    'drawer-dragging-indicator',
    customizePrefixCls,
  );
  const [wrapCSSVar, hashId, cssVarCls] = useDragIndicatorStyle(prefixCls);
  console.log('hashId:', hashId, cssVarCls);

  // 根据位置选择对应的图标
  const getDragIcon = useCallback(() => {
    // 如果外部传入了图标，优先使用外部图标
    if (dragIcon) {
      return dragIcon;
    }

    // 否则使用默认图标
    let defaultIcon;
    switch (placement) {
      case 'left':
        defaultIcon = (
          <VerticalAlignMiddleOutlined style={{ transform: 'rotate(90deg)' }} />
        );
        break;
      case 'right':
        defaultIcon = (
          <VerticalAlignMiddleOutlined style={{ transform: 'rotate(90deg)' }} />
        );
        break;
      case 'top':
        defaultIcon = <VerticalAlignMiddleOutlined />;
        break;
      case 'bottom':
        defaultIcon = <VerticalAlignMiddleOutlined />;
        break;
      default:
        defaultIcon = <DragOutlined />;
    }

    return defaultIcon;
  }, [dragIcon, placement]);

  return wrapCSSVar(
    <div
      {...rest}
      onMouseDown={onMouseDown}
      className={classNames(
        prefixCls,
        placement,
        { dragging },
        hashId,
        cssVarCls,
      )}
    >
      <span className="drag-icon">{getDragIcon()}</span>
    </div>,
  );
}
