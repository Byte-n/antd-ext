import { ButtonProps, PopconfirmProps } from 'antd';
import React from 'react';
type PopProps = Omit<PopconfirmProps, 'title' | 'description' | 'onConfirm' | 'onCancel' | 'okText' | 'cancelText' | 'showCancel'>;
type PopPropsCommon = Partial<Pick<PopconfirmProps, Exclude<keyof PopconfirmProps, keyof PopProps>>>;
export type ConfirmButtonProps = Omit<ButtonProps, 'onClick' | 'onClickCapture'> & PopPropsCommon & {
    popProps?: PopProps;
    popTitle?: string;
};
export interface ConfirmButtonRef extends HTMLButtonElement {
    getPopRef: () => React.RefObject<any> | null;
}
declare const ConfirmButton: React.ForwardRefExoticComponent<Omit<ButtonProps, "onClick" | "onClickCapture"> & Partial<Pick<PopconfirmProps, "title" | "description" | "onConfirm" | "onCancel" | "okText" | "cancelText" | "showCancel">> & {
    popProps?: PopProps | undefined;
    popTitle?: string | undefined;
} & React.RefAttributes<ConfirmButtonRef>>;
export default ConfirmButton;
