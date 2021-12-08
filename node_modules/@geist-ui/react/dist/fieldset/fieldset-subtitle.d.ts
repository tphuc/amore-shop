import React from 'react';
interface Props {
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export declare type FieldsetSubtitleProps = Props & NativeAttrs;
declare const FieldsetSubtitle: React.FC<React.PropsWithChildren<FieldsetSubtitleProps>>;
export default FieldsetSubtitle;
