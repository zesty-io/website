const { Box, Typography } = require('@mui/material');
const { baseroles } = require('components/accounts/users/baseroles');
const { StickyTable } = require('./StickyTable');

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'desc',
    label: 'Description',
  },
  {
    id: 'accessLevel',
    label: 'Access Level',
  },
];

export const BaseRolesTable = ({ title = 'Base Roles in Zesty.io' }) => {
  return (
    <Box>
      <Box paddingY={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <StickyTable rows={baseroles} columns={COLUMNS} />
    </Box>
  );
};
