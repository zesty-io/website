/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        position: 'relative',
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Box position={'relative'} zIndex={3}>
          <Grid container spacing={4}>
            <Grid item container alignItems={'center'} xs={12} md={6}>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    component={'span'}
                    variant="h3"
                    sx={{ fontWeight: 700 }}
                  >
                    Organic company growth with{' '}
                    <Typography
                      component={'span'}
                      variant={'inherit'}
                      color={'primary'}
                      sx={{
                        background: `linear-gradient(180deg, transparent 82%, ${alpha(
                          theme.palette.secondary.main,
                          0.3,
                        )} 0%)`,
                      }}
                    >
                      targeted leads
                    </Typography>
                  </Typography>
                </Box>
                <Typography variant="h6" component="p" color={'text.secondary'}>
                  Our mission is to spread education that is easy accessible and
                  everyone can learn.
                </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent={'flex-start'}
                  marginTop={4}
                >
                  {[
                    'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
                  ].map((item, i) => (
                    <Box maxWidth={70} marginTop={2} marginRight={4} key={i}>
                      <Box
                        component="img"
                        height={1}
                        width={1}
                        src={item}
                        alt="..."
                        sx={{
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0) invert(0.7)'
                              : 'contrast(0) brightness(0)',
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
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
                    marginX: 'auto',
                    transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
                    maxWidth: '96%',
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
                      <LaptopSkeletonIllustration />
                    </Box>
                    <Box
                      position={'absolute'}
                      top={'8.4%'}
                      left={'12%'}
                      width={'76%'}
                      height={'83%'}
                      border={`1px solid ${theme.palette.alternate.dark}`}
                      zIndex={3}
                    >
                      <Box
                        component={'img'}
                        src="https://assets.maccarianagency.com/screenshots/dashboard.png"
                        alt="Image Description"
                        width={1}
                        height={1}
                        sx={{
                          objectFit: 'cover',
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
        </Box>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1921 273"
        sx={{
          position: 'absolute',
          width: '100%',
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 1,
          height: '35%',
        }}
      >
        <polygon
          fill={theme.palette.background.paper}
          points="0,273 1921,273 1921,0 "
        />
      </Box>
    </Box>
  );
};

export default Hero;
