import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { setCookies } from 'cookies-next';
import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import {
  Card2Fa,
  ErrorMsg,
  FormInput,
  SuccessMsg,
} from '../../../components/accounts/ui';
import { accountsValidations } from '../../../components/accounts/validations';

const url =
  'https://seeklogo.com/images/A/authy-logo-5598145895-seeklogo.com.png?v=637714439950000000';
const TwoFaForm = ({ formik, isAuthyEnable, disableAuthy, userInfo = {} }) => {
  const { authyPhoneCountryCode, authyPhoneNumber } = userInfo;
  const handleDisableAuthy = () => {
    disableAuthy();
  };
  return (
    <Box>
      <Card2Fa>
        {!isAuthyEnable ? (
          <form noValidate onSubmit={formik.handleSubmit}>
            <Typography variant="h6">Phone number for 2FA</Typography>
            <Box display={'flex'} gap={2} marginY={1}>
              <Box sx={{ width: '7rem' }}>
                <FormInput
                  label={'Area Code'}
                  name={'areaCode'}
                  formik={formik}
                />
              </Box>
              <Box>
                <FormInput
                  label={'Phone Number'}
                  name={'phoneNumber'}
                  formik={formik}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                color="primary"
                variant="contained"
                disabled={formik.isSubmitting}
                fullWidth
                type="submit"
                sx={{ width: '20rem' }}
              >
                Enable Two Factor Authentication
              </Button>
              <img src={url} alt="zesty auth" height={'40'} width="40" />
            </Box>
          </form>
        ) : (
          <Box>
            <Box marginBottom={2}>
              <Typography variant="h5">Phone number enable for 2FA</Typography>
              <Typography variant="p" color={'text.secondary'}>
                +{authyPhoneCountryCode}
                {authyPhoneNumber}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ width: '20rem' }}
                onClick={handleDisableAuthy}
              >
                Disable Two Factor Authentication
              </Button>
              <img src={url} alt="zesty auth" height={'40'} width="40" />
            </Box>
          </Box>
        )}
      </Card2Fa>
    </Box>
  );
};

const ChangePassForm = ({
  handleSubmit,
  showOldpass,
  showCNewpass,
  showNewpass,
  setshowCNewpass,
  setshowOldpass,
  setshowNewpass,
}) => {
  return (
    <Box>
      <Typography variant="h4">Change Password</Typography>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={accountsValidations.password}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, setFieldValue, touched, isSubmitting }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <TextField
                  fullWidth
                  id="oldPassword"
                  name="oldPassword"
                  label="Old Password"
                  onChange={(event) =>
                    setFieldValue('oldPassword', event.target.value)
                  }
                  error={touched.oldPassword && Boolean(errors.oldPassword)}
                  helperText={touched.oldPassword && errors.oldPassword}
                  type={showOldpass ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setshowOldpass(!showOldpass)}
                        >
                          {!showOldpass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  onChange={(event) =>
                    setFieldValue('newPassword', event.target.value)
                  }
                  error={touched.newPassword && Boolean(errors.newPassword)}
                  helperText={touched.newPassword && errors.newPassword}
                  type={showNewpass ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setshowNewpass(!showNewpass)}
                        >
                          {!showNewpass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  onChange={(event) =>
                    setFieldValue('confirmNewPassword', event.target.value)
                  }
                  error={
                    touched.confirmNewPassword &&
                    Boolean(errors.confirmNewPassword)
                  }
                  helperText={
                    touched.confirmNewPassword && errors.confirmNewPassword
                  }
                  type={showCNewpass ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setshowCNewpass(!showCNewpass)}
                        >
                          {!showCNewpass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export const Security = ({ getUser }) => {
  const [showOldpass, setshowOldpass] = React.useState(false);
  const [showNewpass, setshowNewpass] = React.useState(false);
  const [showCNewpass, setshowCNewpass] = React.useState(false);
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);

  const handleSuccess = (data) => {
    console.log(data, 'success');
    SuccessMsg({
      title: 'Success',
      action: () => {
        window.location.reload();
        setCookies('isAuthenticated', 'false');
      },
    });
  };

  const handleError = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };

  const handleSubmit = async ({ oldPassword, newPassword }) => {
    const userZUID = userInfo.ZUID;
    const body = { oldPassword, password: newPassword };
    const params = '?action=updatePassword';

    const res = await ZestyAPI.updateUser(userZUID, body, params);
    !res.error && handleSuccess(res);
    res.error && handleError(res);
  };

  const handleTwoFactorSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Success' });
  };
  const handleTwoFactorErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };

  const handleDisableAuthySuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Success' });
  };
  const handleDisableAuthyError = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };
  const authTwoFactor = async ({ areaCode, phoneNumber }) => {
    const userZUID = userInfo.ZUID;
    const body = {
      authyPhoneCountryCode: areaCode,
      authyPhoneNumber: phoneNumber,
      submitted: false,
    };
    const params = '?action=enableAuthy';
    const res = await ZestyAPI.updateUser(userZUID, body, params);

    !res.error && handleTwoFactorSuccess(res);
    res.error && handleTwoFactorErr(res);
    await getUser();
  };

  const disableAuthy = async () => {
    const userZUID = userInfo.ZUID;
    const body = {
      authyEnabled: false,
    };
    const res = await ZestyAPI.updateUser(userZUID, body);
    !res.error && handleDisableAuthySuccess(res);
    res.error && handleDisableAuthyError(res);
    await getUser();
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

  const isAuthyEnable = userInfo?.authyEnabled;

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <ChangePassForm
          handleSubmit={handleSubmit}
          showOldpass={showOldpass}
          showCNewpass={showCNewpass}
          showNewpass={showNewpass}
          setshowCNewpass={setshowCNewpass}
          setshowOldpass={setshowOldpass}
          setshowNewpass={setshowNewpass}
        />
      </Grid>
      <Grid item xs={6}>
        <TwoFaForm
          formik={formik}
          isAuthyEnable={isAuthyEnable}
          disableAuthy={disableAuthy}
          userInfo={userInfo}
        />
      </Grid>
    </Grid>
  );
};
