import { Button, Stack, Typography } from '@mui/material';
import schemaPic from '../../assets/schema.png';
import acorns from '../../assets/acorns.svg';
import bjs from '../../assets/bjs.svg';
import phoenixSuns from '../../assets/phoenixSuns.svg';
import rocketLeague from '../../assets/rocketLeague.svg';
import singlife from '../../assets/singlife.svg';
import sony from '../../assets/sony.svg';
import React from 'react';

const BlackHero = ({
  title = 'Unify your team with',
  header = 'The future proof CMS for enterprise of any size',
  subtitle = 'Create, distribute, and optimize content at SCALE with fewer resources in less time with the Zesty Hybrid Headless CMS. ',
  primaryBtn = 'Start Now',
  primaryBtnLink = '#',
  secondaryBtn = 'Contact Sales',
  secondaryBtnLink = '#',
  subtitle2 = 'TRUSTED BY INDUSTRY LEADING COMPANIES',
}) => {
  return (
    <Stack
      py={{ xs: 4, tablet: 6, lg: 10 }}
      px={{ xs: 2, tablet: 4, lg: 14 }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{ bgcolor: 'grey.900' }}
    >
      <Stack mb={4}>
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
          width={{
            lg: '640px',
          }}
          color="white"
        >
          {header}
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            color: 'grey.50',
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
        mb={6}
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
        color="grey.50"
        letterSpacing="1px"
      >
        {subtitle2}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        rowGap="24px"
        columnGap="20px"
        mb={6}
        justifyContent="center"
        alignItems="center"
      >
        <img src={rocketLeague.src} width="88.35px" height="32px" />
        <img src={singlife.src} width="102.12px" height="32px" />
        <img src={sony.src} width="91px" height="32px" />
        <img src={acorns.src} width="94px" height="32px" />
        <img src={bjs.src} width="36.48px" height="32px" />
        <img src={phoenixSuns.src} width="31.59px" height="32px" />
      </Stack>
      <Stack>
        <img
          src={schemaPic.src}
          width="100%"
          height="100%"
          style={{ objectFit: 'contain', borderRadius: '8px' }}
        />
      </Stack>
    </Stack>
  );
};

export default BlackHero;
