import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Browsers,
  Reviews,
  Integrations,
  Partners,
  Solutions,
  Subscription,
  VideoSection,
} from './components';

const Enterprise = () => {
  return (
    <Main>
      <Box bgcolor={'alternate.main'} marginTop={-13} paddingTop={13}>
        <Container>
          <Hero />
        </Container>
        <Container maxWidth={1} paddingTop={'0 !important'}>
          <VideoSection />
        </Container>
        <Container paddingY={'0 !important'}>
          <Partners />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container paddingY={'0 !important'}>
          <Solutions />
        </Container>
        <Container paddingTop={{ md: 16 }}>
          <Browsers />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container>
          <Reviews />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container>
          <Integrations />
        </Container>
        <Container paddingTop={'0 !important'}>
          <Subscription />
        </Container>
      </Box>
    </Main>
  );
};

export default Enterprise;
