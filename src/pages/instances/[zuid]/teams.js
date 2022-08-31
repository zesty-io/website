import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Teams } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import * as helpers from 'utils';

export default function TeamsPage() {
  const [search, setsearch] = React.useState('');
  const [teams, setteams] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [instanceRoles, setInstanceRoles] = React.useState([]);

  const router = useRouter();
  const { zuid } = router.query;

  const handleGetInstanceRolesSuccess = (res) => {
    console.log(res, 'succ upp');
    const data = res.data.map((e) => {
      return { ...e, value: e.name, label: e.name };
    });
    setInstanceRoles(data);
  };
  const handleGetInstanceRolesErr = (res) => {
    console.log(res);
    ErrorMsg({ text: res.error });
  };
  const handleGetAllInstancesTeamsSuccess = (res) => {
    setteams(res.data);
  };
  const handleGetAllInstancesTeamsError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };
  const handleAddTeamToInstanceSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Team Succesfully Added' });
  };
  const handleAddTeamToInstanceError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };

  const handleDeleteTeamToInstanceSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleDeleteTeamToInstanceError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };
  const handleUpdateTeamSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleUpdateTeamError = (res) => {
    console.log(res);
    ErrorMsg({ text: res.error });
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

  const getAllInstancesTeams = async () => {
    const res = await ZestyAPI.getAllInstancesTeams(zuid);
    !res.error && handleGetAllInstancesTeamsSuccess(res);
    res.error && handleGetAllInstancesTeamsError(res);
  };

  const getInstanceRoles = async () => {
    const res = await ZestyAPI.getInstanceRoles(zuid);
    !res.error && handleGetInstanceRolesSuccess(res);
    res.error && handleGetInstanceRolesErr(res);
  };
  const addTeamToInstance = async (data) => {
    const { teamZUID, roleZUID } = data;
    const res = await ZestyAPI.addTeamToInstance(zuid, teamZUID, roleZUID);
    !res.error && handleAddTeamToInstanceSuccess(res);
    res.error && handleAddTeamToInstanceError(res);
  };
  const deleteTeamToInstance = async (teamZUID) => {
    const res = await ZestyAPI.removeTeamFromInstance(zuid, teamZUID);
    !res.error && handleDeleteTeamToInstanceSuccess(res);
    res.error && handleDeleteTeamToInstanceError(res);
    await getAllInstancesTeams();
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
    getAllInstancesTeams,
    setsearch,
    deleteTeamToInstance,
    updateTeam,
    createTeamInvite,
    isInstanceOwner,
    addTeamToInstance,
    instanceRoles,
  };

  React.useEffect(() => {
    if (router.isReady) {
      getAllInstancesTeams();
      getInstanceUserWithRoles();
      getInstanceRoles();
    }
  }, [router.isReady]);
  return (
    <>
      <Teams {...teamsProps} />
    </>
  );
}

TeamsPage.data = {
  container: 'InstanceContainer',
};
