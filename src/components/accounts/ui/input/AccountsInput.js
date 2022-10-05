import { TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export const AccountsInput = ({
  search,
  setsearch,
  placeholder,
  width = 200,
}) => {
  return (
    <TextField
      variant="outlined"
      sx={{
        width,
        '& fieldset': { border: `1px solid ${grey[400]}`, borderRadius: '8px' },
      }}
      size="small"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setsearch(e.target.value)}
      InputProps={{
        startAdornment: <SearchIcon color="disabled" />,
      }}
    />
  );
};
