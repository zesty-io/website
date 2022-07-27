import { Box, Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import { ErrorMsg, SuccessMsg } from '../Ui';
import { accountsValidations } from '../validations';

export const Email = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [emails, setemails] = React.useState([]);

  const handleAddEmailSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Success' });
  };
  const handleAddEmailErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };
  const handleGetEmailsSuccess = (data) => {
    console.log(data, 'succ');
    setemails(data.data);
  };
  const handleGetEmailsErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };
  const handleDeleteEmailSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Success' });
  };
  const handleDeleteEmailErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };

  const getUserEmails = async () => {
    const res = await ZestyAPI.getUserEmails();
    !res.error && handleGetEmailsSuccess(res);
    res.error && handleGetEmailsErr(res);
  };

  const addEmail = async ({ name, email }) => {
    console.log(email, name);
    const res = await ZestyAPI.addUnverifiedEmail(name, email);
    !res.error && handleAddEmailSuccess(res);
    res.error && handleAddEmailErr(res);
    await getUserEmails();
  };

  const deleteEmail = async (email) => {
    const res = await ZestyAPI.deleteUserEmail(email);
    !res.error && handleDeleteEmailSuccess(res);
    res.error && handleDeleteEmailErr(res);
    await getUserEmails();
  };
  React.useEffect(() => {
    getUserEmails();
  }, []);

  return (
    <Box>
      <Box>Primary Email : {userInfo?.email}</Box>
      <Box>
        {emails?.map((e) => {
          return (
            <Box>
              email:{e.address} - name: {e.name}{' '}
              <button onClick={() => deleteEmail(e.address)}>x</button>
            </Box>
          );
        })}
      </Box>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={accountsValidations.email}
        onSubmit={addEmail}
      >
        {({
          values,
          errors,
          isValid,
          handleSubmit,
          dirty,
          handleChange,
          handleBlur,
          setFieldValue,
          touched,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                onChange={(event) => setFieldValue('email', event.target.value)}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                onChange={(event) => setFieldValue('name', event.target.value)}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
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
