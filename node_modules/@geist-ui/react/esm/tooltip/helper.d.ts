import { MutableRefObject } from 'react';
export interface ReactiveDomReact {
    top: number;
    bottom: number;
    left: number;
    right: number;
    width: number;
    height: number;
}
export declare const getRect: (ref: MutableRefObject<HTMLElement | null>) => ReactiveDomReact;
