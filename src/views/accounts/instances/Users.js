import { Box, Button, Grid } from '@mui/material';
import { UsersSelect, StickyTable } from 'components/accounts';
import { baseroles } from 'components/accounts/users/baseroles';
import React from 'react';

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

const RoleSwitcher = ({ role, handleOnChange }) => {
  switch (role) {
    case 'Owner':
      return <>{role}</>;
    default:
      return (
        <UsersSelect
          options={baseroles}
          label="Role"
          onChange={handleOnChange}
          value={role}
        />
      );
  }
};
const CustomTable = ({ data, handleUpdateRole, handleDeleteRole }) => {
  const ROWS = data?.map((e) => {
    const handleOnChange = (roleZUID) => {
      const data = { roleZUID, userZUID: e.ZUID };
      handleUpdateRole(data);
    };
    const handleDeleteUser = () => {
      const roleZUID = baseroles.find((x) => x.name === e.role.name)?.ZUID;
      const data = { roleZUID, userZUID: e.ZUID };
      handleDeleteRole(data);
    };
    return {
      name: `${e.firstName} ${e.lastName}` || '-',
      email: e.email || '-',
      role: RoleSwitcher({ role: e.role.name, handleOnChange }),
      action:
        e.role.name !== 'Owner' ? (
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

const Index = ({ users, roles, updateRole, deleteUserRole }) => {
  console.warn(users, roles, 'User Data');

  const handleUpdateRole = (data) => {
    updateRole(data);
  };
  const handleDeleteRole = (data) => {
    deleteUserRole(data);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <CustomTable
          data={roles}
          handleUpdateRole={handleUpdateRole}
          handleDeleteRole={handleDeleteRole}
        />
      </Grid>
    </Grid>
  );
};
export const Users = React.memo(Index);
