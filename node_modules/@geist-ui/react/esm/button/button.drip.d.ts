import React from 'react';
interface Props {
    x: number;
    y: number;
    onCompleted: () => void;
    color: string;
}
export declare type ButtonDrip = Props;
declare const ButtonDrip: React.FC<ButtonDrip>;
export default ButtonDrip;
