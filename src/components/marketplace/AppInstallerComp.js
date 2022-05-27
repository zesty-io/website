import { Button } from '@mui/material';
import React from 'react';
import { getCookie } from 'cookies-next';

export const AppInstallerComp = ({ data, theme }) => {
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getCookie('APP_SID');
  const appZUID = data?.app_zuid;
  const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  const handleSuccess = (res) => {
    console.log(res);
  };
  const handleError = (error) => {
    console.log(error);
  };

  const InstallApp = async () => {
    const res = await ZestyAPI.installApp(instanceZUID, appZUID);
    res.status === 201 && handleSuccess(res);
    res.status !== 201 && handleError(res.error);
  };

  return (
    <Button
      href="#"
      variant="contained"
      color="secondary"
      sx={{ mt: 2 }}
      fullWidth
      onClick={InstallApp}
    >
      {data?.name}
    </Button>
  );
};
