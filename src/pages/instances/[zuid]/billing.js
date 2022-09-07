import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

export default function Billing() {
  const [users, setusers] = React.useState([]);
  const [roles, setroles] = React.useState([]);
  const { ZestyAPI } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    setusers(res.data);
    console.log(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    setroles(res.data);
    console.log(res);
  };
  React.useEffect(() => {
    if (router.isReady) {
      getUsers();
      getInstanceUserRoles();
    }
  }, [router.isReady]);

  return (
    <Box>
      <Typography variant="h3">Coming Soon</Typography>
    </Box>
  );
}

Billing.data = {
  container: 'InstanceContainer',
};
