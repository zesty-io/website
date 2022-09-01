import AppBar from 'components/console/AppBar';
import React from 'react';
import { Container } from '@mui/material';
import Main from 'layouts/Main/Main';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';

const TeamsContainer = ({ children }) => {
  const isLoggedIn = useIsLoggedIn();

  const renderChildren = () => {
    if (isLoggedIn) {
      return children;
    } else {
      window.location.replace('/login');
    }
  };

  return (
    <Main>
      <AppBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={(theme) => ({
          maxWidth: theme.breakpoints.values.xl2,
        })}
      >
        {renderChildren()}
      </Container>
    </Main>
  );
};

export default TeamsContainer;
