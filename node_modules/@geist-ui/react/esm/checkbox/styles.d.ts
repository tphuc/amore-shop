import { GeistUIThemesPalette } from "../themes/presets";
export declare type CheckboxColor = {
    fill: string;
    bg: string;
};
export declare const getColors: (palette: GeistUIThemesPalette, status?: "secondary" | "success" | "error" | "warning" | "default" | undefined) => CheckboxColor;
