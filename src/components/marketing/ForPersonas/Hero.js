import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import MuiMarkdown from 'markdown-to-jsx';

const headerList = [
  { list: 'Lowest TCO' },
  { list: 'Seamless Integration' },
  { list: 'Drag and Drop to build Pages' },
  { list: 'Engage across all touchpoints' },
];

const Hero = ({
  overline = 'ZESTY.IO FOR INSURANCE COMPANIES',
  description = 'Elevate insurance experiences with Zesty.io as your core content platform. It’s swift for IT teams to implement, straightforward for content managers to navigate, and integrates flawlessly with your insurance ecosystem.',
  primaryCtaText = 'Get Started',
  primaryCtaLink = '/demo',
  secondaryCtaText = 'Watch Demo',
  secondaryCtaLink = '/demo',
  hero = 'https://storage.googleapis.com/assets.zesty.io/website/images/assets/Hero Image 2.png',
}) => {
  return (
    <Stack>
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            py: 4,
            px: 2,
            gap: 4,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
            gap: 6,
          },
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            gap: 8,
            py: 10,
            px: 14,
          },
        })}
      >
        <Stack
          spacing={4}
          justifyContent={{ lg: 'center' }}
          width={{ lg: '456px', desktopWide: '576px' }}
        >
          <Stack>
            <Typography
              color="primary"
              variant="overline"
              sx={{ fontWeight: '600' }}
            >
              {overline}
            </Typography>
            <MuiMarkdown
              options={{
                overrides: {
                  h1: {
                    component: Typography,
                    props: {
                      fontSize: '44px',
                      lineHeight: '48px',
                      letterSpacing: '-0.02em',
                      fontWeight: '800',
                      color: 'text.primary',
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      fontSize: '18px',
                      lineHeight: '28px',
                      color: 'text.secondary',
                      mt: '20px',
                    },
                  },
                },
              }}
            >
              {description}
            </MuiMarkdown>

            <Stack rowGap="8px" mt={2}>
              {headerList.map((item, index) => {
                return (
                  <Stack key={index} direction="row" columnGap="12px">
                    <CheckRoundedIcon color="primary" />
                    <Typography fontWeight={400} color="text.secondary">
                      {item.list}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Stack gap={1} direction={{ xs: 'column', tablet: 'row' }}>
            <Button
              href={primaryCtaLink}
              size="large"
              color="primary"
              variant="contained"
            >
              {primaryCtaText}
            </Button>
            <Button
              href={secondaryCtaLink}
              size="large"
              color="primary"
              variant="outlined"
            >
              {secondaryCtaText}
            </Button>
          </Stack>
        </Stack>

        <Stack
          justifyContent={{ lg: 'space-between' }}
          width={{ lg: '456px', desktopWide: '576px' }}
        >
          <Stack height="100%" justifyContent="center">
            <Box
              mb={{ lg: 4 }}
              order={{ xs: 1, lg: 0 }}
              component="img"
              src={hero}
              sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
