import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { accounts, ErrorMsg, SuccessMsg } from 'components/accounts';
import { getCookie } from 'cookies-next';
import React from 'react';
import { useZestyStore } from 'store';

const baseUrl = accounts.templateUrl;
export const ProjectDetails = ({ repository }) => {
  const [domain, setdomain] = React.useState('');
  const { ZestyAPI } = useZestyStore((state) => state);
  const [name, setname] = React.useState('');
  const [ecoZUID, setecoZUID] = React.useState('');
  const [instance_zuid, setinstance_zuid] = React.useState('');
  const [token, settoken] = React.useState('');
  // const [repository, setrepository] = React.useState(repo);
  const [github_key] = React.useState('');
  const APP_SID = getCookie('APP_SID');

  const handleSuccessCreate = async (res) => {
    SuccessMsg({ title: 'Instance Created' });
    setinstance_zuid(res.data.ZUID);
    setdomain(res.data.domain);
    settoken(APP_SID);
    await handleInstall();
  };

  const opentTabs = () => {
    window.open(`https://${instance_zuid}.manager.zesty.io/`, '_blank');
    window.open(`https://${domain}`, '_blank');
  };
  const handleErrCreate = (res) => {
    ErrorMsg({ title: res.error });
  };

  const handleCreateInstance = async (e) => {
    e.preventDefault();
    const res = await ZestyAPI.createInstance(name, ecoZUID);
    !res.error && handleSuccessCreate(res);
    res.error && handleErrCreate(res);
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const handleInstall = async () => {
    const url = `${baseUrl}/install`;
    const body = {
      repository,
      github_key,
      instance_zuid,
      token,
    };

    try {
      await axios
        .post(url, body, {
          headers,
        })
        .then(async () => {
          SuccessMsg({
            title: 'Install Ok',
            action: opentTabs,
          });
        })
        .catch((error) => {
          ErrorMsg({
            title: error.message,
            text: error?.response.data?.message,
          });
        });
    } catch (error) {
      ErrorMsg({
        title: error.message,
        text: error?.response.data?.message,
      });
    }
  };

  return (
    <Box>
      <p>
        Project Details (name and ecosystem) triggers the isntance build at
        continue. Needs a loading screen while wait for response from install.
      </p>
      {JSON.stringify(repository)}lskdjflsk
      <form action="submit" onSubmit={handleCreateInstance}>
        <Box
          paddingX={50}
          sx={{ display: 'flex', flexDirection: 'column' }}
          gap={4}
        >
          <TextField
            label="Project Name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <TextField
            label="Description"
            type="text"
            name="name"
            id="name"
            //   value={name}
            //   onChange={(e) => setname(e.target.value)}
          />
          <TextField
            label="Ecosystem"
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
  );
};
