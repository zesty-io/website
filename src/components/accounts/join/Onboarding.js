import * as React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { LoadingButton } from '@mui/lab';

import { StickyTable } from 'components/accounts';

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
}) => {
  const handleClick = (url) => {
    window.open(url, '_blank');
    window.location.reload();
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
  return (
    <>
      <Container>
        <Box paddingY={3}>
          {loading ? (
            <Stack my={1}>
              <Typography variant="h5" color="primary">
                Your instance is being created.{' '}
              </Typography>
              <Typography variant="h6" color={'primary'}>
                This process may take up to 60 seconds.
              </Typography>
            </Stack>
          ) : (
            <Stack my={1}>
              <Typography variant="h4" color="primary">
                Instance successfully created
              </Typography>
            </Stack>
          )}
          <LoadingButton
            loading={loading}
            variant="contained"
            color={'primary'}
            onClick={() => handleClick(instanceUrl)}
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

  const linksDetails = [
    {
      key: instanceUrl && 'Manager Link',
      value: <Link href={instanceUrl}>{instanceUrl}</Link>,
    },
    {
      key: zohoLeadLink && 'ZOHO Lead',
      value: <Link href={zohoLeadLink}>Zoho Lead Link</Link>,
    },
  ];

  return (
    <Stack sx={{ width: '50vw' }}>
      <Typography variant="h4" color="secondary">
        New user Summary
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
        <StickyTable
          perPage={100}
          pagination={false}
          rows={linksDetails}
          columns={COLUMNS_VIEW_EXTRA}
        />
      </Stack>
    </Stack>
  );
};
