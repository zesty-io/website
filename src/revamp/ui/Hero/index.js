import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import media from '../../assets/media.png';
import acorns from '../../assets/acorns.jpg';
import bjs from '../../assets/bjs.jpg';
import phoenixSuns from '../../assets/phoenixSuns.jpg';
import rocketLeague from '../../assets/rocketLeague.jpg';
import singlife from '../../assets/singlife.jpg';
import sony from '../../assets/sony.jpg';
import circle from '../../assets/Ellipse.svg';
import React from 'react';

const Hero = ({
  header = 'Digital Asset Management made easy',
  subtitle = 'Manage and distribute all your assets and understand how they’re performing all from one place.',
  primaryBtn = 'Start Now for FREE',
  secondaryBtn = 'Schedule Demo',
  subtitle2 = 'TRUSTED BY INDUSTRY LEADING COMPANIES',
}) => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Grid
        container
        px={{ xs: 2, sm2: 4, lg: 14 }}
        py={{ xs: 4, sm2: 6, lg: 8 }}
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
                fontSize={{ xs: 36, sm2: '52px' }}
                lineHeight={{ xs: '44px', sm2: '56px' }}
                mb={{ xs: 2, sm2: '20px', lg: '4px', lg2: '12px' }}
              >
                {header}
              </Typography>

              <Typography
                color="text.secondary"
                variant="body1"
                sx={(theme) => ({
                  [theme.breakpoints.up('sm2')]: {
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
                sm2: 'row',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ textTransform: 'none' }}
              >
                {primaryBtn}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ textTransform: 'none' }}
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
              <img src={sony.src} width="96px" height="32px" />
              <img src={rocketLeague.src} width="96px" height="32px" />
              <img src={acorns.src} width="96px" height="32px" />
              <img src={bjs.src} width="35px" height="32px" />
              <img src={singlife.src} width="103.34px" height="32px" />
              <img src={phoenixSuns.src} width="31.63px" height="32px" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ position: 'relative', zIndex: 1 }}>
          <img
            src={media.src}
            width="100%"
            height="100%"
            style={{ objectFit: 'contain ' }}
          />
        </Grid>
      </Grid>
      <Box
        component="img"
        src={circle.src}
        sx={(theme) => ({
          [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            top: '-23%',
            left: '40%',
            width: '100%',
            height: '100%',
            transform: 'rotate(32deg)',
          },
          [theme.breakpoints.up('lg2')]: {
            position: 'absolute',
            top: '-18%',
            left: '35%',
            width: '100%',
            height: '100%',
            transform: 'rotate(32deg)',
          },
          [theme.breakpoints.up('xl')]: {
            position: 'absolute',
            top: '-13%',
            left: '35%',
            width: '100%',
            height: '100%',
            transform: 'rotate(32deg)',
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
