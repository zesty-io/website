import { useMemo, useState, useReducer } from 'react';
import {
  Typography,
  Avatar,
  Stack,
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import {
  LocalPoliceOutlined,
  Close,
  InfoRounded,
  RuleRounded,
  GroupsRounded,
} from '@mui/icons-material';

import { useRoles } from 'store/roles';
import { Details } from './tabs/Details';
import { Permissions } from './tabs/Permissions';
import { Users } from './tabs/Users';

export type RoleDetails = {
  name: string;
  description: string;
  systemRoleZUID: string;
};

type EditCustomRoleDialogProps = {
  ZUID: string;
  onClose: () => void;
};
export const EditCustomRoleDialog = ({
  ZUID,
  onClose,
}: EditCustomRoleDialogProps) => {
  const { customRoles } = useRoles((state) => state);
  const [activeTab, setActiveTab] = useState('details');

  const roleData = useMemo(() => {
    return customRoles?.find((role) => role.ZUID === ZUID);
  }, [ZUID, customRoles]);

  const [detailsData, updateDetailsData] = useReducer(
    (state: RoleDetails, data: Partial<RoleDetails>) => {
      return {
        ...state,
        ...data,
      };
    },
    {
      name: roleData?.name || '',
      description: roleData?.description || '',
      systemRoleZUID: roleData?.systemRoleZUID || '31-71cfc74-4dm13',
    },
  );

  return (
    <Dialog
      open
      fullWidth
      onClose={() => onClose?.()}
      PaperProps={{
        sx: {
          maxWidth: 960,
          width: 960,
          minHeight: 800,
        },
      }}
    >
      <Box borderBottom="2px solid" borderColor="border">
        <Stack
          direction="row"
          px={2.5}
          pt={2.5}
          boxSizing="border-box"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Stack direction="row" gap={1.5} alignItems="center">
            <Avatar sx={{ bgcolor: 'blue.100' }}>
              <LocalPoliceOutlined color="info" />
            </Avatar>
            <Box display="inline">
              <Typography variant="h5" fontWeight={700}>
                Edit {roleData?.name}
              </Typography>
              <Typography
                variant="body3"
                fontWeight={600}
                color="text.secondary"
              >
                Edit your custom role that can have granular permissions applied
                to it
              </Typography>
            </Box>
          </Stack>
          <IconButton size="small" onClick={() => onClose?.()}>
            <Close />
          </IconButton>
        </Stack>
        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value)}
          sx={{
            position: 'relative',
            top: '2px',
            px: 2.5,
          }}
        >
          <Tab
            value="details"
            label="Details"
            icon={<InfoRounded fontSize="small" />}
            iconPosition="start"
          />
          <Tab
            value="permissions"
            label="Permissions"
            icon={<RuleRounded fontSize="small" />}
            iconPosition="start"
          />
          <Tab
            value="users"
            label="Users"
            icon={<GroupsRounded fontSize="small" />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      <DialogContent
        sx={{
          p: 2.5,
          bgcolor: 'grey.50',
        }}
      >
        {activeTab === 'details' && (
          <Details data={detailsData} onUpdateData={updateDetailsData} />
        )}
        {activeTab === 'permissions' && <Permissions ZUID={ZUID} />}
        {activeTab === 'users' && <Users />}
      </DialogContent>
      <DialogActions
        sx={{ p: 2.5, gap: 1, borderTop: '2px solid', borderColor: 'border' }}
      >
        <Button variant="outlined" color="inherit" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('create custom role')}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
