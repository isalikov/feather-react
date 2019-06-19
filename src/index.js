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
    static propTypes = {
        children: PropTypes.oneOf(source.list).isRequired,
        className: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
    }

    static defaultProps = {
        children: 'x',
        className: '',
        size: 24,
    }

    componentDidMount() {
        this.setIconContents()
    }

    componentDidUpdate(prevProps) {
        if (this.props.children !== prevProps.children) {
            this.setIconContents()
        }
    }

    setIconContents = () => {
        this.container.innerHTML = this.getIconContents()
    }

    getIconContents = () => {
        if (!this.props || !this.props.children || !this.props.children || !source.list.includes(this.props.children)) {
            throw new Error('children prop must be string and one of valid feathericons')
        }

        return icons[this.props.children].contents
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
            ref={_ => this.container = _} />
    }
}
