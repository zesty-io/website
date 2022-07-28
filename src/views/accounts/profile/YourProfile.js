import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';
import Swal from 'sweetalert2';
import { hashMD5 } from 'utils/Md5Hash';
import withReactContent from 'sweetalert2-react-content';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  EmailForm,
  ErrorMsg,
  StickyTable,
  SuccessMsg,
} from 'components/accounts/ui';

const MySwal = withReactContent(Swal);

const COLUMNS = [
  {
    id: 'address',
    label: 'Email',
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'primary',
    label: 'Primary',
  },
  {
    id: 'verified',
    label: 'Verified',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const CustomTable = ({ emails, userInfo, deleteEmail }) => {
  const ROWS = emails?.map((e) => {
    return {
      address: e.address,
      description: e.name,
      primary:
        e.address == userInfo?.email ? <CheckCircleIcon color="success" /> : '',
      verified: e.responseReceived ? <CheckCircleIcon color="success" /> : '',
      action: <Button onClick={() => deleteEmail(e.address)}>X</Button>,
    };
  });
  const memoizeRows = React.useMemo(() => ROWS, [emails, userInfo]);
  const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <StickyTable rows={memoizeRows} columns={memoizeColumns} />
    </Box>
  );
};

const ProfileHeader = ({ userInfo }) => {
  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  return (
    <Box
      sx={{
        display: 'flex',
      }}
      paddingX={4}
      paddingY={4}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={profileUrl} alt="" width={100} height={100} />
        <Button href="https://en.gravatar.com/">Edit</Button>
      </Box>
    </Box>
  );
};

export const YourProfile = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');
  const [emails, setemails] = React.useState([]);

  const updateUsernameSuccess = (data) => {
    console.log(data, 'success');
    SuccessMsg({ title: 'Update Success' });
  };

  const updateUsernameError = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err?.error });
  };

  const handleDeleteEmailSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Email Deleted ' });
  };
  const handleDeleteEmailErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };

  const handleGetEmailsSuccess = (data) => {
    console.log(data, 'succ');
    setemails(data.data);
  };
  const handleGetEmailsErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };
  const getUserEmails = async () => {
    const res = await ZestyAPI.getUserEmails();
    !res.error && handleGetEmailsSuccess(res);
    res.error && handleGetEmailsErr(res);
  };
  const deleteEmail = async (email) => {
    const res = await ZestyAPI.deleteUserEmail(email);
    !res.error && handleDeleteEmailSuccess(res);
    res.error && handleDeleteEmailErr(res);
    await getUserEmails();
  };
  const updateUsername = async (e) => {
    e.preventDefault();
    const userZUID = userInfo.ZUID;
    const body = { firstName, lastName, prefs: userInfo.prefs };
    const res = await ZestyAPI.updateUser(userZUID, body);
    !res.error && updateUsernameSuccess(res);
    res.error && updateUsernameError(res);
  };

  React.useEffect(() => {
    getUserEmails();
  }, []);
  return (
    <Box>
      <Grid container gap={4}>
        <Grid item>
          <form action="submit" onSubmit={updateUsername}>
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
        </Grid>

        <Grid item>
          <ProfileHeader userInfo={userInfo} />
        </Grid>
      </Grid>

      <Box>
        <CustomTable
          deleteEmail={deleteEmail}
          userInfo={userInfo}
          emails={emails}
        />
      </Box>
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            MySwal.fire({
              title: 'Add Email Address',
              html: <EmailForm getUserEmails={getUserEmails} />,
              showConfirmButton: false,
            });
          }}
        >
          Add Email
        </Button>
      </Box>
    </Box>
  );
};
