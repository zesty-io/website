import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import TicketsList from 'components/accounts/support/TicketsList';
export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Support() {
  const router = useRouter();
  // const { userInfo, workingInstance } = useZestyStore((state) => state);
  const { zuid } = router.query;

  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = React.useState({});
  const handleGetInstanceSuccess = (res) => {
    console.log(res, 'succ upp');
    setinstance(res.data);
  };
  const handleGetInstanceErr = (res) => {
    setinstance('There was an error getting this isntance');
  };

  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
    res.error && handleGetInstanceErr(res);
  };
  const getPageData = async () => {
    await Promise.all([getInstance()]);
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
    <>
      <Box>
        <TicketsList instance={instance.name} />
        {/* <Typography variant="h4" mb={3} color="text.secondary">
        User ZUID: {userInfo?.ZUID} User Email: {userInfo?.email}
      </Typography> */}
      </Box>
    </>
  );
}

Support.data = {
  container: 'InstanceContainer',
};
