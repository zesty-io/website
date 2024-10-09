import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { useZestyStore } from 'store';
import { useRoles } from 'store/roles';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import { Roles } from 'views/accounts';
import { ErrorMsg } from 'components/accounts';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

// const SYSTEM_ROLE_ZUIDS = [
//   '31-71cfc74-0wn3r',
//   '31-71cfc74-4dm13',
//   '31-71cfc74-4cc4dm13',
//   '31-71cfc74-d3v3l0p3r',
//   '31-71cfc74-d3vc0n',
//   '31-71cfc74-p0bl1shr',
//   '31-71cfc74-s30',
//   '31-71cfc74-c0ntr1b0t0r',
//   '31-71cfc74-m3d14',
// ];

export default function RolesPage() {
  const router = useRouter();
  const { ZestyAPI, userInfo, loading } = useZestyStore((state) => state);
  const { usersWithRoles, setUsersWithRoles, setCustomRoles, setBaseRoles } =
    useRoles((state) => state);
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
      Promise.all([getInstanceUserWithRoles(), getInstanceRoles()]).finally(
        () => setIsInitializingData(false),
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

  const getInstanceRoles = async () => {
    const res = await ZestyAPI.getInstanceRoles(zuid);

    if (res.error) {
      ErrorMsg({ text: res.error });
    } else {
      const baseRoles = [];
      const customRoles = [];

      // Separate base roles from custom roles
      res.data?.forEach((role) => {
        console.log(res.data);
        if (role.static) {
          baseRoles.push(role);
        } else {
          customRoles.push(role);
        }
      });

      setBaseRoles(baseRoles);
      setCustomRoles(customRoles);
    }
  };

  return (
    <InstanceContainer>
      <Roles
        isLoading={isInitializingData || loading}
        hasPermission={hasPermission}
      />
    </InstanceContainer>
  );
}
