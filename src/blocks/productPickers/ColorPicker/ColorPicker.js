import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Container from 'components/Container';

const ColorPicker = () => {
  const theme = useTheme();
  const [color, setColor] = useState('blue');

  return (
    <Container>
      <Box>
        <Typography>
          Color:{' '}
          <Typography component={'span'} fontWeight={700}>
            {color || ''}
          </Typography>
        </Typography>
        <Stack direction={'row'} spacing={1} flexWrap={'wrap'} marginTop={1}>
          {['gray', 'white', 'red', 'blue', 'indigo'].map((item) => (
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
      </Box>
    </Container>
  );
};

export default ColorPicker;
