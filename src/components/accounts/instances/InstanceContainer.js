import Main from 'layouts/Main/Main';
import React from 'react';
import { Container } from '@mui/material';
import { InstancesApp } from './InstancesApp';
import { AccountsAppbar } from 'components/console/AccountsAppbar';

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
      <AccountsAppbar />
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
