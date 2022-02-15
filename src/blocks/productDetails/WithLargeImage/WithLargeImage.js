import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Image, Details } from './components';

import Container from 'components/Container';

const WithLargeImage = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={7}>
            <Image />
          </Grid>
          <Grid item xs={12} md={5}>
            <Details />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WithLargeImage;
