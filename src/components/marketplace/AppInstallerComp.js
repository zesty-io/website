import { Button } from '@mui/material';
import React from 'react';
import { getCookie } from 'cookies-next';

export const AppInstallerComp = ({ data, theme }) => {
  const [response, setresponse] = React.useState('');
  const [error, seterror] = React.useState('');
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const appZUID = data?.app_zuid;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const url = `https://accounts.api.zesty.io/v1/instances/${instanceZUID}/app-installs`;

  const InstallApp = async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ appZUID }),
    })
      .then((e) => e.json())
      .catch((e) => {
        console.log(e);
        seterror(e);
      });
    res.status === 201 && setresponse(res);
    res.status !== 201 && seterror(res.error);
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
      {JSON.stringify(response)}
    </Button>
  );
};
