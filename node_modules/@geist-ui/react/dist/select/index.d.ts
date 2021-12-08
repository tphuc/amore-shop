import Select from "./select";
import SelectOption from "./select-option";
export declare type SelectComponentType = typeof Select & {
    Option: typeof SelectOption;
};
export type { SelectProps, SelectTypes, SelectRef } from "./select";
export type { SelectOptionProps } from "./select-option";
declare const _default: SelectComponentType;
export default _default;
