import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Partners,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  Hero,
  Contact,
} from './components';

const DesignCompany = () => {
  const theme = useTheme();

  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Partners />
      </Container>
      <Container>
        <CaseStudy1 />
      </Container>
      <Container paddingY={'0 !important'}>
        <CaseStudy2 />
      </Container>
      <Container>
        <CaseStudy3 />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Contact />
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
    </Main>
  );
};

export default DesignCompany;
