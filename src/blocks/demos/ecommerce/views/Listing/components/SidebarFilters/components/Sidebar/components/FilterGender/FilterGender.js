import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const FilterGender = () => {
  const [open, setOpen] = useState(true);
  const [genders, setGenders] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (item) => {
    const newGenders = genders;
    const index = newGenders.indexOf(item);
    index === -1 ? newGenders.push(item) : newGenders.splice(index, 1);
    setGenders(newGenders);
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
        <Typography fontWeight={700}>Gender</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack spacing={1}>
          {['Men', 'Women', 'Unisex'].map((item) => (
            <Box key={item}>
              <FormControlLabel
                sx={{ marginLeft: 0 }}
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked={genders.indexOf(item) >= 0}
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

export default FilterGender;
