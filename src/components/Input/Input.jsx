import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function Input() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <span className="p-float-label">
        <InputText
          id="username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-inputtext-sm"
        />
        <label htmlFor="username">Username</label>
      </span>
    </div>
  );
}
