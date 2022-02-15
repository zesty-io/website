import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { PopupBox } from './components';

import Container from 'components/Container';

const PopupWithImage = () => {
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
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          }
          onClick={() => setOpen(true)}
        >
          Click to open the popup
        </Button>
        <PopupBox open={open} onClose={() => setOpen(false)} />
      </Box>
    </Container>
  );
};

export default PopupWithImage;
