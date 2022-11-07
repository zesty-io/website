import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { deleteCookie } from 'cookies-next';
import React, { useEffect } from 'react';
import { useZestyStore } from 'store';
import * as helpers from 'utils';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const logout = () => {
  const { ZestyAPI } = useZestyStore((state) => state);

  useEffect(() => {
    const logout = async () => {
      await ZestyAPI.logout();
      deleteCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', {
        domain: '.zesty.io',
      });
      deleteCookie('isAuthenticated', { domain: '.zesty.io' });
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
