import { DrawerProps } from 'antd';
import React from 'react';
interface DragIndicatorProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placement: DrawerProps['placement'];
    onRDragStart?: () => void;
    onRDragEnd?: () => void;
    onRDragMove?: (deltaX: number, deltaY: number, totalDeltaX: number, totalDeltaT: number) => void;
    prefixCls?: string;
    dragIcon?: React.ReactNode;
}
/**
 * Resize handler for the drawer
 */
export default function DragIndicator(props: DragIndicatorProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
