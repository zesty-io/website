import { Box } from '@mui/material';
import { baseroles } from 'components/accounts/users/baseroles';
import { StickyTable } from './StickyTable';

const COLUMNS = [
  {
    id: 'name',
    label: 'Access Level - Name',
  },
  {
    id: 'desc',
    label: 'Description',
  },
];

export const BaseRolesTable = ({ title = 'Base Roles in Zesty.io' }) => {
  return (
    <Box>
      <StickyTable
        title={title}
        rows={baseroles}
        columns={COLUMNS}
        pagination={false}
      />
    </Box>
  );
};
