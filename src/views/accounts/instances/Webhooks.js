import { Box, Button, Grid } from '@mui/material';
import {
  accountsValidations,
  FormAutoComplete,
  FormInput,
  FormSelect,
} from 'components/accounts';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { accounts } from 'components/accounts/constants';

const MySwal = withReactContent(Swal);

const WebhookForm = ({ onSubmit, scopedResourcesOptions }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.createWebhook,

    initialValues: {
      scopedResource: '',
      parentResourceZUID: '',
      resource: '',
      method: '',
      eventAction: '',
      URL: '',
      contentType: '',
      authorization: '',
      text: '',
    },
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormAutoComplete
              label="Scope Resource"
              name={'scopedResource'}
              formik={formik}
              options={scopedResourcesOptions}
            />
            <FormInput name={'Parent Resource ZUID'} formik={formik} />
            <FormInput name={'resource'} formik={formik} />
            <FormSelect
              label="Event Action"
              name={'eventAction'}
              formik={formik}
              options={accounts.eventActionOptions}
            />
            <FormSelect
              label="Method"
              name={'method'}
              formik={formik}
              options={accounts.methodOptions}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput name={'URL'} formik={formik} />
            <FormSelect
              label="Content Type"
              name={'contentType'}
              formik={formik}
              options={accounts.contentTypeOptions}
            />
            <FormInput name={'authorization'} formik={formik} />
            <FormInput name={'text'} formik={formik} />
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export const Webhooks = ({
  createWebhook,
  scopedResourcesOptions,
  isInstanceOwner,
}) => {
  const handleAddWebhookModal = () => {
    MySwal.fire({
      title: 'Create Webhook',
      html: (
        <WebhookForm
          onSubmit={createWebhook}
          scopedResourcesOptions={scopedResourcesOptions}
        />
      ),
      showConfirmButton: false,
    });
  };
  return (
    <Box>
      {isInstanceOwner && (
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddWebhookModal}
        >
          Add Webhooks
        </Button>
      )}
    </Box>
  );
};
