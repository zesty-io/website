import AppBar from 'components/console/AppBar';
import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { InstancesApp } from './InstancesApp';

const InstanceContainer = ({ children, isDashboard = false }) => {
  const renderChildren = () => {
    if (isDashboard) {
      return children;
    } else {
      return <InstancesApp>{children}</InstancesApp>;
    }
  };

  return (
    <Main>
      <AppBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={(theme) => ({
          maxWidth: theme.breakpoints.values.xl2,
        })}
      >
        {renderChildren()}
      </Container>
    </Main>
  );
};

export default InstanceContainer;
