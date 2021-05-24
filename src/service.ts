import { icons } from 'feather-icons'

import { TSource } from './typings'

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

export default {}
