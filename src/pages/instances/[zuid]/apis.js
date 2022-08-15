import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import { Apis } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';

const isInstanceOwner = (userWithRoles, userInfo) => {
  const currentRole = userWithRoles?.find((e) => e.ZUID === userInfo?.ZUID)
    ?.role?.name;
  if (currentRole === 'Owner' || currentRole === 'Admin') {
    return true;
  } else {
    return false;
  }
};

export default function UsersPage() {
  const [tokens, settokens] = React.useState([]);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
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
  const handleGetInstanceUserWithRolesSucc = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleGetInstanceUserWithRolesErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleCreateTokenSucc = (res) => {
    SuccessMsg({ title: 'Success' });
  };
  const handleCreateTokenErr = (res) => {
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

  const getInstanceUserWithRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetInstanceUserWithRolesSucc(res);
    res.error && handleGetInstanceUserWithRolesErr(res);
  };

  const createToken = async (data) => {
    const { roleZUID, name } = data;
    const res = await ZestyAPI.createToken(roleZUID, name);
    !res.error && handleCreateTokenSucc(res);
    res.error && handleCreateTokenErr(res);
  };

  React.useEffect(() => {
    getInstanceTokens();
    getInstanceRoles();
    getInstanceUserWithRoles();
  }, []);

  return (
    <Main>
      <AppBar />

      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            <Apis
              tokens={tokens}
              roles={instanceRoles}
              isInstanceOwner={isInstanceOwner(instanceUserWithRoles, userInfo)}
              createToken={createToken}
            />
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
