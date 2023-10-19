import { Box, Typography } from '@mui/material';
import React from 'react';

export const ComingSoon = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
      }}
    >
      <Typography variant="h3">Coming Soon</Typography>
    </Box>
  );
};
