import { Box, Button, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';

export const SuccessMsg = ({ title = 'Success', action = () => {} }) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title,
    showConfirmButton: true,
    timer: 2500,
  }).then(() => action());
};

export const ErrorMsg = ({ text = 'Something went wrong' }) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text,
    //   footer: '<a href="">Why do I have this issue?</a>',
  });
};

export const TokenPrompt = ({ token = '' }) => {
  const copyToClipboard = () => {
    navigator?.clipboard?.writeText(token);
  };
  return (
    <Box>
      <Box paddingBottom={4}>
        <Typography variant="p" fontSize={'small'}>
          Once this modal is closed you will not be able to retrive the access
          token again. Access tokens are secrets which should be stored
          securely. Anyone who has the token will be able to make API requests
          to this instance at the selected role & permissions level.
        </Typography>
      </Box>
      <Grid
        container
        display={'flex'}
        sx={{ background: '#f1f1f1', alignItems: 'center' }}
      >
        <Grid item xs={10}>
          <Typography variant="p" fontSize={'small'}>
            {token}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={copyToClipboard} type="button" variant="contained">
            Copy
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
