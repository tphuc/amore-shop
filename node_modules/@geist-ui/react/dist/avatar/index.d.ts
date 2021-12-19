import Avatar from "./avatar";
import AvatarGroup from "./avatar-group";
export declare type AvatarComponentType = typeof Avatar & {
    Group: typeof AvatarGroup;
};
export type { AvatarProps } from "./avatar";
export type { AvatarGroupProps } from "./avatar-group";
declare const _default: AvatarComponentType;
export default _default;
