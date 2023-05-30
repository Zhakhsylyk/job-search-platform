import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";

export default function CustomMultiSelect({
  placeholder,
  type,
  value,
  onChange,
}) {
  const skills = [
    { name: "JavaScript", id: "1" },
    { name: "PHP", id: 2 },
    { name: "Python", id: 3 },
    { name: "Java", id: 4 },
    { name: "Go", id: 5 },
  ];

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
