import { FormControl, MenuItem, Select, Stack } from '@mui/material';
import React from 'react';

export const SettingsSelect = ({ value, options, handleAdd }) => {
  const [age, setAge] = React.useState(value);

  const handleChange = (event) => {
    handleAdd(event.target.value);
    setAge(event.target.value);
  };

  return (
    <Stack sx={{ width: 1 }}>
      <FormControl fullWidth variant="outlined">
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          defaultValue={value}
          onChange={handleChange}
        >
          {options?.map((e) => {
            return <MenuItem value={e.value}>{e.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};
