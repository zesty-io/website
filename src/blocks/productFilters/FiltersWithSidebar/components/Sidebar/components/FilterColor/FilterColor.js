import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const FilterColor = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [color, setColor] = useState('blue');

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
          Color:{' '}
          <Typography component={'span'} fontWeight={700}>
            {color || ''}
          </Typography>
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack direction={'row'} spacing={1} flexWrap={'wrap'}>
          {['black', 'gray', 'white', 'red', 'blue', 'indigo'].map((item) => (
            <Box
              key={item}
              onClick={() => setColor(item)}
              sx={{
                borderRadius: '100%',
                padding: 0.5,
                border: `2px solid ${
                  color === item
                    ? theme.palette.primary.main
                    : theme.palette.divider
                }`,
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  borderRadius: '100%',
                  padding: 1.5,
                  bgcolor: item,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              />
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default FilterColor;
