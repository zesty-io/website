import { Box, Button, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const featureContent =
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/featureContent.jpg';

const FeatureTwoCTA = ({
  overline = 'SETUP, EASY-PEASY!',
  heading = 'Hassle-free setup with APIs that integrate with all frameworks',
  supportingText = `With Zesty you’re not constrained to using one kind of API. You can use any of our APIs (GraphQL, REST, GET, and Instant JSON) with any framework of your choice. And they all come with web-hooks and site generators. Check them out in our `,
  primaryBtn = 'Find a Partner',
  secondaryBtn = 'Talk to Sales',
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
        mr={{ lg: 8 }}
        py={{ desktopWide: 6 }}
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
        <Typography
          color="text.secondary"
          fontSize="18px"
          lineHeight="28px"
          mb={4}
        >
          {supportingText}{' '}
          <Link href="/docs" color="info.main" underline="none">
            documentation
          </Link>
        </Typography>
        <Stack direction="row" columnGap={2}>
          <Button variant="contained" size="extraLarge">
            {primaryBtn}
          </Button>
          <Button variant="outlined" size="extraLarge">
            {secondaryBtn}
          </Button>
        </Stack>
      </Stack>
      <Stack>
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

export default FeatureTwoCTA;
