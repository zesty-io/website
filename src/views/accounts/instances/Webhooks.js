import { Box, Button, Divider, Grid } from '@mui/material';
import {
  accountsValidations,
  FormInput,
  FormSelect,
} from 'components/accounts';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { accounts } from 'components/accounts/constants';

const MySwal = withReactContent(Swal);

const WebhookForm = ({ onSubmit }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.createWebhook,

    initialValues: {
      parentResourceZUID: '',
      resource: '',
      method: '',
      eventAction: '',
      URL: '',
      contentType: 'application/json',
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
        <Divider>Resource to Listen to</Divider>
        <Grid container spacing={2} paddingY={2}>
          <Grid item xs={6}>
            <FormSelect
              label="Resource"
              name={'resource'}
              formik={formik}
              options={accounts.resourceOptions}
            />
          </Grid>

          <Grid item xs={6}>
            <FormSelect
              label="Event Action"
              name={'eventAction'}
              formik={formik}
              options={accounts.eventActionOptions}
            />
          </Grid>
        </Grid>

        <Divider>HTTP Options</Divider>
        <Grid container spacing={2} paddingY={2}>
          <Grid xs={12} item>
            <FormInput name={'URL'} formik={formik} />
          </Grid>
          <Grid xs={6} item>
            <FormSelect
              label="Method"
              name={'method'}
              formik={formik}
              options={accounts.methodOptions}
            />
          </Grid>
          <Grid xs={6} item>
            <FormInput name={'authorization'} formik={formik} />
          </Grid>
        </Grid>

        {formik.values.method === 'POST' && (
          <Grid container>
            <Grid xs={12} item>
              <FormSelect
                label="Content Type"
                name={'contentType'}
                formik={formik}
                options={accounts.contentTypeOptions}
              />
            </Grid>
            <Grid xs={12} item>
              <FormInput label="Body" name={'text'} formik={formik} />
            </Grid>
          </Grid>
        )}
        {/* <FormInput name={'Parent Resource ZUID'} formik={formik} /> */}
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export const Webhooks = ({ createWebhook, isInstanceOwner }) => {
  const handleAddWebhookModal = () => {
    MySwal.fire({
      title: 'Create Webhook',
      html: <WebhookForm onSubmit={createWebhook} />,
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
          Create Webhooks
        </Button>
      )}
    </Box>
  );
};
