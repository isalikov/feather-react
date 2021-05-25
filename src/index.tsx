import * as React from 'react'

import { useEffect, useMemo, useRef } from 'react'
import { icons } from 'feather-icons'

export interface IconProps extends React.HTMLAttributes<SVGSVGElement>{
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

const index = (round = 100000) => (Math.random() * round).toFixed(2)

export const getSource = (): TSource => {
    return {
        list: Object.keys(icons),
        icons: Object.keys(icons).map((key) => ({
            id: index(),
            name: key,
            tags: icons[key].tags,
        })),
    }
}

export const source = getSource()

const Icon: React.FC<IconProps> = ({
    children,
    name,
    size = 16,

    ...props
}) => {
    const container = useRef<SVGSVGElement | null>(null)

    const { attrs } = useMemo(() => icons[children] || icons.x, [children])

    useEffect(() => {
        if (container.current) {
            const getter = name || children || 'x'

            console.log(getter, children, name)

            if (source.list.includes(getter)) {
                container.current.innerHTML = icons[getter].contents
            }
        }
    }, [children])

    return (
        <svg
            xmlns={attrs.xmlns}
            width={size}
            height={size}
            viewBox={attrs.viewBox}
            fill={attrs.fill}
            stroke={attrs.stroke}
            strokeWidth={attrs['stroke-width']}
            strokeLinecap={attrs['stroke-linecap']}
            strokeLinejoin={attrs['stroke-linejoin']}
            {...props}
            ref={container}
        />
    )
}

export default Icon
