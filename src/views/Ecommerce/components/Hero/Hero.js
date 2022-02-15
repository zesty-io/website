import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { colors } from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Experience your music{' '}
              </Typography>
              like never before.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Supper offer till the end of June. All the original headphones at
              maximum:
            </Typography>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700, color: colors.red[400] }}
            >
              $299.95
            </Typography>
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={2}
            >
              Discover the offer
            </Box>
          </Box>
          <Box
            paddingX={2}
            paddingY={1}
            bgcolor={'alternate.dark'}
            borderRadius={2}
          >
            <Typography variant="body1" component="p">
              $60 Apple Music gift card with purchase of select Beats products.*
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={'https://assets.maccarianagency.com/backgrounds/img34.png'}
          alt="..."
          effect="blur"
          maxWidth={600}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
