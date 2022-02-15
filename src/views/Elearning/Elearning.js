import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Categories,
  Courses,
  Hero,
  PromoNumbers,
  Reviews,
  Subscription,
} from './components';

const Elearning = () => {
  const theme = useTheme();

  return (
    <Main>
      <Hero />
      <Container>
        <PromoNumbers />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Categories />
          <Container>
            <Divider />
          </Container>
          <Courses />
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
        <Reviews />
      </Container>
      <Box
        sx={{
          background: 'transparent',
          backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 40%, ${theme.palette.primary.main} 0%)`,
        }}
      >
        <Container>
          <Subscription />
        </Container>
      </Box>
    </Main>
  );
};

export default Elearning;
