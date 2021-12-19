import { CardTypes } from "../utils/prop-types";
import { GeistUIThemesPalette } from "../themes/presets";
export declare type CardStyles = {
    color: string;
    bgColor: string;
    borderColor: string;
};
export declare const getStyles: (type: CardTypes, palette: GeistUIThemesPalette, isShadow?: boolean | undefined) => CardStyles;
