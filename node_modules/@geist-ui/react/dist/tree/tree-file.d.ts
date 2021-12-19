import React from 'react';
interface Props {
    name: string;
    extra?: string;
    parentPath?: string;
    level?: number;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TreeFileProps = Props & NativeAttrs;
declare const TreeFile: React.FC<React.PropsWithChildren<TreeFileProps>>;
export default TreeFile;
