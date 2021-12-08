import Popover from "./popover";
import PopoverItem from "./popover-item";
export declare type PopoverComponentType = typeof Popover & {
    Item: typeof PopoverItem;
    Option: typeof PopoverItem;
};
export type { PopoverProps, PopoverTriggerTypes, PopoverPlacement } from "./popover";
export type { PopoverItemProps } from "./popover-item";
declare const _default: PopoverComponentType;
export default _default;
