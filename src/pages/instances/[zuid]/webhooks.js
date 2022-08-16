import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import { Webhooks } from 'views/accounts';

export default function WebhooksPage() {
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);
  const [webhooks, setWebhooks] = React.useState([]);

  const router = useRouter();

  const { zuid } = router.query;

  const getWebhooks = async () => {
    const res = await ZestyAPI.retrieveWebhookForInstance(zuid);
    setWebhooks(res.data);
    console.log(res.data);
  };
  React.useEffect(() => {
    getWebhooks();
  }, []);

  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            <Webhooks />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
