import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Newsletter = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700}>
            Join over 5000 subscribers for our newsletter
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={'form'}
            noValidate
            autoComplete="off"
            sx={{
              '& .MuiInputBase-input.MuiOutlinedInput-input': {
                bgcolor: 'background.paper',
              },
            }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Box
                flex={'1 1 auto'}
                component={TextField}
                label="Enter your email"
                variant="outlined"
                color="primary"
                fullWidth
                height={54}
              />
              <Box
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                height={54}
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
              >
                Subscribe
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
