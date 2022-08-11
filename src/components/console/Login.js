import { Box, Button, Typography } from '@mui/material';
import {
  accountsValidations,
  ErrorMsg,
  FormInput,
  SuccessMsg,
} from 'components/accounts';
import { setCookie } from 'cookies-next';
import CircularProgress from '@mui/material/CircularProgress';

import { useFormik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';

const Login = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [loading, setloading] = React.useState(false);

  const handleLoginSuccess = (res) => {
    setloading(false);
    setCookie('APP_SID', res.data.data);
    SuccessMsg({ title: 'Success' });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const handleLoginErr = (err) => {
    setloading(false);
    ErrorMsg({ text: err.message });
  };

  const login = async (data) => {
    setloading(true);
    const { email, password } = data;
    const res = await ZestyAPI.login(email, password);
    res.code === 200 && handleLoginSuccess(res);
    res.code !== 200 && handleLoginErr(res);
  };
  const handleLogin = async (data) => {
    await login(data);
  };
  const formik = useFormik({
    validationSchema: accountsValidations.login,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await handleLogin(values);
      formik.resetForm();
    },
  });

  return (
    <Box>
      <Box paddingY={4}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <FormInput name={'email'} formik={formik} />
          <FormInput name={'password'} type="password" formik={formik} />
          <Button color="secondary" variant="contained" fullWidth type="submit">
            {loading ? (
              <CircularProgress color="primary" />
            ) : (
              <Typography variant="h6">Login</Typography>
            )}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
