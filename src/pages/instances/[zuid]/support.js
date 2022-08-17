import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function Webhooks() {
  const { userInfo, workingInstance } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  console.log(userInfo, 'support');

  return (
    <InstanceContainer>
      Support Instance: {workingInstance}
      User ZUID: {userInfo?.ZUID} User Email: {userInfo?.email}
    </InstanceContainer>
  );
}
