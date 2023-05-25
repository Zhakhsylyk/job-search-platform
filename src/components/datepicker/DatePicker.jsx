import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';


export default function DatePicker() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Start Date</label>
            </span>
        </div>
    )
}