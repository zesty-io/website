import { Button, Stack, Typography } from '@mui/material';
const schemaPic =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/schema.png',
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

import React from 'react';

const LightHero = ({
  title = 'Unify your team with',
  header = 'Maximize Content Marketing Performance',
  subtitle = 'Drive business growth with a visual CMS to create, deliver, measure, and optimize your content marketing at scale. ',
  primaryBtn = 'Start Now',
  primaryBtnLink = '#',
  secondaryBtn = 'Contact Sales',
  secondaryBtnLink = '#',
  subtitle2 = 'TRUSTED BY INDUSTRY LEADING COMPANIES',
  media = schemaPic,
}) => {
  return (
    <Stack
      py={{ xs: 4, tablet: 6, lg: 10 }}
      px={{ xs: 2, tablet: 4, lg: 14 }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Stack mb={{ xs: 4, lg: 5 }}>
        <Typography
          color="primary"
          textTransform="uppercase"
          sx={{
            fontWeight: {
              xs: 600,
            },
            fontSize: {
              xs: '12px',
              tablet: '14px',
            },
            lineHeight: '20px',
            letterSpacing: '1px',
            mb: {
              xs: '4px',
              tablet: '12px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          py={0}
          variant="h1"
          fontWeight={800}
          fontSize={{ xs: 36, tablet: 52 }}
          lineHeight={{ xs: '44px', tablet: '56px' }}
          mb={{ xs: 2, tablet: '24px' }}
          letterSpacing="-0.02em"
          width={{
            lg: '640px',
          }}
          color="text.primary"
        >
          {header}
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            color: 'text.secondary',
            width: {
              tablet: '592px',
            },
            margin: {
              tablet: '0 auto',
            },
          }}
        >
          {subtitle}
        </Typography>
      </Stack>

      <Stack
        spacing="12px"
        mb={{ xs: 4, tablet: 6 }}
        width={{ xs: '100%', tablet: 'auto' }}
        direction={{
          xs: 'column',
          tablet: 'row',
        }}
      >
        <Button
          href={primaryBtnLink}
          variant="contained"
          color="primary"
          size="extraLarge"
          fullWidth
          sx={{ width: { tablet: 'auto' } }}
        >
          {primaryBtn}
        </Button>
        <Button
          href={secondaryBtnLink}
          variant="outlined"
          color="primary"
          size="extraLarge"
          fullWidth
          sx={{ width: { tablet: 'auto' } }}
        >
          {secondaryBtn}
        </Button>
      </Stack>

      <Typography
        fontSize="12px"
        lineHeight="12px"
        mb={3}
        color="text.secondary"
        letterSpacing="1px"
      >
        {subtitle2}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        rowGap="24px"
        columnGap="20px"
        mb={{ xs: 4, tablet: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        <img src={sony} width="91px" height="32px" />
        <img src={rocketLeague} width="88.35px" height="32px" />
        <img src={singlife} width="102.12px" height="32px" />
        <img src={acorns} width="94px" height="32px" />
        <img src={bjs} width="36.48px" height="32px" />
        <img src={phoenixSuns} width="31.59px" height="32px" />
      </Stack>
      <Stack>
        <img
          src={media}
          width="100%"
          height="100%"
          style={{ objectFit: 'contain' }}
        />
      </Stack>
    </Stack>
  );
};

export default LightHero;
