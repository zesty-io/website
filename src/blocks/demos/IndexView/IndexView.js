import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

import { Demos, Documentation } from './components';

const IndexView = () => {
  return (
    <>
      <Container>
        <Demos />
      </Container>
      <Container>
        <Box
          bgcolor={'alternate.main'}
          py={{ xs: 4, sm: 8 }}
          px={{ xs: 2, sm: 8 }}
          borderRadius={2}
        >
          <Documentation />
        </Box>
      </Container>
    </>
  );
};

export default IndexView;
