import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { Preference } from 'views/accounts/profile/Preference';
import { ProfileApp } from 'components/accounts';

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
            <ProfileApp>
              <Preference />
            </ProfileApp>
          </>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
