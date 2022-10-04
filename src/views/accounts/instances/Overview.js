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
import CachedIcon from '@mui/icons-material/Cached';
import { Group, Language } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { Timeline } from '@mui/lab';
import ZTimelineItem from 'components/accounts/dashboard/ui/ZTimelineItem';
import ZInstanceTimelineItemContainer from 'components/accounts/dashboard/ui/ZInstanceTimelineItemContainer';
import * as helpers from 'utils';

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
  isInstanceAuditLoading,
  instanceAudit,
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
      mainData: totalUsers || '-',
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
    <Box>
      <Stack px={5} pt={2} pb={4} bgcolor="background.level2">
        <Stack
          pb={4}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Stack>
            <Typography variant="h4">Overview</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="inherit"
              sx={(theme) => ({
                bgcolor:
                  theme.palette.mode === 'light'
                    ? 'white'
                    : theme.palette.primary.main,
                '&:hover': {
                  bgcolor: 'white',
                  color: 'black',
                },
              })}
              onClick={handleClearCache}
              startIcon={<CachedIcon color="disabled" />}
            >
              Clear Cache
            </Button>
            <Button
              onClick={() => {}}
              variant="contained"
              color="inherit"
              sx={(theme) => ({
                bgcolor:
                  theme.palette.mode === 'light'
                    ? 'white'
                    : theme.palette.primary.main,

                '&:hover': {
                  bgcolor: 'white',
                  color: 'black',
                },
              })}
              startIcon={<CreditCardIcon color="disabled" />}
            >
              Review Billing
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
              <Grid item xs={12} lg={4}>
                <AOverviewCards {...cardprops} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      <Grid container>
        <Grid px={2} item xs={12} lg={9}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            pt={2}
            pr={2}
          >
            <Typography color="text.secondary">Activity Stream</Typography>
            <Button
              size="small"
              variant="contained"
              target="_blank"
              href={`https://${instance.ZUID}.manager${
                !helpers?.isProd ? '.dev' : ''
              }.zesty.io/reports/activity-log/resources
`}
            >
              Open Activity Log
            </Button>
          </Stack>

          <Timeline sx={{ p: 0 }}>
            {isInstanceAuditLoading
              ? [...new Array(5)].map((i) => (
                  <ZTimelineItem
                    sx={{
                      '::before': {
                        content: 'none',
                      },
                      mt: 1,
                    }}
                    key={i}
                    isLoading={isInstanceAuditLoading}
                  />
                ))
              : instanceAudit?.map((audit, index) => (
                  <ZInstanceTimelineItemContainer
                    key={index}
                    audit={audit}
                    isInstanceAuditLoading={isInstanceAuditLoading}
                    showEditInstance={false}
                  />
                ))}
          </Timeline>
        </Grid>
        <Grid item xs={12} lg={3}>
          <OverviewTabs {...tabProps} />
        </Grid>
      </Grid>
    </Box>
  );
};
