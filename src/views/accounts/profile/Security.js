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
import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import {
  ErrorMsg,
  FormInput,
  SuccessMsg,
} from '../../../components/accounts/ui';
import { accountsValidations } from '../../../components/accounts/validations';

export const Security = () => {
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

  return (
    <Grid sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
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
          {({
            values,
            errors,
            handleSubmit,
            dirty,
            isValid,
            handleChange,
            handleBlur,
            setFieldValue,
            touched,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
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
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
      <Box>
        <Typography variant="h4">Two Factor Authentication</Typography>
        <Box paddingY={4}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <FormInput name={'areaCode'} formik={formik} />
            <FormInput name={'phoneNumber'} formik={formik} />
            <Button
              color="primary"
              variant="contained"
              disabled={formik.isSubmitting}
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};
