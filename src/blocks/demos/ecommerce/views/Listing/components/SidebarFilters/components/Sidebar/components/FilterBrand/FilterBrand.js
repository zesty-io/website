import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const FilterBrand = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [brands, setBrands] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (item) => {
    const newBrands = brands;
    const index = newBrands.indexOf(item);
    index === -1 ? newBrands.push(item) : newBrands.splice(index, 1);
    setBrands(newBrands);
  };

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        sx={{ cursor: 'pointer' }}
        marginBottom={1}
        onClick={() => handleClick()}
      >
        <Typography fontWeight={700}>Brand</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box
          marginBottom={1}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: '0 !important',
            },
            '& .MuiOutlinedInput-input': {
              padding: 1,
            },
          }}
        >
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              sx={{
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </Box>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Stack spacing={1}>
          {[
            'Adidas',
            'Nike',
            'Puma',
            'OVS',
            'H&M',
            'Reebok',
            'Zara',
            'Other',
          ].map((item) => (
            <Box key={item}>
              <FormControlLabel
                sx={{ marginLeft: 0 }}
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked={brands.indexOf(item) >= 0}
                    onChange={() => handleCheckboxChange(item)}
                    sx={{
                      padding: 0,
                      marginRight: 1,
                    }}
                  />
                }
                label={item}
              />
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default FilterBrand;
