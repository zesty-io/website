import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'views/InstancesApp/InstancesApp';

export default function Webhooks() {
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  return (
    <Main>
      <AppBar />

      <Container>
        
        
        {isAuthenticated && 
        <InstancesApp>
          Manager Webhooks
          </InstancesApp>}

          {!isAuthenticated && <Login />}
      </Container>
    </Main>
  );
}
