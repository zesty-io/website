import AppBar from 'components/console/AppBar';
import Login from 'components/console/Login';
import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { useZestyStore } from 'store';
import { InstancesApp } from './InstancesApp';

const InstanceContainer = ({ children }) => {
  const { isAuthenticated } = useZestyStore((state) => state);

  return (
    <Main>
      <AppBar />
      <Container>
        {isAuthenticated ? <InstancesApp>{children}</InstancesApp> : <Login />}
      </Container>
    </Main>
  );
};

export default InstanceContainer;
