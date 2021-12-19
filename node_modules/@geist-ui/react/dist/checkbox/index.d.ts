import Checkbox from "./checkbox";
import CheckboxGroup from "./checkbox-group";
export declare type CheckboxComponentType = typeof Checkbox & {
    Group: typeof CheckboxGroup;
};
export type { CheckboxProps, CheckboxEvent, CheckboxEventTarget, CheckboxTypes, } from "./checkbox";
export type { CheckboxGroupProps } from "./checkbox-group";
declare const _default: CheckboxComponentType;
export default _default;
