import { GeistUIThemesPalette } from "../themes/presets";
import { ButtonTypes } from "../utils/prop-types";
import { ButtonProps } from "./button";
export interface ButtonColorGroup {
    bg: string;
    border: string;
    color: string;
}
export declare const getButtonGhostColors: (palette: GeistUIThemesPalette, type: ButtonTypes) => ButtonColorGroup | null;
export declare const getButtonColors: (palette: GeistUIThemesPalette, props: ButtonProps) => ButtonColorGroup;
export declare const getButtonGhostHoverColors: (palette: GeistUIThemesPalette, type: ButtonTypes) => ButtonColorGroup | null;
export declare const getButtonHoverColors: (palette: GeistUIThemesPalette, props: ButtonProps) => ButtonColorGroup;
export interface ButtonCursorGroup {
    cursor: string;
    events: string;
}
export declare const getButtonCursor: (disabled: boolean, loading: boolean) => ButtonCursorGroup;
export declare const getButtonDripColor: (palette: GeistUIThemesPalette, props: ButtonProps) => string;
