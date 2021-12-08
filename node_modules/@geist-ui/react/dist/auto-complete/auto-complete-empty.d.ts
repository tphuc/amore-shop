import React from 'react';
interface Props {
    hidden?: boolean;
    className?: string;
}
export declare type AutoCompleteEmptyProps = Props & React.HTMLAttributes<any>;
declare const AutoCompleteEmpty: React.FC<React.PropsWithChildren<AutoCompleteEmptyProps>>;
export default AutoCompleteEmpty;
