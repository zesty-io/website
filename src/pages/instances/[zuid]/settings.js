import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Settings } from 'views/accounts/instances';

export default function SettingsPage() {
  const [loading, setloading] = React.useState(false);
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
  const getPageData = async () => {
    await setloading(true);
    await getUsers();
    await getInstanceUserRoles();
    await getSettings();
    await setloading(false);
  };
  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return <Settings loading={loading} settings={settings} />;
}

SettingsPage.data = {
  container: 'InstanceContainer',
};
