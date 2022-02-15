import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const WithBoxedLogos = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            gutterBottom
            align={'center'}
            variant={'h4'}
            fontWeight={700}
          >
            Trusted by over 5,000 tech companies
          </Typography>
          <Typography color={'text.secondary'} align={'center'} variant={'h6'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item key={i} xs={6} sm={4}>
              <Box
                bgcolor={'alternate.main'}
                p={4}
                borderRadius={2}
                display={'flex'}
                justifyContent={'center'}
              >
                <Box
                  component="img"
                  height={1}
                  width={1}
                  maxWidth={90}
                  src={item}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'contrast(0)',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WithBoxedLogos;
