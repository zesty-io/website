import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';

const emptyPrefs = '';
const oldUserPrefs = {
  favorite_sites: [
    '8-f6c2b69cd2-x5lt9w',
    '8-ae8d89b2ce-m5m1zd',
    '8-debbdf9bba-rk2k2j',
    '8-9c8397d0ab-q5hbdq',
    '8-90a1e480d4-d0ng4z',
  ],
  instance_layout: 'grid',
  teamOptions: '1',
};
export const ToolBox = ({ title = '', role = '', userType = '' }) => {
  const [loading, setloading] = React.useState(false);
  const { userInfo, ZestyAPI } = useZestyStore();

  //* for testing only
  const updatePrefs = async (data) => {
    setloading(true);
    const userZUID = userInfo.ZUID;
    const res = await ZestyAPI.getUser(userZUID);
    if (!res.error) {
      const { firstName, lastName } = res?.data || {};
      const body = {
        firstName,
        lastName,
        prefs: JSON.stringify(data),
      };
      await ZestyAPI.updateUser(userZUID, body);
      setTimeout(() => {
        window.location.reload();
        setloading(false);
      }, 2000);
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
        gap: 1,
      }}
    >
      <LoadingButton
        loading={loading}
        variant="contained"
        onClick={() => updatePrefs(emptyPrefs)}
        data-testid="clearPrefs"
      >
        Clear User Prefs
      </LoadingButton>
      <LoadingButton
        loading={loading}
        variant="contained"
        data-testid="oldUserPrefs"
        onClick={() => updatePrefs(oldUserPrefs)}
      >
        Existing user test
      </LoadingButton>
      <h3>{title}</h3>
      <h6>role: {JSON.stringify(role)}</h6>
      <h6>userType: {JSON.stringify(userType)}</h6>
    </Stack>
  );
};
