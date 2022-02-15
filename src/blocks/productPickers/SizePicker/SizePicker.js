import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Container from 'components/Container';

const SizePicker = () => {
  const theme = useTheme();
  const [size, setSize] = useState('32');

  return (
    <Container>
      <Box>
        <Typography>
          Size:{' '}
          <Typography component={'span'} fontWeight={700}>
            {size || ''}
          </Typography>
        </Typography>
        <Stack direction={'row'} spacing={1} marginTop={1}>
          {['30', '32', '34', '40'].map((item) => (
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
      </Box>
    </Container>
  );
};

export default SizePicker;
