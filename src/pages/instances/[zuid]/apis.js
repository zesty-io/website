import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import { Apis } from 'views/accounts';

export default function Users() {
  const [tokens, settokens] = React.useState([]);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const { ZestyAPI, isAuthenticated, userInfo } = useZestyStore(
    (state) => state,
  );

  const router = useRouter();

  const { zuid } = router.query;

  const handleGetInstanceTokenSuccess = (res) => {
    settokens(res.data);
  };
  const handleGetInstanceTokenError = (res) => {
    console.log(res);
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
  const getInstanceTokens = async () => {
    const res = await ZestyAPI.getInstanceToken(zuid);
    !res.error && handleGetInstanceTokenSuccess(res);
    res.error && handleGetInstanceTokenError(res);
  };

  const getInstanceRoles = async () => {
    const res = await ZestyAPI.getInstanceRoles(zuid);
    !res.error && handleGetInstanceRolesSuccess(res);
    res.error && handleGetInstanceRolesErr(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    console.log(res, ':::::');
    // !res.error && handleGetRolesSuccess(res);
    // res.error && handleGetRolesErr(res);
  };
  const getRole = async (zuid) => {
    const res = await ZestyAPI.getRole(zuid);
    console.log(res, 'role:::::');
    // !res.error && handleGetRolesSuccess(res);
    // res.error && handleGetRolesErr(res);
  };
  const isInstanceOwner = () => {
    const currentRole = instanceRoles?.find((e) => e.ZUID === userInfo?.ZUID)
      ?.role?.name;
    console.log(instanceRoles, userInfo, '::');
    if (currentRole === 'Owner' || currentRole === 'Admin') {
      return true;
    } else {
      return false;
    }
  };
  React.useEffect(() => {
    getInstanceTokens();
    getInstanceRoles();
    getInstanceUserRoles();
    getRole(userInfo?.ZUID);
  }, [userInfo]);

  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            <Apis
              tokens={tokens}
              roles={instanceRoles}
              isInstanceOwner={isInstanceOwner()}
            />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
