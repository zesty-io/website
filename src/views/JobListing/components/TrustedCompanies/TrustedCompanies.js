/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const TrustedCompanies = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Trusted by you favorite companies
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              We are registered as a distributor with AMFI,
              <br />
              investment advisor with SEBI and platform partners with BSE.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
              {mock.map((item, i) => (
                <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                  <Box
                    component="img"
                    height={1}
                    width={1}
                    src={item}
                    alt="..."
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0) invert(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrustedCompanies;
