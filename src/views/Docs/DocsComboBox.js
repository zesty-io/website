import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Main = ({ options, onChange }) => {
  const handleChange = (_, newValue) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      onChange={handleChange}
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Docs" />}
    />
  );
};

export const DocsComboBox = React.memo(Main);
