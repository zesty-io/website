import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ProductDialog } from './components';

import Container from 'components/Container';

const PopupBoxWithProductDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Container display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={320} width={1}>
        <Box
          sx={{
            borderRadius: 2,
            width: 1,
            height: 380,
            bgcolor: 'divider',
            marginBottom: 2,
          }}
        />
        <Box
          sx={{
            borderRadius: 2,
            width: '80%',
            height: 4,
            bgcolor: 'divider',
            marginBottom: 1,
          }}
        />
        <Box
          sx={{
            borderRadius: 2,
            width: '60%',
            height: 4,
            bgcolor: 'divider',
            marginBottom: 2,
          }}
        />
        <Button
          color={'primary'}
          size={'large'}
          fullWidth
          sx={{
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            fontWeight: 700,
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          onClick={() => setOpen(true)}
        >
          Click to see the details
        </Button>
        <ProductDialog open={open} onClose={() => setOpen(false)} />
      </Box>
    </Container>
  );
};

export default PopupBoxWithProductDetails;
