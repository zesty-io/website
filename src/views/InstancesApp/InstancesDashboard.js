import React from 'react';

import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { Box, Button } from '@mui/material';
import { HorizontalRule  } from '@mui/icons-material';

export const InstancesDashboard = () => {
  const router = useRouter();
  const { ZestyAPI, workingInstance } = useZestyStore((state) => state);

  const [instances, setInstances] = React.useState([]);

  async function getInstances() {
    let instances = await ZestyAPI.getInstances();
    setInstances(instances?.data ? instances.data : []);
  }

  React.useEffect(() => {
    instances.length === 0 && getInstances();
  }, [instances]);

  const handleChange = (zuid) => {
    router.push({
      pathname: `/instances/${zuid}/`,
    });
  };

  return (
    <Box>
      <HorizontalRule />
      {instances.map((instance) => (
        <Box key={`${instance.ZUID}-instancelist`} >
          {instance.ZUID} {instance.name}
          <Button onClick={() => handleChange(instance.ZUID)}>View</Button>

        </Box>
      ))}
    </Box>
  );
};
