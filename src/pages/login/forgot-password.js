import { AlternateEmail } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Box,
  Container,
  InputAdornment,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { accountsValidations, FormInput } from 'components/accounts';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useZestyStore } from 'store';
import { useTheme } from '@mui/material/styles';

const ForgotPassword = () => {
  document.title = 'Forgot Password';

  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const { ZestyAPI } = useZestyStore((state) => state);
  const formik = useFormik({
    validationSchema: accountsValidations.forgotPassword,
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      const response = await ZestyAPI.userForgotPassword(values.email);
      if (response?.data || response?.meta) {
        setResponse({
          status: 'ok',
          message: `Your request has been submitted. If a Zesty account exists with this email, you will receive an email to complete your password reset.`,
        });
      } else {
        setResponse({
          status: 'bad',
          message: `Something went wrong!`,
        });
      }
      formik.resetForm();
      setLoading(false);
    },
  });

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
        <Stack alignItems="center">
          <img
            src={
              theme.palette.mode === 'light'
                ? 'https://brand.zesty.io/zesty-io-logo-vertical.svg'
                : 'https://brand.zesty.io/zesty-io-logo-vertical-light-color.svg'
            }
            alt="logo"
            height="150px"
            width="150px"
          />
          <Paper elevation={5} sx={{ mt: 5 }}>
            <Stack spacing={2} p={5} maxWidth="660px">
              <Typography color="text.secondary">
                Enter the email associated with your account and we will send an
                email with instructions for resetting your password.
              </Typography>
              <form noValidate onSubmit={formik.handleSubmit}>
                <FormInput
                  color="secondary"
                  name="email"
                  customLabel="Email Address"
                  formik={formik}
                  placeholder="e.g john@zesty.io"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail />
                      </InputAdornment>
                    ),
                  }}
                />
                {response?.status && (
                  <Alert
                    onClose={() => setResponse({})}
                    color={response?.status === 'ok' ? 'success' : 'error'}
                    severity={response?.status === 'ok' ? 'success' : 'error'}
                    sx={{ mb: 2 }}
                  >
                    {response?.message}
                  </Alert>
                )}

                <LoadingButton
                  type="submit"
                  startIcon={<SendIcon />}
                  variant="contained"
                  color="secondary"
                  size="small"
                  loading={loading}
                  fullWidth
                >
                  SEND PASSWORD RESET EMAIL
                </LoadingButton>
              </form>
            </Stack>
          </Paper>
          <Link
            underline="none"
            href="/login/"
            alignSelf="start"
            mt={2}
            color="secondary"
          >
            Return to Sign In?
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
