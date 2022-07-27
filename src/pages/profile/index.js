import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { YourProfile } from 'views/accounts/profile/YourProfile';
import { ProfileTabs } from 'components/accounts/profile/ProfileTabs';

export default function Profile() {
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
            <YourProfile />
          </>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
