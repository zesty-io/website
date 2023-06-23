import { LoadingButton } from '@mui/lab';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useZestyStore } from 'store';
import { AccountsHeader, FormInput } from '../../../components/accounts/ui';
import { accountsValidations } from '../../../components/accounts/validations';
import { useSnackbar } from 'notistack';
import { notistackMessage } from 'utils';
import { useState } from 'react';

const url =
  'https://seeklogo.com/images/A/authy-logo-5598145895-seeklogo.com.png?v=637714439950000000';

export const Security = ({ getUser }) => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const isAuthyEnable = userInfo?.authyEnabled;
  const { enqueueSnackbar } = useSnackbar();
  const [isDisablingAuthy, setIsDisablingAuthy] = useState(false);

  const handleSubmit = async ({ oldPassword, newPassword }) => {
    const userZUID = userInfo.ZUID;
    const body = { oldPassword, password: newPassword };
    const params = '?action=updatePassword';
    const response = await ZestyAPI.updateUser(userZUID, body, params);

    await notistackMessage(
      enqueueSnackbar,
      {
        message: 'Successfully changed password!',
        callback: async () => {
          window.location.replace('/logout');
        },
      },
      response,
    );
  };

  const formik = useFormik({
    validationSchema: accountsValidations.twoFactorAuth,
    initialValues: {
      areaCode: '',
      phoneNumber: '',
    },
    onSubmit: async (values) => {
      await authTwoFactor(values);
      formik.resetForm();
    },
  });

  const formikResetPassword = useFormik({
    validationSchema: accountsValidations.password,
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    onSubmit: async (values) => {
      await handleSubmit(values);
      formikResetPassword.resetForm();
    },
  });

  const authTwoFactor = async ({ areaCode, phoneNumber }) => {
    const userZUID = userInfo.ZUID;
    const body = {
      authyPhoneCountryCode: areaCode,
      authyPhoneNumber: phoneNumber,
      submitted: false,
    };
    const params = '?action=enableAuthy';
    const response = await ZestyAPI.updateUser(userZUID, body, params);
    await notistackMessage(
      enqueueSnackbar,
      {
        message: 'Successfully enabled authy!',
        callback: async () => await getUser(),
      },
      response,
    );
  };

  const disableAuthy = async () => {
    setIsDisablingAuthy(true);
    const userZUID = userInfo.ZUID;
    const body = {
      authyEnabled: false,
    };

    const response = await ZestyAPI.updateUser(userZUID, body);
    await notistackMessage(
      enqueueSnackbar,
      {
        message: 'Successfully disabled authy!',
      },
      response,
    );
    setIsDisablingAuthy(false);
    await getUser();
  };

  return (
    <>
      <AccountsHeader
        title="Security"
        description="Manage your Authentication"
      />
      <Grid container px={4} spacing={2}>
        <Grid item lg={6} xs={12}>
          <Paper boxShadow={4} sx={{ p: 4, height: '100%' }}>
            <form noValidate onSubmit={formikResetPassword.handleSubmit}>
              <Stack spacing={2}>
                <Typography variant="h6">Change Password</Typography>

                <FormInput
                  name="oldPassword"
                  type="password"
                  customLabel="Old Password"
                  formik={formikResetPassword}
                />
                <FormInput
                  name="newPassword"
                  type="password"
                  customLabel="New Password"
                  formik={formikResetPassword}
                />
                <FormInput
                  name="confirmNewPassword"
                  type="password"
                  customLabel="Confirm New Password"
                  formik={formikResetPassword}
                />

                <LoadingButton
                  variant="contained"
                  type="submit"
                  fullWidth
                  loading={formikResetPassword.isSubmitting}
                >
                  Submit
                </LoadingButton>
              </Stack>
            </form>
          </Paper>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Paper
            boxShadow={4}
            sx={{
              p: 4,
              height: '100%',
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h6">Two Factor Authentication</Typography>
              <Typography color="text.secondary">
                Information on the 2FA setup and the phone number that should be
                used.
              </Typography>
              <Typography color="text.secondary">
                How to install the app and additional information
              </Typography>

              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://authy.com/what-is-2fa/"
                endIcon={<ArrowRightAltIcon color="primary" />}
                sx={{ alignSelf: 'end' }}
              >
                Learn More
              </Button>
            </Stack>

            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
                <Stack mt={2} direction="row" justifyContent="space-between">
                  <Typography variant="h6">Phone number for 2FA</Typography>
                  <img src={url} alt="zesty auth" height="40" width="40" />
                </Stack>

                {isAuthyEnable ? (
                  <>
                    <Stack direction="row" spacing={1}>
                      <FormInput
                        label="Country Code"
                        name="areaCode"
                        formik={formik}
                      />
                      <FormInput
                        label="Phone Number"
                        name="phoneNumber"
                        formik={formik}
                      />
                    </Stack>

                    <LoadingButton
                      disabled={true}
                      variant="contained"
                      loading={formik.isSubmitting}
                      fullWidth
                      type="submit"
                    >
                      Enable Two Factor Authentication
                    </LoadingButton>
                  </>
                ) : (
                  <>
                    <Typography color="text.secondary">
                      {userInfo?.authyPhoneCountryCode}
                      {userInfo?.authyPhoneNumber}
                    </Typography>

                    <LoadingButton
                      variant="contained"
                      fullWidth
                      type="submit"
                      loading={isDisablingAuthy}
                      onClick={disableAuthy}
                    >
                      Disable Two Factor Authentication
                    </LoadingButton>
                  </>
                )}
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
