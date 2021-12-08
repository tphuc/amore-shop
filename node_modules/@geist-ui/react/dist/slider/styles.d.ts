import { GeistUIThemesPalette } from "../themes/presets";
export declare type SelectColor = {
    bg: string;
};
export declare const getColors: (palette: GeistUIThemesPalette, status?: "secondary" | "success" | "error" | "warning" | "default" | undefined) => SelectColor;
