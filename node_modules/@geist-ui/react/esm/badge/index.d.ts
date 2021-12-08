import Badge from "./badge";
import BadgeAnchor from "./badge-anchor";
export declare type BadgeComponentType = typeof Badge & {
    Anchor: typeof BadgeAnchor;
};
export type { BadgeProps, BadgeTypes } from "./badge";
export type { BadgeAnchorProps, BadgeAnchorPlacement } from "./badge-anchor";
declare const _default: BadgeComponentType;
export default _default;
