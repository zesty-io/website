/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

import { Billing, General, Notifications, Security } from './components';

import Container from 'components/Container';

const Account = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Change your private information
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
              Please read our{' '}
              <Link color={'primary'} href={'#'} underline={'none'}>
                terms of use
              </Link>{' '}
              to be informed how we manage your private data.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <General />
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={700}>
              Change your password
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Security />
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={700}>
              Update website notifications
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Notifications />
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Change your card data
            </Typography>
            <Typography
              variant={'subtitle2'}
              color={'text.secondary'}
              gutterBottom
            >
              Please be informed that we do not share any sensitive information
              such as your bank card data with any third party agencies and
              companies.
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
              Please read our{' '}
              <Link color={'primary'} href={'#'} underline={'none'}>
                terms of use
              </Link>{' '}
              to be informed how we manage your bank data.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Billing />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Account;
