import { React } from 'react';
import {} from 'next/router';
import { useZestyStore } from 'store';

import { Box, Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import AddIcon from '@mui/icons-material/Add';
import { accountsValidations, FormInput, SubmitBtn } from 'components/accounts';
import { useFormik } from 'formik';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const MySwal = withReactContent(Swal);

const CustomForm = ({ onSubmit, instanceZUID }) => {
  const { userInfo } = useZestyStore((state) => state);
  const formik = useFormik({
    validationSchema: accountsValidations.subject,

    initialValues: {
      subject: '',
      message: '',
      branch: '',
    },
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Typography variant="p" component="p" textAlign={'left'} sx={{ mb: 1 }}>
          User email: {userInfo?.email}
        </Typography>
        <Typography variant="p" component="p" textAlign={'left'} sx={{ mb: 1 }}>
          Instance ZUID: {instanceZUID}
        </Typography>
        <FormInput name={'subject'} formik={formik} />
        <FormInput name={'message'} formik={formik} multiline={true} />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

const submitCreateTicket = async (data) => {
  const { domain, branch } = data;
  // fetchwrapper needs update to accept an object with domain and branch
  // OR accept a third parameter for branch
  // const res = await ZestyAPI.createDomain(zuid, domain, branch);
  // !res.error && handleCreateDomainSuccess(res);
  // res.error && handleCreateDomainError(res);
  // await getInstanceDomains();
};

const CreateTicket = ({ tickets, instanceZUID }) => {
  const handleCreateTicket = () => {
    MySwal.fire({
      title: 'Create a Ticket',
      html: (
        <CustomForm onSubmit={submitCreateTicket} instanceZUID={instanceZUID} />
      ),
      showConfirmButton: false,
    });
    console.log(
      '🚀 ~ file: DomainListings.js ~ line 94 ~ handleCreateTicket ~ branch',
      //   branch,
    );
  };

  return (
    <Button
      onClick={handleCreateTicket}
      color="primary"
      variant="contained"
      startIcon={<AddIcon />}
    >
      Create Ticket
    </Button>
  );
};

export default CreateTicket;
