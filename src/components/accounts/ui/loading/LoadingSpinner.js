import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';

export const LoadingSpinner = () => {
  return (
    <Box paddingY={2}>
      <Box>
        <Skeleton variant="text" width={200} height={50} />
      </Box>
      <Box
        paddingTop={2}
        sx={{
          display: 'flex',
          background: '#fff',
          height: '40vh',
          width: '100%',
          flexDirection: 'column',
          boxShadow: 1,
        }}
      >
        <Box display={'flex'} gap={20} paddingX={6} paddingTop={2}>
          <Skeleton variant="text" width={200} height={30} />
          <Skeleton variant="text" width={300} height={30} />
          <Skeleton variant="text" width={80} height={30} />
          <Skeleton variant="text" width={100} height={30} />
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
    </Box>
  );
};
