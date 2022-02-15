import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box maxWidth={{ md: '70%' }}>
      <Typography
        variant="h4"
        color="text.primary"
        fontWeight={700}
        gutterBottom
      >
        Beautiful components and building blocks for your web app
      </Typography>
      <Typography component="p" color={'text.secondary'}>
        Over 300+ professionally designed, fully responsive, expertly crafted
        MUI component compositions you can drop into your MUI projects and
        customize to your heart’s content.
      </Typography>
    </Box>
  );
};

export default Hero;
