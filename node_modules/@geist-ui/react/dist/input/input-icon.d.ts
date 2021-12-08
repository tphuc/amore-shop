import React from 'react';
export interface InputIconProps {
    icon: React.ReactNode;
    clickable: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare const InputIcon: React.NamedExoticComponent<InputIconProps>;
export default InputIcon;
