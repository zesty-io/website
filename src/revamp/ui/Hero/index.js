import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const media =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/media.png',
  acorns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/acornsHero.svg',
  bjs =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/bjsHero.svg',
  phoenixSuns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/phoenixSunsHero.svg',
  rocketLeague =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/rocketLeagueHero.svg',
  singlife =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/singlifeHero.svg',
  sony =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/sonyHero.svg',
  circle =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/Ellipse.svg';

const Hero = ({
  header = 'Content Management for enterprise of any size',
  subtitle = 'Create, manage, and deliver content at scale - with a suite of forward thinking features to meet your business needs.',
  primaryBtn = 'Schedule Demo',
  primaryBtnLink = '/demo?ab=light',
  secondaryBtn = 'Watch Demo Video',
  secondaryBtnLink = '#',
  subtitle2 = 'TRUSTED BY INDUSTRY LEADING COMPANIES',
}) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Grid
        container
        px={{ xs: 2, tablet: 4, lg: 14 }}
        py={{ xs: 4, tablet: 6, lg: 8 }}
        spacing={{ lg: 8 }}
        position="relative"
      >
        <Grid
          item
          xs={12}
          lg={6}
          mb={4}
          sx={(theme) => ({
            [theme.breakpoints.up('xl')]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          })}
        >
          <Stack py={{ lg: '92px' }}>
            <Stack mb={4}>
              <Typography
                py={0}
                variant="h2"
                fontWeight={800}
                fontSize={{ xs: 36, tablet: '52px' }}
                lineHeight={{ xs: '44px', tablet: '56px' }}
                mb={{ xs: 2, tablet: '20px', lg: '4px', desktopWide: '12px' }}
              >
                {header}
              </Typography>

              <Typography
                color="text.secondary"
                variant="body1"
                sx={(theme) => ({
                  [theme.breakpoints.up('tablet')]: {
                    fontSize: '18px',
                    lineHeight: '28px',
                  },
                })}
              >
                {subtitle}
              </Typography>
            </Stack>

            <Stack
              spacing="12px"
              mb={4}
              direction={{
                xs: 'column',
                tablet: 'row',
              }}
            >
              <Button
                href={primaryBtnLink}
                variant="contained"
                color="primary"
                size={isLg ? 'extraLarge' : 'large'}
              >
                {primaryBtn}
              </Button>
              <Button
                href={secondaryBtnLink}
                variant="outlined"
                color="primary"
                size={isLg ? 'extraLarge' : 'large'}
              >
                {secondaryBtn}
              </Button>
            </Stack>

            <Typography
              mb={3}
              sx={(theme) => ({
                [theme.breakpoints.down('lg')]: {
                  letterSpacing: '1px',
                  fontSize: '12px',
                  lineHeight: '12px',
                },
              })}
              color="text.secondary"
            >
              {subtitle2}
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              rowGap="24px"
              columnGap="20px"
            >
              <img src={sony} width="91px" height="32px" />
              <img src={rocketLeague} width="88.35px" height="32px" />
              <img src={singlife} width="102.12px" height="32px" />
              <img src={acorns} width="94px" height="32px" />
              <img src={bjs} width="36.48px" height="32px" />
              <img src={phoenixSuns} width="31.59px" height="32px" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ position: 'relative', zIndex: 1 }}>
          <img
            src={media}
            width="100%"
            height="100%"
            style={{ objectFit: 'contain ' }}
          />
        </Grid>
      </Grid>
      <Box
        component="img"
        src={circle}
        sx={(theme) => ({
          [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            top: '-23%',
            left: '40%',
            width: '100%',
            height: '100%',
          },
          [theme.breakpoints.up('desktopWide')]: {
            position: 'absolute',
            top: '-18%',
            left: '35%',
            width: '100%',
            height: '100%',
          },
          [theme.breakpoints.up('xl')]: {
            position: 'absolute',
            top: '-13%',
            left: '35%',
            width: '100%',
            height: '100%',
          },
          [theme.breakpoints.down('lg')]: {
            display: 'none',
          },
        })}
      />
    </Box>
  );
};

export default Hero;
