import React, { ReactNode } from 'react';
import { ButtonProps } from "./button";
import { ButtonGroupConfig } from "../button-group/button-group-context";
export declare const getButtonChildrenWithIcon: (auto: boolean, children: ReactNode, icons: {
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
}) => JSX.Element;
export declare const filterPropsWithGroup: <T extends React.PropsWithChildren<ButtonProps>>(props: T, config: ButtonGroupConfig) => T;
