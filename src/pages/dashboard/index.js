import { React } from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { DashboardApp } from 'views/DashboardApp/DashboardApp';

export default function Dashboard() {
  const { isAuthenticated } = useZestyStore((state) => state);
  
  return (
    <Main>
      <AppBar />
      <Container>
        {isAuthenticated && <DashboardApp /> || <Login />}
      </Container>
    </Main>
  );
}
