import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import {
  UsersSelect,
  StickyTable,
  accountsValidations,
  FormInput,
  DeleteMsg,
  SubmitBtn,
  FormSelect,
} from 'components/accounts';
import { baseroles } from 'components/accounts/users/baseroles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';

const MySwal = withReactContent(Swal);

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'email',
    label: 'email',
  },
  {
    id: 'role',
    label: 'role',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const RoleSwitcher = ({ role, handleOnChange, instanceRoles }) => {
  switch (role) {
    case 'Owner':
      return <>{role}</>;
    default:
      return (
        <UsersSelect
          options={instanceRoles}
          label="Role"
          onChange={handleOnChange}
          value={role}
        />
      );
  }
};
const CustomTable = ({
  data,
  handleUpdateRole,
  handleDeleteRole,
  instanceRoles,
  isOwner,
}) => {
  const ROWS = data?.map((e) => {
    const handleOnChange = (data) => {
      const val = {
        newRoleZUID: data.id,
        userZUID: e.ZUID,
        oldRoleZUID: e.role.ZUID,
      };

      handleUpdateRole(val);
    };
    const handleDeleteUser = () => {
      const roleZUID = instanceRoles.find((x) => x.name === e.role.name)?.ZUID;
      const data = { roleZUID, userZUID: e.ZUID };
      const action = () => {
        handleDeleteRole(data);
      };
      DeleteMsg({ action });
    };

    const role = isOwner
      ? RoleSwitcher({
          role: e.role.name,
          handleOnChange,
          instanceRoles,
        })
      : e.role.name;

    const action = isOwner ? (
      <Box display={'flex'}>
        <Button
          onClick={handleDeleteUser}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Delete User
        </Button>
      </Box>
    ) : (
      <>-</>
    );

    return {
      name: `${e.firstName} ${e.lastName}` || '-',
      email: e.email || '-',
      role,
      action,
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

const CustomForm = ({ onSubmit, options, instanceZUID }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.email,
    initialValues: {
      email: '',
      name: '',
      accessLevel: '',
    },
    onSubmit: async (values) => {
      const val = {
        inviteeName: values.name,
        inviteeEmail: values.email,
        entityZUID: instanceZUID,
        accessLevel: values.accessLevel,
      };
      await onSubmit(val);
      formik.resetForm();
    },
  });

  const newOptions = options.map((e) => {
    return { ...e, value: e.accessLevel };
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'name'} formik={formik} />
        <FormInput name={'email'} formik={formik} />
        <FormSelect
          label="Role"
          name={'accessLevel'}
          formik={formik}
          options={newOptions}
        />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};
const Index = ({
  roles,
  updateRole,
  deleteUserRole,
  instanceRoles,
  createInvite,
  isOwner,
  instanceZUID,
}) => {
  const handleUpdateRole = (data) => {
    updateRole(data);
  };
  const handleDeleteRole = (data) => {
    deleteUserRole(data);
  };

  const handleInviteUserModal = (createInvite, options, instanceZUID) => {
    MySwal.fire({
      title: 'Invite User',
      html: (
        <CustomForm
          onSubmit={createInvite}
          options={options}
          instanceZUID={instanceZUID}
        />
      ),
      showConfirmButton: false,
    });
  };

  return (
    <Grid container>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          handleInviteUserModal(createInvite, baseroles, instanceZUID)
        }
      >
        Invite user
      </Button>
      <Grid item xs={12}>
        <CustomTable
          data={roles}
          handleUpdateRole={handleUpdateRole}
          handleDeleteRole={handleDeleteRole}
          instanceRoles={instanceRoles}
          isOwner={isOwner}
        />
      </Grid>
    </Grid>
  );
};
export const Users = React.memo(Index);
