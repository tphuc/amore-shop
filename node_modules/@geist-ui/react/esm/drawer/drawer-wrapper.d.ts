import React from 'react';
import { DrawerPlacement } from "./helper";
interface Props {
    className?: string;
    visible?: boolean;
    placement: DrawerPlacement;
}
export declare type DrawerWrapperProps = Props;
declare const DrawerWrapper: React.FC<React.PropsWithChildren<DrawerWrapperProps>>;
export default DrawerWrapper;
