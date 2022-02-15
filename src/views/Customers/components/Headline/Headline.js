/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          You're in good company.
        </Typography>
        <Typography variant="h3" color={'primary'} fontWeight={700}>
          Join millions of businesses today.
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
