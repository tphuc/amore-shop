import Breadcrumbs from "./breadcrumbs";
import BreadcrumbsItem from "./breadcrumbs-item";
import BreadcrumbsSeparator from "./breadcrumbs-separator";
export declare type BreadcrumbsComponentType = typeof Breadcrumbs & {
    Item: typeof BreadcrumbsItem;
    Separator: typeof BreadcrumbsSeparator;
};
export type { BreadcrumbsProps } from "./breadcrumbs";
export type { BreadcrumbsItemProps } from "./breadcrumbs-item";
export type { BreadcrumbsSeparatorProps } from "./breadcrumbs-separator";
declare const _default: BreadcrumbsComponentType;
export default _default;
