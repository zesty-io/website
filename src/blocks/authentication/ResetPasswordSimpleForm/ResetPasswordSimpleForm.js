/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Container from 'components/Container';

const ResetPasswordSimpleForm = () => {
  return (
    <Box bgcolor={'alternate.main'}>
      <Container maxWidth={600}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            color={'text.secondary'}
            fontWeight={700}
          >
            Recover account
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Forgot your password?
          </Typography>
          <Typography color="text.secondary">
            Enter your email address below and we'll get you back on track.
          </Typography>
        </Box>
        <Card sx={{ p: { xs: 4, md: 6 } }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
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
                  maxWidth={600}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Button
                      size={'large'}
                      variant={'outlined'}
                      component={Link}
                      href={'#'}
                      fullWidth
                    >
                      Back to login
                    </Button>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Send reset link
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default ResetPasswordSimpleForm;
