import React from 'react';
import Grid from '@mui/material/Grid';
import { Map, Form } from './components';

import Container from 'components/Container';

const Contact = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
