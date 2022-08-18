import AppBar from 'components/console/AppBar';
import Login from 'components/console/Login';
import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { useZestyStore } from 'store';
import { InstancesApp } from './InstancesApp';

const InstanceContainer = ({ children, isDashboard = false }) => {
  const { isAuthenticated } = useZestyStore((state) => state);

  const renderChildren = () => {
    if (isAuthenticated) {
      if (isDashboard) {
        return children;
      } else {
        return <InstancesApp>{children}</InstancesApp>;
      }
    } else {
      return <Login />;
    }
  };

  return (
    <Main>
      <AppBar />
      <Container
        maxWidth={false}
        sx={(theme) => ({ maxWidth: theme.breakpoints.values.xl2 })}
      >
        {renderChildren()}
      </Container>
    </Main>
  );
};

export default InstanceContainer;
