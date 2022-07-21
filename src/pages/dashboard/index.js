import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { DashboardApp } from 'views/DashboardApp/DashboardApp';

export default function Dashboard() {
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  return (
    <Main>
      <AppBar />
      {!isAuthenticated && <Login />}
      {isAuthenticated && <DashboardApp />}

      <Container>Ship it!</Container>
    </Main>
  );
}
