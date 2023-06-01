import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { useSelector } from "react-redux";

export default function CustomMultiSelect({
  placeholder,
  type,
  value,
  onChange,
}) {
  const skills = useSelector(state => state.dictionary.skills)

  return (
    <div className="card flex">
      <MultiSelect
        value={value}
        onChange={onChange}
        options={skills}
        optionLabel="name"
        filter
        placeholder={placeholder}
        maxSelectedLabels={3}
        className="w-full"
      />
    </div>
  );
}
