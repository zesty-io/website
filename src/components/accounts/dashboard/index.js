import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import Login from 'components/console/Login';
import Container from 'components/Container';
import React from 'react';
import { useZestyStore } from 'store';

const Dashboard = () => {
  const { isLogin, isUser } = useZestyStore((state) => state);
  return (
    <Box>
      <AppBar />
      <Container>Dashboard</Container>
      {/* if user is not verified load the login output the login component */}

      <Login />
    </Box>
  );
};

export default Dashboard;
