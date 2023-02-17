import React, { useState } from 'react';
import { useZestyStore } from 'store';

import { Box, Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import AddIcon from '@mui/icons-material/Add';
import { accountsValidations, FormInput, SubmitBtn } from 'components/accounts';
import { useFormik } from 'formik';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import { getCookie } from 'cookies-next';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const MySwal = withReactContent(Swal);

const CustomForm = ({ onSubmit, instanceZUID }) => {
  const [file, setFile] = useState();
  const { userInfo } = useZestyStore((state) => state);
  const formik = useFormik({
    validationSchema: accountsValidations.createTicket,

    initialValues: {
      subject: '',
      description: '',
      instanceZUID: instanceZUID,
    },
    onSubmit: async (values) => {
      if (file) {
        values.file = file;
      }

      await onSubmit(values);
      // formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form
        encType="multipart/form-data"
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="p" component="p" textAlign={'left'} sx={{ mb: 1 }}>
          User email: {userInfo?.email}
        </Typography>
        <Typography variant="p" component="p" textAlign={'left'} sx={{ mb: 1 }}>
          Instance ZUID: {instanceZUID}
        </Typography>
        <FormInput name={'subject'} formik={formik} />
        <FormInput name={'description'} formik={formik} multiline={true} />
        <input
          id="file"
          name="file"
          type="file"
          onChange={(event) => {
            setFile(event.currentTarget.files[0]);
          }}
        />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

const CreateTicket = ({ getPageData, instanceZUID }) => {
  const APP_SID = getCookie('APP_SID');

  const handleCreateInviteSuccess = () => {
    SuccessMsg({ title: 'Ticket Successfully created' });
  };
  const handleCreateInviteErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const submitCreateTicket = async (data) => {
    // const formData = new FormData();
    // formData.append('file', data.file);
    // // formData.append('subject', data.subject);
    // // formData.append('description', data.description);

    // // formData.append('instanceZUID', instanceZUID);

    // console.log(formData.get('file'));

    console.log(data);

    // await fetch(
    //   'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/upload',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       Authorization: `Bearer ${APP_SID}`,
    //     },
    //     body: formData,
    //   },
    // )
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${APP_SID}`,
      },
      body: JSON.stringify(data),
    };

    await fetch(
      'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/ticket/',
      requestOptions,
    )
      .then((response) => response.json())
      .then(() => {
        handleCreateInviteSuccess();
      })
      .catch((error) => {
        handleCreateInviteErr(error);
      });
    await getPageData();
  };

  const handleCreateTicket = () => {
    MySwal.fire({
      title: 'Create a Ticket',
      html: (
        <CustomForm onSubmit={submitCreateTicket} instanceZUID={instanceZUID} />
      ),
      width: 700,
      showConfirmButton: false,
    });
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
