import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
export default function Webhooks() {
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

  return <InstanceContainer>Manager Webhooks</InstanceContainer>;
}
