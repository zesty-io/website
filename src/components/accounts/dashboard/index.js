import { Box } from '@mui/material';
import AppBar from 'components/console/AppBar';
import Login from 'components/console/Login';
import Container from 'components/Container';
import React from 'react';
import { useZestyStore } from 'store';
export * from './DashboardApp';

const UserDashboard = () => {
  return <Box>user Dashboard</Box>;
};

const Dashboard = () => {
  const { isAuthenticated } = useZestyStore((state) => state);
  return (
    <Box>
      <AppBar />
      <Container>
        {!isAuthenticated && <Login />}
        {isAuthenticated && <UserDashboard />}
      </Container>
      {/* if user is not verified load the login output the login component */}
    </Box>
  );
};

export default Dashboard;
