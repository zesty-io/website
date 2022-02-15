import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CreditCardsIllustration from 'svg/illustrations/CreditCards';

const Payment = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              The pro account for entrepreneurs.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Much more than a bank, it is the ideal, fastest and most
              convenient financial and administrative co-driver to work with
              peace of mind.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={!isMd}
            >
              Contact sales
            </Box>
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={!isMd}
              marginTop={{ xs: 1, sm: 0 }}
              marginLeft={{ sm: 2 }}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box height={1} width={1} display={'flex'} justifyContent={'center'}>
          <Box height={1} width={1} maxWidth={450}>
            <CreditCardsIllustration width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Payment;
