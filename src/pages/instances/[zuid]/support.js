import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'views/InstancesApp/InstancesApp';
import { useRouter } from 'next/router';

export default function Webhooks() {
  const { ZestyAPI, isAuthenticated, userInfo, workingInstance } =
    useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  console.log(userInfo, 'support');

  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated && (
          <InstancesApp>
            Support Instance: {workingInstance}
            User ZUID: {userInfo?.ZUID} User Email: {userInfo?.email}
          </InstancesApp>
        )}

        {!isAuthenticated && <Login />}
      </Container>
    </Main>
  );
}
