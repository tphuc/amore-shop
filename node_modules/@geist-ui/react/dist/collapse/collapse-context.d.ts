import React from 'react';
export interface CollapseConfig {
    values: Array<number>;
    updateValues?: (currentIndex: number | undefined, nextState: boolean) => unknown;
}
export declare const CollapseContext: React.Context<CollapseConfig>;
export declare const useCollapseContext: () => CollapseConfig;
