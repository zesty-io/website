import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'views/InstancesApp/InstancesApp';
import { useRouter } from 'next/router';
import BasicTable from 'components/accounts/users/BasicTable';

export default function Billing() {
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

      {/* {JSON.stringify(data)} */}
      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            Manager users on instance <BasicTable users={users} roles={roles} />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
