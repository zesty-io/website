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

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      <Grid
        container
        spacing={4}
        flexDirection={isMobile ? 'column-reverse' : 'row'}
      >
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                {title || FillerContent.header}
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
                {description || FillerContent.description}
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
                {cta_left || FillerContent.cta}
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
                {cta_right || FillerContent.cta}
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
            src={image || FillerContent.dashboard_image}
            alt="..."
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
