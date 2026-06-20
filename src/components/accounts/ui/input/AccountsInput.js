import { TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useDeferredValue, useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const AccountsInput = ({ setsearch, placeholder, width = 200 }) => {
  const [internalSearch, setInternalSearch] = useState('');
  const deferredSearch = useDeferredValue(internalSearch);

  const handleChange = (e) => {
    setInternalSearch(e.target.value);
  };

  const clearInput = () => {
    setInternalSearch('');
  };

  useEffect(() => {
    setsearch(deferredSearch);
  }, [deferredSearch, setsearch]);

  return (
    <TextField
      sx={(theme) => ({
        width,
        borderRadius: '8px',
        '& fieldset': { border: `1px solid ${grey[200]}`, borderRadius: '8px' },
        '& > .MuiInputBase-root': {
          bgcolor: theme.palette.mode === 'dark' ? 'transparent' : '',
        },
      })}
      size="small"
      placeholder={placeholder}
      value={internalSearch}
      onChange={(e) => handleChange(e)}
      InputProps={{
        startAdornment: <SearchIcon color="disabled" />,
        endAdornment: internalSearch && (
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
