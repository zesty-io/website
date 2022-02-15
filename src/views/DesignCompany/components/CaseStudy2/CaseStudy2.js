/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const CaseStudy2 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.red[50] : colors.red[900]
      }
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                Nike
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                Nike delivers innovative products, experiences and services to
                inspire athletes. The affordable designe to elevate your daily
                routine. Free shipping.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={
                    'https://assets.maccarianagency.com/svg/logos/netflix-original.svg'
                  }
                  alt="..."
                  maxWidth={80}
                  marginBottom={2}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
                <Typography component={'p'}>
                  First class templates. These guys know what they're doing:
                  great code quality, clear naming conventions and clear code
                  structure. Plain awesome and a pleasure to work with.
                </Typography>
                <Box marginTop={{ xs: 2, sm: 4 }}>
                  <Typography variant={'subtitle1'} sx={{ fontWeight: 700 }}>
                    Jhon Anderson
                  </Typography>
                  <Typography color="text.secondary">MUI lover</Typography>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              xs={12}
              sx={{
                '& .lazy-load-image-background.lazy-load-image-loaded': {
                  width: '100%',
                  height: '100%',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={'https://assets.maccarianagency.com/backgrounds/img45.jpg'}
                alt="..."
                effect="blur"
                borderRadius={2}
                maxWidth={1}
                maxHeight={400}
                sx={{
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Lifetime guarantee
              </Typography>
              <Typography component={'p'}>
                If your Goby’s performance is anything less than perfect, we’ll
                replace it free of charge.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Moder design
              </Typography>
              <Typography component={'p'}>
                Righty, lefty, dainty or robust—the soft-touch Goby handle is
                made for every hand.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudy2;
