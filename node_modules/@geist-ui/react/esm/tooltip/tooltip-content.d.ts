import React, { MutableRefObject } from 'react';
import { Placement, SnippetTypes } from "../utils/prop-types";
interface Props {
    parent?: MutableRefObject<HTMLElement | null> | undefined;
    placement: Placement;
    type: SnippetTypes;
    visible: boolean;
    hideArrow: boolean;
    offset: number;
    className?: string;
    iconOffset: TooltipIconOffset;
}
export declare type TooltipIconOffset = {
    x: string;
    y: string;
};
declare const TooltipContent: React.FC<React.PropsWithChildren<Props>>;
export default TooltipContent;
