import { Button, Stack, Typography } from '@mui/material';
import schemaPic from '../../assets/schema.png';
import acorns from '../../assets/acorns.jpg';
import bjs from '../../assets/bjs.jpg';
import phoenixSuns from '../../assets/phoenixSuns.jpg';
import rocketLeague from '../../assets/rocketLeague.jpg';
import singlife from '../../assets/singlife.jpg';
import sony from '../../assets/sony.jpg';
import React from 'react';

const Hero2 = ({
  title = 'Unify your team with',
  header = 'The future proof CMS for enterprise of any size',
  subtitle = 'Create, distribute, and optimize content at SCALE with fewer resources in less time with the Zesty Hybrid Headless CMS. ',
  primaryBtn = 'Start Now',
  secondaryBtn = 'Contact Sales',
  subtitle2 = 'TRUSTED BY INDUSTRY LEADING COMPANIES',
}) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Stack py={{ lg2: '92px' }}>
        <Stack mb={4}>
          <Typography
            py={0}
            variant="h2"
            fontWeight={800}
            fontSize={{ xs: 36, sm2: 52 }}
            lineHeight={{ xs: '44px', sm2: '56px' }}
            mb={{ xs: 2, sm2: '20px' }}
          >
            {header}
          </Typography>

          <Typography color="text.secondary" variant="body1">
            {subtitle}
          </Typography>
        </Stack>

        <Stack
          spacing={1}
          mb={4}
          direction={{
            xs: 'column',
            sm2: 'row',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: 'none' }}
          >
            {primaryBtn}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ textTransform: 'none' }}
          >
            {secondaryBtn}
          </Button>
        </Stack>

        <Typography fontSize="12px" lineHeight="12px" mb={3}>
          {subtitle2}
        </Typography>

        <Stack direction="row" flexWrap="wrap" rowGap="24px" columnGap="20px">
          <img src={sony.src} width="96px" height="32px" />
          <img src={rocketLeague.src} width="96px" height="32px" />
          <img src={acorns.src} width="96px" height="32px" />
          <img src={bjs.src} width="35px" height="32px" />
          <img src={singlife.src} width="103.34px" height="32px" />
          <img src={phoenixSuns.src} width="31.63px" height="32px" />
        </Stack>
      </Stack>
      <img src={schemaPic.src} width="100%" height="100%" />
    </Stack>
  );
};

export default Hero2;
