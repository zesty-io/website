import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesDashboard } from 'components/accounts/instances/InstancesDashboard';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { getCookie } from 'cookies-next';

export default function Intances() {
  const { instances } = useFetchWrapper();
  const { setInstances } = useZestyStore((state) => state);

  const isAuthenticated = getCookie('isAuthenticated');

  React.useEffect(() => {
    setInstances(instances);
  }, [instances]);

  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated ? <InstancesDashboard /> : <Login />}
      </Container>
    </Main>
  );
}
