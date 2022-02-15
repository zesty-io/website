import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';
import { Reviews, Integrations } from './components';

const ClientSatisfaction = () => {
  return (
    <Box>
      <Container>
        <Reviews />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Integrations />
      </Container>
    </Box>
  );
};

export default ClientSatisfaction;
