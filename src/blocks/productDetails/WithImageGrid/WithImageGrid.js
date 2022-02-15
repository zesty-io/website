import React from 'react';
import Grid from '@mui/material/Grid';

import { Image, Details } from './components';

import Container from 'components/Container';

const WithImageGrid = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={7}>
          <Image />
        </Grid>
        <Grid item xs={12} md={5}>
          <Details />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithImageGrid;
