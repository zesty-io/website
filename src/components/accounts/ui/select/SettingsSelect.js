import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const SettingsSelect = ({ options, handleAdd }) => {
  const handleChange = (event) => {
    handleAdd(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Age"
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
