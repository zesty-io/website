import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import { Users } from 'views/accounts';
import { ErrorMsg, StickyTable, SuccessMsg } from 'components/accounts';
import { baseroles } from 'components/accounts/users/baseroles';
import { Box, Typography } from '@mui/material';

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'ZUID',
    label: 'Zuid',
  },
  {
    id: 'accessLevel',
    label: 'Access Level',
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

export default function UsersPage() {
  const [users, setusers] = React.useState([]);
  const [roles, setroles] = React.useState([]);
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const handleGetUserSuccess = (res) => {
    setusers(res.data);
    console.log(res);
  };
  const handleGetUserErr = (res) => {
    console.log(res);
  };

  const handleGetRolesSuccess = (res) => {
    setroles(res.data);
    console.log(res);
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
    ErrorMsg();
  };
  const handleDeleteRoleSuccess = (res) => {
    console.log(res, 'succ upp');
    SuccessMsg({ title: 'User role successfully Deleted' });
  };
  const handleDeleteRoleErr = (res) => {
    console.log(res);
    ErrorMsg();
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
    const { userZUID, roleZUID } = data;
    const res = await ZestyAPI.updateUserRole(userZUID, roleZUID);
    !res.error && handleUpdateRoleSuccess(res);
    res.error && handleUpdateRoleErr(res);
  };
  const deleteUserRole = async (data) => {
    const { userZUID, roleZUID } = data;
    const res = await ZestyAPI.deleteUserRole(userZUID, roleZUID);
    !res.error && handleDeleteRoleSuccess(res);
    res.error && handleDeleteRoleErr(res);
  };
  React.useEffect(() => {
    getUsers();
    getInstanceUserRoles();
  }, []);

  return (
    <Main>
      <AppBar />
      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            <Users
              updateRole={updateRole}
              users={users}
              roles={roles}
              deleteUserRole={deleteUserRole}
            />
            <RolesTable />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
