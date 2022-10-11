import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import {
  accountsValidations,
  FormInput,
  DeleteMsg,
  SubmitBtn,
  FormSelect,
  AccountsTable,
  AccountSelect,
  AccountsInput,
  AccountsTableHead,
} from 'components/accounts';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import AddIcon from '@mui/icons-material/Add';
import { baseroles } from 'components/accounts/users/baseroles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as helpers from 'utils';
import { hashMD5 } from 'utils/Md5Hash';
import dayjs from 'dayjs';
import { AccountsHeader } from 'components/accounts/ui/header';
import { AccountsPopover } from 'components/accounts/ui/popover';

const MySwal = withReactContent(Swal);

const RoleSwitcher = ({ role, handleOnChange, instanceRoles }) => {
  console.log(instanceRoles, '::::');
  switch (role) {
    case 'Owner':
      return <Typography>{role}</Typography>;
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
    return { ...e, id: e.ZUID };
  });

  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 350,
      flex: 1,
      editable: false,
      sortable: true,
      renderHeader: () => <AccountsTableHead>Name</AccountsTableHead>,
      valueGetter: (params) => params.row.firstName,
      renderCell: (params) => {
        const name = `${params.row.firstName} ${params.row.lastName}`;
        const email = `${params.row.email}`;
        const profileUrl =
          'https://www.gravatar.com/avatar/' + hashMD5(params.row?.email);
        return (
          <Stack direction="row" alignItems={'center'} gap={4} pl={1}>
            <img
              src={profileUrl}
              alt="User"
              height={40}
              width={40}
              style={{ borderRadius: '50%' }}
            />
            <Stack>
              <Typography variant="body2" color={'text.primary'}>
                {name}
              </Typography>
              <Typography variant="caption" color={'text.secondary'}>
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
      width: 250,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.role.name,
      renderHeader: () => <AccountsTableHead>Role</AccountsTableHead>,
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
      width: 250,
      editable: false,
      renderHeader: () => <AccountsTableHead>Date Added</AccountsTableHead>,
      renderCell: (params) => {
        const date = dayjs(params.row.createdAt).format('MMM DD, YYYY');
        return (
          <Typography variant="body2" color={'text.secondary'}>
            {date}
          </Typography>
        );
      },
    },
    {
      field: 'lastLogin',
      headerName: 'Last Active',
      width: 250,
      editable: false,
      renderHeader: () => <AccountsTableHead>Last Active</AccountsTableHead>,
      renderCell: (params) => {
        const date = dayjs(params.row.lastLogin).format('MMM DD, YYYY');
        return (
          <Typography variant="body2" color={'text.secondary'}>
            {date}
          </Typography>
        );
      },
    },

    {
      field: 'action',
      headerName: '',
      width: 100,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        const handleDeleteUser = () => {
          const e = params.row;
          const roleZUID = instanceRoles.find(
            (x) => x.name === e.role.name,
          )?.ZUID;
          const data = { roleZUID, userZUID: e.ZUID };
          const action = () => {
            handleDeleteRole(data);
          };
          DeleteMsg({ action });
        };

        const action = [
          {
            title: 'Email',
            action: () => window.open(`mailto:${params.row.email}`),
          },
        ];
        const actionOwner = [
          { title: 'Delete User', action: isOwner ? handleDeleteUser : null },
          {
            title: 'Email',
            action: () => window.open(`mailto:${params.row.email}`),
          },
        ];

        return (
          <>
            <AccountsPopover
              title={
                <Button variant="text" color="primary">
                  <MoreVertIcon color="disabled" />
                </Button>
              }
              id={'actions'}
              items={isOwner ? actionOwner : action}
              colorInvert={false}
            />
          </>
        );
      },
    },
  ];

  const rows = React.useMemo(() => ROWS, [data, loading]);
  const columns = React.useMemo(() => COLUMNS, [data, instanceRoles, loading]);

  return (
    <Stack p={4}>
      <AccountsTable
        loading={loading}
        rows={rows}
        columns={columns}
        pageSize={100}
        autoHeight={false}
      />
    </Stack>
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
  search,
  setsearch,
  respondToInvite,
  pendingUsers,
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

  const headerProps = {
    title: 'Users',
    description: 'Manage your users and their permissions',
  };

  return (
    <Grid container>
      <AccountsHeader {...headerProps}>
        <AccountsInput
          search={search}
          setsearch={setsearch}
          placeholder=" Search users"
          width={250}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            handleInviteUserModal(createInvite, baseroles, instanceZUID)
          }
          startIcon={<AddIcon />}
        >
          Invite user
        </Button>
      </AccountsHeader>
      <Grid item xs={12}>
        <CustomTable
          setsearch={setsearch}
          data={data}
          handleUpdateRole={handleUpdateRole}
          handleDeleteRole={handleDeleteRole}
          instanceRoles={instanceRoles}
          isOwner={isOwner}
          loading={loading}
        />
      </Grid>
      <Grid item xs={6}>
        <PendingTable
          setsearch={setsearch}
          data={pendingUsers}
          instanceRoles={instanceRoles}
          respondToInvite={respondToInvite}
          isOwner={isOwner}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
};
export const Users = React.memo(Index);

const PendingTable = ({
  data,
  instanceRoles,
  isOwner,
  loading,
  respondToInvite,
}) => {
  const ROWS = data?.map((e) => {
    return { ...e, id: uuidv4() };
  });

  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'name',
      headerName: 'Pending Users',
      minWidth: 300,
      flex: 1,
      editable: false,
      sortable: true,
      renderHeader: () => <AccountsTableHead>Pending Users</AccountsTableHead>,
      valueGetter: (params) => params.row.firstName,
      renderCell: (params) => {
        const name = params.row.name || '-';
        const email = `${params.row.email}`;
        const profileUrl =
          'https://www.gravatar.com/avatar/' + hashMD5(params.row?.email);
        return (
          <Stack direction="row" alignItems={'center'} gap={4} pl={1}>
            <img
              src={profileUrl}
              alt="User"
              height={40}
              width={40}
              style={{ borderRadius: '50%' }}
            />
            <Stack>
              <Typography variant="body2" color={'text.primary'}>
                {name}
              </Typography>
              <Typography variant="caption" color={'text.secondary'}>
                {email}
              </Typography>
            </Stack>
          </Stack>
        );
      },
    },

    {
      field: 'action',
      headerName: '',
      width: 100,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        const e = params.row;
        const action = [
          {
            title: 'Cancel Invite',
            action: () => respondToInvite(e, 'cancel'),
          },
        ];

        return (
          <>
            <AccountsPopover
              title={
                <Button variant="text" color="primary">
                  <MoreVertIcon color="disabled" />
                </Button>
              }
              id={'actions'}
              items={action}
              colorInvert={false}
            />
          </>
        );
      },
    },
  ];

  const rows = React.useMemo(() => ROWS, [data, loading]);
  const columns = React.useMemo(() => COLUMNS, [data, instanceRoles, loading]);
  const showTable = rows.length === 0 ? false : true;

  return (
    <Stack width={1}>
      <Stack py={4} px={4} sx={{ width: 1 }}>
        <AccountsTable
          showTable={showTable}
          loading={loading}
          rows={rows}
          columns={columns}
          pageSize={100}
          autoHeight={true}
        />
      </Stack>
    </Stack>
  );
};
