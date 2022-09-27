import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { ErrorMsg } from 'components/accounts';
import { getCookie } from 'cookies-next';
import React from 'react';
import { useZestyStore } from 'store';
import projectDetails from '../../../../../public/assets/images/join/project-details.png';
import ErrorIcon from '@mui/icons-material/Error';
import Checkbox from '@mui/material/Checkbox';
import LaunchIcon from '@mui/icons-material/Launch';
import { resourceStart } from '../Data/Resources';
import { isProd } from 'utils';
import Image from 'next/image';

// const repo = 'https://github.com/allenpigar/blog_template_acme';
const baseUrl = `https://installer-m3rbwjxm5q-uc.a.run.app`;

export const ProjectDetails = ({
  repository,
  title,
  description,
  handleNext,
  setCurrentStep,
}) => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [loading, setloading] = React.useState(false);
  const [name, setname] = React.useState('');
  const [ecoZUID, setecoZUID] = React.useState('');
  const [github_key, setgithub_key] = React.useState('');
  const APP_SID = !isProd ? getCookie('DEV_APP_SID') : getCookie('APP_SID');

  const handleSuccessCreate = async (res) => {
    const action = async () => {
      await handleInstall({
        token: APP_SID,
        instance_zuid: res.data.ZUID,
        repository,
        randomHashID: res.data.randomHashID,
      });
    };
    action();
    // SuccessMsg({ title: 'Instance Created', action });
  };

  const opentTabs = ({ instance_zuid, randomHashID }) => {
    const webengineUrl = `https://${randomHashID}-dev.webengine.zesty.io`;
    const managerURl = `https://${instance_zuid}.manager.zesty.io`;
    window.open(managerURl, '_blank');
    window.open(webengineUrl, '_blank');
  };
  const handleErrCreate = (res) => {
    setloading(false);
    ErrorMsg({ title: res.error, text: 'Try again later' });
  };

  const handleCreateInstance = async (e) => {
    setloading(true);
    e.preventDefault();

    const res = await ZestyAPI.createInstance(name, ecoZUID);
    !res.error && handleSuccessCreate(res);
    res.error && handleErrCreate(res);
  };

  const handleInstall = async ({
    token,
    instance_zuid,
    randomHashID,
    repository,
  }) => {
    const url = `${baseUrl}/install`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
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
        .then(async (response) => {
          // SuccessMsg({
          //   title: 'Install Ok',

          //   action: () => opentTabs({ instance_zuid, randomHashID }),
          // });

          opentTabs({ instance_zuid, randomHashID });
          handleNext();
          setCurrentStep();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
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

    setloading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
      <Box sx={{}}>
        <Image
          src={projectDetails.src}
          alt="Picture of the author"
          width={500}
          height={500}
          layout="fill"
        />
      </Box>
      <Box
        px={10}
        sx={{
          position: 'absolute',
          top: '40vh',
          background: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <Box pr={40} sx={{ flex: 1 }}>
          <Box pb={4} pt={4}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <form action="submit" onSubmit={handleCreateInstance}>
            <Box sx={{}}>
              <Box pb={2}>
                <Box display="flex" gap={1} alignItems={'center'}>
                  <Typography variant="h6">Project Name</Typography>
                  <ErrorIcon fontSize="small" color="disabled" />
                </Box>

                <TextField
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(e) => setname(e.target.value)}
                />
              </Box>
              <Box pb={2}>
                <Box display="flex" gap={1} alignItems={'center'}>
                  <Typography variant="h6">Project Description</Typography>
                  <ErrorIcon fontSize="small" color="disabled" />
                </Box>

                <TextField
                  fullWidth
                  type="text"
                  name="name"
                  id="name"
                  // value={name}
                  // onChange={(e) => setname(e.target.value)}
                />
              </Box>
              <Box pb={6} display="flex" gap={1} alignItems={'center'}>
                <Checkbox color="secondary" />
                <Typography variant="h6">Include template content</Typography>
              </Box>
              {/* <TextField
              label="Ecosystem"
              type="text"
              name="Eco ZUID"
              id="Eco ZUID"
              value={ecoZUID}
              onChange={(e) => setecoZUID(e.target.value)}
            /> */}
              <Button
                color="secondary"
                variant="contained"
                size="large"
                type="submit"
                disabled={!name}
              >
                Continue
              </Button>
            </Box>
          </form>
        </Box>
        <Box width={'20rem'}>
          <Typography variant="h5" pb={2} pt={6}>
            Resources
          </Typography>
          {resourceStart.map((e) => {
            return (
              <Box display="flex" gap={1} alignItems={'center'}>
                <Typography color="secondary" variant="h6">
                  {e.label}
                </Typography>
                <LaunchIcon fontSize="medium" color="secondary" href={e.url} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifyItems: 'center',
        height: '100vh',
        textAlign: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        gap: '10px',
      }}
    >
      <CircularProgress color="secondary" size={60} />
      <Typography variant="h5" color={'secondary'}>
        Please wait
      </Typography>
    </Box>
  );
};
