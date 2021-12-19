import React, { PropsWithChildren } from 'react';
import { GeistUIThemes } from "../themes/presets";
export declare type GeistProviderProps = {
    themes?: Array<GeistUIThemes>;
    themeType?: string | 'dark' | 'light';
};
declare const GeistProvider: React.FC<PropsWithChildren<GeistProviderProps>>;
export default GeistProvider;
