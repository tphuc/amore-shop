import React, { CSSProperties } from 'react';
interface Props {
    visible: boolean;
    className?: string;
    disableMatchWidth?: boolean;
    dropdownStyle?: CSSProperties;
    getPopupContainer?: () => HTMLElement | null;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type AutoCompleteDropdownProps = Props & NativeAttrs;
declare const AutoCompleteDropdown: React.FC<React.PropsWithChildren<AutoCompleteDropdownProps>>;
export default AutoCompleteDropdown;
