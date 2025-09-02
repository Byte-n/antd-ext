import { ButtonProps } from 'antd';
import { TooltipProps, TooltipRef } from 'antd/es/tooltip';
import React from 'react';
export interface SubmitButtonProps<T = unknown> extends Omit<ButtonProps, 'disabled' | 'htmlType'> {
    /**
     * 若表单values中的值与{formInitialValues}的差异，若无差异，则不允许提交
     */
    formInitialValues?: T;
    tooltipProps?: Omit<TooltipProps, 'title' | 'open'>;
}
export interface SubmitButtonRef extends HTMLButtonElement {
    getTooltipRef: () => TooltipRef | null;
}
/**
 * 提交按钮
 * @constructor
 */
declare const SubmitButton: React.ForwardRefExoticComponent<SubmitButtonProps<unknown> & React.RefAttributes<SubmitButtonRef>>;
export default SubmitButton;
