import React from 'react';
import {
  Container,
  Stack,
  Button,
  Box,
  Grid,
  Typography,
  InputAdornment,
  useMediaQuery,
  IconButton,
  Link,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';

import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
// import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';
import {
  accountsValidations,
  ErrorMsg,
  FormInput,
  SuccessMsg,
} from 'components/accounts';
import LockIcon from '@mui/icons-material/Lock';
import { EmailOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';
import { setCookie } from 'cookies-next';
import { isProd } from 'utils';
import axios from 'axios';

export const SlideMessage = ({
  message = 'What team are you from?',
  buttonText,
  answerCallBack,
  hoverAnimation,
  image = '',
  exitButtonText = '',
  exitButtonAction = {},
}) => {
  const theme = useTheme();
  const { ZestyAPI } = useZestyStore();
  const [logos, setlogos] = React.useState([]);
  const [reviews, setreviews] = React.useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleSignUp = async (e) => {
    const { firstName, lastName, email, password } = e;
    await createZestyUser(firstName, lastName, email, password);
  };

  const handleLoginSuccess = async (sysID) => {
    setCookie('isAuthenticated', true);
    setCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', sysID, {
      domain: '.zesty.io',
    });
    SuccessMsg({ title: 'Success' });
    window.location.replace('/');
  };
  const handleLoginError = async (res) => {
    ErrorMsg({ title: 'Login Failed', text: res?.message });
    window.location.reload();
  };
  const handleSignUpSucess = async (res, email, password) => {
    if (res?.data?.ZUID) {
      const loginResponse = await ZestyAPI.login(email, password);
      loginResponse.code === 200 &&
        handleLoginSuccess(loginResponse?.data?.data);
      loginResponse.code !== 200 && handleLoginError(loginResponse);
    }
  };
  const handleSignUpError = (res) => {
    ErrorMsg({ title: 'Sign up failed', text: res?.error });
    window.location.reload();
  };
  const createZestyUser = async (firstName, lastName, email, password) => {
    // create the user
    const signUpResponse = await ZestyAPI.createUser(
      firstName,
      lastName,
      email,
      password,
    );

    signUpResponse?.data?.ZUID &&
      handleSignUpSucess(signUpResponse, email, password);
    !signUpResponse?.data?.ZUID && handleSignUpError(signUpResponse);
  };

  const getLogos = async () => {
    await axios
      .get('https://kfg6bckb-dev.webengine.zesty.io/-/logos.json')
      .then((e) => {
        setlogos(e.data);
      });
  };
  const getReviews = async () => {
    await axios.get('https://www.zesty.io/-/reviews.json').then((e) => {
      setreviews(e.data);
    });
  };
  React.useEffect(() => {
    getLogos();
    getReviews();
  }, []);

  const logoList = logos?.slice(0, 6)?.map((e) => {
    return e;
  });
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item lg={12} md={12} xs={12}>
        <Container sx={{ padding: '1em' }}>
          <Grid container paddingX={4}>
            <Grid item lg={6} md={6} xs={12}>
              {message}
              <Box paddingY={2} sx={{ textAlign: 'center' }}>
                <Stack
                  direction="row"
                  alignItems="left"
                  spacing={2}
                  justifyContent="left"
                >
                  {exitButtonText !== '' && (
                    <Button
                      size="large"
                      sx={{
                        color: theme.palette.common.grey,
                        fontSize: '2rem',
                      }}
                      variant="text"
                      onClick={() => exitButtonAction()}
                      onMouseOver={() => hoverAnimation('no')}
                    >
                      {exitButtonText}
                    </Button>
                  )}
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <CustomForm onSubmit={handleSignUp} />
            </Grid>
          </Grid>

          <Box sx={{ my: 10 }}>
            <SimpleCardLogo
              variant="outlined"
              heading_text={''}
              logoItems={logoList}
            />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

const CustomForm = ({ onSubmit = () => {} }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    validationSchema: accountsValidations.signUp,
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    },
    onSubmit: async (data) => {
      await onSubmit(data);
      formik.resetForm();
    },
  });
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Typography
        variant="h4"
        color="GrayText"
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Create your free account
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
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Stack>
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
      </Stack>
      <Stack alignItems={'center'}>
        <Stack my={3}>
          <Typography variant="body2" color="GrayText">
            Already a customer?{' '}
            <Link href="/login/" variant="body2" color={'#5B667D'}>
              Sign in
            </Link>
          </Typography>
        </Stack>
        <Stack width={'10rem'}>
          <LoadingButton
            type="submit"
            variant="contained"
            color="secondary"
            loading={formik.isSubmitting}
          >
            <Typography variant="body1">Sign Up</Typography>
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  );
};
