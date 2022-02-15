import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Container from 'components/Container';

const QuantityPicker = () => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const quantityLimit = 4;

  return (
    <Container>
      <Box>
        <Typography>
          Quantity:{' '}
          <Typography component={'span'} fontWeight={700}>
            {quantity || 1}
          </Typography>
        </Typography>
        <Stack direction={'row'} spacing={1} flexWrap={'wrap'} marginTop={1}>
          <Box
            onClick={() => setQuantity(quantity - 1 >= 1 ? quantity - 1 : 1)}
            sx={{
              borderRadius: 1,
              paddingY: 1,
              paddingX: 2,
              border: `1px solid ${theme.palette.divider}`,
              cursor: quantity === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            <Typography
              color={quantity === 1 ? 'text.secondary' : 'text.primary'}
            >
              - Remove
            </Typography>
          </Box>
          <Box
            onClick={() =>
              setQuantity(
                quantity + 1 <= quantityLimit ? quantity + 1 : quantityLimit,
              )
            }
            sx={{
              borderRadius: 1,
              paddingY: 1,
              paddingX: 2,
              border: `1px solid ${theme.palette.divider}`,
              cursor: quantity === quantityLimit ? 'not-allowed' : 'pointer',
            }}
          >
            <Typography
              color={
                quantity === quantityLimit ? 'text.secondary' : 'text.primary'
              }
            >
              + Add
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default QuantityPicker;
