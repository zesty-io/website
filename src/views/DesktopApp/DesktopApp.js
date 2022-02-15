import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Customization,
  Download,
  Hero,
  Hub,
  Partners,
  Pricings,
  Reviews,
  Support,
} from './components';

const DesktopApp = () => {
  const theme = useTheme();
  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Container paddingY={'0 !important'}>
          <Reviews />
        </Container>
        <Container>
          <Hub />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <Support />
      </Container>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Customization />
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
        <Partners />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Pricings />
        </Container>
      </Box>
      <Container>
        <Download />
      </Container>
    </Main>
  );
};

export default DesktopApp;
