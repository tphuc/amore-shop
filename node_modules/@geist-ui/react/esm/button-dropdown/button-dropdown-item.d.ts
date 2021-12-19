import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type ButtonDropdownItemTypes = NormalTypes;
interface Props {
    main?: boolean;
    type?: ButtonDropdownItemTypes;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
}
declare type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export declare type ButtonDropdownItemProps = Props & NativeAttrs;
declare const ButtonDropdownItem: React.FC<React.PropsWithChildren<ButtonDropdownItemProps>>;
export default ButtonDropdownItem;
