import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';


export default function CustomMultiSelect({ placeholder, type, value, onChange }) {
    const skills = [
        { name: 'JavaScript', code: '1' },
        { name: 'PHP', code: '2' },
        { name: 'Python', code: '3' },
        { name: 'Java', code: '4' },
        { name: 'Go', code: '5' }
    ];


    return (
        <div className="card flex">
            <MultiSelect value={value} onChange={onChange} options={skills} optionLabel="name"
                filter placeholder={placeholder} maxSelectedLabels={3} className="w-full" />
        </div>
    );
}
