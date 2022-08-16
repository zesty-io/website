import { Box, Button } from '@mui/material';
import { accountsValidations, FormInput } from 'components/accounts';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const WebhookForm = ({ onSubmit }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.createWebhook,
    initialValues: {
      scopedResource: '',
      parentResourceZUID: '',
      resource: '',
      eventAction: '',
      URL: '',
      contentType: '',
      authorization: '',
      text: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      // const val = { ...values, ZUID: data.ZUID };
      await onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'scopedResource'} formik={formik} />
        <FormInput name={'parentResourceZUID'} formik={formik} />
        <FormInput name={'resource'} formik={formik} />
        <FormInput name={'eventAction'} formik={formik} />
        <FormInput name={'method'} formik={formik} />
        <FormInput name={'URL'} formik={formik} />
        <FormInput name={'contentType'} formik={formik} />
        <FormInput name={'authorization'} formik={formik} />
        <FormInput name={'text'} formik={formik} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export const Webhooks = ({ createWebhook }) => {
  const handleAddWebhookModal = () => {
    MySwal.fire({
      title: 'Invite Team',
      html: <WebhookForm onSubmit={createWebhook} />,
      showConfirmButton: false,
    });
  };
  return (
    <Box>
      <Button
        color="primary"
        variant="contained"
        onClick={handleAddWebhookModal}
      >
        Add Webhooks
      </Button>
    </Box>
  );
};
