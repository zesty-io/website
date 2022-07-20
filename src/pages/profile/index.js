import React from 'react';
import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';

export default function Profile() {
  return (
    <Main>
      <AppBar />
      <Container>Ship it!</Container>
    </Main>
  );
}
