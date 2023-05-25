import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "./style.scss";

export default function DatePicker() {
  const [date, setDate] = useState(null);

  return (
    <div className="card flex">
      <span className="p-float-label">
        <Calendar
          inputId="birth_date"
          value={date}
          onChange={(e) => setDate(e.value)}
          view="month"
          dateFormat="mm/yy"
        />
        <label htmlFor="birth_date">Start Date</label>
      </span>
    </div>
  );
}
