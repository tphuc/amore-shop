import React from 'react';
export declare type PopoverConfig = {
    disableItemsAutoClose: boolean;
    onItemClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};
export declare const PopoverContext: React.Context<PopoverConfig>;
export declare const usePopoverContext: () => PopoverConfig;
