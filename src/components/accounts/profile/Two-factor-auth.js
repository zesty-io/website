import React from 'react';
import { Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useZestyStore } from 'store';
import { ErrorMsg, SuccessMsg } from '../ui';
import { accountsValidations } from '../validations';
import { FormInput } from '../ui/Input';

export const TwoFactorAuth = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);

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
    <Box>
      <Box> Two Factor Auth</Box>
      <Box paddingY={4}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <FormInput name={'areaCode'} formik={formik} />
          <FormInput name={'phoneNumber'} formik={formik} />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};
