/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutTop = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          item
          container
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
          alignItems={'center'}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Easily find leads and customers
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'text.secondary'}
              gutterBottom
            >
              Send one-off and automated email, push, and in-app messages to
              people. Create better stories.
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              We get thousands of job postings weekly, but only accept the
              openings at the top companies. We get thousands of job postings
              weekly, but only accept the openings at the top companies.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutTop;
