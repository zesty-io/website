import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Security = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Current password
            </Typography>
            <TextField
              variant="outlined"
              name={'currentPassword'}
              type={'password'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              New password
            </Typography>
            <TextField
              variant="outlined"
              name={'newPassword'}
              type={'password'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Repeat password
            </Typography>
            <TextField
              variant="outlined"
              name={'repeatPassword'}
              type={'password'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch color="primary" defaultChecked />}
              label={
                <Typography variant="subtitle1" fontWeight={700}>
                  Public Profile
                </Typography>
              }
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch color="primary" />}
              label={
                <Typography variant="subtitle1" fontWeight={700}>
                  Expose your email
                </Typography>
              }
              labelPlacement="end"
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              margin={'0 auto'}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  You may also consider to update your{' '}
                  <Link color={'primary'} href={'#'} underline={'none'}>
                    notification settings.
                  </Link>
                </Typography>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Security;
