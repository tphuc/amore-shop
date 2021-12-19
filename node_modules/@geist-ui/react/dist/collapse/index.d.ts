import Collapse from "./collapse";
import CollapseGroup from "./collapse-group";
export declare type CollapseComponentType = typeof Collapse & {
    Group: typeof CollapseGroup;
};
export type { CollapseProps } from "./collapse";
export type { CollapseGroupProps } from "./collapse-group";
declare const _default: CollapseComponentType;
export default _default;
