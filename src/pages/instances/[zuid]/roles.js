import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { useZestyStore } from 'store';
import { useRoles } from 'store/roles';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import { Roles } from 'views/accounts';
import { ErrorMsg } from 'components/accounts';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function RolesPage() {
  const router = useRouter();
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const { usersWithRoles, setUsersWithRoles } = useRoles((state) => state);
  const [isInitializingData, setIsInitializingData] = useState(true);

  const { zuid } = router.query;

  const hasPermission = useMemo(() => {
    if (!userInfo?.ZUID || !usersWithRoles?.length) return false;

    return ['admin', 'owner'].includes(
      usersWithRoles
        ?.find((user) => user.ZUID === userInfo?.ZUID)
        ?.role?.name?.toLowerCase(),
    );
  }, [userInfo, usersWithRoles]);

  useEffect(() => {
    if (router.isReady) {
      Promise.all([getInstanceUserWithRoles()]).finally(() =>
        setIsInitializingData(false),
      );
    }
  }, [router.isReady]);

  const getInstanceUserWithRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);

    if (res.error) {
      ErrorMsg({ text: res.error });
      setUsersWithRoles([]);
    } else {
      setUsersWithRoles(res.data);
    }
  };

  return (
    <InstanceContainer>
      <Roles isLoading={isInitializingData} hasPermission={hasPermission} />
    </InstanceContainer>
  );
}
