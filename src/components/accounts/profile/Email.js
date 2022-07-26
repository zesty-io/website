import { Box, Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useZestyStore } from 'store';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validation = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
  email: yup
    .string()
    .required('Email address is required*')
    .matches(emailRegex, 'Must be a valid email address*'),
});

export const Email = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [emails, setemails] = React.useState([]);

  const handleAddEmailSuccess = (data) => {
    console.log(data, 'succ');
  };
  const handleAddEmailErr = (err) => {
    console.log(err, 'err');
  };
  const handleGetEmailsSuccess = (data) => {
    console.log(data, 'succ');
    setemails(data.data);
  };
  const handleGetEmailsErr = (err) => {
    console.log(err, 'err');
  };
  const handleDeleteEmailSuccess = (data) => {
    console.log(data, 'succ');
  };
  const handleDeleteEmailErr = (err) => {
    console.log(err, 'err');
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
        validationSchema={validation}
        onSubmit={addEmail}
      >
        {({
          values,
          errors,
          handleSubmit,
          dirty,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                onChange={(event) => setFieldValue('email', event.target.value)}
              />
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                onChange={(event) => setFieldValue('name', event.target.value)}
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
