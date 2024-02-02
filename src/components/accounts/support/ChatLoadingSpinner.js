import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ChatLoadingSpinner = () => {
  return (
    <Box
      paddingY={2}
      height="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 2,
        background: 'transparent',
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
          background: 'transparent',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    </Box>
  );
};

export default ChatLoadingSpinner;
