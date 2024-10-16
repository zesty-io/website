import { useState, useReducer, useEffect } from 'react';
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
import { LoadingButton } from '@mui/lab';
import {
  LocalPoliceOutlined,
  Close,
  InfoRounded,
  RuleRounded,
  GroupsRounded,
} from '@mui/icons-material';
import { useRouter } from 'next/router';

import { useRoles } from 'store/roles';
import { Details } from './tabs/Details';
import { Permissions } from './tabs/Permissions';
import { Users } from './tabs/Users';
import { GranularRole } from 'store/types';
import { useZestyStore } from 'store';
import { ErrorMsg } from 'components/accounts/ui';

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
  const router = useRouter();
  const { ZestyAPI } = useZestyStore((state: any) => state);
  const { getRoles, customRoles, updateGranularRole, updateRole } = useRoles(
    (state) => state,
  );
  const [activeTab, setActiveTab] = useState<
    'details' | 'permissions' | 'users'
  >('details');
  const [isSaving, setIsSaving] = useState(false);

  const { zuid: instanceZUID } = router.query;

  const roleData = customRoles?.find((role) => role.ZUID === ZUID);
  const [granularRoles, setGranularRoles] = useState<Partial<GranularRole>[]>(
    [],
  );

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

  useEffect(() => {
    if (!ZUID) return;

    getPermissions(ZUID);
  }, [ZUID]);

  const getPermissions = async (ZUID: string) => {
    const res = await ZestyAPI.getAllGranularRoles(ZUID);

    if (res.error) {
      ErrorMsg({ text: res.error });
      setGranularRoles([]);
    } else {
      setGranularRoles(res.data);
    }
  };

  const handleSave = () => {
    switch (activeTab) {
      case 'details':
        setIsSaving(true);
        updateRole({
          roleZUID: ZUID,
          name: detailsData.name?.replace(/[^\w\s\n]/g, ''),
          description: detailsData.description?.replace(/[^\w\s\n]/g, ''),
        })
          .then(() => getRoles(String(instanceZUID)))
          .finally(() => setIsSaving(false));
        break;

      case 'permissions':
        setIsSaving(true);
        // Check role if granularRoleZUID already exists
        // If yes, just use PUT and pass in the array of roles in body
        // If no, check granularRoles array length
        // If more than 1, use the first role for a POST request to generate a new granularRoleZUID
        // Once api call above is done, perform PUT for all the remaining roles if any
        // If just 1, just do a POST request first to generate a new granularRoleZUID

        const payload = granularRoles?.map((role) => ({
          resourceZUID: role.resourceZUID,
          create: role.create,
          read: role.read,
          update: role.update,
          delete: role.delete,
          publish: role.publish,
          grant: false,
          name: '',
        }));

        updateGranularRole({ roleZUID: ZUID, granularRoles: payload })
          .then(() => getPermissions(ZUID))
          .finally(() => setIsSaving(false));
        break;

      case 'users':
        break;

      default:
        break;
    }
  };

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
        {activeTab === 'permissions' && (
          <Permissions
            granularRoles={granularRoles}
            onAddNewGranularRole={(newRoleData) => {
              setGranularRoles((prev) => [...prev, newRoleData]);
            }}
            onUpdateGranularRole={(updatedRoleData) => {
              setGranularRoles((prevState) => {
                try {
                  const granularRolesClone: GranularRole[] = JSON.parse(
                    JSON.stringify(prevState),
                  );
                  const index = granularRolesClone?.findIndex(
                    (role) =>
                      role.resourceZUID === updatedRoleData?.resourceZUID,
                  );

                  if (index === -1) return prevState;

                  granularRolesClone[index] = {
                    ...granularRolesClone[index],
                    ...updatedRoleData,
                  };

                  return granularRolesClone;
                } catch (err) {
                  console.error(err);
                }
              });
            }}
          />
        )}
        {activeTab === 'users' && <Users />}
      </DialogContent>
      <DialogActions
        sx={{ p: 2.5, gap: 1, borderTop: '2px solid', borderColor: 'border' }}
      >
        <Button variant="outlined" color="inherit" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <LoadingButton
          loading={isSaving}
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
