import { Button, Grid, Typography } from '@mui/material';
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
import * as helpers from 'utils';
import { Box } from '@mui/system';

const Login = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [loading, setloading] = React.useState(false);

  const handleLoginSuccess = (res) => {
    setloading(false);

    setCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', res.data.data);
    SuccessMsg({
      title: 'Success',
      action: () => {
        // window.location.reload();
        window.location.replace('/instances');
      },
    });
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
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box
            display={'flex'}
            flexDirection="column"
            justifyItems={'center'}
            justifyContent="center"
          >
            <Box
              paddingY={2}
              component="img"
              sx={{
                height: 200,
              }}
              alt="Zesty-io Login"
              src="https://brand.zesty.io/zesty-io-logo-vertical.svg"
            />
            <form noValidate onSubmit={formik.handleSubmit}>
              <FormInput name={'email'} formik={formik} />
              <FormInput name={'password'} type="password" formik={formik} />
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                type="submit"
              >
                {loading ? (
                  <CircularProgress color="primary" />
                ) : (
                  <Typography variant="h6">Login</Typography>
                )}
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Box>
  );
};

export default Login;
