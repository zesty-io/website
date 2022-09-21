// step 1 user select template
// step 2 user names their template
// step 3 zesty generates new account with a name and selects blank plate(blueprint)
// step 4 once instance is completed generated , post instance zuid ,github url ,token
// step 5 after response complete , open new tab manager url and web engine url

import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useZestyStore } from 'store';
import { getCookie } from 'cookies-next';
import { ErrorMsg, SuccessMsg } from 'components/accounts';

const url = 'https://installer-m3rbwjxm5q-uc.a.run.app/install';
const urlDl = 'https://installer-m3rbwjxm5q-uc.a.run.app/download';
const instance = '8-ae9e8f9b98-140ttp';
const repo = 'https://github.com/allenpigar/blog_template_acme';

const LaunchPage = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [name, setname] = React.useState('');
  const [ecoZUID, setecoZUID] = React.useState('');
  const [instance_zuid, setinstance_zuid] = React.useState('');
  const [token, settoken] = React.useState('');
  const [repository, setrepository] = React.useState('');
  const [github_key, setgithub_key] = React.useState('');
  const APP_SID = getCookie('APP_SID');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const handleSuccessCreate = (res) => {
    SuccessMsg({ title: 'Instance Created' });
    setinstance_zuid(res.data.ZUID);
    settoken(APP_SID);
    console.log(res);
  };

  const handleErrCreate = (res) => {
    console.log(res);
    ErrorMsg({ title: res.error });
  };

  const handleCreateInstance = async (e) => {
    e.preventDefault();
    const res = await ZestyAPI.createInstance(name, ecoZUID);
    !res.error && handleSuccessCreate(res);
    res.error && handleErrCreate(res);
  };

  const handleInstall = async (e) => {
    e.preventDefault();

    const body = {
      repository,
      github_key, // optional
      instance_zuid,
      token,
    };

    try {
      await axios
        .post(url, body, {
          headers,
        })
        .then((response) => {
          SuccessMsg({ title: 'Install Ok' });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          ErrorMsg({ title: error.message });
        });
    } catch (error) {
      ErrorMsg({ title: error.messagej });
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();

    const body = {
      instance_zuid,
      token,
    };

    try {
      await axios
        .post(url, body, {
          headers,
        })
        .then((response) => {
          SuccessMsg({ title: 'Download Ok' });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          ErrorMsg({ title: error.message });
        });
    } catch (error) {
      ErrorMsg({ title: error.message });
    }
  };

  return (
    <Box>
      <Box>
        <form action="submit" onSubmit={handleCreateInstance}>
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
        </form>
      </Box>
      <Box paddingX={10} paddingY={20}>
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

export default LaunchPage;

export async function getServerSideProps({ res }) {
  // does not display with npm run dev
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );
  let data = {
    production:
      process.env.PRODUCTION == 'true' || process.env.PRODUCTION === true
        ? true
        : false,
  };

  // Pass data to the page via props
  return { props: data };
}
