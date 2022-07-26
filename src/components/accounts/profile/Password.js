import { Box, Button, TextField } from '@mui/material';
import { Field, Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import * as yup from 'yup';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const validation = yup.object().shape({
  oldPassword: yup
    .string()
    // .min(8, 'Must be atleast 8 Characters')
    .required('Password is required'),
  newPassword: yup
    .string()
    // .matches(lowercaseRegex, 'One lowercase required!')
    // .matches(uppercaseRegex, 'One uppercase required!')
    // .matches(numericRegex, 'One number required!')
    // .min(8, 'Must be atleast 8 Characters')
    .required('Password is required'),
  confirmNewPassword: yup.string().required('Password is required'),
  // .oneOf([yup.ref('newPassword')], 'Password does not match'),
});

export const Password = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);

  const handleSuccess = (data) => {
    console.log(data, 'success');
  };

  const handleError = (err) => {
    console.log(err, 'err');
  };

  const handleSubmit = async ({ oldPassword, newPassword }) => {
    console.log(oldPassword, newPassword);
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
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleSubmit,
          dirty,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="oldPassword"
                name="oldPassword"
                label="Old Password"
                onChange={(event) =>
                  setFieldValue('oldPassword', event.target.value)
                }
              />
              <TextField
                fullWidth
                id="newPassword"
                name="newPassword"
                label="New Password"
                onChange={(event) =>
                  setFieldValue('newPassword', event.target.value)
                }
              />
              <TextField
                fullWidth
                id="confirmNewPassword"
                name="confirmNewPassword"
                label="Confirm New Password"
                onChange={(event) =>
                  setFieldValue('confirmNewPassword', event.target.value)
                }
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
