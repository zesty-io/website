import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { ProfileApp } from './ProfileApp';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { capitalizeFirstLetter } from 'utils';
import { useRouter } from 'next/router';

const Index = ({ children }) => {
  const router = useRouter();
  const path = router?.pathname?.split('/')?.filter((e) => e)[1] || 'Profile';
  const renderChildren = () => {
    return <ProfileApp>{children}</ProfileApp>;
  };

  return (
    <Main>
      <ZestyAccountsHead title={`Accounts: ${capitalizeFirstLetter(path)}`} />
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
