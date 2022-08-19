import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function Instance() {
  const { setZestyAPI } = useZestyStore((state) => state);
  const router = useRouter();
  const { zuid } = router.query;

  React.useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  return (
    <InstanceContainer>
      <InstancesApp />
    </InstanceContainer>
  );
}
