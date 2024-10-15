import { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import { Search, AddRounded } from '@mui/icons-material';

import { NoRules } from './NoRules';
import { GranularRole } from 'store/types';
import { AddRule } from './AddRule';
import { Table } from './Table';

export type NewGranularRole = Pick<
  GranularRole,
  'resourceZUID' | 'create' | 'read' | 'update' | 'delete' | 'publish'
>;
type PermissionsProps = {
  granularRoles: Partial<GranularRole>[];
  onAddNewGranularRole: (roleData: NewGranularRole) => void;
};
export const Permissions = ({
  granularRoles,
  onAddNewGranularRole,
}: PermissionsProps) => {
  const [filterKeyword, setFilterKeyword] = useState<string>('');
  const [showAddRule, setShowAddRule] = useState(false);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Resource Permissions
          </Typography>
          <Typography variant="body3" fontWeight={600} color="text.secondary">
            Grant users access only to resources you specify
          </Typography>
        </Box>
        <Box>
          <TextField
            value={filterKeyword}
            onChange={(evt) => setFilterKeyword(evt.target.value)}
            size="small"
            placeholder="Filter Resources"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            startIcon={<AddRounded />}
            sx={{ ml: 1 }}
            onClick={() => setShowAddRule(true)}
          >
            Add Rule
          </Button>
        </Box>
      </Stack>
      {!granularRoles?.length && !showAddRule && (
        <NoRules onAddRulesClick={() => setShowAddRule(true)} />
      )}
      {!!granularRoles?.length && (
        <Box pb={2}>
          <Table
            granularRoles={granularRoles}
            onDataChange={(roleData) => {
              //TODO: This does not sync data. Also need to confirm with Markel on how granular role update works
              console.log('new data', roleData);
            }}
          />
        </Box>
      )}
      {showAddRule && (
        <AddRule
          onCancel={() => setShowAddRule(false)}
          onAddRuleClick={(newRoleData) => {
            onAddNewGranularRole(newRoleData);
            setShowAddRule(false);
          }}
          granularRoles={granularRoles}
        />
      )}
    </Box>
  );
};
