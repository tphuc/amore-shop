import React from 'react';
interface Props {
    href?: string;
    className?: string;
}
declare type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>;
export declare type UserLinkProps = Props & NativeAttrs;
declare const UserLink: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;
export default UserLink;
