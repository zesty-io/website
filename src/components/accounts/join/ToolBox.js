import { Button, Stack } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';

export const ToolBox = ({ title = '', role = '', userType = '' }) => {
  const { userInfo, ZestyAPI } = useZestyStore();

  //* for testing only
  const clearPrefs = async () => {
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
      }, 3000);
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
      <Button variant="contained" onClick={clearPrefs}>
        Clear User Prefs
      </Button>
      <h3>{title}</h3>
      <h6>role: {JSON.stringify(role)}</h6>
      <h6>userType: {JSON.stringify(userType)}</h6>
    </Stack>
  );
};
