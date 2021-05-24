import { HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<SVGSVGElement>{
    size?: number
    name?: string
    children?: string
}

export type TIcon = {
    id: string
    name: string
    tags: string[]
}

export type TSource = {
    list: string[]
    icons: TIcon[]
}
