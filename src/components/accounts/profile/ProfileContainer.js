import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { ProfileApp } from './ProfileApp';
import { AccountsAppbar } from 'components/console/AccountsAppbar';

const Index = ({ children }) => {
  const renderChildren = () => {
    return <ProfileApp>{children}</ProfileApp>;
  };

  return (
    <Main>
      <AccountsAppbar />
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
