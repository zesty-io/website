import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { accountsValidations, FormInput } from 'components/accounts';
import { setCookie } from 'cookies-next';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useZestyStore } from 'store';
import * as helpers from 'utils';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useSnackbar } from 'notistack';
import dayjs from 'dayjs';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import msLogin from '../../../public/assets/images/ms-symbollockup_signin_light.svg';
import { notistackMessage } from 'utils';

const MySwal = withReactContent(Swal);

const Login = ({ content }) => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleCookieAndRedirect = (res) => {
    if (res)
      setCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', res.data.data, {
        domain: '.zesty.io',
      });

    setCookie('isAuthenticated', true);
    setCookie('isUser', true);
    window.location.replace('/instances');
  };

  const triggerAuto2FA = () => {
    setInterval(async () => {
      const response = await ZestyAPI.verify2FAAuto();
      if (response.code === 200) {
        handleCookieAndRedirect();
      }
    }, 3000);
  };

  const TwoFactorAuth = () => {
    const [loading2FA, setLoading2FA] = useState(false);
    const formik = useFormik({
      initialValues: {
        otp: '',
      },
      validationSchema: accountsValidations.otpTwoFactor,
      onSubmit: async (values) => {
        setLoading2FA(true);
        const response = await ZestyAPI.verify2FA(values.otp);

        notistackMessage(
          enqueueSnackbar,
          {
            message: response.message,
            callback: async () => {
              await ZestyAPI.verify();
              handleCookieAndRedirect();

              MySwal.close();
              formik.resetForm();
              setLoading2FA(false);
            },
          },
          response,
          {
            hideSuccessMessage: true,
          },
        );

        setLoading2FA(false);
      },
    });

    return (
      <>
        <Typography>
          To sign in, open the{' '}
          <Link target="_blank" href="https://authy.com">
            Authy
          </Link>{' '}
          app on your mobile device.
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit}>
          <FormInput
            label="Enter your authy token"
            name="otp"
            formik={formik}
            sx={{ mt: 2 }}
          />
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            loading={loading2FA}
          >
            Submit
          </LoadingButton>
        </form>
      </>
    );
  };

  const handleShow2FA = async (res) => {
    setCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', res.meta.token, {
      domain: '.zesty.io',
    });
    await ZestyAPI.setToken(res.meta.token);
    triggerAuto2FA();

    MySwal.fire({
      title: `Enter Authy Token`,
      showConfirmButton: false,
      html: <TwoFactorAuth />,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  };

  const handleLogin = async (data) => {
    setLoading(true);
    const { email, password } = data;
    const res = await ZestyAPI.login(email, password);

    if (res.code === 202) await handleShow2FA(res);
    else {
      notistackMessage(
        enqueueSnackbar,
        {
          message: res.message,
          callback: () => {
            handleCookieAndRedirect(res);
          },
        },
        res,
        {
          hideSuccessMessage: true,
        },
      );
    }

    setLoading(false);
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
    <Grid height="100vh" container>
      <Grid item xs={12} md={4}>
        <Stack px={4} height="100%">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/">
              <img
                src={
                  theme.palette.mode === 'light'
                    ? 'https://brand.zesty.io/zesty-io-logo-horizontal.svg'
                    : 'https://brand.zesty.io/zesty-io-logo-horizontal-light-color.svg'
                }
                height={150}
                width={150}
              />
            </Link>
          </Stack>

          <Stack mt={10} mb={15}>
            <Stack>
              <Typography variant="h4">Hi, Welcome Back!</Typography>
              <Typography mb={3} color="text.secondary">
                Start empowering the world with content again
              </Typography>
            </Stack>

            <Stack>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack>
                  <FormInput
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
                  <FormInput
                    color="secondary"
                    name="password"
                    type="password"
                    customLabel="Password"
                    formik={formik}
                  />
                  <Link
                    href="/login/forgot-password/"
                    alignSelf="end"
                    mb={3}
                    color="secondary"
                  >
                    Forgot Password?
                  </Link>
                  <LoadingButton
                    type="submit"
                    startIcon={<LoginIcon />}
                    variant="contained"
                    color="secondary"
                    size="large"
                    loading={loading}
                  >
                    Log In
                  </LoadingButton>
                  <Divider sx={{ py: 2 }}>Or</Divider>

                  <Link href={`${ZestyAPI?.authAPIURL}/azure/login`}>
                    <img src={msLogin?.src} alt="Microsoft Single Sign On" />
                  </Link>
                </Stack>
              </form>
            </Stack>
          </Stack>

          <Stack mb={3} alignItems="center">
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="subtitle2">
                {`Don't have an account yet? `}
                <Link href="#" color="secondary">
                  Try for free!
                </Link>
              </Typography>
            </Stack>

            <Typography variant="caption" color="text.secondary">
              © {dayjs().year()} Zesty.io, inc. All rights reserved.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        md={8}
        bgcolor={(theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.zesty.zestyDarkerBlue
            : theme.palette.secondary.main
        }
        display={isMD ? 'none' : 'block'}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={4}
          px={4}
          py={5}
          height="100%"
        >
          <Stack textAlign="center">
            <Typography variant="h5" color="common.white" mb={2}>
              {content?.title}
            </Typography>
            <Typography color="common.white">{content?.description}</Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              target="_blank"
              href={content?.video_link}
              variant="contained"
              sx={{
                px: 4,
                bgcolor: 'common.white',
                color: 'black',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'white',
                },
              }}
              startIcon={<PlayArrowIcon />}
              size="large"
            >
              Watch Demo
            </Button>
            <Button
              target="_blank"
              href={content?.docs_link}
              variant="outlined"
              sx={{
                px: 4,

                color: 'common.white',
                borderColor: 'common.white',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                  border: '1px solid white',
                },
              }}
              startIcon={<ImportContactsOutlinedIcon />}
              size="large"
            >
              Read Docs
            </Button>
          </Stack>

          <Stack px={10} pb={5}>
            <img
              src={content?.image?.data[0]?.url}
              width="100%"
              height="100%"
            />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
