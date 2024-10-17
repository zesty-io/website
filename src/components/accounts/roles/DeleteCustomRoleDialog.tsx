import { useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  InputLabel,
  Autocomplete,
} from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import { useRoles } from 'store/roles';

type DeleteCustomRoleDialogProps = {
  ZUID: string;
  onClose: () => void;
};
export const DeleteCustomRoleDialog = ({
  ZUID,
  onClose,
}: DeleteCustomRoleDialogProps) => {
  const { customRoles, baseRoles } = useRoles((state) => state);

  const roleData = useMemo(() => {
    return customRoles?.find((role) => role.ZUID === ZUID);
  }, [ZUID, customRoles]);

  const roleOptions = useMemo(() => {
    const customRolesOpts = customRoles
      ?.filter((role) => role.ZUID !== ZUID)
      ?.map((role) => ({
        label: role.name,
        value: role.ZUID,
      }));
    const baseRolesOpts = baseRoles?.map((role) => ({
      label: role.name,
      value: role.ZUID,
    }));

    return [...customRolesOpts, ...baseRolesOpts];
  }, [customRoles, baseRoles]);

  const defaultBaseRole = baseRoles?.find(
    (role) => role.systemRoleZUID === roleData?.systemRoleZUID,
  );

  const [value, setValue] = useState<{ label: string; value: string }>(
    {
      label: defaultBaseRole?.name,
      value: defaultBaseRole?.ZUID,
    } || null,
  );

  return (
    <Dialog
      open
      onClose={() => onClose?.()}
      PaperProps={{ sx: { width: 480 } }}
    >
      <Box p={2.5} boxSizing="border-box">
        <Avatar sx={{ bgcolor: 'red.100' }}>
          <DeleteRounded color="error" />
        </Avatar>
        <Typography variant="h5" fontWeight={700} mt={1.5} mb={1}>
          Delete Custom Role:{' '}
          <Box component="span" fontWeight={400}>
            {roleData?.name || ''}
          </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This role and its permissions will be immediately deactivated. <br />
          Please reassign users currently assigned to this role to a new role.
        </Typography>
      </Box>
      <DialogContent>
        <InputLabel>Role to reassign users to</InputLabel>
        <Autocomplete
          disableClearable
          value={value}
          options={roleOptions}
          onChange={(_, value) => setValue(value)}
          renderInput={(params) => <TextField {...params} />}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="inherit" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <LoadingButton variant="contained" color="error">
          Delete Custom Role
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
