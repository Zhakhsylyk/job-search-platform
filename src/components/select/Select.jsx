
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './style.scss';

export default function CustomSelect({ value, onChange }) {
    const levels = [
        { name: 'Junior', code: 'NY' },
        { name: 'Middle', code: 'RM' },
        { name: 'Senior', code: 'LDN' },
        { name: 'Expert', code: 'IST' },
    ];

    return (
        <div className="card flex">
            <Dropdown value={value} onChange={onChange} options={levels} optionLabel="name"
                editable placeholder="Select Experience Level" className="w-full" />
        </div>
    )
}
