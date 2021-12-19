import React from 'react';
interface Props {
    isRight?: boolean;
    isSingle?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type ButtonIconProps = Props & NativeAttrs;
declare const ButtonIcon: React.FC<React.PropsWithChildren<ButtonIconProps>>;
export default ButtonIcon;
