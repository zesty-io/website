import React from 'react';

import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { Box, Button, TextField } from '@mui/material';
import { HorizontalRule  } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
export const InstancesDashboard = () => {
  const router = useRouter();
  const { ZestyAPI, workingInstance } = useZestyStore((state) => state);

  const [instances, setInstances] = React.useState([]);
  const [search, setSearch] = React.useState('');

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
  const handleSearch = (search) => {
    setSearch(search.toLowerCase())
  }

  return (
    <Box>
      <HorizontalRule />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField onChange={(event) => handleSearch(event.target.value)} label="Search" variant="standard"  />
      </Box>
      {instances.filter(inst => inst?.name?.toLowerCase().includes(search)).map((instance) => (
        <Box key={`${instance.ZUID}-instancelist`} >
          {instance.ZUID} {instance.name}
          <Button onClick={() => handleChange(instance.ZUID)}>View</Button>

        </Box>
      ))}
    </Box>
  );
};
