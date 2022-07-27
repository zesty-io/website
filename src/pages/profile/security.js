import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import { ProfileApp } from 'views/ProfileApp/ProfileApp';
import Login from 'components/console/Login';
import { getUserAppSID } from 'utils';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { Password } from 'components/accounts/profile/Password';

export default function PasswordPage() {
  const { isAuthenticated, setuserInfo } = useZestyStore((state) => state);
  const { userInfo } = useFetchWrapper();

  React.useEffect(() => {
    setuserInfo(userInfo.data);
  }, [userInfo]);

  return (
    <Main>
      <AppBar />
      <Container>
        {isAuthenticated ? (
          <>
            <ProfileApp />
            <Password />
          </>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
