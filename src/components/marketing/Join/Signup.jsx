import * as React from 'react';
import {
  Container,
  Stack,
  Grid,
  OutlinedInput,
  FormHelperText,
  IconButton,
  Button,
  InputLabel,
  FilledInput,
  InputAdornment,
  Box,
  TextField,
  Typography,
} from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import { EmailOutlined } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useZestyStore } from 'store';
import { setCookie } from 'cookies-next';

function validateName(name) {
  return checkStringLength(name, 2);
}

function checkStringLength(str, len) {
  if (str.length >= len) {
    return true;
  }
  return false;
}
function checkStringForNumber(str) {
  return /\d/.test(str);
}

function checkStringForUppercase(str) {
  return /[A-Z]/.test(str);
}

function checkStringForLowercase(str) {
  return /[a-z]/.test(str);
}

function validatePassword(str) {
  return (
    checkStringForUppercase(str) &&
    checkStringForLowercase(str) &&
    checkStringForNumber(str) &&
    checkStringLength(str, 8)
  );
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = re.test(String(email).toLowerCase());
  return valid;
}

function PasswordHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'UPPERCASE, lowercase, number, and SP3CI@L CH@R please.';
    }

    return 'Minimum 8 mixed numbers, upper and lowercase characters.';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export const Signup = ({
  message = 'What team are you from?',
  callback = {},
  production = false,
}) => {
  // ref for submit button
  const submitButton = React.useRef(null);

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
      return response;
    }
    return false;
  }
  // updates state with changed values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // validate fields
  const validFirstName = validateName(values.firstName);
  const validLastName = validateName(values.lastName);
  const validPassword = validatePassword(values.password);
  const validEmail = validateEmail(values.email);

  // check if form is valid
  const checkAllValid =
    validFirstName && validLastName && validPassword && validEmail;

  const handleMouseDownPassword = () => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // user creation submission form
  const submitForm = async () => {
    // check if user created successfully
    let success = false;
    // waiting screen
    setValues({
      ...values,
      waiting: true,
    });
    // on run if production
    if (values.isProduction === true) {
      success = await createZestyUser(
        values.firstName,
        values.lastName,
        values.email,
        values.password,
      );
    } else {
      let randomchars = (Math.random() + 1).toString(36).substring(7);
      success = { data: { ZUID: `5-TEST-${randomchars}` } };
    }
    if (success !== false) {
      callback(values, success);
    } else {
      alert('user failed to create');
    }
  };
  return (
    <>
      {values.waiting == false && (
        <Container>
          <Box paddingY={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              {message}
            </Typography>
            <Typography variant="p">
              You'll need to create a Zesty account. We don't sell or giveaway
              your information.
            </Typography>
          </Box>
          <Box component="form" noValidate autoComplete="off" paddingX={15}>
            <Grid
              container
              gap={1}
              paddingY={2}
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="center"
            >
              <Grid md={5} lg={5} xs={12} item>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  helperText={validFirstName ? '' : 'Name too short.'}
                  error={!validFirstName}
                  onKeyUp={handleChange}
                />
              </Grid>
              <Grid md={5} lg={5} xs={12} item>
                <TextField
                  fullWidth
                  label="Last Name"
                  helperText={validLastName ? '' : 'Name too short.'}
                  name="lastName"
                  error={!validLastName}
                  onKeyUp={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              gap={1}
              container
              paddingY={1}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Grid md={5} lg={5} xs={12} item>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    fullWidth
                    type={'text'}
                    id="email"
                    label="Email"
                    name="email"
                    error={!validEmail}
                    onKeyUp={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailOutlined />
                      </InputAdornment>
                    }
                  />
                  {validEmail ? (
                    ''
                  ) : (
                    <FormHelperText>Valid email required</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid md={5} lg={5} xs={12} item>
                <FormControl fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="password"
                    label="Password"
                    type={values.showPassword ? 'text' : 'password'}
                    name="password"
                    error={!validPassword}
                    onChange={handleChange}
                    onKeyUp={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <PasswordHelperText />
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              gap={1}
              paddingY={2}
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="center"
            >
              <Button
                item
                variant="contained"
                ref={submitButton}
                disabled={!checkAllValid}
                onClick={submitForm}
              >
                Create account
              </Button>
            </Grid>
          </Box>
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
