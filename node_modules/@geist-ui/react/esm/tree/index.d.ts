import Tree from "./tree";
import TreeFile from "./tree-file";
import TreeFolder from "./tree-folder";
export declare type TreeComponentType = typeof Tree & {
    File: typeof TreeFile;
    Folder: typeof TreeFolder;
};
export type { TreeProps, TreeFile } from "./tree";
declare const _default: TreeComponentType;
export default _default;
