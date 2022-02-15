import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const General = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Enter your first name
            </Typography>
            <TextField
              label="First name *"
              variant="outlined"
              name={'fullName'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Enter your email
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={'email'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Bio
            </Typography>
            <TextField
              label="Bio"
              variant="outlined"
              name={'bio'}
              multiline
              rows={5}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Country
            </Typography>
            <TextField
              label="Country *"
              variant="outlined"
              name={'country'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              City
            </Typography>
            <TextField
              label="City *"
              variant="outlined"
              name={'city'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Enter your address
            </Typography>
            <TextField
              label="Address *"
              variant="outlined"
              name={'address'}
              fullWidth
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
                    billing information.
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

export default General;
