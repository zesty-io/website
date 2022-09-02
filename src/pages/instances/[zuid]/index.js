import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Overview } from 'views/accounts';

export default function OverviewPage() {
  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = React.useState({});
  const [blueprint, setblueprint] = React.useState({});
  const router = useRouter();
  const { zuid } = router.query;

  const handleGetInstanceSuccess = (res) => {
    console.log(res, 'succ upp');
    setinstance(res.data);
  };
  const handleGetInstanceErr = (res) => {
    console.log(res);
  };
  const handleGetBlueprintSuccess = (res) => {
    console.log(res, 'succ upp');
    setblueprint(res.data);
  };
  const handleGetBlueprintErr = (res) => {
    console.log(res);
  };

  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
    res.error && handleGetInstanceErr(res);
  };
  const getBlueprint = async () => {
    const res = await ZestyAPI.getBlueprint();
    !res.error && handleGetBlueprintSuccess(res);
    res.error && handleGetBlueprintErr(res);
  };

  const getPageData = async () => {
    await getInstance();
    await getBlueprint();
  };

  React.useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return (
    <Overview instance={instance} userInfo={userInfo} blueprint={blueprint} />
  );
}

OverviewPage.data = {
  container: 'InstanceContainer',
};
