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
      sx={(theme) => ({
        width,
        bgcolor: theme.palette.mode === 'light' ? grey[50] : '',
        borderRadius: '8px',
        '& fieldset': { border: `1px solid ${grey[200]}`, borderRadius: '8px' },
      })}
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
