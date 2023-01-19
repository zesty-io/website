import React from 'react';
import InstancesDashboardV2 from 'components/accounts/instances/InstanceDashboardV2';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function Instances() {
  return (
    <InstanceContainer isDashboard>
      <ZestyAccountsHead title={'Accounts: Instances'} />
      <InstancesDashboardV2 />
    </InstanceContainer>
  );
}
