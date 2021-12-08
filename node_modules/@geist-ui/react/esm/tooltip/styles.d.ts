import { SnippetTypes } from "../utils/prop-types";
import { GeistUIThemesPalette } from "../themes/presets";
export declare type TooltipColors = {
    bgColor: string;
    color: string;
};
export declare const getColors: (type: SnippetTypes, palette: GeistUIThemesPalette) => TooltipColors;
