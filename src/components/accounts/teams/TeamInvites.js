import { LoadingButton } from '@mui/lab';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import { notistackMessage } from 'utils';

const TeamInvites = ({ teamZUID, teamInviteZUID, getAllTeamsAndInvites }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { ZestyAPI } = useZestyStore((state) => state);
  const [team, setTeam] = useState({});

  const getTeam = async () => {
    const teamResponse = await ZestyAPI.getTeam(teamZUID);
    setTeam(teamResponse?.data);
  };

  const respondToTeamInvite = async (action) => {
    const teamInviteResponse = await ZestyAPI.respondToTeamInvite(
      teamInviteZUID,
      action,
    );

    notistackMessage(
      enqueueSnackbar,
      {
        message:
          action === 'accept' ? 'Invite accepted' : 'Declined invitation',
        callback: getAllTeamsAndInvites,
      },
      teamInviteResponse,
    );
  };

  useEffect(() => {
    getTeam();
  }, [teamZUID]);

  return (
    <Paper
      elevation={4}
      sx={(theme) => ({
        height: '100%',
        bgcolor: theme.palette.zesty.zestyTeal,
        color: 'common.white',
      })}
    >
      <Stack height="100%">
        <Typography variant="h6" px={3} py={1}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h6">
              You have been invited to a Team!
            </Typography>
          </Stack>
        </Typography>
        <Divider sx={{ bgcolor: 'white' }} />

        <Stack
          p={3}
          sx={{ overflowY: 'auto', overflowX: 'hidden', height: 574 }}
        >
          <Stack>
            <Typography variant="h6">{team.name}</Typography>
            <Typography>{team.description}</Typography>
          </Stack>
        </Stack>
        <Stack mt="auto">
          <Divider sx={{ bgcolor: 'white' }} />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            spacing={1}
            px={3}
            py={1}
          >
            <LoadingButton
              onClick={() => respondToTeamInvite('accept')}
              color="info"
              variant="contained"
            >
              Accept Invite
            </LoadingButton>
            <LoadingButton
              onClick={() => respondToTeamInvite('decline')}
              color="error"
              variant="contained"
            >
              Decline
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default TeamInvites;
