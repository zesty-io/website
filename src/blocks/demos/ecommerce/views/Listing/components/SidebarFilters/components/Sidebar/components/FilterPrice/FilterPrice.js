import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const valuetext = (value) => `$${value[0]} - $${value[1]}`;

const FilterPrice = () => {
  const [value, setValue] = useState([20, 400]);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        marginBottom={1}
        sx={{ cursor: 'pointer' }}
        onClick={() => handleClick()}
      >
        <Typography fontWeight={700}>
          Price:{' '}
          <Typography component={'span'} fontWeight={700}>
            {valuetext(value) || ''}
          </Typography>
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box paddingX={3}>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            min={20}
            max={1230}
            disableSwap={true}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default FilterPrice;
