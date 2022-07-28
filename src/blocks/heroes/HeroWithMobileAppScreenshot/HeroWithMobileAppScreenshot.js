/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';

import Container from 'components/Container';

const HeroWithMobileAppScreenshot = () => {
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.dark} 100%)`,
      }}
    >
      <Container>
        <Grid container spacing={0}>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: 'transparent',
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='21.12'%3E%3Cpath d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='7.040000000000001' transform='' cx='500' cy='100' r='40'/%3E%3Cpath transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='6.4'%3E%3Cpath transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='14.080000000000002' transform='' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
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
                  >
                    <Box
                      component={'img'}
                      src={
                        theme.palette.mode === 'light'
                          ? 'https://assets.maccarianagency.com/screenshots/crypto-mobile.png'
                          : 'https://assets.maccarianagency.com/screenshots/crypto-mobile--dark.png'
                      }
                      alt="Image Description"
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
              <Box
                sx={{
                  backgroundColor: 'transparent',
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='21.12'%3E%3Cpath d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='7.040000000000001' transform='' cx='500' cy='100' r='40'/%3E%3Cpath transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='6.4'%3E%3Cpath transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='14.080000000000002' transform='' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: 1,
                  height: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.default}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default HeroWithMobileAppScreenshot;
