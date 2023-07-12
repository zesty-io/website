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
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useRouter } from 'next/router';
// export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

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

        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            py: 2,
          }}
          component="label"
          htmlFor="file"
        >
          <AttachFileIcon />
          <Typography variant="caption">
            {file ? file.name : 'Attachment (optional)'}
          </Typography>
          <input
            accept=".png,.jpg"
            style={{ display: 'none' }}
            id="file"
            name="file"
            type="file"
            onChange={(event) => {
              const file = event.currentTarget.files[0];
              const regex = /\.(png|jpg)$/;
              if (regex.test(file.name)) {
                setFile(file);
              } else {
                alert('Invalid file type');
              }
            }}
          />
        </Box>

        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

const CreateTicket = ({ getPageData, instanceZUID }) => {
  const router = useRouter();
  const { zuid } = router.query;
  const APP_SID = getCookie('APP_SID');

  const handleCreateInviteSuccess = () => {
    SuccessMsg({
      title: 'Ticket Successfully created',
      action: () => {
        window.location.reload();
      },
    });
  };
  const handleCreateInviteErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const createTicketRequest = async (requestOptions) => {
    await fetch('http://localhost:8080/ticket/', requestOptions)
      // await fetch(
      //   'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/ticket/',
      //   requestOptions,
      // )
      .then((response) => response.json())
      .then(() => {
        handleCreateInviteSuccess();
      })
      .catch((error) => {
        handleCreateInviteErr(error);
      });
  };

  const submitCreateTicket = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file);

    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${APP_SID}`,
        WorkingInstance: zuid,
      },
    };

    if (data.file) {
      await fetch(
        'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/upload',
        {
          ...requestOptions,
          body: formData,
        },
      )
        .then((resp) => resp.json())
        .then(async (respData) => {
          data.uploads = [respData.id];
          requestOptions.headers['Content-Type'] = 'application/json';
          requestOptions.body = JSON.stringify(data);

          await createTicketRequest(requestOptions);
        });

      return;
    }

    requestOptions.headers['Content-Type'] = 'application/json';
    requestOptions.body = JSON.stringify(data);

    await createTicketRequest(requestOptions);

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
