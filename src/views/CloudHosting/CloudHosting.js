import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Articles,
  Features,
  Hero,
  HowItWorks,
  MobileApp,
  Partners,
  Pricings,
  Reviews,
  Storage,
  Story,
  Support,
} from './components';

const CloudHosting = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.alternate.main,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box paddingTop={{ md: 8 }}>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <About />
          </Container>
        </Box>
      </Box>
      <Container>
        <MobileApp />
      </Container>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
        }}
      >
        <Container>
          <HowItWorks />
        </Container>
      </Box>
      <Storage />
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
        }}
      >
        <Container>
          <Pricings />
        </Container>
      </Box>
      <Box bgcolor="alternate.main">
        <Container>
          <Support />
        </Container>
      </Box>
      <Container>
        <Articles />
      </Container>
      <Box bgcolor="alternate.main">
        <Container>
          <Story />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.alternate.main,
        }}
      >
        <Container>
          <Reviews />
        </Container>
      </Box>
    </Main>
  );
};

export default CloudHosting;
