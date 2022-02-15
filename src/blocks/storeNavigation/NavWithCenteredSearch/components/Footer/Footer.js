import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Typography fontWeight={700} color={'text.primary'}>
            T H E F R O N T
          </Typography>
          <Box display={'flex'} alignItems={'center'}>
            <Box>
              <Link
                variant={'body2'}
                underline="none"
                component="a"
                href="#"
                color="text.primary"
              >
                About
              </Link>
            </Box>
            <Box marginLeft={2}>
              <Link
                variant={'body2'}
                underline="none"
                component="a"
                href="#"
                color="text.primary"
              >
                Contacts
              </Link>
            </Box>
            <Box marginLeft={2}>
              <Link
                variant={'body2'}
                underline="none"
                component="a"
                href="#"
                color="text.primary"
              >
                Support
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
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
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
