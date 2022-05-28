import { Button } from '@mui/material';
import React from 'react';
import { getCookie } from 'cookies-next';

export const AppInstallerComp = ({ data, theme }) => {
  const [installedApps, setinstalledApps] = React.useState([]);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getCookie('APP_SID');
  const appZUID = data?.app_zuid;
  const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  const installAppSuccess = (res) => {
    console.log(res);
  };
  const installAppError = (error) => {
    console.log(error);
  };
  const getInstalledAppSuccess = (res) => {
    console.log(res, 'succcccc');
    setinstalledApps(res);
  };
  const getInstalledAppError = (error) => {
    console.log(error, 'error');
  };

  const getAllInstalledApps = async () => {
    const res = await ZestyAPI.getAllInstalledApps(instanceZUID);
    !res.message && getInstalledAppSuccess(res.data);
    res.message && getInstalledAppError(res);
  };

  const InstallApp = async () => {
    const res = await ZestyAPI.installApp(instanceZUID, appZUID);
    res.status === 201 && installAppSuccess(res);
    !res.status !== 201 && installAppError(res.error);
  };

  const isInstalled = installedApps?.find((e) => e.appZUID === appZUID)?.ZUID;
  const disabledBtn = instanceZUID && !isInstalled ? false : true;

  React.useEffect(() => {
    getAllInstalledApps();
  }, []);

  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ mt: 2 }}
      fullWidth
      onClick={InstallApp}
      disabled={disabledBtn}
    >
      {!instanceZUID
        ? 'Please Select an Instance to continue'
        : isInstalled
        ? 'App Already Installed '
        : data?.name}
    </Button>
  );
};
