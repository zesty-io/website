import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  AboutBottom,
  Features,
  Hero,
  Integrations,
  Jobs,
  News,
  Pricings,
  Reviews,
  Team,
  Trucking,
  Video,
} from './components';

const Logistics = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        bgcolor={'alternate.main'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={3}>
          <Hero />
        </Box>
      </Box>
      <Container>
        <Trucking />
      </Container>
      <About />
      <Container>
        <Features />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <News />
        </Container>
      </Box>
      <Container>
        <Team />
      </Container>
      <Video />
      <Box bgcolor={'#11092d'}>
        <Container>
          <Integrations />
        </Container>
      </Box>
      <Container>
        <Pricings />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Jobs />
        </Container>
      </Box>
      <Container>
        <AboutBottom />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
    </Main>
  );
};

export default Logistics;
