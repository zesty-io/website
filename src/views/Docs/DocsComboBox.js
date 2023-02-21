import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';

const Main = ({ options, onChange, width = 1 }) => {
  const handleChange = (_, newValue) => {
    onChange(newValue);
  };

  return (
    <Stack width={width}>
      <Autocomplete
        disablePortal
        onChange={handleChange}
        id="combo-box-demo"
        options={options}
        sx={{ width: '100%' }}
        renderInput={(params) => (
          <TextField {...params} label="Docs" color="secondary" size="small" />
        )}
      />
    </Stack>
  );
};

export const DocsComboBox = React.memo(Main);
