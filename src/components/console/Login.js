import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useZestyStore } from 'store';
import * as helpers from 'utils';
import withReactContent from 'sweetalert2-react-content';
import { useSnackbar } from 'notistack';
import dayjs from 'dayjs';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { notistackMessage } from 'utils';
import { accountsValidations } from 'components/accounts';

import Swal from 'sweetalert2';

import dynamic from 'next/dynamic';
import { SSOButton, SSOButtonGroup } from '@zesty-io/material';

const FormInput = dynamic(() =>
  import('components/accounts').then((e) => e.FormInput),
);

const AlternateEmailIcon = dynamic(() =>
  import('@mui/icons-material/AlternateEmail'),
);
const PlayArrowIcon = dynamic(() => import('@mui/icons-material/PlayArrow'));
const ImportContactsOutlinedIcon = dynamic(() =>
  import('@mui/icons-material/ImportContactsOutlined'),
);
const LoginIcon = dynamic(() => import('@mui/icons-material/Login'));
const LoadingButton = dynamic(() => import('@mui/lab/LoadingButton'));

const MySwal = withReactContent(Swal);

const Login = ({ content, userEmail }) => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleCookieAndRedirect = (sysID) => {
    setCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', sysID, {
      domain: '.zesty.io',
    });
    MySwal.close();
    setCookie('isAuthenticated', true);

    const prevUrl = window.document.referrer.replace(/^.*\/\/[^\/]+/, '');
    const sessionPrevUrl = sessionStorage.getItem('prevUrl');

    sessionStorage.removeItem('prevUrl');
    // means first appearance of /docsOverview/
    if (prevUrl === sessionPrevUrl || prevUrl.indexOf('/docs/') === 0) {
      window.location.href = prevUrl;
    } else {
      window.location.href = '/dashboard/';
    }
  };
  const triggerAuto2FA = (sysID) => {
    const auto2FAInterval = setInterval(async () => {
      await auto2FA();
    }, 3000);

    async function auto2FA() {
      const response = await ZestyAPI.verify2FAAuto();
      if (response.code === 200) {
        handleCookieAndRedirect(sysID);
        clearInterval(auto2FAInterval);
      } else if (response.code > 299) {
        clearInterval(auto2FAInterval);
      }
    }
  };

  const TwoFactorAuth = ({ sysID }) => {
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
              handleCookieAndRedirect(sysID);

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
        <Typography mb={2}>
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

  const handleShow2FA = async (sysID) => {
    await ZestyAPI.setToken(sysID);
    triggerAuto2FA(sysID);

    MySwal.fire({
      title: `Enter Authy Token`,
      showConfirmButton: false,
      html: <TwoFactorAuth sysID={sysID} />,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  };

  const handleLogin = async (data) => {
    setLoading(true);
    const { email, password } = data;
    const res = await ZestyAPI.login(email, password);

    if (res.code === 202) await handleShow2FA(res?.meta?.token);
    else {
      notistackMessage(
        enqueueSnackbar,
        {
          message: res.message,
          callback: () => {
            handleCookieAndRedirect(res?.data?.data);
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
      email: userEmail,
      password: '',
    },
    onSubmit: async (values) => {
      await handleLogin(values);
    },
  });

  const is2Xl = useMediaQuery(theme.breakpoints.up('xl2'));

  const scrollBarStyle = `::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}`;

  return (
    <Grid height="100vh" container overflow={'hidden'}>
      <style>{scrollBarStyle}</style>
      <Grid
        item
        xs={12}
        md={3.5}
        xl={3}
        sx={{
          px: { xs: '40px', xl: '48px' },
          pb: { xs: '12px', xl: '24px' },
          pt: { xs: '48px', xl: '48px' },
        }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        height={1}
      >
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
              height={32}
              width={115}
            />
          </Link>
        </Stack>

        <Stack>
          <Stack mb={'8px'}>
            <Typography
              variant="h4"
              fontSize={{ xs: '24px', xl: '24px' }}
              fontWeight={700}
              whiteSpace={'nowrap'}
            >
              Hi, Welcome Back!
            </Typography>
            <Typography
              color="text.secondary"
              fontSize={12}
              whiteSpace={'nowrap'}
            >
              Start empowering the world with content again
            </Typography>
          </Stack>

          <Stack>
            <SSOButtonGroup
              authServiceUrl={'https://auth.api.dev.zesty.io'}
              onSuccess={() => {
                window.location.href = '/dashboard/';
              }}
              onError={(err) => {}}
            >
              <SSOButton service="google" />
              <SSOButton service="azure" />
              <SSOButton service="github" />
            </SSOButtonGroup>
            <Divider>
              <Typography
                sx={{ color: '#475467', fontSize: '14px', my: '16px' }}
              >
                OR
              </Typography>
            </Divider>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack display={'flex'} flexDirection={'column'} spacing={'16px'}>
                <FormInput
                  size="small"
                  name="email"
                  customLabel={
                    <Typography
                      fontSize={{ xs: '14px' }}
                      sx={{ fontWeight: '600 !important', mb: '4px' }}
                    >
                      Email address
                    </Typography>
                  }
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
                  size="small"
                  color="secondary"
                  name="password"
                  type="password"
                  formik={formik}
                  customLabel={
                    <Typography
                      fontSize={{ xs: '14px' }}
                      sx={{ fontWeight: '600' }}
                    >
                      Password
                    </Typography>
                  }
                />
                <Link
                  href="/login/forgot-password/"
                  alignSelf="start"
                  mb={3}
                  color="secondary"
                >
                  <Typography fontSize={'12px'}>Forgot Password?</Typography>
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
              </Stack>
            </form>
          </Stack>
        </Stack>

        <Stack alignItems="center" display={'flex'}>
          <Typography variant="caption" color="text.secondary">
            © {dayjs().year()} Zesty.io, inc. All rights reserved.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        md={8.5}
        xl={9}
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
          height={1}
          sx={{
            px: { xs: '120px', xl: '120px' },
            py: '48px',
          }}
        >
          <Stack
            textAlign={is2Xl ? 'center' : 'start'}
            justifyContent={'start'}
            width={1}
          >
            <Typography
              variant="h5"
              color="common.white"
              fontSize={{ xs: '24px', xl: '32px' }}
              fontWeight={'700'}
              mb={'8px'}
            >
              {content?.title}
            </Typography>
            <Typography color="common.white" fontSize={'16px'}>
              {content?.description}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={is2Xl ? 'center' : 'start'}
            width={1}
          >
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
              size="small"
            >
              Read Docs
            </Button>
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
              size="small"
            >
              Watch Demo
            </Button>
          </Stack>

          <Stack
            sx={{
              objectFit: 'contain',
              maxWidth: { xs: 800, xl: 800 },
              maxHeight: { xs: 500, xl: 500 },
            }}
          >
            {content?.image?.data[0]?.url.includes('mp4') ? (
              <Stack
                component={'video'}
                width={1}
                autoPlay={true}
                muted={true}
                loop={true}
                alt="Zesty.io Media"
                title="Zesty.io Media"
              >
                <source src={content?.image?.data[0]?.url} type="video/mp4" />
              </Stack>
            ) : (
              <img
                src={content?.image?.data[0]?.url}
                alt="Zesty.io Media"
                width="100%"
                height="100%"
              />
            )}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
