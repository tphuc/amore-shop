import { MutableRefObject } from 'react';
export declare type ClickAwayGetContainer = () => HTMLElement | null;
declare const useClickAway: (ref: MutableRefObject<HTMLElement | null>, handler: (event: Event) => void) => void;
export default useClickAway;
