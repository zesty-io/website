import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const acorns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/acornsHero.svg',
  bjs =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/bjsHero.svg',
  phoenixSuns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/phoenixSunsHero.svg',
  rocketLeague =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/rocketLeagueHero.svg',
  singlife =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/singlifeHero.svg',
  sony =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/sonyHero.svg';

const sampleStats = [
  { label: '12B+', description: 'Requests served per month' },
  { label: '99.99%', description: 'Industry leading uptime' },
];

const Hero = ({
  title = 'Elevating Insurance Providers into the Digital Era',
  description = 'Elevate insurance experiences with Zesty.io as your core content platform. It’s swift for IT teams to implement, straightforward for content managers to navigate, and integrates flawlessly with your insurance ecosystem.',
  ctaText = 'Get Started',
  ctaLink = '/demo',
  hero = 'https://storage.googleapis.com/assets.zesty.io/website/images/assets/Hero Image 2.png',
}) => {
  return (
    <Stack mb={4}>
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
          
          <Stack spacing="20px">
            <Typography
              color="text.secondary"
              variant="overline"
              sx={{fontWeight: 'bold', marginBottom: 0}}
            >
              ZESTY.IO FOR INSURANCE COMPANIES
            </Typography>
            <Typography
              fontSize="44px"
              lineHeight="48px"
              letterSpacing="-0.02em"
              fontWeight={800}
              color="text.primary"
            >
              {title}
            </Typography>
            <Typography
              color="text.secondary"
              fontSize="18px"
              lineHeight="28px"
            >
              {description}
            </Typography>
           
                
                

           <Stack rowGap="8px" mb={4}>
           
              <Stack direction="row" columnGap="12px">
                <CheckRoundedIcon color="success" />
                <Typography fontWeight={700} color="text.secondary">Lowest TCO</Typography>
              </Stack>

              <Stack direction="row" columnGap="12px">
                <CheckRoundedIcon color="success" />
                 <Typography fontWeight={700} color="text.secondary">Seamless Integration</Typography>
              </Stack>

              <Stack direction="row" columnGap="12px">
                <CheckRoundedIcon color="success" />
                <Typography fontWeight={700} color="text.secondary">Drag and Drop to build Pages</Typography>
              </Stack>

              <Stack direction="row" columnGap="12px">
                <CheckRoundedIcon color="success" />
               <Typography fontWeight={700} color="text.secondary">Engage across all touchpoints</Typography>
              </Stack>
           
          </Stack>
          </Stack>
          <Stack gap={1} direction={{ xs: 'column', tablet: 'row' }}>
            <Button
              href={ctaLink}
              size="large"
              color="primary"
              variant="contained"
            >
              {ctaText}
            </Button>
            <Button
              href={ctaLink}
              size="large"
              color="primary"
              variant="outlined"
            >
              Watch Demo
            </Button>
          </Stack>
        </Stack>

        <Stack
          justifyContent={{ lg: 'space-between' }}
          width={{ lg: '456px', desktopWide: '576px' }}
        >
          <Stack
            order={{ xs: 0, lg: 1 }}
            justifyContent={{ tablet: 'space-between' }}
            divider={
              <Divider
                sx={() => ({
                  borderRightWidth: 4,
                  display: { xs: 'none', tablet: 'block' },
                })}
                orientation="vertical"
                flexItem
              />
            }
            direction={{ xs: 'column', tablet: 'row' }}
            spacing={{ xs: '12px', desktopWide: '24px' }}
            mb={{ xs: 2, tablet: 4 }}
          >

          </Stack>

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
