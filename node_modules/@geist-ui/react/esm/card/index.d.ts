import Card from "./card";
import CardFooter from "./card-footer";
import CardContent from "./card-content";
export declare type CardComponentType = typeof Card & {
    Footer: typeof CardFooter;
    Actions: typeof CardFooter;
    Content: typeof CardContent;
    Body: typeof CardContent;
};
export type { CardProps } from "./card";
export type { CardContentProps } from "./card-content";
export type { CardFooterProps } from "./card-footer";
export type { CardTypes } from "../utils/prop-types";
declare const _default: CardComponentType;
export default _default;
