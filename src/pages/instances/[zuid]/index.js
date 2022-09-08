import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Overview } from 'views/accounts';

export default function OverviewPage() {
  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = React.useState({});
  const router = useRouter();
  const { zuid } = router.query;

  const handleGetInstanceSuccess = (res) => {
    console.log(res, 'succ upp');
    setinstance(res.data);
  };
  const handleGetInstanceErr = (res) => {
    console.log(res);
  };

  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
    res.error && handleGetInstanceErr(res);
  };

  const getPageData = async () => {
    await getInstance();
  };

  React.useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return <Overview instance={instance} userInfo={userInfo} />;
}

OverviewPage.data = {
  container: 'InstanceContainer',
};
