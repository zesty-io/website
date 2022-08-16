import { Box, Button } from '@mui/material';
import { FormInput } from 'components/accounts';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CustomForm = ({ onSubmit, data = {} }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.teams,
    initialValues: {
      name: data?.name,
      description: data?.description,
    },
    onSubmit: async (values) => {
      const val = { ...values, ZUID: data.ZUID };
      await onSubmit(val);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'name'} formik={formik} />
        <FormInput name={'description'} formik={formik} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export const Webhooks = ({ createWebhook }) => {
  const handleAddWebhookModal = (data) => {
    // MySwal.fire({
    //   title: 'Invite Team',
    //   html: <InviteForm onSubmit={handlerCreateTeamInvite} data={data} />,
    //   showConfirmButton: false,
    // });

    createWebhook(data);
  };
  return (
    <Box>
      <Button color="primary" variant="contained" onClick={handleAddTeamModal}>
        Add Webhooks
      </Button>
    </Box>
  );
};
