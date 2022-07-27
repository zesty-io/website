import { Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useZestyStore } from 'store';
import { ErrorMsg, SuccessMsg } from '../Ui';
import { FormInput } from '../Ui/Input';
import { StickyTable } from '../Ui/Table';
import { accountsValidations } from '../validations';

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'address',
    label: 'Email',
  },
  {
    id: 'action',
    label: 'Action',
  },
];
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

  const ROWS = emails
    ?.filter((e) => e.name)
    ?.map((e) => {
      return {
        name: e.name,
        address: e.address,
        action: <Button onClick={() => deleteEmail(e.address)}>X</Button>,
      };
    });

  React.useEffect(() => {
    getUserEmails();
  }, []);

  const formik = useFormik({
    validationSchema: accountsValidations.email,
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async (values) => {
      await addEmail(values);
      formik.resetForm();
    },
  });

  const memoizeRows = React.useMemo(() => ROWS, [emails]);
  const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <Box>Primary Email : {userInfo?.email}</Box>
      <StickyTable rows={memoizeRows} columns={memoizeColumns} />
      <Box paddingY={4}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <FormInput name={'email'} formik={formik} />
          <FormInput name={'name'} formik={formik} />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};
