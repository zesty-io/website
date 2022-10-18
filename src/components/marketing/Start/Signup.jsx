/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useZestyStore } from 'store';
import { setCookie } from 'cookies-next';
import LockIcon from '@mui/icons-material/Lock';
import FillerContent from 'components/globals/FillerContent';
import { useFormik } from 'formik';
import {
  accountsValidations,
  ErrorMsg,
  FormInput,
  SubmitBtn,
} from 'components/accounts';

export const Signup = ({
  message = 'What team are you from?',
  callback = {},
  production = false,
  settoken,
  template,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  // zesty store
  const ZestyAPI = useZestyStore((state) => state.ZestyAPI);
  // intial state setup
  const [values, setValues] = React.useState({
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    formValid: false,
    isProduction: production,
    waiting: false,
  });

  // create user function, uses ZestyAPI
  async function createZestyUser(firstName, lastName, email, password) {
    // create the user
    let response = await ZestyAPI.createUser(
      firstName,
      lastName,
      email,
      password,
    );
    // if made successfully, login the user and store the token to cookies
    if (response?.data?.ZUID) {
      let loginResponse = await ZestyAPI.login(email, password);
      // this emulated accounts for login
      setCookie('APP_SID', loginResponse.meta.token, { domain: '.zesty.io' });
      settoken(loginResponse.meta.token);
      return response;
    }
    return false;
  }

  const formik = useFormik({
    validationSchema: accountsValidations.signUp,
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    },
    onSubmit: async (data) => {
      await submitForm(data);
      formik.resetForm();
    },
  });

  // user creation submission form
  const submitForm = async (data) => {
    // check if user created successfully
    let success = false;
    // waiting screen
    await setValues({
      ...values,
      waiting: true,
    });

    // on run if production
    if (production === true) {
      success = await createZestyUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
      );
    } else {
      let randomchars = (Math.random() + 1).toString(36).substring(7);
      success = { data: { ZUID: `5-TEST-${randomchars}` } };
    }
    if (success !== false) {
      callback(values, success);
    } else {
      ErrorMsg({ title: 'User failed to create' });
    }
  };

  return (
    <>
      {values.waiting == false && (
        <Container>
          <Grid
            container
            px={8}
            pt={20}
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Grid item xs={8} sx={{ height: 'auto' }} pr={8}>
              <Box pb={4} pt={4}>
                <Typography variant="h4" pb={1}>
                  Tell us about yourself
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  You can change these details later
                </Typography>
                <Box pt={4} pb={2} gap={4} display="flex" width={1} sx={{}}>
                  <Box width={1}>
                    <FormInput
                      customLabelVariant="body1"
                      color="secondary"
                      name={'firstName'}
                      customLabel="First Name"
                      formik={formik}
                    />
                  </Box>
                  <Box width={1}>
                    <FormInput
                      customLabelVariant="body1"
                      color="secondary"
                      name={'lastName'}
                      customLabel="Last Name"
                      formik={formik}
                    />
                  </Box>
                </Box>

                <Box pb={2}>
                  <FormInput
                    customLabelVariant="body1"
                    color="secondary"
                    name="email"
                    customLabel="Email Address"
                    formik={formik}
                    placeholder="e.g john@zesty.io"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <FormInput
                  customLabelVariant="body1"
                  color="secondary"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  customLabel="Password"
                  formik={formik}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography pt={2} variant="body1" color="text.secondary">
                  By continuing, you agree to the Zesty <u>terms</u> and{' '}
                  <u>privacy notice</u>.
                </Typography>
              </Box>

              <Box>
                <SubmitBtn loading={formik.isSubmitting}>
                  Create Account
                </SubmitBtn>
              </Box>
            </Grid>

            <Grid item xs={4} pt={6} sx={{}}>
              <ImgMediaCard template={template} />
            </Grid>
          </Grid>
        </Container>
      )}
      {values.waiting == true && (
        <Box paddingY={6} sx={{ textAlign: 'center' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  );
};

const ImgMediaCard = ({ template = {} }) => {
  const img = template?.placard_image?.data[0]?.url || FillerContent.image;
  const { name, subtitle } = template;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="340" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
