/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const CtaWithAppStoreButtons = () => {
  return (
    <Container>
      <Box marginBottom={2}>
        <Typography
          variant="h3"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Don't listen to what they say{' '}
          <Typography color={'primary'} component={'span'} variant={'inherit'}>
            go and see
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          Travelling with our app is easy.
          <br />
          Join the biggest community of travellers.
        </Typography>
      </Box>
      <Box display="flex" marginTop={1}>
        <Box
          component={Avatar}
          bgcolor={'primary.main'}
          width={{ xs: 40, sm: 50 }}
          height={{ xs: 40, sm: 50 }}
        >
          <Box
            component={'img'}
            src={
              'https://assets.maccarianagency.com/svg/icons/app-store-icon.svg'
            }
            alt={'app store'}
            width={{ xs: 15, md: 20 }}
          />
        </Box>
        <Box
          component={Avatar}
          bgcolor={'primary.main'}
          marginLeft={1}
          width={{ xs: 40, sm: 50 }}
          height={{ xs: 40, sm: 50 }}
        >
          <Box
            component={'img'}
            src={
              'https://assets.maccarianagency.com/svg/icons/play-store-icon.svg'
            }
            alt={'play store'}
            sx={{ filter: 'brightness(0) invert(1)' }}
            width={{ xs: 15, md: 20 }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CtaWithAppStoreButtons;
