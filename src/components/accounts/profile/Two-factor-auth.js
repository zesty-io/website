import React from 'react';
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useZestyStore } from 'store';

const validation = yup.object().shape({
  areaCode: yup.string().required('This is required'),
  phoneNumber: yup.string().required('Email address is required*'),
});

export const TwoFactorAuth = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);

  const handleTwoFactorSuccess = (data) => {
    console.log(data, 'succ');
  };
  const handleTwoFactorErr = (err) => {
    console.log(err, 'err');
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
  return (
    <Box>
      <Box> Two Factor Auth</Box>

      <Formik
        initialValues={{
          areaCode: '',
          phoneNumber: '',
        }}
        validationSchema={validation}
        onSubmit={authTwoFactor}
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
                id="areaCode"
                name="areaCode"
                label="Area Code"
                onChange={(event) =>
                  setFieldValue('areaCode', event.target.value)
                }
              />
              <TextField
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                onChange={(event) =>
                  setFieldValue('phoneNumber', event.target.value)
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
