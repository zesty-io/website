import AppBar from 'components/console/AppBar';
import Login from 'components/console/Login';
import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { ProfileApp } from './ProfileApp';
import { getCookie } from 'cookies-next';

const Index = ({ children, isDashboard = false }) => {
  const isAuthenticated = getCookie('isAuthenticated');
  const renderChildren = () => {
    if (isAuthenticated) {
      if (isDashboard) {
        return children;
      } else {
        return <ProfileApp>{children}</ProfileApp>;
      }
    } else {
      return <Login />;
    }
  };

  return (
    <Main>
      <AppBar />
      <Container
        maxWidth={false}
        sx={(theme) => ({ maxWidth: theme.breakpoints.values.xl2 })}
      >
        {renderChildren()}
      </Container>
    </Main>
  );
};

export const ProfileContainer = React.memo(Index);
