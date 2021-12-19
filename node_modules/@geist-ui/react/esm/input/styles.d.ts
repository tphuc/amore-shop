import { GeistUIThemesPalette } from "../themes/presets";
export declare type InputColor = {
    color: string;
    borderColor: string;
    hoverBorder: string;
};
export declare const getColors: (palette: GeistUIThemesPalette, status?: "secondary" | "success" | "error" | "warning" | "default" | undefined) => InputColor;
