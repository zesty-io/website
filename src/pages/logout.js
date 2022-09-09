import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useZestyStore } from 'store';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

const logout = () => {
  document.title = 'Accounts: Logout';
  const { ZestyAPI } = useZestyStore((state) => state);

  useEffect(() => {
    const logout = async () => {
      await ZestyAPI.logout();
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
          <Typography variant="h3" mb={3} color="secondary">
            Signing Out of Zesty.io
          </Typography>
          <LinearProgress color="secondary" />
        </Stack>
      </Box>
    </Container>
  );
};

export default logout;
