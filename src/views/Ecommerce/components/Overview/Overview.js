/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Overview = () => {
  return (
    <Box
      bgcolor={'primary.main'}
      borderRadius={2}
      paddingBottom={{ xs: 2, md: 0 }}
    >
      <Grid container data-aos="fade-up">
        <Grid item container alignItems="flex-start" xs={12} md={4}>
          <Box
            component={'img'}
            src={'https://assets.maccarianagency.com/backgrounds/img35.png'}
            alt="..."
            sx={{
              objectFit: 'cover',
              maxWidth: '90%',
              width: 300,
            }}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          sx={{
            marginY: 2,
            paddingX: 2,
          }}
        >
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              align={'center'}
              sx={{ fontWeight: 700, color: 'common.white' }}
            >
              Fide more products
            </Typography>
            <Typography align={'center'} sx={{ color: 'common.white' }}>
              If we're no longer the right solution for you, we'll allow you to
              export and take your data at anytime for any reason.
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={12} md={4}>
          <Box
            component={'img'}
            src={'https://assets.maccarianagency.com/backgrounds/img36.png'}
            alt="..."
            sx={{
              objectFit: 'contain',
              maxWidth: '90%',
              width: 300,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
