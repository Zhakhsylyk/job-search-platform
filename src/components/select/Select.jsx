
import React, { useState, useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';
import './style.scss';
import { useDispatch, useSelector } from "react-redux";

export default function CustomSelect({ value, onChange, levelSelector }) {

    const levels = useSelector(state => state.dictionary.levels);
    const types = useSelector(state => state.dictionary.types);

    return (
        <div className="card flex">
            <Dropdown value={value} onChange={onChange} options={levelSelector ? levels : types} optionLabel="name"
                editable placeholder={levelSelector ? "Select Experience Level" : "Select type"} className="w-full custom-dropdown" />
        </div>
    )
}
