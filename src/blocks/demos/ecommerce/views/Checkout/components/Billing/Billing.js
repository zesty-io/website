import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Billing = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Enter your card number
            </Typography>
            <TextField
              label="Card number *"
              variant="outlined"
              name={'cardNumber'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Name on the card
            </Typography>
            <TextField
              label="Name *"
              variant="outlined"
              name={'name'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Expiration date
            </Typography>
            <TextField
              label="Expiration date *"
              variant="outlined"
              name={'date'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Billing zip code
            </Typography>
            <TextField
              label="Zip code *"
              variant="outlined"
              name={'zip'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              CVV
            </Typography>
            <TextField
              label="Card CVV *"
              variant="outlined"
              name={'cvv'}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Billing;
