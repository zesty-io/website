import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const schemaPic =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/Content App 2.png',
  acorns =
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
}) => {
  return (
    <Stack
      sx={(theme) => ({
        gap: 4,
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
      })}
    >
      <Stack spacing={4}>
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
          <Typography color="text.secondary" fontSize="18px" lineHeight="28px">
            {description}
          </Typography>
        </Stack>
        <Stack direction={{ xs: 'column', tablet: 'row' }}>
          <Button href="/demo" size="large" color="primary" variant="contained">
            Schedule Demo
          </Button>
        </Stack>

        <Stack>
          <Typography
            fontSize="12px"
            lineHeight="12px"
            letterSpacing="1px"
            color="text.secondary"
            mb={3}
          >
            TRUSTED BY INDUSTRY LEADING COMPANIES
          </Typography>
          <Stack direction="row" flexWrap="wrap" rowGap="24px" columnGap="20px">
            <img src={sony} width="91px" height="32px" />
            <img src={rocketLeague} width="88.35px" height="32px" />
            <img src={singlife} width="102.12px" height="32px" />
            <img src={acorns} width="94px" height="32px" />
            <img src={bjs} width="36.48px" height="32px" />
            <img src={phoenixSuns} width="31.59px" height="32px" />
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Stack
          justifyContent={{ tablet: 'space-between' }}
          divider={
            <Divider
              sx={(theme) => ({
                border: `4px solid ${theme.palette.grey[100]}`,
              })}
              orientation="vertical"
              flexItem
            />
          }
          direction={{ xs: 'column', tablet: 'row' }}
          spacing="12px"
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
              <Typography variant="h6" color="text.secondary" fontWeight={600}>
                {stat.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Box
          component="img"
          src={schemaPic}
          sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </Stack>
    </Stack>
  );
};

export default HeroTextImageWithStatsBelow;
