import React from 'react';

import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { Box } from '@mui/material';
import Link from 'next/link';

export const InstancesDashboard = () => {
  const router = useRouter();
  const { ZestyAPI, workingInstance } = useZestyStore((state) => state);

  const [instances, setInstances] = React.useState([]);

  async function getInstances() {
    let instances = await ZestyAPI.getInstances();
    setInstances(instances.data);
  }

  React.useEffect(() => {
    instances.length === 0 && getInstances();
  }, [instances]);

  const handleChange = (data, newValue) => {
    router.push({
      pathname: `/instances/${newValue}/`,
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <Box>
      Instances
      {instances.map((instance) => (
        <Box onClick={() => handleChange(instances, instance.ZUID)}>
          {instance.ZUID}
        </Box>
      ))}
    </Box>
  );
};
