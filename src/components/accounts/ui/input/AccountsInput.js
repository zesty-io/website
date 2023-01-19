import { TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const AccountsInput = ({
  search,
  setsearch,
  placeholder,
  width = 200,
}) => {
  const handleChange = (e) => {
    setsearch(e.target.value);
  };
  const clearInput = () => {
    setsearch('');
  };
  return (
    <TextField
      sx={(theme) => ({
        width,
        bgcolor: theme.palette.mode === 'light' ? '' : '',
        borderRadius: '8px',
        '& fieldset': { border: `1px solid ${grey[200]}`, borderRadius: '8px' },
      })}
      size="small"
      placeholder={placeholder}
      value={search}
      onChange={(e) => handleChange(e)}
      InputProps={{
        startAdornment: <SearchIcon color="disabled" />,
        endAdornment: search && (
          <HighlightOffIcon
            fontSize="small"
            color="primary"
            onClick={clearInput}
            sx={{ cursor: 'pointer' }}
          />
        ),
      }}
    />
  );
};
