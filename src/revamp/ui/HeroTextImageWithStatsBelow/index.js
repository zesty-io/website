import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

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

const HeroTextImageWithStatsBelow = ({
  title = 'Why Developers are Switching from Sitecore to Zesty',
  description = 'Build faster using a content management system that supports virtually any framework out-of-the-box. Empower your marketing team with an intuitive UI to edit content. Win-win.',
  stats = sampleStats,
  ctaText = 'Free Consultation',
  ctaLink = '/demo',
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
          <Stack spacing="20px">
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
          </Stack>
          <Stack direction={{ xs: 'column', tablet: 'row' }}>
            <Button
              href={ctaLink}
              size="large"
              color="primary"
              variant="contained"
            >
              {ctaText}
            </Button>
          </Stack>

          <Stack>
            <Typography
              fontSize={{ xs: '12px', lg: '16px' }}
              lineHeight={{ xs: '12px', lg: '24px' }}
              letterSpacing="1px"
              color="text.secondary"
              mb={3}
            >
              TRUSTED BY INDUSTRY LEADING COMPANIES
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              rowGap="24px"
              columnGap="20px"
            >
              <img src={sony} width="91px" height="32px" />
              <img src={rocketLeague} width="88.35px" height="32px" />
              <img src={singlife} width="102.12px" height="32px" />
              <img src={acorns} width="94px" height="32px" />
              <img src={bjs} width="36.48px" height="32px" />
              <img src={phoenixSuns} width="31.59px" height="32px" />
            </Stack>
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
                sx={(theme) => ({
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
            {stats.map((stat, index) => (
              <Stack direction="row" gap="12px" alignItems="center" key={index}>
                <Typography
                  variant="h1"
                  color="primary.main"
                  fontWeight={800}
                  letterSpacing="-0.02em"
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  fontWeight={600}
                >
                  {stat.description}
                </Typography>
              </Stack>
            ))}
          </Stack>

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
  );
};

export default HeroTextImageWithStatsBelow;
