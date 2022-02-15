import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Search = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          What is your real need?
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          After 3 days all of your offers will arrive and you will have another
          7 days to select your new company.
          <br />
          We make sure to include all the amenities and niceties that a growing
          startup could possibly need.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  I share a room
                </Typography>
                <Typography>Over 20,000 users searching a place</Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button variant="contained" size="large" color={'secondary'}>
                  Search
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  I need a place
                </Typography>
                <Typography>Over 20,000 users searching a place</Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button variant="contained" color="primary" size="large">
                  Search
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
