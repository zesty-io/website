import { Box, Divider, Stack, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import React from 'react';

const featureContent =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/gisele.jpg',
  logo =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/experiom.png';

const listItems = [
  'Live chat support for business customers',
  'Expert consultation on implementation and architecture',
  'Data migration and development assistance',
];

const FeatureBulletWithTestimonials = ({
  overline = 'WHITE GLOVE SUPPORT',
  heading = 'Expert guidance and migration support for any project',
  supportingText = `Once you get started, our onboarding experience consists of a 360 degree review by Zesty experts. You can expect a dedicated partner to provide white glove support throughout the entire process. Plus, we offer training to help you get the most out of your investment.`,
  image = featureContent,
  testimonial = `“We love Zesty’s top-tier support, easy-to-use interfaces for both business and technical users, and their ability to keep the platform as modern as possible with very little legacy baggage.”

- Tony Cox, Managing Principal at Experiom`,
  testimonialLogo = logo,
  lists = listItems,
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
        py={{ desktopWide: '53.5px' }}
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
          mb={{ xs: '12px' }}
        >
          {supportingText}
        </Typography>

        <Stack rowGap="16px" mb={{ xs: 3, lg: 4 }}>
          {lists.map((list) => (
            <Stack direction="row" columnGap="12px" key={list}>
              <CheckRoundedIcon color="primary" />
              <Typography color="text.secondary">{list}</Typography>
            </Stack>
          ))}
        </Stack>

        <Divider sx={{ background: 'grey.100', mb: { xs: 3, lg: 4 } }} />

        <Stack spacing={2}>
          <Typography
            whiteSpace="pre-line"
            fontSize="18px"
            lineHeight="28px"
            color="text.secondary"
          >
            {testimonial}
          </Typography>
          <img src={testimonialLogo} width="110.44px" height="40px" />
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
              height: '100%',
            },
          })}
        />
      </Stack>
    </Stack>
  );
};

export default FeatureBulletWithTestimonials;
