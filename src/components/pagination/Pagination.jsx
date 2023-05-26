import React from 'react'
import { Shape } from './shape/Shape';
import './style.scss';

export const Pagination = ({ totalPages, page }) => {
    const PageItem = () => {
        const items = [];
        for (let i = 0; i <= 4; i++) {
            items.push(<Shape key={i}>{i + 1}</Shape>);
        }
        return items;
    };
    return (
        <div style={{ display: 'flex', gap: 20, userSelect: 'none' }}>
            <Shape left />
            {
                PageItem()
            }
            <Shape right />
        </div>
    )
}
