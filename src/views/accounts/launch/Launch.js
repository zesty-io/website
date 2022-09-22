import React from 'react';
import { Box, Button, TextField } from '@mui/material';

export const Launch = ({
  handleCreateInstance,
  name,
  setname,
  ecoZUID,
  setecoZUID,
  token,
  settoken,
  instance_zuid,
  setinstance_zuid,
  github_key,
  setgithub_key,
  repository,
  setrepository,
  handleDownload,
  handleInstall,
}) => {
  return (
    <Box>
      <Box>
        <form action="submit" onSubmit={handleCreateInstance}>
          <Box
            paddingX={50}
            sx={{ display: 'flex', flexDirection: 'column' }}
            gap={4}
          >
            <TextField
              label="Instance Name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              label="Eco ZUID Optional"
              type="text"
              name="Eco ZUID"
              id="Eco ZUID"
              value={ecoZUID}
              onChange={(e) => setecoZUID(e.target.value)}
            />
            <Button color="primary" variant="contained" type="submit">
              Create instance
            </Button>
          </Box>
        </form>
      </Box>
      <Box paddingX={50} paddingY={20}>
        <form action="submit" onSubmit={handleInstall}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} gap={4}>
            <TextField
              label="Instance ZUID"
              type="text"
              name="instance_zuid"
              id="instance_zuid"
              value={instance_zuid}
              onChange={(e) => setinstance_zuid(e.target.value)}
            />
            <TextField
              type="text"
              name="token"
              label="APP SID USER TOKEN"
              id="token"
              value={token}
              onChange={(e) => settoken(e.target.value)}
            />
            <TextField
              label="Repository"
              type="text"
              name="repository"
              id="repository"
              value={repository}
              onChange={(e) => setrepository(e.target.value)}
            />
            <TextField
              label="Github Key"
              type="text"
              name="github_key"
              id="github_key"
              value={github_key}
              onChange={(e) => setgithub_key(e.target.value)}
            />
            <Button color="primary" variant="contained" type="submit">
              Install
            </Button>
          </Box>
        </form>
      </Box>

      <Box paddingX={40}>
        <form action="submit" onSubmit={handleDownload}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} gap={4}>
            <TextField
              label="Instance ZUID"
              type="text"
              name="instance_zuid"
              id="instance_zuid"
              value={instance_zuid}
              onChange={(e) => setinstance_zuid(e.target.value)}
            />
            <TextField
              type="text"
              name="token"
              label="APP SID USER TOKEN"
              id="token"
              value={token}
              onChange={(e) => settoken(e.target.value)}
            />
            <Button color="primary" variant="outlined" type="submit">
              Download
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
