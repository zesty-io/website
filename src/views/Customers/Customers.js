import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Headline, Partners, Stories } from './components';

const Customers = () => {
  const theme = useTheme();
  return (
    <Main>
      <Box>
        <Box
          position={'relative'}
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container zIndex={3} position={'relative'}>
            <Container marginLeft={'0 !important'}>
              <Headline />
            </Container>
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            width={1}
            marginBottom={-1}
            position={'relative'}
            zIndex={2}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
        <Box position={'relative'} zIndex={3} marginTop={{ xs: 0, md: -22 }}>
          <Container>
            <Partners />
          </Container>
        </Box>
        <Container>
          <Stories />
        </Container>
        <Box bgcolor={theme.palette.alternate.main}>
          <Container>
            <Contact />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default Customers;
