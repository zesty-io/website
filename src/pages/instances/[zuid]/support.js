import React from 'react';
import { ComingSoon } from 'components/accounts';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function Support() {
  return (
    <InstanceContainer>
      <ComingSoon />
    </InstanceContainer>
  );
}
