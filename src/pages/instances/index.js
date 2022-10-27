import React from 'react';
import { useZestyStore } from 'store';
import InstancesDashboardV2 from 'components/accounts/instances/InstanceDashboardV2';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Instances() {
  const { instances } = useFetchWrapper();
  const { setInstances } = useZestyStore((state) => state);

  React.useEffect(() => {
    setInstances(instances);
  }, [instances]);

  return (
    <>
      <ZestyAccountsHead title={'Accounts: Instances'} />
      <InstancesDashboardV2 />
    </>
  );
}

Instances.data = {
  container: 'InstanceContainer',
  props: {
    isDashboard: true,
  },
};
