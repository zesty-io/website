import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Teams } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import * as helpers from 'utils';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

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
    ErrorMsg({ text: res.error });
  };
  const handleGetAllInstancesTeamsSuccess = (res) => {
    setteams(res.data);
  };
  const handleGetAllInstancesTeamsError = (err) => {
    ErrorMsg({ text: err.error });
  };
  const handleAddTeamToInstanceSuccess = () => {
    SuccessMsg({ title: 'Team Succesfully Added' });
  };
  const handleAddTeamToInstanceError = (err) => {
    ErrorMsg({ text: err.error });
  };

  const handleDeleteTeamToInstanceSuccess = () => {
    SuccessMsg({ title: 'Team Successfully Deleted' });
  };
  const handleDeleteTeamToInstanceError = (err) => {
    ErrorMsg({ text: err.error });
  };

  const handleCreateTeamInviteSuccess = () => {
    SuccessMsg({ title: 'Success' });
  };
  const handleCreateTeamInviteError = (err) => {
    ErrorMsg({ text: err.error });
  };
  const handleGetAllTeamsSuccess = (res) => {
    setallTeams(res.data);
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
    instanceUserWithRoles,
  };

  const getPageData = async () => {
    setloading(true);
    await Promise.all([
      getAllInstancesTeams(),
      getInstanceUserWithRoles(),
      getInstanceRoles(),
      getAllTeams(),
    ]);
    setloading(false);
  };

  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return (
    <InstanceContainer>
      <Teams {...teamsProps} />
    </InstanceContainer>
  );
}
