import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import {
  accountsValidations,
  FormInput,
  DeleteMsg,
  SubmitBtn,
  FormSelect,
  DeleteBtn,
  AccountsTable,
  AccountSelect,
} from 'components/accounts';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { baseroles } from 'components/accounts/users/baseroles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as helpers from 'utils';
import { grey } from '@mui/material/colors';
import { hashMD5 } from 'utils/Md5Hash';
import dayjs from 'dayjs';

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
        <AccountSelect
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
  loading,
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
        <DeleteBtn onClick={handleDeleteUser} />
      </Box>
    ) : (
      <>-</>
    );

    return { ...e, id: e.ZUID };
  });

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        const name = `${params.row.firstName} ${params.row.lastName}`;
        const email = `${params.row.email}`;
        const profileUrl =
          'https://www.gravatar.com/avatar/' + hashMD5(params.row?.email);
        return (
          <Stack direction="row" alignItems={'center'} gap={2}>
            <img
              src={profileUrl}
              alt="User"
              height={35}
              width={35}
              style={{ borderRadius: '50%' }}
            />
            <Stack>
              <Typography variant="body2">{name}</Typography>
              <Typography variant="caption" color={'GrayText'}>
                {email}
              </Typography>
            </Stack>
          </Stack>
        );
      },
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
      editable: false,
      renderCell: (params) => {
        const e = params.row;
        const handleOnChange = (data) => {
          const val = {
            newRoleZUID: data.id,
            userZUID: e.ZUID,
            oldRoleZUID: e.role.ZUID,
          };

          handleUpdateRole(val);
        };

        const role = isOwner
          ? RoleSwitcher({
              role: e.role.name,
              handleOnChange,
              instanceRoles,
            })
          : e.role.name;
        return role;
      },
    },
    {
      field: 'createdAt',
      headerName: 'Date Added',
      width: 110,
      editable: false,
      renderCell: (params) => {
        const date = dayjs(params.row.createdAt).format('MMM DD, YYYY');
        return <Typography variant="body2">{date}</Typography>;
      },
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      width: 150,
      editable: false,
      renderCell: (params) => {
        const date = dayjs(params.row.lastLogin).format('MMM DD, YYYY');
        return <Typography variant="body2">{date}</Typography>;
      },
    },
    {
      field: 'action',
      headerName: '',
      width: 110,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        return <MoreVertIcon color="disabled" />;
      },
    },
  ];
  return (
    <>
      <AccountsTable
        loading={loading}
        rows={ROWS}
        columns={columns}
        pageSize={100}
      />
    </>
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
  loading,
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

  // Remove not valid user using email check
  const data = roles.filter((e) => {
    return helpers.validateEmail(e.email);
  });
  return (
    <Grid container>
      <Stack direction="row" justifyContent={'space-between'} width={1}>
        <Stack direction="row" alignItems={'center'} gap={0.5}>
          <Typography variant="h4">Users</Typography>
          <HelpOutlineIcon color="disabled" />
        </Stack>
        <Stack direction={'row'} gap={2}>
          {/* <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            size="small"
            variant="filled"
          /> */}
          <Button
            variant="outlined"
            onClick={() =>
              handleInviteUserModal(createInvite, baseroles, instanceZUID)
            }
            color="inherit"
            sx={{ gap: 1, borderColor: grey[300] }}
          >
            <GroupsIcon color="disabled" />
            <Typography color={'GrayText'}>Create Role</Typography>
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              handleInviteUserModal(createInvite, baseroles, instanceZUID)
            }
            sx={{ gap: 1 }}
          >
            <AddIcon />
            <Typography>Invite user</Typography>
          </Button>
        </Stack>
      </Stack>
      <Grid item xs={12}>
        <CustomTable
          data={data}
          handleUpdateRole={handleUpdateRole}
          handleDeleteRole={handleDeleteRole}
          instanceRoles={instanceRoles}
          isOwner={isOwner}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
};
export const Users = React.memo(Index);
