import * as React from 'react'

import { useEffect, useMemo, useRef } from 'react'
import { icons } from 'feather-icons'

import { getSource } from './service'
import { IconProps } from './typings'

export const source = getSource()
export const Icon: React.FC<IconProps> = ({
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
