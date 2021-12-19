import { Props as LinkBasicProps } from "../link/link";
import React from 'react';
interface Props {
    href?: string;
    nextLink?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
}
declare type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>;
declare type NativeLinkAttrs = Omit<NativeAttrs, keyof LinkBasicProps>;
export declare type BreadcrumbsItemProps = Props & NativeLinkAttrs;
declare const BreadcrumbsItem: React.ForwardRefExoticComponent<Props & NativeLinkAttrs & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;
export default BreadcrumbsItem;
