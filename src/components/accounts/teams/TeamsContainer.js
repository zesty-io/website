import React from 'react';
import { Container } from '@mui/material';
import Main from 'layouts/Main/Main';

const TeamsContainer = ({ children }) => {
  return (
    <Main>
      <Container
        maxWidth={false}
        disableGutters
        sx={(theme) => ({
          maxWidth: theme.breakpoints.values.xl2,
        })}
      >
        {children}
      </Container>
    </Main>
  );
};

export default TeamsContainer;
