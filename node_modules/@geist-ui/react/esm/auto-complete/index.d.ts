import AutoComplete from "./auto-complete";
import AutoCompleteItem from "./auto-complete-item";
import AutoCompleteSearching from "./auto-complete-searching";
import AutoCompleteEmpty from "./auto-complete-empty";
export declare type AutoCompleteComponentType = typeof AutoComplete & {
    Item: typeof AutoCompleteItem;
    Option: typeof AutoCompleteItem;
    Searching: typeof AutoCompleteSearching;
    Empty: typeof AutoCompleteEmpty;
};
export type { AutoCompleteOption, AutoCompleteOptions, AutoCompleteProps, AutoCompleteTypes, } from "./auto-complete";
declare const _default: AutoCompleteComponentType;
export default _default;
