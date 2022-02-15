/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FeaturedProducts = () => {
  return (
    <Box position={'relative'}>
      <Grid container>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 700, color: '#222B45' }}
            >
              Experience your music like never before.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{ color: '#222B45' }}
            >
              If we're no longer the right solution for you, we'll allow you to
              export and take your data at anytime for any reason.
            </Typography>
          </Box>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            height={54}
          >
            Discover the offer
          </Box>
        </Grid>
      </Grid>
      <Box
        component={'img'}
        src={'https://assets.maccarianagency.com/backgrounds/img33.png'}
        sx={{
          maxWidth: 390,
          height: 'auto',
          position: 'absolute',
          bottom: '-164px',
          right: 0,
          display: { xs: 'none', sm: 'block' },
        }}
      />
    </Box>
  );
};

export default FeaturedProducts;
