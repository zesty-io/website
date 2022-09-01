import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';

export const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#fff',
        height: '40vh',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <Box display={'flex'} gap={20} paddingX={6}>
        <Skeleton variant="rectangular" width={200} height={30} />
        <Skeleton variant="rectangular" width={300} height={30} />
        <Skeleton variant="rectangular" width={80} height={30} />
        <Skeleton variant="rectangular" width={100} height={30} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          background: '#fff',
          width: '100%',
          justifyContent: 'center',
          justifyItems: 'center',
          margin: 'auto',
          alignItems: 'center',
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    </Box>
  );
};
