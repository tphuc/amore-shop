import ButtonDropdown from "./button-dropdown";
import ButtonDropdownItem from "./button-dropdown-item";
declare type ButtonDropdownType = typeof ButtonDropdown & {
    Item: typeof ButtonDropdownItem;
};
export type { ButtonDropdownProps, ButtonDropdownTypes } from "./button-dropdown";
export type { ButtonDropdownItemProps, ButtonDropdownItemTypes, } from "./button-dropdown-item";
declare const _default: ButtonDropdownType;
export default _default;
