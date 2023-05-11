import React from 'react'
import { Shape } from './shape/Shape';
import './style.scss';

export const Pagination = () => {
    return (
        <div style={{ display: 'flex', gap: 20, userSelect:'none' }}>
            <Shape left />
            <Shape />
            <Shape />
            <Shape />
            <Shape />
            <Shape />
            <Shape right />
        </div>
    )
}
