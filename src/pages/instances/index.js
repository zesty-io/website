import React from 'react';
import { useZestyStore } from 'store';
import { InstancesDashboard } from 'components/accounts/instances/InstancesDashboard';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function Intances() {
  const { instances } = useFetchWrapper();
  const { setInstances } = useZestyStore((state) => state);

  React.useEffect(() => {
    setInstances(instances);
  }, [instances]);

  return (
    <InstanceContainer isDashboard>
      <InstancesDashboard />
    </InstanceContainer>
  );
}
