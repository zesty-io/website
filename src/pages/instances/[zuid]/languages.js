import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Languages() {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [, setWebhooks] = React.useState([]);

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

  return <>Languages</>;
}

Languages.data = {
  container: 'InstanceContainer',
};
