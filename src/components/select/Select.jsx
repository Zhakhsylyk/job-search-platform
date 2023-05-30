
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './style.scss';

export default function CustomSelect({ value, onChange }) {
    const levels = [
        { name: 'Junior', id: 1 },
        { name: 'Middle', id: 2 },
        { name: 'Senior', code: 3 },
        { name: 'Expert', code: 4 },
    ];

    return (
        <div className="card flex">
            <Dropdown value={value} onChange={onChange} options={levels} optionLabel="name"
                editable placeholder="Select Experience Level" className="w-full" />
        </div>
    )
}
