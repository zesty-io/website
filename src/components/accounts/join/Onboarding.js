import * as React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { LoadingButton } from '@mui/lab';

import Confetti from 'react-confetti';

import { StickyTable } from 'components/accounts';
import slackNotify from 'components/marketing/Start/slackNotify';
import { useSwiperSlide } from 'swiper/react';

export const Onboarding = ({
  instanceUrl = '',
  loading = false,
  userInfo,
  role,
  projectType,
  projectName,
  instance_zuid,
  goal,
  userType,
  preferred_framework,
  preferred_component_system,
  zohoLeadLink,
  managerUrl,
}) => {
  const swiperSlide = useSwiperSlide();
  const handleClick = async (url) => {
    await window.open(url, '_blank');
    await window.location.reload();
  };

  const postUserSummary = async () => {
    const msg = `:rotating_light: *New User Summary* :rotating_light:
----- Basic Details ------
Name: *${userInfo?.firstName}* *${userInfo?.lastName}*
Email: ${userInfo?.email}
Persona: *${role || '-'}*
Type: *${userType || '-'}*
Project Name: *${projectName || '-'}*
Project ZUID: *${instance_zuid || '-'}*
---- Extra Details ----
Project Goal: *${goal || '-'}*
Project Type: *${projectType || '-'}* 
Favorite Framework: *${preferred_framework || '-'}* 
Favorite Component Sytem: *${preferred_component_system || '-'}*
---links---
Manager Link: ${managerUrl}
Zoho Lead: ${zohoLeadLink}`;

    await slackNotify(msg);
  };

  const newUserSummaryProps = {
    instanceUrl,
    loading,
    userInfo,
    role,
    projectType,
    projectName,
    instance_zuid,
    goal,
    userType,
    preferred_framework,
    preferred_component_system,
    zohoLeadLink,
  };
  React.useEffect(async () => {
    if (swiperSlide.isActive && zohoLeadLink) {
      await postUserSummary();
    }
  }, [swiperSlide.isActive, zohoLeadLink]);

  return (
    <>
      {!loading && <Confetti numberOfPieces={350} width={1920} height={1080} />}
      <Container>
        <Box paddingY={2}>
          {loading ? (
            <Stack my={1}>
              <Typography variant="h6" color="primary">
                Your demo instance is being created.{' '}
              </Typography>
              <Typography variant="p" color={'primary'}>
                This process may take up to 60 seconds.
              </Typography>
            </Stack>
          ) : null}
          <LoadingButton
            loading={loading}
            variant="contained"
            color={'primary'}
            size={'large'}
            onClick={() => handleClick(`${managerUrl}content`)}
            startIcon={<RocketLaunchIcon />}
          >
            Go to your Instance
          </LoadingButton>
        </Box>
        <Stack alignItems={'center'}>
          <NewUserSummary {...newUserSummaryProps} />
        </Stack>
      </Container>
    </>
  );
};

const NewUserSummary = ({
  instanceUrl,
  loading,
  userInfo = {},
  role,
  projectType,
  projectName,
  instance_zuid,
  goal,
  userType,
  preferred_framework,
  preferred_component_system,
  zohoLeadLink,
}) => {
  const COLUMNS_VIEW_BASIC = [
    {
      id: 'key',
      label: 'Basic Details',
    },
    {
      id: 'value',
      label: '  ',
    },
  ];

  const COLUMNS_VIEW_EXTRA = [
    {
      id: 'key',
      label: 'Extra Details',
    },
    {
      id: 'value',
      label: '  ',
    },
  ];
  const name = `${userInfo?.firstName} ${userInfo?.lastName}`;
  const basicDetails = [
    { key: userInfo?.firstName && 'Name', value: name },
    { key: userInfo?.email && 'Email', value: userInfo?.email },
    { key: role && 'Persona', value: role },
    { key: userType && 'Type', value: userType },
    { key: projectName && 'Project name', value: projectName },
    { key: instance_zuid && 'Project ZUID', value: instance_zuid },
  ];

  const extraDetails = [
    { key: goal && 'Project Goal', value: goal },
    { key: projectName && 'Project Type', value: projectType },
    {
      key: preferred_framework && 'Favorite Framework',
      value: preferred_framework,
    },
    {
      key: preferred_component_system && 'Favorite Component System',
      value: preferred_component_system,
    },
  ];

  return (
    <Stack sx={{ width: '70vw' }}>
      <Typography variant="h5" color="gray" fontWeight={'500'}>
        Your Summary
      </Typography>
      <Stack direction={'row'} gap={2}>
        <StickyTable
          perPage={100}
          pagination={false}
          rows={basicDetails}
          columns={COLUMNS_VIEW_BASIC}
        />
        <StickyTable
          perPage={100}
          pagination={false}
          rows={extraDetails}
          columns={COLUMNS_VIEW_EXTRA}
        />
      </Stack>
    </Stack>
  );
};
