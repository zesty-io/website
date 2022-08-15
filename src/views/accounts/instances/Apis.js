import { Box, Button } from '@mui/material';
import { StickyTable } from 'components/accounts';
import React from 'react';

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

const CustomTable = ({ data = [], roles = [] }) => {
  const ROWS = data?.map((e) => {
    const role = roles.find((x) => x.ZUID === e.roleZUID)?.name;
    return {
      name: e.name || '-',
      token: e.token || '-',
      role: role || '-',
      expiry: e.expiry || '-',
      action: (
        <Box display={'flex'}>
          <Button
            onClick={() => console.log(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Renew
          </Button>
          <Button
            onClick={() => console.log(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Delete
          </Button>
        </Box>
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
export const Apis = ({ tokens, roles, isInstanceOwner }) => {
  console.log(tokens, roles, isInstanceOwner, ':::');
  return (
    <Box>
      <CustomTable data={tokens} roles={roles} />
    </Box>
  );
};
