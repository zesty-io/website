import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Gallery, Headline, Numbers, Story, Team } from './components';

const AboutSideCover = () => {
  return (
    <Main>
      <Box>
        <Container>
          <Headline />
        </Container>
        <Container paddingY={'0 !important'}>
          <Gallery />
        </Container>
        <Container maxWidth={'800px !important'}>
          <Numbers />
        </Container>
        <Container maxWidth={'800px !important'}>
          <Divider />
        </Container>
        <Container>
          <Story />
        </Container>
        <Container maxWidth={'800px !important'}>
          <Divider />
        </Container>
        <Container>
          <Team />
        </Container>
      </Box>
    </Main>
  );
};

export default AboutSideCover;
