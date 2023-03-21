import { Box, Divider, Stack, Typography } from '@mui/material';
import featureContent from 'revamp/assets/featureContent.jpg';
import React from 'react';

const FeatureStatistics = ({
  overline = 'SETUP, EASY-PEASY!',
  heading = 'Hassle-free setup with APIs that integrate with all frameworks',
  supportingText = `With Zesty’s Media experience, you can enter file descriptions to be used as alt text as soon as you upload an image. Thus ensuring your images are more accessible.`,
  image = featureContent.src,
  statsTitle = '5x',
  statsDescription = 'Faster More Secure\nUploads than most traditional DAMs',
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
        py={{ lg: '61.5px', desktopWide: '95.5px' }}
      >
        <Typography fontWeight={600} variant="body2" color="primary" mb="12px">
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
              fontSize: '32px',
              lineHeight: '40px',
            },
          })}
        >
          {heading}
        </Typography>
        <Typography
          color="text.secondary"
          fontSize="18px"
          lineHeight="28px"
          mb={{ xs: 3, lg: 4 }}
        >
          {supportingText}
        </Typography>

        <Divider sx={{ background: 'grey.100', mb: { xs: 3, lg: 4 } }} />

        <Stack direction="row" spacing={3} alignItems="center">
          <Typography
            fontSize="52px"
            fontWeight={800}
            lineHeight="56px"
            letterSpacing="-.02em"
            color="text.primary"
          >
            {statsTitle}
          </Typography>
          <Typography
            whiteSpace="pre-line"
            variant="h5"
            color="text.secondary"
            letterSpacing="-.02em"
            fontWeight={600}
          >
            {statsDescription}
          </Typography>
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
            [theme.breakpoints.up('mobile')]: {
              maxWidth: '704px',
              height: '343px',
            },
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
              height: '100%',
            },
          })}
        />
      </Stack>
    </Stack>
  );
};

export default FeatureStatistics;
