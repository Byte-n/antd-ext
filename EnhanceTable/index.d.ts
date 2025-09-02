import { TableProps } from 'antd';
import React from 'react';
export interface EnhanceTableProps<T> extends Omit<TableProps<T>, 'sticky'> {
    /**
     * 支持 y: auto，自适应，不用计算大小。
     * Card下使用注意：<br/>
     * <Card styles={{ body: { height: '100%' } }}><br/>
     *   <EnhanceTable/><br/>
     * </Card><br/>
     */
    scroll?: TableProps['scroll'] & {
        y?: 'auto' | number | string;
    };
    /**
     * 斑马纹, 启用斑马纹，则表头颜色、hover颜色也会相应调整
     */
    stripe?: boolean;
}
/**
 *
 * @param props
 */
export default function <T>(props: EnhanceTableProps<T>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
