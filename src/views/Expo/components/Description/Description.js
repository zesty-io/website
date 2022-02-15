/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Milan: the city of rising IT engineering
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
        Milan is Italy's financial and industrial capital, as well one of the
        world's leading cities of creative field. Having an important business
        history and being the largest Italian industrial center, Milan is
        definitely an attractive destination, with a big business opportunities,
        for tech companies
      </Typography>
    </Box>
  );
};

export default Description;
