import React from 'react';
declare const placement: ["topLeft", "topRight", "bottomLeft", "bottomRight"];
export declare type BadgeAnchorPlacement = typeof placement[number];
interface Props {
    placement?: BadgeAnchorPlacement;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type BadgeAnchorProps = Props & NativeAttrs;
declare const BadgeAnchor: React.FC<React.PropsWithChildren<BadgeAnchorProps>>;
export default BadgeAnchor;
