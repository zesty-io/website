import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="text.secondary"
        gutterBottom
      >
        &copy; theFront. 2021, Maccarian. All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="text.secondary"
        component={'p'}
      >
        When you visit or interact with our sites, services or tools, we or our
        authorised service providers may use cookies for storing information to
        help provide you with a better, faster and safer experience and for
        marketing purposes.
      </Typography>
    </Box>
  );
};

export default Footer;
