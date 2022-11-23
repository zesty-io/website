import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Users } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import * as helpers from 'utils';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function UsersPage() {
  const [search, setsearch] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const [, setusers] = React.useState([]);
  const [pendingUsers, setpendingUsers] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const handleRespondToInviteSuccess = (res) => {
    setusers(res.data);
  };
  const handleGetUserSuccess = (res) => {
    setusers(res.data);
  };

  const handleGetInstancePendingUsersSuccess = (res) => {
    setpendingUsers(res.data);
  };
  const handleGetRolesSuccess = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleUpdateRoleSuccess = () => {
    SuccessMsg({ title: 'Role Successfully Updated' });
  };
  const handleUpdateRoleErr = (res) => {
    ErrorMsg({ text: res.error });
  };
  const handleDeleteRoleSuccess = () => {
    SuccessMsg({ title: 'User role successfully Deleted' });
  };
  const handleDeleteRoleErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleGetInstanceRolesSuccess = (res) => {
    const data = res.data.map((e) => {
      return { ...e, value: e.name, label: e.name };
    });
    setInstanceRoles(data);
  };
  const handleGetInstanceRolesErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleCreateInviteSuccess = () => {
    SuccessMsg({ title: 'User Successfully invited' });
  };
  const handleCreateInviteErr = (res) => {
    ErrorMsg({ text: res.error });
  };
  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    !res.error && handleGetUserSuccess(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetRolesSuccess(res);
  };

  const updateRole = async (data) => {
    const { newRoleZUID, userZUID, oldRoleZUID } = data;
    const res = await ZestyAPI.updateUserRole(
      userZUID,
      oldRoleZUID,
      newRoleZUID,
    );
    !res.error && handleUpdateRoleSuccess(res);
    res.error && handleUpdateRoleErr(res);

    await getInstanceUserRoles();
  };
  const deleteUserRole = async (data) => {
    const { userZUID, roleZUID } = data;
    const res = await ZestyAPI.deleteUserRole(userZUID, roleZUID);
    !res.error && handleDeleteRoleSuccess(res);
    res.error && handleDeleteRoleErr(res);
    await getInstanceUserRoles();
  };

  const getInstanceRoles = async () => {
    const res = await ZestyAPI.getInstanceRoles(zuid);
    !res.error && handleGetInstanceRolesSuccess(res);
    res.error && handleGetInstanceRolesErr(res);
  };

  const getInstancePendingUsers = async () => {
    const res = await ZestyAPI.getInstancePendingUsers(zuid);
    !res.error && handleGetInstancePendingUsersSuccess(res);
  };

  const respondToInvite = async (data, action) => {
    const res = await ZestyAPI.respondToInvite(data.inviteZUID, action);
    !res.error && handleRespondToInviteSuccess(res);
    await getPageData();
  };
  const createInvite = async (data) => {
    const { inviteeName, inviteeEmail, entityZUID, accessLevel } = data;
    const res = await ZestyAPI.createInvite(
      inviteeName,
      inviteeEmail,
      entityZUID,
      accessLevel,
    );
    !res.error && handleCreateInviteSuccess(res);
    res.error && handleCreateInviteErr(res);
    await getPageData();
  };
  const getPageData = async () => {
    setloading(true);

    await Promise.all([
      getUsers(),
      getInstanceUserRoles(),
      getInstanceRoles(),
      getInstancePendingUsers(),
    ]);
    setloading(false);
  };
  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );

  const filteredUsers = instanceUserWithRoles?.filter((e) => {
    const name = `${e?.firstName?.toLowerCase() || '-'} ${
      e?.lastName?.toLowerCase() || '-'
    }`;
    return name?.includes(search?.toLowerCase());
  });
  const userProps = {
    updateRole,
    roles: filteredUsers,
    deleteUserRole,
    instanceRoles,
    createInvite,
    isOwner: isInstanceOwner,
    instanceZUID: zuid,
    loading,
    search,
    setsearch,
    respondToInvite,
    pendingUsers,
  };
  return (
    <InstanceContainer>
      <Users {...userProps} />
    </InstanceContainer>
  );
}
