import * as React from 'react'

import { Icon, source } from './index'

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        size: {
            control: {
                type: 'number',
            },
        },
    },
}

export const List: React.FC = (props) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        {source.list.map((name) => (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
            }}>
                <Icon key={name} style={{ marginRight: 10 }} {...props} >{name}</Icon>
                <span>{name}</span>
            </div>
        ))}
    </div>
)
