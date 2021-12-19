import React from 'react';
declare const FileTreeValueType: ["directory", "file"];
export declare type TreeFile = {
    type: typeof FileTreeValueType[number];
    name: string;
    extra?: string;
    files?: Array<TreeFile>;
};
interface Props {
    value?: Array<TreeFile>;
    initialExpand?: boolean;
    onClick?: (path: string) => void;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TreeProps = Props & NativeAttrs;
declare const Tree: React.FC<React.PropsWithChildren<TreeProps>>;
export default Tree;
