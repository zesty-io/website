import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const acorns =
    'https://kfg6bckb.media.zestyio.com/Acorns-homepage150x50-fullcolor.1fc97b3c326478bf6afcb60e52679656.png',
  acornsCS =
    'https://kfg6bckb.media.zestyio.com/Acorns-Opengraph.png';

const stats = [
  {
    title: '5M+',
    description: 'Users supported monthly',
  },
  {
    title: '7',
    description: 'Years on Zesty',
  },
  {
    title: '60 Day',
    description: 'Initial migration',
  },
];

const CaseStudyHero = ({
  overline = 'CASE STUDIES / ACORNS',
  logo = acorns,
  heading = 'Why FinTech Acorns Chose Zesty for Omnichannel Marketing Success',
  description = 'Managing websites in a custom CMS and blog in WordPress, the team knew their website process wasn’t sustainable — so they turned to Zesty for a flexible yet powerful solution. All content was consolidated to a single platform in 60 days, including website migrations, and now the company also syndicates content to their web, iOS, and Android apps all from Zesty.',
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
            // spacing={{ xs: 3, tablet: 4 }}
            // justifyContent="space-between"
            // width={{ lg: '496px', desktopWide: '636px' }}
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
        </Stack>

        <Stack width={{ lg: '40%' }}>
          <Box
            component="img"
            src={acornsCS}
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

      <Divider sx={{ display: { xs: 'none', lg: 'block' } }} />

      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            justifyContent: 'space-between',
            py: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            px: 14,
          },
        })}
        direction={{ xs: 'column', lg: 'row' }}
        spacing={{ xs: '24px', desktopWide: '64px' }}
      >
        <Stack>
          <Typography
            color="text.secondary"
            mb="20px"
            fontSize="18px"
            lineHeight="28px"
            fontWeight={700}
          >
            USE CASE
          </Typography>
          <Stack spacing={1}>
            <Stack spacing={1} direction="row">
              <Chip label="Multi Channel" sx={{ borderRadius: '4px' }} />
              <Chip label="Web" sx={{ borderRadius: '4px' }} />
            </Stack>
            <Stack spacing={1} direction="row">
              <Chip label="iOS App" sx={{ borderRadius: '4px' }} />
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Typography
            color="text.secondary"
            mb="20px"
            fontSize="18px"
            lineHeight="28px"
            fontWeight={700}
          >
            FRAMEWORKS
          </Typography>
          <Stack spacing={1}>
            <Stack spacing={1} direction="row">
              <Chip label="React" sx={{ borderRadius: '4px' }} />
              <Chip label="Tailwind CSS" sx={{ borderRadius: '4px' }} />
            </Stack>
            <Stack spacing={1} direction="row">
              <Chip label="Swift" sx={{ borderRadius: '4px' }} />
            </Stack>
          </Stack>
        </Stack>

        <Stack width={{ lg: '601px' }}>
          <Typography
            color="text.secondary"
            mb="20px"
            fontSize="18px"
            lineHeight="28px"
            fontWeight={700}
          >
         ABOUT ACORNS
          </Typography>
          <Typography color="text.primary" fontSize="18px" lineHeight="28px">
Acorns is the first company to offer micro investing to the world. The proprietary financial engine allows customers to roundup spare change from everyday purchases and invest these sub-dollar amounts into a professionally managed portfolio of index funds. Users simply connect any credit or debit card and a checking account, then spend money like you normally do to watch your portfolio grow with the market. Acorns has used Zesty for over 7 years to support over 5M+ users and has grown from Series B to Series F since switching to Zesty.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaseStudyHero;
