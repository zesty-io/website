import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { accountsValidations, FormInput } from 'components/accounts';
import EditOffIcon from '@mui/icons-material/EditOff';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useZestyStore } from 'store';

const ResetPasswordConfirm = ({ address, token }) => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const formik = useFormik({
    validationSchema: accountsValidations.resetPassword,
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      const response = await ZestyAPI.userResetPasswordConfirm(
        address,
        values.newPassword,
        token,
      );

      if (response?.data || response?.meta) {
        setResponse({
          status: 'ok',
          message: response.message,
        });
      } else {
        setResponse({
          status: 'bad',
          message: response.message,
        });
      }
      formik.resetForm();
      setLoading(false);
    },
  });

  const theme = useTheme();
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
                Minimum 8 characters. At least one number. A combination of
                lower and uppercase letters.
              </Typography>
              <form noValidate onSubmit={formik.handleSubmit}>
                <FormInput
                  color="secondary"
                  name="newPassword"
                  customLabel="New Password"
                  formik={formik}
                  placeholder="Enter your new password"
                  type="password"
                />
                <FormInput
                  color="secondary"
                  name="confirmNewPassword"
                  customLabel="Confirm New Password"
                  formik={formik}
                  placeholder="Repeat your new password"
                  type="password"
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

                <Stack spacing={2} direction="row" alignItems="center">
                  <LoadingButton
                    type="submit"
                    startIcon={<EditOffIcon />}
                    variant="contained"
                    color="secondary"
                    size="small"
                    loading={loading}
                    fullWidth
                  >
                    RESET PASSWORD
                  </LoadingButton>
                  <Button
                    startIcon={<DoNotDisturbIcon />}
                    href="/login/"
                    color="secondary"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default ResetPasswordConfirm;

export async function getServerSideProps(context) {
  const { address, token } = context.query;

  return {
    props: {
      address: address || '',
      token: token || '',
    },
  };
}
