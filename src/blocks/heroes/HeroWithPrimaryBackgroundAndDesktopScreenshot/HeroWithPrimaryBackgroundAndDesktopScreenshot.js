/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

import Container from 'components/Container';

const HeroWithPrimaryBackgroundAndDesktopScreenshot = ({
  title,
  description,
}) => {
  const theme = useTheme();
  return (
    <Box
      position={'relative'}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.alternate.main,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  component={'span'}
                  variant="h3"
                  sx={{ fontWeight: 700, color: 'common.white' }}
                >
                  {title}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                component="p"
                sx={{ color: 'common.white' }}
              >
                {description}
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent={'flex-start'}
                marginTop={2}
              >
                {[
                  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
                  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
                  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
                  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
                  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
                  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
                ].map((item, i) => (
                  <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={item}
                      alt="..."
                      sx={{
                        filter: 'brightness(0) invert(1)',
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
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  marginX: 'auto',
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

export default HeroWithPrimaryBackgroundAndDesktopScreenshot;
