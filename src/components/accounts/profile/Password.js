import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import { accountsValidations } from '../validations';

export const Password = () => {
  const [showOldpass, setshowOldpass] = React.useState(false);
  const [showNewpass, setshowNewpass] = React.useState(false);
  const [showCNewpass, setshowCNewpass] = React.useState(false);
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);

  const handleSuccess = (data) => {
    console.log(data, 'success');
  };

  const handleError = (err) => {
    console.log(err, 'err');
  };

  const handleSubmit = async ({ oldPassword, newPassword }) => {
    const userZUID = userInfo.ZUID;
    const body = { oldPassword, password: newPassword };
    const params = '?action=updatePassword';

    const res = await ZestyAPI.updateUser(userZUID, body, params);
    !res.error && handleSuccess(res);
    res.error && handleError(res);
  };
  return (
    <Box>
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
