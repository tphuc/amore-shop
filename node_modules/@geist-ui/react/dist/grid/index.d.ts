import Grid from "./grid";
import GridContainer from "./grid-container";
export declare type GridComponentType = typeof Grid & {
    Container: typeof GridContainer;
};
export type { GridContainerProps } from "./grid-container";
export type { GridProps } from "./grid";
export type { GridBreakpointsValue } from "./basic-item";
export type { GridAlignContent, GridAlignItems, GridDirection, GridJustify, GridWrap, } from "./grid-types";
declare const _default: GridComponentType;
export default _default;
