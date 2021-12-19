import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export interface ButtonDropdownConfig {
    type?: NormalTypes;
    auto?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
export declare const ButtonDropdownContext: React.Context<ButtonDropdownConfig>;
export declare const useButtonDropdown: () => ButtonDropdownConfig;
