import React from 'react';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'components/accounts/instances/InstancesApp';
import { useRouter } from 'next/router';
import { Settings } from 'views/accounts/instances';

export default function SettingsPage() {
  const [settings, setsettings] = React.useState([]);
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);
  const router = useRouter();
  const { zuid } = router.query;

  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    console.log(res);
  };

  const handleGetSettingSuccess = (res) => {
    setsettings(res.data);
  };
  const handleGetSettingError = (err) => {
    console.log(err);
  };
  const getSettings = async () => {
    const res = await ZestyAPI.getSettings();
    !res.error && handleGetSettingSuccess(res);
    res.error && handleGetSettingError(res);
  };
  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    console.log(res);
  };
  React.useEffect(() => {
    getUsers();
    getInstanceUserRoles();
    getSettings();
  }, []);

  return (
    <Main>
      <AppBar />
      <Container>
        {isAuthenticated ? (
          <>
            <InstancesApp>
              <Settings settings={settings} />
            </InstancesApp>
          </>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}
