import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Headline, Form, Partners } from './components';

const HireUs = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={800} paddingBottom={'0 !important'}>
          <Form />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container paddingTop={'0 !important'}>
          <Partners />
        </Container>
      </Box>
    </Main>
  );
};

export default HireUs;
