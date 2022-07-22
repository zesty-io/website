import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'views/InstancesApp/InstancesApp';
import { useRouter } from 'next/router';

export default function Users() {
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  const router = useRouter();

  return (
    <Main>
      <AppBar />

      {/* {JSON.stringify(data)} */}
      <Container>
        {isAuthenticated ? (
          <InstancesApp>Manager users on instance</InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
