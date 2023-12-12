import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { deleteCookie } from 'cookies-next';
import React, { useEffect } from 'react';
// import { useZestyStore } from 'store';
import * as helpers from 'utils';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const purgeUrl =
  'https://us-central1-zesty-prod.cloudfunctions.net/fastlyPurge?zuid=8-aaeffee09b-7w6v22&instance=8-aaeffee09b-7w6v22';

const logout = () => {
  // const { ZestyAPI } = useZestyStore((state) => state);

  useEffect(() => {
    const logout = async () => {
      // await ZestyAPI.logout();
      // clear websites cache on logout
      await axios.get(purgeUrl);
      deleteCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', {
        domain: '.zesty.io',
      });
      deleteCookie('azure:sso:authstate', {
        domain: '.zesty.io',
        secure: true,
      });
      deleteCookie('google:sso:authstate', {
        domain: '.zesty.io',
        secure: true,
      });
      deleteCookie('github:sso:authstate', {
        domain: '.zesty.io',
        secure: true,
      });
      deleteCookie('isAuthenticated');
      deleteCookie('ZESTY_WORKING_INSTANCE', {});
      window.location.replace('/login/');
    };

    logout();
  }, []);
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.xl2,
        height: '100vh',
      })}
    >
      <Box
        display="grid"
        justifyContent="center"
        alignItems="center"
        height="100%"
        px={5}
        data-testid="signout-page"
      >
        <Stack>
          <Typography variant="h3" mb={3} color="primary">
            Signing Out of Zesty.io
          </Typography>
          <LinearProgress color="primary" />
        </Stack>
      </Box>
    </Container>
  );
};

export default logout;
