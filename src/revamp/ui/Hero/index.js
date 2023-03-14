import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import schemaPic from '../../assets/schema.png';
import acorns from '../../assets/acorns.jpg';
import bjs from '../../assets/bjs.jpg';
import phoenixSuns from '../../assets/phoenixSuns.jpg';
import rocketLeague from '../../assets/rocketLeague.jpg';
import singlife from '../../assets/singlife.jpg';
import sony from '../../assets/sony.jpg';
import circle from '../../assets/Orange Circle.svg';
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
        px={{ xs: 2, sm2: 4, lg2: 14 }}
        py={{ xs: 4, sm2: 6, lg2: 8 }}
        spacing={{ lg2: 8 }}
        position="relative"
      >
        <Grid
          item
          xs={12}
          lg2={6}
          mb={4}
          sx={(theme) => ({
            [theme.breakpoints.up('xl')]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          })}
        >
          <Stack py={{ lg2: '92px' }}>
            <Stack mb={4}>
              <Typography
                py={0}
                variant="h2"
                fontWeight={800}
                fontSize={{ xs: 36, sm2: 52 }}
                lineHeight={{ xs: '44px', sm2: '56px' }}
                mb={{ xs: 2, sm2: '20px' }}
              >
                {header}
              </Typography>

              <Typography color="text.secondary" variant="body1">
                {subtitle}
              </Typography>
            </Stack>

            <Stack
              spacing={1}
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

            <Typography fontSize="12px" lineHeight="12px" mb={3}>
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
        <Grid item xs={12} lg2={6} sx={{ position: 'relative', zIndex: 1 }}>
          <img
            src={schemaPic.src}
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
          [theme.breakpoints.up('lg2')]: {
            position: 'absolute',
            top: 0,
            right: ' -40%',
            width: '100%',
            height: '100%',
          },
          [theme.breakpoints.down('lg2')]: {
            display: 'none',
          },
        })}
      />
    </Box>
  );
};

export default Hero;
