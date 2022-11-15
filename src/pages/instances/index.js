import React from 'react';
import InstancesDashboardV2 from 'components/accounts/instances/InstanceDashboardV2';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function Instances() {
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
