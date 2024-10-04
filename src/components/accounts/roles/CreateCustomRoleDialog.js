import { useMemo, useReducer } from 'react';
import {
  Typography,
  Avatar,
  Stack,
  Box,
  TextField,
  Autocomplete,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  InputLabel,
  Tooltip,
} from '@mui/material';
import { LocalPoliceOutlined, Close, InfoRounded } from '@mui/icons-material';

import { useRoles } from 'store/roles';

export const CreateCustomRoleDialog = ({ onClose }) => {
  const { baseRoles } = useRoles((state) => state);
  const [fieldData, updateFieldData] = useReducer(
    (state, data) => {
      return {
        ...state,
        ...data,
      };
    },
    {
      name: '',
      description: '',
      systemRoleZUID: '31-71cfc74-4dm13',
    },
  );

  const baseRoleOptions = useMemo(() => {
    if (!baseRoles?.length) return [];

    return baseRoles
      ?.filter((role) => role.name.toLowerCase() !== 'owner')
      ?.map((role) => ({
        label: role.name,
        value: role.systemRoleZUID,
      }));
  }, [baseRoles]);

  return (
    <Dialog
      open
      fullWidth
      onClose={() => onClose?.()}
      PaperProps={{
        sx: {
          maxWidth: 960,
          width: 960,
        },
      }}
    >
      <Stack
        direction="row"
        p={2.5}
        height={86}
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
              Create Custom Role
            </Typography>
            <Typography variant="body3" fontWeight={600} color="text.secondary">
              Creates a custom role that can have granular permissions applied
              to it
            </Typography>
          </Box>
        </Stack>
        <IconButton size="small" onClick={() => onClose?.()}>
          <Close />
        </IconButton>
      </Stack>
      <DialogContent
        sx={{
          p: 2.5,
          bgcolor: 'grey.50',
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        <Box>
          <Stack direction="row" alignItems="center" gap={1} mb={0.5}>
            <InputLabel sx={{ mb: 0 }}>Role Name</InputLabel>
            <Tooltip title="Lorem Ipsum" placement="right">
              <InfoRounded color="action" sx={{ fontSize: 12 }} />
            </Tooltip>
          </Stack>
          <TextField
            value={fieldData.name}
            onChange={(evt) => updateFieldData({ name: evt.target.value })}
            placeholder="e.g. Lawyer"
            fullWidth
          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" gap={1} mb={0.5}>
            <InputLabel sx={{ mb: 0 }}>Role Description</InputLabel>
            <Tooltip title="Lorem Ipsum" placement="right">
              <InfoRounded color="action" sx={{ fontSize: 12 }} />
            </Tooltip>
          </Stack>
          <TextField
            value={fieldData.description}
            onChange={(evt) =>
              updateFieldData({ description: evt.target.value })
            }
            placeholder="What is this role going to be used for"
            multiline
            fullWidth
            rows={4}
          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" gap={1} mb={0.5}>
            <InputLabel sx={{ mb: 0 }}>Base Role</InputLabel>
            <Tooltip title="Lorem Ipsum" placement="right">
              <InfoRounded color="action" sx={{ fontSize: 12 }} />
            </Tooltip>
          </Stack>
          <Autocomplete
            disableClearable
            value={baseRoleOptions.find(
              (role) => role.value === fieldData.systemRoleZUID,
            )}
            onChange={(_, value) =>
              updateFieldData({ systemRoleZUID: value.value })
            }
            options={baseRoleOptions}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2.5, gap: 1 }}>
        <Button variant="outlined" color="inherit" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('create custom role')}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
