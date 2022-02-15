import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Advantages,
  Features,
  Integrations,
  Reviews,
  Team,
  VideoSection,
} from './components';

const Service = () => {
  const theme = useTheme();
  return (
    <Main>
      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
          position: 'relative',
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <About />
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
        <VideoSection />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Integrations />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Team />
        </Container>
      </Box>
    </Main>
  );
};

export default Service;
