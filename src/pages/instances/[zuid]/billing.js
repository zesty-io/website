import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { ComingSoon } from 'components/accounts';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Billing() {
  const [, setusers] = React.useState([]);
  const [, setroles] = React.useState([]);
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

  return <ComingSoon />;
}

Billing.data = {
  container: 'InstanceContainer',
};
