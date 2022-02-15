/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={0}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Don't listen to what they say{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                go and see
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Travelling with our app is easy.
              <br />
              Join the biggest community of travellers.
            </Typography>
          </Box>
          <Box display="flex" marginTop={1}>
            <Box
              component={Avatar}
              bgcolor={'primary.main'}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box
                component={'img'}
                src={
                  'https://assets.maccarianagency.com/svg/icons/app-store-icon.svg'
                }
                alt={'app store'}
                width={{ xs: 15, md: 20 }}
              />
            </Box>
            <Box
              component={Avatar}
              bgcolor={'primary.main'}
              marginLeft={1}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box
                component={'img'}
                src={
                  'https://assets.maccarianagency.com/svg/icons/play-store-icon.svg'
                }
                alt={'play store'}
                sx={{ filter: 'brightness(0) invert(1)' }}
                width={{ xs: 15, md: 20 }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '75% !important',
              marginX: 'auto',
              transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <PhoneSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'2.4%'}
                left={'4%'}
                width={'92.4%'}
                height={'96%'}
                sx={{
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  src={
                    theme.palette.mode === 'light'
                      ? 'https://assets.maccarianagency.com/screenshots/crypto-mobile.png'
                      : 'https://assets.maccarianagency.com/screenshots/crypto-mobile--dark.png'
                  }
                  alt="Image Description"
                  effect="blur"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '2.5rem',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
