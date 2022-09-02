import { Box, Grid, Typography } from '@mui/material';
import TeamsContainer from 'components/accounts/teams/TeamsContainer';
import GroupsIcon from '@mui/icons-material/Groups';
import React, { useEffect, useState } from 'react';
import AddTeam from 'components/accounts/teams/AddTeam';
import ManageTeam from 'components/accounts/teams/ManageTeam';
import { useZestyStore } from 'store';

const Teams = () => {
  document.title = 'Accounts: Teams';
  const { ZestyAPI } = useZestyStore((state) => state);
  const [teams, setTeams] = useState([]);

  const getAllTeams = async () => {
    const response = await ZestyAPI.getAllTeams();
    setTeams(response?.data);
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <TeamsContainer>
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
          {teams?.map((team) => (
            <Grid key={team.ZUID} item xs={12} md={6} lg={4}>
              <ManageTeam
                id={team.ZUID}
                name={team.name}
                description={team.description}
                owner={team.createdByUserZUID}
                getAllTeams={getAllTeams}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </TeamsContainer>
  );
};

export default Teams;
