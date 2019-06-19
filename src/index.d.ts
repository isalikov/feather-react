/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react'

export interface FeatherIconProps extends SVGAttributes<SVGElement> {
    className?: string;
    size?: number;
}

export type FeatherIcon = ComponentType<FeatherIconProps>;

export interface SourcedIcon {
    id: number;
    name: string;
    tags: string[];
}

export interface IconsSource {
    icons: SourcedIcon[];
    list: string[];
}
