import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Teams } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import * as helpers from 'utils';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function TeamsPage() {
  const [search, setsearch] = React.useState('');
  const [teams, setteams] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);

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
  const handleCreateTeamInviteSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleCreateTeamInviteError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };

  const handleGetInstanceUserWithRolesSucc = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleGetInstanceUserWithRolesErr = (res) => {
    ErrorMsg({ text: res.error });
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

  const createTeamInvite = async (data) => {
    const res = await ZestyAPI.createTeamInvite(data);
    !res.error && handleCreateTeamInviteSuccess(res);
    res.error && handleCreateTeamInviteError(res);
  };

  const getInstanceUserWithRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetInstanceUserWithRolesSucc(res);
    res.error && handleGetInstanceUserWithRolesErr(res);
  };
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

  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );
  const teamsProps = {
    teams: data,
    getAllTeams,
    createTeam,
    setsearch,
    deleteTeam,
    updateTeam,
    createTeamInvite,
    isInstanceOwner,
  };

  React.useEffect(() => {
    getAllTeams();
    getInstanceUserWithRoles();
  }, []);
  return (
    <InstanceContainer>
      <Teams {...teamsProps} />
    </InstanceContainer>
  );
}
