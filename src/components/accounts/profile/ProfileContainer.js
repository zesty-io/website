import AppBar from 'components/console/AppBar';
import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { ProfileApp } from './ProfileApp';

const Index = ({ children }) => {
  const renderChildren = () => {
    return <ProfileApp>{children}</ProfileApp>;
  };

  return (
    <Main>
      <AppBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={(theme) => ({ maxWidth: theme.breakpoints.values.xl2 })}
      >
        {renderChildren()}
      </Container>
    </Main>
  );
};

export const ProfileContainer = React.memo(Index);
