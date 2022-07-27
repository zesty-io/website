import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';
import { hashMD5 } from 'utils/Md5Hash';

export const YourProfile = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [firstName, setfirstName] = React.useState(userInfo?.firstName);
  const [lastName, setlastName] = React.useState(userInfo?.lastName);

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);

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
      <img src={profileUrl} alt="profile" height={40} width={40} />
      <form action="submit" onSubmit={handleSubmit}>
        <TextField
          onChange={(event) => setfirstName(event.target.value)}
          label="First Name"
          value={firstName}
          defaultValue={userInfo?.firstName}
          variant="standard"
        />
        <TextField
          onChange={(event) => setlastName(event.target.value)}
          label="Last Name"
          defaultValue={lastName}
          variant="standard"
        />

        <Button type="submit" variant="contained">
          Update Username
        </Button>
      </form>
    </Box>
  );
};
