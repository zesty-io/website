import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingSpinner = () => {
  return (
    <Box paddingY={2}>
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
          <CircularProgress color="primary" />
        </Box>
      </Box>
    </Box>
  );
};
