import React from 'react';

import { useRouter } from 'next/router'
import { useZestyStore } from 'store';
import { Box } from '@mui/material'

export const InstancesDashboard = () => {
  const router = useRouter();
  const { ZestyAPI, workingInstance } = useZestyStore((state) => state);

  const [instances, setInstances] = React.useState([]);

  React.useEffect(() => {
    async function getInstances(){
        let instances = await ZestyAPI.getInstances();
        console.log(instances)
        setInstances(instances.data);
    }
    getInstances();
  })



  const handleChange = (event, newValue) => {

    router.push(
      {
        pathname: `/instances/${newValue}/`
      }
    );
  };

  return (
  <Box>
    Instances
    {instances.map(instance => <Box>{instance.zuid}</Box>)}

  </Box>);
};
