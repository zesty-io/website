/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Customization = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          CUSTOMIZATION
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Customize your product
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          We aim to take care of you.
          <br />
          Need help with installation, find a bug, or just need a clarifiction
          about our documentation?
          <br />
          We'll be there to lend a helping hand.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Start now
          </Button>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
          >
            Learn more
          </Box>
        </Box>
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid container alignItems="center">
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={
                'https://assets.maccarianagency.com/screenshots/dashboard.png'
              }
              alt="..."
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid
            container
            alignItems="center"
            sx={{
              marginTop: { xs: 0, md: '40%' },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={
                'https://assets.maccarianagency.com/screenshots/dashboard1.jpg'
              }
              alt="..."
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customization;
