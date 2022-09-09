import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Teams } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import * as helpers from 'utils';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function TeamsPage() {
  const [teams, setteams] = React.useState([]);
  const [allTeams, setallTeams] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const [loading, setloading] = React.useState(false);

  const router = useRouter();
  const { zuid } = router.query;

  const handleGetInstanceRolesSuccess = (res) => {
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
    SuccessMsg({ title: 'Team Successfully Deleted' });
  };
  const handleDeleteTeamToInstanceError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };

  const handleCreateTeamInviteSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Success' });
  };
  const handleCreateTeamInviteError = (err) => {
    console.log(err);
    ErrorMsg({ text: err.error });
  };
  const handleGetAllTeamsSuccess = (res) => {
    console.log(res);
    setallTeams(res.data);
  };
  const handleGetAllTeamsError = (res) => {
    console.log(res);
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

  const getAllTeams = async () => {
    const res = await ZestyAPI.getAllTeams();
    !res.error && handleGetAllTeamsSuccess(res);
    res.error && handleGetAllTeamsError(res);
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
    await getPageData();
  };
  const deleteTeamToInstance = async (teamZUID) => {
    const res = await ZestyAPI.removeTeamFromInstance(zuid, teamZUID);
    !res.error && handleDeleteTeamToInstanceSuccess(res);
    res.error && handleDeleteTeamToInstanceError(res);
    await getPageData();
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

  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );

  const teamsProps = {
    teams,
    getAllInstancesTeams,
    deleteTeamToInstance,
    createTeamInvite,
    isInstanceOwner,
    addTeamToInstance,
    instanceRoles,
    loading,
    allTeams,
  };

  const getPageData = async () => {
    await setloading(true);
    await getAllInstancesTeams();
    await getInstanceUserWithRoles();
    await getInstanceRoles();
    await setloading(false);
    await getAllTeams();
  };
  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
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
