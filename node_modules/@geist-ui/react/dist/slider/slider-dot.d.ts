import React from 'react';
interface Props {
    left: number;
    disabled?: boolean;
    isClick?: boolean;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type SliderDotProps = Props & NativeAttrs;
declare const SliderDot: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default SliderDot;
