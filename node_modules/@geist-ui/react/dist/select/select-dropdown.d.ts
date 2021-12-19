import React, { CSSProperties } from 'react';
interface Props {
    visible: boolean;
    className?: string;
    dropdownStyle?: CSSProperties;
    disableMatchWidth?: boolean;
    getPopupContainer?: () => HTMLElement | null;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type SelectDropdownProps = Props & NativeAttrs;
declare const SelectDropdown: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement | null>>;
export default SelectDropdown;
