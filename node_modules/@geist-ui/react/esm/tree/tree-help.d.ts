import React, { ReactNode } from 'react';
export declare const sortChildren: (children: ReactNode | undefined, folderComponentType: React.ElementType) => (React.ReactChild | React.ReactFragment | React.ReactPortal)[];
export declare const makeChildPath: (name: string, parentPath?: string | undefined) => string;
export declare const stopPropagation: (event: React.MouseEvent) => void;
