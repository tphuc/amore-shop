import { GeistUIThemesPalette } from "../themes/presets";
export declare type RadioColor = {
    label: string;
    border: string;
    bg: string;
};
export declare const getColors: (palette: GeistUIThemesPalette, status?: "secondary" | "success" | "error" | "warning" | "default" | undefined) => RadioColor;
