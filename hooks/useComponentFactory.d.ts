import React from 'react';
export interface UseComponentProps {
    onClose: () => void;
}
type UseComponentPropsExt<D> = Omit<D, 'onClose'> & Omit<UseComponentProps, 'onClose'> & {
    onClose?: () => void;
};
/**
 * useComponent
 */
export default function useComponentFactory(): [
    <D extends UseComponentProps>(Comp: React.FC<D> | React.ComponentClass<D>, props?: UseComponentPropsExt<D>) => void,
    React.ReactElement,
    <D extends UseComponentProps>(Comp: React.FC<D> | React.ComponentClass<D>, props?: UseComponentPropsExt<D>) => VoidFunction
];
interface UseComponentContextType {
    renderModal: <D extends UseComponentProps>(Comp: React.FC<D> | React.ComponentClass<D>, props?: UseComponentPropsExt<D>) => void;
    renderModalFactory: <D extends UseComponentProps>(Comp: React.FC<D> | React.ComponentClass<D>, props?: UseComponentPropsExt<D>) => () => void;
}
export declare const UseModalComponentContext: React.Context<UseComponentContextType>;
/**
 * useModalComponent
 * 此函数必须在 UseModalComponentContext.Provider 下调用
 * const [renderModal, components, renderModalFactory] = useComponentFactory();
 * <UseModalComponentContext.Provider value={{ renderModal, renderModalFactory }}>
 *    // 这里面调用，
 * </UseModalComponentContext.Provider>
 *
 */
export declare function useModalComponent(): UseComponentContextType;
export {};
