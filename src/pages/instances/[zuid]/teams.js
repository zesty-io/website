import React from 'react';
import { Container } from '@mui/material';
import AppBar from 'components/console/AppBar';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import { Teams } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';

export default function TeamsPage() {
  const [search, setsearch] = React.useState('');
  const [teams, setteams] = React.useState([]);
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  const router = useRouter();
  const { zuid } = router.query;

  const handleGetAllTeamsSuccess = (res) => {
    setteams(res.data);
  };
  const handleGetAllTeamsError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };
  const handleCreateTeamSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleCreateTeamError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };

  const handleDeleteTeamSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleDeleteTeamError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };
  const handleUpdateTeamSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleUpdateTeamError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };
  const getAllTeams = async () => {
    const res = await ZestyAPI.getAllTeams();
    !res.error && handleGetAllTeamsSuccess(res);
    res.error && handleGetAllTeamsError(res);
  };

  const createTeam = async (data) => {
    const payload = {
      Name: data?.name,
      Description: data?.description,
    };
    const res = await ZestyAPI.createTeam(payload);
    !res.error && handleCreateTeamSuccess(res);
    res.error && handleCreateTeamError(res);
  };
  const deleteTeam = async (id) => {
    const res = await ZestyAPI.deleteTeam(id);
    !res.error && handleDeleteTeamSuccess(res);
    res.error && handleDeleteTeamError(res);
  };

  const updateTeam = async (data) => {
    const payload = {
      name: data.name,
      description: data.description,
    };
    const res = await ZestyAPI.updateTeam(payload, data.ZUID);
    !res.error && handleUpdateTeamSuccess(res);
    res.error && handleUpdateTeamError(res);
  };

  React.useEffect(() => {
    getAllTeams();
  }, []);

  const data = teams?.filter((e) => {
    if (search) {
      return (
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.ZUID.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return teams;
    }
  });

  console.log(zuid, 'instance:');
  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            <Teams
              teams={data}
              getAllTeams={getAllTeams}
              createTeam={createTeam}
              setsearch={setsearch}
              deleteTeam={deleteTeam}
              updateTeam={updateTeam}
            />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
