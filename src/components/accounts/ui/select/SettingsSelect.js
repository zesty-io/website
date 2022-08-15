import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

export const SettingsSelect = ({ value, name, options, handleAdd }) => {
  const [age, setAge] = React.useState(value);

  const handleChange = (event) => {
    handleAdd(event.target.value);
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label">{value || age}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value || age}
          defaultValue={value}
          label={name}
          onChange={handleChange}
        >
          {options?.map((e) => {
            return <MenuItem value={e.value}>{e.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
