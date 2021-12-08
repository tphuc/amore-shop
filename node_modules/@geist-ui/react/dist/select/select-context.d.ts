import React, { MutableRefObject } from 'react';
export interface SelectConfig {
    value?: string | string[];
    updateValue?: (next: string | undefined) => unknown;
    visible?: boolean;
    updateVisible?: (next: boolean) => unknown;
    disableAll?: boolean;
    ref?: MutableRefObject<HTMLElement | null>;
}
export declare const SelectContext: React.Context<SelectConfig>;
export declare const useSelectContext: () => SelectConfig;
