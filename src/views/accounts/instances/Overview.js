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
} from '@mui/material';
import { AOverviewCards, OverviewTabs } from 'components/accounts';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Group, Language } from '@mui/icons-material';
import { purple } from '@mui/material/colors';

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

  const handleClearCache = () => {
    clearCache();
  };

  const { TotalGBs, TotalRequests } = usage?.MediaConsumption || {};
  const totalUsers = users?.length || [];

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
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <OverviewTabs {...tabProps} />
        </Grid>
      </Grid>
    </Box>
  );
};
