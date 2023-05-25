import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DateRangeIcon from '@mui/icons-material/DateRange';


import "react-datepicker/dist/react-datepicker.css";
import Select from '../../../../multi-select/Select';
import DatePicker from '../../../../datepicker/DatePicker';
import Input from '../../../../Input/Input';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', borderRadius: 5 }}>
            <DateRangeIcon onClick={props.onClick} sx={{ color: 'gray' }} fontSize='small' />
            <label onClick={props.onClick} ref={ref}>
                {props.value || props.placeholder}
            </label>
        </div>
    );
});

export default function PaymentForm() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Work Experience
            </Typography>
            <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ marginTop: 20 }}>
                    <Input />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Input />
                </div>
            </div>
            <div style={{ display: 'flex', margin: '0 auto', marginTop: 30, justifyContent: 'space-around' }}>
                <div>
                    <DatePicker />
                </div>
                <div>
                    <DatePicker />
                </div>
            </div>
            <div style={{ marginTop: 30, width: '100%' }}>
                <Select />
            </div>
        </React.Fragment>
    );
}