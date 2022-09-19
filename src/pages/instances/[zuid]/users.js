import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Users } from 'views/accounts';
import { ErrorMsg, StickyTable, SuccessMsg } from 'components/accounts';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { baseroles } from 'components/accounts/users/baseroles';
import * as helpers from 'utils';
import { grey } from '@mui/material/colors';
import { docData } from 'components/accounts/users/docData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

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

const PendingTable = ({
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
    <StickyTable
      title="Pending Users"
      loading={loading}
      rows={newData}
      columns={COLUMNS_PENDING}
    />
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

    await Promise.all([
      getUsers(),
      getInstanceUserRoles(),
      getInstanceRoles(),
      getInstancePendingUsers(),
    ]);
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ my: 2, p: 3, border: `1px solid ${grey[400]}` }}>
            <Typography variant="h6" mb={3} color="text.secondary">
              Roles and Permissions
            </Typography>
            {baseroles.map((role) => (
              <Stack key={role.ZUID} px={2} spacing={1} mb={2}>
                <Typography fontWeight="bolder">{role.label}</Typography>
                <Typography>{role.desc}</Typography>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} height="100%">
          <Paper sx={{ my: 2, p: 3, border: `1px solid ${grey[400]}` }}>
            <Typography variant="h6" mb={3} color="text.secondary">
              Users
            </Typography>
            {docData.map((doc) => (
              <Stack key={doc.id} px={2} spacing={1} mb={2}>
                <Typography fontWeight="bolder">{doc.title}</Typography>
                <Typography>{doc.desc}</Typography>
                <Button
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  href={doc.link}
                  target="_blank"
                  sx={{ alignSelf: 'start' }}
                >
                  Learn More
                </Button>
              </Stack>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

UsersPage.data = {
  container: 'InstanceContainer',
};
