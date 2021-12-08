import Tabs from "./tabs";
import TabsItem from "./tabs-item";
export declare type TabsComponentType = typeof Tabs & {
    Item: typeof TabsItem;
    Tab: typeof TabsItem;
};
export type { TabsProps } from "./tabs";
declare const _default: TabsComponentType;
export default _default;
