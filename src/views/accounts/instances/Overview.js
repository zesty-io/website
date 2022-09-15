import React from 'react';
import { lighten, Box, Grid, Typography, useTheme } from '@mui/material';
import { OverviewTabs } from 'components/accounts';
import dayjs from 'dayjs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
const NoData = () => {
  return (
    <Box position={'relative'}>
      <Typography variant="h4" sx={{ textAlign: 'center', paddingTop: '3rem' }}>
        No Data
      </Typography>
    </Box>
  );
};

export const Overview = ({
  instance,
  userInfo,
  teams,
  users,
  locales,
  models,
  audits,
}) => {
  const tabProps = {
    instance,
    userInfo,
    teams,
    users,
    locales,
    models,
    audits,
  };

  const theme = useTheme();
  const teamsLength = teams.length || '0';
  const localesLength = locales.length || '0';
  const modelsLength = models.length || '0';
  const usersLength = users.length || '0';
  return (
    <>
      <Box paddingY={2}>
        <Typography variant="h4">{instance?.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Last Updated at:
          {dayjs(instance.updatedAt).format(' MMMM D, YYYY')}
        </Typography>
      </Box>
      <Box position={'relative'}>
        <OverviewTabs {...tabProps} />
        <Grid container>
          <Grid
            item
            sx={{
              boxShadow: 1,
              borderRadius: '5px',
              overflow: 'hidden',
            }}
            xs={4}
          >
            <Box
              paddingY={1}
              paddingX={2}
              sx={{ background: lighten(theme.palette.secondary.light, 0.9) }}
            >
              <Typography
                variant="h6"
                alignItems={'center'}
                display={'flex'}
                gap={1}
                color={'secondary'}
              >
                <AccessTimeIcon /> Your Latest Edits
              </Typography>
            </Box>
            {audits.length === 0 ? (
              <NoData />
            ) : (
              audits.slice(0, 5).map((e) => {
                return (
                  <Box paddingY={1} paddingX={2}>
                    <Typography variant="subtitle2">
                      {e.meta.message}
                    </Typography>
                  </Box>
                );
              })
            )}
          </Grid>
          <Grid item xs={2} />

          <Grid
            sx={{
              boxShadow: 1,
              borderRadius: '5px',
              overflow: 'hidden',
            }}
            item
            xs={4}
          >
            <Box
              paddingY={1}
              paddingX={2}
              sx={{ background: lighten(theme.palette.secondary.light, 0.9) }}
            >
              <Typography
                variant="h6"
                alignItems={'center'}
                display={'flex'}
                gap={1}
                color="secondary"
              >
                <BarChartIcon /> Statistics
              </Typography>
            </Box>
            <Grid container paddingY={2} paddingX={4}>
              <Grid item xs={9}>
                <Typography variant="h5">Total users</Typography>
              </Grid>

              <Grid item xs={3}>
                {usersLength}
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5">Total content models</Typography>
              </Grid>

              <Grid item xs={3}>
                {modelsLength}
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5">Total locales</Typography>
              </Grid>
              <Grid item xs={3}>
                {localesLength}
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5">Total teams</Typography>
              </Grid>

              <Grid item xs={3}>
                {teamsLength}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
