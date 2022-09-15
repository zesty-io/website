import React from 'react';
import { useRouter } from 'next/router';
import { ComingSoon } from 'components/accounts';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Support() {
  const router = useRouter();

  const { zuid } = router.query;

  return <ComingSoon />;
}

Support.data = {
  container: 'InstanceContainer',
};
