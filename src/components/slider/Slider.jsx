import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ value, onChange }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  console.log(value);
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => "Salary range"}
        value={value}
        min={100}
        max={10000}
        onChange={handleChange}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
