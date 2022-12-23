import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

export const AccountPageloading = ({ title = '' }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.xl2,
        height: '70vh',
      })}
    >
      <Box
        display="grid"
        justifyContent="center"
        alignItems="center"
        height="100%"
        data-testid="signout-page"
      >
        <Stack textAlign={'center'} alignItems="center">
          <img src="https://brand.zesty.io/zesty-io-logo.svg" width="150"></img>
          <Typography variant="h2" mb={3} color="primary">
            {title}
          </Typography>
          <Stack width={200}>
            <LinearProgress color="primary" />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
