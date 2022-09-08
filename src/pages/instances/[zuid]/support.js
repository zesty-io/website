import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Support() {
  const { userInfo, workingInstance } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  console.log(userInfo, 'support');

  return (
    <>
      Support Instance: {workingInstance}
      User ZUID: {userInfo?.ZUID} User Email: {userInfo?.email}
    </>
  );
}

Support.data = {
  container: 'InstanceContainer',
};
