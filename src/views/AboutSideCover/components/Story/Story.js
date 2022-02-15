import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Story = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant={'h5'}>
            We design and implement creative solutions to everyday business
            problems
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component={'p'} color={'text.secondary'} fontWeight={400}>
            We are a team of creative consultants who help bridge the digital
            gap between companies and their clients with websites that not only
            serve as marketing platforms but also provide solutions to online
            business problems and digital marketing strategies that connect you
            with the ideal client and help create a loyal customer.
            <br />
            <br />
            We are a team of creative consultants who help bridge the digital
            gap between companies and their clients with websites that not only
            serve as marketing platforms but also provide solutions to online
            business problems and digital marketing strategies that connect you
            with the ideal client and help create a loyal customer.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
            {[
              'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
              'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
              'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
              'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
              'https://assets.maccarianagency.com/svg/logos/google-original.svg',
              'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
            ].map((item, i) => (
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
