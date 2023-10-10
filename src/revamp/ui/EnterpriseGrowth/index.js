import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { generateAlt } from 'utils';

const alphaUniverse =
    'https://kfg6bckb.media.zestyio.com/alphaUniverse.webp?width=640&height=480',
  sonyLogo = 'https://kfg6bckb.media.zestyio.com/sonyLogo.svg',
  rocketLeague =
    'https://kfg6bckb.media.zestyio.com/rocketLeaguePic.webp?width=640&height=480',
  rocketLeagueLogo =
    'https://kfg6bckb.media.zestyio.com/Rocket-League-Logo.png',
  singlife =
    'https://kfg6bckb.media.zestyio.com/singlifePic.webp?width=640&height=480',
  singlifeLogo = 'https://kfg6bckb.media.zestyio.com/Singlife-Logo.png',
  acorns =
    'https://kfg6bckb.media.zestyio.com/acornsPic.webp?width=640&height=480',
  acornsLogo = 'https://kfg6bckb.media.zestyio.com/Acorns-Logo.png';

const logos = [
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Rocket League Logo.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Singlife Logo.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Acorns Logo.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/BJs Logo.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Suns.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Wattpad-logo-vector 1.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Logo_de_Cornershop 1.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Petdesk.png',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Jackpocket.svg',
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/greyLogos/Sony Logo.svg',
];

const caseStudies = [
  {
    mainImage: alphaUniverse,
    logo: sonyLogo,
    description:
      'Sony was able to launch 2.25x faster to market than originally estimated',
    link: 'https://www.zesty.io/mindshare/customer-stories/sony-uses-zesty-io-to-accelerate-launch-of-alpha-universe/',
  },
  {
    mainImage: rocketLeague,
    logo: rocketLeagueLogo,
    description:
      'Rocket League builds community E-Sports Site, engages millions of users',
    link: 'https://www.zesty.io/mindshare/customer-stories/rocket-league-launches-e-sports-site-celebrating-players-and-tournaments/',
  },
  {
    mainImage: singlife,
    logo: singlifeLogo,
    description:
      'Insurer Singlife got 69% faster page load times and grew 185% in a year',
    link: 'https://www.zesty.io/mindshare/customer-stories/digital-insurer-singlife-selects-zesty-io-as-dxp-to-support-global-expansion/',
  },
  {
    mainImage: acorns,
    logo: acornsLogo,
    description:
      'FinTech Acorns distributes content to 5+ channels globally, securely',
    link: 'https://www.zesty.io/mindshare/customer-stories/fintech-startup-uses-zesty-io-for-headless-architecture-to-achieve-omnichannel-content-marketing-success/',
  },
];

const EnterpriseGrowth = ({
  overline = 'No more monday morning fires to put out',
  heading = 'Lowest Total Cost of Ownership',
  supportingText = 'With best-in class security and automatically scaling architecture, our platform can serve up to millions of users at any second. Sleep soundly at night knowing Zesty serves an average 1B+ requests per month at 99.999%+ uptime.',
  primaryBtn = 'Free Consultation',
  primaryBtnLink = '/demo',
  secondaryBtn = 'View Demo Video',
  secondaryBtnLink = '/demos/video/',
  caseStudiesList = caseStudies,
}) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.up('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Stack bgcolor="grey.900" overflow={'hidden'}>
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
            textTransform="uppercase"
          >
            {overline}
          </Typography>
          <Typography
            color="white"
            variant="h2"
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
          <Button variant="contained" size="extraLarge" href={primaryBtnLink}>
            {primaryBtn}
          </Button>
          <Button variant="outlined" size="extraLarge" href={secondaryBtnLink}>
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
                alt={generateAlt('')}
                loading="lazy"
                width={'120px'}
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
            pb: 4,
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
          [theme.breakpoints.up('xl')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
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
                onClick={() => (window.location.href = c.link)}
              >
                <img
                  src={c.mainImage}
                  loading="lazy"
                  alt={generateAlt('')}
                  width={600}
                  height={400}
                />

                <Box
                  component="img"
                  loading="lazy"
                  alt={generateAlt('')}
                  width={120}
                  height={{ xs: '32px', tablet: '64px' }}
                  src={c.logo}
                  sx={{
                    objectFit: 'contain',
                    alignSelf: 'start',
                    marginBottom: '12px',
                    marginTop: 2,
                  }}
                />

                <Typography
                  variant="h3"
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
                  href={c.link}
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
