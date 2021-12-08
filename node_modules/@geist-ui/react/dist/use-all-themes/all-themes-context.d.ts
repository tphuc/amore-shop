import React from 'react';
import { GeistUIThemes } from "../themes/presets";
export declare type AllThemesConfig = {
    themes: Array<GeistUIThemes>;
};
export declare const AllThemesContext: React.Context<AllThemesConfig>;
export declare const useAllThemes: () => AllThemesConfig;
