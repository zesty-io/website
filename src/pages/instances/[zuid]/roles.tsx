import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { useZestyStore } from 'store';
import { useRoles } from 'store/roles';
import { useInstance } from 'store/instance';
import { Role } from 'store/types';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import { Roles } from 'views/accounts';
import { ErrorMsg } from 'components/accounts';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function RolesPage() {
  const router = useRouter();
  const { ZestyAPI, userInfo, loading } = useZestyStore((state) => state);
  const { usersWithRoles, setUsersWithRoles, setCustomRoles, setBaseRoles } =
    useRoles((state) => state);
  const { setInstanceContentModels } = useInstance((state) => state);
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
      Promise.all([
        getInstanceUserWithRoles(),
        getInstanceRoles(),
        getInstanceModels(),
      ]).finally(() => setIsInitializingData(false));
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
      const baseRoles: Role[] = [];
      const customRoles: Role[] = [];

      // Separate base roles from custom roles
      res.data?.forEach((role: Role) => {
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

  const getInstanceModels = async () => {
    const res = await ZestyAPI.getModels();

    if (res.error) {
      ErrorMsg({ text: res.error });
      setInstanceContentModels([]);
    } else {
      setInstanceContentModels(res.data);
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
