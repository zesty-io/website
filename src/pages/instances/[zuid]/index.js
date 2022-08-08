import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore, getZestyAPI } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';

export default function Instance() {
  const { isAuthenticated, setZestyAPI } = useZestyStore((state) => state);
  const router = useRouter();
  const { zuid } = router.query;

  React.useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  return (
    <Main>
      <AppBar />

      <Container>{isAuthenticated ? <InstancesApp /> : <Login />}</Container>
    </Main>
  );
}
