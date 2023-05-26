import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DateRangeIcon from "@mui/icons-material/DateRange";

import "react-datepicker/dist/react-datepicker.css";
import CustomMultiSelect from "../../../../select/MultiSelect";
import DatePicker from "../../../../datepicker/DatePicker";
import Input from "../../../../Input/Input";
import CustomSelect from "../../../../select/Select";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        borderRadius: 5,
      }}
    >
      <DateRangeIcon
        onClick={props.onClick}
        sx={{ color: "gray" }}
        fontSize="small"
      />
      <label onClick={props.onClick} ref={ref}>
        {props.value || props.placeholder}
      </label>
    </div>
  );
});

export default function Experience({ data, setData }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const handleChange = (name) => e => {
    setData({ ...data, [name]: e.target.value })
  }

  console.log(data);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Work Experience
      </Typography>
      <div >
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange('title')}
            label="Job title"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 1 }}>
          <TextField
            required
            id="org"
            name="org"
            label="Organization"
            value={data.org}
            onChange={handleChange('org')}
            fullWidth
            variant="standard"
          />
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 30,
          width: "100%",
          gap: 10,
        }}
      >
        <div style={{ width: "50%" }}>
          <DatePicker />
        </div>
        <div>
          <DatePicker />
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <CustomMultiSelect placeholder="Select Skills" type="level" value={data.skills} onChange={handleChange('skills')} />
      </div>
      <div style={{ marginTop: 30, width: "100%" }}>
        <CustomSelect value={data.levels} onChange={handleChange('levels')} />
      </div>
    </React.Fragment>
  );
}
