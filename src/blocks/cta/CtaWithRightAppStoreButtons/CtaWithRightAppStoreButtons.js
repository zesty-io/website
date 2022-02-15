import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const CtaWithRightAppStoreButtons = () => {
  return (
    <Container>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Everything your team could need.
        </Typography>
        <Typography variant="h6" color={'text.secondary'}>
          We make sure to include all the amenities and niceties that a growing
          startup could possibly need.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Apply in 15 minutes
          </Typography>
          <Typography>Get your dream mobile app without the hassle.</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
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
        </Box>
      </Box>
    </Container>
  );
};

export default CtaWithRightAppStoreButtons;
