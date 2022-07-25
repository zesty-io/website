import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import { ProfileApp } from 'views/ProfileApp/ProfileApp';
import Login from 'components/console/Login';

export default function Profile() {
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);
  return (
    <Main>
      <AppBar />
      <Container>
        {isAuthenticated ? <ProfileApp /> : <Login />}
      </Container>
    </Main>
  );
}
