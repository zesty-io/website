import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';

const HeroWithDashboardScreenshotAndCta = ({
  title,
  description,
  image,
  cta_left,
  cta_right,
  cta_left_url,
  cta_right_url,
}) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                {title || 'Beautiful data representation'}
                {/* <Typography color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.3,
                    )} 0%)`,
                  }}
                >
                  built with theFront
                </Typography> */}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                {description ||
                  `
                World developers use our theFront theme to build their internal
                tools and client admin applications.
                Save yourself time and money.
                `}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Button
                href={cta_left_url || FillerContent.href}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                {cta_left || 'Start Now'}
              </Button>
              <Box
                href={cta_right_url || FillerContent.href}
                component={Button}
                variant="outlined"
                color="primary"
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                fullWidth={isMd ? false : true}
              >
                {cta_right || 'Learn More'}
              </Box>
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
            component={'img'}
            height={1}
            width={1}
            src={
              image ||
              'https://assets.maccarianagency.com/screenshots/dashboard.png'
            }
            alt="..."
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
    </Container>
  );
};

export default HeroWithDashboardScreenshotAndCta;
