import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

export const AccountsAutoComplete = ({
  options,
  width = 150,
  title = '',
  onChange,
}) => {
  return (
    <Autocomplete
      disablePortal
      title={title}
      id={title}
      options={options}
      size="small"
      sx={{ width }}
      defaultValue={options[0]}
      getOptionLabel={(option) => option.label}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};
