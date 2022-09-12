import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';

const HeroWithDashboardScreenshotAndCta = ({
  title,
  subtitle,
  description,
  image,
  cta_left_text,
  cta_right_text,
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
                component="h1"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                {title}
              </Typography>
              <Typography
                variant="h3"
                component="p"
                color={theme.palette.zesty.zestyOrange}
                sx={{ fontWeight: 700 }}
              >
                {subtitle}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="p"
                component="h3"
                color="text.secondary"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                }}
              >
                {description || FillerContent.description}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <TryFreeButton
                variant="contained"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
                text={cta_left_text || FillerContent.cta}
              ></TryFreeButton>
              <Box
                href={cta_right_url || FillerContent.href}
                component={Button}
                variant="outlined"
                color={theme.palette.zestyOrange}
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ xs: 2 }}
                fullWidth={isMd ? false : true}
                sx={{
                  color: '#FF5D0A',
                  borderColor: '#FF5D0A',
                  '&:hover': {
                    borderColor: '#FF5D0A',
                    backgroundColor: '#FF5D0A',
                    color: 'white',
                  },
                }}
              >
                {cta_right_text || FillerContent.cta}
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
            alt="headless cms image"
            borderRadius={2}
            maxWidth={600}
            sx={{
              filter: theme.palette.mode === 'dark' ? 'brightness(1)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroWithDashboardScreenshotAndCta;
