import React, { MutableRefObject } from 'react';
export interface AutoCompleteConfig {
    value?: string;
    updateValue?: (val: string) => unknown;
    visible?: boolean;
    updateVisible?: (next: boolean) => unknown;
    ref?: MutableRefObject<HTMLElement | null>;
}
export declare const AutoCompleteContext: React.Context<AutoCompleteConfig>;
export declare const useAutoCompleteContext: () => AutoCompleteConfig;
