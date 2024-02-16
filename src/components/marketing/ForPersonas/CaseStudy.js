import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

const singlife =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/singlifeHero.svg',
  singlifeCS =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/singlifeCS.jpg';

const stats = [
  {
    title: '3x',
    description: 'GROWTH IN FIRST YEAR',
  },
  {
    title: '69%',
    description: 'FASTER PAGE LOAD TIME',
  },
  {
    title: '37%',
    description: 'REDUCTION IN QA',
  },
];

const CaseStudy = ({
  overline = 'CASE STUDIES / SINGLIFE',
  logo = singlife,
  heading = "Singlife's Digital Expansion",
  description = "Discover how Singlife used Zesty.io to support their global expansion, resulting in a 185% growth in the first year.",
  statsLists = stats,
}) => {
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
          alignItems='start'
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
              mb={2}
              sx={(theme) => ({
                [theme.breakpoints.up('tablet')]: {
                  fontSize: '44px',
                  lineHeight: '48px',
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
            {statsLists.map((stat, index) => (
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
           <Button href='#' size="large" sx={{mt: 3, ml: -1,  fontWeight: 'bold'}}>Read Case Study <EastIcon sx={{ml: 1, fontSize: '14px'}} /></Button>
        </Stack>

        <Stack width={{ lg: '40%' }}>
          <Box
            component="img"
            src={singlifeCS}
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
                paddingRight: 3
              },
            })}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaseStudy;
