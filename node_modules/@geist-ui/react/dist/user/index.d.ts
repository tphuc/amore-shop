import User from "./user";
import UserLink from "./user-link";
export declare type UserComponentType = typeof User & {
    Link: typeof UserLink;
};
export type { UserProps } from "./user";
declare const _default: UserComponentType;
export default _default;
