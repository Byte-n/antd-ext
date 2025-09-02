import { DrawerProps } from 'antd';
import React from 'react';
export interface EnhanceDrawerProps extends DrawerProps {
    resize?: boolean | {
        min?: number;
        max?: number;
        onReSizeStart?: () => void;
        onReSizeEnd?: () => void;
        dragIcon?: React.ReactNode;
    };
}
declare const _default: (props: EnhanceDrawerProps) => React.JSX.Element;
export default _default;
