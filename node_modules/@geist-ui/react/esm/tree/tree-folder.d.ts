import React from 'react';
interface Props {
    name: string;
    extra?: string;
    parentPath?: string;
    level?: number;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TreeFolderProps = Props & NativeAttrs;
declare const TreeFolder: React.FC<React.PropsWithChildren<TreeFolderProps>>;
export default TreeFolder;
