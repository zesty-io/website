import React from 'react';
import { Paper, Box, Tab, Table, Typography, TableRow, TableCell, TableHead } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'views/InstancesApp/InstancesApp';
import { useRouter } from 'next/router';
import BasicTable from 'components/accounts/users/BasicTable';
import { baseroles } from 'components/accounts/users/baseroles';

export default function Users() {
  const [users, setusers] = React.useState([]);
  const [roles, setroles] = React.useState([]);
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    setusers(res.data);
    console.log(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    setroles(res.data);
    console.log(res);
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
            Manager users on instance <BasicTable users={users} roles={roles} />
            <Box paddingY={2}>
              <Typography variant="h5">Base Roles in Zesty.io</Typography>
            </Box>
            <Table component={Paper}>
              <TableHead>
                <TableRow>
                    <TableCell>Role Name</TableCell>
                    <TableCell>Role ZUID</TableCell>
                    <TableCell>Role ID</TableCell>
                </TableRow>
              </TableHead>
              {baseroles.map(role =>
                <TableRow>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{role.ZUID}</TableCell>
                  <TableCell>{role.accessLevel}</TableCell>
                </TableRow>
              )}
              
            </Table>

          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
