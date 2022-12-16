import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';

export const ToolBox = ({ title = '', role = '', userType = '' }) => {
  const [loading, setloading] = React.useState(false);
  const { userInfo, ZestyAPI } = useZestyStore();

  //* for testing only
  const clearPrefs = async () => {
    setloading(true);
    const userZUID = userInfo.ZUID;
    const res = await ZestyAPI.getUser(userZUID);
    if (!res.error) {
      const { firstName, lastName, prefs } = res?.data || {};
      const newPrefs = prefs && JSON.parse(prefs);
      const body = {
        firstName,
        lastName,
        prefs: '',
      };
      await ZestyAPI.updateUser(userZUID, body);
      setTimeout(() => {
        window.location.reload();
        setloading(false);
      }, 2000);
      console.log(newPrefs);
    }
  };

  return (
    <Stack
      bgcolor="white"
      p={2}
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        border: '1px solid #333333',
        zIndex: 9999999999999999,
      }}
    >
      <LoadingButton loading={loading} variant="contained" onClick={clearPrefs}>
        Clear User Prefs
      </LoadingButton>
      <h3>{title}</h3>
      <h6>role: {JSON.stringify(role)}</h6>
      <h6>userType: {JSON.stringify(userType)}</h6>
    </Stack>
  );
};
