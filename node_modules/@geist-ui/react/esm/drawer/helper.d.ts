declare const drawerPlacement: ["top", "right", "bottom", "left"];
export declare type DrawerPlacement = typeof drawerPlacement[number];
export declare type DrawerTranslateItem = {
    initial: string;
    hidden: string;
    visible: string;
};
export declare const getDrawerTransform: (placement: DrawerPlacement) => DrawerTranslateItem;
export {};
