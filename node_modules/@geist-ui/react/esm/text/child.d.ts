import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export interface Props {
    tag: keyof JSX.IntrinsicElements;
    type?: NormalTypes;
    className?: string;
}
declare type NativeAttrs = Omit<React.DetailsHTMLAttributes<any>, keyof Props>;
export declare type TextChildProps = Props & NativeAttrs;
declare const TextChild: React.FC<React.PropsWithChildren<TextChildProps>>;
export default TextChild;
