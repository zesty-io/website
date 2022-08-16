import { Box, Button, Grid } from '@mui/material';
import {
  accountsValidations,
  FormInput,
  StickyTable,
  UsersSelect,
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
  const [role, setrole] = React.useState({});
  const formik = useFormik({
    validationSchema: accountsValidations.createToken,
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      const val = {
        name: values.name,
        roleZUID: role.ZUID,
      };
      await onSubmit(val);
      formik.resetForm();
    },
  });

  const handleChange = (data) => {
    setrole(data);
  };
  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'name'} formik={formik} />
        <UsersSelect
          options={options}
          label="Role"
          onChange={handleChange}
          value={role.value}
        />
        <Button
          color="primary"
          disabled={Object.keys(role).length === 0}
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
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
        <Box display={'flex'}>
          <Button
            onClick={() => handleUpdateToken(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Renew
          </Button>
          <Button
            onClick={() => handleDeleteToken(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Delete
          </Button>
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
    deleteToken(val);
  };
  const handleUpdateToken = (data) => {
    const val = { tokenZUID: data.ZUID };
    updateToken(val);
  };
  return (
    <Grid container>
      <Grid item xs={4}>
        {isInstanceOwner && (
          <Button
            onClick={handleCreateTokenModal}
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Create Token
          </Button>
        )}
      </Grid>
      <CustomTable
        isInstanceOwner={isInstanceOwner}
        data={tokens}
        roles={instanceRoles}
        handleDeleteToken={handleDeleteToken}
        handleUpdateToken={handleUpdateToken}
      />
    </Grid>
  );
};
