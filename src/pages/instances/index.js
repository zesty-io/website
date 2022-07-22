import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesDashboard } from 'views/InstancesApp/InstancesDashboard';

export default function Intances() {
  const { isAuthenticated } = useZestyStore((state) => state);

  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated && <InstancesDashboard /> || <Login />}
      </Container>
    </Main>
  );
}
