import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const initialOptions = [{ value: '-', label: 'no data' }];

export const AccountSelect = ({
  label = 'no label',
  options = initialOptions,
  onChange = () => {},
  value = '',
}) => {
  const [val, setVal] = React.useState(value);
  console.log(label);

  const handleChange = (event, data) => {
    setVal(event.target.value);
    onChange(data.props);
  };

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <Box width={150}>
      <FormControl fullWidth>
        <Select
          size="small"
          displayEmpty
          id="demo-simple-select"
          value={val}
          fullWidth
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
