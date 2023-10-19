import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortBySelectBox = () => {
  const theme = useTheme();
  const [sortBy, setSortBy] = useState(2);

  const handleSelectChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sortBy}
          onChange={handleSelectChange}
          sx={{
            '.MuiSelect-select.MuiSelect-outlined': {
              paddingY: '9px !important',
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider,
            },
          }}
        >
          <MenuItem value={1}>Best seller</MenuItem>
          <MenuItem value={2}>Best match</MenuItem>
          <MenuItem value={3}>Price: low to high</MenuItem>
          <MenuItem value={4}>Price: high to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBySelectBox;
