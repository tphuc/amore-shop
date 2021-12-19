import { GeistUIThemesPalette } from "../themes/presets";
export declare type SelectColor = {
    border: string;
    borderActive: string;
    iconBorder: string;
    placeholderColor: string;
};
export declare const getColors: (palette: GeistUIThemesPalette, status?: "secondary" | "success" | "error" | "warning" | "default" | undefined) => SelectColor;
