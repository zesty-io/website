import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Settings } from 'views/accounts/instances';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function SettingsPage() {
  const [settings, setsettings] = React.useState([]);
  const { ZestyAPI } = useZestyStore((state) => state);
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
    <InstanceContainer>
      <Settings settings={settings} />
    </InstanceContainer>
  );
}
