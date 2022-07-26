import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';

export const YourProfile = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');

  const handleSuccess = (data) => {
    console.log(data, 'success');
  };

  const handleError = (err) => {
    console.log(err, 'err');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userZUID = userInfo.ZUID;
    const body = { firstName, lastName, prefs: userInfo.prefs };
    const res = await ZestyAPI.updateUser(userZUID, body);
    !res.error && handleSuccess(res);
    res.error && handleError(res);
  };
  return (
    <Box>
      <form action="submit" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            onChange={(event) => setfirstName(event.target.value)}
            label={firstName || userInfo?.firstName}
            value={firstName}
            variant="standard"
            fullWidth
          />
          <TextField
            fullWidth
            onChange={(event) => setlastName(event.target.value)}
            label={lastName || userInfo?.lastName}
            value={lastName}
            variant="standard"
          />

          <Button fullWidth type="submit" variant="contained">
            Update Username
          </Button>
        </Box>
      </form>
    </Box>
  );
};
