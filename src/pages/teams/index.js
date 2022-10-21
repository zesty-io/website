import { Box, Grid, Typography } from '@mui/material';
import TeamsContainer from 'components/accounts/teams/TeamsContainer';
import GroupsIcon from '@mui/icons-material/Groups';
import React, { useEffect, useState } from 'react';
import AddTeam from 'components/accounts/teams/AddTeam';
import ManageTeam from 'components/accounts/teams/ManageTeam';
import { useZestyStore } from 'store';
import TeamInvites from 'components/accounts/teams/TeamInvites';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

const Teams = () => {
  const {
    ZestyAPI,
    verifySuccess: { userZuid },
  } = useZestyStore((state) => state);
  const [teams, setTeams] = useState([]);
  const [invites, setInvites] = useState([]);

  const getAllTeams = async () => {
    const response = await ZestyAPI.getAllTeams();
    setTeams(response?.data);
  };

  const getAllTeamInvites = async () => {
    const response = await ZestyAPI.getAllTeamInvites();
    setInvites(response?.data);
  };

  useEffect(() => {
    const initializeGrid = async () => {
      await getAllTeams();
      await getAllTeamInvites();
    };

    initializeGrid();
  }, []);

  return (
    <TeamsContainer>
      <ZestyAccountsHead title={'Accounts: Teams'} />
      <Box p={3}>
        <Typography
          display="flex"
          alignItems="center"
          variant="h4"
          color="text.secondary"
          mb={2}
        >
          <GroupsIcon fontSize="1rem" sx={{ mr: 1 }} /> Manage Your Teams
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <AddTeam getAllTeams={getAllTeams} />
          </Grid>

          {invites
            ?.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            .filter(
              (invite) =>
                !invite.accepted && !invite.declined && !invite.cancelled,
            )
            .map((invite) => (
              <Grid key={invite.ZUID} item xs={12} md={6} lg={4}>
                <TeamInvites
                  teamZUID={invite.teamZUID}
                  teamInviteZUID={invite.ZUID}
                  getAllTeamsAndInvites={async () => {
                    await getAllTeams();
                    await getAllTeamInvites();
                  }}
                />
              </Grid>
            ))}

          {teams
            ?.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            .map((team) => (
              <Grid key={team.ZUID} item xs={12} md={6} lg={4}>
                <ManageTeam
                  teamZUID={team.ZUID}
                  name={team.name}
                  description={team.description}
                  owner={team.createdByUserZUID}
                  getAllTeams={getAllTeams}
                  isOwner={userZuid === team.createdByUserZUID}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </TeamsContainer>
  );
};

export default Teams;
