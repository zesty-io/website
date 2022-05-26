import { Button } from '@mui/material';
import React from 'react';
import { getCookie } from 'cookies-next';

export const AppInstallerComp = ({ data, theme }) => {
  const [response, setresponse] = React.useState('');
  const [error, seterror] = React.useState('');
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getCookie('APP_SID');
  const appZUID = data?.app_zuid;
  const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  const InstallApp = async () => {
    const res = await ZestyAPI.installApp(instanceZUID, appZUID);
    res.status === 201 && setresponse(res);
    res.status !== 201 && seterror(res.error);
  };

  const handleSuccess = () => {};
  const handleError = () => {};

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
      {JSON.stringify(response)}
    </Button>
  );
};
