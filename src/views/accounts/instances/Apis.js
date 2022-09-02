import { Box, Button, Grid } from '@mui/material';
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
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Renew
          </Button>
          <DeleteBtn onClick={() => handleDeleteToken(e)}></DeleteBtn>
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
      <StickyTable rows={ROWS} columns={COLUMNS} />
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
      <Grid item xs={10}></Grid>
      <Grid item xs={2}>
        {isInstanceOwner && (
          <Button
            onClick={handleCreateTokenModal}
            color="primary"
            variant="contained"
            type="button"
            fullWidth
          >
            Create Token
          </Button>
        )}
      </Grid>
      <Grid item xs={12}>
        <CustomTable
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
