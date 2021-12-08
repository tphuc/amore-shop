import React from 'react';
import { GridJustify, GridDirection, GridAlignItems, GridAlignContent } from "./grid-types";
export declare type GridBreakpointsValue = number | boolean;
export interface GridBasicComponentProps {
    xs?: GridBreakpointsValue;
    sm?: GridBreakpointsValue;
    md?: GridBreakpointsValue;
    lg?: GridBreakpointsValue;
    xl?: GridBreakpointsValue;
    justify?: GridJustify;
    direction?: GridDirection;
    alignItems?: GridAlignItems;
    alignContent?: GridAlignContent;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof GridBasicComponentProps>;
export declare type GridBasicItemProps = GridBasicComponentProps & NativeAttrs;
declare const GridBasicItem: React.FC<React.PropsWithChildren<GridBasicItemProps>>;
export default GridBasicItem;
