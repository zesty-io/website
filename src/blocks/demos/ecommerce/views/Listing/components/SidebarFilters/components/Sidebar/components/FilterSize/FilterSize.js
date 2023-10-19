import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const FilterSize = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [size, setSize] = useState('M');

  const handleClick = () => {
    setOpen(!open);
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
          Size:{' '}
          <Typography component={'span'} fontWeight={700}>
            {size || ''}
          </Typography>
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack direction={'row'} spacing={1}>
          {['S', 'M', 'L', 'XL'].map((item) => (
            <Box
              key={item}
              onClick={() => setSize(item)}
              sx={{
                borderRadius: 1,
                padding: 1,
                border: `2px solid ${
                  size === item
                    ? theme.palette.primary.main
                    : theme.palette.divider
                }`,
                cursor: 'pointer',
              }}
            >
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default FilterSize;
