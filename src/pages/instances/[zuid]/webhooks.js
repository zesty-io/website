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

  const handleGetWebhooksSuccess = (res) => {
    console.log(res.data);
  };

  const handleGetWebhooksError = (res) => {
    console.log(res.error);
  };
  const handleCreateWebhooksSuccess = (res) => {
    console.log(res.data);
  };

  const handleCreateWebhooksError = (res) => {
    console.log(res.error);
  };
  const getWebhooks = async () => {
    const res = await ZestyAPI.retrieveWebhookForInstance(zuid);
    !res.error && handleGetWebhooksSuccess(res);
    res.error && handleGetWebhooksError(res);
  };

  const createWebhook = async (data) => {
    const {
      scopedResource,
      parentResourceZUID,
      resource,
      eventAction,
      method,
      URL,
      contentType,
      text,
    } = data;
    const res = await ZestyAPI.createWebhook(
      scopedResource,
      parentResourceZUID,
      resource,
      eventAction,
      method,
      URL,
      contentType,
      text,
    );
    !res.error && handleCreateWebhooksSuccess(res);
    res.error && handleCreateWebhooksError(res);
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
            <Webhooks createWebhook={createWebhook} />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
