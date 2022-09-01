import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Settings } from 'views/accounts/instances';
import { ErrorMsg, SuccessMsg } from 'components/accounts';

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
  const handleSingleSettingUpdateSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Settings Updated' });
  };
  const handleSingleSettingUpdateError = (err) => {
    console.log(err);
    ErrorMsg({ title: err.error });
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

  const singleSettingsUpdate = async (e) => {
    const res = await ZestyAPI.updateSetting(e.ZUID, e);
    !res.error && handleSingleSettingUpdateSuccess(res);
    res.error && handleSingleSettingUpdateError(res);
  };

  React.useEffect(() => {
    if (router.isReady) {
      getUsers();
      getInstanceUserRoles();
      getSettings();
    }
  }, [router.isReady]);

  return (
    <Settings settings={settings} singleSettingsUpdate={singleSettingsUpdate} />
  );
}

SettingsPage.data = {
  container: 'InstanceContainer',
};
