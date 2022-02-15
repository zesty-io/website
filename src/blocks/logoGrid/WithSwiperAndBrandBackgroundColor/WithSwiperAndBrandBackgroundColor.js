import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
  'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
  'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
  'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
];

const WithSwiperAndBrandBackgroundColor = () => {
  return (
    <Box bgcolor={'primary.main'}>
      <Container maxWidth={1}>
        <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
          {mock.map((item, i) => (
            <Box
              maxWidth={80}
              key={i}
              marginX={{ xs: 2, md: 3 }}
              marginY={{ xs: 2, md: 3 }}
            >
              <Box
                component="img"
                height={1}
                width={1}
                src={item}
                alt="..."
                sx={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WithSwiperAndBrandBackgroundColor;
