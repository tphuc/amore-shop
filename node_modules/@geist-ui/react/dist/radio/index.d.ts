import Radio from "./radio";
import RadioGroup from "./radio-group";
import RadioDescription from "./radio-description";
export declare type RadioComponentType = typeof Radio & {
    Group: typeof RadioGroup;
    Description: typeof RadioDescription;
    Desc: typeof RadioDescription;
};
export type { RadioProps, RadioEvent, RadioEventTarget, RadioTypes } from "./radio";
export type { RadioGroupProps } from "./radio-group";
export type { RadioDescriptionProps } from "./radio-description";
declare const _default: RadioComponentType;
export default _default;
