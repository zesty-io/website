import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const initialOptions = [{ value: '-', label: 'no data' }];
export const UsersSelect = ({
  label = 'no label',
  options = initialOptions,
  onChange = () => {},
  value = '',
}) => {
  const [val, setVal] = React.useState(value);

  const handleChange = (event, data) => {
    setVal(event.target.value);
    onChange(data.props);
  };

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <Box sx={{ minWidth: 120 }} paddingBottom={4}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          displayEmpty
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label={label}
          onChange={handleChange}
        >
          {options.map((e) => {
            return (
              <MenuItem key={e.ZUID} value={e.value} id={e.ZUID} {...e}>
                {e.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
