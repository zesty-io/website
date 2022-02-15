import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { About, Features, Hero, Jobs, Newsletter } from './components';

const CareerListingMinimal = () => (
  <Main colorInvert={true}>
    <Hero />
    <Container paddingY={'0 !important'}>
      <About />
    </Container>
    <Container>
      <Features />
    </Container>
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Jobs />
      </Container>
    </Box>
    <Container>
      <Newsletter />
    </Container>
    <Divider />
  </Main>
);

export default CareerListingMinimal;
