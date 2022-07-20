import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <Box>
      <TextField placeholder="your@email.com" />
      <TextField placeholder="password" type={'password'} />
      <Button>Login</Button>
    </Box>
  );
};

export default Login;
