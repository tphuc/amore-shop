import Page from "./page";
import PageHeader from "./page-header";
import PageContent from "./page-content";
import PageFooter from "./page-footer";
export declare type PageComponentType = typeof Page & {
    Header: typeof PageHeader;
    Content: typeof PageContent;
    Body: typeof PageContent;
    Footer: typeof PageFooter;
};
export type { PageProps, PageRenderMode } from "./page";
export type { PageHeaderProps } from "./page-header";
export type { PageContentProps } from "./page-content";
export type { PageFooterProps } from "./page-footer";
declare const _default: PageComponentType;
export default _default;
