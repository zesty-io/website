import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Users } from 'views/accounts';
import { ErrorMsg, StickyTable, SuccessMsg } from 'components/accounts';
import { baseroles } from 'components/accounts/users/baseroles';
import { Box, Button, Typography } from '@mui/material';
import * as helpers from 'utils';

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'desc',
    label: 'Description',
  },
  {
    id: 'accessLevel',
    label: 'Access Level',
  },
];

const COLUMNS_PENDING = [
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'action',
    label: 'Action',
  },
];
const RolesTable = ({ title = 'Base Roles in Zesty.io' }) => {
  return (
    <Box>
      <Box paddingY={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <StickyTable rows={baseroles} columns={COLUMNS} />;
    </Box>
  );
};

const PendingTable = ({
  title = 'Pending Users',
  data = [],
  respondToInvite,
  isInstanceOwner,
  loading,
}) => {
  const newData = data.map((e) => {
    return {
      ...e,
      action: isInstanceOwner ? (
        <Button
          variant="contained"
          color="error"
          onClick={() => respondToInvite(e, 'cancel')}
        >
          Cancel Invite
        </Button>
      ) : (
        '-'
      ),
    };
  });
  return (
    <Box>
      <Box paddingY={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <StickyTable loading={loading} rows={newData} columns={COLUMNS_PENDING} />
    </Box>
  );
};
export default function UsersPage() {
  const [loading, setloading] = React.useState(false);
  const [users, setusers] = React.useState([]);
  const [pendingUsers, setpendingUsers] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const handleRespondToInviteSuccess = (res) => {
    setusers(res.data);
    console.log(res);
  };
  const handleRespondToInviteErr = (res) => {
    console.log(res);
  };
  const handleGetUserSuccess = (res) => {
    setusers(res.data);
    console.log(res);
  };
  const handleGetUserErr = (res) => {
    console.log(res);
  };

  const handleGetInstancePendingUsersSuccess = (res) => {
    setpendingUsers(res.data);
    console.log(res);
  };
  const handlegetInstancePendingUsersErr = (res) => {
    console.log(res);
  };
  const handleGetRolesSuccess = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleGetRolesErr = (res) => {
    console.log(res);
  };
  const handleUpdateRoleSuccess = (res) => {
    console.log(res, 'succ upp');
    SuccessMsg({ title: 'Role Successfully Updated' });
  };
  const handleUpdateRoleErr = (res) => {
    console.log(res);
    ErrorMsg({ text: res.error });
  };
  const handleDeleteRoleSuccess = (res) => {
    console.log(res, 'succ upp');
    SuccessMsg({ title: 'User role successfully Deleted' });
  };
  const handleDeleteRoleErr = (res) => {
    console.log(res);
    ErrorMsg({ text: res.error });
  };

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

  const handleCreateInviteSuccess = (res) => {
    console.log(res, 'succ upp');
    SuccessMsg({ title: 'User Successfully invited' });
  };
  const handleCreateInviteErr = (res) => {
    console.log(res);
    ErrorMsg({ text: res.error });
  };
  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    !res.error && handleGetUserSuccess(res);
    res.error && handleGetUserErr(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetRolesSuccess(res);
    res.error && handleGetRolesErr(res);
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
    res.error && handlegetInstancePendingUsersErr(res);
  };

  const respondToInvite = async (data, action) => {
    const res = await ZestyAPI.respondToInvite(data.inviteZUID, action);
    !res.error && handleRespondToInviteSuccess(res);
    res.error && handleRespondToInviteErr(res);
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
    await setloading(true);
    await getUsers();
    await getInstanceUserRoles();
    await getInstanceRoles();
    await getInstancePendingUsers();
    await setloading(false);
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

  console.log(users, pendingUsers, 'user data');

  return (
    <>
      <Users
        updateRole={updateRole}
        roles={instanceUserWithRoles}
        deleteUserRole={deleteUserRole}
        instanceRoles={instanceRoles}
        createInvite={createInvite}
        isOwner={isInstanceOwner}
        instanceZUID={zuid}
        loading={loading}
      />
      <PendingTable
        loading={loading}
        isInstanceOwner={isInstanceOwner}
        respondToInvite={respondToInvite}
        data={pendingUsers}
      />
      <RolesTable />
    </>
  );
}

UsersPage.data = {
  container: 'InstanceContainer',
};
