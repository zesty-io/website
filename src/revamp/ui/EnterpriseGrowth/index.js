import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import alphaUniverse from 'revamp/assets/enterprise/alphaUniverse.jpg';
import sonyLogo from 'revamp/assets/enterprise/sonyLogo.svg';
import React from 'react';
import Marquee from 'react-fast-marquee';
import rocketLeague from 'revamp/assets/greyLogos/Rocket League Logo.svg';
import singlife from 'revamp/assets/greyLogos/Singlife Logo.svg';
import acorns from 'revamp/assets/greyLogos/Acorns Logo.svg';
import bjs from 'revamp/assets/greyLogos/BJs Logo.svg';
import suns from 'revamp/assets/greyLogos/Suns.svg';
import wattpad from 'revamp/assets/greyLogos/Wattpad-logo-vector 1.svg';
import cornershop from 'revamp/assets/greyLogos/Logo_de_Cornershop 1.svg';
import petdesk from 'revamp/assets/greyLogos/Petdesk.png';
import jackpocket from 'revamp/assets/greyLogos/Jackpocket.svg';
import sony from 'revamp/assets/greyLogos/Sony Logo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const logos = [
  rocketLeague.src,
  singlife.src,
  acorns.src,
  bjs.src,
  suns.src,
  wattpad.src,
  cornershop.src,
  petdesk.src,
  jackpocket.src,
  sony.src,
];

const caseStudies = [
  {
    mainImage: alphaUniverse.src,
    logo: sonyLogo.src,
    description:
      'Sony was able to launch 2.25x faster to market than originally estimated',
  },
  {
    mainImage: alphaUniverse.src,
    logo: sonyLogo.src,
    description:
      'Sony was able to launch 2.25x faster to market than originally estimated',
  },
  {
    mainImage: alphaUniverse.src,
    logo: sonyLogo.src,
    description:
      'Sony was able to launch 2.25x faster to market than originally estimated',
  },
  {
    mainImage: alphaUniverse.src,
    logo: sonyLogo.src,
    description:
      'Sony was able to launch 2.25x faster to market than originally estimated',
  },
];

const EnterpriseGrowth = ({
  overline = 'Unify your team with',
  heading = 'Built for enterprise scale and security',
  supportingText = 'With best-in class security and scaling architecture, our platform can serve millions of users at any second. And we have successfully done so for multiple customers listed below. ',
  primaryBtn = 'Start Now',
  secondaryBtn = 'Contact Sales',
  caseStudiesList = caseStudies,
}) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.up('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Stack bgcolor="grey.900">
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            pt: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            pt: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            pt: 14,
            px: 14,
          },
          [theme.breakpoints.up('xl')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            width: '100%',
          },
        })}
      >
        <Stack mb={5} width={{ lg: '560px' }}>
          <Typography
            color="primary"
            variant="body2"
            fontWeight={600}
            letterSpacing="1px"
            mb="12px"
          >
            {overline}
          </Typography>
          <Typography
            color="white"
            variant="h1"
            fontWeight={800}
            letterSpacing="-0.02em"
            mb={3}
            sx={(theme) => ({
              [theme.breakpoints.up('tablet')]: {
                fontSize: '52px',
                lineHeight: '56px',
              },
            })}
          >
            {heading}
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="grey.50">
            {supportingText}
          </Typography>
        </Stack>
        <Stack direction="row" spacing="12px" mb={{ xs: 6, tablet: 8, lg: 10 }}>
          <Button variant="contained" size="extraLarge">
            {primaryBtn}
          </Button>
          <Button variant="outlined" size="extraLarge">
            {secondaryBtn}
          </Button>
        </Stack>
      </Stack>

      <Marquee
        direction="left"
        pauseOnHover
        gradient={false}
        speed={10}
        style={{
          marginBottom: isLG
            ? '80px'
            : isTablet
            ? '64px'
            : isXS
            ? '48px'
            : '48px',
        }}
        mb={{ xs: 6, tablet: 8, lg: 10 }}
      >
        <Stack direction="row" spacing={6}>
          {[...Array(5)].map((c) =>
            logos.map((logo, index) => (
              <Box
                key={index}
                component="img"
                height="40px"
                src={logo}
                sx={{
                  objectFit: 'contain',
                  mr: logos.length - 1 === index ? '24px !important' : 0,
                }}
              />
            )),
          )}
        </Stack>
      </Marquee>

      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            pb: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            px: 14,
            pb: 14,
          },
        })}
      >
        <Typography
          variant="h2"
          letterSpacing="-0.02em"
          fontWeight={800}
          mb={6}
          color="white"
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              fontSize: '36px',
              lineHeight: '44px',
              mb: 8,
            },
            [theme.breakpoints.up('lg')]: {
              mb: 10,
              width: '640px',
            },
          })}
        >
          See how high growth businesses like yours built success on our
          platform
        </Typography>

        <Grid container spacing={{ xs: 3, tablet: 4, lg: 8 }}>
          {caseStudiesList.map((c, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <Stack
                sx={{ cursor: 'pointer' }}
                onClick={() => (window.location.href = 'https://google.com')}
              >
                <Box
                  component="img"
                  width="100%"
                  height="auto"
                  src={c.mainImage}
                  sx={{
                    objectFit: 'contain',
                    marginBottom: '24px',
                    borderRadius: '6px',
                  }}
                />

                <Box
                  component="img"
                  height={{ xs: '32px', tablet: '64px' }}
                  src={c.logo}
                  sx={{
                    objectFit: 'contain',
                    alignSelf: 'start',
                    marginBottom: '12px',
                  }}
                />

                <Typography
                  variant="h4"
                  letterSpacing="-0.02em"
                  color="white"
                  fontWeight={800}
                  mb={3}
                  sx={(theme) => ({
                    [theme.breakpoints.up('tablet')]: {
                      fontSize: '32px',
                      lineHeight: '40px',
                    },
                  })}
                >
                  {c.description}
                </Typography>

                <Link
                  sx={{ cursor: 'pointer' }}
                  lineHeight="24px"
                  underline="none"
                  alignSelf="start"
                  href="https://google.com"
                >
                  Read Case Study
                </Link>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default EnterpriseGrowth;
