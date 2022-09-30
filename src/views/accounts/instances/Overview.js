import React from 'react';
import {
  lighten,
  Box,
  Grid,
  Typography,
  useTheme,
  Button,
  Stack,
  Chip,
  Autocomplete,
  TextField,
} from '@mui/material';
import { AOverviewCards, OverviewTabs } from 'components/accounts';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Group, Language } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import ZTimelineItem from 'components/accounts/dashboard/ui/ZTimelineItem';
import { TimelineDot } from '@mui/lab';
import dayjs from 'dayjs';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SaveIcon from '@mui/icons-material/Save';

export const Overview = ({
  instance,
  userInfo,
  teams,
  users,
  locales,
  models,
  audits,
  clearCache,
  usage,
}) => {
  const theme = useTheme();
  const teamsLength = teams.length || '0';
  const localesLength = locales.length || '0';
  const modelsLength = models.length || '0';
  const usersLength = users.length || '0';

  const handleClearCache = () => {
    clearCache();
  };

  const { TotalGBs, TotalRequests } = usage?.MediaConsumption || {};
  const totalUsers = users?.length || [];
  console.log(audits, '::::');

  const newArr = [
    {
      title: 'Users',
      logo: (
        <Stack
          sx={{
            bgcolor: lighten(theme.palette.primary.light, 0.9),
            borderRadius: '50px',
            p: 1,
          }}
        >
          <Group color="primary" />
        </Stack>
      ),
      mainData: totalUsers,
      footerData: 1,
      footerTitle: 'User left in plan',
      chipColor: 'warning',
      chip: (
        <Chip
          label={'1'}
          variant="contained"
          sx={{
            bgcolor: lighten(theme.palette.warning.main, 0.6),
            color: theme.palette.warning.main,
          }}
        />
      ),
    },
    {
      title: 'Bandwidth',
      logo: (
        <Stack
          sx={{
            bgcolor: lighten(theme.palette.info.main, 0.9),
            borderRadius: '50px',
            p: 1,
          }}
        >
          <Language color="info" />
        </Stack>
      ),
      mainData: `${TotalGBs?.toFixed(2) || '-'} GB`,
      footerData: '2.5 GB',
      footerTitle: 'Exceeded from plan',
      chipColor: 'error',
      chip: (
        <Chip
          label={'2.5 GB'}
          variant="contained"
          sx={{
            bgcolor: lighten(theme.palette.error.main, 0.6),
            color: theme.palette.error.main,
          }}
        />
      ),
    },
    {
      title: 'API Requests',
      logo: (
        <Stack
          color={'purple'}
          sx={{
            bgcolor: lighten(purple[500], 0.9),
            borderRadius: '50px',
            p: 1,
          }}
        >
          <Language color="inherit" />
        </Stack>
      ),
      mainData: TotalRequests || '-',
      footerData: '10K',
      footerTitle: 'Request left in plan',
      chipColor: 'success',
      chip: (
        <Chip
          label={'10K'}
          variant="contained"
          sx={{
            bgcolor: lighten(theme.palette.success.main, 0.5),
            color: theme.palette.success.main,
          }}
        />
      ),
    },
  ];

  const newAudits = audits || [];

  const todayDatas = audits.filter((audit) => {
    return (
      dayjs().format('YYYY-MM-DD') ===
      dayjs(audit.updatedAt).format('YYYY-MM-DD')
    );
  });
  const yesterdayDatas = audits.filter((audit) => {
    return (
      dayjs().add(-2, 'day').format('YYYY-MM-DD') ===
      dayjs(audit.updatedAt).format('YYYY-MM-DD')
    );
  });
  const tabProps = {
    instance,
    userInfo,
    teams,
    users,
    locales,
    models,
    audits,
    handleClearCache,
  };
  const resourceType = [
    { label: 'All', value: '' },
    { label: 'Code', value: 'code' },
    { label: 'Content', value: 'content' },
    { label: 'Schema', value: 'schema' },
    { label: 'Settings', value: 'settings' },
  ];
  return (
    <Box sx={{ background: 'aqua', width: '100%' }}>
      <Stack p={5} sx={{ background: theme.palette.zesty.zestyOrange }}>
        <Stack pb={4} direction={'row'} justifyContent={'space-between'}>
          <Stack>
            <Typography color={'white'} variant="h4">
              Overview
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Button
              onClick={() => {}}
              variant="contained"
              size="small"
              color="inherit"
              sx={{ background: 'white' }}
            >
              <CreditCardIcon color="inherit" sx={{ color: 'GrayText' }} />
              <Typography ml={0.5}>Review Billing</Typography>
            </Button>
          </Stack>
        </Stack>

        <Grid container spacing={4}>
          {newArr.map((e) => {
            const { title, logo, mainData, footerTitle, chip } = e;
            const cardprops = {
              title,
              logo,
              mainData,
              footerTitle,
              chip,
            };
            return (
              <Grid item xs={4}>
                <AOverviewCards {...cardprops} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      <Grid container position={'relative'} sx={{ background: 'white' }}>
        <Grid item xs={9}>
          <Stack>
            <Autocomplete
              disablePortal
              id="resourceType"
              options={resourceType}
              size="small"
              sx={{ width: 150 }}
              defaultValue={resourceType[0]}
              getOptionLabel={(option) => option.label}
              onChange={(e) => console.log(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
          {todayDatas.length !== 0 && (
            <TimelineContainer header="Today" data={todayDatas} />
          )}

          {yesterdayDatas.length !== 0 && (
            <TimelineContainer header="Yesterday" data={yesterdayDatas} />
          )}

          <TimelineContainer header="Yesterday" data={newAudits} />
        </Grid>
        <Grid item xs={3}>
          <OverviewTabs {...tabProps} />
        </Grid>
      </Grid>
    </Box>
  );
};

const IconSwitch = ({ message = '', icons = [] }) => {
  const res = icons.find((e) => message.toLowerCase().includes(e.name));
  return res;
};
const TimelineContainer = ({ header = '', data = [] }) => {
  const theme = useTheme();
  const icons = [
    {
      name: 'deleted',
      icon: (
        <TimelineDot
          sx={{
            bgcolor: lighten(theme.palette.error.main, 0.8),
            p: 1,
          }}
        >
          <Stack sx={{}}>
            <DeleteIcon color="error" />
          </Stack>
        </TimelineDot>
      ),
    },
    {
      name: 'unpublished',
      icon: (
        <TimelineDot
          sx={{
            bgcolor: lighten(theme.palette.warning.main, 0.8),
            p: 1,
          }}
        >
          <Stack sx={{}}>
            <VisibilityOffIcon color="warning" />
          </Stack>
        </TimelineDot>
      ),
    },
    {
      name: 'published',
      icon: (
        <TimelineDot
          sx={{
            bgcolor: lighten(theme.palette.success.main, 0.8),
            p: 1,
          }}
        >
          <Stack sx={{}}>
            <VisibilityIcon color="success" />
          </Stack>
        </TimelineDot>
      ),
    },
    {
      name: 'scheduled',
      icon: (
        <TimelineDot
          sx={{
            bgcolor: lighten(theme.palette.grey[600], 0.8),
            p: 1,
          }}
        >
          <Stack sx={{ color: theme.palette.grey[600] }}>
            <AccessTimeIcon color="inherit" />
          </Stack>
        </TimelineDot>
      ),
    },
    {
      name: 'added',
      icon: (
        <TimelineDot
          sx={{
            bgcolor: lighten(theme.palette.primary.main, 0.8),
            p: 1,
          }}
        >
          <Stack sx={{ color: theme.palette.primary.main }}>
            <EditIcon color="inherit" />
          </Stack>
        </TimelineDot>
      ),
    },
    {
      name: 'created',
      icon: (
        <TimelineDot
          sx={{
            bgcolor: lighten(theme.palette.primary.main, 0.8),
            p: 1,
          }}
        >
          <Stack sx={{ color: theme.palette.primary.main }}>
            <EditIcon color="inherit" />
          </Stack>
        </TimelineDot>
      ),
    },
    {
      name: 'modified',
      icon: (
        <TimelineDot
          sx={{
            p: 1,
            bgcolor: lighten(theme.palette.info.main, 0.8),
          }}
        >
          <Stack sx={{ color: theme.palette.info.main }}>
            <SaveIcon color="inherit" />
          </Stack>
        </TimelineDot>
      ),
    },
  ];
  return (
    <Stack>
      <Typography variant="h5">{header}</Typography>
      {data?.map((audit) => {
        const title = `${dayjs().format('h-mm A')}`;
        const user = `${audit?.firstName} ${audit?.lastName}`;
        const message = audit?.meta?.message;
        return (
          <ZTimelineItem
            sx={{
              '::before': {
                content: 'none',
              },
            }}
            icon={IconSwitch({ message, icons })?.icon}
            title={title}
            isLoading={false}
          >
            <Stack pb={4}>
              <Typography variant="body1">{message}</Typography>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems="center"
                textAlign={'center'}
              >
                <Typography variant="caption">in Articles by</Typography>
                <Typography variant="caption" color="primary">
                  {user}
                </Typography>
              </Stack>
            </Stack>
          </ZTimelineItem>
        );
      })}
    </Stack>
  );
};
