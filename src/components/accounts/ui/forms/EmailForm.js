import { Box } from '@mui/material';
import { accountsValidations } from 'components/accounts/validations';
import { useFormik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import { SubmitBtn } from '../buttons';
import { ErrorMsg, SuccessMsg } from '../dialogs';
import { FormInput } from '../input';

const CustomEmailForm = ({ formik }) => {
  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'email'} formik={formik} />
        <FormInput name={'name'} label="Description" formik={formik} />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

export const EmailForm = ({ getUserEmails }) => {
  const { ZestyAPI } = useZestyStore((state) => state);

  const handleAddEmailSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Email Added' });
  };
  const handleAddEmailErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };
  const addEmail = async ({ name, email }) => {
    console.log(email, name);
    const res = await ZestyAPI.addUnverifiedEmail(name, email);
    !res.error && handleAddEmailSuccess(res);
    res.error && handleAddEmailErr(res);
    await getUserEmails();
  };

  const formik = useFormik({
    validationSchema: accountsValidations.addEmail,
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async (values) => {
      await addEmail(values);
      formik.resetForm();
    },
  });

  return (
    <Box>
      <CustomEmailForm formik={formik} />
    </Box>
  );
};
