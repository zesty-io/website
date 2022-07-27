import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { Preference } from 'views/accounts/profile/Preference';
import { ProfileTabs } from 'components/accounts/profile/ProfileTabs';

export default function PreferencePage() {
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
            <ProfileTabs />
            <Preference />
          </>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
