import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const featureContent =
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/certified-security-compliance.svg';

const SecurityFeature = ({
  overline = 'GET PEACE OF MIND',
  heading = 'Breathe easy with enterprise grade security',
  supportingText = `Zesty is certified with SOC II security compliance as well as GDPR, CCPA, and other privacy requirements. We deflect millions of malicious attacks per month to keep you and your customers' data safe.`,
  image = featureContent,
}) => {
  return (
    <Stack
      mb={{ xs: 3, tablet: 6 }}
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent={{ desktopWide: 'center' }}
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          py: 10,
          px: 14,
        },
      })}
    >
      <Stack
        mb={{ xs: 3, tablet: 6, lg: 0 }}
        sx={{ width: { lg: '456px', desktopWide: '576px' } }}
        ml={{ lg: 8 }}
        py={{ desktopWide: 6 }}
        order={{ xs: 1, lg: 2 }}
        justifyContent={{ lg: 'center' }}
      >
        <Typography variant="body2" fontWeight={600} color="primary" mb="12px">
          {overline}
        </Typography>
        <Typography
          color="text.primary"
          letterSpacing="-0.02em"
          fontWeight={800}
          variant="h2"
          mb="12px"
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              fontSize: '36px',
              lineHeight: '44px',
            },
          })}
        >
          {heading}
        </Typography>
        <Typography color="text.secondary" fontSize="18px" lineHeight="28px">
          {supportingText}
        </Typography>
      </Stack>
      <Stack order={{ xs: 2, lg: 1 }}>
        <Box
          component="img"
          src={image}
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              objectFit: 'contain',
              maxWidth: '100%',
              height: '100%',
            },
            // [theme.breakpoints.up('mobile')]: {
            //   maxWidth: '704px',
            //   height: '343px',
            // },
            [theme.breakpoints.up('tablet')]: {
              maxWidth: '100%',
              height: '420px',
            },
            [theme.breakpoints.up('lg')]: {
              maxWidth: '456px',
              height: '100%',
            },
            [theme.breakpoints.between(1201, 1439)]: {
              maxWidth: '100%',
              height: '100%',
            },
            [theme.breakpoints.up('desktopWide')]: {
              maxWidth: '576px',
              height: '420px',
            },
          })}
        />
      </Stack>
    </Stack>
  );
};

export default SecurityFeature;
