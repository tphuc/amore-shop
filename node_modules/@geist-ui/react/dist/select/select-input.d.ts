import React from 'react';
export declare type SelectInputProps = {
    visible: boolean;
    onBlur: () => void;
    onFocus: () => void;
};
declare const SelectInput: React.ForwardRefExoticComponent<SelectInputProps & React.RefAttributes<HTMLInputElement | null>>;
export default SelectInput;
