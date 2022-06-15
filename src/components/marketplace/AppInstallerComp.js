import { Button } from '@mui/material';
import React from 'react';
import { getCookie } from 'cookies-next';
import { CircularProgress } from '@mui/material';
import { fetchWrapperOptions, getUserAppSID } from 'utils';

export const AppInstallerComp = ({ data, theme }) => {
  const [installedApps, setinstalledApps] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getUserAppSID();
  const appZUID = data?.app_zuid;
  const ZestyAPI = new Zesty.FetchWrapper(
    instanceZUID,
    userAppSID,
    fetchWrapperOptions(),
  );

  const installAppSuccess = async (res) => {
    setloading(false);
    await getAllInstalledApps();
  };
  const installAppError = async (error) => {
    setloading(false);
    await getAllInstalledApps();
  };
  const getInstalledAppSuccess = (res) => {
    setloading(false);
    if (res && Object.keys(res).length !== 0) {
      setinstalledApps(res);
    }
  };
  const getInstalledAppError = (error) => {};

  const getAllInstalledApps = async () => {
    setloading(true);
    const res = await ZestyAPI.getAllInstalledApps(instanceZUID);
    !res.message && getInstalledAppSuccess(res.data);
    res.message && getInstalledAppError(res);
  };

  const InstallApp = async () => {
    setloading(true);
    const res = await ZestyAPI.installApp(instanceZUID, appZUID);
    res.status === 201 && installAppSuccess(res);
    !res.status !== 201 && installAppError(res.error);
  };

  const isInstalled = installedApps?.find((e) => e?.appZUID === appZUID)?.ZUID;
  const disabledBtn = (instanceZUID && !isInstalled) || loading ? false : true;

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
      {loading ? (
        <CircularProgress color="inherit" size={28} thickness={5} />
      ) : !instanceZUID ? (
        'Please Select an Instance to continue'
      ) : isInstalled ? (
        'App Already Installed '
      ) : (
        'Install ' + data?.name
      )}
    </Button>
  );
};
