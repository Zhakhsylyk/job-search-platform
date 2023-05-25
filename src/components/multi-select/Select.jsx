import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.css';                       
import 'primeicons/primeicons.css';                                
import 'primeflex/primeflex.css';

export default function Select() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'JavaScript', code: 'NY' },
        { name: 'PHP', code: 'RM' },
        { name: 'Python', code: 'LDN' },
        { name: 'Java', code: 'IST' },
        { name: 'Go', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                filter placeholder="Select Skills" maxSelectedLabels={3} className="w-full" />
        </div>
    );
}
