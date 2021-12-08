import { GeistUIThemesPalette } from "../themes/presets";
export declare type BrowserColors = {
    color: string;
    barBgColor: string;
    inputBgColor: string;
    borderColor: string;
    titleColor: string;
};
export declare const getBrowserColors: (invert: boolean, palette: GeistUIThemesPalette) => BrowserColors;
