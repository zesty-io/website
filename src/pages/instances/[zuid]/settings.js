import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Settings } from 'views/accounts/instances';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import { downloadTemplate } from 'utils/LaunchApp';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function SettingsPage(content) {
  const [loading, setloading] = React.useState(false);
  const [settings, setsettings] = React.useState([]);
  const { ZestyAPI, userAppSID } = useZestyStore((state) => state);
  const router = useRouter();
  const { zuid } = router.query;

  const getUsers = async () => {
    await ZestyAPI.getInstanceUsers(zuid);
  };

  const handleGetSettingSuccess = (res) => {
    setsettings(res.data);
  };
  const handleSingleSettingUpdateSuccess = () => {
    SuccessMsg({ title: 'Settings Updated' });
  };
  const handleSingleSettingUpdateError = (err) => {
    ErrorMsg({ title: err.error });
  };
  const getSettings = async () => {
    const res = await ZestyAPI.getSettings();
    !res.error && handleGetSettingSuccess(res);
  };
  const getInstanceUserRoles = async () => {
    await ZestyAPI.getInstanceUsersWithRoles(zuid);
  };

  const singleSettingsUpdate = async (e) => {
    const res = await ZestyAPI.updateSetting(e.ZUID, e);
    !res.error && handleSingleSettingUpdateSuccess(res);
    res.error && handleSingleSettingUpdateError(res);
    await getPageData();
  };

  const getPageData = async () => {
    setloading(true);
    await Promise.all([getUsers(), getInstanceUserRoles(), getSettings()]);
    setloading(false);
  };
  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return (
    <InstanceContainer>
      <Settings
        content={content}
        loading={loading}
        settings={settings}
        singleSettingsUpdate={singleSettingsUpdate}
        token={userAppSID}
        instance_zuid={zuid}
        downloadTemplate={downloadTemplate}
      />
    </InstanceContainer>
  );
}
