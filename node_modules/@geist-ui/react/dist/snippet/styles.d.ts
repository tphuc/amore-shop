import { SnippetTypes } from "../utils/prop-types";
import { GeistUIThemesPalette } from "../themes/presets";
export declare type SnippetStyles = {
    color: string;
    border: string;
    bgColor: string;
};
export declare const getStyles: (type: SnippetTypes, palette: GeistUIThemesPalette, fill?: boolean | undefined) => SnippetStyles;
