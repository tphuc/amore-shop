import React from 'react';
interface Props {
    visible?: boolean;
    enterTime?: number;
    leaveTime?: number;
    clearTime?: number;
    className?: string;
    name?: string;
}
export declare type CssTransitionProps = Props;
declare const CssTransition: React.FC<React.PropsWithChildren<CssTransitionProps>>;
export default CssTransition;
