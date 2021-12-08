import Image from "./image";
import ImageBrowser from "./image-browser";
export declare type ImageComponentType = typeof Image & {
    Browser: typeof ImageBrowser;
};
export type { ImageProps } from "./image";
export type { ImageBrowserProps, ImageAnchorProps } from "./image-browser";
declare const _default: ImageComponentType;
export default _default;
