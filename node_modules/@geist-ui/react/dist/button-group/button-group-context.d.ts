import React from 'react';
import { ButtonTypes } from "../utils/prop-types";
export interface ButtonGroupConfig {
    type?: ButtonTypes;
    ghost?: boolean;
    disabled?: boolean;
    isButtonGroup: boolean;
}
export declare const ButtonGroupContext: React.Context<ButtonGroupConfig>;
export declare const useButtonGroupContext: () => ButtonGroupConfig;
