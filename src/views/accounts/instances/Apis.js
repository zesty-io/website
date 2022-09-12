import { Box, Button, Grid, Link, Typography } from '@mui/material';
import {
  accountsValidations,
  DeleteBtn,
  DeleteMsg,
  FormInput,
  FormSelect,
  StickyTable,
  SubmitBtn,
} from 'components/accounts';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const MySwal = withReactContent(Swal);

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'token',
    label: 'Token',
  },
  {
    id: 'role',
    label: 'Role',
  },
  {
    id: 'expiry',
    label: 'Expires',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const CreateTokenForm = ({ onSubmit, options }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.createToken,
    initialValues: {
      name: '',
      roleZUID: '',
    },
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
    },
  });

  const newOptions = options.map((e) => {
    return { ...e, value: e.ZUID };
  });
  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'name'} formik={formik} />
        <FormSelect
          label="Role"
          name={'roleZUID'}
          formik={formik}
          options={newOptions}
        />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

const CustomTable = ({
  data = [],
  roles = [],
  handleDeleteToken,
  handleUpdateToken,
  isInstanceOwner,
  loading,
}) => {
  const ROWS = data?.map((e) => {
    const role = roles.find((x) => x.ZUID === e.roleZUID)?.name;
    return {
      name: e.name || '-',
      token: e.token || '-',
      role: role || '-',
      expiry: dayjs(e.expiry).format('MMMM D, YYYY') || '-',
      action: isInstanceOwner ? (
        <Box display={'flex'} gap={4}>
          <Button
            onClick={() => handleUpdateToken(e)}
            color="info"
            variant="contained"
            type="button"
          >
            <AutorenewIcon color="inherit" sx={{ marginRight: 1 }} />
            Renew
          </Button>
          <DeleteBtn onClick={() => handleDeleteToken(e)}> </DeleteBtn>
        </Box>
      ) : (
        '-'
      ),
    };
  });

  // const memoizeRows = React.useMemo(() => ROWS, [data]);
  // const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <StickyTable loading={loading} rows={ROWS} columns={COLUMNS} />
    </Box>
  );
};
export const Apis = ({
  tokens,
  instanceRoles,
  isInstanceOwner,
  createToken,
  deleteToken,
  updateToken,
  loading,
}) => {
  const handleCreateTokenModal = () => {
    MySwal.fire({
      title: 'Create Token',
      html: <CreateTokenForm onSubmit={createToken} options={instanceRoles} />,
      showConfirmButton: false,
    });
  };
  const handleDeleteToken = (data) => {
    const val = { tokenZUID: data.ZUID };
    const action = () => {
      deleteToken(val);
    };
    DeleteMsg({ title: 'Delete this token?', action });
  };
  const handleUpdateToken = (data) => {
    const val = { tokenZUID: data.ZUID };
    updateToken(val);
  };
  return (
    <Grid container>
      <Typography variant="p" fontSize={'medium'}>
        The{' '}
        <Link href="https://zesty.org/apis/auth-api#token-based-authentication">
          {' '}
          Access token
        </Link>{' '}
        feature is beta and is recommended for use with the{' '}
        <Link href="https://zesty.org/tools/atom-package">
          Atom IDE plugin
        </Link>{' '}
        , experimenting with CI/CD flows, and/or{'  '}
        <Link href="https://github.com/zesty-io/node-sdk">Node SDK</Link> script
        usage. This feature will be augmented in the future. After that
        automated production flows using tokens will be generally available.
      </Typography>
      <Grid item xs={11}></Grid>
      <Grid item xs={1}>
        {isInstanceOwner && (
          <Button
            onClick={handleCreateTokenModal}
            color="secondary"
            fullWidth
            variant="contained"
            type="button"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Create Token
          </Button>
        )}
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          loading={loading}
          isInstanceOwner={isInstanceOwner}
          data={tokens}
          roles={instanceRoles}
          handleDeleteToken={handleDeleteToken}
          handleUpdateToken={handleUpdateToken}
        />
      </Grid>
    </Grid>
  );
};
