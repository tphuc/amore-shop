import React, { PropsWithChildren } from 'react';
import { GeistUIThemes } from "../themes/presets";
export interface Props {
    themeType?: string;
    themes?: Array<GeistUIThemes>;
}
declare const ThemeProvider: React.FC<PropsWithChildren<Props>>;
export default ThemeProvider;
