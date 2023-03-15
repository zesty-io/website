import { Button, Stack, Typography } from '@mui/material';
import schemaPic from '../../assets/schema.png';
import acorns from '../../assets/acorns.png';
import bjs from '../../assets/bjs.png';
import phoenixSuns from '../../assets/phoenixSuns.png';
import rocketLeague from '../../assets/rocketLeague.png';
import singlife from '../../assets/singlife.png';
import sony from '../../assets/sony.png';
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
    <Stack
      py={{ xs: 4, sm2: 6, lg2: 10 }}
      px={{ xs: 2, sm2: 4, lg2: 14 }}
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
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '1px',
            mb: {
              xs: '4px',
              sm2: '12px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          py={0}
          variant="h1"
          fontWeight={800}
          fontSize={{ xs: 36, sm2: 52 }}
          lineHeight={{ xs: '44px', sm2: '56px' }}
          mb={{ xs: 2, sm2: '24px' }}
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
          }}
        >
          {subtitle}
        </Typography>
      </Stack>

      <Stack
        spacing={1}
        mb={4}
        width={{ xs: '100%', sm2: 'auto' }}
        direction={{
          xs: 'column',
          sm2: 'row',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ textTransform: 'none', width: { sm2: 'auto' } }}
        >
          {primaryBtn}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
          sx={{ textTransform: 'none', width: { sm2: 'auto' } }}
        >
          {secondaryBtn}
        </Button>
      </Stack>

      <Typography fontSize="12px" lineHeight="12px" mb={3} color="grey.50">
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
        <img src={sony.src} width="90.6px" height="16px" />
        <img src={rocketLeague.src} width="90.7px" height="32px" />
        <img src={singlife.src} width="103.34px" height="32px" />
        <img src={acorns.src} width="96px" height="32px" />
        <img src={bjs.src} width="36.46px" height="32px" />
        <img src={phoenixSuns.src} width="31.63px" height="32px" />
      </Stack>
      <Stack>
        <img
          src={schemaPic.src}
          width="100%"
          height="100%"
          style={{ objectFit: 'contain' }}
        />
      </Stack>
    </Stack>
  );
};

export default Hero2;
