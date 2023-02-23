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
  Skeleton,
} from '@mui/material';
import { AOverviewCards, OverviewTabs } from 'components/accounts';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
import CachedIcon from '@mui/icons-material/Cached';
import { Group, Language } from '@mui/icons-material';
import { grey, purple } from '@mui/material/colors';
import { LoadingButton, Timeline } from '@mui/lab';
import ZTimelineItem from 'components/accounts/dashboard/ui/ZTimelineItem';
import ZInstanceTimelineItemContainer from 'components/accounts/dashboard/ui/ZInstanceTimelineItemContainer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import * as helpers from 'utils';

export const Overview = ({
  instance,
  // userInfo,
  teams,
  users,
  locales,
  models,
  audits,
  clearCache,
  usage,
  isInstanceAuditLoading,
  instanceAudit,
  instanceUserWithRoles,
  loading,
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
      title: 'CDN Requests',
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
    teams,
    users,
    locales,
    models,
    audits,
    handleClearCache,
    instanceUserWithRoles,
    loading,
  };

  return (
    <Box>
      <Stack
        px={5}
        pt={2}
        pb={4}
        sx={(theme) => ({
          bgcolor: theme.palette.mode === 'light' ? theme.palette.grey[50] : '',
        })}
      >
        <Stack
          pb={4}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Stack>
            <Typography variant="h4" data-testid="Overview">
              Overview
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            {loading ? (
              <Skeleton variant="rounded" width={150} height={'auto'} />
            ) : (
              <Button
                variant="contained"
                title="Clear Cache"
                color={theme.palette.mode === 'light' ? 'inherit' : 'primary'}
                sx={(theme) => ({
                  border:
                    theme.palette.mode === 'light' && `1px solid ${grey[200]}`,
                  bgcolor: theme.palette.mode === 'light' && 'white',
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'light' && 'white',
                    color: theme.palette.mode === 'light' && 'black',
                    boxShadow: 1,
                  },
                })}
                onClick={handleClearCache}
                startIcon={<CachedIcon color="disabled" />}
              >
                Clear Cache
              </Button>
            )}
            {loading ? (
              <Skeleton variant="rounded" width={150} height={'auto'} />
            ) : (
              <Button
                title="View All Usage"
                variant="contained"
                color={theme.palette.mode === 'light' ? 'inherit' : 'primary'}
                href={`https://${instance.ZUID}.manager${
                  helpers?.isProd ? '' : '.dev'
                }.zesty.io/reports/metrics`}
                target="_blank"
                sx={(theme) => ({
                  border:
                    theme.palette.mode === 'light' && `1px solid ${grey[200]}`,
                  bgcolor: theme.palette.mode === 'light' && 'white',
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'light' && 'white',
                    color: theme.palette.mode === 'light' && 'black',
                    boxShadow: 1,
                  },
                })}
                startIcon={<AutoGraphIcon color="disabled" />}
              >
                View All Usage
              </Button>
            )}
          </Stack>
        </Stack>

        <Grid container spacing={4}>
          {newArr.map((e, index) => {
            const { title, logo, mainData, footerTitle, chip } = e;
            const cardprops = {
              title,
              logo,
              mainData,
              footerTitle,
              chip,
              loading: usage?.status === 200 && users ? loading : true,
            };
            return (
              <Grid key={index} item xs={12} lg={4}>
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
            <LoadingButton
              loading={!instance?.ZUID}
              size="small"
              variant="contained"
              target="_blank"
              title="Open Activity Log"
              href={`https://${instance.ZUID}.manager${
                !helpers?.isProd ? '.dev' : ''
              }.zesty.io/reports/activity-log/resources
`}
            >
              Open Activity Log
            </LoadingButton>
          </Stack>

          {instanceAudit?.length === 0 ? (
            <Typography variant="h6">No Resources Found.</Typography>
          ) : (
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
          )}
        </Grid>
        <Grid item xs={12} lg={3}>
          <OverviewTabs {...tabProps} />
        </Grid>
      </Grid>
    </Box>
  );
};
