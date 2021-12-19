import React from 'react';
interface Props {
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export declare type FieldsetTitleProps = Props & NativeAttrs;
declare const FieldsetTitle: React.FC<React.PropsWithChildren<FieldsetTitleProps>>;
export default FieldsetTitle;
