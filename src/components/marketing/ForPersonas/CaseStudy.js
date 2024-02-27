import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

const singlife =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/singlifeHero.svg',
  singlifeCS =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/singlifeCS.jpg';



const CaseStudy = ({
  overline = 'CASE STUDIES / SINGLIFE',
  logo = singlife,
  heading = "Singlife's Digital Expansion",
  description = 'Discover how Singlife used Zesty.io to support their global expansion, resulting in a 185% growth in the first year.',
  image = singlifeCS,
  ctaText,
  ctaLink,
  stats_1_number,
  stats_1_description,
  stats_2_number,
  stats_2_description,
  stats_3_number,
  stats_3_description,
}) => {

  const statsLists = [
  {
    title: stats_1_number,
    description: stats_1_description,
  },
  {
    title: stats_2_number,
    description: stats_2_description,
  },
  {
    title: stats_3_number,
    description: stats_3_description,
  },
];


  return (
    <Stack
      direction="column"
      sx={(theme) => ({
        [theme.breakpoints.up('xl')]: {
          maxWidth: theme.maxWidth,
          mx: 'auto',
        },
      })}
    >
      <Stack direction={{ xs: 'column', lg: 'row' }}>
        <Stack
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              pt: 4,
              px: 2,
              mb: 3,
            },
            [theme.breakpoints.up('tablet')]: {
              pt: 6,
              px: 4,
              mb: 6,
            },
            [theme.breakpoints.up('lg')]: {
              width: '60%',
              py: 9,
              px: 14,
              mb: 0,
            },
            [theme.breakpoints.up('desktopWide')]: {
              py: '106px',
              px: 14,
            },
          })}
          alignItems="start"
        >
          <Stack
            mb={{ xs: 4, tablet: 6 }}
            width={{ lg: '496px', desktopWide: '636px' }}
          >
            <Typography
              color="text.secondary"
              variant="body2"
              mb={{ xs: 3, tablet: 4 }}
            >
              {overline}
            </Typography>
            <Box
              component="img"
              src={logo}
              height={{ xs: '32px', tablet: '48px' }}
              alignSelf="start"
              mb={{ xs: 3, tablet: 4 }}
            />
            <Typography
              color="text.primary"
              fontWeight={800}
              variant="h1"
              letterSpacing="-0.02em"
              mb={3}
              sx={(theme) => ({
                [theme.breakpoints.up('tablet')]: {
                  fontSize: '44px',
                  lineHeight: '48px',
                  mb: 4,
                },
              })}
            >
              {heading}
            </Typography>
            <Typography
              color="text.secondary"
              fontSize="18px"
              lineHeight="28px"
            >
              {description}
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', tablet: 'row' }}
            gap={{ xs: 4, tablet: 6, lg: 4 }}
          >
            {statsLists.filter(item => item?.title).map((stat, index) => (
              <Stack key={index}>
                <Typography
                  mb="9px"
                  fontSize="40px"
                  lineHeight="56px"
                  letterSpacing="-0.02em"
                  color="text.primary"
                  fontWeight={800}
                  sx={(theme) => ({
                    [theme.breakpoints.up('tablet')]: {
                      fontSize: '52px',
                      lineHeight: '56px',
                    },
                  })}
                >
                  {stat.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  fontWeight={800}
                >
                  {stat.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
          {ctaText && <Button href={ctaLink} size="large" sx={{ mt: 4, fontWeight: 'bold' }}>
            {ctaText} <EastIcon sx={{ ml: 1, fontSize: '14px' }} />
          </Button>}
        </Stack>

        <Stack width={{ lg: '40%' }}>
          <Box
            component="img"
            src={image}
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                objectFit: 'contain',
                maxWidth: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('tablet')]: {
                maxWidth: '100%',
                height: '745px',
              },
              [theme.breakpoints.up('lg')]: {
                maxWidth: '480px',
                height: '100%',
              },
              [theme.breakpoints.between(1201, 1439)]: {
                maxWidth: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('desktopWide')]: {
                maxWidth: '580px',
                height: '100%',
              },
            })}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaseStudy;
