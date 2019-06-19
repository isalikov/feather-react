import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { icons } from 'feather-icons'

const index = (round = 100000) => (Math.random() * round).toFixed(2)

export const source = {
    list: Object.keys(icons),
    icons: Object.keys(icons)
        .map(key => ({
            id: index(),
            name: key,
            tags: icons[key].tags,
        })),
}

export default class FeatherIcon extends PureComponent {
    componentDidMount() {
        const { contents } = icons[this.props.children]

        this.svg.innerHTML = contents
    }

    render() {
        const { children, size, ...props } = this.props
        const { attrs } = icons[children]

        return <svg xmlns={attrs.xmlns}
            width={size}
            height={size}
            viewBox={attrs.viewBox}
            fill={attrs.fill}
            stroke={attrs.stroke}
            strokeWidth={attrs['stroke-width']}
            strokeLinecap={attrs['stroke-linecap']}
            strokeLinejoin={attrs['stroke-linejoin']}
            {...props}
            ref={ref => this.svg = ref} />
    }
}

FeatherIcon.propTypes = {
    children: PropTypes.oneOf(source.list).isRequired,
    className: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

FeatherIcon.defaultProps = {
    children: 'x',
    className: '',
    size: 24,
}
